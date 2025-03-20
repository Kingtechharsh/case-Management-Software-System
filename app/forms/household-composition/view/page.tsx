import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeftIcon, HomeIcon, UserIcon, BellIcon, PrinterIcon, DownloadIcon } from "lucide-react"

export default function ViewHouseholdComposition() {
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
            <h1 className="text-2xl font-bold text-gray-900">Household Composition</h1>
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
            <span className="text-gray-500 ml-2">Submitted on Feb 3, 2025</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Household Composition Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Primary Applicant</h3>
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
                  <p className="text-sm font-medium text-gray-500">Gender</p>
                  <p className="text-gray-900">Female</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Social Security Number</p>
                  <p className="text-gray-900">XXX-XX-4567</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Relationship to Head of Household</p>
                  <p className="text-gray-900">Self (Head of Household)</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Citizenship Status</p>
                  <p className="text-gray-900">U.S. Citizen</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Household Members</h3>

              <div className="bg-gray-50 p-4 rounded-md mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Household Member 1</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="text-gray-900">Michael Johnson</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                    <p className="text-gray-900">April 22, 2013</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p className="text-gray-900">Male</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Social Security Number</p>
                    <p className="text-gray-900">XXX-XX-8901</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Relationship to Head of Household</p>
                    <p className="text-gray-900">Son</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Citizenship Status</p>
                    <p className="text-gray-900">U.S. Citizen</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">School Enrollment</p>
                    <p className="text-gray-900">Springfield Elementary School</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Grade Level</p>
                    <p className="text-gray-900">6th Grade</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h4 className="font-medium text-gray-900 mb-2">Household Member 2</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="text-gray-900">Emma Johnson</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date of Birth</p>
                    <p className="text-gray-900">September 10, 2017</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Gender</p>
                    <p className="text-gray-900">Female</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Social Security Number</p>
                    <p className="text-gray-900">XXX-XX-2345</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Relationship to Head of Household</p>
                    <p className="text-gray-900">Daughter</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Citizenship Status</p>
                    <p className="text-gray-900">U.S. Citizen</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">School Enrollment</p>
                    <p className="text-gray-900">Springfield Elementary School</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Grade Level</p>
                    <p className="text-gray-900">2nd Grade</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Household Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Household Members</p>
                  <p className="text-gray-900">3</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Adults (18+)</p>
                  <p className="text-gray-900">1</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Children (under 18)</p>
                  <p className="text-gray-900">2</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Elderly Members (62+)</p>
                  <p className="text-gray-900">0</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Disabled Members</p>
                  <p className="text-gray-900">0</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Full-Time Students</p>
                  <p className="text-gray-900">2</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium border-b pb-2">Verification Status</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Badge variant="success" className="bg-green-100 text-green-800">
                    Verified
                  </Badge>
                  <span className="ml-2 text-gray-700">All household members have been verified</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-md mt-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Case Manager Notes:</p>
                  <p className="text-gray-600 text-sm">
                    All required documentation for household members has been received and verified. Birth certificates
                    and Social Security cards have been verified for all household members. School enrollment
                    verification has been completed for both children.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t">
              <div className="text-sm text-gray-500">Form ID: HC-10045-2025 • Verified by: John Smith</div>
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

