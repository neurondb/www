'use client'

/**
 * Product Page Template
 * 
 * Unified product page template using theme configuration.
 * Replaces ProjectTemplate with theme-aware components.
 */

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Github } from 'lucide-react'
import HeroTemplate from '@/components/templates/HeroTemplate'
import SectionTemplate from '@/components/templates/SectionTemplate'
import FooterTemplate from '@/components/templates/FooterTemplate'
import { getProductTheme, type ProductId } from '@/config/theme'
import { getProduct } from '@/config/products'
import { FeatureCard, DocCard, CardGrid } from '@/components/ui/cards'
import { PrimaryButtonLink, SecondaryButtonLink } from '@/components/ui/buttons'
import { getProductIcon } from '@/components/ProductIcons'
import NeuronDBHeroArt from '@/components/product/NeuronDBHeroArt'
import NeuronMCPHeroArt from '@/components/product/NeuronMCPHeroArt'
import NeuronAgentHeroArt from '@/components/product/NeuronAgentHeroArt'
import NeuronDesktopHeroArt from '@/components/product/NeuronDesktopHeroArt'

// ============================================================================
// TYPES
// ============================================================================

export interface ProductPageTemplateProps {
  productId: ProductId
  hero: {
    title?: string | React.ReactNode
    subtitle?: string
    icon?: React.ReactNode
    customContent?: React.ReactNode
  }
  badges?: string[]
  demo?: React.ReactNode
  componentCards?: Array<{
    title: string
    description: string[]
    href: string
    icon?: React.ReactNode
  }>
  architecture?: React.ReactNode | {
    title?: string
    subtitle?: string
    content: React.ReactNode
  }
  dashboard?: React.ReactNode
  featurePillars?: {
    kicker?: string
    items: Array<{ title: string; desc: string | string[] }>
  }
  features?: Array<{
    icon?: React.ReactNode
    iconColor?: string
    title: string
    desc: string
  }>
  featureMatrix?: React.ReactNode | {
    title?: string
    subtitle?: string
    content: React.ReactNode
  }
  featureComparison?: React.ReactNode | {
    title?: string
    subtitle?: string
    content: React.ReactNode
  }
  docsLinks?: Array<{ href: string; title: string; desc: string; external?: boolean }>
  ctaSection?: {
    kicker?: string
    title: string
    description?: string
    primaryCTA: { href: string; label: string; external?: boolean }
    secondaryCTA?: { href: string; label: string; external?: boolean }
  }
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function ProductPageTemplate({
  productId,
  hero,
  badges,
  demo,
  componentCards,
  architecture,
  dashboard,
  featurePillars,
  features,
  featureMatrix,
  featureComparison,
  docsLinks,
  ctaSection,
}: ProductPageTemplateProps) {
  const product = getProduct(productId)
  if (!product) {
    throw new Error(`Product ${productId} not found`)
  }
  const theme = getProductTheme(productId)
  const ProductIcon = getProductIcon(productId)

  // Default hero title if not provided
  const heroTitle = hero.title || (
    <>
      {product.displayName}: {product.tagline}
    </>
  )


  // Get quickstart command based on product
  const getQuickstartCommand = () => {
    switch (productId) {
      case 'neurondb':
        return 'CREATE EXTENSION neurondb;'
      case 'neuronmcp':
        return './neurondb-mcp --help'
      case 'neuronagent':
        return 'curl http://localhost:8080/api/v1/health'
      case 'neurondesktop':
        return 'npm run dev'
      default:
        return 'CREATE EXTENSION neurondb;'
    }
  }

  // Get technical facts based on product badges
  const technicalFacts = badges?.slice(0, 4) || product.badges?.slice(0, 4) || []

  // Get hero art component for each product
  const getHeroArt = () => {
    if (hero.icon) {
      return hero.icon
    }
    if (hero.customContent) {
      return hero.customContent
    }
    switch (productId) {
      case 'neurondb':
        return (
          <div className="relative w-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <Image
              src="/n-db.png"
              alt={`${product.displayName}: ${product.tagline}`}
              width={600}
              height={600}
              className="w-full h-auto max-w-[500px] transition-transform duration-500"
              priority
            />
          </div>
        )
      case 'neuronmcp':
        return (
          <div className="relative w-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <Image
              src="/n-mcp.png"
              alt={`${product.displayName}: ${product.tagline}`}
              width={600}
              height={600}
              className="w-full h-auto max-w-[500px] transition-transform duration-500"
              priority
            />
          </div>
        )
      case 'neuronagent':
        return (
          <div className="relative w-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <Image
              src="/n-agent.png"
              alt={`${product.displayName}: ${product.tagline}`}
              width={600}
              height={600}
              className="w-full h-auto max-w-[500px] transition-transform duration-500"
              priority
            />
          </div>
        )
      case 'neurondesktop':
        return <NeuronDesktopHeroArt size={280} className="text-slate-600 dark:text-slate-400 transition-all duration-500 hover:scale-110 hover:rotate-3" />
      default:
        return ProductIcon ? <ProductIcon size={120} /> : null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section - Matching Home Hero Style */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-[480px] md:min-h-[500px] flex items-center pt-20">
        {/* Subtle clean background */}
        <div className="absolute inset-0 neuron-tech-bg dark:neuron-tech-bg"></div>
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-xs text-slate-300">
                <span className="font-mono">{product.name.toUpperCase()}</span>
                <span className="text-slate-600">/</span>
                <span className="font-mono">{product.category}</span>
              </div>

              <div className="mt-5 flex items-center gap-4">
                <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                  {typeof heroTitle === 'string' ? heroTitle : product.displayName}
                </h1>
                {ProductIcon && (
                  <div className="hidden sm:block flex-shrink-0 -mt-4 opacity-80 hover:opacity-100 transition-opacity text-slate-400">
                    <ProductIcon size={80} />
                  </div>
                )}
              </div>
              <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-300 max-w-xl">
                {hero.subtitle || product.description}
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href={product.docsUrl || '/docs'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Start
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href={product.docsUrl || '/docs'}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-white bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Read docs
                </Link>
                <Link
                  href={product.githubUrl || 'https://github.com/neurondb-ai/neurondb'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 bg-slate-900/30 backdrop-blur-sm hover:bg-slate-900/50 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <Github className="w-4 h-4 transition-transform group-hover:rotate-12" />
                  GitHub
                </Link>
              </div>

              {/* Quickstart snippet */}
              <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                  <div className="text-xs font-mono text-slate-300">
                    {productId === 'neurondb' ? 'psql' : productId === 'neuronmcp' ? 'bash' : productId === 'neuronagent' ? 'curl' : 'bash'}
                  </div>
                  <div className="text-xs text-slate-400">Quickstart</div>
                </div>
                <pre className="px-4 py-4 text-sm font-mono overflow-x-auto">
                  <code>{getQuickstartCommand()}</code>
                </pre>
              </div>

              {/* Technical facts */}
              {technicalFacts.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400">
                  {technicalFacts.map((fact, idx) => (
                    <span key={idx} className="font-mono transition-all duration-300 hover:text-slate-200">{fact}</span>
                  ))}
                </div>
              )}
            </div>

            {/* Right: product visual/icon */}
            <div className="relative">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {ProductIcon && <ProductIcon size={24} className="text-slate-500 opacity-60" />}
                  <div className="text-xs font-semibold text-slate-300">{product.displayName}</div>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {product.category}
                </div>
              </div>
              <div className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center min-h-[400px]">
                <div className="p-8 w-full flex items-center justify-center">
                  {getHeroArt()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      {demo && (
        <SectionTemplate background="page" padding="lg">
          <div className="container-wide">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                NeuronDB A PostgreSQL AI-Extension Demo
              </h2>
              <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
            </div>
            <div className="max-w-7xl mx-auto">
              {demo}
            </div>
          </div>
        </SectionTemplate>
      )}

      {/* Component Cards Section */}
      {componentCards && componentCards.length > 0 && (
        <SectionTemplate background="page" padding="lg">
          <div className="container-wide">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                NeuronDB Ecosystem
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-4">
                Complete AI database platform with core engine and runtime components
              </p>
              <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {componentCards.map((card, index) => (
                <Link
                  key={index}
                  href={card.href}
                  className="group bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      {card.icon && (
                        <div className="flex-shrink-0">
                          {card.icon}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {card.title}
                      </h3>
                    </div>
                    <ul className="flex-1 space-y-2 mb-4">
                      {card.description.map((line, i) => (
                        <li key={i} className="text-slate-300 text-sm leading-relaxed flex items-start">
                          <span className="text-yellow-400 mr-2 flex-shrink-0">•</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto text-yellow-400 text-sm font-semibold group-hover:text-yellow-300 transition-colors">
                      Learn more →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </SectionTemplate>
      )}

      {/* Architecture Diagram */}
      {architecture && (
        <SectionTemplate background="page" padding="lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {typeof architecture === 'object' && 'content' in architecture ? (
              <>
                {(architecture.title || architecture.subtitle) && (
                  <div className="text-center mb-8">
                    {architecture.title && (
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {architecture.title}
                      </h2>
                    )}
                    {architecture.subtitle && (
                      <p className="text-lg text-white/90 max-w-3xl mx-auto mb-4">
                        {architecture.subtitle}
                      </p>
                    )}
                    <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
                  </div>
                )}
                <div className="w-full max-w-full overflow-x-auto">
                  {architecture.content}
                </div>
              </>
            ) : (
              <div className="w-full max-w-full overflow-x-auto">
                {architecture}
              </div>
            )}
          </div>
        </SectionTemplate>
      )}

      {/* Dashboard Section */}
      {dashboard && dashboard}

      {/* High-Level Feature Pillars */}
      {featurePillars && (
        <SectionTemplate background="page" padding="lg" className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              {featurePillars.kicker && (
                <div className={`text-xs tracking-wider font-semibold text-${theme.primaryColor} uppercase mb-2`}>
                  {featurePillars.kicker}
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Why {product.displayName}
              </h2>
              <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
            </div>
            <CardGrid columns={3} gap="md">
              {featurePillars.items.map((item, i) => (
                <FeatureCard
                  key={i}
                  title={item.title}
                  description={item.desc}
                  productId={productId}
                />
              ))}
            </CardGrid>
          </div>
        </SectionTemplate>
      )}

      {/* Feature Matrix */}
      {featureMatrix && (
        <SectionTemplate background="page" padding="lg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {typeof featureMatrix === 'object' && 'content' in featureMatrix ? (
              <>
                {(featureMatrix.title || featureMatrix.subtitle) && (
                  <div className="text-center mb-8">
                    {featureMatrix.title && (
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {featureMatrix.title}
                      </h2>
                    )}
                    {featureMatrix.subtitle && (
                      <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                        {featureMatrix.subtitle}
                      </p>
                    )}
                    <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
                  </div>
                )}
                {featureMatrix.content}
              </>
            ) : (
              featureMatrix
            )}
          </div>
        </SectionTemplate>
      )}

      {/* Feature Comparison */}
      {featureComparison && (
        <SectionTemplate background="page" padding="lg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {typeof featureComparison === 'object' && 'content' in featureComparison ? (
              <>
                {(featureComparison.title || featureComparison.subtitle) && (
                  <div className="text-center mb-8">
                    {featureComparison.title && (
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {featureComparison.title}
                      </h2>
                    )}
                    {featureComparison.subtitle && (
                      <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-4">
                        {featureComparison.subtitle}
                      </p>
                    )}
                    <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
                  </div>
                )}
                {featureComparison.content}
              </>
            ) : (
              featureComparison
            )}
          </div>
        </SectionTemplate>
      )}

      {/* Features Grid */}
      {features && features.length > 0 && (
        <SectionTemplate background="page" padding="lg">
          <div className="container-wide">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Key Features
              </h2>
              <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
            </div>
            <CardGrid columns={3} gap="md">
              {features.map((feature, i) => (
                <FeatureCard
                  key={i}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.desc}
                  productId={productId}
                />
              ))}
            </CardGrid>
          </div>
        </SectionTemplate>
      )}

      {/* Documentation Links */}
      {docsLinks && docsLinks.length > 0 && (
        <SectionTemplate background="page" padding="lg">
          <div className="container-wide">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Documentation
              </h2>
              <div className="mx-auto h-1 w-28 bg-slate-400 rounded" />
            </div>
            <CardGrid columns={3} gap="md">
              {docsLinks.map((link, i) => (
                <DocCard
                  key={i}
                  title={link.title}
                  description={link.desc}
                  href={link.href}
                  external={link.external}
                  productId={productId}
                />
              ))}
            </CardGrid>
          </div>
        </SectionTemplate>
      )}

      {/* CTA Section */}
      {ctaSection && (
        <SectionTemplate background="page" padding="lg">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              {ctaSection.kicker && (
                <div className={`text-xs tracking-wider font-semibold text-${theme.primaryColor} uppercase mb-2`}>
                  {ctaSection.kicker}
                </div>
              )}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                {ctaSection.title}
              </h2>
              {ctaSection.description && (
                <p className="text-lg text-white/90 mb-6">
                  {ctaSection.description}
                </p>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PrimaryButtonLink
                  href={ctaSection.primaryCTA.href}
                  external={ctaSection.primaryCTA.external}
                  size="lg"
                >
                  {ctaSection.primaryCTA.label}
                </PrimaryButtonLink>
                {ctaSection.secondaryCTA && (
                  <SecondaryButtonLink
                    href={ctaSection.secondaryCTA.href}
                    external={ctaSection.secondaryCTA.external}
                    size="lg"
                  >
                    {ctaSection.secondaryCTA.label}
                  </SecondaryButtonLink>
                )}
              </div>
            </div>
          </div>
        </SectionTemplate>
      )}

      {/* Footer */}
      <FooterTemplate />
    </div>
  )
}

