'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

/**
 * ScrollToTop - Button to scroll back to top of page
 * Appears when user scrolls down
 */
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3.5 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900 group"
      aria-label="Scroll to top of page"
      title="Scroll to top"
    >
      <ArrowUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" aria-hidden="true" />
    </button>
  )
}

