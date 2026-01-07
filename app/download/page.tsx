import React from 'react'
import { Download, Github, Terminal, Code, FileText, ArrowRight, Package, Container } from 'lucide-react'
import Link from 'next/link'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Download NeuronDB - PostgreSQL AI Extension | Free Download',
  description: 'Download NeuronDB for PostgreSQL. Get vector search, ML inference, GPU acceleration, and RAG capabilities. Available for Linux and macOS. Free and open source.',
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
    <div className="min-h-screen bg-slate-800 dark:bg-slate-900">
      <HeroTemplate height="default" className="text-white text-center pt-20">
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Download NeuronDB
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Get the latest version of NeuronDB for PostgreSQL
            </p>
          </div>
        </div>
      </HeroTemplate>

      <section className="py-24 bg-slate-800 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download NeuronDB
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
              Get the latest version of NeuronDB
            </p>
            <div className="max-w-3xl mx-auto p-6 bg-slate-700/50 rounded-lg border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-4">Choose Your Version</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-slate-800/50 rounded border border-slate-600/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-600/30 text-green-300 text-xs font-semibold rounded">STABLE</span>
                    <span className="text-white font-semibold">Version 1.0</span>
                  </div>
                  <p className="text-sm text-white/70 mb-3">Production-ready stable release</p>
                  <p className="text-xs text-white/60 mb-2"><strong>Branch:</strong> <code className="bg-slate-900/50 px-1 rounded">REL1_STABLE</code></p>
                  <p className="text-xs text-white/60">Recommended for production deployments</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded border border-yellow-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-600/30 text-yellow-300 text-xs font-semibold rounded">LATEST</span>
                    <span className="text-white font-semibold">Version 2.0</span>
                  </div>
                  <p className="text-sm text-white/70 mb-3">Latest features and improvements</p>
                  <p className="text-xs text-white/60 mb-2"><strong>Branch:</strong> <code className="bg-slate-900/50 px-1 rounded">main</code></p>
                  <p className="text-xs text-white/60">Includes latest enhancements and bug fixes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {/* Docker Images - Recommended */}
            <div className="flex items-center justify-between p-6 bg-yellow-600/20 hover:bg-yellow-600/30 rounded-lg border border-yellow-500/30 transition-colors group">
              <div className="flex items-center gap-4">
                <Container className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">Docker Images (Recommended)</div>
                  <div className="text-sm text-white/70">Pre-built images from GitHub Container Registry (GHCR)</div>
                </div>
              </div>
              <Link
                href="/docs/getting-started/docker"
                className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
              >
                View Guide →
              </Link>
            </div>

            {/* DEB Packages */}
            <div className="flex items-center justify-between p-6 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-lg border border-indigo-500/30 transition-colors group">
              <div className="flex items-center gap-4">
                <Package className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">DEB Packages</div>
                  <div className="text-sm text-white/70">Ubuntu/Debian packages (.deb)</div>
                </div>
              </div>
              <Link
                href={`${siteConfig.github}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
              >
                Download →
              </Link>
            </div>

            {/* RPM Packages */}
            <div className="flex items-center justify-between p-6 bg-indigo-600/20 hover:bg-indigo-600/30 rounded-lg border border-indigo-500/30 transition-colors group">
              <div className="flex items-center gap-4">
                <Package className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">RPM Packages</div>
                  <div className="text-sm text-white/70">Rocky Linux/RHEL packages (.rpm)</div>
                </div>
              </div>
              <Link
                href={`${siteConfig.github}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
              >
                Download →
              </Link>
            </div>

            {/* Source Code */}
            <div className="space-y-3">
              <div className="p-4 bg-slate-700/30 rounded border border-slate-600/50">
                <div className="text-sm text-white/80 mb-3 font-medium">Source Code Downloads</div>
                <div className="space-y-2">
                  <Link
                    href={`${siteConfig.github}/archive/refs/heads/main.tar.gz`}
                    className="flex items-center justify-between p-4 bg-slate-600/20 hover:bg-slate-600/30 rounded border border-slate-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">Version 2.0 (main branch)</div>
                        <div className="text-xs text-white/60">Latest features and improvements</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`${siteConfig.github}/archive/refs/heads/REL1_STABLE.tar.gz`}
                    className="flex items-center justify-between p-4 bg-slate-600/20 hover:bg-slate-600/30 rounded border border-slate-500/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-white font-medium">Version 1.0 (REL1_STABLE branch)</div>
                        <div className="text-xs text-white/60">Stable production release</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <Link
              href="/docs/getting-started"
              className="flex items-center justify-between p-6 bg-slate-600/20 hover:bg-slate-600/30 rounded-lg border border-slate-500/30 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Terminal className="w-6 h-6 text-slate-400" />
                <div>
                  <div className="text-white font-semibold text-lg">Installation Guide</div>
                  <div className="text-sm text-white/70">Complete installation instructions</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* GitHub Repository */}
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

          {/* Installation Methods Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Container className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Docker Images</h3>
              </div>
              <p className="text-sm text-white/70 mb-3">
                Pre-built Docker images from GitHub Container Registry (GHCR). Includes all ecosystem components with GPU support.
              </p>
              <ul className="text-xs text-white/60 space-y-1 mb-4">
                <li>• CPU, CUDA, ROCm, Metal variants</li>
                <li>• PostgreSQL 16, 17, 18</li>
                <li>• Complete ecosystem included</li>
              </ul>
              <Link
                href="/docs/getting-started/docker"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                Docker Guide →
              </Link>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">DEB/RPM Packages</h3>
              </div>
              <p className="text-sm text-white/70 mb-3">
                Native packages for Ubuntu/Debian (DEB) and Rocky Linux/RHEL (RPM). Easy installation with package managers.
              </p>
              <ul className="text-xs text-white/60 space-y-1 mb-4">
                <li>• DEB for Ubuntu/Debian</li>
                <li>• RPM for Rocky Linux/RHEL</li>
                <li>• Versioned releases</li>
              </ul>
              <Link
                href={`${siteConfig.github}/releases`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                View Releases →
              </Link>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Source Build</h3>
              </div>
              <p className="text-sm text-white/70 mb-3">
                Build from source for production deployments, custom builds, or development. Requires build tools and dependencies.
              </p>
              <ul className="text-xs text-white/60 space-y-1 mb-4">
                <li>• Full control over build</li>
                <li>• Custom GPU support</li>
                <li>• Development setup</li>
              </ul>
              <Link
                href="/docs/installation"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                Build Guide →
              </Link>
            </div>
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

