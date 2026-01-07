'use client'

import React from 'react'

/**
 * SkipNavigation - Accessibility component
 * Allows keyboard users to skip to main content
 */
export default function SkipNavigation() {
  return (
    <a
      href="#main-content"
      className="skip-navigation-link"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}

