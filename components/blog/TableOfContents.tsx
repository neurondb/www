'use client'

import React, { useState, useEffect, useRef } from 'react'
import type { Heading } from '@/utils/extractHeadings'

interface TableOfContentsProps {
  headings: Heading[]
  className?: string
}

export default function TableOfContents({ headings, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Create Intersection Observer to track which heading is in view
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, observerOptions)

    // Observe all headings
    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observerRef.current?.observe(element)
      }
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setActiveId(id)
    }
  }

  if (headings.length === 0) return null

  // Determine main headings (typically level 1 or 2)
  const isMainHeading = (level: number) => level === 1 || level === 2

  return (
    <nav
      className={`sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto ${className}`}
      aria-label="Table of contents"
    >
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Contents</h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id
            const mainHeading = isMainHeading(heading.level)
            const indentClass = {
              1: 'ml-0',
              2: 'ml-0',
              3: 'ml-2',
              4: 'ml-4',
            }[heading.level] || 'ml-0'

            return (
              <div
                key={heading.id}
                className={mainHeading ? 'col-span-2' : ''}
              >
                <button
                  onClick={() => scrollToHeading(heading.id)}
                  className={`text-left w-full px-3 py-2 rounded-md transition-all duration-200 text-sm ${indentClass} ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400 font-semibold border-l-2 border-cyan-400'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  } ${mainHeading ? 'font-semibold' : ''}`}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {heading.text}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

