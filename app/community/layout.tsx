import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NeuronDB Community - Join Developers, Users & Contributors',
  description: 'Join the NeuronDB community - connect with developers, users, and contributors. Get help, share ideas, contribute to the project, and stay updated with the latest developments.',
  keywords: ['NeuronDB community', 'PostgreSQL community', 'vector database community', 'open source community', 'developer community', 'GitHub', 'contributors', 'support'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'NeuronDB Community - Join Developers, Users & Contributors',
    description: 'Join the NeuronDB community - connect with developers, users, and contributors. Get help, share ideas, and contribute to the project.',
    url: 'https://neurondb.ai/community',
    siteName: 'NeuronDB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuronDB Community - Join Developers, Users & Contributors',
    description: 'Join the NeuronDB community - connect with developers, users, and contributors.',
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/community',
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

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}










