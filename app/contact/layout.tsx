import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact NeuronDB - Support, Questions & Feedback',
  description: 'Contact the NeuronDB team for support, questions, or feedback. Get help with installation, configuration, and usage. Email support, GitHub issues, and documentation available.',
  keywords: ['contact NeuronDB', 'NeuronDB support', 'PostgreSQL support', 'vector database support', 'technical support', 'customer service', 'help desk'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'Contact NeuronDB - Support, Questions & Feedback',
    description: 'Contact the NeuronDB team for support, questions, or feedback. Get help with installation, configuration, and usage.',
    url: 'https://neurondb.ai/contact',
    siteName: 'NeuronDB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact NeuronDB - Support, Questions & Feedback',
    description: 'Contact the NeuronDB team for support, questions, or feedback.',
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/contact',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}










