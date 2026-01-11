'use client'

import { BookOpen, Download, ExternalLink, Server, Database, Search, FileText, Layers, Cpu } from 'lucide-react'
import ProductDocsLanding from '@/components/ProductDocsLanding'
import { getProductTheme } from '@/config/theme'

export default function NeuronMCPDocsPage() {
  const theme = getProductTheme('neuronmcp')
  
  return (
    <ProductDocsLanding
      hero={{
        badgeLabel: 'Model Context Protocol Server',
        badgeIcon: null,
        badgeGradient: theme.badgeGradient,
        title: 'NeuronMCP Documentation',
        description:
          'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB. 50+ vector operations, complete ML pipeline (52 algorithms), RAG pipeline, 6 reranking methods, dataset loading (HuggingFace, URLs, GitHub, S3, local), vector graph, vecmap operations, and PostgreSQL administration. Supports prompts protocol, sampling/completions, progress tracking, and batch operations.',
        ctas: [
          {
            label: 'Get Started',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: BookOpen,
            variant: 'primary'
          },
          {
            label: 'View on GitHub',
            href: 'https://github.com/neurondb-ai/neurondb',
            icon: ExternalLink,
            external: true,
            variant: 'secondary'
          }
        ]
      }}
      features={[
        {
          icon: Server,
          title: 'MCP Protocol',
          description: 'Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport for MCP-compatible clients.',
        },
        {
          icon: Database,
          title: '100+ Tools',
          description: '27 PostgreSQL administration tools + 70+ NeuronDB tools including 50+ vector operations, complete ML pipeline, RAG, reranking, dataset loading, vector graph, and vecmap operations.',
        },
        {
          icon: Search,
          title: 'Vector Operations (50+ Tools)',
          description: 'Vector search with 7+ distance metrics, quantization (int8, fp16, binary, uint8, ternary, int4), embeddings, HNSW/IVF indexing, hybrid search, and multi-vector search.',
        },
        {
          icon: Cpu,
          title: 'Complete ML Pipeline',
          description: 'All 52 ML algorithms, training, prediction, evaluation, AutoML, ONNX support, time series analysis, and analytics tools.',
        },
        {
          icon: FileText,
          title: 'Dataset Loading',
          description: 'Load datasets from HuggingFace, URLs, GitHub, S3, and local files with automatic schema detection, auto-embedding, and index creation.',
        }
      ]}
      docSections={[
        {
          title: 'Getting Started',
          description: 'Install and configure NeuronMCP server, connect Claude Desktop, and start using MCP tools.',
          items: [
            { title: 'Installation', href: 'https://github.com/neurondb-ai/neurondb', description: 'Build and install NeuronMCP server from source or use pre-built binaries.', external: true },
            { title: 'Claude Desktop Setup', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration', description: 'Configure Claude Desktop to connect to NeuronMCP server.', external: true },
            { title: 'Quick Start', href: 'https://github.com/neurondb-ai/neurondb', description: 'Test your first MCP tool call and verify server connectivity.', external: true },
            { title: 'Configuration', href: 'https://github.com/neurondb-ai/neurondb', description: 'Configure database connections, authentication, and middleware.', external: true }
          ]
        },
        {
          title: 'MCP Protocol',
          description: 'JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport options.',
          items: [
            { title: 'Protocol Overview', href: 'https://github.com/neurondb-ai/neurondb', description: 'Understanding the Model Context Protocol and JSON-RPC 2.0 implementation.', external: true },
            { title: 'stdio Transport', href: 'https://github.com/neurondb-ai/neurondb', description: 'Use stdio transport for Claude Desktop and other stdio-based clients.', external: true },
            { title: 'HTTP Transport', href: 'https://github.com/neurondb-ai/neurondb', description: 'HTTP transport for web-based clients and remote connections.', external: true },
            { title: 'SSE Transport', href: 'https://github.com/neurondb-ai/neurondb', description: 'Server-Sent Events transport for streaming responses.', external: true }
          ]
        },
        {
          title: 'Vector Tools',
          description: '70+ NeuronDB tools for vector operations, search, indexing, and embeddings.',
          items: [
            { title: 'Vector Search', href: 'https://github.com/neurondb-ai/neurondb', description: 'Vector search with multiple distance metrics (L2, Cosine, IP, Manhattan, Hamming, Jaccard).', external: true },
            { title: 'Embeddings', href: 'https://github.com/neurondb-ai/neurondb', description: 'Generate text, image, and multimodal embeddings with batch processing.', external: true },
            { title: 'Indexing', href: 'https://github.com/neurondb-ai/neurondb', description: 'Create and manage HNSW and IVF indexes for vector search.', external: true },
            { title: 'Quantization', href: 'https://github.com/neurondb-ai/neurondb', description: 'Quantization tools: int8, fp16, binary, uint8, ternary, int4 for memory optimization.', external: true }
          ]
        },
        {
          title: 'ML Tools',
          description: 'Complete ML pipeline tools for training, prediction, evaluation, and AutoML.',
          items: [
            { title: 'ML Training', href: 'https://github.com/neurondb-ai/neurondb', description: 'Train all 52 ML algorithms (classification, regression, clustering, etc.) via MCP.', external: true },
            { title: 'Prediction', href: 'https://github.com/neurondb-ai/neurondb', description: 'Make predictions with trained models and batch inference.', external: true },
            { title: 'Model Management', href: 'https://github.com/neurondb-ai/neurondb', description: 'Model catalog, versioning, A/B testing, and deployment workflows.', external: true },
            { title: 'AutoML', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automated model selection and hyperparameter tuning.', external: true }
          ]
        },
        {
          title: 'RAG & Reranking Tools',
          description: 'RAG pipeline tools and multiple reranking strategies for retrieval and generation.',
          items: [
            { title: 'RAG Pipeline', href: 'https://github.com/neurondb-ai/neurondb', description: 'Complete RAG pipeline with document processing, chunking, and retrieval.', external: true },
            { title: 'Cross-encoder Reranking', href: 'https://github.com/neurondb-ai/neurondb', description: 'Neural reranking with cross-encoder models for improved relevance.', external: true },
            { title: 'LLM Reranking', href: 'https://github.com/neurondb-ai/neurondb', description: 'LLM-powered reranking with custom prompts and scoring.', external: true },
            { title: 'Ensemble Reranking', href: 'https://github.com/neurondb-ai/neurondb', description: 'Combine multiple reranking strategies for optimal results.', external: true }
          ]
        },
        {
          title: 'Dataset Loading',
          description: 'Load datasets from HuggingFace, URLs, GitHub, S3, and local files with auto-embedding.',
          items: [
            { title: 'HuggingFace Datasets', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/data_loading', description: 'Load datasets from HuggingFace Hub with automatic schema detection.', external: true },
            { title: 'URL Loading', href: 'https://github.com/neurondb-ai/neurondb', description: 'Load CSV, JSON, and Parquet files from URLs with optimized bulk loading.', external: true },
            { title: 'S3 & GitHub', href: 'https://github.com/neurondb-ai/neurondb', description: 'Load datasets from S3 buckets and GitHub repositories.', external: true },
            { title: 'Auto-Embedding', href: 'https://github.com/neurondb-ai/neurondb', description: 'Automatic embedding generation for text columns during dataset loading.', external: true }
          ]
        },
        {
          title: 'PostgreSQL Tools',
          description: '27 comprehensive PostgreSQL administration tools for complete database management.',
          items: [
            { title: 'Database Stats', href: 'https://github.com/neurondb-ai/neurondb', description: 'Get database statistics, size, connection info, and performance metrics.', external: true },
            { title: 'Extension Management', href: 'https://github.com/neurondb-ai/neurondb', description: 'Manage PostgreSQL extensions, versions, and configurations.', external: true },
            { title: 'Query Analysis', href: 'https://github.com/neurondb-ai/neurondb', description: 'Analyze query performance, execution plans, and resource usage.', external: true },
            { title: 'System Monitoring', href: 'https://github.com/neurondb-ai/neurondb', description: 'Monitor locks, replication status, and system resource utilization.', external: true }
          ]
        },
        {
          title: 'Resources & Middleware',
          description: 'Resource management, middleware, authentication, and enterprise features.',
          items: [
            { title: 'Resources', href: 'https://github.com/neurondb-ai/neurondb', description: 'Schema, model catalog, index configs, and system stats as MCP resources.', external: true },
            { title: 'Middleware', href: 'https://github.com/neurondb-ai/neurondb', description: 'Validation, logging, timeout, error handling, and authentication middleware.', external: true },
            { title: 'Enterprise Features', href: 'https://github.com/neurondb-ai/neurondb', description: 'Prometheus metrics, webhooks, caching, circuit breaker, and health checks.', external: true },
            { title: 'Authentication', href: 'https://github.com/neurondb-ai/neurondb', description: 'JWT, API keys, OAuth2 with rate limiting and access control.', external: true }
          ]
        },
        {
          title: 'Examples & Tutorials',
          description: 'Working examples and tutorials for using NeuronMCP with Claude Desktop and other clients.',
          items: [
            { title: 'MCP Integration', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration', description: 'Claude Desktop configuration and MCP server integration examples.', external: true },
            { title: 'Dataset Loading', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/data_loading', description: 'Load datasets from HuggingFace Hub with auto-embedding and index creation.', external: true },
            { title: 'Vector Search Example', href: 'https://github.com/neurondb-ai/neurondb', description: 'Vector search and similarity queries via MCP tools.', external: true },
            { title: 'ML Training Example', href: 'https://github.com/neurondb-ai/neurondb', description: 'Train ML models and make predictions using MCP tools.', external: true }
          ]
        }
      ]}
      quickLinks={[
        {
          title: 'Get Started',
          description: 'Install NeuronMCP and connect Claude Desktop to start using MCP tools.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: BookOpen,
          external: true
        },
        {
          title: 'MCP Integration Example',
          description: 'Complete example showing Claude Desktop configuration and MCP server setup.',
          href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration',
          icon: ExternalLink,
          external: true
        },
        {
          title: 'GitHub Repository',
          description: 'Source code, issues, and contribution guide for NeuronMCP.',
          href: 'https://github.com/neurondb-ai/neurondb',
          icon: ExternalLink,
          external: true
        }
      ]}
      theme={{
        featureIconClass: theme.featureIconClass,
        linkHoverClass: theme.linkHover,
        quickLinkCardClass: theme.quickLinkCardClass,
        quickLinkIconClass: theme.quickLinkIconClass,
        quickLinkHoverLabelClass: theme.quickLinkHoverLabelClass,
        docCardClass: theme.docCardClass,
        primaryButtonClass: theme.buttonPrimary,
        secondaryButtonClass: theme.buttonSecondary,
      }}
    />
  )
}
