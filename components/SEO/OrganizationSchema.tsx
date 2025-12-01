import React from 'react'
import { siteConfig } from '@/config/site'
import { baseSEO } from '@/config/seo'

/**
 * OrganizationSchema - Organization structured data component
 * Generates organization schema for better brand recognition in search
 */
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}/favicons/favicon-512.png`,
    description: siteConfig.description,
    foundingDate: '2024',
    sameAs: [
      siteConfig.github,
      siteConfig.twitter,
      siteConfig.linkedin,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: siteConfig.email,
      url: `${baseSEO.siteUrl}/contact`,
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'PostgreSQL',
      'Vector Search',
      'Machine Learning',
      'RAG Pipeline',
      'AI Database',
      'Embeddings',
      'GPU Acceleration',
      'Database Extensions',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
