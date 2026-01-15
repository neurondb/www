import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronMCP Features | Complete Feature Reference',
  description: 'Complete feature reference for NeuronMCP: MCP protocol implementation, 100+ tools, vector operations, ML pipeline, RAG, dataset loading, and PostgreSQL administration.',
  keywords: [
    'NeuronMCP features',
    'MCP protocol features',
    'MCP tools',
    'vector operations MCP',
    'ML tools MCP',
    'RAG MCP',
    'dataset loading MCP',
    'PostgreSQL tools MCP'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp/features',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'mcp-protocol', title: 'MCP Protocol' },
  { id: 'vector-tools', title: 'Vector Operations (50+ Tools)' },
  { id: 'ml-tools', title: 'ML Tools & Pipeline' },
  { id: 'rag-tools', title: 'RAG & Reranking Tools' },
  { id: 'postgresql-tools', title: 'PostgreSQL Administration (27 Tools)' },
  { id: 'dataset-loading', title: 'Dataset Loading' },
  { id: 'enterprise', title: 'Enterprise Features' },
]

const prevLink: NavLink = {
  href: '/docs/neuronmcp',
  label: 'NeuronMCP Documentation',
}
const nextLink: NavLink = {
  href: '/docs/neuronmcp/setup',
  label: 'Setup Guide',
}

