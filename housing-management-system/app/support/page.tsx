import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeftIcon,
  BellIcon,
  CheckCircleIcon,
  FileTextIcon,
  HomeIcon,
  MessageSquareIcon,
  PhoneIcon,
  SendIcon,
  UserIcon,
} from "lucide-react"

export default function SupportPage() {
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
            <Link href="/support" className="text-blue-600 font-medium">
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
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Contact Support</h1>
          <p className="text-gray-600">Get help with your housing services and account</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Support Options */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Support Options</CardTitle>
                <CardDescription>Choose how you'd like to get help</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg flex items-start">
                  <MessageSquareIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Message Your Case Manager</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Send a secure message directly to your assigned case manager.
                    </p>
                    <Button variant="link" className="p-0 h-auto mt-2" asChild>
                      <Link href="/messages">Open Messages</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg flex items-start">
                  <PhoneIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Call Support Hotline</h3>
                    <p className="text-sm text-gray-600 mt-1">Speak directly with a support representative.</p>
                    <p className="text-sm font-medium text-gray-900 mt-2">(555) 123-4567</p>
                    <p className="text-xs text-gray-500">Monday-Friday, 8:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg flex items-start">
                  <FileTextIcon className="h-5 w-5 text-purple-600 mt-0.5 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Browse FAQ</h3>
                    <p className="text-sm text-gray-600 mt-1">Find answers to commonly asked questions.</p>
                    <Button variant="link" className="p-0 h-auto mt-2" asChild>
                      <Link href="/faq">View FAQ</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Locations</CardTitle>
                <CardDescription>Visit us in person</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium text-gray-900">Main Office</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    123 Main Street
                    <br />
                    Springfield, IL 62704
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Monday-Friday, 9:00 AM - 5:00 PM</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">North Branch</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    456 Oak Avenue
                    <br />
                    Springfield, IL 62702
                  </p>
                  <p className="text-xs text-gray-500 mt-2">Monday-Thursday, 10:00 AM - 4:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll respond as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="documents">Document Submission</SelectItem>
                        <SelectItem value="payments">Payments</SelectItem>
                        <SelectItem value="application">Application Status</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your issue or question in detail"
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachments">Attachments (Optional)</Label>
                    <Input id="attachments" type="file" />
                    <p className="text-xs text-gray-500">
                      You can attach screenshots or documents to help us better understand your issue. Maximum file
                      size: 10MB.
                    </p>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>
                  <SendIcon className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
              <div>
                <h3 className="font-medium text-gray-900">We're Here to Help</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Our support team typically responds within 1 business day. For urgent matters, please call our support
                  hotline for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">&copy; 2025 Housing Management System. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-600 hover:text-blue-600">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

