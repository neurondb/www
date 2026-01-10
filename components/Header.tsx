'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, Download, Github } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import DarkModeToggle from '@/components/DarkModeToggle'
import { trackEvent } from '@/lib/analytics'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mobileNavId = 'mobile-navigation'
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Docs', href: '/docs' },
    { name: 'Download', href: '/download' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleCTAClick = (action: string, destination: string) => {
    trackEvent('cta_click', {
      category: 'Header',
      action,
      label: destination,
      cta_location: 'header',
    })
  }

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      // Trap focus within mobile menu
      const firstFocusable = mobileMenuRef.current?.querySelector('a, button') as HTMLElement
      firstFocusable?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-800 bg-slate-900/95"
      style={{
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 w-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none focus-visible:ring-2 rounded-lg transition-transform hover:scale-105"
            style={{
              outlineColor: 'var(--primary)',
            }}
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="transition-all duration-300">
              <Image 
                src="/favicons/neurondb_ai_clean.png" 
                alt="" 
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                priority
              />
            </div>
          </Link>
          {/* Centered menu */}
          <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out hover:bg-slate-800 hover:translate-x-1"
                style={{
                  color: 'var(--text-primary)',
                }}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/search"
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-out hover:bg-slate-800 hover:translate-x-1"
              style={{
                color: 'var(--text-primary)',
              }}
            >
              Search
            </Link>
          </nav>
          {/* CTA buttons right - hidden on mobile */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <DarkModeToggle />
            <Link 
              href="/docs/neurondb/getting-started"
              onClick={() => handleCTAClick('install', '/docs/neurondb/getting-started')}
              className="group btn-professional px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--primary)',
                color: '#ffffff',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-[-1px]" />
              <span>Install</span>
            </Link>
            <Link 
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick('github', siteConfig.github)}
              className="group px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 border transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: 'var(--background-dark)',
                borderColor: 'var(--border)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>GitHub</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover-lift"
            style={{
              color: 'var(--text-secondary)',
            }}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls={mobileNavId}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id={mobileNavId} 
            ref={mobileMenuRef}
            className="md:hidden border-t backdrop-blur-md mobile-menu-enter"
            style={{
              borderTopColor: 'var(--border)',
              backgroundColor: 'var(--background)',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:bg-slate-800 hover:translate-x-2"
                  style={{
                    color: 'var(--text-primary)',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/search"
                className="flex items-center px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out hover:bg-slate-800 hover:translate-x-2"
                style={{
                  color: 'var(--text-primary)',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              {/* Mobile CTA Buttons */}
              <div className="border-t pt-4 mt-4 space-y-2" style={{ borderTopColor: 'var(--border)' }}>
                <div className="flex items-center justify-center px-4">
                  <DarkModeToggle />
                </div>
                <Link
                  href="/docs/neurondb/getting-started"
                  onClick={() => {
                    handleCTAClick('install', '/docs/getting-started')
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: '#ffffff',
                  }}
                >
                  <Download className="w-4 h-4" />
                  Install
                </Link>
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    handleCTAClick('github', siteConfig.github)
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium border transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--background-dark)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                  }}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
