import React from 'react'
import { Metadata } from 'next'
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
  title: 'PostgreSQL AI Extension - Vector Search, ML Inference & RAG Pipeline',
  description: 'NeuronDB is the leading PostgreSQL AI extension for vector search, machine learning inference, and RAG pipeline. Build AI-powered applications directly in PostgreSQL with GPU acceleration, 52 ML algorithms, and hybrid search. PostgreSQL 16-18 compatible.',
  keywords: [
    'postgresql ai extension',
    'postgresql ai extension vector search',
    'postgresql ai extension ml',
    'postgresql ai extension rag',
    'postgres ai extension',
    'postgres extension ai',
    'ai database',
    'ai database postgresql',
    'vector database',
    'vector database postgresql',
    'vector search postgresql',
    'rag pipeline postgresql',
    'machine learning postgresql',
    'ml inference postgresql',
    'gpu accelerated database',
    'neurondb',
    'neuronagent',
    'neuronmcp',
    'neurondesktop',
    'pgvector alternative',
    'ai agent runtime',
    'mcp server',
    'ai database ecosystem',
  ],
  path: '/',
})

const faqs = [
  {
    question: 'What is NeuronDB PostgreSQL AI Extension?',
    answer: 'NeuronDB is a PostgreSQL AI extension that transforms PostgreSQL into a complete AI database. It consists of four integrated components: NeuronDB (PostgreSQL AI extension for vector search and ML), NeuronAgent (agent runtime), NeuronMCP (MCP protocol server), and NeuronDesktop (web interface). Build AI-powered applications entirely within PostgreSQL.',
  },
  {
    question: 'How does NeuronDB compare to pgvector?',
    answer: 'NeuronDB offers comprehensive AI capabilities beyond vector search, including ML inference with ONNX models, hybrid search combining semantic and full-text search, complete RAG pipelines, GPU acceleration, and 52 ML algorithms. It provides 473 SQL functions and 4 background workers for production-ready AI workloads.',
  },
  {
    question: 'What PostgreSQL versions are supported?',
    answer: 'NeuronDB supports PostgreSQL versions 16, 17, and 18. It is implemented in pure C following PostgreSQL coding standards with zero external dependencies.',
  },
  {
    question: 'Does NeuronDB support GPU acceleration?',
    answer: 'Yes, NeuronDB supports GPU acceleration for CUDA (NVIDIA), ROCm (AMD), and Metal (Apple Silicon). GPU acceleration provides up to 100x speedup on batch operations and automatically falls back to CPU when GPU is unavailable.',
  },
  {
    question: 'What machine learning capabilities does NeuronDB provide?',
    answer: 'NeuronDB includes 52 ML algorithms implemented in pure C, including Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, neural networks, clustering algorithms, and more. It also supports ONNX model inference for embeddings generation and text/image/multimodal embeddings.',
  },
  {
    question: 'Can I use NeuronDB for RAG (Retrieval Augmented Generation)?',
    answer: 'Yes, NeuronDB provides a complete in-database RAG pipeline with document processing, semantic retrieval, reranking, and LLM integration. You can build RAG applications entirely within PostgreSQL without external services.',
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
              NeuronDB: PostgreSQL AI Extension
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              The Complete PostgreSQL AI Extension for Vector Search, ML Inference & RAG Pipeline
            </p>
            <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              NeuronDB is a PostgreSQL AI extension that adds vector search, machine learning inference, and RAG pipeline capabilities directly to PostgreSQL. Build AI-powered applications with GPU acceleration, 52 ML algorithms, and hybrid search—all within your PostgreSQL database.
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
      {/* SEO-Optimized Section for PostgreSQL AI Extension */}
      <SectionTemplate background="page" padding="xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is a PostgreSQL AI Extension?
            </h2>
            <div className="text-lg text-white/90 space-y-4 leading-relaxed">
              <p>
                NeuronDB is a <strong className="text-yellow-400">PostgreSQL AI extension</strong> that extends PostgreSQL with native AI capabilities. Unlike standalone vector databases, this <strong className="text-yellow-400">PostgreSQL AI extension</strong> enables you to run vector search, machine learning inference, and RAG pipelines directly within your PostgreSQL database—no data movement required.
              </p>
              <p>
                As a <strong className="text-yellow-400">PostgreSQL AI extension</strong>, NeuronDB integrates seamlessly with PostgreSQL 16, 17, and 18. It provides 473 SQL functions, 52 ML algorithms, 5 vector types, and GPU acceleration—all accessible through standard SQL queries. Whether you need semantic search, ML model training, or complete RAG workflows, this <strong className="text-yellow-400">PostgreSQL AI extension</strong> delivers enterprise-grade AI functionality within PostgreSQL.
              </p>
              <p>
                Install the <strong className="text-yellow-400">PostgreSQL AI extension</strong> in minutes and start building AI applications immediately. The extension requires zero external dependencies and follows PostgreSQL coding standards, ensuring reliability and performance in production environments.
              </p>
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
