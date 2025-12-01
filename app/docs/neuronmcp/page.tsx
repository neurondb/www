import React from 'react';
import Link from 'next/link';
import ProductPageTemplate from '@/components/templates/ProductPageTemplate';
import NeuronMCPDemoTerminal from '@/components/NeuronMCPDemoTerminal';
import NeuronMCPArchitectureDiagram from '@/components/NeuronMCPArchitectureDiagram';
import { generateDocsMetadata } from '@/config/products';
import { Server } from 'lucide-react';

export const metadata = generateDocsMetadata('neurondb', 'NeuronMCP: Model Context Protocol Server');

const neuronmcpConfig = {
  productId: 'neurondb' as const,
  hero: {
    subtitle: 'Model Context Protocol server enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB through stdio communication. JSON-RPC 2.0 implementation.',
  },
  demo: <NeuronMCPDemoTerminal />,
  badges: [
    'JSON-RPC 2.0',
    'stdio Transport',
    'MCP Protocol',
    'Claude Desktop',
    'Tools & Resources',
    'Middleware Support',
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
        desc: 'Full JSON-RPC 2.0 implementation with stdio communication protocol. Request routing and error handling. Compatible with all MCP-compatible clients including Claude Desktop. Protocol version negotiation and capability discovery.' 
      },
      { 
        title: 'Vector Operations Tools', 
        desc: 'Complete set of tools for vector search, similarity computation, embedding generation, and index creation. Direct access to NeuronDB vector engine. Support for multiple vector types and distance metrics. Batch operations support.' 
      },
      { 
        title: 'ML Operations Tools', 
        desc: 'Model training, prediction, and evaluation tools. Access to all 52 ML algorithms in NeuronDB. Model catalog management. Hyperparameter tuning support. Model versioning and A/B testing capabilities.' 
      },
      { 
        title: 'Analytics Tools', 
        desc: 'Data analysis, clustering, and dimensionality reduction tools. Quality metrics computation. Outlier detection. Time series analysis. Comprehensive analytics suite accessible via MCP protocol.' 
      },
      { 
        title: 'RAG Operations', 
        desc: 'Document processing, context retrieval, and response generation tools. Complete RAG pipeline accessible through MCP. Semantic search with reranking. LLM integration for answer generation.' 
      },
      { 
        title: 'Resource Management', 
        desc: 'Schema information, model catalog, index configurations, and system statistics exposed as MCP resources. Real-time resource updates. Resource discovery and metadata access.' 
      },
      { 
        title: 'Middleware Support', 
        desc: 'Validation middleware for input sanitization. Structured logging for debugging and monitoring. Request timeout handling. Comprehensive error handling with graceful degradation.' 
      },
      { 
        title: 'Claude Desktop Integration', 
        desc: 'Ready-to-use configuration for Claude Desktop. Docker and binary deployment options. Environment-based configuration. Seamless integration with existing NeuronDB installations.' 
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
              Resources
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Schema, models, indexes, stats</td>
          <td className="px-4 py-3 text-slate-300">Real-time updates</td>
          <td className="px-4 py-3 text-green-400">✓</td>
              </tr>
              <tr>
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Middleware
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Validation, logging, timeout</td>
          <td className="px-4 py-3 text-slate-300">Low overhead</td>
          <td className="px-4 py-3 text-green-400">✓</td>
        </tr>
        <tr className="bg-slate-800/60">
          <td className="px-4 py-3 font-medium">
            <Link href="/docs/neuronmcp" className="text-yellow-400 hover:text-yellow-300 hover:underline transition-colors">
              Claude Desktop
            </Link>
          </td>
          <td className="px-4 py-3 text-slate-300">Ready-to-use configuration</td>
          <td className="px-4 py-3 text-slate-300">Easy setup</td>
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
