import React from 'react'
import { BookOpen, Download, ExternalLink, Database, Zap, Search } from 'lucide-react'
import ProductDocsLanding from '@/components/ProductDocsLanding'
import { NeurondBIcon } from '@/components/ProductIcons'

export const metadata = {
  title: 'NeurondB Documentation | AI PostgreSQL Extension',
  description:
    'NeurondB: AI PostgreSQL extension for vector search, machine learning, and AI workloads. GPU-accelerated vector search, HNSW indexing, ML inference, hybrid retrieval, RAG pipelines, and ONNX model deployment in PostgreSQL.',
  keywords: [
    'NeurondB',
    'AI PostgreSQL',
    'AI Postgres',
    'PostgreSQL AI extension',
    'PostgreSQL.ai',
    'PostgreSQL.ai alternative',
    'pgml',
    'pgml alternative',
    'PostgreSQLml',
    'PostgreSQL ML',
    'PostgreSQL machine learning',
    'AI extension for PostgreSQL',
    'PostgreSQL vector search',
    'GPU-accelerated vector database',
    'HNSW index',
    'vector similarity search',
    'machine learning in PostgreSQL',
    'ONNX inference',
    'hybrid search',
    'RAG pipeline',
    'vector embeddings',
    'semantic search',
    'neural network database',
    'vector indexing',
    'cosine similarity',
    'L2 distance',
    'approximate nearest neighbor',
    'ANN search',
    'embedding generation',
    'PostgreSQL AI',
    'Postgres AI',
    'AI database extension'
  ].join(', '),
  alternates: {
    canonical: 'https://www.neurondb.ai/docs/neurondb',
  },
  openGraph: {
    title: 'NeurondB Documentation | PostgreSQL AI Vector Extension',
    description: 'Guide to GPU-accelerated vector search, ML inference, and RAG pipelines in PostgreSQL with NeurondB.',
    type: 'website',
    url: 'https://www.neurondb.ai/docs/neurondb',
    siteName: 'NeuronDB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeurondB Documentation | PostgreSQL AI Vector Extension',
    description: 'Guide to GPU-accelerated vector search, ML inference, and RAG pipelines in PostgreSQL.',
  },
}

