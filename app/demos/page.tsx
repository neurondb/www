import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import NeurondBDemoTerminal from '@/components/NeurondBDemoTerminal'
import NeuronAgentDemoTerminal from '@/components/NeuronAgentDemoTerminal'
import NeuronMCPDemoTerminal from '@/components/NeuronMCPDemoTerminal'
import { generatePageMetadata } from '@/config/seo'
import { Database, Bot, Server } from 'lucide-react'

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
      <section className="py-16 bg-slate-900">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Database className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-bold text-white">NeuronDB Demo</h2>
                <p className="text-white/80">Vector search, ML inference, and RAG pipeline demonstrations</p>
              </div>
            </div>
            <NeurondBDemoTerminal />
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
      </section>

      {/* NeuronAgent Demo */}
      <section className="py-16 bg-slate-800">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Bot className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-bold text-white">NeuronAgent Demo</h2>
                <p className="text-white/80">REST API and agent runtime demonstrations</p>
              </div>
            </div>
            <NeuronAgentDemoTerminal />
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
      </section>

      {/* NeuronMCP Demo */}
      <section className="py-16 bg-slate-900">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <Server className="w-10 h-10 text-yellow-400" />
              <div>
                <h2 className="text-3xl font-bold text-white">NeuronMCP Demo</h2>
                <p className="text-white/80">MCP protocol and Claude Desktop integration demonstrations</p>
              </div>
            </div>
            <NeuronMCPDemoTerminal />
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
      </section>

      <FooterTemplate />
    </PageTemplate>
  )
}

