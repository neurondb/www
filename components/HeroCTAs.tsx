'use client'

import React from 'react'
import Link from 'next/link'
import { Download, Github } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { trackEvent } from '@/lib/analytics'

export default function HeroCTAs() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
      <Link
        href="/docs/getting-started"
        onClick={() => trackEvent('cta_click', { category: 'Homepage', action: 'install', label: '/docs/getting-started', cta_location: 'hero' })}
        className="group px-8 py-3.5 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-glow-lg hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-900 btn-professional"
      >
        <Download className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
        <span>Install Now</span>
      </Link>
      <Link
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('cta_click', { category: 'Homepage', action: 'github', label: siteConfig.github, cta_location: 'hero' })}
        className="group px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-professional-lg hover:scale-105 active:scale-95 border border-slate-700 hover:border-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
        <span>View on GitHub</span>
      </Link>
    </div>
  )
}

