'use client'

import React from 'react'
import { Github, MessageCircle, Users, BookOpen, ArrowRight, UserPlus } from 'lucide-react'
import Link from 'next/link'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Beautiful Professional Hero */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[600px] flex items-center pt-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Enhanced animated gradient background */}
        <div className="absolute inset-0 neuron-tech-bg opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-green-950/20 to-teal-950/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-950"></div>
        
        {/* Floating animated orbs */}
        <div className="absolute top-10 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-4xl text-center w-full">
            {/* Badge with glow effect */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 backdrop-blur-sm px-5 py-2 text-xs text-slate-200 mb-8 animate-fade-in-up shadow-lg shadow-emerald-500/20">
              <UserPlus className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="font-semibold">Community</span>
              <span className="text-slate-500">•</span>
              <span className="font-mono text-emerald-300">Join Us</span>
            </div>

            {/* Main Title with enhanced gradient */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 animate-slide-up leading-none">
              <span className="block drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 via-teal-400 to-cyan-400 animate-gradient">
                Community
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Connect with developers, users, and contributors. Share knowledge, get help, and contribute to NeuronDB.
            </p>

            {/* Enhanced Quick Links with glow effects */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mb-12 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Github className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                <span className="font-semibold text-slate-200">GitHub</span>
              </Link>
              <Link href="/docs" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-green-500/20 hover:border-green-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <BookOpen className="w-5 h-5 text-green-400 group-hover:text-green-300 transition-colors" />
                <span className="font-semibold text-slate-200">Documentation</span>
              </Link>
              <Link href="/blog" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-teal-500/20 hover:border-teal-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <MessageCircle className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
                <span className="font-semibold text-slate-200">Blog</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900/50 border border-cyan-500/20 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 group shadow-lg">
                <Users className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span className="font-semibold text-slate-200">Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
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
