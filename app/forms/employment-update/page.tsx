import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, HomeIcon, SaveIcon, UserIcon, BellIcon } from "lucide-react"

export default function EmploymentUpdateForm() {
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
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Employment Update Form</h1>
          <p className="text-gray-600">Update your employment information and job status</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Current Employment Status</h3>
              <div className="space-y-2">
                <Label htmlFor="employmentStatus">Employment Status</Label>
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

              <div className="space-y-2">
                <Label>Has your employment status changed since your last update?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="status-yes" />
                      <Label htmlFor="status-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="status-no" />
                      <Label htmlFor="status-no">No</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="statusChangeDate">If yes, date of change:</Label>
                <Input id="statusChangeDate" type="date" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Current Employer Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employer">Employer Name</Label>
                  <Input id="employer" placeholder="Company name" defaultValue="Acme Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position/Title</Label>
                  <Input id="position" placeholder="Your job title" defaultValue="Administrative Assistant" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input id="startDate" type="date" defaultValue="2024-01-15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supervisorName">Supervisor Name</Label>
                  <Input id="supervisorName" placeholder="Supervisor's name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workPhone">Work Phone</Label>
                  <Input id="workPhone" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="workAddress">Work Address</Label>
                  <Input id="workAddress" placeholder="Work address" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Income Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="payFrequency">Pay Frequency</Label>
                  <Select defaultValue="biweekly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select pay frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                      <SelectItem value="semimonthly">Semi-Monthly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hourlyRate">Hourly Rate (if applicable)</Label>
                  <Input id="hourlyRate" placeholder="$0.00" defaultValue="$18.50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hoursPerWeek">Hours Per Week</Label>
                  <Input id="hoursPerWeek" placeholder="0" defaultValue="40" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="grossPay">Gross Pay Per Period</Label>
                  <Input id="grossPay" placeholder="$0.00" defaultValue="$1,480.00" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Has your income changed since your last update?</Label>
                <RadioGroup defaultValue="yes">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="income-yes" />
                      <Label htmlFor="income-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="income-no" />
                      <Label htmlFor="income-no">No</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="incomeChangeReason">If yes, reason for change:</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="promotion">Promotion</SelectItem>
                    <SelectItem value="raise">Salary/Wage Increase</SelectItem>
                    <SelectItem value="reduction">Hours Reduction</SelectItem>
                    <SelectItem value="increase">Hours Increase</SelectItem>
                    <SelectItem value="newjob">New Job</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Documentation</h3>
              <p className="text-sm text-gray-600">
                Please upload supporting documents to verify your employment and income
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="paystubs">Recent Pay Stubs (last 30 days)</Label>
                  <Input id="paystubs" type="file" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employmentLetter">Employment Verification Letter</Label>
                  <Input id="employmentLetter" type="file" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional">Additional Comments</Label>
                <Textarea id="additional" placeholder="Any additional information about your employment situation" />
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
              <Button type="submit">Submit Update</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

