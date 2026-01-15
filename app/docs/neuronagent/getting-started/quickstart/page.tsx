import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronAgent Quick Start | Create Your First Agent',
  description: 'Quick start guide for NeuronAgent: Create your first agent with tools and memory in minutes. Step-by-step tutorial with examples.',
  keywords: [
    'NeuronAgent quick start',
    'create agent',
    'agent tutorial',
    'agent example',
    'agent tools',
    'agent memory',
    'first agent'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/getting-started/quickstart',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'prerequisites', title: 'Prerequisites' },
  { id: 'create-agent', title: 'Create Your First Agent' },
  { id: 'send-message', title: 'Send a Message' },
  { id: 'use-tools', title: 'Using Tools' },
  { id: 'next-steps', title: 'Next Steps' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/getting-started/installation',
  label: 'Installation',
}
const nextLink: NavLink = {
  href: '/docs/neuronagent/getting-started/configuration',
  label: 'Configuration',
}

export default function NeuronAgentQuickStart() {
  return (
    <PostgresDocsLayout
      title="NeuronAgent Quick Start"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="prerequisites">
        <h2>Prerequisites</h2>
        <ul>
          <li>NeuronAgent running on <code>http://localhost:8080</code></li>
          <li>NeuronDB extension installed and configured</li>
          <li>API key for authentication</li>
        </ul>
      </section>

      <section id="create-agent">
        <h2>Create Your First Agent</h2>
        <p>
          Create an agent with tools and memory capabilities:
        </p>

        <BashCodeBlock
          title="Create agent"
          code={`curl -X POST http://localhost:8080/api/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "my_agent",
    "profile": "general-assistant",
    "tools": ["sql", "http", "browser"]
  }'`}
        />
      </section>

      <section id="send-message">
        <h2>Send a Message</h2>
        <p>
          Create a session and send a message to your agent:
        </p>

        <BashCodeBlock
          title="Create session and send message"
          code={`# Create session
curl -X POST http://localhost:8080/api/v1/sessions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_id": "your-agent-id",
    "user_id": "user123"
  }'

# Send message
curl -X POST http://localhost:8080/api/v1/sessions/{session_id}/messages \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "content": "Hello, can you help me search for information?",
    "role": "user"
  }'`}
        />
      </section>

      <section id="use-tools">
        <h2>Using Tools</h2>
        <p>
          Agents can use tools to perform actions. Tools are automatically selected based on the agent's configuration and the task at hand.
        </p>
        <p>
          See the <a href="https://github.com/neurondb-ai/neurondb/tree/main/examples/agent-tools" target="_blank" rel="noopener noreferrer">Agent Tools Example</a> for complete working examples.
        </p>
      </section>

      <section id="next-steps">
        <h2>Next Steps</h2>
        <ul>
          <li><a href="/docs/neuronagent/getting-started/configuration">Configuration Guide</a> - Configure API keys, rate limiting, and database connections</li>
          <li><a href="/docs/neuronagent/getting-started/neurondb-integration">NeuronDB Integration</a> - Integrate with NeuronDB for vector search and embeddings</li>
          <li><a href="/docs/neuronagent/features">Features Documentation</a> - Complete feature reference</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
