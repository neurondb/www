import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, User, Tag, Eye, ThumbsUp, MessageCircle, TrendingUp, BookOpen, Code, Database, Server, Zap, Award, Globe, Users, FileText, Search } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'
import { allBlogPosts } from '@/config/blogPosts'

export const metadata: Metadata = {
  title: 'NeuronDB Blog - Tutorials, Guides & Technical Insights',
  description: 'Latest updates, tutorials, and technical insights about NeuronDB. Vector search, ML inference, RAG pipelines, PostgreSQL AI extensions, and best practices. Expert guides and real-world examples.',
  keywords: ['NeuronDB blog', 'PostgreSQL blog', 'vector database blog', 'AI database tutorials', 'ML inference guides', 'RAG pipeline', 'semantic search', 'PostgreSQL AI', 'technical blog', 'database tutorials'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'NeuronDB Blog - Tutorials, Guides & Technical Insights',
    description: 'Latest updates, tutorials, and technical insights about NeuronDB. Vector search, ML inference, and RAG pipelines.',
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

// Blog statistics - computed from actual data
const blogStats = [
  { label: 'Total Articles', value: allBlogPosts.length.toString(), icon: BookOpen, color: 'text-white' },
  { label: 'Categories', value: new Set(allBlogPosts.map(p => p.category)).size.toString(), icon: Tag, color: 'text-white' },
  { label: 'Authors', value: new Set(allBlogPosts.map(p => p.author)).size.toString(), icon: Users, color: 'text-white' },
  { label: 'Total Tags', value: new Set(allBlogPosts.flatMap(p => p.tags)).size.toString(), icon: Tag, color: 'text-white' }
]

const blogPosts = allBlogPosts

const BlogCard = ({ post, index }: { post: typeof blogPosts[0], index: number }) => {
  const isAnnouncement = post.category === 'Announcement'
  return (
    <article className="group h-full">
      <Link href={`/blog/${post.slug}`} className="block h-full" aria-label={`Read ${post.title}`}>
        <div className="bg-slate-950 rounded-3xl shadow-lg border border-slate-800 overflow-hidden hover:shadow-2xl hover:border-slate-700 transition-all duration-300 h-full flex flex-col">
          {/* Large Stock Image */}
          <div className={`relative w-full aspect-[3/2] overflow-hidden flex-shrink-0 border-b border-slate-900 flex items-center justify-center`} style={{ backgroundColor: '#030712' }}>
            <div className="absolute inset-0 bg-slate-950/80 z-0"></div>
            {post.headerImage ? (
              <Image
                src={post.headerImage}
                alt={`${post.title} header`}
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Professional Hero */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[520px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle background effect */}
        <div className="absolute inset-0 neuron-tech-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-16">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-300 mb-6 animate-fade-in-up">
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-semibold">Blog</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Technical Insights</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
              NeuronDB
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Blog
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Tutorials, guides, and technical insights about NeuronDB. Learn vector search, ML inference, RAG pipelines, and PostgreSQL AI extensions.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {blogStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon className={`w-4 h-4 ${stat.color === 'text-white' ? 'text-indigo-400' : stat.color}`} />
                  <span className="font-mono font-semibold text-slate-200">{stat.value}</span>
                  <span className="text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/search"
                className="group flex items-center gap-3 w-full sm:w-auto max-w-md rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-sm px-5 py-3.5 text-left text-slate-300 hover:border-indigo-500 hover:bg-slate-800/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Search className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                <span className="flex-1 text-sm">Search blog posts...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-slate-600 bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-400">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <div className="py-24 relative overflow-hidden bg-slate-900">
        <div className="container-wide">
          <div className="max-w-7xl mx-auto">
            {/* Technical Blogs */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-thin text-white mb-2 tracking-tight">Technical Blogs</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">Tutorials and technical notes.</p>
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

