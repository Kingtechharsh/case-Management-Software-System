"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  DatabaseIcon,
  DownloadIcon,
  FolderIcon,
  LineChartIcon,
  PlusIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  TableIcon,
  TrashIcon,
  FileTextIcon,
  PieChartIcon,
} from "lucide-react"
import { DatePickerWithRange } from "@/app/reports/date-range-picker"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "@/components/ui/chart"

// Sample data for demonstration
const SAMPLE_DATA = {
  programs: [
    { id: "housing", name: "Housing Assistance" },
    { id: "employment", name: "Employment Services" },
    { id: "financial", name: "Financial Counseling" },
    { id: "education", name: "Education Support" },
    { id: "health", name: "Health Services" },
  ],
  dataFields: [
    { id: "enrollment_date", name: "Enrollment Date", type: "date" },
    { id: "completion_date", name: "Completion Date", type: "date" },
    { id: "status", name: "Status", type: "string" },
    { id: "progress", name: "Progress", type: "number" },
    { id: "income", name: "Income", type: "number" },
    { id: "household_size", name: "Household Size", type: "number" },
    { id: "age", name: "Age", type: "number" },
    { id: "gender", name: "Gender", type: "string" },
    { id: "ethnicity", name: "Ethnicity", type: "string" },
    { id: "location", name: "Location", type: "string" },
    { id: "referral_source", name: "Referral Source", type: "string" },
    { id: "service_hours", name: "Service Hours", type: "number" },
    { id: "case_manager", name: "Case Manager", type: "string" },
    { id: "documents_submitted", name: "Documents Submitted", type: "number" },
    { id: "appointments_attended", name: "Appointments Attended", type: "number" },
  ],
  savedReports: [
    { id: "report1", name: "Monthly Program Enrollment", type: "standard", lastRun: "2025-03-14" },
    { id: "report2", name: "Demographic Analysis Q1 2025", type: "custom", lastRun: "2025-03-10" },
    { id: "report3", name: "Program Completion Rates", type: "standard", lastRun: "2025-03-05" },
    { id: "report4", name: "Service Utilization by Location", type: "custom", lastRun: "2025-02-28" },
  ],
}

