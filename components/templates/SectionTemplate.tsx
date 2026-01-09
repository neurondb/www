import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionTemplateProps {
  children: React.ReactNode
  className?: string
  background?: 'page' | 'transparent' | 'hero'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * SectionTemplate - Reusable section wrapper for content sections
 * Supports different background variants and padding options
 */
export default function SectionTemplate({
  children,
  className,
  background = 'page',
  padding = 'lg',
}: SectionTemplateProps) {
  const backgroundClass =
    background === 'hero'
      ? 'bg-slate-50 dark:bg-slate-950'
      : background === 'page'
      ? 'bg-white dark:bg-slate-900'
      : 'bg-transparent'

  const paddingClass = {
    none: '',
    sm: 'py-6',
    md: 'py-10',
    lg: 'py-12 md:py-16',
    xl: 'py-16 md:py-24',
  }[padding]

  return (
    <section 
      className={cn(backgroundClass, paddingClass, className)}
    >
      {children}
    </section>
  )
}

