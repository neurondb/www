import { Metadata } from 'next'
import { BookOpen, Download, ExternalLink, Database, Zap, Search } from 'lucide-react'
import ProductDocsLanding from '@/components/ProductDocsLanding'
import { NeuronDBIcon } from '@/components/ProductIcons'
import { generateDocsMetadata } from '@/config/products'
import { getProductTheme } from '@/config/theme'

export const metadata: Metadata = generateDocsMetadata('neurondb')

export default function NeuronDBDocsPage() {
  const theme = getProductTheme('neurondb')
  
  return (
    <ProductDocsLanding
      hero={{
        badgeLabel: '',
        badgeIcon: null,
        badgeGradient: theme.badgeGradient,
        title: 'NeuronDB Documentation',
        description:
          'GPU-accelerated vector search, model inference, hybrid retrieval, and RAG orchestration in PostgreSQL. PostgreSQL AI extension. Deploy NeuronDB, operate background workers, and embed ML pipelines in SQL. Documentation reflects NeuronDB 2.0.0 (main branch). For stable 1.0.0 release, use REL1_STABLE branch.',
        ctas: [
          {
            label: 'Start',
            href: '/docs/neurondb/neurondb/getting-started',
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
          icon: Database,
          title: 'Vector Search',
          description: 'HNSW, IVF, product quantization, and custom distance metrics for billion-scale similarity search.',
          href: '/docs/neurondb/neurondb/features/vector-types'
        },
        {
          icon: NeuronDBIcon,
          title: 'ML Inference',
          description: 'ONNX runtime integration, GPU offload, and batch execution for deep learning workloads in SQL.',
          href: '/docs/neurondb/neurondb/ml/inference'
        },
        {
          icon: Search,
          title: 'Hybrid Retrieval',
          description: 'Combine keyword, metadata, and vector signals for multimodal results.',
          href: '/docs/neurondb/neurondb/hybrid/overview'
        },
        {
          icon: Zap,
          title: 'RAG Pipelines',
          description: 'In-database retrieval augmented generation with prompt templates, metadata policies, and observability.',
          href: '/docs/neurondb/neurondb/rag'
        }
      ]}
      docSections={[
        {
          title: 'Getting Started',
          description: 'Docker or install the extension on PostgreSQL 16 to 18. Verify GPU support and apply baseline configuration.',
          items: [
            { title: 'Docker', href: '/docs/neurondb/neurondb/getting-started/docker', description: 'Run the full ecosystem (DB + Agent + MCP + Desktop) with Compose profiles.' },
            { title: 'Installation', href: '/docs/neurondb/neurondb/installation', description: 'Build from source or install packages.' },
            { title: 'Quick Start', href: '/docs/neurondb/neurondb/getting-started/quickstart', description: 'Load sample data and run first vector searches.' },
            { title: 'Configuration', href: '/docs/neurondb/neurondb/configuration', description: 'GUC parameters for CPU/GPU execution paths.' }
          ]
        },
        {
          title: 'Core Features',
          description: 'How NeuronDB models vectors, maintains indexes, and tunes recall versus latency.',
          items: [
            { title: 'Vector Types', href: '/docs/neurondb/neurondb/features/vector-types', description: '5 vector types: vector, vectorp, vecmap, vgraph, rtext with operations.' },
            { title: 'Distance Metrics', href: '/docs/neurondb/neurondb/features/distance-metrics', description: 'Cosine, L2, IP, dot, and hybrid scoring.' },
            { title: 'Indexing', href: '/docs/neurondb/neurondb/indexing', description: 'HNSW, IVF, PQ, and adaptive index selection.' },
            { title: 'Quantization', href: '/docs/neurondb/neurondb/features/quantization', description: 'Reduce memory footprint with scalar and vector quantization.' }
          ]
        },
        {
          title: 'ML & Embeddings',
          description: 'Generate, store, and serve embeddings alongside model lifecycle management.',
          items: [
            { title: 'Embeddings', href: '/docs/neurondb/neurondb/ml/embeddings', description: 'Transform text, audio, and images into dense vectors.' },
            { title: 'Inference', href: '/docs/neurondb/neurondb/ml/inference', description: 'Deploy ONNX models with GPU batching and caching.' },
            { title: 'Model Management', href: '/docs/neurondb/neurondb/ml/model-management', description: 'Version control, approvals, and rollback workflows.' }
          ]
        },
        {
          title: 'Hybrid Search & Reranking',
          description: 'Combine text search, BM25, and neural rerankers for production retrieval pipelines.',
          items: [
            { title: 'Hybrid Overview', href: '/docs/neurondb/neurondb/hybrid/overview', description: 'Architectures for multi-signal retrieval.' },
            { title: 'Reranking', href: '/docs/neurondb/neurondb/reranking/overview', description: 'Cross-encoder and LLM reranking playbooks.' },
            { title: 'RAG Workflows', href: '/docs/neurondb/neurondb/rag', description: 'Orchestrate retrieval augmented generation end to end.' }
          ]
        },
        {
          title: 'Background Workers',
          description: 'Operational guidance for queue execution, auto-tuning, and index maintenance workers.',
          items: [
            { title: 'Worker Overview', href: '/docs/neurondb/neurondb/background-workers', description: 'Understand worker architecture and lifecycles.' },
            { title: 'Queue Worker (neuranq)', href: '/docs/neurondb/neurondb/background-workers/neuranq', description: 'Batch ingestion and asynchronous scoring.' },
            { title: 'Auto-Tuner (neuranmon)', href: '/docs/neurondb/neurondb/background-workers/neuranmon', description: 'Automated index health and GPU utilization tuning.' },
            { title: 'Index Maintenance (neurandefrag)', href: '/docs/neurondb/neurondb/background-workers/neurandefrag', description: 'Defragment and rebalance vector indexes online.' },
            { title: 'LLM Processor (neuranllm)', href: '/docs/neurondb/neurondb/background-workers/neuranllm', description: 'Process LLM jobs asynchronously with crash recovery and job pruning.' }
          ]
        },
        {
          title: 'Components',
          description: 'NeuronDB ecosystem components: NeuronAgent for agent runtime, NeuronMCP for MCP protocol support, and NeuronDesktop for unified web interface.',
          items: [
            { title: 'NeuronAgent', href: '/docs/neurondb/neuronagent', description: 'AI agent runtime with REST API, WebSocket, long-term memory, and tool execution.' },
            { title: 'NeuronMCP', href: '/docs/neurondb/neuronmcp', description: 'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) for MCP-compatible clients like Claude Desktop.' },
            { title: 'NeuronDesktop', href: '/docs/neurondb/neurondesktop', description: 'Unified web interface for managing all NeuronDB ecosystem components with real-time monitoring.' }
          ]
        },
        {
          title: 'Deployment & Operations',
          description: 'Cloud-native deployment options, observability stack, and operational scripts for production-ready NeuronDB deployments.',
          items: [
            { title: 'Kubernetes Deployment', href: '/docs/neurondb/neurondb/deployment/kubernetes', description: 'Complete cloud-native deployment with Helm charts, HPA, PDB, and persistent storage.' },
            { title: 'Observability Stack', href: '/docs/neurondb/neurondb/deployment/observability', description: 'Prometheus metrics, Grafana dashboards, and Jaeger distributed tracing for complete monitoring.' },
            { title: 'Operational Scripts', href: '/docs/neurondb/neurondb/deployment/scripts', description: 'Professional automation scripts for Docker, database, setup, health checks, and monitoring.' }
          ]
        },
        {
          title: 'Examples & Tutorials',
          description: 'Working examples demonstrating NeuronDB capabilities: semantic search, RAG chatbots, agent tools, MCP integration, dataset loading, and LLM training. All examples link to the main branch (v2.0.0). For REL1_STABLE (v1.0.0) examples, check the repository branch.',
          items: [
            { title: 'Semantic Search', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/semantic-search-docs', description: 'Document ingestion, embedding generation, and semantic search over document collections. (main branch, v2.0.0)', external: true },
            { title: 'RAG Chatbot', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/rag-chatbot-pdfs', description: 'Full RAG pipeline over PDF documents with LLM integration and interactive chat interface. (main branch, v2.0.0)', external: true },
            { title: 'Agent Tools', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools', description: 'NeuronAgent with multiple tools (SQL, HTTP, custom) for complex agent workflows. (main branch, v2.0.0)', external: true },
            { title: 'MCP Integration', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration', description: 'Claude Desktop configuration and MCP server integration examples. (main branch, v2.0.0)', external: true },
            { title: 'Dataset Loading', href: 'https://github.com/neurondb-ai/neurondb/tree/main/examples/data_loading', description: 'Load datasets from HuggingFace Hub with auto-embedding and index creation. (main branch, v2.0.0)', external: true }
          ]
        }
      ]}
      quickLinks={[
        {
          title: 'Docker Quick Start',
          description: 'Ecosystem (DB + Agent + MCP + Desktop) running in 5 minutes with Docker Compose.',
          href: '/docs/neurondb/neurondb/getting-started/docker',
          icon: BookOpen
        },
        {
          title: 'Getting Started Guide',
          description: 'Bootstrap NeuronDB on PostgreSQL 16 to 18 with CPU and GPU execution paths.',
          href: '/docs/neurondb/neurondb/getting-started',
          icon: BookOpen
        },
        {
          title: 'Installation Reference',
          description: 'Build from source, package installations, upgrades, and validation scripts.',
          href: '/docs/neurondb/neurondb/installation',
          icon: Download
        },
        {
          title: 'GitHub Repository',
          description: 'Source code, issues, and contribution guide for NeuronDB.',
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
