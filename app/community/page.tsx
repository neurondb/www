'use client'

import React from 'react'
import { Github, MessageCircle, Users, BookOpen, ArrowRight, UserPlus } from 'lucide-react'
import Link from 'next/link'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export default function CommunityPage() {
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
              <UserPlus className="w-3.5 h-3.5 text-green-400" />
              <span className="font-semibold">Community</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono">Join Us</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-slide-up">
              Community
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Connect with developers, users, and contributors. Share knowledge, get help, and contribute to NeuronDB.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 mb-10 text-sm text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Link href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors">
                <Github className="w-4 h-4 text-green-400" />
                <span className="font-semibold">GitHub</span>
              </Link>
              <Link href="/docs" className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors">
                <BookOpen className="w-4 h-4 text-green-400" />
                <span className="font-semibold">Documentation</span>
              </Link>
              <Link href="/blog" className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <span className="font-semibold">Blog</span>
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-slate-300 hover:text-green-400 transition-colors">
                <Users className="w-4 h-4 text-green-400" />
                <span className="font-semibold">Contact</span>
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
