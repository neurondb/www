'use client'

import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

/**
 * DarkModeToggle - Theme switcher component
 * Toggles between light and dark mode with persistence
 */
export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if HTML element already has 'dark' class (from server-side forced dark mode)
    const htmlHasDark = document.documentElement.classList.contains('dark')
    // Check localStorage for user preference
    const stored = localStorage.getItem('theme')
    
    if (stored) {
      // If user has a preference, use it
      const shouldBeDark = stored === 'dark'
      setIsDark(shouldBeDark)
      // Sync HTML class with preference
      if (shouldBeDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // No preference stored - check if HTML already has dark class (default to dark)
      const shouldBeDark = htmlHasDark || true // Default to dark mode
      setIsDark(shouldBeDark)
      localStorage.setItem('theme', shouldBeDark ? 'dark' : 'light')
      // Ensure HTML class matches
      if (shouldBeDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark, mounted])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  if (!mounted) {
    // Return placeholder to avoid hydration mismatch
    return (
      <button
        className="p-2 rounded-lg text-yellow-400 hover:bg-white/10 transition-colors"
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-yellow-400 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}

