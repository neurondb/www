'use client'

import React from 'react'
import { Github, MessageCircle, Users, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export default function CommunityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1f2937' }}>
      <HeroTemplate height="default" className="text-white text-center pt-20">
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              Community
            </h1>
            <p className="text-lg md:text-xl font-normal text-white mb-6 max-w-2xl mx-auto drop-shadow-lg">
              Join our growing community of developers, users, and contributors
            </p>
          </div>
        </div>
      </HeroTemplate>

      <section className="py-24" style={{ backgroundColor: '#1f2937' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">GitHub</h2>
              <p className="text-white/80 mb-4">
                Contribute to NeuronDB, report issues, and request features
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
              <h2 className="text-2xl font-bold text-white mb-4">Documentation</h2>
              <p className="text-white/80 mb-4">
                Browse our comprehensive documentation and guides
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
              <h2 className="text-2xl font-bold text-white mb-4">Blog</h2>
              <p className="text-white/80 mb-4">
                Read the latest updates, tutorials, and technical insights
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
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p className="text-white/80 mb-4">
                Get in touch with our team for support and questions
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
