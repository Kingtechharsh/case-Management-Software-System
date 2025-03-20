"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  BellIcon,
  CheckCircleIcon,
  DownloadIcon,
  FilterIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
  UsersIcon,
  EyeIcon,
  BarChart2Icon,
  CalendarIcon,
  ClipboardListIcon,
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "@/components/ui/chart"
import { TooltipProvider } from "@/components/ui/tooltip"
import { useState } from "react"

// Sample data for demonstration
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

const participationData = [
  { month: "Jan", residents: 65, nonResidents: 40 },
  { month: "Feb", residents: 68, nonResidents: 45 },
  { month: "Mar", residents: 75, nonResidents: 48 },
  { month: "Apr", residents: 78, nonResidents: 52 },
  { month: "May", residents: 82, nonResidents: 55 },
  { month: "Jun", residents: 85, nonResidents: 58 },
]

const programDistributionData = [
  { name: "Housing Assistance", value: 45, count: 124 },
  { name: "Financial Counseling", value: 25, count: 68 },
  { name: "Job Training", value: 20, count: 55 },
  { name: "Education Support", value: 10, count: 27 },
]

const residentData = [
  {
    id: "R10045",
    name: "Sarah Johnson",
    status: "Active",
    enrollmentDate: "2025-01-15",
    programs: ["Housing Assistance", "Financial Counseling"],
    attendance: "92%",
    caseManager: "Maria Rodriguez",
    location: "Taylorville, IL",
  },
  {
    id: "R10046",
    name: "Michael Brown",
    status: "Active",
    enrollmentDate: "2025-01-22",
    programs: ["Housing Assistance", "Job Training"],
    attendance: "85%",
    caseManager: "John Smith",
    location: "Pana, IL",
  },
  {
    id: "R10047",
    name: "Emily Davis",
    status: "Active",
    enrollmentDate: "2025-02-03",
    programs: ["Housing Assistance"],
    attendance: "78%",
    caseManager: "Maria Rodriguez",
    location: "O'Fallon, IL",
  },
  {
    id: "R10048",
    name: "David Wilson",
    status: "Inactive",
    enrollmentDate: "2025-01-10",
    programs: ["Housing Assistance", "Education Support"],
    attendance: "45%",
    caseManager: "John Smith",
    location: "Jerseyville, IL",
  },
]

const nonResidentData = [
  {
    id: "N20045",
    name: "Jennifer Martinez",
    status: "Active",
    enrollmentDate: "2025-02-10",
    programs: ["Financial Counseling", "Job Training"],
    attendance: "88%",
    caseManager: "Maria Rodriguez",
    location: "Carlyle, IL",
  },
  {
    id: "N20046",
    name: "Robert Taylor",
    status: "Active",
    enrollmentDate: "2025-02-15",
    programs: ["Job Training"],
    attendance: "95%",
    caseManager: "John Smith",
    location: "Taylorville, IL",
  },
  {
    id: "N20047",
    name: "Lisa Anderson",
    status: "Active",
    enrollmentDate: "2025-03-01",
    programs: ["Financial Counseling", "Education Support"],
    attendance: "82%",
    caseManager: "Maria Rodriguez",
    location: "Pana, IL",
  },
]

// Property details data
const propertyDetails = {
  "diamond-apartments": {
    name: "Diamond Apartments",
    location: "Jerseyville IL",
    manager: "Hunter Seaton",
    residents: 24,
    enrollmentRate: "78%",
    attendance: "82%",
    features: ["Community Room", "Fitness Center", "Laundry Facilities"],
    programs: ["Financial Literacy", "Health & Wellness", "Computer Skills"],
    maintenanceRequests: 5,
    upcomingEvents: 3,
  },
  "hershey-towers": {
    name: "Hershey Towers / Senior Village",
    location: "Taylorville IL",
    manager: "Brent Milburn",
    residents: 36,
    enrollmentRate: "85%",
    attendance: "79%",
    features: ["Senior Activities", "Dining Hall", "Transportation Services"],
    programs: ["Health Screenings", "Social Activities", "Meal Program"],
    maintenanceRequests: 8,
    upcomingEvents: 5,
  },
  "hickory-estates-taylorville": {
    name: "Hickory Estates of Taylorville",
    location: "Taylorville IL",
    manager: "Debra Moon",
    residents: 29,
    enrollmentRate: "72%",
    attendance: "81%",
    features: ["Garden Area", "Community Kitchen", "Library"],
    programs: ["Gardening Club", "Book Club", "Cooking Classes"],
    maintenanceRequests: 3,
    upcomingEvents: 4,
  },
}

