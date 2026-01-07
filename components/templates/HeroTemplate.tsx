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
 * Consistent height: min-h-[480px] md:min-h-[500px] for all pages
 */
export default function HeroTemplate({
  children,
  className,
  backgroundImage,
  overlay = false,
  height = 'fixed',
}: HeroTemplateProps) {
  // All heroes use EXACTLY the same height as main page: 480px (mobile), 500px (desktop)
  // Height prop is ignored - all heroes are identical
  const heightClass = 'min-h-[480px] md:min-h-[500px]'

  return (
    <section
      className={cn(
        'relative overflow-hidden flex items-center pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950',
        heightClass,
        className
      )}
    >
      {/* Beautiful Tech Neuron Background */}
      <div className="absolute inset-0 neuron-tech-bg"></div>
      
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh opacity-20"></div>
      
      {overlay && (
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      )}
      <div className="relative z-10 w-full">{children}</div>
    </section>
  )
}

