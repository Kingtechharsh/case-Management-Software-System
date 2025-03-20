import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChartIcon,
  ClipboardListIcon,
  DatabaseIcon,
  GlobeIcon,
  HomeIcon,
  LockIcon,
  MailIcon,
  SaveIcon,
  ServerIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
  FileTextIcon,
  CalendarIcon,
  BellIcon,
  GitBranchIcon,
} from "lucide-react"

export default function AdminSettings() {
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
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
                <p className="text-gray-600">Configure and manage system settings</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
            <Tabs defaultValue="general" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="database">Database</TabsTrigger>
                <TabsTrigger value="integrations">Integrations</TabsTrigger>
              </TabsList>

              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Settings</CardTitle>
                    <CardDescription>Configure basic system settings and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">System Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="system-name">System Name</Label>
                          <Input id="system-name" defaultValue="Housing Management System" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="system-version">System Version</Label>
                          <Input id="system-version" defaultValue="2.4.1" disabled />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization-name">Organization Name</Label>
                          <Input id="organization-name" defaultValue="Community Housing Services" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="admin-email">Administrator Email</Label>
                          <Input id="admin-email" defaultValue="admin@example.com" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Regional Settings</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="america_new_york">
                            <SelectTrigger id="timezone">
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="america_new_york">America/New York (UTC-05:00)</SelectItem>
                              <SelectItem value="america_chicago">America/Chicago (UTC-06:00)</SelectItem>
                              <SelectItem value="america_denver">America/Denver (UTC-07:00)</SelectItem>
                              <SelectItem value="america_los_angeles">America/Los Angeles (UTC-08:00)</SelectItem>
                              <SelectItem value="europe_london">Europe/London (UTC+00:00)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="date-format">Date Format</Label>
                          <Select defaultValue="mdy">
                            <SelectTrigger id="date-format">
                              <SelectValue placeholder="Select date format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                              <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                              <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="language">Default Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger id="language">
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="currency">Currency</Label>
                          <Select defaultValue="usd">
                            <SelectTrigger id="currency">
                              <SelectValue placeholder="Select currency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="usd">USD ($)</SelectItem>
                              <SelectItem value="eur">EUR (€)</SelectItem>
                              <SelectItem value="gbp">GBP (£)</SelectItem>
                              <SelectItem value="cad">CAD ($)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Interface Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="dark-mode" className="block">
                              Enable Dark Mode
                            </Label>
                            <p className="text-sm text-gray-500">Allow users to switch to dark mode</p>
                          </div>
                          <Switch id="dark-mode" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="notifications" className="block">
                              System Notifications
                            </Label>
                            <p className="text-sm text-gray-500">Show system notifications to users</p>
                          </div>
                          <Switch id="notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="analytics" className="block">
                              Usage Analytics
                            </Label>
                            <p className="text-sm text-gray-500">Collect anonymous usage data to improve the system</p>
                          </div>
                          <Switch id="analytics" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>
                      <SaveIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                    <CardDescription>Configure security and authentication settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password Policy</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="min-length">Minimum Password Length</Label>
                          <Select defaultValue="8">
                            <SelectTrigger id="min-length">
                              <SelectValue placeholder="Select minimum length" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="6">6 characters</SelectItem>
                              <SelectItem value="8">8 characters</SelectItem>
                              <SelectItem value="10">10 characters</SelectItem>
                              <SelectItem value="12">12 characters</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-expiry">Password Expiry</Label>
                          <Select defaultValue="90">
                            <SelectTrigger id="password-expiry">
                              <SelectValue placeholder="Select expiry period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="60">60 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                              <SelectItem value="180">180 days</SelectItem>
                              <SelectItem value="none">Never</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="require-uppercase" className="block">
                              Require Uppercase Letters
                            </Label>
                            <p className="text-sm text-gray-500">
                              Passwords must contain at least one uppercase letter
                            </p>
                          </div>
                          <Switch id="require-uppercase" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="require-numbers" className="block">
                              Require Numbers
                            </Label>
                            <p className="text-sm text-gray-500">Passwords must contain at least one number</p>
                          </div>
                          <Switch id="require-numbers" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="require-special" className="block">
                              Require Special Characters
                            </Label>
                            <p className="text-sm text-gray-500">
                              Passwords must contain at least one special character
                            </p>
                          </div>
                          <Switch id="require-special" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Authentication</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="two-factor" className="block">
                              Two-Factor Authentication
                            </Label>
                            <p className="text-sm text-gray-500">Require two-factor authentication for all users</p>
                          </div>
                          <Switch id="two-factor" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="session-timeout" className="block">
                              Session Timeout
                            </Label>
                            <p className="text-sm text-gray-500">Automatically log out inactive users</p>
                          </div>
                          <Select defaultValue="30">
                            <SelectTrigger id="session-timeout" className="w-[180px]">
                              <SelectValue placeholder="Select timeout" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="60">1 hour</SelectItem>
                              <SelectItem value="120">2 hours</SelectItem>
                              <SelectItem value="none">Never</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="login-attempts" className="block">
                              Failed Login Attempts
                            </Label>
                            <p className="text-sm text-gray-500">Lock account after multiple failed login attempts</p>
                          </div>
                          <Select defaultValue="5">
                            <SelectTrigger id="login-attempts" className="w-[180px]">
                              <SelectValue placeholder="Select attempts" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="3">3 attempts</SelectItem>
                              <SelectItem value="5">5 attempts</SelectItem>
                              <SelectItem value="10">10 attempts</SelectItem>
                              <SelectItem value="none">Disabled</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>
                      <SaveIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="email">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Settings</CardTitle>
                    <CardDescription>Configure email server and notification settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">SMTP Configuration</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="smtp-server">SMTP Server</Label>
                          <Input id="smtp-server" placeholder="smtp.example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="smtp-port">SMTP Port</Label>
                          <Input id="smtp-port" placeholder="587" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="smtp-username">SMTP Username</Label>
                          <Input id="smtp-username" placeholder="username" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="smtp-password">SMTP Password</Label>
                          <Input id="smtp-password" type="password" placeholder="••••••••" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="from-email">From Email</Label>
                          <Input id="from-email" placeholder="noreply@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="from-name">From Name</Label>
                          <Input id="from-name" placeholder="Housing Management System" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="smtp-encryption" className="block">
                            Encryption
                          </Label>
                          <p className="text-sm text-gray-500">Use TLS/SSL for secure email transmission</p>
                        </div>
                        <Switch id="smtp-encryption" defaultChecked />
                      </div>
                      <Button variant="outline">
                        <MailIcon className="h-4 w-4 mr-2" />
                        Test SMTP Connection
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="user-welcome" className="block">
                              User Welcome Emails
                            </Label>
                            <p className="text-sm text-gray-500">Send welcome emails to new users</p>
                          </div>
                          <Switch id="user-welcome" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="password-reset" className="block">
                              Password Reset Emails
                            </Label>
                            <p className="text-sm text-gray-500">Send password reset instructions</p>
                          </div>
                          <Switch id="password-reset" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="system-alerts" className="block">
                              System Alert Emails
                            </Label>
                            <p className="text-sm text-gray-500">Send system alerts to administrators</p>
                          </div>
                          <Switch id="system-alerts" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>
                      <SaveIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="database">
                <Card>
                  <CardHeader>
                    <CardTitle>Database Settings</CardTitle>
                    <CardDescription>Configure database connection and maintenance settings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Database Connection</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="db-type">Database Type</Label>
                          <Select defaultValue="postgres">
                            <SelectTrigger id="db-type">
                              <SelectValue placeholder="Select database type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="postgres">PostgreSQL</SelectItem>
                              <SelectItem value="mysql">MySQL</SelectItem>
                              <SelectItem value="mssql">Microsoft SQL Server</SelectItem>
                              <SelectItem value="oracle">Oracle</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-host">Host</Label>
                          <Input id="db-host" placeholder="localhost" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-port">Port</Label>
                          <Input id="db-port" placeholder="5432" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-name">Database Name</Label>
                          <Input id="db-name" placeholder="housing_management" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-username">Username</Label>
                          <Input id="db-username" placeholder="dbuser" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="db-password">Password</Label>
                          <Input id="db-password" type="password" placeholder="••••••••" />
                        </div>
                      </div>
                      <Button variant="outline">
                        <DatabaseIcon className="h-4 w-4 mr-2" />
                        Test Connection
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Backup & Maintenance</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="auto-backup" className="block">
                              Automatic Backups
                            </Label>
                            <p className="text-sm text-gray-500">Schedule regular database backups</p>
                          </div>
                          <Switch id="auto-backup" defaultChecked />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="backup-frequency">Backup Frequency</Label>
                          <Select defaultValue="daily">
                            <SelectTrigger id="backup-frequency">
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hourly">Hourly</SelectItem>
                              <SelectItem value="daily">Daily</SelectItem>
                              <SelectItem value="weekly">Weekly</SelectItem>
                              <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="backup-retention">Backup Retention</Label>
                          <Select defaultValue="30">
                            <SelectTrigger id="backup-retention">
                              <SelectValue placeholder="Select retention period" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="7">7 days</SelectItem>
                              <SelectItem value="14">14 days</SelectItem>
                              <SelectItem value="30">30 days</SelectItem>
                              <SelectItem value="90">90 days</SelectItem>
                              <SelectItem value="365">1 year</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline">
                            <DatabaseIcon className="h-4 w-4 mr-2" />
                            Backup Now
                          </Button>
                          <Button variant="outline">
                            <ServerIcon className="h-4 w-4 mr-2" />
                            Optimize Database
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>
                      <SaveIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="integrations">
                <Card>
                  <CardHeader>
                    <CardTitle>Integrations</CardTitle>
                    <CardDescription>Configure third-party integrations and APIs</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">API Configuration</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="enable-api" className="block">
                              Enable API Access
                            </Label>
                            <p className="text-sm text-gray-500">Allow external systems to access the API</p>
                          </div>
                          <Switch id="enable-api" defaultChecked />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="api-key">API Key</Label>
                          <div className="flex space-x-2">
                            <Input
                              id="api-key"
                              value="sk_live_51KjH2bGhXYs9Wm5tZxYs9Wm5t"
                              disabled
                              className="flex-1"
                            />
                            <Button variant="outline">Regenerate</Button>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Keep this key secret. It provides full access to your system via the API.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="api-rate-limit">Rate Limiting</Label>
                          <Select defaultValue="1000">
                            <SelectTrigger id="api-rate-limit">
                              <SelectValue placeholder="Select rate limit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="100">100 requests/minute</SelectItem>
                              <SelectItem value="500">500 requests/minute</SelectItem>
                              <SelectItem value="1000">1000 requests/minute</SelectItem>
                              <SelectItem value="5000">5000 requests/minute</SelectItem>
                              <SelectItem value="none">Unlimited</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Third-Party Services</h3>
                      <div className="space-y-6">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="bg-blue-100 p-2 rounded-full mr-3">
                                <GlobeIcon className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-medium">Google Maps API</h4>
                                <p className="text-sm text-gray-500">For location services and mapping</p>
                              </div>
                            </div>
                            <Switch id="google-maps-api" defaultChecked />
                          </div>
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="google-maps-key">API Key</Label>
                            <Input id="google-maps-key" placeholder="Enter Google Maps API key" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="bg-green-100 p-2 rounded-full mr-3">
                                <LockIcon className="h-5 w-5 text-green-600" />
                              </div>
                              <div>
                                <h4 className="font-medium">Stripe Payment Gateway</h4>
                                <p className="text-sm text-gray-500">For processing payments and subscriptions</p>
                              </div>
                            </div>
                            <Switch id="stripe-api" />
                          </div>
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="stripe-public-key">Public Key</Label>
                            <Input id="stripe-public-key" placeholder="Enter Stripe public key" />
                          </div>
                          <div className="space-y-2 mt-2">
                            <Label htmlFor="stripe-secret-key">Secret Key</Label>
                            <Input id="stripe-secret-key" type="password" placeholder="Enter Stripe secret key" />
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                              <div className="bg-purple-100 p-2 rounded-full mr-3">
                                <MailIcon className="h-5 w-5 text-purple-600" />
                              </div>
                              <div>
                                <h4 className="font-medium">Mailchimp Integration</h4>
                                <p className="text-sm text-gray-500">For email marketing campaigns</p>
                              </div>
                            </div>
                            <Switch id="mailchimp-api" />
                          </div>
                          <div className="space-y-2 mt-4">
                            <Label htmlFor="mailchimp-key">API Key</Label>
                            <Input id="mailchimp-key" placeholder="Enter Mailchimp API key" />
                          </div>
                          <div className="space-y-2 mt-2">
                            <Label htmlFor="mailchimp-list">Default List ID</Label>
                            <Input id="mailchimp-list" placeholder="Enter default list ID" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>
                      <SaveIcon className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

