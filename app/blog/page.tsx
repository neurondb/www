import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock, User, Tag, Eye, ThumbsUp, MessageCircle, TrendingUp, BookOpen, Code, Database, Server, Zap, Award, Globe, Users } from 'lucide-react'
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
      {/* Unified Professional Hero */}
      <section
        className="relative text-center overflow-hidden flex items-center h-[400px] pt-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        <div className="container-extra-wide mx-auto relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Blog</h1>
            <p className="text-lg md:text-xl font-normal text-slate-300 mb-6 max-w-2xl mx-auto">
              Tutorials and updates about NeuronDB
            </p>

            {/* Blog Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              {blogStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-thin text-white">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
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

