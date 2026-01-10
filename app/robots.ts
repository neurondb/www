import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

// Route segment config for Vercel ISR
export const dynamic = 'force-dynamic' // Enable ISR
export const revalidate = 86400 // Revalidate daily

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${siteConfig.domain}`
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/search?*',
          '/tmp/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/tmp/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/tmp/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/tmp/',
          '/private/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}



