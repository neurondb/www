import React from 'react'
import { Download, Github, Terminal, Code, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Download NeuronDB - PostgreSQL AI Extension | Free Download',
  description: 'Download NeuronDB - AI Database Extension for PostgreSQL. Get vector search, ML inference, GPU acceleration, and RAG capabilities. Available for Linux, macOS, and Windows. Free and open source.',
  keywords: ['download NeuronDB', 'PostgreSQL extension download', 'vector database download', 'AI database download', 'NeuronDB installation', 'PostgreSQL AI extension', 'free download', 'open source'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'Download NeuronDB - PostgreSQL AI Extension | Free Download',
    description: 'Download NeuronDB - AI Database Extension for PostgreSQL with vector search, ML inference, GPU acceleration, and RAG capabilities.',
    url: 'https://neurondb.ai/download',
    siteName: 'NeuronDB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download NeuronDB - PostgreSQL AI Extension',
    description: 'Download NeuronDB - AI Database Extension for PostgreSQL with vector search, ML inference, and GPU acceleration.',
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/download',
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

export default function DownloadPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1f2937' }}>
      <HeroTemplate height="default" className="text-white text-center pt-20">
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Download NeuronDB
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Get the latest version of NeuronDB - AI Database Extension for PostgreSQL
            </p>
          </div>
        </div>
      </HeroTemplate>

      <section className="py-24" style={{ backgroundColor: '#1f2937' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download NeuronDB
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Get the latest version of NeuronDB
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <Link
              href={`${siteConfig.github}/archive/refs/heads/main.tar.gz`}
              className="flex items-center justify-between p-6 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-lg border border-indigo-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Code className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">Source Code (tar.gz)</div>
                  <div className="text-sm text-white/70">Latest from GitHub</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={`${siteConfig.github}/archive/refs/heads/main.zip`}
              className="flex items-center justify-between p-6 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-lg border border-indigo-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Code className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">Source Code (zip)</div>
                  <div className="text-sm text-white/70">Latest from GitHub</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/docs/getting-started"
              className="flex items-center justify-between p-6 bg-yellow-600/20 hover:bg-yellow-600/30 rounded-lg border border-yellow-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Terminal className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">Installation Guide</div>
                  <div className="text-sm text-white/70">Get started quickly</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-slate-600/20 hover:bg-slate-600/30 rounded-lg border border-slate-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-slate-400" />
                <div>
                  <div className="text-white font-semibold text-lg">GitHub Repository</div>
                  <div className="text-sm text-white/70">View source code and contribute</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-white/70">PostgreSQL:</span>
                <span className="text-white ml-2">16, 17, or 18</span>
              </div>
              <div>
                <span className="text-white/70">OS:</span>
                <span className="text-white ml-2">Linux, macOS</span>
              </div>
              <div>
                <span className="text-white/70">GPU (Optional):</span>
                <span className="text-white ml-2">CUDA 11.0+, ROCm, or Metal</span>
              </div>
              <div>
                <span className="text-white/70">Build Tools:</span>
                <span className="text-white ml-2">GCC/Clang, Make, CMake</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterTemplate />
    </div>
  )
}

