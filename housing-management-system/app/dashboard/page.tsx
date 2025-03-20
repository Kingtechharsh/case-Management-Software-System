import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BellIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  FileTextIcon,
  HomeIcon,
  MessageSquareIcon,
  UserIcon,
} from "lucide-react"
import { DashboardReportWidget } from "@/components/dashboard-report-widget"
import { AIReportAssistant } from "@/components/ai-report-assistant"

export default function ResidentDashboard() {
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
              ← Back to Website
            </Link>
            <Link href="/dashboard" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
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
            <Link href="/enrollment-tracking" className="text-gray-600 hover:text-blue-600 font-medium">
              Enrollment Tracking
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-blue-600 font-medium">
              Support
            </Link>
            <Link
              href="/profile"
              className="text-gray-600 hover:text-blue-600 font-medium flex items-center gap-1.5 relative group"
            >
              <div className="relative">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserIcon className="h-3.5 w-3.5 text-blue-600" />
                </div>
                <div className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-green-500 rounded-full border border-white"></div>
              </div>
              <span>Profile</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
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

      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold">Welcome back, Harsh</h1>
                <p className="text-blue-100 mt-1">Here's an overview of your housing services and tasks</p>
              </div>
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                <MessageSquareIcon className="h-4 w-4 mr-2" />
                Contact Case Manager
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="container mx-auto px-6 -mt-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-white shadow-md border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Program Status</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">75%</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <Progress value={75} className="h-2 mt-4" />
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Pending Tasks</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">2</p>
                  </div>
                  <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <ClockIcon className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="text-amber-600 font-medium">1</span> high priority
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Notifications</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
                  </div>
                  <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <BellIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="text-indigo-600 font-medium">2</span> new today
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Enrollments</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">274</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <UserIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <span className="text-green-600 font-medium">+12</span> this month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Program Status */}
            <Card className="shadow-md border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-2 border-b">
                <CardTitle className="text-lg text-blue-800">Program Status</CardTitle>
                <CardDescription>Housing Assistance Program</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-500">Progress</span>
                  <span className="text-sm font-medium text-blue-600">75%</span>
                </div>
                <Progress value={75} className="h-2 mb-4" />
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Initial Assessment</p>
                      <p className="text-sm text-gray-500">Completed on Jan 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Documentation Submitted</p>
                      <p className="text-sm text-gray-500">Completed on Feb 3, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                      <ClockIcon className="h-5 w-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Final Approval</p>
                      <p className="text-sm text-gray-500">In progress</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="shadow-md border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-amber-100 pb-2 border-b">
                <CardTitle className="text-lg text-amber-800">Upcoming Tasks</CardTitle>
                <CardDescription>Action items requiring your attention</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start p-3 bg-red-50 rounded-lg">
                    <div className="bg-red-100 p-2 rounded-full mr-3">
                      <FileTextIcon className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <p className="font-medium">Income Verification Form</p>
                        <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-800 text-xs font-medium rounded">
                          Urgent
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">Due in 3 days</p>
                      <Button variant="link" className="h-auto p-0 text-blue-600">
                        Complete Now
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-start p-3 bg-amber-50 rounded-lg">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <CalendarIcon className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="font-medium">Case Manager Meeting</p>
                      <p className="text-sm text-gray-500">March 20, 2025 at 10:00 AM</p>
                      <Button variant="link" className="h-auto p-0 text-blue-600">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Notifications */}
            <Card className="shadow-md border-none overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 pb-2 border-b">
                <CardTitle className="text-lg text-indigo-800">Recent Notifications</CardTitle>
                <CardDescription>Updates from your case manager</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-3 py-1 bg-blue-50 rounded-r-lg p-3">
                    <p className="font-medium">Document Approved</p>
                    <p className="text-sm text-gray-600">Your lease agreement has been approved and processed.</p>
                    <p className="text-xs text-gray-500 mt-1">Today, 9:45 AM</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-3 py-1 bg-green-50 rounded-r-lg p-3">
                    <p className="font-medium">Payment Processed</p>
                    <p className="text-sm text-gray-600">
                      Your housing assistance payment for March has been processed.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Yesterday, 2:30 PM</p>
                  </div>
                  <div className="border-l-4 border-gray-400 pl-3 py-1 bg-gray-50 rounded-r-lg p-3">
                    <p className="font-medium">New Resource Available</p>
                    <p className="text-sm text-gray-600">
                      Check out the new financial literacy workshop available next month.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Mar 10, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Report Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Program Reports & Insights</h2>
                <p className="text-gray-500">Track your program performance and metrics</p>
              </div>
              <Link href="/reports">
                <Button variant="outline" size="sm">
                  View All Reports
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="shadow-md border-none overflow-hidden">
                  <CardContent className="p-0">
                    <DashboardReportWidget />
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="shadow-md border-none overflow-hidden h-full">
                  <CardContent className="p-0">
                    <AIReportAssistant />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mb-8">
            <Tabs defaultValue="documents" className="mb-8">
              <TabsList className="grid w-full grid-cols-3 mb-6 bg-gray-100 p-1 rounded-lg">
                <TabsTrigger
                  value="documents"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Recent Documents
                </TabsTrigger>
                <TabsTrigger
                  value="messages"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Recent Messages
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                >
                  Available Services
                </TabsTrigger>
              </TabsList>

              <TabsContent value="documents">
                <Card className="shadow-md border-none overflow-hidden">
                  <CardContent className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Document Name</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-600">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Lease Agreement</td>
                            <td className="py-3 px-4">PDF</td>
                            <td className="py-3 px-4">Mar 12, 2025</td>
                            <td className="py-3 px-4">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Approved
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">Income Verification</td>
                            <td className="py-3 px-4">PDF</td>
                            <td className="py-3 px-4">Mar 5, 2025</td>
                            <td className="py-3 px-4">
                              <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Pending
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">Utility Bill</td>
                            <td className="py-3 px-4">JPG</td>
                            <td className="py-3 px-4">Feb 28, 2025</td>
                            <td className="py-3 px-4">
                              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Approved
                              </span>
                            </td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 text-right">
                      <Button variant="outline">View All Documents</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="messages">
                <Card className="shadow-md border-none overflow-hidden">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                              <UserIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">John Smith (Case Manager)</p>
                              <p className="text-sm text-gray-500">Mar 14, 2025, 10:30 AM</p>
                            </div>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            New
                          </span>
                        </div>
                        <p className="text-gray-700 pl-13 ml-10">
                          Hello Sarah, I've reviewed your recent documentation and everything looks good. Let's discuss
                          next steps in our upcoming meeting.
                        </p>
                        <div className="mt-3 text-right">
                          <Button variant="outline" size="sm">
                            <MessageSquareIcon className="h-4 w-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                      </div>
                      <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                              <HomeIcon className="h-5 w-5 text-indigo-600" />
                            </div>
                            <div>
                              <p className="font-medium">Housing Support Team</p>
                              <p className="text-sm text-gray-500">Mar 10, 2025, 2:15 PM</p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700 pl-13 ml-10">
                          Your maintenance request #4582 has been scheduled for March 18th between 9 AM and 12 PM.
                          Please ensure someone is available to provide access.
                        </p>
                        <div className="mt-3 text-right">
                          <Button variant="outline" size="sm">
                            <MessageSquareIcon className="h-4 w-4 mr-2" />
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <Button variant="outline">View All Messages</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="services">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-md border-none overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <FileTextIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <CardTitle>Financial Literacy Workshop</CardTitle>
                          <CardDescription>Learn budgeting and saving strategies</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        This workshop covers essential financial skills including budgeting, saving, and credit
                        management.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>April 15, 2025 | 6:00 PM - 8:00 PM</span>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Register Now</Button>
                    </CardContent>
                  </Card>
                  <Card className="shadow-md border-none overflow-hidden bg-gradient-to-br from-indigo-50 to-white">
                    <CardHeader>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                          <UserIcon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <CardTitle>Job Placement Assistance</CardTitle>
                          <CardDescription>Career counseling and job search support</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">
                        Get personalized assistance with resume building, interview preparation, and job search
                        strategies.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>Ongoing | By appointment</span>
                      </div>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Schedule Consultation</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

