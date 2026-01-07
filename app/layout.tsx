import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/config/site'
import Header from '@/components/Header'
import OrganizationSchema from '@/components/SEO/OrganizationSchema'
import WebSiteSchema from '@/components/SEO/WebSiteSchema'
import SkipNavigation from '@/components/SkipNavigation'
import ScrollToTop from '@/components/ScrollToTop'
import OutboundLinkTracker from '@/components/OutboundLinkTracker'
import { ToastProvider } from '@/components/ui/Toast'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optimize font loading - show fallback until font loads
  preload: true,
  variable: '--font-inter',
  adjustFontFallback: true, // Optimize font fallback rendering
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#4f46e5' },
    { media: '(prefers-color-scheme: dark)', color: '#070d1a' },
  ],
  colorScheme: 'light dark',
}

const baseUrl = `https://${siteConfig.domain}`
const defaultDescription = 'PostgreSQL extension with vector search, RAG pipeline, machine learning inference, and GPU acceleration. Build AI-powered applications directly in your database.'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `PostgreSQL AI Extension - ${siteConfig.name} | Vector Search, ML & RAG Pipeline`,
    template: `%s | PostgreSQL AI Extension`,
  },
  description: 'NeuronDB is the leading PostgreSQL AI extension for vector search, machine learning inference, and RAG pipeline. Build AI applications in PostgreSQL with GPU acceleration, 52 ML algorithms, 473 SQL functions, and complete ecosystem (NeuronAgent, NeuronMCP, NeuronDesktop).',
  applicationName: siteConfig.name,
  authors: [
    { name: `${siteConfig.name} Team`, url: baseUrl },
    { name: siteConfig.name, url: siteConfig.github },
  ],
  generator: 'Next.js',
  keywords: [
    'postgresql ai extension',
    'postgresql ai extension vector search',
    'postgresql ai extension ml',
    'postgresql ai extension rag',
    'postgres ai extension',
    'postgres extension ai',
    'ai database',
    'ai database postgresql',
    'postgres ai',
    'vector database',
    'vector database postgresql',
    'postgres vector database',
    'vector search postgresql',
    'rag pipeline',
    'rag database',
    'rag postgresql',
    'retrieval augmented generation postgresql',
    'semantic search postgresql',
    'machine learning postgresql',
    'ml inference postgresql',
    'postgres ml',
    'embeddings database',
    'hnsw index',
    'hnsw postgresql',
    'vector index postgresql',
    'hybrid search postgresql',
    'onnx postgresql',
    'gpu accelerated database',
    'cuda postgresql',
    'rocm postgresql',
    'metal gpu postgresql',
    'neurondb',
    'pgvector alternative',
    'docker postgresql ai',
    'mcp server claude desktop',
    'neuronagent',
    'neuronmcp',
    'neurondesktop',
    '52 ml algorithms',
    '473 sql functions',
    'background workers',
    'vector quantization',
    'product quantization',
    'dataset loading',
    'huggingface datasets',
  ],
  referrer: 'origin-when-cross-origin',
  creator: `${siteConfig.name} Team`,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [
        { url: '/blog/rss.xml', title: `${siteConfig.name} Blog RSS Feed` },
      ],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: siteConfig.name,
    title: `PostgreSQL AI Extension - ${siteConfig.name} | Vector Search & ML Inference`,
    description: 'NeuronDB is the leading PostgreSQL AI extension for vector search, machine learning inference, and RAG pipeline. Build AI applications in PostgreSQL.',
    images: [
      {
        url: '/og-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: `PostgreSQL AI Extension - ${siteConfig.name} | Vector Search & ML Inference`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@neurondbai',
    creator: '@neurondbai',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: defaultDescription,
    images: ['/og-image.jpg?v=2'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
  category: 'Technology',
  classification: 'Database Software, AI Database, Vector Search, PostgreSQL Extensions',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicons/favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicons/favicon-256.png', sizes: '256x256', type: 'image/png' },
      { url: '/favicons/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/favicon-180.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: [
      { url: '/favicon.ico' },
    ],
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#4f46e5',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://twitter.com" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        
        {/* Preload critical resources - only small, critical assets */}
        <link rel="preload" href="/favicon.ico" as="image" />
        
        {/* Prefetch likely next pages for better navigation */}
        <link rel="prefetch" href="/docs/getting-started" />
        <link rel="prefetch" href="/docs" />
        <link rel="prefetch" href="/download" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Windows/Microsoft icons */}
        <meta name="msapplication-TileColor" content="#070d1a" />
        <meta name="msapplication-TileImage" content="/favicons/favicon-192.png" />
        
        {/* Additional meta tags */}
        <meta name="application-name" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="msapplication-tooltip" content={`${siteConfig.name} - AI Database Extension`} />
        <meta name="msapplication-starturl" content="/" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {/* Google Analytics - Optimized loading */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
              defer
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        <ToastProvider>
          <OutboundLinkTracker />
          <SkipNavigation />
          <OrganizationSchema />
          <WebSiteSchema />
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <ScrollToTop />
        </ToastProvider>
      </body>
    </html>
  )
}
