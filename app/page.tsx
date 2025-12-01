import React from 'react'
import { Metadata } from 'next'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import EcosystemSection from '@/components/sections/EcosystemSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import ComparisonSection from '@/components/sections/ComparisonSection'
import FAQSchema from '@/components/SEO/FAQSchema'
import { siteConfig } from '@/config/site'
import { generatePageMetadata } from '@/config/seo'

export const metadata: Metadata = generatePageMetadata({
  title: siteConfig.name,
  description: 'PostgreSQL extension with vector search, RAG pipeline, machine learning inference, and GPU acceleration. Build AI-powered applications directly in your database.',
  keywords: [
    'ai database',
    'postgresql ai extension',
    'vector database',
    'vector search postgresql',
    'rag pipeline',
    'machine learning postgresql',
    'gpu accelerated database',
    'neurondb',
    'pgvector alternative',
  ],
  path: '/',
})

const faqs = [
  {
    question: 'What is NeuronDB?',
    answer: 'NeuronDB is a PostgreSQL extension that adds vector search, RAG pipeline, machine learning inference, and GPU acceleration capabilities directly to your database. It enables you to build AI-powered applications without leaving PostgreSQL.',
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
              {siteConfig.name}
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              {siteConfig.tagline}
            </p>
            <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              PostgreSQL extension with vector search, RAG pipeline, machine learning inference, and GPU acceleration. Build AI-powered applications directly in your database.
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
      <EcosystemSection />
      <CapabilitiesSection />
      <ComparisonSection />
      <FooterTemplate />
    </PageTemplate>
    </>
  )
}
