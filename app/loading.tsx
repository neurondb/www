import React from 'react'
import { Skeleton, SkeletonCard, SkeletonText } from '@/components/ui/Skeleton'

/**
 * Loading - Global loading state for the app
 * Shown while pages are loading
 */
export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero skeleton */}
          <div className="space-y-4">
            <Skeleton variant="rectangular" className="h-12 w-3/4 mx-auto" />
            <Skeleton variant="rectangular" className="h-6 w-1/2 mx-auto" />
            <Skeleton variant="rectangular" className="h-6 w-2/3 mx-auto" />
            <div className="flex justify-center gap-4">
              <Skeleton variant="rectangular" className="h-12 w-32" />
              <Skeleton variant="rectangular" className="h-12 w-32" />
            </div>
          </div>

          {/* Content skeletons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkeletonCard />
            <SkeletonCard />
          </div>

          <SkeletonText lines={5} />
        </div>
      </div>
    </div>
  )
}

