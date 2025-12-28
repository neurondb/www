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

export const products: Record<'neurondb' | 'neuronagent' | 'neuronmcp' | 'neurondesktop', ProductMetadata & ProductFeatures & ProductBadges> = {
  neurondb: {
    id: 'neurondb',
    name: 'neurondb',
    displayName: 'NeuronDB',
    tagline: 'PostgreSQL AI Extension',
    description: 'PostgreSQL AI extension with vector search, ML inference, RAG pipeline, and GPU acceleration. Build AI applications directly in PostgreSQL.',
    longDescription: 'NeuronDB is a PostgreSQL AI extension that transforms PostgreSQL into a complete AI database. This PostgreSQL AI extension provides vector search, machine learning inference, RAG pipeline, and GPU acceleration. Includes HNSW indexing, ONNX runtime, GPU acceleration, embeddings generation, and cross-encoder reranking. Provides in-database RAG with semantic search, full-text search, and LLM integration—all within PostgreSQL.',
    keywords: [
      'postgresql ai extension',
      'postgresql ai extension vector search',
      'postgresql ai extension ml',
      'postgresql ai extension rag',
      'postgresql ai extension gpu',
      'postgres ai extension',
      'postgres extension ai',
      'postgres ai extension vector',
      'ai database', 'ai database postgresql', 'postgres ai',
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
  neuronagent: {
    id: 'neuronagent',
    name: 'neuronagent',
    displayName: 'NeuronAgent',
    tagline: 'AI Agent Runtime for PostgreSQL',
    description: 'REST API and WebSocket agent runtime system with long-term memory, tool execution, and streaming responses.',
    longDescription: 'AI agent runtime system providing REST API and WebSocket endpoints for building applications with long-term memory and tool execution. Includes agent state machine, HNSW-based vector search for context retrieval, extensible tool registry, and background job processing.',
    keywords: [
      'ai agent runtime', 'agent api', 'postgres agent', 'agent framework', 'autonomous agents',
      'rest api agent', 'websocket agent', 'long-term memory', 'agent memory', 'agent tools',
      'tool execution', 'agent state machine', 'agent session', 'background jobs',
      'neuronagent', 'ai agents', 'agent runtime', 'rag agents', 'llm agents',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neuronagent',
    productUrl: '/docs/neuronagent',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'Agent Runtime',
    postgresqlVersions: ['16', '17', '18'],
    title: 'Agent Runtime Features',
    items: [
      'Agent state machine for autonomous task execution with state persistence and recovery.',
      'Long-term memory with HNSW-based vector search for context retrieval across sessions.',
      'Tool registry supporting SQL, HTTP, Code, and Shell operations with streaming responses.',
      'REST API and WebSocket endpoints for agent, session, and message management.',
    ],
    badges: [
      'REST API',
      'WebSocket',
      'Long-term Memory',
      'Tool Execution',
      'State Machine',
      'Background Jobs',
    ],
  },
  neuronmcp: {
    id: 'neuronmcp',
    name: 'neuronmcp',
    displayName: 'NeuronMCP',
    tagline: 'Model Context Protocol Server for NeuronDB',
    description: 'Model Context Protocol server with 50+ tools enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB vector operations, ML training, RAG pipeline, and PostgreSQL administration.',
    longDescription: 'Model Context Protocol server for NeuronDB PostgreSQL extension, implemented in Go. Provides 50+ tools for vector operations, ML training, analytics, RAG pipeline, reranking, dataset loading, and PostgreSQL administration. Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport. Enterprise features including middleware, authentication, metrics, and webhooks.',
    keywords: [
      'mcp server', 'model context protocol', 'claude desktop', 'mcp protocol',
      'json-rpc', 'stdio transport', 'mcp tools', 'mcp resources', 'claude integration',
      'neuronmcp', 'mcp neurondb', 'anthropic mcp', 'mcp client', 'protocol server',
      '50 mcp tools', 'dataset loading', 'reranking tools', 'postgresql tools',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neuronmcp',
    productUrl: '/docs/neuronmcp',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'MCP Server',
    postgresqlVersions: ['16', '17', '18'],
    title: 'MCP Server Features',
    items: [
      'JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport for MCP-compatible clients.',
      '50+ tools covering vector operations, ML training, analytics, RAG, reranking, dataset loading, and PostgreSQL administration.',
      'Resource management for schema, models, indexes, and system statistics with real-time subscriptions.',
      'Enterprise features: middleware (validation, logging, auth), Prometheus metrics, webhooks, circuit breaker.',
    ],
    badges: [
      '50+ Tools',
      'JSON-RPC 2.0',
      'stdio Transport',
      'MCP Protocol',
      'Claude Desktop',
      'Enterprise Ready',
    ],
  },
  neurondesktop: {
    id: 'neurondesktop',
    name: 'neurondesktop',
    displayName: 'NeuronDesktop',
    tagline: 'Unified Web Interface for NeuronDB Ecosystem',
    description: 'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Real-time WebSocket communication, secure authentication, and comprehensive monitoring.',
    longDescription: 'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Features real-time communication via WebSocket, secure API key authentication, professional UI, comprehensive logging with analytics, built-in metrics collection, automated setup, and profile-based configuration for multiple environments.',
    keywords: [
      'neurondesktop', 'web interface', 'dashboard', 'ui', 'admin panel',
      'mcp interface', 'agent management', 'vector search ui', 'database ui',
      'unified dashboard', 'web dashboard', 'management interface',
      'automated setup', 'profile configuration', 'real-time monitoring',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neurondesktop',
    productUrl: '/docs/neurondesktop',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'Web Interface',
    postgresqlVersions: ['16', '17', '18'],
    title: 'Web Interface Features',
    items: [
      'Unified interface for MCP servers, NeuronDB, and NeuronAgent in a single dashboard with profile-based configuration.',
      'Real-time communication via WebSocket for live updates, streaming responses, and instant feedback.',
      'Secure authentication with API key-based access control, rate limiting, and comprehensive audit logging.',
      'Professional UI with automated setup, metrics collection, health monitoring, and agent management.',
    ],
    badges: [
      'Unified Dashboard',
      'Real-time Updates',
      'MCP Integration',
      'Agent Management',
      'Metrics & Logging',
      'Automated Setup',
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

  const isNeuronDB = productId === 'neurondb'
  const title = isNeuronDB 
    ? `PostgreSQL AI Extension - ${product.displayName} | Vector Search, ML & RAG Pipeline`
    : `${product.displayName} - ${product.tagline} | NeuronDB`
  const ogTitle = isNeuronDB
    ? `PostgreSQL AI Extension - ${product.displayName}`
    : `${product.displayName} - ${product.tagline}`

  return {
    title,
    description: product.description,
    keywords: product.keywords.join(', '),
    openGraph: {
      title: ogTitle,
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

