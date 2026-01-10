import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import ProductDashboardDemo from '@/components/product/ProductDashboardDemo';
import NeuronMCPArchitectureDiagram from '@/components/NeuronMCPArchitectureDiagram';
import { generateDocsMetadata } from '@/config/products';

export const metadata = generateDocsMetadata('neurondb', 'NeuronMCP: Model Context Protocol Server');

const neuronmcpDashboardTabs = [
  {
    id: 'tools',
    label: 'Vector Tools',
    iconName: 'Search',
    heading: '100+ MCP tools',
    description: 'Vector search, embeddings, and indexing tools',
    codeLabel: 'JSON-RPC',
    code: `// Call vector search tool\n{\n  "jsonrpc": "2.0",\n  "id": 1,\n  "method": "tools/call",\n  "params": {\n    "name": "vector_search",\n    "arguments": {\n      "table": "embeddings",\n      "query_vector": [0.1, 0.2, ...],\n      "top_k": 10,\n      "distance": "cosine"\n    }\n  }\n}`,
    footerHref: '/neuronmcp',
    footerLabel: 'MCP Tools Docs',
    results: [
      { id: 42, sim: 0.9523, text: 'Vector search result: semantic similarity matching in high-dimensional spaces…' },
      { id: 38, sim: 0.9234, text: 'HNSW index result: fast approximate nearest neighbor search…' },
      { id: 35, sim: 0.8945, text: 'Embedding generation result: text converted to numerical vectors…' },
      { id: 31, sim: 0.8656, text: 'Index creation result: HNSW index built successfully…' },
      { id: 28, sim: 0.8367, text: 'Similarity computation result: cosine distance calculated…' },
    ],
  },
  {
    id: 'ml',
    label: 'ML Tools',
    iconName: 'Cpu',
    heading: 'ML training & inference',
    description: 'Train models and make predictions via MCP',
    codeLabel: 'JSON-RPC',
    code: `// Train ML model\n{\n  "jsonrpc": "2.0",\n  "method": "tools/call",\n  "params": {\n    "name": "ml_train",\n    "arguments": {\n      "model_name": "sentiment",\n      "algorithm": "random_forest",\n      "training_query": "SELECT * FROM train"\n    }\n  }\n}`,
    footerHref: '/neuronmcp',
    footerLabel: 'ML Tools Docs',
    results: [
      { id: 1001, prediction: 'positive', sim: 0.95, text: '' },
      { id: 1002, prediction: 'negative', sim: 0.88, text: '' },
      { id: 1003, prediction: 'neutral', sim: 0.76, text: '' },
      { id: 1004, prediction: 'positive', sim: 0.92, text: '' },
      { id: 1005, prediction: 'negative', sim: 0.84, text: '' },
    ],
  },
  {
    id: 'rag',
    label: 'RAG Tools',
    iconName: 'FileText',
    heading: 'Document processing',
    description: 'RAG pipeline tools for retrieval and generation',
    codeLabel: 'JSON-RPC',
    code: `// RAG query tool\n{\n  "jsonrpc": "2.0",\n  "method": "tools/call",\n  "params": {\n    "name": "rag_query",\n    "arguments": {\n      "collection": "docs",\n      "query": "What is vector search?",\n      "top_k": 5,\n      "rerank": true\n    }\n  }\n}`,
    footerHref: '/neuronmcp',
    footerLabel: 'RAG Tools Docs',
    results: [
      { id: 42, sim: 0.9523, text: 'Vector search enables semantic similarity matching in high-dimensional spaces…' },
      { id: 38, sim: 0.9234, text: 'HNSW indexes provide fast approximate nearest neighbor search…' },
      { id: 35, sim: 0.8945, text: 'RAG combines retrieval with generation for accurate LLM responses…' },
      { id: 31, sim: 0.8656, text: 'Embeddings convert text into numerical vectors for ML models…' },
      { id: 28, sim: 0.8367, text: 'PostgreSQL extensions enable vector operations directly in database…' },
    ],
  },
  {
    id: 'resources',
    label: 'Resources',
    iconName: 'Database',
    heading: 'Schema & stats',
    description: 'Access database schema and metrics',
    codeLabel: 'JSON-RPC',
    code: `// List resources\n{\n  "jsonrpc": "2.0",\n  "method": "resources/list"\n}\n\n// Read resource\n{\n  "jsonrpc": "2.0",\n  "method": "resources/read",\n  "params": {\n    "uri": "neurondb://schema/embeddings"\n  }\n}`,
    footerHref: '/neuronmcp',
    footerLabel: 'Resources Docs',
    results: [
      { id: 1, text: 'neurondb://schema/embeddings', category: 'schema' },
      { id: 2, text: 'neurondb://models/sentiment_model', category: 'model' },
      { id: 3, text: 'neurondb://indexes/hnsw_embeddings', category: 'index' },
      { id: 4, text: 'neurondb://stats/system', category: 'stats' },
      { id: 5, text: 'neurondb://config/server', category: 'config' },
    ],
  },
  {
    id: 'datasets',
    label: 'Dataset Loading',
    iconName: 'Layers',
    heading: 'Load from HuggingFace',
    description: 'Import datasets with auto-embedding',
    codeLabel: 'JSON-RPC',
    code: `// Load HuggingFace dataset\n{\n  "jsonrpc": "2.0",\n  "method": "tools/call",\n  "params": {\n    "name": "load_huggingface_dataset",\n    "arguments": {\n      "dataset": "ag_news",\n      "table": "documents",\n      "embed_columns": ["text"],\n      "model": "all-MiniLM-L6-v2"\n    }\n  }\n}`,
    footerHref: '/neuronmcp',
    footerLabel: 'Dataset Docs',
    results: [
      { id: 1, text: 'Loaded 120,000 rows from ag_news dataset', category: 'status' },
      { id: 2, text: 'Generated embeddings for text column', category: 'embedding' },
      { id: 3, text: 'Created table: documents with vector(384)', category: 'table' },
      { id: 4, text: 'Indexed embeddings with HNSW', category: 'index' },
      { id: 5, text: 'Dataset ready for queries', category: 'complete' },
    ],
  },
  {
    id: 'postgres',
    label: 'PostgreSQL Tools',
    iconName: 'Database',
    heading: '27 admin tools',
    description: 'Complete PostgreSQL administration',
    codeLabel: 'JSON-RPC',
    code: `// Get database stats\n{\n  "jsonrpc": "2.0",\n  "method": "tools/call",\n  "params": {\n    "name": "pg_database_stats"\n  }\n}\n\n// Check connections\n{\n  "jsonrpc": "2.0",\n  "method": "tools/call",\n  "params": {\n    "name": "pg_connection_info"\n  }\n}`,
    footerHref: '/neuronmcp',
    footerLabel: 'PostgreSQL Tools Docs',
    results: [
      { id: 1, text: 'Database: neurondb, Size: 2.4GB', category: 'database' },
      { id: 2, text: 'Active connections: 12/100', category: 'connections' },
      { id: 3, text: 'PostgreSQL version: 17.0', category: 'version' },
      { id: 4, text: 'Cache hit rate: 96.2%', category: 'performance' },
      { id: 5, text: 'Uptime: 7d 14h 23m', category: 'uptime' },
    ],
  },
];

