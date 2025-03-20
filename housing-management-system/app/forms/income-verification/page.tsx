import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, HomeIcon, SaveIcon, UserIcon, BellIcon } from "lucide-react"

export default function IncomeVerificationForm() {
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
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Income Verification Form</h1>
          <p className="text-gray-600">Document your current income sources and provide supporting documentation</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Personal Information</h3>
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
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1985-06-15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ssn">Social Security Number</Label>
                  <Input id="ssn" placeholder="XXX-XX-XXXX" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Employment Information</h3>
              <div className="space-y-2">
                <Label htmlFor="employmentStatus">Current Employment Status</Label>
                <Select defaultValue="employed">
                  <SelectTrigger>
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
                  <Label htmlFor="employer">Employer Name</Label>
                  <Input id="employer" placeholder="Company name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position/Title</Label>
                  <Input id="position" placeholder="Your job title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="income">Monthly Income (before taxes)</Label>
                  <Input id="income" placeholder="$0.00" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Additional Income Sources</h3>
              <p className="text-sm text-gray-600">Select all that apply and provide monthly amounts</p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
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
                    <Label>Social Security/SSI</Label>
                    <Input placeholder="Monthly amount" className="mt-1" />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
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
                    <Label>TANF/Public Assistance</Label>
                    <Input placeholder="Monthly amount" className="mt-1" />
                  </div>
                </div>

                <div className="flex items-start space-x-3">
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
                    <Label>Child Support/Alimony</Label>
                    <Input placeholder="Monthly amount" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Documentation Upload</h3>
              <p className="text-sm text-gray-600">
                Please upload supporting documents (pay stubs, benefit letters, etc.)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paystubs">Recent Pay Stubs (last 30 days)</Label>
                  <Input id="paystubs" type="file" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxreturns">Most Recent Tax Return</Label>
                  <Input id="taxreturns" type="file" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Additional Comments</Label>
                <Textarea id="additional" placeholder="Any additional information about your income situation" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="certify" className="rounded border-gray-300" />
                <Label htmlFor="certify">
                  I certify that the information provided is true and accurate to the best of my knowledge.
                </Label>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline">
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button type="submit">Submit Form</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

