'use client'

import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search, FileText, BookOpen, ArrowRight } from 'lucide-react'
import { allBlogPosts } from '@/config/blogPosts'
import FooterTemplate from '@/components/templates/FooterTemplate'
export default function SearchPage() {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
      // Update URL without reload
      if (typeof window !== 'undefined') {
        if (query) {
          window.history.replaceState(null, '', `/search?q=${encodeURIComponent(query)}`)
        } else {
          window.history.replaceState(null, '', '/search')
        }
      }
    }, 300)

    return () => clearTimeout(timer)
  }, [query])

  // Search across blog posts
  const blogResults = useMemo(() => {
    if (!debouncedQuery.trim()) return []
    
    const searchLower = debouncedQuery.toLowerCase()
    return allBlogPosts
      .filter(post => {
        const searchable = `${post.title} ${post.excerpt} ${post.content || ''} ${post.tags.join(' ')}`.toLowerCase()
        return searchable.includes(searchLower)
      })
      .slice(0, 10)
  }, [debouncedQuery])

  const hasResults = blogResults.length > 0
  const showEmptyState = debouncedQuery.trim() && !hasResults

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Search
          </h1>
          <p className="text-lg mb-12" style={{ color: 'var(--text-secondary)' }}>
            Find documentation, blog posts, and tutorials
          </p>

          {/* Search Input - Professional */}
          <div className="relative mb-12">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: 'var(--text-tertiary)' }} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search blog posts, tutorials, and docs..."
              className="w-full pl-14 pr-6 py-4 rounded-xl text-lg border-2 transition-all duration-200 focus:outline-none"
              style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}
              autoFocus
            />
          </div>

          {/* Results */}
          {!debouncedQuery.trim() && (
            <div className="text-center py-16 rounded-xl border" style={{ backgroundColor: 'var(--background-dark)', borderColor: 'var(--border)' }}>
              <Search className="w-16 h-16 mx-auto mb-4 opacity-30" style={{ color: 'var(--text-tertiary)' }} />
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Enter a search query to find blog posts, tutorials, and documentation
              </p>
            </div>
          )}

          {showEmptyState && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-300 text-lg mb-2">
                No results found for &quot;{debouncedQuery}&quot;
              </p>
              <p className="text-slate-500 text-sm">
                Try different keywords or browse our <Link href="/blog" className="text-yellow-400 hover:underline">blog</Link> and <Link href="/docs" className="text-yellow-400 hover:underline">documentation</Link>
              </p>
            </div>
          )}

          {hasResults && (
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">
                Blog Posts ({blogResults.length})
              </h2>
              <div className="space-y-4">
                {blogResults.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block p-6 rounded-lg border border-slate-700 bg-slate-800 hover:border-yellow-400 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-300 mb-3 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          {post.tags.length > 0 && (
                            <>
                              <span>•</span>
                              <span>{post.tags.slice(0, 3).join(', ')}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-400 flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <FooterTemplate />
    </div>
  )
}
