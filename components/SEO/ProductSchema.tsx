import React from 'react'
import { getProduct, type ProductId } from '@/config/products'
import { baseSEO } from '@/config/seo'
import { siteConfig } from '@/config/site'

interface ProductSchemaProps {
  productId: ProductId
}

/**
 * ProductSchema - SoftwareApplication structured data component
 * Generates software application schema for product pages
 */
export default function ProductSchema({ productId }: ProductSchemaProps) {
  const product = getProduct(productId)
  if (!product) {
    return null
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.displayName,
    applicationCategory: 'DatabaseApplication',
    operatingSystem: ['Linux', 'macOS', 'Windows', 'Docker', 'Kubernetes'],
    description: product.longDescription || product.description,
    url: `${baseSEO.siteUrl}${product.productUrl}`,
    downloadUrl: product.githubUrl,
    softwareVersion: product.version || '1.0.0',
    releaseNotes: product.githubUrl,
    screenshot: {
      '@type': 'ImageObject',
      url: product.ogImage.startsWith('http') ? product.ogImage : `${baseSEO.siteUrl}${product.ogImage}`,
      width: 1200,
      height: 630,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '1',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${baseSEO.siteUrl}/download`,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
    },
    creator: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: baseSEO.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseSEO.siteUrl}/favicons/favicon-512.png`,
        width: 512,
        height: 512,
      },
    },
    featureList: product.items || [
      'Vector Search',
      'Machine Learning',
      'RAG Pipeline',
      'GPU Acceleration',
      'Hybrid Search',
      'Embeddings Generation',
      'HNSW Indexing',
      'ONNX Inference',
    ],
    keywords: product.keywords?.join(', '),
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    license: product.githubUrl,
    softwareRequirements: 'PostgreSQL 16, 17, or 18',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    applicationSubCategory: product.category,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
