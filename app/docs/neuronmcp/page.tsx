import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'NeuronMCP Documentation | Model Context Protocol Server for NeuronDB',
  description: 'NeuronMCP is a Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients like Claude Desktop to access NeuronDB vector operations, ML training, RAG pipeline, and PostgreSQL administration.',
  keywords: [
    'NeuronMCP',
    'MCP server postgresql',
    'Model Context Protocol',
    'Claude Desktop MCP',
    'MCP tools postgresql',
    'MCP protocol server',
    'JSON-RPC MCP',
    'MCP resources',
    'MCP integration',
    'anthropic MCP',
    'MCP client',
    'MCP server setup',
    'MCP tools catalog',
    '100 MCP tools',
    'MCP vector operations',
    'MCP ML tools'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp',
  },
  openGraph: {
    title: 'NeuronMCP Documentation | MCP Server for NeuronDB',
    description: 'Model Context Protocol server with 100+ tools for vector operations, ML, RAG, and PostgreSQL administration.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronmcp',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'key-features', title: 'Key Features' },
  { id: 'mcp-protocol', title: 'MCP Protocol' },
  { id: 'tool-catalog', title: 'Tool Catalog' },
  { id: 'getting-started', title: 'Getting Started' },
  { id: 'documentation', title: 'Documentation' },
]

const prevLink: NavLink | undefined = undefined
const nextLink: NavLink = {
  href: '/docs/neuronmcp/getting-started',
  label: 'Getting Started',
}

