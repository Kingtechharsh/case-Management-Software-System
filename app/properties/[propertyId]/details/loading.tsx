import { Card, CardContent } from "@/components/ui/card"

export default function PropertyDetailsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-6 w-40 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {Array(7)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
              ))}
          </nav>
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="h-9 w-40 bg-gray-200 rounded-md animate-pulse mb-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <div className="h-8 w-64 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-80 bg-gray-200 rounded-md animate-pulse mt-2"></div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Property Overview Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="h-6 w-32 bg-gray-200 rounded-md animate-pulse mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded-md animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>

          <Card>
            <CardContent className="p-6">
              <div className="h-80 bg-gray-200 rounded-md animate-pulse"></div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

