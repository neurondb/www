import React from 'react'
import { cn } from '@/lib/utils'

export interface HeroTemplateProps {
  children: React.ReactNode
  className?: string
  backgroundImage?: string
  overlay?: boolean
  height?: 'default' | 'fixed' | 'product'
}

/**
 * HeroTemplate - Standardized hero section wrapper
 * Uses solid background color for consistent hero styling
 * Fixed height: h-[400px] for all pages
 */
export default function HeroTemplate({
  children,
  className,
  backgroundImage,
  overlay = false,
  height = 'fixed',
}: HeroTemplateProps) {
  const heightClass = 'h-[400px]'

  return (
    <section
      className={cn(
        'relative overflow-hidden flex items-center pt-20',
        heightClass,
        className
      )}
      style={{
        backgroundColor: '#111827',
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  )
}

