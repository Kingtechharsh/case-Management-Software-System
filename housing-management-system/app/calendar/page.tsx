import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ClipboardListIcon,
  FileTextIcon,
  HomeIcon,
  PlusIcon,
  UserIcon,
  UsersIcon,
  BarChartIcon,
  SettingsIcon,
  LockIcon,
  GlobeIcon,
  DatabaseIcon,
  BellIcon,
  ServerIcon,
  MailIcon,
  GitBranchIcon,
} from "lucide-react"

export default function CalendarPage() {
  // Current date information for the calendar
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString("default", { month: "long" })
  const currentYear = currentDate.getFullYear()

  // Sample calendar data
  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3 // Offset to start the month on the correct day of week
    return {
      date: day > 0 && day <= 31 ? day : null,
      isToday: day === currentDate.getDate(),
      events: getEventsForDay(day),
    }
  })

  // Sample function to get events for a specific day
 // Define an interface for events
interface CalendarEvent {
  id: number;
  day: number;
  title: string;
  time: string;
  type: string;
  color: string;
}

// Function to get events for a specific day
function getEventsForDay(day: number): CalendarEvent[] {
  const events: CalendarEvent[] = [
    { id: 1, day: 10, title: "Team Meeting", time: "10:00 AM", type: "meeting", color: "bg-blue-500" },
    { id: 2, day: 10, title: "Client Review", time: "2:30 PM", type: "client", color: "bg-green-500" },
    { id: 3, day: 15, title: "Project Deadline", time: "5:00 PM", type: "deadline", color: "bg-red-500" },
    { id: 4, day: 18, title: "Budget Review", time: "11:00 AM", type: "meeting", color: "bg-blue-500" },
    { id: 5, day: 22, title: "Training Session", time: "9:00 AM", type: "training", color: "bg-purple-500" },
    { id: 6, day: 22, title: "Team Lunch", time: "12:30 PM", type: "social", color: "bg-yellow-500" },
    { id: 7, day: 25, title: "Quarterly Report", time: "3:00 PM", type: "deadline", color: "bg-red-500" },
  ];

  return events.filter((event) => event.day === day);
}


  // Sample upcoming events
  const upcomingEvents = [
    { id: 1, title: "Team Meeting", date: "Today", time: "10:00 AM", type: "meeting", color: "bg-blue-500" },
    { id: 2, title: "Client Review", date: "Today", time: "2:30 PM", type: "client", color: "bg-green-500" },
    { id: 3, title: "Project Deadline", date: "Mar 15", time: "5:00 PM", type: "deadline", color: "bg-red-500" },
    { id: 4, title: "Budget Review", date: "Mar 18", time: "11:00 AM", type: "meeting", color: "bg-blue-500" },
    { id: 5, title: "Training Session", date: "Mar 22", time: "9:00 AM", type: "training", color: "bg-purple-500" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200">
          <div className="flex items-center h-16 px-4 border-b border-gray-200">
            <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
            <span className="text-lg font-bold">HMS Admin</span>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <Link
                href="/admin"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <BarChartIcon className="h-5 w-5 mr-2" />
                Dashboard
              </Link>
              <Link
                href="/case-management"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <UsersIcon className="h-5 w-5 mr-2" />
                Case Management
              </Link>
              <Link
                href="/documents"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <FileTextIcon className="h-5 w-5 mr-2" />
                Document Center
              </Link>
              <Link
                href="/reports"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <ClipboardListIcon className="h-5 w-5 mr-2" />
                Reports
              </Link>
              <Link
                href="/calendar"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-50 text-blue-700"
              >
                <CalendarIcon className="h-5 w-5 mr-2" />
                Calendar
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <SettingsIcon className="h-5 w-5 mr-2" />
                Settings
              </Link>
              <Link
                href="/admin/users"
                className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              >
                <UserIcon className="h-5 w-5 mr-2" />
                User Management
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                System Administration
              </h3>
              <div className="mt-3 space-y-1">
                <Link
                  href="/admin/security"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <LockIcon className="h-5 w-5 mr-2" />
                  Security
                </Link>
                <Link
                  href="/admin/audit-logs"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <FileTextIcon className="h-5 w-5 mr-2" />
                  Audit Logs
                </Link>
                <Link
                  href="/admin/integrations"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <GlobeIcon className="h-5 w-5 mr-2" />
                  Integrations
                </Link>
                <Link
                  href="/admin/backup"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <DatabaseIcon className="h-5 w-5 mr-2" />
                  Backup & Restore
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Configuration</h3>
              <div className="mt-3 space-y-1">
                <Link
                  href="/admin/notifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <BellIcon className="h-5 w-5 mr-2" />
                  Notifications
                </Link>
                <Link
                  href="/admin/api"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <ServerIcon className="h-5 w-5 mr-2" />
                  API Management
                </Link>
                <Link
                  href="/admin/email"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <MailIcon className="h-5 w-5 mr-2" />
                  Email Templates
                </Link>
                <Link
                  href="/admin/workflows"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <GitBranchIcon className="h-5 w-5 mr-2" />
                  Workflows
                </Link>
              </div>
            </div>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                <UserIcon className="h-4 w-4 text-gray-600" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">John Smith</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-white shadow-sm z-10">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
                <p className="text-gray-600">Manage your schedule, appointments, and events</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <Link href="/" className="flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Website
                  </Link>
                </Button>
                <Button variant="ghost" size="icon">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-gray-50">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main Calendar Section */}
              <div className="lg:w-3/4">
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <h2 className="text-xl font-bold">
                          {currentMonth} {currentYear}
                        </h2>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          Today
                        </Button>
                        <Select defaultValue="month">
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="View" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="day">Day</SelectItem>
                            <SelectItem value="week">Week</SelectItem>
                            <SelectItem value="month">Month</SelectItem>
                            <SelectItem value="year">Year</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button size="sm">
                          <PlusIcon className="h-4 w-4 mr-2" />
                          Add Event
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                      {/* Day headers */}
                      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                        <div key={i} className="bg-gray-100 p-2 text-center text-sm font-medium text-gray-500">
                          {day}
                        </div>
                      ))}

                      {/* Calendar days */}
                      {calendarDays.map((day, i) => (
                        <div
                          key={i}
                          className={`bg-white min-h-[100px] p-1 ${day.isToday ? "ring-2 ring-blue-500 ring-inset" : ""} ${!day.date ? "bg-gray-50" : ""}`}
                        >
                          {day.date && (
                            <>
                              <div
                                className={`text-right text-sm p-1 font-medium ${day.isToday ? "text-blue-600" : "text-gray-700"}`}
                              >
                                {day.date}
                              </div>
                              <div className="space-y-1 mt-1">
                                {day.events.map((event, j) => (
                                  <div
                                    key={j}
                                    className={`${event.color} text-white text-xs p-1 rounded truncate cursor-pointer hover:opacity-90`}
                                  >
                                    {event.time} {event.title}
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                    <CardDescription>View and manage your selected event</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">Team Meeting</h3>
                          <p className="text-gray-600">March 10, 2025 • 10:00 AM - 11:30 AM</p>
                          <p className="text-gray-600 mt-2">Conference Room A</p>
                          <p className="mt-4 text-gray-700">
                            Weekly team meeting to discuss project progress, blockers, and upcoming milestones.
                          </p>
                          <div className="mt-4 flex items-center space-x-2">
                            <div className="flex -space-x-2">
                              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs border-2 border-white">
                                JS
                              </div>
                              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs border-2 border-white">
                                MR
                              </div>
                              <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs border-2 border-white">
                                AL
                              </div>
                              <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs border-2 border-white">
                                +2
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">5 Attendees</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/4 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Your schedule for the next few days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-start space-x-3">
                          <div className={`${event.color} w-3 h-3 rounded-full mt-1.5`}></div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{event.title}</p>
                            <p className="text-sm text-gray-500">
                              {event.date} • {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                    <CardDescription>Filter events by type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter-meetings"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label htmlFor="filter-meetings" className="ml-2 text-sm text-gray-700 flex items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                          Meetings
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter-clients"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label htmlFor="filter-clients" className="ml-2 text-sm text-gray-700 flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          Client Sessions
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter-deadlines"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label htmlFor="filter-deadlines" className="ml-2 text-sm text-gray-700 flex items-center">
                          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                          Deadlines
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter-training"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label htmlFor="filter-training" className="ml-2 text-sm text-gray-700 flex items-center">
                          <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                          Training
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="filter-social"
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <label htmlFor="filter-social" className="ml-2 text-sm text-gray-700 flex items-center">
                          <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                          Social Events
                        </label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Add</CardTitle>
                    <CardDescription>Quickly add a new event</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="event-title" className="block text-sm font-medium text-gray-700">
                          Event Title
                        </label>
                        <input
                          type="text"
                          id="event-title"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          placeholder="Enter event title"
                        />
                      </div>
                      <div>
                        <label htmlFor="event-date" className="block text-sm font-medium text-gray-700">
                          Date
                        </label>
                        <input
                          type="date"
                          id="event-date"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="event-start" className="block text-sm font-medium text-gray-700">
                            Start Time
                          </label>
                          <input
                            type="time"
                            id="event-start"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="event-end" className="block text-sm font-medium text-gray-700">
                            End Time
                          </label>
                          <input
                            type="time"
                            id="event-end"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="event-type" className="block text-sm font-medium text-gray-700">
                          Event Type
                        </label>
                        <Select defaultValue="meeting">
                          <SelectTrigger id="event-type">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="meeting">Meeting</SelectItem>
                            <SelectItem value="client">Client Session</SelectItem>
                            <SelectItem value="deadline">Deadline</SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                            <SelectItem value="social">Social Event</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full">Add Event</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

