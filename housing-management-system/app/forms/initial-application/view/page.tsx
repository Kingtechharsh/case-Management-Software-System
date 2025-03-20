import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, HomeIcon, UserIcon, BellIcon, PrinterIcon, DownloadIcon } from "lucide-react"

export default function ViewInitialApplication() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ResidentConnect</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/forms" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
              Forms
            </Link>
            <Link href="/documents" className="text-gray-600 hover:text-blue-600 font-medium">
              Documents
            </Link>
            <Link href="/messages" className="text-gray-600 hover:text-blue-600 font-medium">
              Messages
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
          <Link href="/forms" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Forms
          </Link>
          <div className="flex justify-between items-center mt-2">
            <h1 className="text-2xl font-bold text-gray-900">Initial Application</h1>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <PrinterIcon className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button variant="outline" size="sm">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
          <div className="flex items-center mt-1">
            <Badge variant="success" className="bg-green-100 text-green-800 hover:bg-green-100">
              Approved
            </Badge>
            <span className="text-gray-500 ml-2">Submitted on Jan 15, 2025</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Housing Assistance Program - Initial Application</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Applicant Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Full Name</p>
                  <p className="text-gray-900">Sarah Johnson</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                  <p className="text-gray-900">June 15, 1985</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Social Security Number</p>
                  <p className="text-gray-900">XXX-XX-4567</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone Number</p>
                  <p className="text-gray-900">(555) 123-4567</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email Address</p>
                  <p className="text-gray-900">sarah.johnson@example.com</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Preferred Contact Method</p>
                  <p className="text-gray-900">Email</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Current Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Street Address</p>
                  <p className="text-gray-900">123 Main Street, Apt 4B</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">City</p>
                  <p className="text-gray-900">Springfield</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">State</p>
                  <p className="text-gray-900">IL</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">ZIP Code</p>
                  <p className="text-gray-900">62704</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Length of Residence</p>
                  <p className="text-gray-900">2 years, 3 months</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Current Monthly Rent</p>
                  <p className="text-gray-900">$950.00</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Household Information</h3>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Household Size</p>
                <p className="text-gray-900">3 people</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Household Members</p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 pb-4 border-b">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-gray-900">Sarah Johnson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Relationship</p>
                      <p className="text-gray-900">Self</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Age</p>
                      <p className="text-gray-900">39</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 pb-4 border-b">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-gray-900">Michael Johnson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Relationship</p>
                      <p className="text-gray-900">Son</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Age</p>
                      <p className="text-gray-900">12</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p className="text-gray-900">Emma Johnson</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Relationship</p>
                      <p className="text-gray-900">Daughter</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Age</p>
                      <p className="text-gray-900">8</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Income Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Monthly Household Income</p>
                  <p className="text-gray-900">$3,250.00</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Primary Income Source</p>
                  <p className="text-gray-900">Employment</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Secondary Income Source</p>
                  <p className="text-gray-900">Child Support</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Annual Household Income</p>
                  <p className="text-gray-900">$39,000.00</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Program Eligibility</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Area Median Income (AMI) Percentage</p>
                  <p className="text-gray-900">45%</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Income Eligibility</p>
                  <p className="text-gray-900">Eligible - Very Low Income</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Priority Status</p>
                  <p className="text-gray-900">Single Parent Household</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Voucher Type</p>
                  <p className="text-gray-900">Housing Choice Voucher</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Application Status</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="success" className="bg-green-100 text-green-800">
                    Approved
                  </Badge>
                  <span className="ml-2 text-gray-700">
                    Your application has been approved for the Housing Assistance Program
                  </span>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mt-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Case Manager Notes:</p>
                  <p className="text-gray-600 text-sm">
                    Applicant meets all eligibility requirements for the Housing Choice Voucher program. Income
                    verification complete and all documentation has been received. Household has been approved for a
                    2-bedroom voucher based on family composition.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="text-sm text-gray-500">Application ID: APP-10045-2025 • Processed by: John Smith</div>
              <Button asChild>
                <Link href="/forms">Return to Forms</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

