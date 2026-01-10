import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/components/templates/PageTemplate'
import SectionTemplate from '@/components/templates/SectionTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { generatePageMetadata } from '@/config/seo'
import { Database, Bot, Server, PlayCircle, Terminal } from 'lucide-react'

// Dynamically import large demo components with loading fallbacks
const NeurondBDemoTerminal = dynamic(
  () => import('@/components/NeurondBDemoTerminal'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center">
        <div className="text-slate-400">Loading demo...</div>
      </div>
    )
  }
);

const NeuronAgentDemoTerminal = dynamic(
  () => import('@/components/NeuronAgentDemoTerminal'),
  { 
    ssr: false,
    loading: () => (
      <div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center">
        <div className="text-slate-400">Loading demo...</div>
      </div>
    )
  }
);

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

export const metadata: Metadata = generatePageMetadata({
  title: 'Demos',
  description: 'Interactive demonstrations of NeuronDB, NeuronAgent, and NeuronMCP capabilities. See vector search, ML inference, agent runtime, and MCP protocol in action.',
  keywords: [
    'neurondb demo',
    'vector search demo',
    'ml inference demo',
    'agent runtime demo',
    'mcp protocol demo',
    'postgresql ai demo',
  ],
  path: '/demos',
})

export default function DemosPage() {
  return (
    <PageTemplate>
      {/* Hero Section - Exact Homepage Size */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[420px] md:min-h-[450px] flex items-center pt-16 pb-12">
        {/* Subtle clean background */}
        <div className="absolute inset-0 neuron-tech-bg"></div>
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Exact Homepage Style */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 animate-fade-in-up">
              <PlayCircle className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">Demos</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Interactive</span>
            </div>

            {/* Main Title - Exact Homepage Style */}
            <div className="mt-5 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                Interactive Demos
              </h1>
            </div>

            {/* Description - Exact Homepage Style */}
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Experience NeuronDB ecosystem capabilities firsthand. Try interactive terminal demos for vector search, ML inference, agent runtime, and MCP protocol.
            </p>

            {/* Quick Stats - Exact Homepage Style */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">NeuronDB</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">NeuronAgent</span>
              <span className="font-mono transition-all duration-300 hover:text-slate-200">NeuronMCP</span>
            </div>

            {/* Terminal Preview - Exact Homepage Style */}
            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                <div className="text-xs font-mono text-slate-300">Terminal</div>
                <div className="text-xs text-slate-400">Interactive</div>
              </div>
              <pre className="px-4 py-4 text-sm font-mono overflow-x-auto">
                <code>
                  <span className="text-green-400">$</span> <span className="text-slate-300">Try the demos below to see NeuronDB in action...</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* NeuronDB Demo */}
      <SectionTemplate background="page" padding="xl">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white">NeuronDB Demo</h2>
                <p className="text-slate-300">Vector search, ML inference, and RAG pipeline demonstrations</p>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
              <p className="text-slate-200 leading-relaxed">
                This demo shows NeuronDB capabilities including vector search with HNSW indexing, 
                machine learning inference with ONNX models, embedding generation, hybrid search combining semantic and 
                full-text search, RAG pipeline operations, and GPU acceleration. SQL commands execute to demonstrate 
                vector similarity search, ML model training and prediction, document processing, and more in PostgreSQL.
              </p>
            </div>
            <Suspense fallback={<div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center"><div className="text-slate-400">Loading demo...</div></div>}>
              <NeurondBDemoTerminal />
            </Suspense>
            <div className="mt-6 text-center">
              <Link
                href="/neurondb"
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                NeuronDB →
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* NeuronAgent Demo */}
      <SectionTemplate background="page" padding="xl">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Bot className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white">NeuronAgent Demo</h2>
                <p className="text-slate-300">REST API and agent runtime demonstrations</p>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
              <p className="text-slate-200 leading-relaxed">
                This demo shows NeuronAgent REST API endpoints for building AI agent systems. You will see how to 
                create agents with specific profiles and tools, establish sessions for conversation management, send messages 
                that trigger agent actions using NeuronDB vector search and embeddings, and retrieve responses. The demo 
                shows the agent lifecycle including health checks and API authentication.
              </p>
            </div>
            <Suspense fallback={<div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center"><div className="text-slate-400">Loading demo...</div></div>}>
              <NeuronAgentDemoTerminal />
            </Suspense>
            <div className="mt-6 text-center">
              <Link
                href="/neuronagent"
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                NeuronAgent →
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* NeuronMCP Demo */}
      <SectionTemplate background="page" padding="xl">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Server className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-white">NeuronMCP Demo</h2>
                <p className="text-slate-300">MCP protocol and Claude Desktop integration demonstrations</p>
              </div>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-8">
              <p className="text-slate-200 leading-relaxed">
                This demo shows NeuronMCP Model Context Protocol server implementation. You will see JSON-RPC 2.0 
                protocol messages over stdio communication, showing how MCP-compatible clients like Claude Desktop can 
                interact with NeuronDB. The demo includes tool discovery, vector search operations, embedding generation, 
                resource management, and how the MCP server provides access to NeuronDB vector search, ML algorithms, and 
                RAG capabilities through a standardized protocol interface.
              </p>
            </div>
            <Suspense fallback={<div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center"><div className="text-slate-400">Loading demo...</div></div>}>
              <NeuronMCPDemoTerminal />
            </Suspense>
            <div className="mt-6 text-center">
              <Link
                href="/neuronmcp"
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                NeuronMCP →
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <FooterTemplate />
    </PageTemplate>
  )
}

