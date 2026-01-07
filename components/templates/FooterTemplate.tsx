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
    <footer
      className={cn(
        'bg-slate-900 dark:bg-slate-950 text-slate-300 border-t border-slate-800',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* NeuronDB Icon - Left Side */}
          <div className="flex items-center justify-center md:justify-start">
            <Image 
              src="/favicons/neurondb_ai_clean.png" 
              alt={siteConfig.name} 
              width={128}
              height={128}
              className="w-32 h-32 object-contain"
              unoptimized
            />
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {brandingConfig.social.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-slate-400 mb-4">
              {siteConfig.description}
            </p>
            <p className="text-sm text-slate-500">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
