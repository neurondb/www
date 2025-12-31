import React from 'react'
import { Metadata } from 'next'
import { Layers, Code, Brain, Zap } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import SectionTemplate from '@/components/templates/SectionTemplate'
import EcosystemSection from '@/components/sections/EcosystemSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import ComparisonSection from '@/components/sections/ComparisonSection'
import FAQSchema from '@/components/SEO/FAQSchema'
import { siteConfig } from '@/config/site'
import { generatePageMetadata } from '@/config/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'NeuronDB PostgreSQL AI Ecosystem',
  description: 'PostgreSQL AI ecosystem with 4 products: NeuronDB extension for vector search and ML, NeuronAgent runtime, NeuronMCP server for Claude Desktop, and NeuronDesktop interface. Build AI applications with GPU acceleration, 52 ML algorithms, and 473 SQL functions.',
  keywords: [
    'neurondb',
    'postgresql ai ecosystem',
    'ai database ecosystem',
    'neuronagent',
    'neuronmcp',
    'neurondesktop',
    'postgresql ai extension',
    'vector database postgresql',
    'vector search postgresql',
    'rag pipeline postgresql',
    'machine learning postgresql',
    'ml inference postgresql',
    'gpu accelerated database',
    'pgvector alternative',
    'ai agent runtime',
    'mcp server claude',
    'postgres ai',
    'ai database',
    'semantic search postgresql',
  ],
  path: '/',
})

const faqs = [
  {
    question: 'What is NeuronDB PostgreSQL AI Ecosystem?',
    answer: 'NeuronDB is a PostgreSQL AI ecosystem with 4 products: NeuronDB extension for vector search, ML inference, and RAG, NeuronAgent for agent runtime, NeuronMCP for Model Context Protocol server with Claude Desktop, and NeuronDesktop for web interface. They provide AI capabilities in PostgreSQL.',
  },
  {
    question: 'How does NeuronDB compare to pgvector?',
    answer: 'NeuronDB adds ML inference with ONNX models, hybrid search, RAG pipelines, GPU acceleration, and 52 ML algorithms. It provides 473 SQL functions and 4 background workers.',
  },
  {
    question: 'What PostgreSQL versions are supported?',
    answer: 'NeuronDB supports PostgreSQL 16, 17, and 18. It is implemented in pure C with zero external dependencies.',
  },
  {
    question: 'Does NeuronDB support GPU acceleration?',
    answer: 'NeuronDB supports GPU acceleration for CUDA, ROCm, and Metal. GPU acceleration speeds up batch operations up to 100x. It falls back to CPU when GPU is unavailable.',
  },
  {
    question: 'What machine learning capabilities does NeuronDB provide?',
    answer: 'NeuronDB includes 52 ML algorithms in pure C. Algorithms include Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, neural networks, and clustering. It supports ONNX model inference for embeddings generation.',
  },
  {
    question: 'Can I use NeuronDB for RAG (Retrieval Augmented Generation)?',
    answer: 'NeuronDB provides an in-database RAG pipeline with document processing, semantic retrieval, reranking, and LLM integration. You build RAG applications in PostgreSQL without external services.',
  },
]

export default function Home() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <PageTemplate>
        <HeroTemplate
        height="default"
        className="text-white text-center pt-20"
      >
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              <div className="text-3xl md:text-4xl">NeuronDB</div>
              <div className="text-xl md:text-2xl">PostgreSQL AI Ecosystem</div>
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Vector Search, ML Inference, Agent Runtime, MCP Server & Desktop Interface
            </p>
            <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              Four integrated products. Build AI applications with vector search, ML inference, autonomous agents, and RAG pipelines in PostgreSQL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demos"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
              >
                Demos
              </a>
              <a
                href="/docs"
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </HeroTemplate>
      
      {/* Key Features Quick Overview */}
      <SectionTemplate background="page" padding="lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <Layers className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-0.5">4</div>
              <div className="text-sm text-white/80">Integrated Products</div>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <Code className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-0.5">473</div>
              <div className="text-sm text-white/80">SQL Functions</div>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <Brain className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-0.5">52</div>
              <div className="text-sm text-white/80">ML Algorithms</div>
            </div>
            <div className="text-center p-4">
              <div className="flex justify-center mb-2">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-0.5">100x</div>
              <div className="text-sm text-white/80">GPU Speedup</div>
            </div>
          </div>
        </div>
      </SectionTemplate>

      <EcosystemSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <FooterTemplate />
    </PageTemplate>
    </>
  )
}
