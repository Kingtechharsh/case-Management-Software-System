import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, HomeIcon, SaveIcon, UserIcon, BellIcon } from "lucide-react"

export default function SatisfactionSurveyForm() {
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
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Program Satisfaction Survey</h1>
          <p className="text-gray-600">
            Share your feedback about the housing assistance program and services provided
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Program Experience</h3>
              <p className="text-sm text-gray-600">
                Please rate your overall experience with our housing assistance program
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>How would you rate your overall satisfaction with the program?</Label>
                  <RadioGroup defaultValue="satisfied">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very_satisfied" id="very_satisfied" />
                        <Label htmlFor="very_satisfied">Very Satisfied</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="satisfied" id="satisfied" />
                        <Label htmlFor="satisfied">Satisfied</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="neutral" id="neutral" />
                        <Label htmlFor="neutral">Neutral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                        <Label htmlFor="dissatisfied">Dissatisfied</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very_dissatisfied" id="very_dissatisfied" />
                        <Label htmlFor="very_dissatisfied">Very Dissatisfied</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>How easy was it to navigate the application process?</Label>
                  <RadioGroup defaultValue="easy">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very_easy" id="very_easy" />
                        <Label htmlFor="very_easy">Very Easy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="easy" id="easy" />
                        <Label htmlFor="easy">Easy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="neutral_ease" id="neutral_ease" />
                        <Label htmlFor="neutral_ease">Neutral</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="difficult" id="difficult" />
                        <Label htmlFor="difficult">Difficult</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very_difficult" id="very_difficult" />
                        <Label htmlFor="very_difficult">Very Difficult</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Staff and Support</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>How would you rate the responsiveness of your case manager?</Label>
                  <RadioGroup defaultValue="good">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excellent" id="cm_excellent" />
                        <Label htmlFor="cm_excellent">Excellent</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="good" id="cm_good" />
                        <Label htmlFor="cm_good">Good</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="average" id="cm_average" />
                        <Label htmlFor="cm_average">Average</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="poor" id="cm_poor" />
                        <Label htmlFor="cm_poor">Poor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very_poor" id="cm_very_poor" />
                        <Label htmlFor="cm_very_poor">Very Poor</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>How knowledgeable was the staff about the program and services?</Label>
                  <RadioGroup defaultValue="knowledgeable">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="very_knowledgeable" id="very_knowledgeable" />
                        <Label htmlFor="very_knowledgeable">Very Knowledgeable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="knowledgeable" id="knowledgeable" />
                        <Label htmlFor="knowledgeable">Knowledgeable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="somewhat_knowledgeable" id="somewhat_knowledgeable" />
                        <Label htmlFor="somewhat_knowledgeable">Somewhat Knowledgeable</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="not_knowledgeable" id="not_knowledgeable" />
                        <Label htmlFor="not_knowledgeable">Not Knowledgeable</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Program Impact</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>How has this program impacted your housing stability?</Label>
                  <RadioGroup defaultValue="significant_improvement">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="significant_improvement" id="significant_improvement" />
                        <Label htmlFor="significant_improvement">Significant Improvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate_improvement" id="moderate_improvement" />
                        <Label htmlFor="moderate_improvement">Moderate Improvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="slight_improvement" id="slight_improvement" />
                        <Label htmlFor="slight_improvement">Slight Improvement</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no_change" id="no_change" />
                        <Label htmlFor="no_change">No Change</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negative_impact" id="negative_impact" />
                        <Label htmlFor="negative_impact">Negative Impact</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional_services">What additional services would be helpful to you?</Label>
                <Textarea
                  id="additional_services"
                  placeholder="Please describe any additional services that would be beneficial"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Feedback and Suggestions</h3>

              <div className="space-y-2">
                <Label htmlFor="strengths">What do you feel are the strengths of the program?</Label>
                <Textarea
                  id="strengths"
                  placeholder="Please share what you think works well"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="improvements">What areas do you feel need improvement?</Label>
                <Textarea
                  id="improvements"
                  placeholder="Please share any suggestions for improvement"
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="additional_comments">Additional Comments</Label>
                <Textarea
                  id="additional_comments"
                  placeholder="Any other feedback you'd like to share"
                  className="min-h-[100px]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="contact_permission" className="rounded border-gray-300" />
                <Label htmlFor="contact_permission">
                  I am willing to be contacted for follow-up questions about my feedback.
                </Label>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline">
                <SaveIcon className="h-4 w-4 mr-2" />
                Save Draft
              </Button>
              <Button type="submit">Submit Survey</Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

