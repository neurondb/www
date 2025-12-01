import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, User, Tag, Eye, ThumbsUp, MessageCircle, TrendingUp, BookOpen, Code, Database, Server, Zap, Award, Globe, Users } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name}`,
  description: 'Latest updates, tutorials, and technical insights about NeuronDB',
}

// Blog statistics
const blogStats = [
  { label: 'Total Articles', value: '2', icon: BookOpen, color: 'text-white' },
  { label: 'Monthly Readers', value: '2.1k', icon: Eye, color: 'text-white' },
  { label: 'Categories', value: '1', icon: Tag, color: 'text-white' },
  { label: 'Authors', value: '1', icon: Users, color: 'text-white' }
]

const blogPosts = [
  {
    slug: 'neurondb',
    title: 'NeuronDB: PostgreSQL AI Vector Database Extension',
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
  }
]

const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => {
  const isAnnouncement = post.category === 'Announcement'
  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full" aria-label={`Read ${post.title}`}>
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:border-white/30 h-full flex flex-col">
          {/* Large Stock Image */}
          <div className={`relative w-full aspect-[3/2] overflow-hidden flex-shrink-0 border border-white/20 flex items-center justify-center`} style={{ backgroundColor: '#1f2937' }}>
            {post.slug === 'neurondb' ? (
              <Image
                src="/blog/neurondb/header.svg?v=7"
                alt="NeuronDB blog header"
                fill
                className="object-cover opacity-90"
                unoptimized
                priority
              />
            ) : post.slug === 'neurondb-semantic-search-guide' ? (
              <Image
                src="/blog/neurondb/header.svg?v=7"
                alt="NeuronDB Semantic Search Guide blog header"
                fill
                className="object-cover opacity-90"
                unoptimized
                priority
              />
            ) : (
              <div className="text-center p-6">
                <div className="text-4xl mb-2">📄</div>
                <div className="text-white/80 text-sm font-thin">{post.category}</div>
              </div>
            )}
            {isAnnouncement && <div className="absolute inset-0 bg-black/30" />}
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm/80 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg drop-shadow-lg">
              {post.category}
            </div>
          </div>
          {/* Content */}
          <div className="p-7 flex flex-col flex-1">
            <h3 className="text-2xl font-thin text-white mb-2 group-hover:text-yellow-400 transition-colors flex-shrink-0 leading-tight drop-shadow-2xl shadow-2xl">
              {post.title}
            </h3>
            <p className="text-white/90 mb-4 line-clamp-3 flex-1 text-lg font-thin drop-shadow-2xl shadow-2xl">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-white/80 mt-auto flex-shrink-0 font-thin drop-shadow-2xl shadow-2xl">
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
              <div className="flex items-center gap-1 text-yellow-400 group-hover:gap-2 transition-all font-thin drop-shadow-2xl shadow-2xl">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
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

