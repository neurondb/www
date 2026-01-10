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
      {/* Beautiful Professional Hero */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[600px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Enhanced animated gradient background */}
        <div className="absolute inset-0 neuron-tech-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-indigo-950/20 to-purple-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950"></div>
        
        {/* Floating animated orbs */}
        <div className="absolute top-10 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-5 py-2 text-xs text-slate-200 mb-8 animate-fade-in-up shadow-lg shadow-blue-500/20">
              <FileText className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="font-semibold">Blog</span>
              <span className="text-slate-500">•</span>
              <span className="font-mono text-blue-300">Technical Insights</span>
            </div>

            {/* Main Title with enhanced gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 animate-slide-up leading-none">
              <span className="block drop-shadow-2xl">NeuronDB</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 via-purple-400 to-pink-400 animate-gradient">
                Blog
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Tutorials, guides, and technical insights about NeuronDB. Learn vector search, ML inference, RAG pipelines, and PostgreSQL AI extensions.
            </p>

            {/* Quick Stats with glow effects */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-12 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {blogStats.map((stat, index) => {
                const colorClasses = [
                  { border: 'border-blue-500/20 hover:border-blue-500/40', icon: 'text-blue-400 group-hover:text-blue-300' },
                  { border: 'border-indigo-500/20 hover:border-indigo-500/40', icon: 'text-indigo-400 group-hover:text-indigo-300' },
                  { border: 'border-purple-500/20 hover:border-purple-500/40', icon: 'text-purple-400 group-hover:text-purple-300' },
                  { border: 'border-pink-500/20 hover:border-pink-500/40', icon: 'text-pink-400 group-hover:text-pink-300' },
                ]
                const color = colorClasses[index % colorClasses.length]
                return (
                  <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border ${color.border} backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg`}>
                    <stat.icon className={`w-5 h-5 ${color.icon} transition-colors`} />
                    <span className="font-mono font-bold text-slate-100 text-base">{stat.value}</span>
                    <span className="text-slate-400 text-sm">{stat.label}</span>
                  </div>
                )
              })}
            </div>

            {/* Enhanced Search Bar */}
            <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/search"
                className="group flex items-center gap-3 w-full sm:w-auto max-w-md rounded-xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 backdrop-blur-md px-5 py-3.5 text-left text-slate-200 hover:border-blue-500/60 hover:bg-gradient-to-r hover:from-blue-950/60 hover:via-indigo-950/60 hover:to-purple-950/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <Search className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors animate-pulse" />
                <span className="flex-1 text-sm font-medium">Search blog posts...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-blue-500/30 bg-slate-900/60 px-2.5 py-1 text-xs font-mono text-blue-300 shadow-lg">
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

