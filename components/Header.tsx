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
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-700/50 bg-white/80 dark:bg-slate-900/90 shadow-professional"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 w-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded"
            aria-label={`${siteConfig.name} - Home`}
          >
            <div className="transition-colors">
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
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-900 dark:text-yellow-400 hover:text-slate-700 dark:hover:text-yellow-300 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 rounded"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* CTA buttons right - hidden on mobile */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <DarkModeToggle />
            <Link 
              href="/docs/getting-started"
              onClick={() => handleCTAClick('install', '/docs/getting-started')}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 flex items-center gap-2 shadow-md hover:shadow-glow hover:scale-105 active:scale-95"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-[-1px]" />
              <span>Install</span>
            </Link>
            <Link 
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCTAClick('github', siteConfig.github)}
              className="group bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-2 rounded-lg transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 flex items-center gap-2 shadow-md hover:shadow-professional hover:scale-105 active:scale-95 border border-slate-700 hover:border-slate-600"
            >
              <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>GitHub</span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-900/70 dark:text-white/70 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
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
            className="md:hidden border-t border-slate-200/60 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md"
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
                  className="flex items-center px-4 py-3 text-slate-900 dark:text-yellow-400 hover:text-slate-700 dark:hover:text-yellow-300 hover:bg-slate-900/5 dark:hover:bg-white/10 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile CTA Buttons */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4 space-y-2">
                <div className="flex items-center justify-center px-4">
                  <DarkModeToggle />
                </div>
                <Link
                  href="/docs/getting-started"
                  onClick={() => {
                    handleCTAClick('install', '/docs/getting-started')
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
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
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900"
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
