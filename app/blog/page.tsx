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
          <div className={`relative w-full aspect-[3/2] overflow-hidden flex-shrink-0 border-b border-slate-900 flex items-center justify-center`} style={{ backgroundColor: '#000000' }}>
            <div className="absolute inset-0 bg-black/80 z-0"></div>
            {post.headerImage ? (
              <Image
                src={post.headerImage}
                alt={`${post.title} header`}
                fill
                className="object-contain opacity-100 scale-90 z-10"
                style={{ 
                  filter: 'brightness(2.5) contrast(2.0) drop-shadow(0 0 2px rgba(255,255,255,0.5)) drop-shadow(0 0 4px rgba(255,255,255,0.3))',
                  imageRendering: 'crisp-edges',
                  ...({
                    WebkitImageRendering: '-webkit-optimize-contrast',
                    msInterpolationMode: 'nearest-neighbor',
                  } as React.CSSProperties),
                }}
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
    <div className="min-h-screen bg-black">
      {/* Hero Section - Exact Homepage Size */}
      <section className="relative overflow-hidden bg-black min-h-[420px] md:min-h-[450px] flex items-center pt-16 pb-12">
        {/* Subtle clean background */}
        <div className="absolute inset-0 neuron-tech-bg"></div>
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Exact Homepage Style */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 animate-fade-in-up">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">Blog</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Technical Insights</span>
            </div>

            {/* Main Title - Exact Homepage Style */}
            <div className="mt-5 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                NeuronDB Blog
              </h1>
            </div>

            {/* Description - Exact Homepage Style */}
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Tutorials, guides, and technical insights about NeuronDB. Learn vector search, ML inference, RAG pipelines, and PostgreSQL AI extensions.
            </p>

            {/* Quick Stats - Exact Homepage Style */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {blogStats.map((stat, index) => (
                <span key={index} className="font-mono transition-all duration-300 hover:text-slate-200">
                  {stat.value} {stat.label}
                </span>
              ))}
            </div>

            {/* Search Bar - Exact Homepage Style */}
            <div className="mt-7 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/search"
                className="group flex items-center gap-3 w-full sm:w-auto max-w-md rounded-lg border border-slate-700 bg-slate-900/40 backdrop-blur-sm px-5 py-3 text-left text-slate-200 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Search className="w-5 h-5 text-slate-400 group-hover:text-slate-300 transition-colors" />
                <span className="flex-1 text-sm font-semibold">Search blog posts...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 rounded border border-slate-600 bg-slate-800 px-2 py-0.5 text-xs font-mono text-slate-400">
                  <span className="text-[10px]">⌘</span>K
                </kbd>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <div className="py-24 relative overflow-hidden bg-black">
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

