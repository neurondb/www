import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import SqlCodeBlock from '@/components/SqlCodeBlock'

export const metadata: Metadata = {
  title: 'Memory System | Hierarchical Memory Management | NeuronAgent',
  description: 'Hierarchical memory system with HNSW-based vector search for long-term memory, memory promotion, event streaming, and context retrieval for AI agents.',
  keywords: [
    'agent memory',
    'hierarchical memory',
    'vector memory',
    'long-term memory',
    'memory promotion',
    'context retrieval',
    'HNSW memory',
    'agent context',
    'memory organization',
    'event streaming'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/memory',
  },
  openGraph: {
    title: 'Memory System | Hierarchical Memory Management',
    description: 'HNSW-based vector search for long-term memory with hierarchical organization and memory promotion.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/memory',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'hierarchical-memory', title: 'Hierarchical Memory' },
  { id: 'long-term-memory', title: 'Long-Term Memory' },
  { id: 'memory-promotion', title: 'Memory Promotion' },
  { id: 'event-streaming', title: 'Event Streaming' },
  { id: 'context-retrieval', title: 'Context Retrieval' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/features',
  label: 'NeuronAgent Features',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/tools',
  label: 'Tool System',
}

export default function MemorySystemPage() {
  return (
    <PostgresDocsLayout
      title="Memory System"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronAgent provides a comprehensive memory system for AI agents, enabling persistent storage and retrieval
          of information across sessions. The memory system uses HNSW-based vector search for efficient similarity
          search and supports hierarchical organization for better context management.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>Hierarchical Memory:</strong> Multi-level memory organization for better recall and context management</li>
          <li><strong>Long-Term Memory:</strong> HNSW-based vector search for efficient context retrieval</li>
          <li><strong>Memory Promotion:</strong> Background worker for promoting important memories to long-term storage</li>
          <li><strong>Event Streaming:</strong> Real-time event capture and summarization</li>
          <li><strong>Context Retrieval:</strong> Intelligent context loading from messages and memory</li>
          <li><strong>Vector Search:</strong> Semantic search across stored memories using embeddings</li>
        </ul>
      </section>

      <section id="hierarchical-memory">
        <h2>Hierarchical Memory</h2>
        <p>
          The hierarchical memory system organizes memories across multiple levels, allowing agents to maintain
          both short-term and long-term context. This structure improves recall and enables more efficient memory
          management.
        </p>

        <h3>Memory Levels</h3>
        <ul>
          <li><strong>Episodic Memory:</strong> Session-specific memories for immediate context</li>
          <li><strong>Semantic Memory:</strong> General knowledge and facts stored long-term</li>
          <li><strong>Procedural Memory:</strong> Task-specific knowledge and workflows</li>
        </ul>

        <h3>Memory Organization</h3>
        <p>
          Memories are automatically organized based on usage patterns, importance, and relevance. The system
          promotes frequently accessed memories to higher levels for faster retrieval.
        </p>
      </section>

      <section id="long-term-memory">
        <h2>Long-Term Memory</h2>
        <p>
          Long-term memory uses HNSW (Hierarchical Navigable Small World) indexes for efficient vector similarity
          search. This enables agents to retrieve relevant context from large memory stores in milliseconds.
        </p>

        <h3>Vector Embeddings</h3>
        <p>
          All memories are automatically embedded using configured embedding models, enabling semantic search
          across stored information. The system supports multiple embedding models and can be configured per agent.
        </p>

        <h3>Memory Storage</h3>
        <p>
          Memories are stored in PostgreSQL with vector indexes, providing both durability and fast retrieval.
          The system automatically manages index creation and optimization.
        </p>
      </section>

      <section id="memory-promotion">
        <h2>Memory Promotion</h2>
        <p>
          The memory promotion system automatically identifies and promotes important memories to long-term storage
          based on usage patterns, recency, and relevance scores.
        </p>

        <h3>Promotion Criteria</h3>
        <ul>
          <li><strong>Access Frequency:</strong> Frequently accessed memories are promoted</li>
          <li><strong>Recency:</strong> Recent memories with high relevance scores</li>
          <li><strong>Importance:</strong> Memories marked as important by the agent or user</li>
          <li><strong>Contextual Relevance:</strong> Memories that are contextually relevant to current tasks</li>
        </ul>

        <h3>Background Worker</h3>
        <p>
          A dedicated background worker continuously analyzes memory usage patterns and promotes memories
          automatically. This ensures that important information is always available in long-term storage.
        </p>
      </section>

      <section id="event-streaming">
        <h2>Event Streaming</h2>
        <p>
          The event streaming system captures real-time events from agent interactions and automatically
          summarizes them for storage in memory. This enables agents to maintain awareness of ongoing activities.
        </p>

        <h3>Event Types</h3>
        <ul>
          <li><strong>Message Events:</strong> User and agent messages</li>
          <li><strong>Tool Events:</strong> Tool execution results</li>
          <li><strong>State Changes:</strong> Agent state transitions</li>
          <li><strong>Error Events:</strong> Errors and exceptions</li>
        </ul>

        <h3>Event Summarization</h3>
        <p>
          Events are automatically summarized using LLM integration, creating concise memory entries that
          capture essential information while reducing storage requirements.
        </p>
      </section>

      <section id="context-retrieval">
        <h2>Context Retrieval</h2>
        <p>
          The context retrieval system intelligently loads relevant context from both messages and memory,
          ensuring agents have access to the most relevant information for their current task.
        </p>

        <h3>Retrieval Strategies</h3>
        <ul>
          <li><strong>Semantic Search:</strong> Vector similarity search for relevant memories</li>
          <li><strong>Temporal Relevance:</strong> Recent memories are prioritized</li>
          <li><strong>Contextual Filtering:</strong> Memories are filtered based on current context</li>
          <li><strong>Relevance Scoring:</strong> Memories are ranked by relevance to the current query</li>
        </ul>

        <h3>Context Window Management</h3>
        <p>
          The system automatically manages context windows, ensuring that the most relevant information
          is included while staying within token limits for LLM interactions.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          The memory system is accessible through the NeuronAgent REST API and can be managed using
          the Memory tool in agent workflows.
        </p>

        <h3>Memory Endpoints</h3>
        <ul>
          <li><code>POST /api/v1/memories</code> - Create a new memory</li>
          <li><code>GET /api/v1/memories</code> - List memories with filtering</li>
          <li><code>GET /api/v1/memories/:id</code> - Get a specific memory</li>
          <li><code>PUT /api/v1/memories/:id</code> - Update a memory</li>
          <li><code>DELETE /api/v1/memories/:id</code> - Delete a memory</li>
          <li><code>POST /api/v1/memories/search</code> - Search memories by similarity</li>
          <li><code>POST /api/v1/memories/promote</code> - Promote memories to long-term storage</li>
        </ul>

        <h3>Memory Tool</h3>
        <p>
          The Memory tool provides direct access to memory operations within agent workflows, enabling
          agents to store, retrieve, and manage memories as part of their execution.
        </p>
      </section>
    </PostgresDocsLayout>
  )
}
