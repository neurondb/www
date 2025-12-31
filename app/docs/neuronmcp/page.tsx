import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import NeuronMCPArchitectureDiagram from '@/components/NeuronMCPArchitectureDiagram';
import { generateDocsMetadata } from '@/config/products';
import { Server } from 'lucide-react';

// Dynamically import large demo component with loading fallback
const NeuronMCPDemoTerminal = dynamic(
  () => import('@/components/NeuronMCPDemoTerminal'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center">
        <div className="text-slate-400">Loading demo...</div>
      </div>
    )
  }
);

export const metadata = generateDocsMetadata('neurondb', 'NeuronMCP: Model Context Protocol Server');

const neuronmcpConfig = {
  productId: 'neurondb' as const,
  hero: {
    subtitle: 'Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB. Vector operations, ML training, RAG pipeline, reranking, dataset loading, and PostgreSQL administration through JSON-RPC 2.0.',
  },
  demo: <Suspense fallback={<div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center"><div className="text-slate-400">Loading demo...</div></div>}><NeuronMCPDemoTerminal /></Suspense>,
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
    content: <NeuronMCPArchitectureDiagram />,
  },
  featurePillars: {
    kicker: 'MCP Server Features',
    items: [
      { 
        title: 'MCP Protocol Implementation', 
        desc: 'Full JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport. Supports tools, resources, prompts protocol, sampling/completions, and progress tracking. Batch operations with transactional tool calls. Protocol version negotiation and capability discovery. Compatible with all MCP-compatible clients including Claude Desktop.' 
      },
      { 
        title: 'Comprehensive Tool Suite', 
        desc: '100+ tools including 27 PostgreSQL administration tools and 70+ NeuronDB tools covering vector operations, ML training, analytics, RAG, reranking, and complete database management. Vector search with 7+ distance metrics. Quantization tools (int8, fp16, binary, uint8, ternary, int4). Dataset loading from HuggingFace, URLs, GitHub, S3, and local files with auto-embedding. Vector graph operations and vecmap (sparse vector) support. Complete PostgreSQL administration from version info to advanced performance tuning.' 
      },
      { 
        title: 'Vector Operations Tools', 
        desc: 'Complete set of tools for vector search (L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard), similarity computation, embedding generation (text, image, multimodal), and index creation (HNSW, IVF). Batch embedding generation with caching. Hybrid search with reciprocal rank fusion. Multi-vector, faceted, temporal, and diverse search capabilities.' 
      },
      { 
        title: 'ML Operations Tools', 
        desc: 'Complete ML pipeline: training, prediction, evaluation, and AutoML for all 52 ML algorithms in NeuronDB. Model catalog management with versioning. Hyperparameter tuning support. ONNX model import, export, and inference. Model A/B testing and deployment workflows.' 
      },
      { 
        title: 'Reranking & RAG Operations', 
        desc: 'Multiple reranking strategies: cross-encoder, LLM-powered, Cohere, ColBERT, learning-to-rank (LTR), and ensemble reranking. Complete RAG pipeline with document processing, chunking, context retrieval, and response generation. LLM integration for answer generation with prompt templates.' 
      },
      { 
        title: 'Analytics & Time Series', 
        desc: 'Data analysis, clustering (K-Means, DBSCAN, GMM), dimensionality reduction (PCA), quality metrics computation (Recall@K, Precision@K, F1@K, MRR). Outlier detection (Z-score, Modified Z-score, IQR). Drift detection and topic discovery. Time series analysis with ARIMA, forecasting, and seasonal decomposition.' 
      },
      { 
        title: 'Resource Management', 
        desc: 'Comprehensive resources: schema information, model catalog, index configurations, worker status, system statistics, and server configuration. Real-time resource subscriptions for live updates. Resource discovery and metadata access with search and filtering capabilities.' 
      },
      { 
        title: 'Middleware & Enterprise Features', 
        desc: 'Pluggable middleware: validation, logging, timeout, error handling, authentication (JWT, API keys, OAuth2), rate limiting. Caching layer with TTL and connection pooling. Enterprise features: Prometheus metrics, webhooks, retry/resilience (circuit breaker). Health checks for database, tools, and resources.' 
      },
      { 
        title: 'Dataset Loading & Processing', 
        desc: 'Load datasets from HuggingFace, URLs (CSV, JSON, Parquet), GitHub repositories, S3 buckets, and local files. Automatic schema detection and optimized PostgreSQL table creation. Auto-embedding generation for text columns. Batch loading with progress tracking. Support for multiple formats with efficient bulk loading.' 
      },
      { 
        title: 'PostgreSQL Tools', 
        desc: 'Complete PostgreSQL administration tools: version info, database statistics, connection monitoring, lock inspection, replication status, configuration settings, and extension management. Query performance analysis and system resource monitoring.' 
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
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              MCP Protocol
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">JSON-RPC 2.0 over stdio</td>
          <td className="px-4 py-3 text-slate-300">Low-latency communication</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Vector Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Search, embeddings, indexing</td>
          <td className="px-4 py-3 text-slate-300">Sub-second operations</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              ML Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Training, prediction, evaluation</td>
          <td className="px-4 py-3 text-slate-300">GPU-accelerated</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Analytics Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Clustering, analysis, metrics</td>
          <td className="px-4 py-3 text-slate-300">Efficient algorithms</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              RAG Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Document processing, retrieval</td>
          <td className="px-4 py-3 text-slate-300">End-to-end optimization</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Reranking Tools
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Cross-encoder, LLM, Cohere, ColBERT</td>
          <td className="px-4 py-3 text-slate-300">Neural reranking</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Dataset Loading
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">HuggingFace, URLs, GitHub, S3, local</td>
          <td className="px-4 py-3 text-slate-300">Auto-embedding</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Resources
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Schema, models, indexes, stats</td>
          <td className="px-4 py-3 text-slate-300">Real-time subscriptions</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Middleware & Enterprise
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Validation, auth, metrics, webhooks</td>
          <td className="px-4 py-3 text-slate-300">Production-ready</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
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
    primaryCTA: { href: '/docs/neuronmcp', label: 'View Documentation' },
    secondaryCTA: { href: 'https://github.com/neurondb-ai/neurondb', label: 'View on GitHub', external: true },
  },
};

export default function NeuronMCPPage() {
  return (
    <>
      <ProductPageTemplate {...neuronmcpConfig} />
    </>
  );
}
