'use client'

import React from 'react'
import Link from 'next/link'
import { Download, Github, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { trackEvent } from '@/lib/analytics'

export default function EndOfPageCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-in-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-gradient">
          Ready to get started?
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Install NeuronDB in minutes and start building AI applications with PostgreSQL
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/docs/neurondb/getting-started"
            onClick={() => trackEvent('cta_click', { category: 'EndOfPage', action: 'install', label: '/docs/neurondb/getting-started', cta_location: 'end_of_page' })}
            className="group px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-glow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-800 btn-professional"
          >
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
            <span>Install Now</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cta_click', { category: 'EndOfPage', action: 'github', label: siteConfig.github, cta_location: 'end_of_page' })}
            className="group px-8 py-3.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-professional-lg hover:scale-105 active:scale-95 border border-slate-600 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-800"
          >
            <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>View on GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

