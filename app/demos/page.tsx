import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import SectionTemplate from '@/components/templates/SectionTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { generatePageMetadata } from '@/config/seo'
import { Database, Bot, Server } from 'lucide-react'

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
      <HeroTemplate
        height="default"
        className="text-white text-center pt-20"
      >
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Interactive Demos
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Explore NeuronDB ecosystem capabilities with interactive terminal demos
            </p>
          </div>
        </div>
      </HeroTemplate>

      {/* NeuronDB Demo */}
      <SectionTemplate background="page" padding="xl">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-bold text-white">NeuronDB Demo</h2>
                <p className="text-white/80">Vector search, ML inference, and RAG pipeline demonstrations</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
              <p className="text-white/90 leading-relaxed">
                This interactive demo showcases NeuronDB's core capabilities including vector search with HNSW indexing, 
                machine learning inference with ONNX models, embedding generation, hybrid search combining semantic and 
                full-text search, RAG pipeline operations, and GPU acceleration. Watch as SQL commands execute to demonstrate 
                vector similarity search, ML model training and prediction, document processing, and more - all within PostgreSQL.
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
                Learn more about NeuronDB →
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
                <h2 className="text-3xl font-bold text-white">NeuronAgent Demo</h2>
                <p className="text-white/80">REST API and agent runtime demonstrations</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
              <p className="text-white/90 leading-relaxed">
                This demo demonstrates NeuronAgent's REST API endpoints for building AI agent systems. You'll see how to 
                create agents with specific profiles and tools, establish sessions for conversation management, send messages 
                that trigger agent actions using NeuronDB's vector search and embeddings, and retrieve responses. The demo 
                showcases the complete agent lifecycle including health checks and API authentication.
              </p>
            </div>
            <Suspense fallback={<div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center"><div className="text-slate-400">Loading demo...</div></div>}>
              <NeuronAgentDemoTerminal />
            </Suspense>
            <div className="mt-6 text-center">
              <Link
                href="/docs/neuronagent"
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Learn more about NeuronAgent →
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
                <h2 className="text-3xl font-bold text-white">NeuronMCP Demo</h2>
                <p className="text-white/80">MCP protocol and Claude Desktop integration demonstrations</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
              <p className="text-white/90 leading-relaxed">
                This demo showcases NeuronMCP's Model Context Protocol (MCP) server implementation. You'll see JSON-RPC 2.0 
                protocol messages over stdio communication, demonstrating how MCP-compatible clients like Claude Desktop can 
                interact with NeuronDB. The demo includes tool discovery, vector search operations, embedding generation, 
                resource management, and how the MCP server provides access to NeuronDB's vector search, ML algorithms, and 
                RAG capabilities through a standardized protocol interface.
              </p>
            </div>
            <Suspense fallback={<div className="bg-slate-900 rounded-lg p-8 border border-slate-700 min-h-[400px] flex items-center justify-center"><div className="text-slate-400">Loading demo...</div></div>}>
              <NeuronMCPDemoTerminal />
            </Suspense>
            <div className="mt-6 text-center">
              <Link
                href="/docs/neuronmcp"
                className="text-yellow-400 hover:text-yellow-300 font-semibold"
              >
                Learn more about NeuronMCP →
              </Link>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <FooterTemplate />
    </PageTemplate>
  )
}

