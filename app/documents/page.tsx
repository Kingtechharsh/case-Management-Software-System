import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowUpIcon,
  FileIcon,
  FileTextIcon,
  FilterIcon,
  FolderIcon,
  HomeIcon,
  ImageIcon,
  SearchIcon,
  SlidersIcon,
  UserIcon,
  CheckCircleIcon,
  ClockIcon,
  ShareIcon,
  StarIcon,
  EyeIcon,
  DownloadIcon,
} from "lucide-react"

export default function DocumentsPage() {
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
            <Link href="/documents" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
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

      <main className="bg-gray-50 min-h-screen pb-12">
        {/* Header Section with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white mb-8">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold mb-2">Document Center</h1>
                <p className="text-blue-100">Access, upload, and manage your important documents</p>
                <div className="flex items-center mt-3 space-x-2">
                  <span className="bg-blue-500/30 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <FileIcon className="h-3 w-3 mr-1" /> 23 Total Documents
                  </span>
                  <span className="bg-green-500/30 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <CheckCircleIcon className="h-3 w-3 mr-1" /> 18 Approved
                  </span>
                  <span className="bg-amber-500/30 text-white text-xs px-2 py-1 rounded-full flex items-center">
                    <ClockIcon className="h-3 w-3 mr-1" /> 5 Pending
                  </span>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <FilterIcon className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  <ArrowUpIcon className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Left Sidebar */}
            <div className="md:col-span-1">
              <Card className="overflow-hidden border-0 shadow-md">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
                  <h3 className="font-medium text-white">Document Categories</h3>
                </div>
                <CardContent className="p-0">
                  <nav className="p-2">
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-blue-50 text-blue-700 mb-1"
                    >
                      <FolderIcon className="h-5 w-5 mr-3 text-blue-600" />
                      All Documents
                      <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">23</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 mb-1"
                    >
                      <FileTextIcon className="h-5 w-5 mr-3 text-gray-500" />
                      Personal Documents
                      <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">8</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 mb-1"
                    >
                      <FileIcon className="h-5 w-5 mr-3 text-gray-500" />
                      Financial Documents
                      <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">10</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      <ImageIcon className="h-5 w-5 mr-3 text-gray-500" />
                      Housing Documents
                      <span className="ml-auto bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">5</span>
                    </a>
                  </nav>

                  <div className="px-6 py-4 border-t border-gray-100">
                    <h3 className="font-medium text-gray-900 mb-4">Advanced Filters</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Document Type</label>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-full border-gray-200">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="pdf">PDF</SelectItem>
                            <SelectItem value="image">Images</SelectItem>
                            <SelectItem value="doc">Word Documents</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Date Range</label>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-full border-gray-200">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Time</SelectItem>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="week">This Week</SelectItem>
                            <SelectItem value="month">This Month</SelectItem>
                            <SelectItem value="year">This Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Status</label>
                        <Select defaultValue="all">
                          <SelectTrigger className="w-full border-gray-200">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="outline" className="w-full">
                        <SlidersIcon className="h-4 w-4 mr-2" />
                        Apply Filters
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-3">
              <Card className="border-0 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-4 bg-white">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="search"
                        placeholder="Search documents by name, type, or content..."
                        className="pl-10 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <Tabs defaultValue="all" className="w-full">
                    <div className="bg-gray-50 px-4 py-2 border-y border-gray-100">
                      <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1">
                        <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
                          <FileIcon className="h-4 w-4 mr-2" />
                          All Documents
                        </TabsTrigger>
                        <TabsTrigger
                          value="recent"
                          className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                          <ClockIcon className="h-4 w-4 mr-2" />
                          Recently Uploaded
                        </TabsTrigger>
                        <TabsTrigger
                          value="shared"
                          className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                          <ShareIcon className="h-4 w-4 mr-2" />
                          Shared With Me
                        </TabsTrigger>
                        <TabsTrigger
                          value="important"
                          className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                        >
                          <StarIcon className="h-4 w-4 mr-2" />
                          Important
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="all" className="m-0">
                      <div className="overflow-x-auto">
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
                                Type
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Category
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Date Uploaded
                              </th>
                              <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                              >
                                Status
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
                                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                                    <FileTextIcon className="h-6 w-6 text-blue-600" />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Lease Agreement.pdf</div>
                                    <div className="text-sm text-gray-500">2.4 MB</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">PDF</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Housing</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 12, 2025</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Approved
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                >
                                  <EyeIcon className="h-4 w-4 mr-1" /> View
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                >
                                  <DownloadIcon className="h-4 w-4 mr-1" /> Download
                                </Button>
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-md flex items-center justify-center">
                                    <ImageIcon className="h-6 w-6 text-green-600" />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">Utility Bill - March.jpg</div>
                                    <div className="text-sm text-gray-500">1.8 MB</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">JPG</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Financial</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 10, 2025</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                  Approved
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                >
                                  <EyeIcon className="h-4 w-4 mr-1" /> View
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                >
                                  <DownloadIcon className="h-4 w-4 mr-1" /> Download
                                </Button>
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-md flex items-center justify-center">
                                    <FileTextIcon className="h-6 w-6 text-blue-600" />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                      Income Verification Form.pdf
                                    </div>
                                    <div className="text-sm text-gray-500">1.2 MB</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">PDF</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">Financial</div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 5, 2025</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                                  Pending
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                >
                                  <EyeIcon className="h-4 w-4 mr-1" /> View
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                                >
                                  <DownloadIcon className="h-4 w-4 mr-1" /> Download
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
                              Showing <span className="font-medium">1</span> to <span className="font-medium">10</span>{" "}
                              of <span className="font-medium">23</span> results
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
                    </TabsContent>

                    <TabsContent value="recent" className="m-0">
                      <div className="bg-white p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                          <ClockIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Recently Uploaded Documents</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-6">
                          View documents uploaded in the last 30 days. This helps you quickly access your newest files.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <ClockIcon className="h-4 w-4 mr-2" />
                          View Recent Documents
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="shared" className="m-0">
                      <div className="bg-white p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                          <ShareIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Shared Documents</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-6">
                          Documents shared with you by your case manager or other staff. These may require your review
                          or action.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <ShareIcon className="h-4 w-4 mr-2" />
                          View Shared Documents
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="important" className="m-0">
                      <div className="bg-white p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                          <StarIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Important Documents</h3>
                        <p className="text-gray-600 max-w-md mx-auto mb-6">
                          Critical documents that require your attention or regular access. Star documents to mark them
                          as important.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <StarIcon className="h-4 w-4 mr-2" />
                          View Important Documents
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

