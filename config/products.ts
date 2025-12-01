/**
 * Product Configuration
 * 
 * Centralized configuration for all products including metadata, URLs, features,
 * and SEO information. This is the single source of truth for product data.
 */

import { ProductId } from './types'
import { Metadata } from 'next'

export type { ProductId }

// ============================================================================
// PRODUCT METADATA INTERFACES
// ============================================================================

export interface ProductMetadata {
  id: ProductId
  name: string
  displayName: string
  tagline: string
  description: string
  longDescription: string
  keywords: string[]
  githubUrl: string
  docsUrl: string
  productUrl: string
  ogImage: string
  category: string
  version?: string
  postgresqlVersions: string[]
}

export interface ProductFeatures {
  title: string
  description: string
  items: string[]
}

export interface ProductBadges {
  badges: string[]
}

// ============================================================================
// PRODUCT CONFIGURATIONS
// ============================================================================

export const products: Record<'neurondb', ProductMetadata & ProductFeatures & ProductBadges> = {
  neurondb: {
    id: 'neurondb',
    name: 'neurondb',
    displayName: 'NeuronDB',
    tagline: 'AI Database Extension for PostgreSQL',
    description: 'PostgreSQL extension with vector search, RAG pipeline, machine learning inference, and GPU acceleration.',
    longDescription: 'PostgreSQL extension with vector search, RAG pipeline, machine learning inference, and GPU acceleration. Includes HNSW indexing, ONNX runtime, GPU acceleration, embeddings generation, and cross-encoder reranking. Provides in-database RAG with semantic search, full-text search, and LLM integration.',
    keywords: [
      'ai database', 'ai database postgresql', 'postgres ai', 'postgresql ai extension', 'postgres ai extension',
      'vector database', 'vector database postgresql', 'postgres vector database', 'vector search postgresql',
      'rag pipeline', 'rag database', 'rag postgresql', 'retrieval augmented generation postgresql',
      'semantic search postgresql', 'semantic database', 'similarity search postgresql',
      'machine learning postgresql', 'ml inference postgresql', 'postgres ml', 'postgresql machine learning',
      'embeddings database', 'embedding generation postgresql', 'text embeddings postgresql',
      'hnsw index', 'hnsw postgresql', 'vector index postgresql', 'ann search postgresql',
      'hybrid search', 'hybrid search postgresql', 'vector full text search',
      'onnx postgresql', 'onnx runtime postgresql', 'ml models postgresql',
      'gpu accelerated database', 'cuda postgresql', 'rocm postgresql',
      'ai powered database', 'llm database', 'gpt database', 'chatgpt database',
      'langchain postgresql', 'llamaindex postgresql', 'rag framework postgresql',
      'pgvector alternative', 'postgres ai comparison', 'postgresql ai tools',
      'neurondb', 'neurondB', 'pg ai', 'pgai', 'postgres vector',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neurondb',
    productUrl: '/neurondb',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'AI Database Extension',
    postgresqlVersions: ['16', '17', '18'],
    title: 'AI Database Features',
    items: [
      'Vector search uses HNSW and IVF indexing.',
      'ML inference runs ONNX models. Generates text, image, and multimodal embeddings.',
      'Hybrid search combines semantic and full-text search. Cross-encoder reranking. RAG pipeline.',
      'GPU acceleration supports CUDA and ROCm. Faster matrix operations.',
    ],
    badges: [
      'PostgreSQL 16-18',
      '5 Vector Types',
      '52 ML Algorithms',
      '473 SQL Functions',
      'GPU Acceleration',
      '4 Background Workers',
    ],
  },
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get product configuration by ID
 */
export function getProduct(productId: ProductId) {
  if (productId in products) {
    return products[productId as keyof typeof products]
  }
  return undefined
}

/**
 * Get all products as array
 */
export function getAllProducts() {
  return Object.values(products)
}

/**
 * Get product IDs
 */
export function getProductIds(): ProductId[] {
  return Object.keys(products) as ProductId[]
}

/**
 * Generate metadata for a product page
 */
export function generateProductMetadata(productId: ProductId): Metadata {
  const product = getProduct(productId)
  if (!product) {
    throw new Error(`Product ${productId} not found`)
  }

  return {
    title: `${product.displayName} - ${product.tagline} | NeuronDB`,
    description: product.description,
    keywords: product.keywords.join(', '),
    openGraph: {
      title: `${product.displayName} - ${product.tagline}`,
      description: product.description,
      type: 'website',
      url: `https://www.neurondb.ai${product.productUrl}`,
      siteName: 'NeuronDB',
      images: [
        {
          url: product.ogImage,
          width: 1200,
          height: 630,
          alt: `${product.displayName} - ${product.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.displayName} - ${product.tagline}`,
      description: product.description,
      images: [product.ogImage],
      creator: '@neurondbai',
      site: '@neurondbai',
    },
    alternates: {
      canonical: `https://www.neurondb.ai${product.productUrl}`,
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

/**
 * Generate metadata for a product docs page
 */
export function generateDocsMetadata(productId: ProductId, pageTitle?: string): Metadata {
  const product = getProduct(productId)
  if (!product) {
    throw new Error(`Product ${productId} not found`)
  }
  const title = pageTitle
    ? `${pageTitle} | ${product.displayName} Documentation`
    : `${product.displayName} Documentation | NeuronDB`

  return {
    title,
    description: `Complete documentation for ${product.displayName}. ${product.description}`,
    keywords: product.keywords.join(', '),
    openGraph: {
      title,
      description: `Complete documentation for ${product.displayName}. ${product.description}`,
      type: 'website',
      url: `https://www.neurondb.ai${product.docsUrl}`,
      siteName: 'NeuronDB',
      images: [
        {
          url: product.ogImage,
          width: 1200,
          height: 630,
          alt: `${product.displayName} Documentation`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: `Complete documentation for ${product.displayName}`,
      images: [product.ogImage],
    },
    alternates: {
      canonical: `https://www.neurondb.ai${product.docsUrl}`,
    },
  }
}

// ============================================================================
// EXPORT DEFAULT
// ============================================================================

export default products