export default function EnrollmentTrackingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [programFilter, setProgramFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("active")
  const [propertyFilter, setPropertyFilter] = useState("all-properties")
  const [locationFilter, setLocationFilter] = useState("all-locations")
  const [activeTab, setActiveTab] = useState("all")

  const handleProgramFilterChange = (value: string) => {
    setProgramFilter(value)
  }

  const handleStatusFilterChange = (value: string) => {
    setStatusFilter(value)
  }

  const handlePropertyFilterChange = (value: string) => {
    setPropertyFilter(value)
  }

  const handleLocationFilterChange = (value: string) => {
    setLocationFilter(value)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const filteredResidentData = residentData.filter((participant) => {
    // Search term filter
    const matchesSearch =
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.programs.some((program) => program.toLowerCase().includes(searchTerm.toLowerCase())) ||
      participant.caseManager.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.location.toLowerCase().includes(searchTerm.toLowerCase())

    // Program filter
    const matchesProgram =
      programFilter === "all" ||
      participant.programs.some((program) => {
        if (programFilter === "housing") return program === "Housing Assistance"
        if (programFilter === "financial") return program === "Financial Counseling"
        if (programFilter === "job") return program === "Job Training"
        if (programFilter === "education") return program === "Education Support"
        return false
      })

    // Status filter
    const matchesStatus = statusFilter === "all" || participant.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesProgram && matchesStatus
  })

  const filteredNonResidentData = nonResidentData.filter((participant) => {
    // Search term filter
    const matchesSearch =
      participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.programs.some((program) => program.toLowerCase().includes(searchTerm.toLowerCase())) ||
      participant.caseManager.toLowerCase().includes(searchTerm.toLowerCase()) ||
      participant.location.toLowerCase().includes(searchTerm.toLowerCase())

    // Program filter
    const matchesProgram =
      programFilter === "all" ||
      participant.programs.some((program) => {
        if (programFilter === "housing") return program === "Housing Assistance"
        if (programFilter === "financial") return program === "Financial Counseling"
        if (programFilter === "job") return program === "Job Training"
        if (programFilter === "education") return program === "Education Support"
        return false
      })

    // Status filter
    const matchesStatus = statusFilter === "all" || participant.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesProgram && matchesStatus
  })

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HomeIcon className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ResidentConnectPortal</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
                Back to Website
              </Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">
                Dashboard
              </Link>
              <Link href="/forms" className="text-gray-600 hover:text-blue-600 font-medium">
                Forms
              </Link>
              <Link href="/documents" className="text-gray-600 hover:text-blue-600 font-medium">
                Documents
              </Link>
              <Link href="/messages" className="text-gray-600 hover:text-blue-600 font-medium">
                Messages
              </Link>
              <Link href="/enrollment-tracking" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
                Enrollment Tracking
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-blue-600 font-medium">
                Support
              </Link>
              <Link href="/profile" className="text-gray-600 hover:text-blue-600 font-medium">
                Profile
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <UserIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Enrollment & Participation Tracking</h1>
              <p className="text-gray-600">
                Monitor program enrollment and participation for residents and non-residents
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline">
                <FilterIcon className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Total Enrollments</p>
                    <p className="text-3xl font-bold text-gray-900">274</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <UsersIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    12%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Resident Enrollments</p>
                    <p className="text-3xl font-bold text-gray-900">185</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <HomeIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    8%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Non-Resident Enrollments</p>
                    <p className="text-3xl font-bold text-gray-900">89</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <UserIcon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    15%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Average Attendance</p>
                    <p className="text-3xl font-bold text-gray-900">84%</p>
                  </div>
                  <div className="bg-amber-100 p-3 rounded-full">
                    <CheckCircleIcon className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-green-600 font-medium flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                    3%
                  </span>
                  <span className="text-gray-500 ml-2">from last month</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Enrollment Trends</CardTitle>
                <CardDescription>Monthly enrollment comparison between residents and non-residents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={participationData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="residents"
                        stackId="1"
                        stroke="#0088FE"
                        fill="#0088FE"
                        name="Residents"
                      />
                      <Area
                        type="monotone"
                        dataKey="nonResidents"
                        stackId="1"
                        stroke="#00C49F"
                        fill="#00C49F"
                        name="Non-Residents"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program Distribution</CardTitle>
                <CardDescription>Enrollment breakdown by program type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={programDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {programDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-medium text-gray-900 mb-3">Program Enrollment Breakdown</h4>
                    <ul className="space-y-2">
                      {programDistributionData.map((item, index) => (
                        <li key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span
                              className="w-3 h-3 rounded-full mr-2"
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></span>
                            <span className="text-sm">{item.name}</span>
                          </div>
                          <span className="text-sm font-medium">{item.count} participants</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Participant Tables */}
          <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-gray-100/50 p-1 rounded-lg">
              <TabsTrigger value="all" className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-gray-50/30 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity"></div>
                <span>All Participants</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600 transform scale-x-0 group-data-[state=active]:scale-x-100 transition-transform origin-left"></div>
              </TabsTrigger>

              <TabsTrigger value="residents" className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-green-50/30 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity"></div>
                <span>Residents</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 transform scale-x-0 group-data-[state=active]:scale-x-100 transition-transform origin-left"></div>
              </TabsTrigger>

              <TabsTrigger value="nonresidents" className="relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-50/30 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity"></div>
                <span>Non-Residents</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 transform scale-x-0 group-data-[state=active]:scale-x-100 transition-transform origin-left"></div>
              </TabsTrigger>

              <TabsTrigger value="properties" className="flex items-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-50/30 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1 group-data-[state=active]:text-blue-600"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>By Property</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transform scale-x-0 group-data-[state=active]:scale-x-100 transition-transform origin-left"></div>
              </TabsTrigger>

              <TabsTrigger value="locations" className="flex items-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/50 to-emerald-50/30 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-100 transition-opacity"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-1 group-data-[state=active]:text-emerald-600"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>By Location</span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 transform scale-x-0 group-data-[state=active]:scale-x-100 transition-transform origin-left"></div>
              </TabsTrigger>
            </TabsList>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative">
                  <Select defaultValue="all" value={programFilter} onValueChange={handleProgramFilterChange}>
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder="Program Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Programs</SelectItem>
                      <SelectItem value="housing">Housing Assistance</SelectItem>
                      <SelectItem value="financial">Financial Counseling</SelectItem>
                      <SelectItem value="job">Job Training</SelectItem>
                      <SelectItem value="education">Education Support</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-500">Program</span>
                </div>

                <div className="relative">
                  <Select defaultValue="active" value={statusFilter} onValueChange={handleStatusFilterChange}>
                    <SelectTrigger className="w-[180px] bg-white">
                      <SelectValue placeholder="Status Filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-500">Status</span>
                </div>

                {/* Property filter - only visible on the properties tab */}
                {activeTab === "properties" && (
                  <div className="relative">
                    <Select
                      defaultValue="all-properties"
                      value={propertyFilter}
                      onValueChange={handlePropertyFilterChange}
                    >
                      <SelectTrigger className="w-[280px] bg-white">
                        <SelectValue placeholder="Select Property" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-properties">All Properties</SelectItem>
                        <SelectItem value="diamond-apartments">Diamond Apartments - Jerseyville IL</SelectItem>
                        <SelectItem value="hershey-towers">Hershey Towers / Senior Village - Taylorville IL</SelectItem>
                        <SelectItem value="hickory-estates-taylorville">
                          Hickory Estates of Taylorville - Taylorville IL
                        </SelectItem>
                        <SelectItem value="hickory-estates-pana">Hickory Estates of Pana - Pana IL</SelectItem>
                        <SelectItem value="hickory-estates-pana-memory">
                          Hickory Estates of Pana Memory Care - Pana IL
                        </SelectItem>
                        <SelectItem value="pana-towers">Pana Towers - Pana IL</SelectItem>
                        <SelectItem value="lincoln-park-villas">Lincoln Park Villas - O'Fallon IL</SelectItem>
                        <SelectItem value="chevy-chase-apartments">Chevy Chase Apartments - O'Fallon IL</SelectItem>
                        <SelectItem value="lakeside-villas">Lakeside Villas - Carlyle IL</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-500">Property</span>
                  </div>
                )}

                {/* Location filter - only visible on the locations tab */}
                {activeTab === "locations" && (
                  <div className="relative">
                    <Select
                      defaultValue="all-locations"
                      value={locationFilter}
                      onValueChange={handleLocationFilterChange}
                    >
                      <SelectTrigger className="w-[280px] bg-white">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all-locations">All Locations</SelectItem>
                        <SelectItem value="jerseyville">Jerseyville, IL</SelectItem>
                        <SelectItem value="taylorville">Taylorville, IL</SelectItem>
                        <SelectItem value="pana">Pana, IL</SelectItem>
                        <SelectItem value="ofallon">O'Fallon, IL</SelectItem>
                        <SelectItem value="carlyle">Carlyle, IL</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-500">Location</span>
                  </div>
                )}
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-1 h-10 bg-white"
                  onClick={() => {
                    setProgramFilter("all");
                    setStatusFilter("all");
                    setPropertyFilter("all-properties");
                    setLocationFilter("all-locations");
                    setSearchTerm("");
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
                    <path d="M21 3v5h-5"></path>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
                    <path d="M3 21v-5h5"></path>
                  </svg>
                  Reset
                </Button>
              </div>

              <div className="relative w-full md:w-64">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search by name, ID, program, location..."
                  className={`pl-10 pr-10 bg-white border ${searchTerm ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-200"}`}
                  value={searchTerm}
                  onChange={handleSearch}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setSearchTerm("");
                    }
                  }}
                />
                {searchTerm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm("")}
                  >
                    <span className="sr-only">Clear search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </Button>
                )}
                <span className="absolute -top-2 left-2 text-xs font-medium bg-white px-1 text-gray-500">Search</span>
              </div>
            </div>

            <TabsContent value="all">
              {searchTerm && [...filteredResidentData, ...filteredNonResidentData].length === 0 && (
                <div className="p-8 text-center bg-white rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <SearchIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-4">We couldn't find any participants matching "{searchTerm}"</p>
                  <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[...filteredResidentData, ...filteredNonResidentData].map((participant) => (
                  <Card key={participant.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <CardHeader
                      className={`py-3 px-4 flex flex-row items-center justify-between ${
                        participant.id.startsWith("R") ? "bg-blue-50" : "bg-purple-50"
                      }`}
                    >
                      <div>
                        <CardTitle className="text-base font-medium">{participant.name}</CardTitle>
                        <CardDescription className="text-xs">{participant.id}</CardDescription>
                      </div>
                      <Badge variant={participant.id.startsWith("R") ? "default" : "secondary"} className="ml-2">
                        {participant.id.startsWith("R") ? "Resident" : "Non-Resident"}
                      </Badge>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Status</p>
                          <Badge
                            variant={participant.status === "Active" ? "outline" : "destructive"}
                            className={
                              participant.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {participant.status}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Location</p>
                          <p className="text-sm font-medium">{participant.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Enrollment Date</p>
                          <p className="text-sm font-medium">
                            {new Date(participant.enrollmentDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Attendance</p>
                          <p className="text-sm font-medium">{participant.attendance}</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Programs</p>
                        <div className="flex flex-wrap gap-1">
                          {participant.programs.map((program, idx) => (
                            <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Case Manager</p>
                        <p className="text-sm font-medium">{participant.caseManager}</p>
                      </div>

                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="residents">
              {searchTerm && filteredResidentData.length === 0 && (
                <div className="p-8 text-center bg-white rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <SearchIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-4">
                    We couldn't find any resident participants matching "{searchTerm}"
                  </p>
                  <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredResidentData.map((participant) => (
                  <Card key={participant.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="py-3 px-4 flex flex-row items-center justify-between bg-green-50">
                      <div>
                        <CardTitle className="text-base font-medium">{participant.name}</CardTitle>
                        <CardDescription className="text-xs">{participant.id}</CardDescription>
                      </div>
                      <HomeIcon className="h-5 w-5 text-green-600" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Status</p>
                          <Badge
                            variant={participant.status === "Active" ? "outline" : "destructive"}
                            className={
                              participant.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {participant.status}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Location</p>
                          <p className="text-sm font-medium">{participant.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Enrollment Date</p>
                          <p className="text-sm font-medium">
                            {new Date(participant.enrollmentDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Attendance</p>
                          <p className="text-sm font-medium">{participant.attendance}</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Programs</p>
                        <div className="flex flex-wrap gap-1">
                          {participant.programs.map((program, idx) => (
                            <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Case Manager</p>
                        <p className="text-sm font-medium">{participant.caseManager}</p>
                      </div>

                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nonresidents">
              {searchTerm && filteredNonResidentData.length === 0 && (
                <div className="p-8 text-center bg-white rounded-lg shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <SearchIcon className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-500 mb-4">
                    We couldn't find any non-resident participants matching "{searchTerm}"
                  </p>
                  <Button onClick={() => setSearchTerm("")}>Clear Search</Button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nonResidentData.map((participant) => (
                  <Card key={participant.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="py-3 px-4 flex flex-row items-center justify-between bg-purple-50">
                      <div>
                        <CardTitle className="text-base font-medium">{participant.name}</CardTitle>
                        <CardDescription className="text-xs">{participant.id}</CardDescription>
                      </div>
                      <UserIcon className="h-5 w-5 text-purple-600" />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Status</p>
                          <Badge
                            variant={participant.status === "Active" ? "outline" : "destructive"}
                            className={
                              participant.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {participant.status}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Location</p>
                          <p className="text-sm font-medium">{participant.location}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Enrollment Date</p>
                          <p className="text-sm font-medium">
                            {new Date(participant.enrollmentDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">Attendance</p>
                          <p className="text-sm font-medium">{participant.attendance}</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Programs</p>
                        <div className="flex flex-wrap gap-1">
                          {participant.programs.map((program, idx) => (
                            <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700">
                              {program}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Case Manager</p>
                        <p className="text-sm font-medium">{participant.caseManager}</p>
                      </div>

                      <Button variant="outline" size="sm" className="w-full mt-2">
                        <EyeIcon className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="locations">
              <Card className="border-t-4 border-t-emerald-500 shadow-md">
                <CardHeader className="bg-gradient-to-r from-emerald-50 to-white">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 mr-2 text-emerald-500"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <div>
                      <CardTitle>Location Management</CardTitle>
                      <CardDescription>View enrollment data by geographic location</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {/* Taylorville Section */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 mr-2 text-indigo-600"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <h2 className="text-xl font-bold text-gray-900">Taylorville, IL</h2>
                      <Badge className="ml-2 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">2 Properties</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-indigo-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-indigo-900">Total Residents</h3>
                            <span className="text-2xl font-bold text-indigo-700">65</span>
                          </div>
                          <div className="mt-2 text-sm text-indigo-700">90% average occupancy</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-indigo-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-indigo-900">Enrollment Rate</h3>
                            <span className="text-2xl font-bold text-indigo-700">78%</span>
                          </div>
                          <div className="mt-2 text-sm text-indigo-700">↑ 5% from last month</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-indigo-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-indigo-900">Attendance</h3>
                            <span className="text-2xl font-bold text-indigo-700">80%</span>
                          </div>
                          <div className="mt-2 text-sm text-indigo-700">↑ 3% from last month</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Hershey Towers */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Hershey Towers / Senior Village</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Senior Living</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Brent Milburn</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">36</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-indigo-600">85%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">79%</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/hershey-towers/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>

                      {/* Hickory Estates of Taylorville */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Hickory Estates of Taylorville</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Assisted Living</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Debra Moon</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">29</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-green-600">72%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">81%</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/hickory-estates-taylorville/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Pana Section */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 mr-2 text-purple-600"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <h2 className="text-xl font-bold text-gray-900">Pana, IL</h2>
                      <Badge className="ml-2 bg-purple-100 text-purple-800 hover:bg-purple-200">3 Properties</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-purple-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-purple-900">Total Residents</h3>
                            <span className="text-2xl font-bold text-purple-700">81</span>
                          </div>
                          <div className="mt-2 text-sm text-purple-700">89% average occupancy</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-purple-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-purple-900">Enrollment Rate</h3>
                            <span className="text-2xl font-bold text-purple-700">73%</span>
                          </div>
                          <div className="mt-2 text-sm text-purple-700">↑ 4% from last month</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-purple-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-purple-900">Attendance</h3>
                            <span className="text-2xl font-bold text-purple-700">79%</span>
                          </div>
                          <div className="mt-2 text-sm text-purple-700">↑ 2% from last month</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Hickory Estates of Pana */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Hickory Estates of Pana</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Assisted Living</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Sarah Presnell</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">31</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-purple-600">76%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">83%</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/hickory-estates-pana/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>

                      {/* Hickory Estates of Pana Memory Care */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-rose-600 to-rose-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Hickory Estates Memory Care</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Memory Care</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Ashlie Schmitz</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">22</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-rose-600">68%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">75%</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/hickory-estates-pana-memory/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>

                      {/* Pana Towers */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Pana Towers</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Senior Living</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Julie Drockton</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">28</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-amber-600">74%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">80%</p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/pana-towers/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* O'Fallon Section */}
                  <div className="mb-10">
                    <div className="flex items-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 mr-2 text-emerald-600"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <h2 className="text-xl font-bold text-gray-900">O'Fallon, IL</h2>
                      <Badge className="ml-2 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">2 Properties</Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-emerald-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-emerald-900">Total Residents</h3>
                            <span className="text-2xl font-bold text-emerald-700">60</span>
                          </div>
                          <div className="mt-2 text-sm text-emerald-700">88% average occupancy</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-emerald-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-emerald-900">Enrollment Rate</h3>
                            <span className="text-2xl font-bold text-emerald-700">81%</span>
                          </div>
                          <div className="mt-2 text-sm text-emerald-700">↑ 6% from last month</div>
                        </CardContent>
                      </Card>

                      <Card className="bg-emerald-50 border-none shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-emerald-900">Attendance</h3>
                            <span className="text-2xl font-bold text-emerald-700">85%</span>
                          </div>
                          <div className="mt-2 text-sm text-emerald-700">↑ 4% from last month</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Lincoln Park Villas */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Lincoln Park Villas</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Independent Living</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Megan Mills</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">34</p>
                              <p className="text-xs text-gray-500">88% occupancy</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-emerald-600">82%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">86%</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                              <div className="flex items-center mb-1">
                                <BarChart2Icon className="h-4 w-4 text-emerald-600 mr-2" />
                                <h4 className="font-medium text-emerald-800 text-sm">Property Stats</h4>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Maintenance:</span>
                                  <span className="font-semibold text-amber-600">4 open</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Rent Collection:</span>
                                  <span className="font-semibold text-green-600">94%</span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                <div className="flex items-center mb-1">
                                  <CalendarIcon className="h-4 w-4 text-emerald-600 mr-1" />
                                  <h4 className="font-medium text-emerald-800 text-sm">Events</h4>
                                </div>
                                <p className="text-xs font-semibold">4 upcoming</p>
                              </div>

                              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                                <div className="flex items-center mb-1">
                                  <ClipboardListIcon className="h-4 w-4 text-amber-600 mr-1" />
                                  <h4 className="font-medium text-amber-800 text-sm">Programs</h4>
                                </div>
                                <p className="text-xs font-semibold">4 active (82%)</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/lincoln-park-villas/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Complete Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>

                      {/* Chevy Chase Apartments */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-cyan-600 to-cyan-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Chevy Chase Apartments</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">O'Fallon IL</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Megan Mills</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">26</p>
                              <p className="text-xs text-gray-500">87% occupancy</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-cyan-600">79%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">84%</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-100">
                              <div className="flex items-center mb-1">
                                <BarChart2Icon className="h-4 w-4 text-cyan-600 mr-2" />
                                <h4 className="font-medium text-cyan-800 text-sm">Property Stats</h4>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Maintenance:</span>
                                  <span className="font-semibold text-amber-600">7 open</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Rent Collection:</span>
                                  <span className="font-semibold text-green-600">90%</span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-cyan-50 p-3 rounded-lg border border-cyan-100">
                                <div className="flex items-center mb-1">
                                  <CalendarIcon className="h-4 w-4 text-cyan-600 mr-1" />
                                  <h4 className="font-medium text-cyan-800 text-sm">Events</h4>
                                </div>
                                <p className="text-xs font-semibold">2 upcoming</p>
                              </div>

                              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                                <div className="flex items-center mb-1">
                                  <ClipboardListIcon className="h-4 w-4 text-amber-600 mr-1" />
                                  <h4 className="font-medium text-amber-800 text-sm">Programs</h4>
                                </div>
                                <p className="text-xs font-semibold">3 active (79%)</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/chevy-chase-apartments/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Complete Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>

                      {/* Lakeside Villas */}
                      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-bold text-white text-lg">Lakeside Villas</h3>
                              <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Carlyle IL</Badge>
                            </div>
                            <div className="bg-white/10 p-2 rounded-full">
                              <HomeIcon className="h-5 w-5 text-white" />
                            </div>
                          </div>
                          <p className="text-white/80 text-sm mt-1">Manager: Jennifer Baldwin</p>
                        </div>

                        <div className="p-4 bg-white">
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Residents</p>
                              <p className="font-bold text-gray-900">32</p>
                              <p className="text-xs text-gray-500">91% occupancy</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Enrollment</p>
                              <p className="font-bold text-teal-600">80%</p>
                            </div>
                            <div className="text-center p-2 bg-gray-50 rounded-md">
                              <p className="text-xs text-gray-500">Attendance</p>
                              <p className="font-bold text-gray-900">84%</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                              <div className="flex items-center mb-1">
                                <BarChart2Icon className="h-4 w-4 text-teal-600 mr-2" />
                                <h4 className="font-medium text-teal-800 text-sm">Property Stats</h4>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Maintenance:</span>
                                  <span className="font-semibold text-amber-600">3 open</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-600">Rent Collection:</span>
                                  <span className="font-semibold text-green-600">97%</span>
                                </div>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                                <div className="flex items-center mb-1">
                                  <CalendarIcon className="h-4 w-4 text-teal-600 mr-1" />
                                  <h4 className="font-medium text-teal-800 text-sm">Events</h4>
                                </div>
                                <p className="text-xs font-semibold">5 upcoming</p>
                              </div>

                              <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                                <div className="flex items-center mb-1">
                                  <ClipboardListIcon className="h-4 w-4 text-amber-600 mr-1" />
                                  <h4 className="font-medium text-amber-800 text-sm">Programs</h4>
                                </div>
                                <p className="text-xs font-semibold">4 active (80%)</p>
                              </div>
                            </div>
                          </div>

                          <div className="mt-4">
                            <Link href="/properties/lakeside-villas/details">
                              <Button
                                variant="default"
                                size="sm"
                                className="w-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800"
                              >
                                <EyeIcon className="h-4 w-4 mr-2" />
                                View Complete Details
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="properties">
              <Card className="border-t-4 border-t-blue-500 shadow-md">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 mr-2 text-blue-500" />
                    <div>
                      <CardTitle>Property Management</CardTitle>
                      <CardDescription>View enrollment data by property location</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Diamond Apartments */}
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-white text-lg">Diamond Apartments</h3>
                            <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Jerseyville IL</Badge>
                          </div>
                          <div className="bg-white/10 p-2 rounded-full">
                            <HomeIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <p className="text-white/80 text-sm mt-1">Manager: Hunter Seaton</p>
                      </div>

                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Residents</p>
                            <p className="font-bold text-gray-900">24</p>
                            <p className="text-xs text-gray-500">86% occupancy</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Enrollment</p>
                            <p className="font-bold text-blue-600">78%</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Attendance</p>
                            <p className="font-bold text-gray-900">82%</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center mb-1">
                              <BarChart2Icon className="h-4 w-4 text-blue-600 mr-2" />
                              <h4 className="font-medium text-blue-800 text-sm">Property Stats</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Maintenance:</span>
                                <span className="font-semibold text-amber-600">5 open</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Rent Collection:</span>
                                <span className="font-semibold text-green-600">96%</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                              <div className="flex items-center mb-1">
                                <CalendarIcon className="h-4 w-4 text-purple-600 mr-1" />
                                <h4 className="font-medium text-purple-800 text-sm">Events</h4>
                              </div>
                              <p className="text-xs font-semibold">3 upcoming</p>
                            </div>

                            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                              <div className="flex items-center mb-1">
                                <ClipboardListIcon className="h-4 w-4 text-amber-600 mr-1" />
                                <h4 className="font-medium text-amber-800 text-sm">Programs</h4>
                              </div>
                              <p className="text-xs font-semibold">3 active (78%)</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link href="/properties/diamond-apartments/details">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                            >
                              <EyeIcon className="h-4 w-4 mr-2" />
                              View Complete Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>

                    {/* Hershey Towers */}
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-white text-lg">Hershey Towers / Senior Village</h3>
                            <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Taylorville IL</Badge>
                          </div>
                          <div className="bg-white/10 p-2 rounded-full">
                            <HomeIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <p className="text-white/80 text-sm mt-1">Manager: Brent Milburn</p>
                      </div>

                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Residents</p>
                            <p className="font-bold text-gray-900">36</p>
                            <p className="text-xs text-gray-500">90% occupancy</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Enrollment</p>
                            <p className="font-bold text-blue-600">85%</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Attendance</p>
                            <p className="font-bold text-gray-900">79%</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center mb-1">
                              <BarChart2Icon className="h-4 w-4 text-blue-600 mr-2" />
                              <h4 className="font-medium text-blue-800 text-sm">Property Stats</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Maintenance:</span>
                                <span className="font-semibold text-amber-600">8 open</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Rent Collection:</span>
                                <span className="font-semibold text-green-600">92%</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                              <div className="flex items-center mb-1">
                                <CalendarIcon className="h-4 w-4 text-purple-600 mr-1" />
                                <h4 className="font-medium text-purple-800 text-sm">Events</h4>
                              </div>
                              <p className="text-xs font-semibold">5 upcoming</p>
                            </div>

                            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                              <div className="flex items-center mb-1">
                                <ClipboardListIcon className="h-4 w-4 text-amber-600 mr-1" />
                                <h4 className="font-medium text-amber-800 text-sm">Programs</h4>
                              </div>
                              <p className="text-xs font-semibold">3 active (85%)</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link href="/properties/hershey-towers/details">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
                            >
                              <EyeIcon className="h-4 w-4 mr-2" />
                              View Complete Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>

                    {/* Hickory Estates of Taylorville */}
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-gradient-to-r from-green-600 to-green-700 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-white text-lg">Hickory Estates of Taylorville</h3>
                            <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Taylorville IL</Badge>
                          </div>
                          <div className="bg-white/10 p-2 rounded-full">
                            <HomeIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <p className="text-white/80 text-sm mt-1">Manager: Debra Moon</p>
                      </div>

                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Residents</p>
                            <p className="font-bold text-gray-900">29</p>
                            <p className="text-xs text-gray-500">81% occupancy</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Enrollment</p>
                            <p className="font-bold text-blue-600">72%</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Attendance</p>
                            <p className="font-bold text-gray-900">81%</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                            <div className="flex items-center mb-1">
                              <BarChart2Icon className="h-4 w-4 text-blue-600 mr-2" />
                              <h4 className="font-medium text-blue-800 text-sm">Property Stats</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Maintenance:</span>
                                <span className="font-semibold text-amber-600">3 open</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Rent Collection:</span>
                                <span className="font-semibold text-green-600">94%</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                              <div className="flex items-center mb-1">
                                <CalendarIcon className="h-4 w-4 text-purple-600 mr-1" />
                                <h4 className="font-medium text-purple-800 text-sm">Events</h4>
                              </div>
                              <p className="text-xs font-semibold">4 upcoming</p>
                            </div>

                            <div className="bg-amber-50 p-3 rounded-lg border border-amber-100">
                              <div className="flex items-center mb-1">
                                <ClipboardListIcon className="h-4 w-4 text-amber-600 mr-1" />
                                <h4 className="font-medium text-amber-800 text-sm">Programs</h4>
                              </div>
                              <p className="text-xs font-semibold">3 active (72%)</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4">
                          <Link href="/properties/hickory-estates-taylorville/details">
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                            >
                              <EyeIcon className="h-4 w-4 mr-2" />
                              View Complete Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>

                    {/* Hickory Estates of Pana */}
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-white text-lg">Hickory Estates of Pana</h3>
                            <Badge className="mt-1 bg-white/20 text-white hover:bg-white/30">Pana IL</Badge>
                          </div>
                          <div className="bg-white/10 p-2 rounded-full">
                            <HomeIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <p className="text-white/80 text-sm mt-1">Manager: Sarah Presnell</p>
                      </div>

                      <div className="p-4 bg-white">
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Residents</p>
                            <p className="font-bold text-gray-900">31</p>
                            <p className="text-xs text-gray-500">89% occupancy</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Enrollment</p>
                            <p className="font-bold text-purple-600">76%</p>
                          </div>
                          <div className="text-center p-2 bg-gray-50 rounded-md">
                            <p className="text-xs text-gray-500">Attendance</p>
                            <p className="font-bold text-gray-900">83%</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                            <div className="flex items-center mb-1">
                              <BarChart2Icon className="h-4 w-4 text-purple-600 mr-2" />
                              <h4 className="font-medium text-purple-800 text-sm">Property Stats</h4>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Maintenance:</span>
                                <span className="font-semibold text-amber-600">4 open</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Rent Collection:</span>
                                <span className="font-semibold text-green-600">93%</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                              <div className="flex items-center mb-1">
                                <CalendarIcon className="h-4 w-4 text-purple-600 mr-1" />
                                <h4 className="font-medium text-purple-8\