export default function NeuronMCPFeatures() {
  return (
    <PostgresDocsLayout
      title="NeuronMCP Features"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="mcp-protocol">
        <h2>MCP Protocol Implementation</h2>
        <ul>
          <li><strong>JSON-RPC 2.0</strong> - Full protocol implementation with stdio, HTTP, and SSE transport modes</li>
          <li><strong>Batch Operations</strong> - Transactional batch tool calls for efficient bulk operations</li>
          <li><strong>Progress Tracking</strong> - Long-running operation progress with progress/get for monitoring</li>
          <li><strong>Tool Discovery</strong> - Search and filter tools with categorization and metadata</li>
          <li><strong>Prompts Protocol</strong> - Full prompts/list and prompts/get with template engine support</li>
          <li><strong>Sampling/Completions</strong> - sampling/createMessage with streaming support for LLM interactions</li>
        </ul>
      </section>

      <section id="vector-tools">
        <h2>Vector Operations (50+ Tools)</h2>
        <h3>Vector Search (8 tools)</h3>
        <ul>
          <li>Distance metrics: L2, cosine, inner product, L1, Hamming, Chebyshev, Minkowski</li>
          <li>Index support: HNSW and IVF indexes with optimized search performance</li>
          <li>Unified vector similarity search with configurable metrics</li>
        </ul>

        <h3>Embedding Generation (7 tools)</h3>
        <ul>
          <li>Single embedding generation with 50+ pre-configured models</li>
          <li>Batch embedding generation for efficient processing</li>
          <li>Image embedding with vision models</li>
          <li>Multimodal embedding for text-image pairs</li>
          <li>Embedding caching for performance optimization</li>
        </ul>

        <h3>Index Management (6 tools)</h3>
        <ul>
          <li>Create, tune, and manage HNSW indexes</li>
          <li>Create, tune, and manage IVF indexes</li>
          <li>Monitor index status and statistics</li>
          <li>Remove indexes with cleanup</li>
        </ul>

        <h3>Quantization (2 tools)</h3>
        <ul>
          <li>Quantize vectors (int8, fp16, binary, uint8, ternary, int4)</li>
          <li>Analyze quantization impact on search quality</li>
        </ul>

        <h3>Advanced Vector Features</h3>
        <ul>
          <li>Multi-vector search across multiple vector columns with fusion strategies</li>
          <li>Hybrid search combining vector search with full-text search and SQL filters</li>
          <li>Vector graph operations (BFS, DFS, PageRank, community detection)</li>
          <li>Vecmap operations for sparse vector operations</li>
        </ul>
      </section>

      <section id="ml-tools">
        <h2>ML Tools & Pipeline</h2>
        <h3>Training & Prediction (6 tools)</h3>
        <ul>
          <li>Train models with 52+ algorithms (classification, regression, clustering, dimensionality reduction, gradient boosting, random forest, recommendation systems)</li>
          <li>Single prediction with model versioning</li>
          <li>Batch prediction for efficient processing</li>
          <li>Comprehensive model evaluation with metrics (accuracy, precision, recall, F1, ROC-AUC, etc.)</li>
          <li>List all trained models with metadata</li>
          <li>Get detailed model information and statistics</li>
          <li>Remove models with cleanup</li>
          <li>Export models for deployment</li>
        </ul>

        <h3>Advanced ML Features</h3>
        <ul>
          <li><strong>AutoML</strong> - Automated model selection, hyperparameter tuning, and training</li>
          <li><strong>ONNX Support (4 tools)</strong> - Import, export, info, and predict with ONNX models</li>
          <li><strong>Time Series</strong> - ARIMA, forecasting, seasonal decomposition, and anomaly detection</li>
          <li><strong>Analytics</strong> - Data analysis, clustering, outlier detection, drift detection, topic discovery</li>
          <li><strong>Quality Metrics</strong> - Comprehensive quality metrics for model performance</li>
        </ul>
      </section>

      <section id="rag-tools">
        <h2>RAG & Reranking Tools</h2>
        <h3>RAG Pipeline</h3>
        <ul>
          <li>Document processing, chunking, and retrieval</li>
          <li>Semantic search with reranking for relevant context</li>
          <li>Response generation with LLM integration and context injection</li>
        </ul>

        <h3>Reranking Methods</h3>
        <ul>
          <li><strong>Cross-encoder Reranking</strong> - Neural reranking with cross-encoder models</li>
          <li><strong>LLM Reranking</strong> - LLM-powered reranking with custom prompts and scoring</li>
          <li><strong>Cohere Reranking</strong> - Cohere reranking API integration</li>
          <li><strong>ColBERT Reranking</strong> - ColBERT reranking method</li>
          <li><strong>Learning-to-Rank (LTR)</strong> - LTR reranking with feature engineering</li>
          <li><strong>Ensemble Reranking</strong> - Combine multiple reranking strategies for optimal results</li>
        </ul>
      </section>

      <section id="postgresql-tools">
        <h2>PostgreSQL Administration (27 Tools)</h2>
        <h3>Server Information (8 tools)</h3>
        <ul>
          <li>Version, stats, databases, connections, locks, replication, settings, extensions</li>
        </ul>

        <h3>Database Object Management (8 tools)</h3>
        <ul>
          <li>Tables, indexes, schemas, views, sequences, functions, triggers, constraints</li>
        </ul>

        <h3>User and Role Management (9 tools)</h3>
        <ul>
          <li>Users (create, alter, drop), roles (create, alter, drop), permissions (grant, revoke, grant role, revoke role)</li>
        </ul>

        <h3>Performance and Statistics (4 tools)</h3>
        <ul>
          <li>Table stats, index stats, active queries, wait events</li>
        </ul>

        <h3>Size and Storage (4 tools)</h3>
        <ul>
          <li>Table size, index size, bloat analysis, vacuum stats</li>
        </ul>

        <h3>Administration (16 tools)</h3>
        <ul>
          <li>Explain, explain analyze, vacuum, analyze, reindex, transactions, terminate query, kill query, set config, reload config, slow queries, cache hit ratio, buffer stats, partitions, partition stats, FDW servers, FDW tables, logical replication slots</li>
        </ul>
      </section>

      <section id="dataset-loading">
        <h2>Dataset Loading</h2>
        <ul>
          <li><strong>HuggingFace Datasets</strong> - Load datasets from HuggingFace Hub with automatic schema detection</li>
          <li><strong>URL Loading</strong> - Load CSV, JSON, and Parquet files from URLs with optimized bulk loading</li>
          <li><strong>S3 & GitHub</strong> - Load datasets from S3 buckets and GitHub repositories</li>
          <li><strong>Auto-Embedding</strong> - Automatic embedding generation for text columns during dataset loading</li>
        </ul>
      </section>

      <section id="enterprise">
        <h2>Enterprise Features</h2>
        <ul>
          <li><strong>Middleware</strong> - Validation, logging, timeout, error handling, and authentication middleware</li>
          <li><strong>Authentication</strong> - JWT, API keys, OAuth2 with rate limiting and access control</li>
          <li><strong>Prometheus Metrics</strong> - Comprehensive metrics export</li>
          <li><strong>Webhooks</strong> - Event webhooks with retry logic and delivery tracking</li>
          <li><strong>Caching</strong> - Response caching for improved performance</li>
          <li><strong>Circuit Breaker</strong> - Circuit breaker pattern for resilience</li>
          <li><strong>Retry Mechanisms</strong> - Automatic retry with exponential backoff</li>
          <li><strong>Health Checks</strong> - Health check endpoints for monitoring</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
