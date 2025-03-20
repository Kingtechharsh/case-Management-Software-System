import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BellIcon, FileTextIcon, HomeIcon, MessageSquareIcon, UserIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Resident Connect Portal</span>
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
            <Link href="/admin" className="text-gray-600 hover:text-blue-600 font-medium">
              Admin
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

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section with improved design */}
        <section className="mb-16 relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Welcome to <span className="text-blue-200">Resident Connect Portal</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your secure portal for housing services, document management, and communication with case managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50" asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 text-white border-white hover:bg-white/30 font-medium shadow-sm backdrop-blur-sm"
                asChild
              >
                <Link href="/forms">View Available Forms</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section with improved cards */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Essential Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-blue-500 w-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 rounded-full bg-blue-100 mr-3 group-hover:bg-blue-200 transition-colors">
                    <FileTextIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  Digital Forms
                </CardTitle>
                <CardDescription>Complete and submit forms electronically</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access and complete all required forms from anywhere, anytime. No more paper forms or in-person visits
                  required.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full group-hover:bg-blue-700 transition-colors" asChild>
                  <Link href="/forms" className="flex items-center justify-center">
                    Access Forms
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-indigo-500 w-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 rounded-full bg-indigo-100 mr-3 group-hover:bg-indigo-200 transition-colors">
                    <MessageSquareIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  Secure Messaging
                </CardTitle>
                <CardDescription>Communicate with your case manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Send and receive secure messages to your assigned case manager and support team.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 group-hover:bg-indigo-700 transition-colors"
                  asChild
                >
                  <Link href="/messages" className="flex items-center justify-center">
                    Open Messages
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-purple-500 w-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl">
                  <div className="p-2 rounded-full bg-purple-100 mr-3 group-hover:bg-purple-200 transition-colors">
                    <FileTextIcon className="h-5 w-5 text-purple-600" />
                  </div>
                  Document Center
                </CardTitle>
                <CardDescription>Access and upload important documents</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Securely store, access, and share important documents related to your housing services.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 group-hover:bg-purple-700 transition-colors"
                  asChild
                >
                  <Link href="/documents" className="flex items-center justify-center">
                    View Documents
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Stats Section - New */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <HomeIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">9</h3>
            <p className="text-gray-600">Properties Managed</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <UserIcon className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">250+</h3>
            <p className="text-gray-600">Residents Served</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <FileTextIcon className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">15+</h3>
            <p className="text-gray-600">Digital Forms</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 flex flex-col items-center text-center">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">99%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </section>

        {/* Support Section with improved design */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-70"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full -ml-32 -mb-32 opacity-70"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Need assistance?</h2>
              <p className="text-gray-600 max-w-md">
                Our support team is available to help you navigate the portal and answer any questions you may have.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="border-blue-200 hover:bg-blue-50" asChild>
                <Link href="/faq" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  View FAQ
                </Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                asChild
              >
                <Link href="/support" className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
                  </svg>
                  Contact Support
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section - New */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">What Our Residents Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "The ResidentConnect portal has made managing my housing assistance so much easier. I can submit forms
                  and communicate with my case manager all in one place."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                    JD
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Jane Doe</p>
                    <p className="text-sm text-gray-500">Resident since 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "I love how I can access all my documents and forms online. The secure messaging feature has been
                  invaluable for quick questions to my case manager."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-3">
                    MS
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Michael Smith</p>
                    <p className="text-sm text-gray-500">Resident since 2022</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-md border-0">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "As a senior resident, I was worried about using an online system, but ResidentConnect is so easy to
                  use. The support team is always there when I need help."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold mr-3">
                    EJ
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Eleanor Johnson</p>
                    <p className="text-sm text-gray-500">Resident since 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">&copy;  2024 King Technology Inc. All Rights Reserved.</p>
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

