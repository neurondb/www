import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { Layers, Code, Brain, Zap, Sparkles, TrendingUp, Shield, Rocket } from 'lucide-react'
import PageTemplate from '@/components/templates/PageTemplate'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import SectionTemplate from '@/components/templates/SectionTemplate'
import EcosystemSection from '@/components/sections/EcosystemSection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import ComparisonSection from '@/components/sections/ComparisonSection'
import FAQSchema from '@/components/SEO/FAQSchema'
import HeroCTAs from '@/components/HeroCTAs'
import EndOfPageCTA from '@/components/EndOfPageCTA'
import { generatePageMetadata } from '@/config/seo'
import PerformanceGraph from '@/components/visualizations/PerformanceGraph'
import FeatureCoverageChart from '@/components/visualizations/FeatureCoverageChart'
import GrowthMetrics from '@/components/visualizations/GrowthMetrics'
import ArchitectureDiagram from '@/components/visualizations/ArchitectureDiagram'
import AnimatedCounter from '@/components/AnimatedCounter'
import InteractiveCodeBlock from '@/components/InteractiveCodeBlock'
import ParticleBackground from '@/components/ParticleBackground'

export const metadata: Metadata = generatePageMetadata({
  title: 'NeuronDB PostgreSQL AI Ecosystem',
    description: 'PostgreSQL AI ecosystem with 4 products: NeuronDB extension for vector search and ML, NeuronAgent runtime, NeuronMCP server for Claude Desktop, and NeuronDesktop interface. Build AI applications with GPU acceleration, 52+ ML algorithms, 473 SQL functions, and 100+ MCP tools.',
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
    answer: 'NeuronDB supports PostgreSQL 16, 17, and 18. It is implemented in pure C with zero external dependencies. See the compatibility matrix in the repository for detailed OS, GPU backend, and platform support information.',
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
  {
    question: 'Are there client SDKs available for NeuronDB?',
    answer: 'Yes, NeuronDB provides official Python SDK (pip install neuronagent) and TypeScript/JavaScript SDKs (npm install @neurondb/neuronagent @neurondb/neurondesktop). All SDKs are auto-generated from OpenAPI specifications with full type safety and comprehensive examples. See the Examples section for working code samples.',
  },
    {
      question: 'Does NeuronDB include performance benchmarks?',
      answer: 'Yes, NeuronDB includes a comprehensive benchmark suite covering Vector benchmarks (SIFT-128, GIST-960, GloVe-100), Hybrid benchmarks (BEIR datasets), and RAG benchmarks (MTEB, BEIR, RAGAS). Metrics include QPS, Recall, Latency, NDCG, MAP, Faithfulness, and Relevancy with reproducible results.',
    },
    {
      question: 'Does NeuronDB support Kubernetes and cloud-native deployment?',
      answer: 'Yes, NeuronDB provides a complete Helm chart for Kubernetes deployment with StatefulSets, Deployments, HPA, Pod Disruption Budgets, and persistent storage. The chart includes the full observability stack (Prometheus, Grafana, Jaeger) and operational scripts for automation. See the Kubernetes Deployment documentation for details.',
    },
]

export default function Home() {
  return (
    <PageTemplate>
      <FAQSchema faqs={faqs} />
        <HeroTemplate
        height="default"
          className="text-center pt-20 relative overflow-hidden"
      >
        {/* Particle Background */}
        <ParticleBackground />
        
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-5xl mx-auto">
            {/* Animated Technical Badge with Glow */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border mb-8 animate-fade-in-up backdrop-blur-sm" 
                 style={{ 
                   backgroundColor: 'rgba(var(--primary-500-rgb), 0.05)',
                   borderColor: 'var(--primary-400)',
                   color: 'var(--text-secondary)',
                   boxShadow: '0 0 30px rgba(var(--primary-500-rgb), 0.15)'
                 }}>
              <Sparkles className="w-4 h-4" style={{ color: 'var(--primary-500)' }} />
              <span className="text-xs uppercase tracking-wider font-semibold">PostgreSQL AI Extension</span>
              <div className="w-px h-4" style={{ backgroundColor: 'var(--border)' }}></div>
              <span className="text-xs font-mono font-bold" style={{ color: 'var(--primary-600)' }}>v2.0.0</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--secondary-500)' }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--secondary-500)' }}></span>
              </span>
            </div>

            {/* Hero Title with Gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight animate-fade-in-up" 
                style={{ animationDelay: '0.1s' }}>
              <span 
                className="bg-clip-text text-transparent bg-gradient-to-r"
                style={{
                  backgroundImage: 'linear-gradient(135deg, var(--primary-600), var(--primary-400))'
                }}
              >
                NeuronDB
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                AI-Native PostgreSQL
              </span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up font-light" 
               style={{ color: 'var(--text-secondary)', animationDelay: '0.2s' }}>
              Production-ready extension for <span className="font-semibold" style={{ color: 'var(--primary-600)' }}>vector search</span>, <span className="font-semibold" style={{ color: 'var(--primary-600)' }}>ML inference</span>, and <span className="font-semibold" style={{ color: 'var(--primary-600)' }}>RAG pipelines</span> with GPU acceleration
            </p>

            {/* Animated Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {[
                { icon: Code, value: 473, label: 'SQL Functions', color: 'var(--primary-500)' },
                { icon: Brain, value: 52, label: 'ML Algorithms', color: 'var(--secondary-500)' },
                { icon: Zap, value: 100, label: 'MCP Tools', suffix: '+', color: 'var(--primary-600)' },
                { icon: Rocket, value: 95, label: 'QPS Performance', suffix: '', color: 'var(--secondary-600)' },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={index}
                    className="relative p-6 rounded-2xl border backdrop-blur-sm hover-lift transition-all duration-300 group"
                    style={{
                      backgroundColor: 'rgba(var(--background-rgb), 0.6)',
                      borderColor: 'var(--border-light)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                  >
                    <Icon className="w-5 h-5 mb-2 mx-auto transition-transform group-hover:scale-110" style={{ color: stat.color }} />
                    <div className="text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                      <AnimatedCounter end={stat.value} suffix={stat.suffix || ''} />
                    </div>
                    <div className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>
                      {stat.label}
                    </div>
                  </div>
                )
              })}
              </div>

            {/* Interactive Quick Start */}
            <div className="max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <InteractiveCodeBlock 
                code="CREATE EXTENSION neurondb;"
                title="Quick Start - One Line Installation"
              />
            </div>

            {/* Enhanced CTAs */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <HeroCTAs />
          </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s', color: 'var(--text-tertiary)' }}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span>Battle Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>Pure C • Zero Dependencies</span>
              </div>
            </div>

            {/* Version Info - Technical */}
            <div className="mt-6 text-xs max-w-2xl mx-auto p-3 rounded-lg border animate-fade-in-up" 
                 style={{ 
                   backgroundColor: 'var(--background-dark)', 
                   borderColor: 'var(--border)',
                   color: 'var(--text-tertiary)',
                   animationDelay: '0.7s'
                 }}>
              <span className="font-mono">main</span> branch (v2.0.0) • 
              <span className="font-mono ml-2">REL1_STABLE</span> branch (v1.0.0) • 
              <span className="ml-2">PostgreSQL 16, 17, 18</span>
            </div>
          </div>
        </div>
      </HeroTemplate>

      {/* Technical Overview - Clean Table */}
      <SectionTemplate background="page" padding="xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Technical Overview
            </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Enterprise-grade PostgreSQL extension for AI workloads
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Core Capabilities */}
              <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                <h3 className="text-sm uppercase tracking-wider font-semibold mb-4" style={{ color: 'var(--text-tertiary)' }}>
                  Vector Search
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>HNSW, IVFFlat, IVF-PQ indexing</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>10 distance metrics (L2, Cosine, IP, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>5 vector types (FLOAT32, FLOAT16, INT8, BINARY, SPARSE)</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Hybrid search with BM25 + vector</span>
                </li>
              </ul>
            </div>

              {/* ML & GPU */}
              <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                <h3 className="text-sm uppercase tracking-wider font-semibold mb-4" style={{ color: 'var(--text-tertiary)' }}>
                  Machine Learning
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>52 ML algorithms (Random Forest, XGBoost, SVM, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>ONNX Runtime integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>GPU acceleration (CUDA, ROCm, Metal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Pure C implementation</span>
                  </li>
                </ul>
              </div>

              {/* RAG & Integration */}
              <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                <h3 className="text-sm uppercase tracking-wider font-semibold mb-4" style={{ color: 'var(--text-tertiary)' }}>
                  RAG Pipeline
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Document processing & chunking</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Semantic retrieval with reranking</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>LLM integration (OpenAI, Anthropic, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>In-database RAG pipelines</span>
                </li>
              </ul>
              </div>
            </div>

            {/* Technical Specs */}
            <div className="mt-8 p-6 rounded-lg border" style={{ backgroundColor: 'var(--background-dark)', borderColor: 'var(--border)' }}>
              <div className="grid md:grid-cols-4 gap-6 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Implementation</div>
                  <div className="font-mono" style={{ color: 'var(--text-secondary)' }}>Pure C • Zero dependencies</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>SQL Functions</div>
                  <div className="font-mono" style={{ color: 'var(--text-secondary)' }}>473 functions</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>Background Workers</div>
                  <div className="font-mono" style={{ color: 'var(--text-secondary)' }}>4 workers</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--text-tertiary)' }}>PostgreSQL</div>
                  <div className="font-mono" style={{ color: 'var(--text-secondary)' }}>16, 17, 18</div>
                </div>
              </div>
            </div>

            {/* NeuronDB Ecosystem */}
            <div className="mt-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  NeuronDB Ecosystem
                </h3>
                <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                  Complete AI database platform with core engine and integrated runtime components
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* NeuronDB */}
                <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    NeuronDB
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Vector search with HNSW and IVF indexing, supporting 5 vector types and 10+ distance metrics.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    52 ML algorithms implemented in pure C: Random Forest, XGBoost, LightGBM, CatBoost, SVM, KNN, and more.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    RAG pipeline with document processing, semantic retrieval, reranking, and LLM integration.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    GPU acceleration for CUDA (NVIDIA), ROCm (AMD), and Metal (Apple Silicon) with automatic detection.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    473 SQL functions with hybrid search, background workers, and security features.
                  </p>
                  <Link
                    href="/neurondb"
                    className="inline-flex items-center gap-2 font-medium text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Learn more
                    <span>→</span>
                  </Link>
                </div>

                {/* NeuronAgent */}
                <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    NeuronAgent
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    REST API and WebSocket agent runtime system with long-term memory and tool execution.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Agent state machine with HNSW-based vector search for context retrieval and memory management.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Tool registry supporting SQL, HTTP, Code, and Shell operations with streaming responses.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Background jobs with API key authentication, crash recovery, and SKIP LOCKED processing.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Integration with NeuronDB for embeddings, LLM operations, and vector search.
                  </p>
                  <Link
                    href="/neuronagent"
                    className="inline-flex items-center gap-2 font-medium text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Learn more
                    <span>→</span>
                  </Link>
                </div>

                {/* NeuronMCP */}
                <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    NeuronMCP
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Model Context Protocol server with 100+ tools (27 PostgreSQL + 70+ NeuronDB) enabling MCP-compatible clients (like Claude Desktop) to access NeuronDB.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    JSON-RPC 2.0 implementation with stdio, HTTP, and SSE transport. Supports tools, resources, prompts, sampling, and progress tracking.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Complete tool suite: 27 PostgreSQL administration tools for database management + 70+ NeuronDB tools for vector operations, ML training, analytics, RAG, reranking, dataset loading (HuggingFace, URLs, GitHub, S3), and comprehensive database monitoring.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Enterprise features: middleware (validation, auth, logging), Prometheus metrics, webhooks, circuit breaker, and real-time resource subscriptions.
                  </p>
                  <Link
                    href="/neuronmcp"
                    className="inline-flex items-center gap-2 font-medium text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Learn more
                    <span>→</span>
                  </Link>
                </div>

                {/* NeuronDesktop */}
                <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                  <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                    NeuronDesktop
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Unified web interface providing a single dashboard for managing all NeuronDB ecosystem components (NeuronDB, NeuronAgent, NeuronMCP).
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Real-time communication via WebSocket for live updates and streaming responses. Profile-based configuration for multiple environments.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Secure authentication with API key-based access control, rate limiting, and comprehensive request/response logging with analytics.
                  </p>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Professional UI with metrics collection, health monitoring, agent management, MCP tool testing, and vector search interface.
                  </p>
                  <Link
                    href="/neurondesktop"
                    className="inline-flex items-center gap-2 font-medium text-sm transition-all duration-200 hover:gap-3"
                    style={{ color: 'var(--primary)' }}
                  >
                    Learn more
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* Performance Metrics & Visualizations */}
      <SectionTemplate background="page" padding="xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Performance & Capabilities
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Real-world benchmarks and comprehensive feature coverage
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Performance Graph */}
            <div className="rounded-2xl border p-8" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              <PerformanceGraph />
            </div>

            {/* Feature Coverage */}
            <div className="rounded-2xl border p-8" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              <FeatureCoverageChart />
            </div>

            {/* Growth Metrics */}
            <div className="rounded-2xl border p-8" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              <GrowthMetrics />
            </div>

            {/* Architecture Diagram */}
            <div className="rounded-2xl border p-8" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
              <ArchitectureDiagram />
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* Ecosystem - 4 Products */}
      <EcosystemSection />

      {/* Capabilities Table */}
      <CapabilitiesSection />

      {/* SDKs & Tools */}
      <SectionTemplate background="page" padding="lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Developer Tools
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                Official client SDKs and benchmark suite
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Client SDKs</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Official Python and TypeScript/JavaScript SDKs with full type safety
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span><strong style={{ color: 'var(--text-primary)' }}>Python:</strong> <code className="px-2 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)' }}>pip install neuronagent</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span><strong style={{ color: 'var(--text-primary)' }}>TypeScript:</strong> <code className="px-2 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: 'var(--code-bg)', color: 'var(--code-text)' }}>npm install @neurondb/neuronagent</code></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Auto-generated from OpenAPI specs</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Benchmark Suite</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Comprehensive benchmarks for vector search, hybrid search, and RAG
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Vector: SIFT-128, GIST-960, GloVe-100</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>Hybrid: BEIR datasets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xs mt-1">▪</span>
                    <span>RAG: MTEB, BEIR, RAGAS metrics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionTemplate>

      {/* Comparison Table */}
      <ComparisonSection />

      <EndOfPageCTA />
      <FooterTemplate />
    </PageTemplate>
  )
}
