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
      {/* Professional Hero */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[520px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Subtle background effect */}
        <div className="absolute inset-0 neuron-tech-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-16">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 text-xs text-slate-300 mb-6 animate-fade-in-up">
              <CloudDownload className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-semibold">Download</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Get Started</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
              Download
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
                NeuronDB
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Get the latest version of NeuronDB for PostgreSQL. Choose from Docker images, native packages, or build from source.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-10 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2">
                <Container className="w-4 h-4 text-blue-400" />
                <span className="font-mono font-semibold text-slate-200">Docker</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-cyan-400" />
                <span className="font-mono font-semibold text-slate-200">DEB/RPM</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-indigo-400" />
                <span className="font-mono font-semibold text-slate-200">Source</span>
              </div>
            </div>

            {/* Quick Start CTA */}
            <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/docs/neurondb/getting-started/docker"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-6 py-3.5 text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-xl group whitespace-nowrap"
              >
                Quick Start Guide
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Quickstart Code Snippet */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-700 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-900/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs font-mono text-slate-400">Terminal</div>
              </div>
              <pre className="px-5 py-4 text-sm font-mono overflow-x-auto">
                <code className="text-slate-200">
                  <span className="text-green-400">$</span> docker run -d --name neurondb \
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8">-e POSTGRES_PASSWORD=postgres \</span>
                  <br className="hidden sm:block" />
                  <span className="ml-6 sm:ml-8">neurondb/neurondb:latest</span>
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

