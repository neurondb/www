'use client'

import React from 'react'
import { ArrowRight, UserPlus } from 'lucide-react'
import Link from 'next/link'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export default function CommunityPage() {
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
              <UserPlus className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold">Community</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Join Us</span>
            </div>

            {/* Main Title - Exact Homepage Style */}
            <div className="mt-5 animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                Community
              </h1>
            </div>

            {/* Description - Exact Homepage Style */}
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Connect with developers, users, and contributors. Share knowledge, get help, and contribute to NeuronDB.
            </p>

            {/* Quick Links - Exact Homepage Style */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="font-mono transition-all duration-300 hover:text-slate-200">
                GitHub
              </Link>
              <Link href="/docs" className="font-mono transition-all duration-300 hover:text-slate-200">
                Documentation
              </Link>
              <Link href="/blog" className="font-mono transition-all duration-300 hover:text-slate-200">
                Blog
              </Link>
              <Link href="/contact" className="font-mono transition-all duration-300 hover:text-slate-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">GitHub</h2>
              <p className="text-slate-300 mb-4">
                Contribute to NeuronDB. Report issues and request features.
              </p>
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                {siteConfig.github}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Documentation</h2>
              <p className="text-slate-300 mb-4">
                Documentation and guides
              </p>
              <Link
                href="/docs"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                View Documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Blog</h2>
              <p className="text-slate-300 mb-4">
                Updates, tutorials, and technical insights
              </p>
              <Link
                href="/blog"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                View Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
              <p className="text-slate-300 mb-4">
                Contact the team for support and questions
              </p>
              <Link
                href="/contact"
                className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FooterTemplate />
    </div>
  )
}
