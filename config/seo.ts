/**
 * SEO Configuration
 * 
 * Centralized SEO metadata templates and generators.
 * Used for consistent SEO across all pages.
 */

import { Metadata } from 'next'
import { products, generateProductMetadata, generateDocsMetadata, getProduct, type ProductId } from './products'

// ============================================================================
// BASE SEO CONFIGURATION
// ============================================================================

import { siteConfig } from './site'

export const baseSEO = {
  siteName: siteConfig.name,
  siteUrl: `https://${siteConfig.domain}`,
  twitterHandle: '@neurondbai',
  defaultImage: '/og-image.jpg?v=2',
  defaultDescription: siteConfig.description,
}

// ============================================================================
// SEO TEMPLATE GENERATORS
// ============================================================================

/**
 * Generate basic metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  image,
  noindex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
}: {
  title: string
  description: string
  keywords?: string[]
  path: string
  image?: string
  noindex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}): Metadata {
  const url = `${baseSEO.siteUrl}${path}`
  const ogImage = image ? (image.startsWith('http') ? image : `${baseSEO.siteUrl}${image}`) : `${baseSEO.siteUrl}${baseSEO.defaultImage}`
  const optimizedDescription = description.substring(0, 160) // Ensure optimal length

  return {
    title: `${title} | ${baseSEO.siteName}`,
    description: optimizedDescription,
    keywords: keywords?.join(', ') || '',
    openGraph: {
      title: title.substring(0, 60), // Optimal OG title length
      description: optimizedDescription,
      type,
      url,
      siteName: baseSEO.siteName,
      locale: 'en_US',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
          type: 'image/jpeg',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title.substring(0, 70), // Optimal Twitter title length
      description: description.substring(0, 200), // Optimal Twitter description length
      images: [ogImage],
      creator: baseSEO.twitterHandle,
      site: baseSEO.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    },
  }
}

/**
 * Generate metadata for a product page
 */
export function generateProductPageMetadata(productId: ProductId): Metadata {
  return generateProductMetadata(productId)
}

/**
 * Generate metadata for a docs page
 */
export function generateDocsPageMetadata(
  productId: ProductId,
  pageTitle?: string
): Metadata {
  return generateDocsMetadata(productId, pageTitle)
}

/**
 * Generate metadata for a blog post
 */
export function generateBlogMetadata({
  title,
  description,
  slug,
  publishedAt,
  image,
  author = 'NeuronDB Team',
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  image?: string
  author?: string
}): Metadata {
  const url = `${baseSEO.siteUrl}/blog/${slug}`
  const ogImage = image || baseSEO.defaultImage

  return {
    title: `${title} | ${baseSEO.siteName} Blog`,
    description,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: baseSEO.siteName,
      publishedTime: publishedAt,
      authors: [author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: baseSEO.twitterHandle,
      site: baseSEO.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// ============================================================================
// STRUCTURED DATA SCHEMAS
// ============================================================================

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: baseSEO.siteName,
    url: baseSEO.siteUrl,
    logo: `${baseSEO.siteUrl}/favicons/favicon-512.png`,
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
  }
}

/**
 * Generate SoftwareApplication structured data for a product
 */
export function generateProductSchema(productId: ProductId) {
  const product = getProduct(productId)
  if (!product) {
    throw new Error(`Product ${productId} not found`)
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.displayName,
    applicationCategory: 'DatabaseApplication',
    operatingSystem: 'Linux, macOS, Windows',
    description: product.description,
    url: `${baseSEO.siteUrl}${product.productUrl}`,
    downloadUrl: product.githubUrl,
    softwareVersion: product.version || 'latest',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

/**
 * Generate Article structured data for a blog post
 * Enhanced with better SEO properties
 */
export function generateArticleSchema({
  title,
  description,
  slug,
  publishedAt,
  modifiedAt,
  image,
  author = 'NeuronDB Team',
  keywords,
  wordCount,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  modifiedAt?: string
  image?: string
  author?: string
  keywords?: string[]
  wordCount?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? (image.startsWith('http') ? image : `${baseSEO.siteUrl}${image}`) : `${baseSEO.siteUrl}${baseSEO.defaultImage}`,
    datePublished: publishedAt,
    dateModified: modifiedAt || publishedAt,
    author: {
      '@type': 'Person',
      name: author,
      url: baseSEO.siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: baseSEO.siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${baseSEO.siteUrl}/favicons/favicon-512.png`,
        width: 512,
        height: 512,
      },
      url: baseSEO.siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseSEO.siteUrl}/blog/${slug}`,
    },
    articleSection: 'Technology',
    keywords: keywords?.join(', '),
    wordCount: wordCount,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    license: baseSEO.siteUrl,
  }
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseSEO.siteUrl}${item.url}`,
    })),
  }
}

// ============================================================================
// OPENGRAPH TEMPLATES
// ============================================================================

export const openGraphTemplates = {
  /**
   * Generate OpenGraph image URL
   */
  imageUrl: (path: string) => `${baseSEO.siteUrl}${path}`,

  /**
   * Generate OpenGraph metadata
   */
  metadata: ({
    title,
    description,
    url,
    image,
    type = 'website',
  }: {
    title: string
    description: string
    url: string
    image?: string
    type?: 'website' | 'article'
  }) => ({
    title,
    description,
    type,
    url,
    siteName: baseSEO.siteName,
    images: [
      {
        url: image || baseSEO.defaultImage,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  }),
}

// ============================================================================
// TWITTER CARD TEMPLATES
// ============================================================================

export const twitterCardTemplates = {
  /**
   * Generate Twitter card metadata
   */
  metadata: ({
    title,
    description,
    image,
  }: {
    title: string
    description: string
    image?: string
  }) => ({
    card: 'summary_large_image' as const,
    title,
    description,
    images: [image || baseSEO.defaultImage],
    creator: baseSEO.twitterHandle,
    site: baseSEO.twitterHandle,
  }),
}

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

const seoConfig = {
  baseSEO,
  generatePageMetadata,
  generateProductPageMetadata,
  generateDocsPageMetadata,
  generateBlogMetadata,
  generateOrganizationSchema,
  generateProductSchema,
  generateArticleSchema,
  generateBreadcrumbSchema,
  openGraphTemplates,
  twitterCardTemplates,
}

export default seoConfig

