'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { brandingConfig } from '@/config/branding'

export interface FooterTemplateProps {
  className?: string
}

/**
 * FooterTemplate - Reusable footer template
 * Footer with links, social media, and copyright
 */
export default function FooterTemplate({
  className,
}: FooterTemplateProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('bg-black border-t border-slate-800', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/demos" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Demos
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/docs/neurondb/troubleshooting" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Developers
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/docs/neurondb/getting-started" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/neurondb/sql-api" className="text-sm text-slate-400 hover:text-white transition-colors">
                  SQL API
                </Link>
              </li>
              <li>
                <Link href="/docs/neurondb/deployment/kubernetes" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Kubernetes
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/neurondb-ai/neurondb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  GitHub
                  <span className="text-xs">↗</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/neurondb" className="text-sm text-slate-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              {brandingConfig.social.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {social.name}
                    <span className="text-xs">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/favicons/neurondb_ai_clean.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                unoptimized
              />
              <span className="text-sm font-semibold text-white">
                {siteConfig.name}
              </span>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <span>© {currentYear} {siteConfig.name}</span>
              <span>•</span>
              <span>PostgreSQL AI Extension</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
