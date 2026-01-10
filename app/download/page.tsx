import React from 'react'
import { Download, Github, Terminal, Code, FileText, ArrowRight, Package, Container, CloudDownload } from 'lucide-react'
import Link from 'next/link'
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Beautiful Professional Hero */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[600px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Enhanced animated gradient background */}
        <div className="absolute inset-0 neuron-tech-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-cyan-950/20 to-indigo-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(59,130,246,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950"></div>
        
        {/* Floating animated orbs */}
        <div className="absolute top-10 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-sm px-5 py-2 text-xs text-slate-200 mb-8 animate-fade-in-up shadow-lg shadow-blue-500/20">
              <CloudDownload className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="font-semibold">Download</span>
              <span className="text-slate-500">•</span>
              <span className="font-mono text-blue-300">Get Started</span>
            </div>

            {/* Main Title with enhanced gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 animate-slide-up leading-none">
              <span className="block drop-shadow-2xl">Download</span>
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 via-indigo-400 to-purple-400 animate-gradient">
                NeuronDB
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Get the latest version of NeuronDB for PostgreSQL. Choose from Docker images, native packages, or build from source.
            </p>

            {/* Quick Stats with glow effects */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-12 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-blue-500/20 hover:border-blue-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Container className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="font-mono font-bold text-slate-100 text-base">Docker</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Package className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-mono font-bold text-slate-100 text-base">DEB/RPM</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-indigo-500/20 hover:border-indigo-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Code className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="font-mono font-bold text-slate-100 text-base">Source</span>
              </div>
            </div>

            {/* Enhanced Quick Start CTA */}
            <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white px-7 py-3.5 text-sm font-bold hover:from-blue-400 hover:via-cyan-400 hover:to-indigo-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 group whitespace-nowrap relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative">Quick Start Guide</span>
                <ArrowRight className="w-4 h-4 relative transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Enhanced Quickstart Code Snippet */}
            <div className="rounded-xl border border-blue-500/30 bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/90 backdrop-blur-md text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 hover:scale-[1.01] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between px-4 py-3 border-b border-blue-500/20 bg-gradient-to-r from-slate-900/80 to-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-blue-300 font-semibold">Terminal</div>
              </div>
              <pre className="px-5 py-4 text-sm font-mono overflow-x-auto bg-slate-950/50">
                <code className="text-slate-200">
                  <span className="text-green-400 font-semibold">$</span> docker run -d --name neurondb \
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8 text-slate-300">-e POSTGRES_PASSWORD=postgres \</span>
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8 text-blue-300">neurondb/neurondb:latest</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Download NeuronDB
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
              Latest version of NeuronDB
            </p>
            <div className="max-w-3xl mx-auto p-6 bg-slate-800 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">Choose Your Version</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="p-4 bg-slate-900 rounded border border-slate-700">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs font-semibold rounded">STABLE</span>
                    <span className="text-white font-semibold">Version 1.0.0</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-3">Stable production release</p>
                  <p className="text-xs text-slate-400 mb-2"><strong>Branch:</strong> <code className="bg-slate-800 px-1 rounded">REL1_STABLE</code></p>
                  <p className="text-xs text-slate-400 mb-2"><strong>Status:</strong> Stable production release</p>
                  <p className="text-xs text-slate-400">For production deployments requiring maximum stability</p>
                </div>
                <div className="p-4 bg-slate-900 rounded border border-yellow-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-yellow-900/30 text-yellow-300 text-xs font-semibold rounded">LATEST</span>
                    <span className="text-white font-semibold">Version 2.0.0</span>
                  </div>
                  <p className="text-sm text-slate-300 mb-3">Latest features and improvements</p>
                  <p className="text-xs text-slate-400 mb-2"><strong>Branch:</strong> <code className="bg-slate-800 px-1 rounded">main</code></p>
                  <p className="text-xs text-slate-400 mb-2"><strong>Status:</strong> Latest development (default)</p>
                  <p className="text-xs text-slate-400">Latest enhancements, bug fixes, and new features</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-12">
            {/* Docker Images */}
            <div className="flex items-center justify-between p-6 bg-yellow-900/20 hover:bg-yellow-900/30 rounded-lg border border-yellow-500/30 transition-colors group">
              <div className="flex items-center gap-4">
                <Container className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">Docker Images</div>
                  <div className="text-sm text-slate-300">Pre-built images from GitHub Container Registry (GHCR)</div>
                </div>
              </div>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors"
              >
                View Guide →
              </Link>
            </div>

            {/* DEB Packages */}
            <div className="flex items-center justify-between p-6 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors group">
              <div className="flex items-center gap-4">
                <Package className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">DEB Packages</div>
                  <div className="text-sm text-slate-300">Ubuntu/Debian packages (.deb)</div>
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
            <div className="flex items-center justify-between p-6 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors group">
              <div className="flex items-center gap-4">
                <Package className="w-6 h-6 text-yellow-400" />
                <div>
                  <div className="text-white font-semibold text-lg">RPM Packages</div>
                  <div className="text-sm text-slate-300">Rocky Linux/RHEL packages (.rpm)</div>
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
              <div className="p-4 bg-slate-800 rounded border border-slate-700">
                <div className="text-sm text-white mb-3 font-medium">Source Code Downloads</div>
                <div className="space-y-2">
                  <Link
                    href={`${siteConfig.github}/archive/refs/heads/main.tar.gz`}
                    className="flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-800 rounded border border-slate-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">Version 2.0.0 (main branch)</div>
                        <div className="text-xs text-slate-400">Latest features and improvements</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`${siteConfig.github}/archive/refs/heads/REL1_STABLE.tar.gz`}
                    className="flex items-center justify-between p-4 bg-slate-900 hover:bg-slate-800 rounded border border-slate-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="text-white font-medium">Version 1.0.0 (REL1_STABLE branch)</div>
                        <div className="text-xs text-slate-400">Stable production release</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Installation Guide */}
            <Link
              href="/docs/neurondb/getting-started"
              className="flex items-center justify-between p-6 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Terminal className="w-6 h-6 text-slate-300" />
                <div>
                  <div className="text-white font-semibold text-lg">Installation Guide</div>
                  <div className="text-sm text-slate-300">Complete installation instructions</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* GitHub Repository */}
            <Link
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <Github className="w-6 h-6 text-slate-300" />
                <div>
                  <div className="text-white font-semibold text-lg">GitHub Repository</div>
                  <div className="text-sm text-slate-300">View source code and contribute</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Installation Methods Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Container className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Docker Images</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">
                Pre-built Docker images from GitHub Container Registry (GHCR). Includes all ecosystem components with GPU support.
              </p>
              <ul className="text-xs text-slate-400 space-y-1 mb-4">
                <li>• CPU, CUDA, ROCm, Metal variants</li>
                <li>• PostgreSQL 16, 17, 18</li>
                <li>• Complete ecosystem included</li>
              </ul>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                Docker Guide →
              </Link>
            </div>

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">DEB/RPM Packages</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">
                Native packages for Ubuntu/Debian (DEB) and Rocky Linux/RHEL (RPM). Easy installation with package managers.
              </p>
              <ul className="text-xs text-slate-400 space-y-1 mb-4">
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

            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-3">
                <Code className="w-6 h-6 text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Source Build</h3>
              </div>
              <p className="text-sm text-slate-300 mb-3">
                Build from source for production deployments, custom builds, or development. Requires build tools and dependencies.
              </p>
              <ul className="text-xs text-slate-400 space-y-1 mb-4">
                <li>• Full control over build</li>
                <li>• Custom GPU support</li>
                <li>• Development setup</li>
              </ul>
              <Link
                href="/docs/neurondb/installation"
                className="text-yellow-400 hover:text-yellow-300 text-sm font-medium"
              >
                Build Guide →
              </Link>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold tracking-tight text-white mb-4">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-slate-300">PostgreSQL:</span>
                <span className="text-white ml-2">16, 17, or 18</span>
              </div>
              <div>
                <span className="text-slate-300">OS:</span>
                <span className="text-white ml-2">Linux, macOS</span>
              </div>
              <div>
                <span className="text-slate-300">GPU (Optional):</span>
                <span className="text-white ml-2">CUDA 11.0+, ROCm, or Metal</span>
              </div>
              <div>
                <span className="text-slate-300">Build Tools:</span>
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

