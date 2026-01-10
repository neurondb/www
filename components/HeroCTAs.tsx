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
        href="/docs/neurondb/getting-started"
        onClick={() => trackEvent('cta_click', { category: 'Homepage', action: 'install', label: '/docs/neurondb/getting-started', cta_location: 'hero' })}
        className="group btn-professional px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'var(--primary)',
          color: '#ffffff',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <Download className="w-5 h-5 transition-transform group-hover:translate-y-[-2px]" />
        <span>Install Now</span>
      </Link>
      <Link
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('cta_click', { category: 'Homepage', action: 'github', label: siteConfig.github, cta_location: 'hero' })}
        className="group px-8 py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2 border transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'var(--background)',
          borderColor: 'var(--border)',
          color: 'var(--text-primary)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <Github className="w-5 h-5 transition-transform group-hover:rotate-12" />
        <span>View on GitHub</span>
      </Link>
    </div>
  )
}
