import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'NeuronAgent Troubleshooting | Common Issues and Solutions',
  description: 'Troubleshooting guide for NeuronAgent: common issues, error resolution, performance optimization, and debugging tips.',
  keywords: [
    'NeuronAgent troubleshooting',
    'agent runtime issues',
    'agent errors',
    'agent debugging',
    'agent performance',
    'agent connection issues',
    'agent memory issues',
    'agent tool errors'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/troubleshooting',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'common-issues', title: 'Common Issues' },
  { id: 'connection-problems', title: 'Connection Problems' },
  { id: 'performance-issues', title: 'Performance Issues' },
  { id: 'memory-issues', title: 'Memory Issues' },
  { id: 'tool-errors', title: 'Tool Errors' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/features',
  label: 'Features',
}
const nextLink: NavLink | undefined = undefined

export default function NeuronAgentTroubleshooting() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent Troubleshooting"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="common-issues">
        <h2>Common Issues</h2>
        <p>
          This guide covers common issues and their solutions when using NeuronAgent.
        </p>
      </section>

      <section id="connection-problems">
        <h2>Connection Problems</h2>
        <h3>Cannot connect to NeuronAgent API</h3>
        <ul>
          <li>Verify NeuronAgent is running: <code>curl http://localhost:8080/health</code></li>
          <li>Check API key is correct and has proper permissions</li>
          <li>Verify database connection string is correct</li>
          <li>Check firewall settings and port availability</li>
        </ul>

        <h3>WebSocket connection fails</h3>
        <ul>
          <li>Verify WebSocket endpoint is accessible</li>
          <li>Check for proxy or load balancer WebSocket support</li>
          <li>Verify CORS settings allow WebSocket connections</li>
        </ul>
      </section>

      <section id="performance-issues">
        <h2>Performance Issues</h2>
        <h3>Slow agent responses</h3>
        <ul>
          <li>Check LLM API response times</li>
          <li>Review memory search performance and index configuration</li>
          <li>Optimize tool execution and reduce tool calls</li>
          <li>Monitor database query performance</li>
        </ul>

        <h3>High memory usage</h3>
        <ul>
          <li>Review session cleanup policies</li>
          <li>Optimize memory promotion settings</li>
          <li>Check for memory leaks in custom tools</li>
        </ul>
      </section>

      <section id="memory-issues">
        <h2>Memory Issues</h2>
        <h3>Memory search returns no results</h3>
        <ul>
          <li>Verify memory has been created and indexed</li>
          <li>Check vector dimensions match between query and stored vectors</li>
          <li>Review similarity threshold settings</li>
          <li>Verify NeuronDB extension is properly configured</li>
        </ul>

        <h3>Memory not persisting</h3>
        <ul>
          <li>Check database connection and permissions</li>
          <li>Verify memory promotion worker is running</li>
          <li>Review memory storage configuration</li>
        </ul>
      </section>

      <section id="tool-errors">
        <h2>Tool Errors</h2>
        <h3>Tool execution fails</h3>
        <ul>
          <li>Verify tool is registered and available</li>
          <li>Check tool permissions for the agent</li>
          <li>Review tool input validation and parameters</li>
          <li>Check tool execution logs for detailed errors</li>
        </ul>

        <h3>Custom tool not working</h3>
        <ul>
          <li>Verify tool registration JSON schema is valid</li>
          <li>Check tool execution function is properly implemented</li>
          <li>Review tool error handling and return values</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
