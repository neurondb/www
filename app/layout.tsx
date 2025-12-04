import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { siteConfig } from '@/config/site'
import Header from '@/components/Header'
import OrganizationSchema from '@/components/SEO/OrganizationSchema'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
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
    default: `${siteConfig.name} - ${siteConfig.tagline} | Vector Search & RAG Pipeline`,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.name,
  authors: [
    { name: `${siteConfig.name} Team`, url: baseUrl },
    { name: siteConfig.name, url: siteConfig.github },
  ],
  generator: 'Next.js',
  keywords: [
    'ai database',
    'ai database postgresql',
    'postgres ai',
    'postgresql ai extension',
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
    'neurondb',
    'pgvector alternative',
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
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: defaultDescription,
    images: [
      {
        url: '/og-image.jpg?v=2',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - AI Database Extension`,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://twitter.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicons/favicon-64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicons/favicon-128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicons/favicon-256.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/favicon-512.png" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180.png" />
        
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R4NNPBY0R1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R4NNPBY0R1');
          `}
        </Script>
        
        <OrganizationSchema />
        <Header />
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )
}
