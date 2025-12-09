'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigation = [
    { name: 'Blog', href: '/blog' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Docs', href: '/docs' },
    { name: 'Download', href: '/download' },
    { name: 'Community', href: '/community' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-slate-700"
      style={{ backgroundColor: '#111827' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-white group-hover:text-white transition-colors">
              <Image 
                src="/favicons/neurondb_ai_clean.png" 
                alt={siteConfig.name} 
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                unoptimized
                priority
              />
            </div>
          </Link>
          {/* Centered menu */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300 transition-colors font-semibold"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          {/* Getting Started button right - hidden on mobile */}
          <div className="hidden md:flex items-center justify-end min-w-[180px]">
            <Link 
              href="/docs" 
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 text-sm"
            >
              Getting Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-4 py-3 text-yellow-400 hover:text-yellow-300 hover:bg-white/10 rounded-xl font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Getting Started Button */}
              <div className="border-t border-slate-200 pt-4 mt-4">
                <Link
                  href="/docs"
                  className="flex items-center px-4 py-3 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl font-medium transition-all duration-200 justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Getting Started
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
