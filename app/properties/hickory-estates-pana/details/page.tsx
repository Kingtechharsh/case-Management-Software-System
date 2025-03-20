"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  HomeIcon,
  UserIcon,
  CalendarIcon,
  ClipboardListIcon,
  ArrowLeftIcon,
  BuildingIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  WrenchIcon,
  CheckCircleIcon,
} from "lucide-react"
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
  BarChart,
  Bar,
} from "@/components/ui/chart"

// Sample data for demonstration
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

// Property details data
const propertyData = {
  name: "Hickory Estates of Pana",
  location: "Pana IL",
  address: "456 Maple Avenue, Pana, IL 62557",
  phone: "(555) 789-1234",
  email: "manager@hickoryestates-pana.com",
  manager: "Sarah Presnell",
  residents: 31,
  enrollmentRate: "76%",
  attendance: "83%",
  features: ["Community Garden", "Fitness Center", "Library", "Computer Lab", "Outdoor Patio"],
  programs: ["Financial Literacy", "Health & Wellness", "Computer Skills", "Arts & Crafts"],
  maintenanceRequests: 4,
  upcomingEvents: [
    { name: "Game Night", date: "2025-04-18", time: "7:00 PM", location: "Community Room" },
    { name: "Health Screening", date: "2025-04-22", time: "10:00 AM", location: "Fitness Center" },
    { name: "Computer Workshop", date: "2025-04-25", time: "2:00 PM", location: "Computer Lab" },
  ],
  units: {
    total: 35,
    occupied: 31,
    vacant: 4,
    types: [
      { type: "1 Bedroom", count: 15, occupied: 14 },
      { type: "2 Bedroom", count: 15, occupied: 13 },
      { type: "3 Bedroom", count: 5, occupied: 4 },
    ],
  },
  maintenanceIssues: [
    {
      id: "M4001",
      unit: "103",
      issue: "Leaking faucet",
      priority: "Low",
      status: "Open",
      reportedDate: "2025-04-02",
    },
    {
      id: "M4002",
      unit: "207",
      issue: "HVAC not cooling",
      priority: "High",
      status: "In Progress",
      reportedDate: "2025-04-05",
    },
    {
      id: "M4003",
      unit: "115",
      issue: "Broken window latch",
      priority: "Medium",
      status: "Open",
      reportedDate: "2025-04-08",
    },
    {
      id: "M4004",
      unit: "312",
      issue: "Garbage disposal jammed",
      priority: "Low",
      status: "Open",
      reportedDate: "2025-04-10",
    },
  ],
  enrollmentTrends: [
    { month: "Nov", enrollment: 68 },
    { month: "Dec", enrollment: 70 },
    { month: "Jan", enrollment: 72 },
    { month: "Feb", enrollment: 74 },
    { month: "Mar", enrollment: 75 },
    { month: "Apr", enrollment: 76 },
  ],
  programAttendance: [
    { name: "Financial Literacy", attendance: 72 },
    { name: "Health & Wellness", attendance: 85 },
    { name: "Computer Skills", attendance: 65 },
    { name: "Arts & Crafts", attendance: 78 },
  ],
}

