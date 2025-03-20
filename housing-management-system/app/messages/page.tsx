import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeftIcon,
  BellIcon,
  FileTextIcon,
  HomeIcon,
  MessageSquareIcon,
  PaperclipIcon,
  SearchIcon,
  SendIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react"

export default function MessagesPage() {
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
            <Link href="/messages" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Messages
            </Link>
            <Link href="/enrollment-tracking" className="text-gray-600 hover:text-blue-600 font-medium">
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
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Messages</h1>
          <p className="text-gray-600">Communicate securely with your case manager and support team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle>Conversations</CardTitle>
                  <Button variant="ghost" size="sm">
                    <MessageSquareIcon className="h-4 w-4 mr-2" />
                    New
                  </Button>
                </div>
                <div className="relative mt-2">
                  <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search messages..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent className="h-[calc(100vh-350px)] overflow-y-auto">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="unread">Unread</TabsTrigger>
                    <TabsTrigger value="flagged">Flagged</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-2">
                    <div className="bg-blue-50 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2">
                            JS
                          </div>
                          <span className="font-medium">John Smith</span>
                        </div>
                        <span className="text-xs text-gray-500">10:30 AM</span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        Hello Sarah, I've reviewed your recent documentation and everything looks good. Let's discuss
                        next steps in our upcoming meeting.
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Case Manager</span>
                        <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full">New</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2">
                            HS
                          </div>
                          <span className="font-medium">Housing Support</span>
                        </div>
                        <span className="text-xs text-gray-500">Mar 10</span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        Your maintenance request #4582 has been scheduled for March 18th between 9 AM and 12 PM. Please
                        ensure someone is available to provide access.
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Support Team</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs mr-2">
                            FW
                          </div>
                          <span className="font-medium">Financial Workshop</span>
                        </div>
                        <span className="text-xs text-gray-500">Mar 5</span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        Thank you for registering for our upcoming Financial Literacy Workshop. We're looking forward to
                        seeing you on April 15th at 6:00 PM.
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Program Coordinator</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2">
                            JS
                          </div>
                          <span className="font-medium">John Smith</span>
                        </div>
                        <span className="text-xs text-gray-500">Feb 28</span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        I've approved your utility bill submission. Your housing assistance payment for March has been
                        processed and should be reflected in your account within 3-5 business days.
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Case Manager</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="unread">
                    <div className="bg-blue-50 p-3 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center">
                          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2">
                            JS
                          </div>
                          <span className="font-medium">John Smith</span>
                        </div>
                        <span className="text-xs text-gray-500">10:30 AM</span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">
                        Hello Sarah, I've reviewed your recent documentation and everything looks good. Let's discuss
                        next steps in our upcoming meeting.
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs text-gray-500">Case Manager</span>
                        <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full">New</span>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="flagged">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <MessageSquareIcon className="h-12 w-12 text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-1">No flagged messages</h3>
                      <p className="text-gray-500 max-w-xs">You haven't flagged any messages for follow-up yet.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              <CardHeader className="pb-2 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm mr-3">
                      JS
                    </div>
                    <div>
                      <CardTitle>John Smith</CardTitle>
                      <CardDescription>Case Manager • Housing Assistance Program</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <UsersIcon className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" size="sm">
                      <FileTextIcon className="h-4 w-4 mr-2" />
                      Files
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow overflow-y-auto p-4 h-[calc(100vh-450px)]">
                <div className="space-y-4">
                  {/* Date Separator */}
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-200 h-px flex-grow"></div>
                    <span className="px-2 text-xs text-gray-500">Today, March 14, 2025</span>
                    <div className="bg-gray-200 h-px flex-grow"></div>
                  </div>

                  {/* Case Manager Message */}
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-1">
                      JS
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-800">
                          Hello Sarah, I've reviewed your recent documentation and everything looks good. Let's discuss
                          next steps in our upcoming meeting.
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">10:30 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Case Manager Message with Attachment */}
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-1">
                      JS
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-800 mb-3">
                          I've also attached the updated program guidelines for your reference. Please review them
                          before our meeting.
                        </p>
                        <div className="bg-gray-100 p-2 rounded flex items-center">
                          <FileTextIcon className="h-4 w-4 text-blue-600 mr-2" />
                          <div className="flex-grow">
                            <p className="text-sm font-medium">Program_Guidelines_2025.pdf</p>
                            <p className="text-xs text-gray-500">1.2 MB</p>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ArrowLeftIcon className="h-4 w-4 rotate-180" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">10:32 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start justify-end">
                    <div className="max-w-[75%]">
                      <div className="bg-blue-600 p-3 rounded-lg shadow-sm">
                        <p className="text-white">
                          Thank you, John. I'll review the guidelines and prepare my questions for our meeting. Is there
                          anything specific I should focus on?
                        </p>
                      </div>
                      <div className="flex items-center justify-end mt-1">
                        <span className="text-xs text-gray-500">10:45 AM</span>
                      </div>
                    </div>
                  </div>

                  {/* Date Separator */}
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-200 h-px flex-grow"></div>
                    <span className="px-2 text-xs text-gray-500">February 28, 2025</span>
                    <div className="bg-gray-200 h-px flex-grow"></div>
                  </div>

                  {/* Case Manager Message */}
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-1">
                      JS
                    </div>
                    <div className="max-w-[75%]">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-gray-800">
                          I've approved your utility bill submission. Your housing assistance payment for March has been
                          processed and should be reflected in your account within 3-5 business days.
                        </p>
                      </div>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">2:15 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start justify-end">
                    <div className="max-w-[75%]">
                      <div className="bg-blue-600 p-3 rounded-lg shadow-sm">
                        <p className="text-white">
                          Great! Thank you for processing that so quickly. I appreciate your help.
                        </p>
                      </div>
                      <div className="flex items-center justify-end mt-1">
                        <span className="text-xs text-gray-500">2:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex items-end w-full space-x-2">
                  <div className="flex-grow">
                    <Textarea placeholder="Type your message here..." className="resize-none min-h-[80px]" />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <PaperclipIcon className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="rounded-full">
                      <SendIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

