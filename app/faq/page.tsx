import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeftIcon, BellIcon, HomeIcon, SearchIcon, UserIcon } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">ResidentConnectPortal</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
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
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions about our housing services</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>FAQ Categories</CardTitle>
                <CardDescription>Browse by topic</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start font-medium text-blue-600">
                  General Information
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Application Process
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Eligibility Requirements
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Documentation
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Financial Assistance
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Account Management
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Technical Support
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need More Help?</CardTitle>
                <CardDescription>Can't find what you're looking for?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Our support team is available to assist you with any questions not covered in our FAQ.
                </p>
                <Button className="w-full" asChild>
                  <Link href="/support">Contact Support</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardContent className="pt-6">
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input placeholder="Search frequently asked questions..." className="pl-10" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
                <CardDescription>Basic information about our housing services</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is the Housing Management System?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        The Housing Management System (HMS) is a comprehensive platform designed to streamline and
                        manage housing assistance programs. It provides a secure portal for residents to access
                        services, submit documentation, communicate with case managers, and track their program status.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I create an account?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        To create an account, you need to first apply for housing assistance through your local housing
                        authority. Once your application is approved, you will receive an email invitation with
                        instructions to set up your account. The email will contain a unique link that will direct you
                        to the registration page where you can create your username and password.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What services are available through the portal?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">Our portal offers a variety of services including:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>Online application submission and status tracking</li>
                        <li>Secure document upload and management</li>
                        <li>Direct messaging with your assigned case manager</li>
                        <li>Form completion and electronic signatures</li>
                        <li>Payment history and financial assistance tracking</li>
                        <li>Appointment scheduling and reminders</li>
                        <li>Access to resources and educational materials</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is my information secure?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Yes, we take security very seriously. All data transmitted through our system is encrypted using
                        industry-standard protocols. We comply with all relevant data protection regulations and
                        implement multiple layers of security measures to protect your personal information. Our system
                        undergoes regular security audits and assessments to ensure the highest level of protection.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How do I contact my case manager?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        You can contact your case manager directly through the messaging feature in the portal. Simply
                        navigate to the Messages section, select your case manager from your contacts, and compose your
                        message. Your case manager typically responds within 1-2 business days. For urgent matters, you
                        can also call the support hotline listed in the Contact Support section.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Application Process</CardTitle>
                <CardDescription>Information about applying for housing assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I apply for housing assistance?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        To apply for housing assistance, you can complete an application online through our portal or
                        visit your local housing authority office to submit a paper application. The online application
                        will guide you through the process step by step and allow you to save your progress if you need
                        to complete it later. You will need to provide information about your household, income, assets,
                        and current housing situation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What documents do I need to apply?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        When applying for housing assistance, you will typically need to provide the following
                        documents:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>
                          Valid identification for all household members (e.g., driver's license, birth certificate)
                        </li>
                        <li>Social Security cards or documentation of legal residency</li>
                        <li>Proof of income (e.g., pay stubs, tax returns, benefit award letters)</li>
                        <li>Bank statements and asset information</li>
                        <li>Current lease or housing information</li>
                        <li>Utility bills (if applicable)</li>
                      </ul>
                      <p className="mt-2 text-gray-700">
                        Additional documentation may be required based on your specific circumstances.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>How long does the application process take?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        The application review process typically takes 30-45 days from the date of submission, assuming
                        all required documentation has been provided. However, processing times may vary depending on
                        application volume and completeness of your submission. You can check the status of your
                        application at any time through the portal. If additional information is needed, your case
                        manager will contact you through the messaging system.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can I update my application after submission?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Yes, you can update your application after submission if there are changes to your household
                        composition, income, or other relevant information. To do this, log into your account, navigate
                        to the Applications section, and select the "Request Update" option for your current
                        application. Your case manager will review your update request and may ask for supporting
                        documentation to verify the changes.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Eligibility Requirements</CardTitle>
                <CardDescription>Understanding who qualifies for assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Who is eligible for housing assistance?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Eligibility for housing assistance is primarily based on income, with priority given to very
                        low-income families, elderly individuals, and persons with disabilities. Generally, your
                        household income must be at or below 50% of the median income for your area. Other factors
                        considered include citizenship or eligible immigration status, household composition, and rental
                        history. Specific eligibility criteria may vary by program and location.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How is income eligibility determined?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        Income eligibility is determined by calculating your household's gross annual income (before
                        taxes and deductions) and comparing it to the income limits established for your area. We
                        consider income from all sources, including wages, self-employment, benefits (such as Social
                        Security or TANF), child support, and regular contributions from family or friends. Some
                        exclusions and deductions may apply based on your specific situation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What if my income changes after I'm approved?</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-700">
                        If your income changes after you're approved for housing assistance, you must report the change
                        to your case manager within 30 days. Increases in income may affect your benefit amount but
                        won't necessarily make you ineligible for continued assistance. Similarly, decreases in income
                        may result in increased assistance. Regular income recertifications are conducted annually, but
                        it's important to report significant changes when they occur.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
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

