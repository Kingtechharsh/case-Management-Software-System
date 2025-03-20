"use client"

import { useParams, useRouter } from "next/navigation"
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
  AlertCircleIcon,
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
import { useEffect, useState } from "react"

// Sample data for demonstration
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

// Property details data
const propertyDetailsData = {
  "diamond-apartments": {
    name: "Diamond Apartments",
    location: "Jerseyville IL",
    address: "123 Main Street, Jerseyville, IL 62052",
    phone: "(555) 123-4567",
    email: "manager@diamondapts.com",
    manager: "Hunter Seaton",
    residents: 24,
    enrollmentRate: "78%",
    attendance: "82%",
    features: ["Community Room", "Fitness Center", "Laundry Facilities", "Playground", "Parking"],
    programs: ["Financial Literacy", "Health & Wellness", "Computer Skills", "After-School Program"],
    maintenanceRequests: 5,
    upcomingEvents: [
      { name: "Community Meeting", date: "2025-04-15", time: "6:00 PM", location: "Community Room" },
      { name: "Health Screening", date: "2025-04-22", time: "10:00 AM", location: "Fitness Center" },
      { name: "Computer Workshop", date: "2025-04-29", time: "2:00 PM", location: "Community Room" },
    ],
    units: {
      total: 28,
      occupied: 24,
      vacant: 4,
      types: [
        { type: "1 Bedroom", count: 12, occupied: 10 },
        { type: "2 Bedroom", count: 12, occupied: 11 },
        { type: "3 Bedroom", count: 4, occupied: 3 },
      ],
    },
    maintenanceIssues: [
      {
        id: "M1001",
        unit: "101",
        issue: "Leaking faucet",
        priority: "Low",
        status: "Open",
        reportedDate: "2025-04-01",
      },
      {
        id: "M1002",
        unit: "205",
        issue: "HVAC not working",
        priority: "High",
        status: "In Progress",
        reportedDate: "2025-04-02",
      },
      {
        id: "M1003",
        unit: "112",
        issue: "Broken window",
        priority: "Medium",
        status: "Open",
        reportedDate: "2025-04-05",
      },
      {
        id: "M1004",
        unit: "308",
        issue: "Clogged drain",
        priority: "Medium",
        status: "Open",
        reportedDate: "2025-04-07",
      },
      {
        id: "M1005",
        unit: "215",
        issue: "Smoke detector beeping",
        priority: "Low",
        status: "Open",
        reportedDate: "2025-04-10",
      },
    ],
    enrollmentTrends: [
      { month: "Nov", enrollment: 65 },
      { month: "Dec", enrollment: 68 },
      { month: "Jan", enrollment: 72 },
      { month: "Feb", enrollment: 75 },
      { month: "Mar", enrollment: 78 },
      { month: "Apr", enrollment: 78 },
    ],
    programAttendance: [
      { name: "Financial Literacy", attendance: 65 },
      { name: "Health & Wellness", attendance: 78 },
      { name: "Computer Skills", attendance: 45 },
      { name: "After-School Program", attendance: 90 },
    ],
  },
  "hershey-towers": {
    name: "Hershey Towers / Senior Village",
    location: "Taylorville IL",
    address: "456 Oak Avenue, Taylorville, IL 62568",
    phone: "(555) 234-5678",
    email: "manager@hersheytowers.com",
    manager: "Brent Milburn",
    residents: 36,
    enrollmentRate: "85%",
    attendance: "79%",
    features: ["Senior Activities", "Dining Hall", "Transportation Services", "Library", "Garden"],
    programs: ["Health Screenings", "Social Activities", "Meal Program", "Exercise Classes"],
    maintenanceRequests: 8,
    upcomingEvents: [
      { name: "Senior Social", date: "2025-04-16", time: "3:00 PM", location: "Community Room" },
      { name: "Health Screening", date: "2025-04-20", time: "9:00 AM", location: "Dining Hall" },
      { name: "Book Club", date: "2025-04-25", time: "2:00 PM", location: "Library" },
      { name: "Garden Club", date: "2025-04-28", time: "10:00 AM", location: "Garden" },
      { name: "Movie Night", date: "2025-04-30", time: "6:00 PM", location: "Community Room" },
    ],
    units: {
      total: 40,
      occupied: 36,
      vacant: 4,
      types: [
        { type: "Studio", count: 10, occupied: 8 },
        { type: "1 Bedroom", count: 20, occupied: 19 },
        { type: "2 Bedroom", count: 10, occupied: 9 },
      ],
    },
    maintenanceIssues: [
      {
        id: "M2001",
        unit: "101",
        issue: "Thermostat not working",
        priority: "Medium",
        status: "Open",
        reportedDate: "2025-04-01",
      },
      {
        id: "M2002",
        unit: "205",
        issue: "Toilet running",
        priority: "Low",
        status: "In Progress",
        reportedDate: "2025-04-02",
      },
      {
        id: "M2003",
        unit: "112",
        issue: "Elevator button stuck",
        priority: "High",
        status: "Open",
        reportedDate: "2025-04-03",
      },
      {
        id: "M2004",
        unit: "308",
        issue: "Light fixture broken",
        priority: "Low",
        status: "Open",
        reportedDate: "2025-04-05",
      },
      {
        id: "M2005",
        unit: "215",
        issue: "Door not closing properly",
        priority: "Medium",
        status: "Open",
        reportedDate: "2025-04-06",
      },
      { id: "M2006", unit: "103", issue: "Sink dripping", priority: "Low", status: "Open", reportedDate: "2025-04-07" },
      {
        id: "M2007",
        unit: "220",
        issue: "Window stuck",
        priority: "Medium",
        status: "Open",
        reportedDate: "2025-04-08",
      },
      {
        id: "M2008",
        unit: "310",
        issue: "Refrigerator not cooling",
        priority: "High",
        status: "In Progress",
        reportedDate: "2025-04-10",
      },
    ],
    enrollmentTrends: [
      { month: "Nov", enrollment: 75 },
      { month: "Dec", enrollment: 78 },
      { month: "Jan", enrollment: 80 },
      { month: "Feb", enrollment: 82 },
      { month: "Mar", enrollment: 85 },
      { month: "Apr", enrollment: 85 },
    ],
    programAttendance: [
      { name: "Health Screenings", attendance: 90 },
      { name: "Social Activities", attendance: 85 },
      { name: "Meal Program", attendance: 95 },
      { name: "Exercise Classes", attendance: 70 },
    ],
  },
  "hickory-estates-taylorville": {
    name: "Hickory Estates of Taylorville",
    location: "Taylorville IL",
    address: "789 Elm Street, Taylorville, IL 62568",
    phone: "(555) 345-6789",
    email: "manager@hickoryestates.com",
    manager: "Debra Moon",
    residents: 29,
    enrollmentRate: "72%",
    attendance: "81%",
    features: ["Garden Area", "Community Kitchen", "Library", "Fitness Room", "Patio"],
    programs: ["Gardening Club", "Book Club", "Cooking Classes", "Fitness Classes"],
    maintenanceRequests: 3,
    upcomingEvents: [
      { name: "Book Club", date: "2025-04-17", time: "4:00 PM", location: "Library" },
      { name: "Cooking Class", date: "2025-04-23", time: "5:00 PM", location: "Community Kitchen" },
      { name: "Gardening Workshop", date: "2025-04-26", time: "10:00 AM", location: "Garden Area" },
      { name: "Fitness Class", date: "2025-04-29", time: "9:00 AM", location: "Fitness Room" },
    ],
    units: {
      total: 32,
      occupied: 29,
      vacant: 3,
      types: [
        { type: "1 Bedroom", count: 16, occupied: 15 },
        { type: "2 Bedroom", count: 12, occupied: 11 },
        { type: "3 Bedroom", count: 4, occupied: 3 },
      ],
    },
    maintenanceIssues: [
      {
        id: "M3001",
        unit: "105",
        issue: "Dishwasher leaking",
        priority: "Medium",
        status: "Open",
        reportedDate: "2025-04-05",
      },
      {
        id: "M3002",
        unit: "210",
        issue: "Ceiling fan not working",
        priority: "Low",
        status: "Open",
        reportedDate: "2025-04-08",
      },
      {
        id: "M3003",
        unit: "118",
        issue: "Garbage disposal jammed",
        priority: "Medium",
        status: "In Progress",
        reportedDate: "2025-04-10",
      },
    ],
    enrollmentTrends: [
      { month: "Nov", enrollment: 60 },
      { month: "Dec", enrollment: 63 },
      { month: "Jan", enrollment: 65 },
      { month: "Feb", enrollment: 68 },
      { month: "Mar", enrollment: 70 },
      { month: "Apr", enrollment: 72 },
    ],
    programAttendance: [
      { name: "Gardening Club", attendance: 75 },
      { name: "Book Club", attendance: 80 },
      { name: "Cooking Classes", attendance: 85 },
      { name: "Fitness Classes", attendance: 65 },
    ],
  },
}

export default function PropertyDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [propertyData, setPropertyData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // For this demo, we're using the static data defined above
    const propertyId = params.propertyId as string

    if (propertyDetailsData[propertyId]) {
      setPropertyData(propertyDetailsData[propertyId])
    } else {
      // If property not found, redirect to enrollment tracking page
      router.push("/enrollment-tracking")
    }

    setLoading(false)
  }, [params.propertyId, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading property details...</p>
        </div>
      </div>
    )
  }

  if (!propertyData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircleIcon className="h-12 w-12 text-red-500 mx-auto" />
          <h2 className="mt-4 text-xl font-bold">Property Not Found</h2>
          <p className="mt-2 text-gray-600">The property you're looking for doesn't exist.</p>
          <Button className="mt-4" onClick={() => router.push("/enrollment-tracking")}>
            Return to Enrollment Tracking
          </Button>
        </div>
      </div>
    )
  }

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

