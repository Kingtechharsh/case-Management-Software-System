"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DownloadIcon, LineChartIcon, PieChartIcon } from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"

export function DashboardReportWidget() {
  const [reportType, setReportType] = useState("progress")
  const [timeRange, setTimeRange] = useState("6months")

  // Sample data for charts
  const progressData = [
    { month: "Oct", progress: 30 },
    { month: "Nov", progress: 40 },
    { month: "Dec", progress: 45 },
    { month: "Jan", progress: 55 },
    { month: "Feb", progress: 65 },
    { month: "Mar", progress: 75 },
  ]

  const serviceUsageData = [
    { name: "Housing Assistance", value: 45 },
    { name: "Financial Counseling", value: 25 },
    { name: "Job Training", value: 20 },
    { name: "Other Services", value: 10 },
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

  const generateReport = () => {
    // In a real application, this would fetch data based on the selected parameters
    console.log(`Generating ${reportType} report for ${timeRange} time range`)
  }

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Program Progress Report</CardTitle>
            <CardDescription>Track your progress and service usage</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <DownloadIcon className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 block mb-1">Report Type</label>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger>
                <SelectValue placeholder="Select report type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="progress">Program Progress</SelectItem>
                <SelectItem value="services">Service Usage</SelectItem>
                <SelectItem value="outcomes">Outcomes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 block mb-1">Time Range</label>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger>
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button onClick={generateReport}>Generate</Button>
          </div>
        </div>

        <Tabs defaultValue="chart" className="mt-4">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="chart">
              <LineChartIcon className="h-4 w-4 mr-2" />
              Chart View
            </TabsTrigger>
            <TabsTrigger value="breakdown">
              <PieChartIcon className="h-4 w-4 mr-2" />
              Breakdown
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chart">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={progressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="progress"
                    stroke="#3b82f6"
                    fill="#93c5fd"
                    name="Program Progress (%)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 bg-blue-50 p-3 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-1">Key Insight</h4>
              <p className="text-sm text-gray-700">
                Your program progress has increased by 45% over the last 6 months, which is above the average rate of
                30%.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="breakdown">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={serviceUsageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {serviceUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="font-medium text-gray-900 mb-3">Service Usage Breakdown</h4>
                <ul className="space-y-2">
                  {serviceUsageData.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></span>
                      <span className="text-sm">
                        {item.name}: {item.value}%
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Housing Assistance remains your most utilized service, followed by Financial Counseling.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