// Sample chart data
const sampleChartData = [
  { month: "Jan", housing: 65, employment: 40, financial: 24, education: 35, health: 28 },
  { month: "Feb", housing: 68, employment: 45, financial: 27, education: 37, health: 30 },
  { month: "Mar", housing: 75, employment: 48, financial: 30, education: 40, health: 34 },
  { month: "Apr", housing: 78, employment: 52, financial: 35, education: 42, health: 36 },
  { month: "May", housing: 82, employment: 55, financial: 39, education: 45, health: 38 },
  { month: "Jun", housing: 85, employment: 58, financial: 42, education: 48, health: 42 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8", "#82ca9d"]

export function AdvancedReportBuilder() {
  const [activeTab, setActiveTab] = useState("builder")
  const [reportName, setReportName] = useState("")
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([])
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [filters, setFilters] = useState<any[]>([])
  const [groupBy, setGroupBy] = useState("")
  const [sortBy, setSortBy] = useState("")
  const [sortDirection, setSortDirection] = useState("asc")
  const [chartType, setChartType] = useState("bar")
  const [showPreview, setShowPreview] = useState(false)
  const [savedReports, setSavedReports] = useState(SAMPLE_DATA.savedReports)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterLogic, setFilterLogic] = useState<"AND" | "OR">("AND")

  // Add a new filter
  const addFilter = () => {
    setFilters([...filters, { field: "", operator: "equals", value: "", id: Date.now() }])
  }

  // Remove a filter
  const removeFilter = (id: number) => {
    setFilters(filters.filter((filter) => filter.id !== id))
  }

  // Update a filter
  const updateFilter = (id: number, key: string, value: any) => {
    setFilters(filters.map((filter) => (filter.id === id ? { ...filter, [key]: value } : filter)))
  }

  // Toggle program selection
  const toggleProgram = (programId: string) => {
    if (selectedPrograms.includes(programId)) {
      setSelectedPrograms(selectedPrograms.filter((id) => id !== programId))
    } else {
      setSelectedPrograms([...selectedPrograms, programId])
    }
  }

  // Toggle field selection
  const toggleField = (fieldId: string) => {
    if (selectedFields.includes(fieldId)) {
      setSelectedFields(selectedFields.filter((id) => id !== fieldId))
    } else {
      setSelectedFields([...selectedFields, fieldId])
    }
  }

  // Save the current report
  const saveReport = () => {
    if (!reportName) return

    const newReport = {
      id: `report${savedReports.length + 1}`,
      name: reportName,
      type: "custom",
      lastRun: new Date().toISOString().split("T")[0],
    }

    setSavedReports([...savedReports, newReport])
    setReportName("")
  }

  // Generate the report
  const generateReport = () => {
    // Validate that required fields are selected
    if (selectedPrograms.length === 0) {
      alert("Please select at least one program")
      return
    }

    if (selectedFields.length === 0) {
      alert("Please select at least one data field")
      return
    }

    // Set loading state if needed
    setShowPreview(true)

    // In a real application, this would fetch data based on the selected parameters
    console.log("Generating report with:", {
      programs: selectedPrograms,
      fields: selectedFields,
      filters,
      filterLogic,
      groupBy,
      sortBy,
      sortDirection,
      chartType,
    })

    // You could add additional logic here to fetch data from an API
    // For example:
    // fetchReportData({
    //   programs: selectedPrograms,
    //   fields: selectedFields,
    //   filters,
    //   filterLogic,
    // }).then(data => {
    //   // Process the data
    //   setShowPreview(true);
    // }).catch(error => {
    //   console.error("Error generating report:", error);
    //   alert("Failed to generate report. Please try again.");
    // });
  }

  // Filter saved reports based on search query
  const filteredReports = savedReports.filter((report) => report.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="flex flex-col space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Advanced Report Builder</h2>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setActiveTab("saved")}>
            <FolderIcon className="h-4 w-4 mr-2" />
            Saved Reports
          </Button>
          <Button variant="outline" onClick={() => setActiveTab("builder")}>
            <DatabaseIcon className="h-4 w-4 mr-2" />
            Report Builder
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="builder">Report Builder</TabsTrigger>
          <TabsTrigger value="saved">Saved Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="builder" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Create Custom Report</CardTitle>
              <CardDescription>Select data sources, fields, and filters to build your report</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Report Name */}
              <div>
                <Label htmlFor="report-name">Report Name</Label>
                <Input
                  id="report-name"
                  placeholder="Enter report name"
                  value={reportName}
                  onChange={(e) => setReportName(e.target.value)}
                  className="mt-1"
                />
              </div>

              {/* Data Sources */}
              <div>
                <h3 className="text-lg font-medium mb-2">Data Sources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {SAMPLE_DATA.programs.map((program) => (
                    <div key={program.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`program-${program.id}`}
                        checked={selectedPrograms.includes(program.id)}
                        onCheckedChange={() => toggleProgram(program.id)}
                      />
                      <Label htmlFor={`program-${program.id}`}>{program.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Fields */}
              <div>
                <h3 className="text-lg font-medium mb-2">Data Fields</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {SAMPLE_DATA.dataFields.map((field) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`field-${field.id}`}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => toggleField(field.id)}
                      />
                      <Label htmlFor={`field-${field.id}`}>{field.name}</Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Filters */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-medium">Filters</h3>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Label htmlFor="filter-logic">Filter Logic:</Label>
                      <Select value={filterLogic} onValueChange={(value: "AND" | "OR") => setFilterLogic(value)}>
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Logic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AND">AND</SelectItem>
                          <SelectItem value="OR">OR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={addFilter} size="sm">
                      <PlusIcon className="h-4 w-4 mr-2" />
                      Add Filter
                    </Button>
                  </div>
                </div>

                {filters.length > 0 ? (
                  <div className="space-y-3">
                    {filters.map((filter, index) => (
                      <div key={filter.id} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                        <Select value={filter.field} onValueChange={(value) => updateFilter(filter.id, "field", value)}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select field" />
                          </SelectTrigger>
                          <SelectContent>
                            {SAMPLE_DATA.dataFields.map((field) => (
                              <SelectItem key={field.id} value={field.id}>
                                {field.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Select
                          value={filter.operator}
                          onValueChange={(value) => updateFilter(filter.id, "operator", value)}
                        >
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Operator" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="equals">Equals</SelectItem>
                            <SelectItem value="not_equals">Not Equals</SelectItem>
                            <SelectItem value="greater_than">Greater Than</SelectItem>
                            <SelectItem value="less_than">Less Than</SelectItem>
                            <SelectItem value="contains">Contains</SelectItem>
                            <SelectItem value="starts_with">Starts With</SelectItem>
                            <SelectItem value="ends_with">Ends With</SelectItem>
                            <SelectItem value="between">Between</SelectItem>
                            <SelectItem value="in">In List</SelectItem>
                          </SelectContent>
                        </Select>

                        <Input
                          placeholder="Value"
                          value={filter.value}
                          onChange={(e) => updateFilter(filter.id, "value", e.target.value)}
                          className="flex-1"
                        />

                        <Button variant="ghost" size="icon" onClick={() => removeFilter(filter.id)}>
                          <TrashIcon className="h-4 w-4 text-red-500" />
                        </Button>

                        {index < filters.length - 1 && <Badge variant="outline">{filterLogic}</Badge>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 bg-gray-50 rounded-md">
                    <p className="text-gray-500">No filters added. Click "Add Filter" to create one.</p>
                  </div>
                )}
              </div>

              {/* Group By & Sort */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="group-by">Group By</Label>
                  <Select value={groupBy} onValueChange={setGroupBy}>
                    <SelectTrigger id="group-by" className="mt-1">
                      <SelectValue placeholder="Select field to group by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      {SAMPLE_DATA.dataFields.map((field) => (
                        <SelectItem key={field.id} value={field.id}>
                          {field.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex space-x-2">
                  <div className="flex-1">
                    <Label htmlFor="sort-by">Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger id="sort-by" className="mt-1">
                        <SelectValue placeholder="Select field to sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        {SAMPLE_DATA.dataFields.map((field) => (
                          <SelectItem key={field.id} value={field.id}>
                            {field.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="w-32">
                    <Label htmlFor="sort-direction">Direction</Label>
                    <Select value={sortDirection} onValueChange={setSortDirection} disabled={!sortBy}>
                      <SelectTrigger id="sort-direction" className="mt-1">
                        <SelectValue placeholder="Order" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asc">
                          <div className="flex items-center">
                            <ArrowUpIcon className="h-4 w-4 mr-2" />
                            Ascending
                          </div>
                        </SelectItem>
                        <SelectItem value="desc">
                          <div className="flex items-center">
                            <ArrowDownIcon className="h-4 w-4 mr-2" />
                            Descending
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Visualization */}
              <div>
                <h3 className="text-lg font-medium mb-2">Visualization</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="chart-bar"
                      checked={chartType === "bar"}
                      onCheckedChange={() => setChartType("bar")}
                    />
                    <Label htmlFor="chart-bar">Bar Chart</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="chart-line"
                      checked={chartType === "line"}
                      onCheckedChange={() => setChartType("line")}
                    />
                    <Label htmlFor="chart-line">Line Chart</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="chart-pie"
                      checked={chartType === "pie"}
                      onCheckedChange={() => setChartType("pie")}
                    />
                    <Label htmlFor="chart-pie">Pie Chart</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="chart-area"
                      checked={chartType === "area"}
                      onCheckedChange={() => setChartType("area")}
                    />
                    <Label htmlFor="chart-area">Area Chart</Label>
                  </div>
                </div>
              </div>

              {/* Date Range */}
              <div>
                <Label>Date Range</Label>
                <div className="mt-1">
                  <DatePickerWithRange />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedPrograms([])
                    setSelectedFields([])
                    setFilters([])
                    setGroupBy("")
                    setSortBy("")
                    setSortDirection("asc")
                    setChartType("bar")
                  }}
                >
                  Reset
                </Button>
                <Button variant="outline" onClick={saveReport} disabled={!reportName}>
                  <SaveIcon className="h-4 w-4 mr-2" />
                  Save Report
                </Button>
              </div>
              <Button
                onClick={generateReport}
                disabled={selectedPrograms.length === 0 || selectedFields.length === 0}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 shadow-sm transition-all hover:shadow"
              >
                <LineChartIcon className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </CardFooter>
          </Card>

          {/* Report Preview */}
          {showPreview && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Report Preview</CardTitle>
                    <CardDescription>
                      {reportName || "Custom Report"} - Generated on {new Date().toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <DownloadIcon className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <ShareIcon className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="chart">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="chart">
                      <LineChartIcon className="h-4 w-4 mr-2" />
                      Chart View
                    </TabsTrigger>
                    <TabsTrigger value="table">
                      <TableIcon className="h-4 w-4 mr-2" />
                      Table View
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="chart">
                    <div className="h-80">
                      {chartType === "bar" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={sampleChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {selectedPrograms.map((program, index) => (
                              <Bar
                                key={program}
                                dataKey={program}
                                fill={COLORS[index % COLORS.length]}
                                name={SAMPLE_DATA.programs.find((p) => p.id === program)?.name}
                              />
                            ))}
                          </BarChart>
                        </ResponsiveContainer>
                      )}

                      {chartType === "line" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={sampleChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {selectedPrograms.map((program, index) => (
                              <Line
                                key={program}
                                type="monotone"
                                dataKey={program}
                                stroke={COLORS[index % COLORS.length]}
                                name={SAMPLE_DATA.programs.find((p) => p.id === program)?.name}
                              />
                            ))}
                          </LineChart>
                        </ResponsiveContainer>
                      )}

                      {chartType === "area" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={sampleChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {selectedPrograms.map((program, index) => (
                              <Area
                                key={program}
                                type="monotone"
                                dataKey={program}
                                fill={COLORS[index % COLORS.length]}
                                stroke={COLORS[index % COLORS.length]}
                                name={SAMPLE_DATA.programs.find((p) => p.id === program)?.name}
                              />
                            ))}
                          </AreaChart>
                        </ResponsiveContainer>
                      )}

                      {chartType === "pie" && (
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={selectedPrograms.map((program, index) => ({
                                name: SAMPLE_DATA.programs.find((p) => p.id === program)?.name,
                                value: Math.floor(Math.random() * 100) + 20, // Random value for demo
                              }))}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {selectedPrograms.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="table">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Month</th>
                            {selectedPrograms.map((program) => (
                              <th key={program} className="border p-2 text-left">
                                {SAMPLE_DATA.programs.find((p) => p.id === program)?.name}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {sampleChartData.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="border p-2">{row.month}</td>
                              {selectedPrograms.map((program) => (
                                <td key={program} className="border p-2">
                                  {row[program as keyof typeof row]}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Report Summary</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        This report includes data from {selectedPrograms.length} program(s):
                        {selectedPrograms
                          .map((p) => SAMPLE_DATA.programs.find((prog) => prog.id === p)?.name)
                          .join(", ")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        {filters.length > 0
                          ? `Applied ${filters.length} filter(s) with ${filterLogic} logic`
                          : "No filters applied"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        {groupBy
                          ? `Data grouped by ${SAMPLE_DATA.dataFields.find((f) => f.id === groupBy)?.name}`
                          : "No grouping applied"}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>
                        {sortBy
                          ? `Sorted by ${SAMPLE_DATA.dataFields.find((f) => f.id === sortBy)?.name} (${sortDirection === "asc" ? "Ascending" : "Descending"})`
                          : "No sorting applied"}
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="saved" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Saved Reports</CardTitle>
                  <CardDescription>Access and manage your saved reports</CardDescription>
                </div>
                <div className="relative w-64">
                  <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search reports..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>

            <CardContent>
              {filteredReports.length > 0 ? (
                <div className="space-y-4">
                  {filteredReports.map((report) => (
                    <div
                      key={report.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <FileTextIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{report.name}</h4>
                          <p className="text-sm text-gray-500">
                            {report.type === "standard" ? "Standard Report" : "Custom Report"} • Last run:{" "}
                            {report.lastRun}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <LineChartIcon className="h-4 w-4 mr-2" />
                          Run
                        </Button>
                        <Button variant="ghost" size="sm">
                          <SettingsIcon className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm">
                          <DownloadIcon className="h-4 w-4 mr-2" />
                          Export
                        </Button>
                        <Button variant="ghost" size="sm">
                          <TrashIcon className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileTextIcon className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No reports found</h3>
                  <p className="text-gray-500">
                    {searchQuery ? `No reports matching "${searchQuery}"` : "You haven't created any reports yet"}
                  </p>
                  {searchQuery && (
                    <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                      Clear Search
                    </Button>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
              <CardDescription>Start with pre-configured report templates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <LineChartIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium">Program Enrollment Trends</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Track enrollment across all programs over time with demographic breakdowns.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <PieChartIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <h4 className="font-medium">Service Utilization Analysis</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Analyze which services are most utilized and by which demographic groups.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <TableIcon className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium">Outcome Tracking Dashboard</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Comprehensive dashboard for tracking program outcomes and success metrics.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

