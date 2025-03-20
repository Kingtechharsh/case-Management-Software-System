import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  ArrowLeftIcon,
  BellIcon,
  CameraIcon,
  CheckCircleIcon,
  HomeIcon,
  KeyIcon,
  LockIcon,
  LogOutIcon,
  PencilIcon,
  SaveIcon,
  ShieldIcon,
  UserIcon,
} from "lucide-react"

export default function ProfilePage() {
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
            <Link href="/enrollment-tracking" className="text-gray-600 hover:text-blue-600 font-medium">
              Enrollment Tracking
            </Link>
            <Link href="/support" className="text-gray-600 hover:text-blue-600 font-medium">
              Support
            </Link>
            <Link href="/profile" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
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
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and account settings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                      <UserIcon className="h-12 w-12 text-blue-600" />
                    </div>
                    <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-1.5 rounded-full">
                      <CameraIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Sarah Johnson</h2>
                  <p className="text-gray-500 mb-4">sarah.johnson@example.com</p>
                  <div className="flex items-center text-sm text-green-600 mb-6">
                    <CheckCircleIcon className="h-4 w-4 mr-1" />
                    <span>Verified Account</span>
                  </div>
                  <div className="w-full space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <UserIcon className="h-4 w-4 mr-2" />
                      Personal Information
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <LockIcon className="h-4 w-4 mr-2" />
                      Security Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BellIcon className="h-4 w-4 mr-2" />
                      Notifications
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOutIcon className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Personal Information</CardTitle>
                        <CardDescription>Update your personal details and contact information</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <PencilIcon className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="Sarah" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Johnson" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="sarah.johnson@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="(555) 123-4567" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" defaultValue="1985-06-15" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <select
                          id="gender"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          defaultValue="female"
                        >
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="other">Other</option>
                          <option value="prefer_not_to_say">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" defaultValue="123 Main Street, Apt 4B" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" defaultValue="Springfield" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" defaultValue="IL" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input id="zipCode" defaultValue="62704" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us a little about yourself"
                        className="min-h-[100px]"
                        defaultValue="Housing assistance program participant with a background in healthcare administration. Looking to improve my financial stability and eventually transition to homeownership."
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
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
                    <CardDescription>Manage your password and account security preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Change Password</h3>
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                      <Button>
                        <KeyIcon className="h-4 w-4 mr-2" />
                        Update Password
                      </Button>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Enable Two-Factor Authentication</p>
                          <p className="text-sm text-gray-500">
                            Add an extra layer of security to your account by requiring a verification code
                          </p>
                        </div>
                        <Switch id="two-factor" />
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="text-lg font-medium mb-4">Login Sessions</h3>
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium">Current Session</p>
                              <p className="text-sm text-gray-500">Springfield, IL • Chrome on Windows</p>
                              <p className="text-xs text-gray-500 mt-1">Started: Today, 9:32 AM</p>
                            </div>
                            <div className="bg-green-100 px-2 py-1 rounded text-xs font-medium text-green-800">
                              Active Now
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" className="w-full">
                          <ShieldIcon className="h-4 w-4 mr-2" />
                          Sign Out of All Other Sessions
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Manage how and when you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Email Notifications</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Program Updates</p>
                              <p className="text-sm text-gray-500">Receive updates about your housing program</p>
                            </div>
                            <Switch id="program-updates" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Document Status</p>
                              <p className="text-sm text-gray-500">
                                Notifications when your documents are approved or require attention
                              </p>
                            </div>
                            <Switch id="document-status" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Appointment Reminders</p>
                              <p className="text-sm text-gray-500">Receive reminders about upcoming appointments</p>
                            </div>
                            <Switch id="appointment-reminders" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Newsletter</p>
                              <p className="text-sm text-gray-500">
                                Monthly newsletter with resources and program information
                              </p>
                            </div>
                            <Switch id="newsletter" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-medium mb-4">SMS Notifications</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable SMS Notifications</p>
                              <p className="text-sm text-gray-500">Receive text messages for important updates</p>
                            </div>
                            <Switch id="sms-notifications" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone-number">Phone Number for SMS</Label>
                            <Input id="phone-number" type="tel" defaultValue="(555) 123-4567" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-medium mb-4">In-App Notifications</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Messages</p>
                              <p className="text-sm text-gray-500">Notifications for new messages from case managers</p>
                            </div>
                            <Switch id="message-notifications" defaultChecked />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Form Deadlines</p>
                              <p className="text-sm text-gray-500">
                                Reminders about upcoming form submission deadlines
                              </p>
                            </div>
                            <Switch id="form-deadlines" defaultChecked />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

