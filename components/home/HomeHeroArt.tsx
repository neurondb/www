'use client'

import React from 'react'
import Image from 'next/image'

/**
 * Hero artwork: AI-generated image showcasing NeuronDB, NeuronAgent, and NeuronMCP ecosystem
 */
export default function HomeHeroArt() {
  return (
    <div className="relative w-full">
      {/* Background with gradient */}
      <div className="relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 overflow-hidden shadow-lg">
        {/* Hero artwork image */}
        <div className="relative w-full h-auto">
          <Image
            src="/hero.png"
            alt="NeuronDB ecosystem: NeuronDB, NeuronAgent, and NeuronMCP"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

