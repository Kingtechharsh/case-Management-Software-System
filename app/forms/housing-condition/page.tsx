"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, HomeIcon, SaveIcon, UserIcon, BellIcon, CameraIcon } from "lucide-react"

export default function HousingConditionForm() {
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
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Housing Condition Report</h1>
          <p className="text-gray-600">
            Report the current condition of your housing unit including any maintenance issues
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Property Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Property Address</Label>
                  <Input id="address" defaultValue="123 Main Street, Apt 4B" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moveInDate">Move-in Date</Label>
                  <Input id="moveInDate" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select defaultValue="apartment">
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">Single Family Home</SelectItem>
                      <SelectItem value="duplex">Duplex</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Number of Bedrooms</Label>
                  <Select defaultValue="2">
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Studio</SelectItem>
                      <SelectItem value="1">1 Bedroom</SelectItem>
                      <SelectItem value="2">2 Bedrooms</SelectItem>
                      <SelectItem value="3">3 Bedrooms</SelectItem>
                      <SelectItem value="4">4+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Interior Condition</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Living Room Condition</Label>
                  <RadioGroup defaultValue="good">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excellent" id="living-excellent" />
                        <Label htmlFor="living-excellent">Excellent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="living-good" />
                        <Label htmlFor="living-good">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fair" id="living-fair" />
                        <Label htmlFor="living-fair">Fair</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poor" id="living-poor" />
                        <Label htmlFor="living-poor">Poor</Label>
                      </div>
                    </div>
                  </RadioGroup>
                  <Textarea placeholder="Describe any issues or damage in the living room" className="mt-2" />
                </div>

                <div className="space-y-2">
                  <Label>Kitchen Condition</Label>
                  <RadioGroup defaultValue="good">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excellent" id="kitchen-excellent" />
                        <Label htmlFor="kitchen-excellent">Excellent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="kitchen-good" />
                        <Label htmlFor="kitchen-good">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fair" id="kitchen-fair" />
                        <Label htmlFor="kitchen-fair">Fair</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poor" id="kitchen-poor" />
                        <Label htmlFor="kitchen-poor">Poor</Label>
                      </div>
                    </div>
                  </RadioGroup>
                  <Textarea placeholder="Describe any issues or damage in the kitchen" className="mt-2" />
                </div>

                <div className="space-y-2">
                  <Label>Bathroom Condition</Label>
                  <RadioGroup defaultValue="fair">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excellent" id="bathroom-excellent" />
                        <Label htmlFor="bathroom-excellent">Excellent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="bathroom-good" />
                        <Label htmlFor="bathroom-good">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fair" id="bathroom-fair" />
                        <Label htmlFor="bathroom-fair">Fair</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poor" id="bathroom-poor" />
                        <Label htmlFor="bathroom-poor">Poor</Label>
                      </div>
                    </div>
                  </RadioGroup>
                  <Textarea placeholder="Describe any issues or damage in the bathroom" className="mt-2" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Maintenance Issues</h3>
              <p className="text-sm text-gray-600">Select all current maintenance issues in your unit</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="plumbing" className="rounded border-gray-300" />
                  <Label htmlFor="plumbing">Plumbing Issues</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="electrical" className="rounded border-gray-300" />
                  <Label htmlFor="electrical">Electrical Problems</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="hvac" className="rounded border-gray-300" />
                  <Label htmlFor="hvac">Heating/Cooling Issues</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="appliances" className="rounded border-gray-300" />
                  <Label htmlFor="appliances">Appliance Malfunction</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="pests" className="rounded border-gray-300" />
                  <Label htmlFor="pests">Pest Infestation</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="structural" className="rounded border-gray-300" />
                  <Label htmlFor="structural">Structural Damage</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="mold" className="rounded border-gray-300" />
                  <Label htmlFor="mold">Mold or Mildew</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="other" className="rounded border-gray-300" />
                  <Label htmlFor="other">Other Issues</Label>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="maintenance-details">Maintenance Issue Details</Label>
                <Textarea
                  id="maintenance-details"
                  placeholder="Please provide details about any maintenance issues selected above"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Photo Documentation</h3>
              <p className="text-sm text-gray-600">Upload photos of any damage or maintenance issues</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="photo1">Photo 1</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <CameraIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Upload image</p>
                    <Input id="photo1" type="file" accept="image/*" className="hidden" />
                    <Button variant="outline" size="sm" onClick={() => document.getElementById("photo1")?.click()}>
                      Select File
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo2">Photo 2</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <CameraIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Upload image</p>
                    <Input id="photo2" type="file" accept="image/*" className="hidden" />
                    <Button variant="outline" size="sm" onClick={() => document.getElementById("photo2")?.click()}>
                      Select File
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="photo3">Photo 3</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <CameraIcon className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Upload image</p>
                    <Input id="photo3" type="file" accept="image/*" className="hidden" />
                    <Button variant="outline" size="sm" onClick={() => document.getElementById("photo3")?.click()}>
                      Select File
                    </Button>
                  </div>
                </div>
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
              <Button type="submit">Submit Report</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

