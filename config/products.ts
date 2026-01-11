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
    longDescription: 'NeuronDB is a PostgreSQL AI extension. It provides vector search with 5 vector types (vector, vectorp, vecmap, vgraph, rtext), 52 ML algorithms implemented in pure C, 520+ SQL functions, and GPU acceleration for CUDA, ROCm, and Metal. Includes HNSW and IVF indexing, ONNX runtime, embeddings generation (text, image, multimodal), hybrid search, cross-encoder and LLM reranking, AutoML, feature store, and comprehensive background workers. Provides in-database RAG with semantic search, full-text search, and LLM integration in PostgreSQL.',
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
    version: '2.0.0',
    postgresqlVersions: ['16', '17', '18'],
    title: 'AI Database Features',
    items: [
      'Vector search uses HNSW and IVF indexing.',
      'ML inference runs ONNX models. Generates text, image, and multimodal embeddings.',
      'Hybrid search combines semantic and full-text search. Cross-encoder reranking. RAG pipeline.',
      'GPU acceleration supports CUDA, ROCm, and Metal (3 backends). Faster matrix operations.',
    ],
    badges: [
      'PostgreSQL 16-18',
      '5 Vector Types',
      '52 ML Algorithms',
      '520+ SQL Functions',
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
    longDescription: 'AI agent runtime system providing REST API and WebSocket endpoints for building applications with long-term memory and tool execution. Includes agent state machine, multi-agent collaboration, DAG-based workflow engine with human-in-the-loop (HITL), hierarchical memory management, planning & reflection, evaluation framework, budget & cost management, 20+ tools (SQL, HTTP, Code, Shell, Browser, Filesystem, Memory, Collaboration, NeuronDB tools, Multimodal), Prometheus metrics, RBAC, audit logging, background workers, virtual filesystem, and versioning & history.',
    keywords: [
      'ai agent runtime', 'agent api', 'postgres agent', 'agent framework', 'autonomous agents',
      'rest api agent', 'websocket agent', 'long-term memory', 'agent memory', 'agent tools',
      'tool execution', 'agent state machine', 'agent session', 'background jobs',
      'neuronagent', 'ai agents', 'agent runtime', 'rag agents', 'llm agents',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neuronagent',
    productUrl: '/neuronagent',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'Agent Runtime',
    version: '2.0.0',
    postgresqlVersions: ['16', '17', '18'],
    title: 'Agent Runtime Features',
    items: [
      'Agent state machine for autonomous task execution with state persistence and recovery.',
      'Multi-agent collaboration with agent-to-agent communication, task delegation, shared workspaces, and hierarchical agent structures.',
      'DAG-based workflow engine with agent, tool, HTTP, approval, and conditional steps with human-in-the-loop (HITL) support.',
      'Hierarchical memory with multi-level organization and HNSW-based vector search for better context retrieval across sessions.',
      'Planning & reflection with LLM-based planning, task decomposition, agent self-reflection, and quality assessment.',
      'Evaluation framework with built-in evaluation system for agent performance and automated quality scoring.',
      'Budget & cost management with real-time cost tracking, per-agent and per-session budget controls, and budget alerts.',
      '20+ tools including SQL, HTTP, Code, Shell, Browser (Playwright), Filesystem (virtual), Memory, Collaboration, NeuronDB tools (RAG, Hybrid Search, Reranking, Vector, ML, Analytics, Visualization), and Multimodal processing.',
      'REST API and WebSocket endpoints for agent, session, message, workflow, plan, budget, and collaboration management.',
    ],
    badges: [
      'REST API',
      'WebSocket',
      'Multi-Agent',
      'Workflow Engine',
      '20+ Tools',
      'Budget Management',
      'HITL Support',
      'Virtual Filesystem',
    ],
  },
  neuronmcp: {
    id: 'neuronmcp',
    name: 'neuronmcp',
    displayName: 'NeuronMCP',
    tagline: 'Model Context Protocol Server for NeuronDB',
    description: 'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB vector operations, ML training, RAG pipeline, dataset loading from HuggingFace/URLs/GitHub/S3, and PostgreSQL administration.',
    longDescription: 'Model Context Protocol server for NeuronDB PostgreSQL extension, implemented in Go. Provides 100+ tools including 27 comprehensive PostgreSQL administration tools and 70+ NeuronDB tools for vector operations (50+ tools with 7+ distance metrics, quantization: int8, fp16, binary, uint8, ternary, int4), ML training (complete ML pipeline: all 52 algorithms, prediction, evaluation, AutoML, ONNX, time series), analytics, RAG pipeline, reranking (cross-encoder, LLM, Cohere, ColBERT, LTR, ensemble), dataset loading (HuggingFace, URLs, GitHub, S3, local files with auto-embedding), vector graph operations, vecmap operations, and complete database management. Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport. Supports prompts protocol, sampling/completions, progress tracking, batch operations, tool discovery. Enterprise features: middleware (validation, logging, timeout, error handling, auth, rate limiting), authentication (JWT, API keys, OAuth2), Prometheus metrics, webhooks, caching, circuit breaker, retry mechanisms, health checks.',
    keywords: [
      'mcp server', 'model context protocol', 'claude desktop', 'mcp protocol',
      'json-rpc', 'stdio transport', 'mcp tools', 'mcp resources', 'claude integration',
      'neuronmcp', 'mcp neurondb', 'anthropic mcp', 'mcp client', 'protocol server',
      '100 mcp tools', '100+ tools', '27 postgresql tools', '70 neurondb tools', 'dataset loading', 'reranking tools', 'postgresql tools',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neuronmcp',
    productUrl: '/neuronmcp',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'MCP Server',
    version: '2.0.0',
    postgresqlVersions: ['16', '17', '18'],
    title: 'MCP Server Features',
    items: [
      'JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport for MCP-compatible clients (Claude Desktop, etc.).',
      '100+ tools: 27 PostgreSQL administration tools + 70+ NeuronDB tools covering vector operations (50+ tools), ML pipeline (52 algorithms), analytics, RAG, reranking (6 methods), dataset loading (HuggingFace, URLs, GitHub, S3, local), vector graph, vecmap operations, and complete database management.',
      'Resources, Prompts Protocol, Sampling/Completions, Progress Tracking, Batch Operations, and Tool Discovery.',
      'Dataset loading with automatic schema detection, auto-embedding, and index creation for HuggingFace, URLs, GitHub, S3, and local files.',
      'Enterprise features: middleware (validation, logging, timeout, error handling, auth, rate limiting), authentication (JWT, API keys, OAuth2), Prometheus metrics, webhooks, caching, circuit breaker, retry mechanisms, health checks.',
    ],
    badges: [
      '100+ Tools',
      '27 PostgreSQL Tools',
      'JSON-RPC 2.0',
      'stdio Transport',
      'MCP Protocol',
      'Enterprise Ready',
    ],
  },
  neurondesktop: {
    id: 'neurondesktop',
    name: 'neurondesktop',
    displayName: 'NeuronDesktop',
    tagline: 'Unified Web Interface for NeuronDB Ecosystem',
    description: 'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Real-time WebSocket communication, secure authentication, and comprehensive monitoring.',
    longDescription: 'Unified web interface providing a single dashboard for managing and interacting with MCP servers, NeuronDB, and NeuronAgent. Features real-time communication via WebSocket, secure API key authentication, professional UI with markdown rendering, comprehensive logging with analytics, built-in metrics collection, automated setup with auto-detection, profile-based configuration for multiple environments, SQL console, query builder, schema browser, and agent management.',
    keywords: [
      'neurondesktop', 'web interface', 'dashboard', 'ui', 'admin panel',
      'mcp interface', 'agent management', 'vector search ui', 'database ui',
      'unified dashboard', 'web dashboard', 'management interface',
      'automated setup', 'profile configuration', 'real-time monitoring',
    ],
    githubUrl: 'https://github.com/neurondb-ai/neurondb',
    docsUrl: '/docs/neurondesktop',
    productUrl: '/neurondesktop',
    ogImage: 'https://www.neurondb.ai/og-image.jpg',
    category: 'Web Interface',
    version: '2.0.0',
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
    description: `Documentation for ${product.displayName}. ${product.description}`,
    keywords: product.keywords.join(', '),
    openGraph: {
      title,
      description: `Documentation for ${product.displayName}. ${product.description}`,
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
      description: `Documentation for ${product.displayName}`,
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