const neuronmcpConfig = {
  productId: 'neuronmcp' as const,
  hero: {
    subtitle: 'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB. Vector operations, ML training, RAG pipeline, reranking, dataset loading, and PostgreSQL administration through JSON-RPC 2.0.',
  },
  demo: null,
  badges: [
    '100+ Tools',
    '27 PostgreSQL Tools',
    'JSON-RPC 2.0',
    'stdio Transport',
    'MCP Protocol',
    'Enterprise Ready',
  ],
  componentCards: [],
  architecture: {
    title: 'Architecture',
    subtitle: 'MCP server architecture with protocol handling, tools, resources, and middleware',
    content: null as any, // Will be set in component
  },
  dashboard: null as any, // Will be set in component
  featurePillars: {
    kicker: 'MCP Server Features',
    items: [
      { 
        title: 'MCP Protocol Implementation', 
        desc: [
          'Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport',
          'Supports tools, resources, prompts protocol, sampling/completions, and progress tracking',
          'Batch operations with transactional tool calls',
          'Protocol version negotiation and capability discovery',
          'Compatible with all MCP-compatible clients including Claude Desktop'
        ]
      },
      { 
        title: 'Comprehensive Tool Suite', 
        desc: [
          '100+ tools: 27 PostgreSQL administration + 70+ NeuronDB tools',
          'Vector operations, ML training, analytics, RAG, reranking, and database management',
          'Vector search with 7+ distance metrics',
          'Quantization tools: int8, fp16, binary, uint8, ternary, int4',
          'Dataset loading from HuggingFace, URLs, GitHub, S3, and local files with auto-embedding',
          'Vector graph operations and vecmap (sparse vector) support',
          'Complete PostgreSQL administration from version info to performance tuning'
        ]
      },
      { 
        title: 'Vector Operations Tools', 
        desc: [
          'Vector search with multiple metrics: L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard',
          'Similarity computation and embedding generation (text, image, multimodal)',
          'Index creation: HNSW and IVF indexing',
          'Batch embedding generation with intelligent caching',
          'Hybrid search with reciprocal rank fusion',
          'Multi-vector, faceted, temporal, and diverse search capabilities'
        ]
      },
      { 
        title: 'ML Operations Tools', 
        desc: [
          'Complete ML pipeline: training, prediction, evaluation, and AutoML for all 52 algorithms',
          'Model catalog management with versioning and A/B testing',
          'Hyperparameter tuning support',
          'ONNX model import, export, and inference',
          'Model deployment workflows and monitoring'
        ]
      },
      { 
        title: 'Reranking & RAG Operations', 
        desc: [
          'Multiple reranking strategies: cross-encoder, LLM-powered, Cohere, ColBERT, LTR, ensemble',
          'Complete RAG pipeline with document processing and chunking',
          'Context retrieval and response generation',
          'LLM integration for answer generation with customizable prompt templates'
        ]
      },
      { 
        title: 'Analytics & Time Series', 
        desc: [
          'Data analysis: clustering (K-Means, DBSCAN, GMM), dimensionality reduction (PCA)',
          'Quality metrics: Recall@K, Precision@K, F1@K, MRR',
          'Outlier detection: Z-score, Modified Z-score, IQR',
          'Drift detection and topic discovery',
          'Time series analysis: ARIMA, forecasting, and seasonal decomposition'
        ]
      },
      { 
        title: 'Resource Management', 
        desc: [
          'Comprehensive resources: schema, model catalog, index configs, worker status, system stats',
          'Real-time resource subscriptions for live updates',
          'Resource discovery and metadata access',
          'Search and filtering capabilities for resources'
        ]
      },
      { 
        title: 'Middleware & Enterprise Features', 
        desc: [
          'Pluggable middleware: validation, logging, timeout, error handling',
          'Authentication: JWT, API keys, OAuth2 with rate limiting',
          'Caching layer with TTL and connection pooling',
          'Enterprise features: Prometheus metrics, webhooks, retry/resilience (circuit breaker)',
          'Health checks for database, tools, and resources'
        ]
      },
      { 
        title: 'Dataset Loading & Processing', 
        desc: [
          'Load from HuggingFace, URLs (CSV, JSON, Parquet), GitHub, S3, and local files',
          'Automatic schema detection and optimized PostgreSQL table creation',
          'Auto-embedding generation for text columns',
          'Batch loading with progress tracking',
          'Support for multiple formats with efficient bulk loading'
        ]
      },
      { 
        title: 'PostgreSQL Tools', 
        desc: [
          'Complete PostgreSQL administration: version info, database statistics, connection monitoring',
          'Lock inspection and replication status',
          'Configuration settings and extension management',
          'Query performance analysis and system resource monitoring'
        ]
      },
    ],
  },
  featureMatrix: {
    title: 'Capabilities',
    subtitle: 'MCP server features',
    content: (
    <table className="w-full text-sm border border-slate-700 rounded-lg overflow-hidden">
            <thead className="bg-slate-800/60">
        <tr className="text-left">
          <th className="px-4 py-3 font-semibold text-white">Capability</th>
          <th className="px-4 py-3 font-semibold text-white">Description</th>
          <th className="px-4 py-3 font-semibold text-white">Performance</th>
          <th className="px-4 py-3 font-semibold text-white">Production Ready</th>
              </tr>
            </thead>
      <tbody className="divide-y divide-slate-700 bg-slate-800/40">
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              MCP Protocol
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">JSON-RPC 2.0 over stdio</td>
          <td className="px-4 py-3 text-slate-300">Low-latency communication</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Vector Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Search, embeddings, indexing</td>
          <td className="px-4 py-3 text-slate-300">Sub-second operations</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              ML Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Training, prediction, evaluation</td>
          <td className="px-4 py-3 text-slate-300">GPU-accelerated</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Analytics Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Clustering, analysis, metrics</td>
          <td className="px-4 py-3 text-slate-300">Efficient algorithms</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              RAG Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Document processing, retrieval</td>
          <td className="px-4 py-3 text-slate-300">End-to-end optimization</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Reranking Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Cross-encoder, LLM, Cohere, ColBERT</td>
          <td className="px-4 py-3 text-slate-300">Neural reranking</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Dataset Loading
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">HuggingFace, URLs, GitHub, S3, local</td>
          <td className="px-4 py-3 text-slate-300">Auto-embedding</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Resources
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Schema, models, indexes, stats</td>
          <td className="px-4 py-3 text-slate-300">Real-time subscriptions</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Middleware & Enterprise
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Validation, auth, metrics, webhooks</td>
          <td className="px-4 py-3 text-slate-300">Production-ready</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              PostgreSQL Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Admin, stats, monitoring</td>
          <td className="px-4 py-3 text-slate-300">Complete management</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
            </tbody>
          </table>
  ),
  },
  ctaSection: {
    kicker: 'Get Started',
    title: 'Connect Claude Desktop to NeuronDB',
    description: 'Deploy NeuronMCP. Enable MCP-compatible clients to access NeuronDB vector search, ML algorithms, and RAG capabilities.',
    primaryCTA: { href: '/neuronmcp', label: 'View Documentation' },
    secondaryCTA: { href: 'https://github.com/neurondb-ai/neurondb', label: 'View on GitHub', external: true },
  },
};

export default function NeuronMCPPage() {
  return (
    <>
      <ProductPageTemplate 
        {...neuronmcpConfig}
        architecture={{
          ...neuronmcpConfig.architecture,
          content: <NeuronMCPArchitectureDiagram />,
        }}
        dashboard={
          <ProductDashboardDemo 
            productId="neuronmcp"
            tabs={neuronmcpDashboardTabs}
            title="NeuronMCP Tools"
            subtitle="100+ tools for vector ops, ML, RAG, and database admin"
          />
        }
      />
    </>
  );
}
