'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, BookOpen, List } from 'lucide-react'
import { cn } from '../lib/utils'
import FooterTemplate from '@/components/templates/FooterTemplate'
import DocsSidebar from '@/components/DocsSidebar'

export interface TocItem {
  id: string
  title: string
  level?: number
  children?: TocItem[]
}

export interface NavLink {
  href: string
  label: string
}

export interface PostgresDocsLayoutProps {
  title: string
  version?: string
  children: ReactNode
  tableOfContents?: TocItem[]
  prevLink?: NavLink
  nextLink?: NavLink
  showToc?: boolean
  className?: string
}

export default function PostgresDocsLayout({
  title,
  version,
  children,
  tableOfContents,
  prevLink,
  nextLink,
  showToc = true,
  className,
}: PostgresDocsLayoutProps) {
  return (
    <div 
      className={cn('min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950', className)}
    >
      {/* Header */}
      <header 
        className="border-b border-slate-700 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/docs"
                className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">Documentation</span>
              </Link>
              {version && (
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {version}
                </span>
              )}
            </div>
            <nav className="flex items-center gap-4 text-sm">
              <Link
                href="/"
                className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/docs"
                className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 transition-colors"
              >
                Docs
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <div className="flex gap-8">
          {/* Left Sidebar Navigation */}
          <DocsSidebar />
          
          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            {/* Page Title */}
            <div className="mb-8 pb-6 border-b border-slate-700">
              {/* Branch/Version Notice */}
              <div className="mb-4 rounded-lg border border-slate-700 bg-slate-900/60 p-4 text-sm text-slate-300">
                <div>
                  You are viewing documentation for the Latest branch (main, v2.x).
                  For the Stable 1.x branch (REL1_STABLE), see:
                </div>
                <div className="mt-2 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/neurondb-ai/neurondb/tree/REL1_STABLE/Docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-yellow-300 hover:text-yellow-200 hover:bg-white/15 transition-colors"
                  >
                    GitHub Docs (REL1_STABLE)
                  </a>
                  <a
                    href="https://github.com/neurondb-ai/neurondb/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded bg-white/10 px-3 py-1 text-yellow-300 hover:text-yellow-200 hover:bg-white/15 transition-colors"
                  >
                    v1.x Releases
                  </a>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
                {title}
              </h1>
            </div>

            {/* Content */}
            <div className="postgres-docs-content prose prose-invert max-w-none">
              {children}
            </div>

            {/* Navigation Footer */}
            {(prevLink || nextLink) && (
              <div className="mt-12 pt-8 border-t border-slate-700">
                <div className="flex justify-between items-center gap-4">
                  {prevLink ? (
                  <Link
                    href={prevLink.href}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-400 hover:text-yellow-300 hover:bg-white/10 rounded transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-600 dark:text-slate-400">Previous</span>
                      <span className="font-medium">{prevLink.label}</span>
                    </div>
                  </Link>
                  ) : (
                    <div />
                  )}
                  {nextLink ? (
                    <Link
                      href={nextLink.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-yellow-400 hover:text-yellow-300 hover:bg-white/10 rounded transition-colors"
                    >
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-600 dark:text-slate-400">Next</span>
                        <span className="font-medium">{nextLink.label}</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            )}
          </main>

          {/* Table of Contents Sidebar */}
            {showToc && tableOfContents && tableOfContents.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0" aria-label="Table of contents">
              <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-slate-700 shadow-sm">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                    <List className="w-4 h-4 text-yellow-400" />
                    <h2 className="text-sm font-semibold text-white">
                      Table of Contents
                    </h2>
                  </div>
                  <nav className="space-y-1" aria-label="Page navigation">
                    {tableOfContents.map((item) => (
                      <TocItemComponent key={item.id} item={item} />
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
      <FooterTemplate />
    </div>
  )
}

function TocItemComponent({ item }: { item: TocItem }) {
  const level = item.level ?? 1
  const indentClass = level > 1 ? `ml-${(level - 1) * 4}` : ''

  return (
    <div>
      <a
        href={`#${item.id}`}
        className={cn(
          'block text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 py-1.5 px-2 rounded transition-all duration-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-800',
          indentClass
        )}
        onClick={(e) => {
          e.preventDefault()
          const element = document.getElementById(item.id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            // Update URL without jumping
            window.history.pushState(null, '', `#${item.id}`)
          }
        }}
      >
        {item.title}
      </a>
      {item.children && item.children.length > 0 && (
        <div className="ml-4 mt-1 space-y-1">
          {item.children.map((child) => (
            <TocItemComponent key={child.id} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

