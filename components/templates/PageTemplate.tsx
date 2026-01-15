'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export interface PageTemplateProps {
  children: React.ReactNode
  className?: string
}

/**
 * PageTemplate - Main page wrapper component
 * Provides consistent page layout and styling
 */
export default function PageTemplate({
  children,
  className,
}: PageTemplateProps) {
  return (
    <div 
      className={cn('min-h-screen bg-black', className)}
    >
      {children}
    </div>
  )
}
