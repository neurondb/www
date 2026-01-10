import { Metadata } from 'next'
import { generateDocsMetadata } from '@/config/products'
import NeuronDBDocsClient from './docs-client'

export const metadata: Metadata = generateDocsMetadata('neurondb')

export default function NeuronDBDocsPage() {
  return <NeuronDBDocsClient />
}