export default function NeuronMCPDocsPage() {
  return (
    <PostgresDocsLayout
      title="NeuronMCP Documentation"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="introduction">
        <h2>Introduction</h2>
        
        <p>
          NeuronMCP is a Model Context Protocol (MCP) server providing comprehensive tools and resources for MCP-compatible clients to interact with NeuronDB. It implements the full MCP protocol with JSON-RPC 2.0, supporting stdio, HTTP, and SSE transport modes.
        </p>

        <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold', color: '#fbbf24' }}>🎯 What You Can Build</h3>
          <ul style={{ marginBottom: 0 }}>
            <li>Connect Claude Desktop to NeuronDB for vector search, ML training, and RAG pipelines</li>
            <li>Use 100+ MCP tools for complete database and AI operations</li>
            <li>Load datasets from HuggingFace, URLs, GitHub, S3 with auto-embedding</li>
            <li>Manage PostgreSQL databases through MCP protocol</li>
            <li>Build MCP-compatible applications with NeuronDB backend</li>
          </ul>
        </div>
      </section>

      <section id="key-features">
        <h2>Key Features</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🔌 MCP Protocol</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport for MCP-compatible clients.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🛠️ 100+ Tools</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              27 PostgreSQL administration tools + 70+ NeuronDB tools including vector operations, ML pipeline, RAG, reranking, and dataset loading.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🔍 Vector Operations (50+ Tools)</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Vector search with 7+ distance metrics, quantization, embeddings, HNSW/IVF indexing, hybrid search, and multi-vector search.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🤖 Complete ML Pipeline</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              All 52 ML algorithms, training, prediction, evaluation, AutoML, ONNX support, time series analysis, and analytics tools.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>📊 Dataset Loading</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Load datasets from HuggingFace, URLs, GitHub, S3, and local files with automatic schema detection, auto-embedding, and index creation.
            </p>
          </div>

          <div style={{ backgroundColor: '#1e293b', border: '1px solid #334155', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ marginTop: 0, marginBottom: '0.75rem', color: '#fbbf24' }}>🏢 Enterprise Features</h3>
            <p style={{ marginBottom: 0, fontSize: '0.95rem' }}>
              Middleware, authentication, caching, metrics, webhooks, circuit breaker, retry mechanisms, and health checks.
            </p>
          </div>
        </div>
      </section>

      <section id="mcp-protocol">
        <h2>MCP Protocol Implementation</h2>

        <h3>JSON-RPC 2.0</h3>
        <ul>
          <li><strong>Full Protocol Support</strong> - Complete JSON-RPC 2.0 implementation</li>
          <li><strong>Transport Modes</strong> - stdio, HTTP, and SSE transport options</li>
          <li><strong>Batch Operations</strong> - Transactional batch tool calls for efficient bulk operations</li>
          <li><strong>Progress Tracking</strong> - Long-running operation progress with progress/get</li>
          <li><strong>Tool Discovery</strong> - Search and filter tools with categorization and metadata</li>
        </ul>

        <h3>Protocol Features</h3>
        <ul>
          <li><strong>Prompts Protocol</strong> - Full prompts/list and prompts/get with template engine support</li>
          <li><strong>Sampling/Completions</strong> - sampling/createMessage with streaming support for LLM interactions</li>
          <li><strong>Resources</strong> - Schema, models, indexes, config, workers, and stats as MCP resources</li>
          <li><strong>Real-time Subscriptions</strong> - Subscribe to resource updates</li>
        </ul>
      </section>

      <section id="tool-catalog">
        <h2>Tool Catalog (100+ Tools)</h2>

        <h3>Vector Operations (50+ Tools)</h3>
        <ul>
          <li><strong>Vector Search (8 tools)</strong> - Distance metrics: L2, cosine, inner product, L1, Hamming, Chebyshev, Minkowski</li>
          <li><strong>Embedding Generation (7 tools)</strong> - Single, batch, image, multimodal embeddings with 50+ pre-configured models</li>
          <li><strong>Index Management (6 tools)</strong> - Create, tune, and manage HNSW and IVF indexes</li>
          <li><strong>Quantization (2 tools)</strong> - Quantize vectors (int8, fp16, binary, uint8, ternary, int4)</li>
          <li><strong>Vector Operations (3 tools)</strong> - Vector arithmetic, distance, and similarity calculations</li>
          <li><strong>Advanced Features</strong> - Multi-vector search, hybrid search, vector graph operations, vecmap operations</li>
        </ul>

        <h3>ML Tools & Pipeline</h3>
        <ul>
          <li><strong>Training & Prediction (6 tools)</strong> - Train models with 52+ algorithms, single/batch predictions, model evaluation</li>
          <li><strong>Model Management</strong> - List models, get model info, delete models, export models</li>
          <li><strong>AutoML</strong> - Automated model selection, hyperparameter tuning, and training</li>
          <li><strong>ONNX Support (4 tools)</strong> - Import, export, info, and predict with ONNX models</li>
          <li><strong>Time Series</strong> - ARIMA, forecasting, seasonal decomposition, anomaly detection</li>
          <li><strong>Analytics</strong> - Data analysis, clustering, outlier detection, drift detection, topic discovery</li>
        </ul>

        <h3>RAG & Reranking Tools</h3>
        <ul>
          <li><strong>RAG Pipeline</strong> - Document processing, chunking, retrieval, and response generation</li>
          <li><strong>Reranking Methods</strong> - Cross-encoder, LLM, Cohere, ColBERT, Learning-to-Rank (LTR), ensemble reranking</li>
          <li><strong>Hybrid Retrieval</strong> - Combine vector search with keyword search and filters</li>
        </ul>

        <h3>PostgreSQL Administration (27 Tools)</h3>
        <ul>
          <li><strong>Server Information</strong> - Version, stats, databases, connections, locks, replication, settings, extensions</li>
          <li><strong>Database Object Management</strong> - Tables, indexes, schemas, views, sequences, functions, triggers, constraints</li>
          <li><strong>User and Role Management</strong> - Create, alter, drop users/roles, grant/revoke permissions</li>
          <li><strong>Performance & Statistics</strong> - Table stats, index stats, active queries, wait events</li>
          <li><strong>Size and Storage</strong> - Table size, index size, bloat analysis, vacuum stats</li>
          <li><strong>Administration</strong> - Explain, vacuum, analyze, reindex, transactions, query management</li>
          <li><strong>Backup & Recovery</strong> - Backup/restore database, backup table, list backups, verify backup</li>
        </ul>

        <h3>Dataset Loading</h3>
        <ul>
          <li><strong>HuggingFace Datasets</strong> - Load datasets from HuggingFace Hub with automatic schema detection</li>
          <li><strong>URL Loading</strong> - Load CSV, JSON, and Parquet files from URLs with optimized bulk loading</li>
          <li><strong>S3 & GitHub</strong> - Load datasets from S3 buckets and GitHub repositories</li>
          <li><strong>Auto-Embedding</strong> - Automatic embedding generation for text columns during dataset loading</li>
        </ul>
      </section>

      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Install and configure NeuronMCP server, connect Claude Desktop, and start using MCP tools.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
          <Link
            href="/docs/neuronmcp/getting-started"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              color: '#fbbf24',
              display: 'block',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>🚀 Getting Started</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Installation guide and quick start for NeuronMCP
            </p>
          </Link>

          <Link
            href="/docs/neuronmcp/getting-started/claude-desktop"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              color: '#fbbf24',
              display: 'block',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>🖥️ Claude Desktop Setup</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Configure Claude Desktop to connect to NeuronMCP
            </p>
          </Link>

          <Link
            href="/docs/neuronmcp/tools"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              color: '#fbbf24',
              display: 'block',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>📋 Tool Catalog</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Browse all 100+ available MCP tools
            </p>
          </Link>

          <Link
            href="/docs/neuronmcp/setup"
            style={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              color: '#fbbf24',
              display: 'block',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#fbbf24'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155'
              e.currentTarget.style.backgroundColor = '#1e293b'
            }}
          >
            <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#fbbf24' }}>⚙️ Setup Guide</h3>
            <p style={{ marginBottom: 0, fontSize: '0.9rem', color: '#cbd5e1' }}>
              Complete configuration schema and setup instructions
            </p>
          </Link>
        </div>
      </section>

      <section id="documentation">
        <h2>Documentation Library</h2>

        <h3>MCP Protocol</h3>
        <ul>
          <li><strong>Protocol Overview</strong> - Understanding the Model Context Protocol and JSON-RPC 2.0 implementation</li>
          <li><strong>stdio Transport</strong> - Use stdio transport for Claude Desktop and other stdio-based clients</li>
          <li><strong>HTTP Transport</strong> - HTTP transport for web-based clients and remote connections</li>
          <li><strong>SSE Transport</strong> - Server-Sent Events transport for streaming responses</li>
        </ul>

        <h3>Vector Tools</h3>
        <ul>
          <li><strong>Vector Search</strong> - Vector search with multiple distance metrics (L2, Cosine, IP, Manhattan, Hamming, Jaccard)</li>
          <li><strong>Embeddings</strong> - Generate text, image, and multimodal embeddings with batch processing</li>
          <li><strong>Indexing</strong> - Create and manage HNSW and IVF indexes for vector search</li>
          <li><strong>Quantization</strong> - Quantization tools: int8, fp16, binary, uint8, ternary, int4 for memory optimization</li>
        </ul>

        <h3>ML Tools</h3>
        <ul>
          <li><strong>ML Training</strong> - Train all 52 ML algorithms (classification, regression, clustering, etc.) via MCP</li>
          <li><strong>Prediction</strong> - Make predictions with trained models and batch inference</li>
          <li><strong>Model Management</strong> - Model catalog, versioning, A/B testing, and deployment workflows</li>
          <li><strong>AutoML</strong> - Automated model selection and hyperparameter tuning</li>
        </ul>

        <h3>RAG & Reranking Tools</h3>
        <ul>
          <li><strong>RAG Pipeline</strong> - Complete RAG pipeline with document processing, chunking, and retrieval</li>
          <li><strong>Cross-encoder Reranking</strong> - Neural reranking with cross-encoder models for improved relevance</li>
          <li><strong>LLM Reranking</strong> - LLM-powered reranking with custom prompts and scoring</li>
          <li><strong>Ensemble Reranking</strong> - Combine multiple reranking strategies for optimal results</li>
        </ul>

        <h3>Dataset Loading</h3>
        <ul>
          <li><strong>HuggingFace Datasets</strong> - Load datasets from HuggingFace Hub with automatic schema detection</li>
          <li><strong>URL Loading</strong> - Load CSV, JSON, and Parquet files from URLs with optimized bulk loading</li>
          <li><strong>S3 & GitHub</strong> - Load datasets from S3 buckets and GitHub repositories</li>
          <li><strong>Auto-Embedding</strong> - Automatic embedding generation for text columns during dataset loading</li>
        </ul>

        <h3>PostgreSQL Tools</h3>
        <ul>
          <li><strong>Database Stats</strong> - Get database statistics, size, connection info, and performance metrics</li>
          <li><strong>Extension Management</strong> - Manage PostgreSQL extensions, versions, and configurations</li>
          <li><strong>Query Analysis</strong> - Analyze query performance, execution plans, and resource usage</li>
          <li><strong>System Monitoring</strong> - Monitor locks, replication status, and system resource utilization</li>
        </ul>

        <h3>Resources & Middleware</h3>
        <ul>
          <li><strong>Resources</strong> - Schema, model catalog, index configs, and system stats as MCP resources</li>
          <li><strong>Middleware</strong> - Validation, logging, timeout, error handling, and authentication middleware</li>
          <li><strong>Enterprise Features</strong> - Prometheus metrics, webhooks, caching, circuit breaker, and health checks</li>
          <li><strong>Authentication</strong> - JWT, API keys, OAuth2 with rate limiting and access control</li>
        </ul>

        <h3>Examples & Tutorials</h3>
        <ul>
          <li><a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/mcp-integration" target="_blank" rel="noopener noreferrer">MCP Integration</a> - Claude Desktop configuration and MCP server integration examples</li>
          <li><a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/data_loading" target="_blank" rel="noopener noreferrer">Dataset Loading</a> - Load datasets from HuggingFace Hub with auto-embedding and index creation</li>
          <li><a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer">Vector Search Example</a> - Vector search and similarity queries via MCP tools</li>
          <li><a href="https://github.com/neurondb-ai/neurondb" target="_blank" rel="noopener noreferrer">ML Training Example</a> - Train ML models and make predictions using MCP tools</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
