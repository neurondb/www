/**
 * Analytics utility functions for tracking page views and events
 */

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void
    dataLayer?: any[]
  }
}

/**
 * Get the Google Analytics ID from environment variables
 */
function getGAId(): string {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_GA_ID || ''
  }
  // For client-side, we can't access process.env directly in some cases
  // The GA ID should be set in the script tag in layout.tsx
  return process.env.NEXT_PUBLIC_GA_ID || ''
}

/**
 * Track a page view in Google Analytics
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    const gaId = getGAId()
    if (gaId) {
      window.gtag('config', gaId, {
        page_path: url,
        page_title: title,
      })
    }
  }
}

/**
 * Track a custom event in Google Analytics
 */
export function trackEvent(
  eventName: string,
  eventParams?: {
    category?: string
    action?: string
    label?: string
    value?: number
    [key: string]: any
  }
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventParams?.category,
      event_action: eventParams?.action,
      event_label: eventParams?.label,
      value: eventParams?.value,
      ...eventParams,
    })
  }
}

/**
 * Track CTA clicks (Install, Download, GitHub, etc.)
 */
export function trackCTAClick(
  action: string,
  destination: string,
  location: string
) {
  trackEvent('cta_click', {
    category: 'Conversion',
    action,
    label: destination,
    cta_location: location,
    destination_url: destination,
  })
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string, linkText?: string) {
  trackEvent('outbound_link_click', {
    category: 'Navigation',
    action: 'click',
    label: url,
    link_text: linkText,
    destination_url: url,
  })
}

/**
 * Track blog post views
 */
export function trackBlogPostView(slug: string, title: string) {
  trackEvent('blog_post_view', {
    category: 'Blog',
    label: slug,
    blog_post_title: title,
    blog_post_slug: slug,
  })
}

/**
 * Track blog post engagement (time spent, scroll depth, etc.)
 */
export function trackBlogEngagement(
  slug: string,
  action: 'read_time' | 'scroll_depth' | 'share' | 'comment',
  value?: number
) {
  trackEvent('blog_engagement', {
    category: 'Blog',
    label: slug,
    action,
    value,
    blog_post_slug: slug,
  })
}

/**
 * Track docs page views
 */
export function trackDocsView(path: string, title?: string) {
  trackEvent('docs_view', {
    category: 'Documentation',
    label: path,
    docs_path: path,
    docs_title: title,
  })
}

/**
 * Track code block interactions (copy, etc.)
 */
export function trackCodeBlockAction(
  action: 'copy' | 'view',
  language?: string,
  location?: string
) {
  trackEvent('code_block_action', {
    category: 'Documentation',
    action,
    label: language || 'unknown',
    code_language: language,
    location,
  })
}



