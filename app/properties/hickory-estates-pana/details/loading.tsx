import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="container mx-auto">
        <div className="mb-6">
          <Skeleton className="h-10 w-32 mb-4" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-80" />
            </div>
            <Skeleton className="h-6 w-24 mt-4 md:mt-0" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <Skeleton className="h-6 w-40 mb-4" />
            <div className="flex items-center mb-4">
              <Skeleton className="h-12 w-12 rounded-full mr-4" />
              <div className="space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-10 w-16" />
              <Skeleton className="h-10 w-16" />
              <Skeleton className="h-10 w-16" />
            </div>
            <Skeleton className="h-2.5 w-full mb-1" />
            <Skeleton className="h-4 w-16 ml-auto" />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="flex items-center justify-between mb-2">
              <div>
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-8 w-16" />
              </div>
              <div>
                <Skeleton className="h-4 w-32 mb-1" />
                <Skeleton className="h-8 w-16" />
              </div>
            </div>
            <Skeleton className="h-2.5 w-full mt-4" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b">
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64 mb-4" />
                <Skeleton className="h-80 w-full" />
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64 mb-4" />
                <Skeleton className="h-80 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

