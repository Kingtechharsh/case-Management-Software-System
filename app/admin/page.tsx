import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChartIcon,
  BellIcon,
  ClipboardListIcon,
  CogIcon,
  DatabaseIcon,
  FileTextIcon,
  GitBranchIcon,
  GlobeIcon,
  HomeIcon,
  LockIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  ShieldIcon,
  UserIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react"

export default function AdminDashboard() {
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
              >
                <BarChartIcon className="h-5 w-5 mr-2" />
                Dashboard
              </Link>
              <Link
                href="/case-management"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <UsersIcon className="h-5 w-5 mr-2" />
                Case Management
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
                <p className="text-sm font-medium text-gray-700">Admin User</p>
                <p className="text-xs text-gray-500">System Administrator</p>
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
                  <Input type="search" placeholder="Search..." className="pl-10" />
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

          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-8 rounded-b-lg shadow-md">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                  <p className="text-blue-100 mt-1">System overview and management</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-3">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1">
                    <Select defaultValue="today">
                      <SelectTrigger className="w-[180px] border-0 bg-transparent text-white">
                        <SelectValue placeholder="Select time period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">This Week</SelectItem>
                        <SelectItem value="month">This Month</SelectItem>
                        <SelectItem value="year">This Year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm">
                    <CogIcon className="h-4 w-4 mr-2" />
                    System Settings
                  </Button>
                </div>
              </div>
            </div>

            {/* Main content area with padding */}
            <div className="p-6">
              {/* Stat cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-blue-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Total Users</p>
                        <p className="text-3xl font-bold text-gray-900">1,248</p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <UsersIcon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-green-600">
                        <span className="font-medium">+5.2%</span> from last month
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-green-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Active Programs</p>
                        <p className="text-3xl font-bold text-gray-900">12</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <ClipboardListIcon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-green-600">
                        <span className="font-medium">+2</span> new programs
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-purple-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">System Uptime</p>
                        <p className="text-3xl font-bold text-gray-900">99.9%</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded-full">
                        <ShieldIcon className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">Last restart: 45 days ago</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md overflow-hidden">
                  <div className="h-1 bg-amber-500"></div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Pending Approvals</p>
                        <p className="text-3xl font-bold text-gray-900">24</p>
                      </div>
                      <div className="bg-amber-100 p-3 rounded-full">
                        <FileTextIcon className="h-6 w-6 text-amber-600" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-amber-600">
                        <span className="font-medium">8</span> require immediate attention
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs section */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
                <Tabs defaultValue="overview" className="w-full">
                  <div className="px-6 pt-6">
                    <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1 rounded-lg">
                      <TabsTrigger
                        value="overview"
                        className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                      >
                        <BarChartIcon className="h-4 w-4 mr-2" />
                        System Overview
                      </TabsTrigger>
                      <TabsTrigger
                        value="users"
                        className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                      >
                        <UsersIcon className="h-4 w-4 mr-2" />
                        User Activity
                      </TabsTrigger>
                      <TabsTrigger
                        value="programs"
                        className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                      >
                        <ClipboardListIcon className="h-4 w-4 mr-2" />
                        Program Status
                      </TabsTrigger>
                      <TabsTrigger
                        value="logs"
                        className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
                      >
                        <FileTextIcon className="h-4 w-4 mr-2" />
                        System Logs
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="overview" className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <BarChartIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Resource Utilization
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-sm font-medium text-gray-500">CPU Usage</p>
                              <p className="text-sm font-medium text-blue-600">32%</p>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-sm font-medium text-gray-500">Memory Usage</p>
                              <p className="text-sm font-medium text-green-600">45%</p>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                            </div>
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                              <p className="text-sm font-medium text-gray-500">Storage Usage</p>
                              <p className="text-sm font-medium text-purple-600">68%</p>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2.5">
                              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <GitBranchIcon className="h-5 w-5 mr-2 text-blue-600" />
                          Recent System Updates
                        </h3>
                        <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Update
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Version
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Security Patch
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">v2.4.1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 15, 2025</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Completed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Feature Update
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">v2.4.0</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 10, 2025</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Completed
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                  Database Optimization
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">v2.3.5</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 5, 2025</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Completed
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="users" className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-lg font-medium flex items-center">
                          <UsersIcon className="h-5 w-5 mr-2 text-blue-600" />
                          User Management
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">Manage system users and permissions</p>
                      </div>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <PlusIcon className="h-4 w-4 mr-2" />
                        Add User
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                        <Select defaultValue="all">
                          <SelectTrigger className="w-[150px] border-0 bg-transparent">
                            <SelectValue placeholder="Filter by role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Roles</SelectItem>
                            <SelectItem value="admin">Administrators</SelectItem>
                            <SelectItem value="manager">Case Managers</SelectItem>
                            <SelectItem value="staff">Staff</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                        <Select defaultValue="active">
                          <SelectTrigger className="w-[150px] border-0 bg-transparent">
                            <SelectValue placeholder="Filter by status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Inactive</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="relative flex-1 min-w-[200px]">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                          <SearchIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <Input placeholder="Search users..." className="pl-10 bg-white border-gray-100 shadow-sm" />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Name
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Role
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
                              Last Active
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
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                  <UserIcon className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">John Smith</div>
                                  <div className="text-sm text-gray-500">john.smith@example.com</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Administrator</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Now</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                                  <UserIcon className="h-6 w-6 text-purple-600" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">Maria Rodriguez</div>
                                  <div className="text-sm text-gray-500">maria.rodriguez@example.com</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Case Manager</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours ago</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                                  <UserIcon className="h-6 w-6 text-gray-500" />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">David Johnson</div>
                                  <div className="text-sm text-gray-500">david.johnson@example.com</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">Staff</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                Inactive
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 days ago</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                              >
                                Edit
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>

                  <TabsContent value="programs" className="p-6">
                    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-8">
                      <div className="text-center py-12">
                        <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ClipboardListIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Program Status Dashboard</h3>
                        <p className="text-gray-600 max-w-md mx-auto">
                          The program status dashboard is currently being updated. Please check back soon.
                        </p>
                        <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                          <PlusIcon className="h-4 w-4 mr-2" />
                          Add New Program
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="logs" className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-lg font-medium flex items-center">
                          <FileTextIcon className="h-5 w-5 mr-2 text-blue-600" />
                          System Logs
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">View and analyze system activity logs</p>
                      </div>
                      <div className="flex space-x-2">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2">
                          <Select defaultValue="all">
                            <SelectTrigger className="w-[150px] border-0 bg-transparent">
                              <SelectValue placeholder="Log type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Logs</SelectItem>
                              <SelectItem value="error">Error Logs</SelectItem>
                              <SelectItem value="security">Security Logs</SelectItem>
                              <SelectItem value="activity">Activity Logs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button variant="outline" className="border-gray-200 bg-white shadow-sm">
                          <FileTextIcon className="h-4 w-4 mr-2" />
                          Download Logs
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Timestamp
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Level
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Source
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Message
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-03-15 14:32:45</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                INFO
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">User Service</td>
                            <td className="px-6 py-4 text-sm text-gray-900">User login successful: john.smith</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-03-15 14:30:12</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                WARN
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Database</td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              Slow query detected: SELECT * FROM cases WHERE status = 'active'
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2025-03-15 14:28:55</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                ERROR
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              Authentication Service
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                              Failed login attempt: user.unknown (IP: 192.168.1.45)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-sm text-gray-500">Showing 3 of 1,245 log entries</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="border-gray-200 bg-white shadow-sm">
                          Previous
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-200 bg-white shadow-sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

