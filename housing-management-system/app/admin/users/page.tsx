import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChartIcon,
  BellIcon,
  ClipboardListIcon,
  DatabaseIcon,
  FileTextIcon,
  GlobeIcon,
  HomeIcon,
  LockIcon,
  MailIcon,
  SearchIcon,
  ServerIcon,
  SettingsIcon,
  GitBranchIcon,
  UserIcon,
  UsersIcon,
  CalendarIcon,
  UserPlusIcon,
  FilterIcon,
  DownloadIcon,
} from "lucide-react"

export default function UserManagement() {
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
                <p className="text-gray-600">Manage system users, roles, and permissions</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">System Users</h2>
                <p className="text-gray-600">Manage all users and their access levels</p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <Button variant="outline">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <UserPlusIcon className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Users</TabsTrigger>
                <TabsTrigger value="admins">Administrators</TabsTrigger>
                <TabsTrigger value="staff">Staff</TabsTrigger>
                <TabsTrigger value="clients">Clients</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle>User Directory</CardTitle>
                      <div className="relative w-64">
                        <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input placeholder="Search users..." className="pl-8" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Role</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-left py-3 px-4 font-medium text-gray-600">Last Active</th>
                            <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                  JS
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium">John Smith</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">john.smith@example.com</td>
                            <td className="py-3 px-4">
                              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Administrator
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className="flex items-center">
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                                Active
                              </span>
                            </td>
                            <td className="py-3 px-4">Now</td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="border-b hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                  MR
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium">Maria Rodriguez</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">maria.rodriguez@example.com</td>
                            <td className="py-3 px-4">
                              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Case Manager
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className="flex items-center">
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
                                Active
                              </span>
                            </td>
                            <td className="py-3 px-4">2 hours ago</td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                  DJ
                                </div>
                                <div className="ml-3">
                                  <p className="font-medium">David Johnson</p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-4">david.johnson@example.com</td>
                            <td className="py-3 px-4">
                              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                Staff
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className="flex items-center">
                                <span className="h-2.5 w-2.5 rounded-full bg-gray-500 mr-2"></span>
                                Inactive
                              </span>
                            </td>
                            <td className="py-3 px-4">3 days ago</td>
                            <td className="py-3 px-4 text-right">
                              <Button variant="ghost" size="sm">
                                Edit
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-sm text-gray-500">Showing 3 of 25 users</p>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Previous
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="admins">
                <Card>
                  <CardHeader>
                    <CardTitle>Administrators</CardTitle>
                    <CardDescription>Users with full system access</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Administrator Management</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        This section allows you to manage users with administrator privileges.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="staff">
                <Card>
                  <CardHeader>
                    <CardTitle>Staff Members</CardTitle>
                    <CardDescription>Case managers and support staff</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Staff Management</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        This section allows you to manage case managers and support staff.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="clients">
                <Card>
                  <CardHeader>
                    <CardTitle>Client Accounts</CardTitle>
                    <CardDescription>Resident and client users</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Client Management</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        This section allows you to manage resident and client accounts.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

