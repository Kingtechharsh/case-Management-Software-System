import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BellIcon,
  CalendarIcon,
  ClipboardListIcon,
  FileTextIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
  UsersIcon,
  BarChartIcon,
  SettingsIcon,
  LockIcon,
  GlobeIcon,
  DatabaseIcon,
  ServerIcon,
  MailIcon,
  GitBranchIcon,
  FilterIcon,
} from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function CaseManagementDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-lg font-bold">HMS Admin</span>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <BarChartIcon className="h-5 w-5 mr-2" />
                Dashboard
              </Link>
              <Link
                href="/case-management"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
              >
                <UsersIcon className="h-5 w-5 mr-2" />
                Case Management
              </Link>
              <Link
                href="/documents"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FileTextIcon className="h-5 w-5 mr-2" />
                Document Center
              </Link>
              <Link
                href="/reports"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <ClipboardListIcon className="h-5 w-5 mr-2" />
                Reports
              </Link>
              <Link
                href="/calendar"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                Calendar
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <SettingsIcon className="h-5 w-5 mr-2" />
                Settings
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                User Management
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                System Administration
              </h3>
              <div className="mt-3 space-y-1">
                <Link
                  href="/admin/security"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <LockIcon className="h-5 w-5 mr-2" />
                  Security
                </Link>
                <Link
                  href="/admin/audit-logs"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <FileTextIcon className="h-5 w-5 mr-2" />
                  Audit Logs
                </Link>
                <Link
                  href="/admin/integrations"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <GlobeIcon className="h-5 w-5 mr-2" />
                  Integrations
                </Link>
                <Link
                  href="/admin/backup"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <DatabaseIcon className="h-5 w-5 mr-2" />
                  Backup & Restore
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Configuration</h3>
              <div className="mt-3 space-y-1">
                <Link
                  href="/admin/notifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <BellIcon className="h-5 w-5 mr-2" />
                  Notifications
                </Link>
                <Link
                  href="/admin/api"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <ServerIcon className="h-5 w-5 mr-2" />
                  API Management
                </Link>
                <Link
                  href="/admin/email"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <MailIcon className="h-5 w-5 mr-2" />
                  Email Templates
                </Link>
                <Link
                  href="/admin/workflows"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <GitBranchIcon className="h-5 w-5 mr-2" />
                  Workflows
                </Link>
              </div>
            </div>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <UserIcon className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Smith</p>
                <p className="text-xs text-gray-500">Case Manager</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex-1 flex">
                <div className="max-w-2xl w-full lg:max-w-xs relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input type="search" placeholder="Search cases, residents, or documents..." className="pl-10" />
                </div>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <Button variant="ghost" size="icon">
                  <BellIcon className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Case Management</h1>
                <p className="text-gray-600">Manage resident cases and program enrollments</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button variant="outline">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Case
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Case Overview</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Cases</p>
                        <p className="text-3xl font-bold text-gray-900">124</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <UsersIcon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Pending Reviews</p>
                        <p className="text-3xl font-bold text-gray-900">18</p>
                      </div>
                      <div className="bg-amber-100 p-3 rounded-full">
                        <ClipboardListIcon className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">New Applications</p>
                        <p className="text-3xl font-bold text-gray-900">7</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <FileTextIcon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Today's Appointments</p>
                        <p className="text-3xl font-bold text-gray-900">5</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <CalendarIcon className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow mb-6">
              <div className="p-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Enrollment Tracking</h2>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/enrollment-tracking">View Full Dashboard</Link>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-sm font-medium text-gray-700">Resident vs. Non-Resident Enrollment</h3>
                    <div className="h-40">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: "Housing", residents: 124, nonResidents: 45 },
                            { name: "Financial", residents: 68, nonResidents: 35 },
                            { name: "Job Training", residents: 55, nonResidents: 28 },
                          ]}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="residents" fill="#0088FE" name="Residents" />
                          <Bar dataKey="nonResidents" fill="#00C49F" name="Non-Residents" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Enrollment Status</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Housing Assistance</span>
                          <span className="text-sm font-medium">169 participants</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "62%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Financial Counseling</span>
                          <span className="text-sm font-medium">103 participants</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Job Training</span>
                          <span className="text-sm font-medium">83 participants</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="active">
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="active">Active Cases</TabsTrigger>
                <TabsTrigger value="pending">Pending Review</TabsTrigger>
                <TabsTrigger value="new">New Applications</TabsTrigger>
                <TabsTrigger value="closed">Recently Closed</TabsTrigger>
              </TabsList>

              <TabsContent value="active">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Resident
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Program
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Case Manager
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Last Updated
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <UserIcon className="h-6 w-6 text-gray-500" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                                <div className="text-sm text-gray-500">ID: 10045</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Housing Assistance</div>
                            <div className="text-sm text-gray-500">Section 8</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Maria Rodriguez</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 14, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <UserIcon className="h-6 w-6 text-gray-500" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Michael Brown</div>
                                <div className="text-sm text-gray-500">ID: 10046</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Employment Services</div>
                            <div className="text-sm text-gray-500">Job Training</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">John Smith</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 12, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                                <UserIcon className="h-6 w-6 text-gray-500" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">Emily Davis</div>
                                <div className="text-sm text-gray-500">ID: 10047</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Financial Counseling</div>
                            <div className="text-sm text-gray-500">Budget Planning</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">Maria Rodriguez</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                              Review Needed
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 10, 2025</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                      <Button variant="outline" size="sm">
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
                          <span className="font-medium">124</span> results
                        </p>
                      </div>
                      <div>
                        <nav
                          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                          aria-label="Pagination"
                        >
                          <Button variant="outline" size="sm" className="rounded-l-md">
                            Previous
                          </Button>
                          <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600">
                            1
                          </Button>
                          <Button variant="outline" size="sm">
                            2
                          </Button>
                          <Button variant="outline" size="sm">
                            3
                          </Button>
                          <Button variant="outline" size="sm" className="rounded-r-md">
                            Next
                          </Button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pending">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Pending Review Cases</h3>
                  <p className="text-gray-600">There are 18 cases pending your review.</p>
                  <Button className="mt-4">View All Pending Cases</Button>
                </div>
              </TabsContent>

              <TabsContent value="new">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">New Applications</h3>
                  <p className="text-gray-600">There are 7 new applications awaiting processing.</p>
                  <Button className="mt-4">Process Applications</Button>
                </div>
              </TabsContent>

              <TabsContent value="closed">
                <div className="bg-white rounded-lg shadow p-6 text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Recently Closed Cases</h3>
                  <p className="text-gray-600">View cases that were closed in the last 30 days.</p>
                  <Button className="mt-4">View Closed Cases</Button>
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

