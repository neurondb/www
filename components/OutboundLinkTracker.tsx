'use client'

import { useEffect } from 'react'
import { trackOutboundLink } from '@/lib/analytics'

/**
 * OutboundLinkTracker - Automatically tracks outbound link clicks
 * This component should be included in the layout to track all external links
 */
export default function OutboundLinkTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a') as HTMLAnchorElement

      if (!link) return

      const href = link.getAttribute('href')
      if (!href) return

      // Check if it's an outbound link (external domain)
      try {
        const url = new URL(href, window.location.origin)
        const currentDomain = window.location.hostname
        const linkDomain = url.hostname

        // Track if it's an external link
        if (linkDomain && linkDomain !== currentDomain) {
          const linkText = link.textContent?.trim() || link.getAttribute('aria-label') || href
          trackOutboundLink(href, linkText)
        }
      } catch (e) {
        // Invalid URL, skip
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}

