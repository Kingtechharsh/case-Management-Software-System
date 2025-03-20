import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeftIcon,
  CheckCircleIcon,
  FileTextIcon,
  HomeIcon,
  InfoIcon,
  SaveIcon,
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
  BriefcaseIcon,
  DollarSignIcon,
  FileIcon,
  UploadIcon,
} from "lucide-react"
import Link from "next/link"

export default function FormsPage() {
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
            <Link href="/forms" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
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
            <Link href="/profile" className="text-gray-600 hover:text-blue-600 font-medium">
              Profile
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-gray-50">
        {/* Page Header with Gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 py-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              Back to Dashboard
            </Link>
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-bold">Forms</h1>
                <p className="text-white/80 mt-1">Complete and submit required forms for your housing services</p>
              </div>
              <div className="mt-4 md:mt-0 flex items-center space-x-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm flex items-center">
                  <CheckCircleIcon className="h-4 w-4 mr-2 text-green-300" />
                  <span>2 Completed</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm flex items-center">
                  <FileTextIcon className="h-4 w-4 mr-2 text-amber-300" />
                  <span>1 In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="available" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white rounded-lg shadow-sm p-1">
              <TabsTrigger
                value="available"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-md py-3"
              >
                <FileTextIcon className="h-4 w-4 mr-2" />
                Available Forms
              </TabsTrigger>
              <TabsTrigger
                value="inprogress"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-md py-3"
              >
                <ClockIcon className="h-4 w-4 mr-2" />
                In Progress
              </TabsTrigger>
              <TabsTrigger
                value="completed"
                className="data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 rounded-md py-3"
              >
                <CheckCircleIcon className="h-4 w-4 mr-2" />
                Completed
              </TabsTrigger>
            </TabsList>

            <TabsContent value="available">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                  <div className="h-2 bg-red-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">Income Verification</CardTitle>
                        <CardDescription>Required for program eligibility</CardDescription>
                      </div>
                      <div className="bg-red-100 p-2 rounded-full">
                        <FileTextIcon className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <InfoIcon className="h-4 w-4 mr-2" />
                      <span>Due in 3 days</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Document your current income sources and provide supporting documentation.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                      <Link href="/forms/income-verification" className="flex items-center justify-center">
                        Start Form
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                  <div className="h-2 bg-amber-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">Housing Condition Report</CardTitle>
                        <CardDescription>Property assessment form</CardDescription>
                      </div>
                      <div className="bg-amber-100 p-2 rounded-full">
                        <FileTextIcon className="h-5 w-5 text-amber-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <InfoIcon className="h-4 w-4 mr-2" />
                      <span>Due in 10 days</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Report the current condition of your housing unit including any maintenance issues.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700" asChild>
                      <Link href="/forms/housing-condition" className="flex items-center justify-center">
                        Start Form
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                  <div className="h-2 bg-blue-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">Program Satisfaction Survey</CardTitle>
                        <CardDescription>Optional feedback form</CardDescription>
                      </div>
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileTextIcon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <InfoIcon className="h-4 w-4 mr-2" />
                      <span>No deadline</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Share your feedback about the housing assistance program and services provided.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full" asChild>
                      <Link href="/forms/satisfaction-survey" className="flex items-center justify-center">
                        Start Form
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="inprogress">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                  <div className="h-2 bg-blue-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">Employment Update</CardTitle>
                        <CardDescription>Job status change form</CardDescription>
                      </div>
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileTextIcon className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <InfoIcon className="h-4 w-4 mr-2" />
                      <span>Started on Mar 10, 2025</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <p className="text-xs text-gray-500">65% complete</p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button className="w-full" asChild>
                      <Link href="/forms/employment-update" className="flex items-center justify-center">
                        Continue
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="completed">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                  <div className="h-2 bg-green-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">Initial Application</CardTitle>
                        <CardDescription>Program enrollment form</CardDescription>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <InfoIcon className="h-4 w-4 mr-2" />
                      <span>Submitted on Jan 15, 2025</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircleIcon className="h-3 w-3 mr-1" />
                        Approved
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/forms/initial-application/view" className="flex items-center justify-center">
                        View Submission
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                  <div className="h-2 bg-green-500"></div>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">Household Composition</CardTitle>
                        <CardDescription>Family member details</CardDescription>
                      </div>
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircleIcon className="h-5 w-5 text-green-600" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <InfoIcon className="h-4 w-4 mr-2" />
                      <span>Submitted on Feb 3, 2025</span>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircleIcon className="h-3 w-3 mr-1" />
                        Verified
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/forms/household-composition/view" className="flex items-center justify-center">
                        View Submission
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-4 px-6">
              <h2 className="text-xl font-bold text-white">Income Verification Form</h2>
              <p className="text-white/80 text-sm">Please complete all required fields</p>
            </div>

            <form className="p-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center text-gray-800">
                  <UserIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      defaultValue="Sarah"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      defaultValue="Johnson"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob" className="text-gray-700">
                      Date of Birth
                    </Label>
                    <Input
                      id="dob"
                      type="date"
                      defaultValue="1985-06-15"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ssn" className="text-gray-700">
                      Social Security Number
                    </Label>
                    <Input
                      id="ssn"
                      placeholder="XXX-XX-XXXX"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center text-gray-800">
                  <BriefcaseIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Employment Information
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="employmentStatus" className="text-gray-700">
                    Current Employment Status
                  </Label>
                  <Select defaultValue="employed">
                    <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                      <SelectValue placeholder="Select employment status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employed">Employed Full-Time</SelectItem>
                      <SelectItem value="parttime">Employed Part-Time</SelectItem>
                      <SelectItem value="selfemployed">Self-Employed</SelectItem>
                      <SelectItem value="unemployed">Unemployed</SelectItem>
                      <SelectItem value="retired">Retired</SelectItem>
                      <SelectItem value="disabled">Disabled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="employer" className="text-gray-700">
                      Employer Name
                    </Label>
                    <Input
                      id="employer"
                      placeholder="Company name"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-gray-700">
                      Position/Title
                    </Label>
                    <Input
                      id="position"
                      placeholder="Your job title"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate" className="text-gray-700">
                      Start Date
                    </Label>
                    <Input
                      id="startDate"
                      type="date"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income" className="text-gray-700">
                      Monthly Income (before taxes)
                    </Label>
                    <Input
                      id="income"
                      placeholder="$0.00"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center text-gray-800">
                  <DollarSignIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Additional Income Sources
                </h3>
                <p className="text-sm text-gray-600">Select all that apply and provide monthly amounts</p>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="ssi-yes" />
                        <Label htmlFor="ssi-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="ssi-no" />
                        <Label htmlFor="ssi-no">No</Label>
                      </div>
                    </RadioGroup>
                    <div className="flex-1">
                      <Label className="font-medium">Social Security/SSI</Label>
                      <Input
                        placeholder="Monthly amount"
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="tanf-yes" />
                        <Label htmlFor="tanf-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="tanf-no" />
                        <Label htmlFor="tanf-no">No</Label>
                      </div>
                    </RadioGroup>
                    <div className="flex-1">
                      <Label className="font-medium">TANF/Public Assistance</Label>
                      <Input
                        placeholder="Monthly amount"
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50">
                    <RadioGroup defaultValue="no">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="child-yes" />
                        <Label htmlFor="child-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="child-no" />
                        <Label htmlFor="child-no">No</Label>
                      </div>
                    </RadioGroup>
                    <div className="flex-1">
                      <Label className="font-medium">Child Support/Alimony</Label>
                      <Input
                        placeholder="Monthly amount"
                        className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center text-gray-800">
                  <FileIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Documentation Upload
                </h3>
                <p className="text-sm text-gray-600">
                  Please upload supporting documents (pay stubs, benefit letters, etc.)
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="paystubs" className="text-gray-700">
                      Recent Pay Stubs (last 30 days)
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <UploadIcon className="h-6 w-6 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
                      <Input id="paystubs" type="file" className="hidden" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="taxreturns" className="text-gray-700">
                      Most Recent Tax Return
                    </Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                      <UploadIcon className="h-6 w-6 mx-auto text-gray-400" />
                      <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
                      <Input id="taxreturns" type="file" className="hidden" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additional" className="text-gray-700">
                    Additional Comments
                  </Label>
                  <Textarea
                    id="additional"
                    placeholder="Any additional information about your income situation"
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                  />
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="certify"
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <Label htmlFor="certify" className="text-gray-700">
                    I certify that the information provided is true and accurate to the best of my knowledge.
                  </Label>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" className="flex items-center">
                  <SaveIcon className="h-4 w-4 mr-2" />
                  Save Draft
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 flex items-center">
                  Submit Form
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

