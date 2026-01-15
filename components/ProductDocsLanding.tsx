'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import FooterTemplate from '@/components/templates/FooterTemplate'

interface CTAButton {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  external?: boolean
  variant?: 'primary' | 'secondary'
}

interface HeroConfig {
  badgeLabel: string
  badgeIcon?: ReactNode
  badgeGradient: string
  title: string
  description: string
  ctas?: CTAButton[]
}

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  href?: string
}

interface DocSectionItem {
  title: string
  href: string
  description: string
  external?: boolean
}

interface DocSection {
  title: string
  description: string
  items: DocSectionItem[]
}

interface QuickLink {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

interface ProductDocsLandingProps {
  hero: HeroConfig
  features: FeatureCard[]
  docSections: DocSection[]
  quickLinks: QuickLink[]
  theme?: Partial<LandingTheme>
}

interface LandingTheme {
  pageBackground: string
  heroOverlay: string
  badgeContainerBg: string
  badgeRing: string
  primaryButtonClass: string
  secondaryButtonClass: string
  featureCardClass: string
  featureIconClass: string
  docCardClass: string
  linkHoverClass: string
  quickLinkCardClass: string
  quickLinkIconClass: string
  quickLinkHoverLabelClass: string
}

const DEFAULT_THEME: LandingTheme = {
  pageBackground: '',
  heroOverlay: '',
  badgeContainerBg: 'bg-slate-800/80',
  badgeRing: 'ring-white/10',
  primaryButtonClass:
    'inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800',
  secondaryButtonClass:
    'inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white',
  featureCardClass: 'rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-sm',
  featureIconClass: 'text-yellow-400',
  docCardClass: 'rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-sm',
  linkHoverClass: 'hover:text-yellow-300',
  quickLinkCardClass:
    'rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-sm transition hover:border-yellow-300',
  quickLinkIconClass: 'text-yellow-400',
  quickLinkHoverLabelClass: 'text-yellow-400'
}

export default function ProductDocsLanding({ hero, features, docSections, quickLinks, theme }: ProductDocsLandingProps) {
  const themeClasses = { ...DEFAULT_THEME, ...theme }

  return (
    <div 
      className="min-h-screen bg-black"
    >
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden min-h-[400px] flex items-center pt-20 bg-black"
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full py-20">
          <div className="mx-auto max-w-3xl text-center w-full">
            {(hero.badgeIcon || hero.badgeLabel) && (
              <div className="mb-8 flex justify-center">
                <div
                  className={`relative rounded-2xl ${themeClasses.badgeContainerBg} p-2 shadow-2xl ring-1 ${themeClasses.badgeRing}`}
                >
                  <div className={`flex items-center space-x-2 rounded-xl bg-slate-700 px-4 py-2 text-white`}>
                    {hero.badgeIcon}
                    <span className="text-lg font-semibold">{hero.badgeLabel}</span>
                  </div>
                </div>
              </div>
            )}

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{hero.title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{hero.description}</p>

            {hero.ctas && hero.ctas.length > 0 ? (
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                {hero.ctas.map((cta) => {
                  const Component = cta.external ? 'a' : Link
                  const props = cta.external
                    ? { href: cta.href, target: '_blank', rel: 'noopener noreferrer' }
                    : { href: cta.href }
                  const className = cta.variant === 'secondary' ? themeClasses.secondaryButtonClass : themeClasses.primaryButtonClass

                  const Icon = cta.icon
                  return (
                    <Component key={cta.href} {...props} className={className}>
                      {Icon && <Icon className="h-4 w-4" />}
                      {cta.label}
                    </Component>
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      {features.length > 0 ? (
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-white">Key Capabilities</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, description, href }) => {
                const content = (
                  <>
                    <Icon className={`h-6 w-6 ${themeClasses.featureIconClass}`} />
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{description}</p>
                  </>
                )
                
                if (href) {
                  const Component = href.startsWith('http') ? 'a' : Link
                  const props = href.startsWith('http')
                    ? { href, target: '_blank', rel: 'noopener noreferrer' }
                    : { href }
                  
                  return (
                    <Component
                      key={title}
                      {...props}
                      className={`${themeClasses.featureCardClass} cursor-pointer hover:border-yellow-400 transition-colors`}
                    >
                      {content}
                    </Component>
                  )
                }
                
                return (
                  <div key={title} className={themeClasses.featureCardClass}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* Documentation Sections */}
      {docSections.length > 0 ? (
        <section className="py-16 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-white">Documentation Library</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {docSections.map((section) => (
                <div key={section.title} className={themeClasses.docCardClass}>
                  <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{section.description}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {section.items.map((item) => {
                      const Component = item.external ? 'a' : Link
                      const linkProps = item.external
                        ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                        : { href: item.href }
                      // Extract base color from linkHoverClass (e.g., "hover:text-indigo-600" -> "text-indigo-600")
                      const baseColorClass = themeClasses.linkHoverClass.replace('hover:', '')
                      return (
                        <li key={item.href}>
                          <Component
                            {...linkProps}
                            className={`group flex items-center justify-between ${baseColorClass} ${themeClasses.linkHoverClass} transition-colors`}
                          >
                            <span>{item.title}</span>
                            <ArrowRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                          </Component>
                          <p className="text-xs text-slate-300">{item.description}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Quick Links */}
      {quickLinks.length > 0 ? (
        <section className="pb-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-2xl font-semibold text-white">Quick Links</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {quickLinks.map(({ title, description, href, icon: Icon, external }) => {
                const Component = external ? 'a' : Link
                const props = external
                  ? { href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href }

                return (
                  <Component key={href} {...props} className={themeClasses.quickLinkCardClass}>
                    <Icon className={`h-6 w-6 ${themeClasses.quickLinkIconClass}`} />
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{description}</p>
                    <span
                      className={`mt-4 inline-flex items-center text-sm font-semibold ${themeClasses.quickLinkHoverLabelClass.replace('hover:', '')} ${themeClasses.quickLinkHoverLabelClass} transition-colors`}
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Component>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}
      <FooterTemplate />
    </div>
  )
}