export default function PropertyDetailsPage() {
  const router = useRouter()

  return (
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
              <UserIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="outline" size="sm" className="mb-4" onClick={() => router.push("/enrollment-tracking")}>
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Enrollment Tracking
          </Button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <BuildingIcon className="h-6 w-6 mr-2 text-blue-600" />
                {propertyData.name}
              </h1>
              <p className="text-gray-600 flex items-center mt-1">
                <MapPinIcon className="h-4 w-4 mr-1 text-gray-500" />
                {propertyData.address}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-sm px-3 py-1">
                {propertyData.location}
              </Badge>
            </div>
          </div>
        </div>

        {/* Property Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Property Manager</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium">{propertyData.manager}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <PhoneIcon className="h-3 w-3 mr-1" />
                    <span>{propertyData.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MailIcon className="h-3 w-3 mr-1" />
                    <span>{propertyData.email}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Occupancy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">{propertyData.units.occupied}</p>
                  <p className="text-sm text-gray-500">Occupied</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-600">{propertyData.units.vacant}</p>
                  <p className="text-sm text-gray-500">Vacant</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-700">{propertyData.units.total}</p>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${(propertyData.units.occupied / propertyData.units.total) * 100}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-500 mt-1">
                {Math.round((propertyData.units.occupied / propertyData.units.total) * 100)}% Occupancy
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Program Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-500">Enrollment Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{propertyData.enrollmentRate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Attendance</p>
                  <p className="text-2xl font-bold text-gray-900">{propertyData.attendance}</p>
                </div>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: propertyData.attendance }}></div>
                </div>
                <span className="text-sm text-gray-600">{propertyData.attendance}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different sections */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="units">Units</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Enrollment Trends</CardTitle>
                  <CardDescription>Monthly enrollment rate for {propertyData.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={propertyData.enrollmentTrends}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="enrollment"
                          stroke="#0088FE"
                          fill="#0088FE"
                          name="Enrollment Rate (%)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Program Attendance</CardTitle>
                  <CardDescription>Attendance rates by program</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={propertyData.programAttendance}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="attendance" name="Attendance (%)" fill="#00C49F" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Property Features</CardTitle>
                  <CardDescription>Amenities and features available at this property</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {propertyData.features.map((feature, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                          <CheckCircleIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <p className="text-sm font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Units Tab */}
          <TabsContent value="units">
            <Card>
              <CardHeader>
                <CardTitle>Unit Distribution</CardTitle>
                <CardDescription>Breakdown of units by type and occupancy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={propertyData.units.types}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="count"
                            nameKey="type"
                          >
                            {propertyData.units.types.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Unit Types</h4>
                    <div className="space-y-4">
                      {propertyData.units.types.map((unit, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{unit.type}</span>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700">
                              {unit.count} units
                            </Badge>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${(unit.occupied / unit.count) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between mt-1 text-sm">
                            <span className="text-gray-500">{unit.occupied} occupied</span>
                            <span className="text-gray-500">{unit.count - unit.occupied} vacant</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs">
            <Card>
              <CardHeader>
                <CardTitle>Active Programs</CardTitle>
                <CardDescription>Programs currently offered at this property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {propertyData.programs.map((program, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <ClipboardListIcon className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-lg">{program}</h3>
                            <p className="text-gray-500 text-sm mt-1">
                              Attendance: {propertyData.programAttendance[index]?.attendance || "N/A"}%
                            </p>
                            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${propertyData.programAttendance[index]?.attendance || 0}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Maintenance Tab */}
          <TabsContent value="maintenance">
            <Card>
              <CardHeader>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>Current maintenance issues at this property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Unit</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Issue</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Priority</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Reported Date</th>
                        <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {propertyData.maintenanceIssues.map((issue) => (
                        <tr key={issue.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">{issue.id}</td>
                          <td className="py-3 px-4">{issue.unit}</td>
                          <td className="py-3 px-4 font-medium">{issue.issue}</td>
                          <td className="py-3 px-4">
                            <Badge
                              variant="outline"
                              className={
                                issue.priority === "High"
                                  ? "bg-red-100 text-red-800"
                                  : issue.priority === "Medium"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-green-100 text-green-800"
                              }
                            >
                              {issue.priority}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge
                              variant="outline"
                              className={
                                issue.status === "Open"
                                  ? "bg-blue-100 text-blue-800"
                                  : issue.status === "In Progress"
                                    ? "bg-purple-100 text-purple-800"
                                    : "bg-green-100 text-green-800"
                              }
                            >
                              {issue.status}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">{new Date(issue.reportedDate).toLocaleDateString()}</td>
                          <td className="py-3 px-4 text-right">
                            <Button variant="ghost" size="sm">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">
                      Total Maintenance Requests: {propertyData.maintenanceIssues.length}
                    </p>
                  </div>
                  <Button>
                    <WrenchIcon className="h-4 w-4 mr-2" />
                    Create New Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Events scheduled at this property</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {propertyData.upcomingEvents.map((event, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="h-12 w-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center mr-4">
                            <span className="text-blue-800 font-bold text-sm">
                              {new Date(event.date).toLocaleDateString(undefined, { month: "short" })}
                            </span>
                            <span className="text-blue-800 font-bold text-lg">{new Date(event.date).getDate()}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-lg">{event.name}</h3>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              <span>{new Date(event.date).toLocaleDateString()}</span>
                              <span className="mx-2">•</span>
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <MapPinIcon className="h-4 w-4 mr-1" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button>
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Schedule New Event
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

