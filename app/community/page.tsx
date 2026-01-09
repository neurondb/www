'use client'

import React from 'react'
import { Github, MessageCircle, Users, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import HeroTemplate from '@/components/templates/HeroTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { siteConfig } from '@/config/site'

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <HeroTemplate height="default" className="text-center pt-20">
        <div className="container-extra-wide relative z-10 w-full">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">
              Community
            </h1>
            <p className="text-lg md:text-xl font-normal text-slate-600 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
              Developers, users, and contributors
            </p>
          </div>
        </div>
      </HeroTemplate>

      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">GitHub</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Contribute to NeuronDB. Report issues and request features.
              </p>
              <Link
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 dark:text-yellow-400 hover:text-slate-700 dark:hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                {siteConfig.github}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Documentation</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Documentation and guides
              </p>
              <Link
                href="/docs"
                className="text-slate-900 dark:text-yellow-400 hover:text-slate-700 dark:hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                View Documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Blog</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Updates, tutorials, and technical insights
              </p>
              <Link
                href="/blog"
                className="text-slate-900 dark:text-yellow-400 hover:text-slate-700 dark:hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
              >
                View Blog
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Contact</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Contact the team for support and questions
              </p>
              <Link
                href="/contact"
                className="text-slate-900 dark:text-yellow-400 hover:text-slate-700 dark:hover:text-yellow-300 font-semibold transition-colors inline-flex items-center gap-2"
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
