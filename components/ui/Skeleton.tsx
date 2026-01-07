import React from 'react'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
}

/**
 * Skeleton - Loading placeholder component
 * Used for content that's loading asynchronously
 */
export function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
  const baseClasses = 'animate-pulse bg-slate-700/50 rounded'
  
  const variantClasses = {
    text: 'h-4',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  return (
    <div
      className={cn(baseClasses, variantClasses[variant], className)}
      aria-label="Loading..."
      role="status"
    />
  )
}

/**
 * SkeletonText - Multiple lines of skeleton text
 */
export function SkeletonText({ lines = 3, className }: { lines?: number; className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? 'w-3/4' : 'w-full'}
        />
      ))}
    </div>
  )
}

/**
 * SkeletonCard - Card-shaped skeleton
 */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('p-6 space-y-4', className)}>
      <Skeleton variant="rectangular" className="h-6 w-1/2" />
      <SkeletonText lines={3} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" className="h-10 w-24" />
        <Skeleton variant="rectangular" className="h-10 w-24" />
      </div>
    </div>
  )
}

