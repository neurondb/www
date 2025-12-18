import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, User, Tag, Eye, ThumbsUp, MessageCircle, TrendingUp, BookOpen, Code, Database, Server, Zap, Award, Globe, Users } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: 'NeuronDB Blog - Tutorials, Guides & Technical Insights',
  description: 'Latest updates, tutorials, and technical insights about NeuronDB. Learn about vector search, ML inference, RAG pipelines, PostgreSQL AI extensions, and best practices. Expert guides and real-world examples.',
  keywords: ['NeuronDB blog', 'PostgreSQL blog', 'vector database blog', 'AI database tutorials', 'ML inference guides', 'RAG pipeline', 'semantic search', 'PostgreSQL AI', 'technical blog', 'database tutorials'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'NeuronDB Blog - Tutorials, Guides & Technical Insights',
    description: 'Latest updates, tutorials, and technical insights about NeuronDB. Learn about vector search, ML inference, and RAG pipelines.',
    url: 'https://neurondb.ai/blog',
    siteName: 'NeuronDB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuronDB Blog - Tutorials, Guides & Technical Insights',
    description: 'Latest updates, tutorials, and technical insights about NeuronDB.',
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/blog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Blog statistics
const blogStats = [
  { label: 'Total Articles', value: '7', icon: BookOpen, color: 'text-white' },
  { label: 'Monthly Readers', value: '2.1k', icon: Eye, color: 'text-white' },
  { label: 'Categories', value: '1', icon: Tag, color: 'text-white' },
  { label: 'Authors', value: '1', icon: Users, color: 'text-white' }
]

const blogPosts = [
  {
    slug: 'neurondb',
    title: 'NeuronDB a PostgreSQL AI Extension',
    excerpt: 'NeuronDB adds vector search, ML inference, and RAG capabilities to PostgreSQL. Includes HNSW indexing, GPU acceleration, 10 distance metrics, and pgvector compatibility.',
    content: 'NeuronDB is a PostgreSQL extension. Provides vector search, machine learning inference, GPU acceleration, and hybrid retrieval. For semantic search, RAG applications, and recommendation systems.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-20',
    readTime: '22 min read',
    category: 'Technical',
    featured: true,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['AI', 'Vector Database', 'Machine Learning', 'Semantic Search', 'RAG', 'PostgreSQL']
  },
  {
    slug: 'neurondb-semantic-search-guide',
    title: 'Semantic Search Over Text with NeuronDB',
    excerpt: 'Implement semantic search over text using NeuronDB. Includes examples, SQL queries, and code. Guide to building document search systems, RAG pipelines, and hybrid search.',
    content: 'Guide to implementing semantic search with NeuronDB. Includes examples, SQL queries, RAG pipeline construction, hybrid search techniques, and optimization strategies.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-19',
    readTime: '25 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['NeuronDB', 'Semantic Search', 'RAG', 'Vector Search', 'PostgreSQL', 'Tutorial', 'AI']
  },
  {
    slug: 'neurondb-vectors',
    title: 'Vectors in PostgreSQL',
    excerpt: 'Master vector operations, indexing, and similarity search in PostgreSQL with NeuronDB. Comprehensive guide with SQL queries and real results. Learn HNSW indexing, distance metrics, quantization, and performance optimization.',
    content: 'Complete guide to working with vectors in PostgreSQL using NeuronDB. Covers vector types, operations, distance metrics, indexing strategies, quantization, and performance optimization with executable SQL queries and results.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-21',
    readTime: '30 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['NeuronDB', 'Vectors', 'Vector Search', 'HNSW', 'Distance Metrics', 'PostgreSQL', 'Tutorial', 'AI', 'Indexing']
  },
  {
    slug: 'neurondb-mcp-server',
    title: 'MCP Server: Model Context Protocol Explained',
    excerpt: 'Complete guide to MCP Server (Model Context Protocol) - what it is, how it works, integration with Claude Desktop, known MCP servers, and NeuronMCP implementation. Learn how MCP enables AI assistants to access external tools and resources.',
    content: 'Comprehensive guide to MCP Server architecture, protocol implementation, Claude Desktop integration, popular MCP servers, and NeuronMCP. Learn how the Model Context Protocol enables AI assistants to securely access external tools and data sources.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-22',
    readTime: '28 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['MCP', 'ModelContextProtocol', 'ClaudeDesktop', 'NeuronMCP', 'AI', 'PostgreSQL', 'VectorDatabase', 'MachineLearning', 'RAG', 'OpenSource', 'NeuronDB']
  },
  {
    slug: 'rag-complete-guide',
    title: 'RAG: Retrieval-Augmented Generation With PostgreSQL',
    excerpt: 'Complete guide to RAG (Retrieval-Augmented Generation) with detailed examples, SQL queries, and implementation patterns. Learn how to build RAG systems with document retrieval, context building, LLM integration, and response generation.',
    content: 'Comprehensive guide to RAG architecture, implementation patterns, SQL examples, and NeuronDB integration. Learn how to build RAG systems with document processing, embedding generation, similarity search, context building, and response generation.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-23',
    readTime: '35 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['RAG', 'RetrievalAugmentedGeneration', 'LLM', 'VectorSearch', 'SemanticSearch', 'NeuronDB', 'PostgreSQL', 'AI', 'MachineLearning', 'DocumentRetrieval', 'KnowledgeBase']
  },
  {
    slug: 'agentic-ai',
    title: 'Agentic AI: Complete Guide to Autonomous AI Agents',
    excerpt: 'Complete guide to Agentic AI systems. Explains agent architecture, planning, tool use, memory systems, and autonomous task execution. Includes practical implementation using NeuronDB and NeuronAgent with code examples.',
    content: 'Comprehensive guide to Agentic AI architecture, planning systems, tool execution, memory management, state machines, and implementation patterns. Learn how to build autonomous agents using NeuronDB and NeuronAgent with production-ready code examples.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-24',
    readTime: '40 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['AgenticAI', 'AutonomousAgents', 'AIAgents', 'AgentArchitecture', 'ToolUse', 'Planning', 'MemorySystems', 'NeuronDB', 'NeuronAgent', 'PostgreSQL', 'LLM', 'RAG', 'VectorSearch', 'MachineLearning', 'AI']
  },
  {
    slug: 'postgresql-vector-database',
    title: 'PostgreSQL as a Vector Database: Complete Guide',
    excerpt: 'Complete guide to using PostgreSQL as a vector database. Learn how PostgreSQL with NeuronDB extension transforms into a powerful vector database with HNSW indexing, similarity search, and production-ready capabilities.',
    content: 'Comprehensive guide to PostgreSQL vector database architecture, performance benchmarks, indexing strategies, query patterns, and migration approaches. Learn how PostgreSQL with NeuronDB becomes a complete vector database solution.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-25',
    readTime: '35 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['PostgreSQL', 'VectorDatabase', 'NeuronDB', 'VectorSearch', 'HNSW', 'SQL', 'Database', 'AI', 'SemanticSearch', 'Production', 'Indexing']
  }
]

const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => {
  const isAnnouncement = post.category === 'Announcement'
  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full" aria-label={`Read ${post.title}`}>
        <div className="bg-slate-950 rounded-3xl shadow-lg border border-slate-900 overflow-hidden hover:shadow-2xl hover:border-slate-800 transition-all duration-300 h-full flex flex-col">
          {/* Large Stock Image */}
          <div className={`relative w-full aspect-[3/2] overflow-hidden flex-shrink-0 border-b border-slate-900 flex items-center justify-center`} style={{ backgroundColor: '#030712' }}>
            <div className="absolute inset-0 bg-slate-950/80 z-0"></div>
            {post.slug === 'neurondb' ? (
              <Image
                src="/blog/neurondb/header.svg?v=7"
                alt="NeuronDB blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : post.slug === 'neurondb-semantic-search-guide' ? (
              <Image
                src="/blog/neurondb-semantic-search-guide/header.svg?v=7"
                alt="NeuronDB Semantic Search Guide blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : post.slug === 'neurondb-vectors' ? (
              <Image
                src="/blog/neurondb-vectors/header.svg?v=7"
                alt="NeuronDB Vectors Guide blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : post.slug === 'neurondb-mcp-server' ? (
              <Image
                src="/blog/neurondb-mcp-server/header.svg?v=7"
                alt="MCP Server blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : post.slug === 'rag-complete-guide' ? (
              <Image
                src="/blog/rag-complete-guide/header.svg?v=7"
                alt="RAG Complete Guide blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : post.slug === 'agentic-ai' ? (
              <Image
                src="/blog/agentic-ai/header.svg?v=7"
                alt="Agentic AI blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : post.slug === 'postgresql-vector-database' ? (
              <Image
                src="/blog/postgresql-vector-database/header.svg?v=8"
                alt="PostgreSQL as Vector Database blog header"
                fill
                className="object-contain opacity-100 scale-90 brightness-150 contrast-125 z-10"
                style={{ filter: 'brightness(1.5) contrast(1.25) drop-shadow(0 0 10px rgba(255,255,255,0.1))' }}
                unoptimized
                priority
              />
            ) : (
              <div className="text-center p-6">
                <div className="text-4xl mb-2">📄</div>
                <div className="text-slate-300 text-sm font-thin">{post.category}</div>
              </div>
            )}
            {isAnnouncement && <div className="absolute inset-0 bg-black/30" />}
            <div className="absolute top-4 left-4 bg-slate-950 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-slate-800">
              {post.category}
            </div>
          </div>
          {/* Content */}
          <div className="p-7 flex flex-col flex-1 bg-slate-950">
            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors flex-shrink-0 leading-tight">
              {post.title}
            </h3>
            <p className="text-slate-300 mb-4 line-clamp-3 flex-1 text-sm leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-slate-400 mt-auto flex-shrink-0 font-thin">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 group-hover:gap-2 transition-all font-thin">
                <span>Read more</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function BlogPage() {
  return (
    <div className="pt-0">
      {/* Unified Professional Hero */}
      <section
        className="relative text-center overflow-hidden flex items-center h-[400px] pt-20"
        style={{
          backgroundColor: '#111827'
        }}
      >
        <div className="container-extra-wide mx-auto relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">Blog</h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Technical insights, tutorials, and updates about NeuronDB
            </p>

            {/* Blog Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {blogStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-thin text-white drop-shadow-2xl shadow-2xl drop-shadow-sm">{stat.value}</div>
                  <div className="text-sm text-white drop-shadow-2xl shadow-2xl/80 drop-shadow-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <div className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1f2937' }}>
        <div className="container-wide">
          <div className="max-w-7xl mx-auto">
            {/* Technical Blogs */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-2 tracking-tight">Technical Blogs</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">Tutorials and technical notes.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 mb-20">
              {blogPosts.filter(p => p.category === 'Technical').map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterTemplate />
    </div>
  )
}

