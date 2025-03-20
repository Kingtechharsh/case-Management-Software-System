"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AdvancedReportBuilder } from "@/components/advanced-report-builder"
import {
  ClipboardListIcon,
  FileTextIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
  CalendarIcon,
  BarChartIcon,
  SettingsIcon,
  LockIcon,
  GlobeIcon,
  DatabaseIcon,
  BellIcon,
  ServerIcon,
  MailIcon,
  GitBranchIcon,
  LineChartIcon,
  PieChartIcon,
  ClockIcon,
} from "lucide-react"

export default function ReportsPage() {
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
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
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
                <p className="text-gray-600">Create, customize, and analyze data with advanced reporting tools</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
            <Tabs defaultValue="builder" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="builder" className="flex items-center justify-center space-x-2 py-2">
                  <DatabaseIcon className="h-4 w-4" />
                  <span>Advanced Report Builder</span>
                </TabsTrigger>
                <TabsTrigger value="dashboard" className="flex items-center justify-center space-x-2 py-2">
                  <BarChartIcon className="h-4 w-4" />
                  <span>Report Dashboard</span>
                </TabsTrigger>
                <TabsTrigger value="scheduled" className="flex items-center justify-center space-x-2 py-2">
                  <ClockIcon className="h-4 w-4" />
                  <span>Scheduled Reports</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="builder">
                <AdvancedReportBuilder />
              </TabsContent>

              <TabsContent value="dashboard">
                <Card>
                  <CardHeader>
                    <CardTitle>Report Dashboard</CardTitle>
                    <CardDescription>View and interact with your most important reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-16 px-4">
                      <div className="bg-blue-50 rounded-full p-6 mb-6">
                        <BarChartIcon className="h-12 w-12 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Dashboard Coming Soon</h3>
                      <p className="text-gray-600 max-w-md mx-auto text-center mb-8">
                        Our team is working on an interactive dashboard to visualize your most important metrics at a
                        glance. It will be available in the next update.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                              <LineChartIcon className="h-5 w-5 text-green-600" />
                            </div>
                            <h4 className="font-medium">Real-time Data</h4>
                          </div>
                          <p className="text-sm text-gray-500">
                            Live updates and metrics tracking for all your programs.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="bg-purple-100 p-2 rounded-full mr-3">
                              <PieChartIcon className="h-5 w-5 text-purple-600" />
                            </div>
                            <h4 className="font-medium">Visual Analytics</h4>
                          </div>
                          <p className="text-sm text-gray-500">
                            Interactive charts and graphs to visualize program performance.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="bg-amber-100 p-2 rounded-full mr-3">
                              <FileTextIcon className="h-5 w-5 text-amber-600" />
                            </div>
                            <h4 className="font-medium">Custom Reports</h4>
                          </div>
                          <p className="text-sm text-gray-500">Save and schedule your most frequently used reports.</p>
                        </div>
                      </div>
                      <div className="mt-8">
                        <Button
                          variant="outline"
                          onClick={() => document.querySelector('[data-value="builder"]')?.click()}
                        >
                          Use Report Builder Instead
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="scheduled">
                <Card>
                  <CardHeader>
                    <CardTitle>Scheduled Reports</CardTitle>
                    <CardDescription>Manage your automated report generation and distribution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center justify-center py-12 px-4">
                      <div className="bg-purple-50 rounded-full p-6 mb-6">
                        <ClockIcon className="h-12 w-12 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduled Reports Coming Soon</h3>
                      <p className="text-gray-600 max-w-md mx-auto text-center mb-6">
                        Our team is developing automated report scheduling capabilities. Soon you'll be able to create,
                        schedule, and distribute reports automatically to stakeholders.
                      </p>

                      {/* Sample Report Preview */}
                      <div className="w-full max-w-4xl mb-8 bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden">
                        <div className="bg-purple-600 text-white px-4 py-3 flex justify-between items-center">
                          <div className="flex items-center">
                            <FileTextIcon className="h-5 w-5 mr-2" />
                            <span className="font-medium">Monthly Program Enrollment Report</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>Scheduled: Monthly on 1st</span>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h4 className="font-medium text-gray-900">Program Enrollment Trends</h4>
                              <p className="text-sm text-gray-500">Last 6 months data comparison</p>
                            </div>
                            <div className="flex space-x-2 text-sm">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Email Distribution</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">PDF Format</span>
                            </div>
                          </div>
                          <div className="h-48 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center mb-4">
                            <div className="text-center">
                              <BarChartIcon className="h-10 w-10 text-gray-300 mx-auto mb-2" />
                              <p className="text-gray-500">Chart visualization will appear here</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-4">
                            <div className="bg-blue-50 p-3 rounded-lg text-center">
                              <p className="text-sm text-gray-600">Total Enrollments</p>
                              <p className="text-xl font-bold text-blue-700">1,248</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg text-center">
                              <p className="text-sm text-gray-600">Completion Rate</p>
                              <p className="text-xl font-bold text-green-700">68%</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg text-center">
                              <p className="text-sm text-gray-600">Growth Rate</p>
                              <p className="text-xl font-bold text-purple-700">+12%</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-sm text-gray-500">Recipients: 5 team members</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="bg-blue-100 p-2 rounded-full mr-3">
                              <CalendarIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <h4 className="font-medium">Flexible Scheduling</h4>
                          </div>
                          <p className="text-sm text-gray-500">
                            Set daily, weekly, monthly or custom recurring schedules.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="bg-green-100 p-2 rounded-full mr-3">
                              <MailIcon className="h-5 w-5 text-green-600" />
                            </div>
                            <h4 className="font-medium">Smart Distribution</h4>
                          </div>
                          <p className="text-sm text-gray-500">
                            Automatically send to specific teams based on report content.
                          </p>
                        </div>
                        <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center mb-3">
                            <div className="bg-amber-100 p-2 rounded-full mr-3">
                              <FileTextIcon className="h-5 w-5 text-amber-600" />
                            </div>
                            <h4 className="font-medium">Multiple Formats</h4>
                          </div>
                          <p className="text-sm text-gray-500">Export as PDF, Excel, CSV, or interactive dashboards.</p>
                        </div>
                      </div>
                      <div className="mt-8">
                        <Button
                          variant="outline"
                          onClick={() => document.querySelector('[data-value="builder"]')?.click()}
                        >
                          Use Report Builder Instead
                        </Button>
                      </div>
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