export default function Page() {
  return (
    <ProductDocsLanding
      hero={{
        badgeLabel: '',
        badgeIcon: null,
        badgeGradient: 'from-slate-700 to-slate-600',
        title: 'NeuronDB Documentation',
        description:
          'GPU-accelerated vector search, model inference, hybrid retrieval, and RAG orchestration built into PostgreSQL. NeurondB is an AI PostgreSQL extension. Use this documentation to deploy NeurondB, operate background workers, and embed ML pipelines in SQL.',
        ctas: [
          {
            label: 'Get Started',
            href: '/docs/getting-started',
            icon: <BookOpen className="h-4 w-4" />,
            variant: 'primary'
          },
          {
            label: 'View on GitHub',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: <ExternalLink className="h-4 w-4" />,
            external: true,
            variant: 'secondary'
          }
        ]
      }}
      features={[
        {
          icon: Database,
          title: 'Vector Search',
          description: 'HNSW, IVF, product quantization, and custom distance metrics for billion-scale similarity search.',
          href: '/docs/features/vector-types'
        },
        {
          icon: () => <NeurondBIcon size={24} />,
          title: 'ML Inference',
          description: 'ONNX runtime integration, GPU offload, and batch execution for deep learning workloads in SQL.',
          href: '/docs/ml/inference'
        },
        {
          icon: Search,
          title: 'Hybrid Retrieval',
          description: 'Blend keyword, metadata, and vector signals to deliver highly relevant multimodal results.',
          href: '/docs/hybrid/overview'
        },
        {
          icon: Zap,
          title: 'RAG Pipelines',
          description: 'In-database retrieval augmented generation with prompt templates, metadata policies, and observability.',
          href: '/docs/rag'
        }
      ]}
      docSections={[
        {
          title: 'Getting Started',
          description: 'Install NeurondB on PostgreSQL 16–18, verify GPU support, and apply baseline configuration.',
          items: [
            { title: 'Installation', href: '/docs/installation', description: 'Build from source or install packages.' },
            { title: 'Quick Start', href: '/docs/getting-started/quickstart', description: 'Load sample data and run first vector searches.' },
            { title: 'Configuration', href: '/docs/configuration', description: 'GUC parameters for CPU/GPU execution paths.' }
          ]
        },
        {
          title: 'Core Features',
          description: 'Learn how NeurondB models vectors, maintains indexes, and tunes recall versus latency.',
          items: [
            { title: 'Vector Types', href: '/docs/features/vector-types', description: 'Supported dimensionality and storage formats.' },
            { title: 'Distance Metrics', href: '/docs/features/distance-metrics', description: 'Cosine, L2, IP, dot, and hybrid scoring.' },
            { title: 'Indexing', href: '/docs/indexing', description: 'HNSW, IVF, PQ, and adaptive index selection.' },
            { title: 'Quantization', href: '/docs/features/quantization', description: 'Reduce memory footprint with scalar and vector quantization.' }
          ]
        },
        {
          title: 'ML & Embeddings',
          description: 'Generate, store, and serve embeddings alongside model lifecycle management.',
          items: [
            { title: 'Embeddings', href: '/docs/ml/embeddings', description: 'Transform text, audio, and images into dense vectors.' },
            { title: 'Inference', href: '/docs/ml/inference', description: 'Deploy ONNX models with GPU batching and caching.' },
            { title: 'Model Management', href: '/docs/ml/model-management', description: 'Version control, approvals, and rollback workflows.' }
          ]
        },
        {
          title: 'Hybrid Search & Reranking',
          description: 'Combine text search, BM25, and neural rerankers for production retrieval pipelines.',
          items: [
            { title: 'Hybrid Overview', href: '/docs/hybrid/overview', description: 'Architectures for multi-signal retrieval.' },
            { title: 'Reranking', href: '/docs/reranking/overview', description: 'Cross-encoder and LLM reranking playbooks.' },
            { title: 'RAG Workflows', href: '/docs/rag', description: 'Orchestrate retrieval augmented generation end to end.' }
          ]
        },
        {
          title: 'Background Workers',
          description: 'Operational guidance for queue execution, auto-tuning, and index maintenance workers.',
          items: [
            { title: 'Worker Overview', href: '/docs/background-workers', description: 'Understand worker architecture and lifecycles.' },
            { title: 'Queue Worker (neuranq)', href: '/docs/background-workers/neuranq', description: 'Batch ingestion and asynchronous scoring.' },
            { title: 'Auto-Tuner (neuranmon)', href: '/docs/background-workers/neuranmon', description: 'Automated index health and GPU utilization tuning.' },
            { title: 'Index Maintenance (neurandefrag)', href: '/docs/background-workers/neurandefrag', description: 'Defragment and rebalance vector indexes online.' }
          ]
        },
        {
          title: 'Components',
          description: 'NeuronDB ecosystem components: NeuronAgent for agent runtime and NeuronMCP for MCP protocol support.',
          items: [
            { title: 'NeuronAgent', href: '/docs/neuronagent', description: 'AI agent runtime with REST API, WebSocket, long-term memory, and tool execution.' },
            { title: 'NeuronMCP', href: '/docs/neuronmcp', description: 'Model Context Protocol server for MCP-compatible clients like Claude Desktop.' }
          ]
        }
      ]}
      quickLinks={[
        {
          title: 'Getting Started Guide',
          description: 'Bootstrap NeurondB on PostgreSQL 16–18 with CPU and GPU execution paths.',
          href: '/docs/getting-started',
          icon: BookOpen
        },
        {
          title: 'Installation Reference',
          description: 'Build from source, package installations, upgrades, and validation scripts.',
          href: '/docs/installation',
          icon: Download
        },
        {
          title: 'GitHub Repository',
          description: 'Source code, issues, and contribution guide for NeurondB.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: ExternalLink,
          external: true
        }
      ]}
      theme={{
        featureIconClass: 'text-yellow-400',
        linkHoverClass: 'hover:text-yellow-300',
        quickLinkCardClass:
          'rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:border-yellow-300 dark:border-slate-700/60 dark:bg-slate-900/60',
        quickLinkIconClass: 'text-yellow-400',
        quickLinkHoverLabelClass: 'text-yellow-400'
      }}
    />
  )
}

