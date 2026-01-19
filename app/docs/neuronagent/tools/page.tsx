import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'

export const metadata: Metadata = {
  title: 'Tool System | 20+ Built-in Tools | NeuronAgent',
  description: 'Comprehensive tool system with 20+ built-in tools including SQL, HTTP, Code, Shell, Browser, Memory, Collaboration, and NeuronDB integration tools.',
  keywords: [
    'agent tools',
    'tool system',
    'SQL tool',
    'HTTP tool',
    'browser automation',
    'code execution',
    'shell tool',
    'memory tool',
    'collaboration tool',
    'NeuronDB tools',
    'custom tools',
    'tool registry'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronagent/tools',
  },
  openGraph: {
    title: 'Tool System | 20+ Built-in Tools',
    description: 'Extensible tool system with 20+ built-in tools and support for custom tool registration.',
    type: 'article',
    url: 'https://neurondb.ai/docs/neuronagent/tools',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'core-tools', title: 'Core Tools' },
  { id: 'neurondb-tools', title: 'NeuronDB Integration Tools' },
  { id: 'custom-tools', title: 'Custom Tools' },
  { id: 'tool-registry', title: 'Tool Registry' },
  { id: 'tool-permissions', title: 'Tool Permissions' },
  { id: 'api', title: 'API Reference' },
]

const prevLink: NavLink = {
  href: '/docs/neuronagent/memory',
  label: 'Memory System',
}

const nextLink: NavLink = {
  href: '/docs/neuronagent/multi-agent',
  label: 'Multi-Agent Collaboration',
}

export default function ToolSystemPage() {
  return (
    <PostgresDocsLayout
      title="Tool System"
      version="NeuronAgent Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          NeuronAgent provides a comprehensive tool system with 20+ built-in tools and support for custom
          tool registration. Tools enable agents to interact with external systems, execute code, manage
          files, and perform various operations beyond LLM interactions.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li><strong>20+ Built-in Tools:</strong> SQL, HTTP, Code, Shell, Browser, Memory, Collaboration, and more</li>
          <li><strong>NeuronDB Integration:</strong> Complete integration with NeuronDB for vector search, ML, RAG, and analytics</li>
          <li><strong>Custom Tools:</strong> Extensible system for registering custom tools with JSON Schema validation</li>
          <li><strong>Tool Permissions:</strong> Granular tool access permissions for security</li>
          <li><strong>Tool Registry:</strong> Centralized tool management and discovery</li>
          <li><strong>Sandboxed Execution:</strong> Secure execution environment for code and shell tools</li>
        </ul>
      </section>

      <section id="core-tools">
        <h2>Core Tools</h2>
        <p>
          Core tools provide essential functionality for agent operations, including data access, web
          interaction, code execution, and file management.
        </p>

        <h3>SQL Tool</h3>
        <p>
          Execute read-only SQL queries against PostgreSQL databases. Supports parameterized queries
          and result formatting for easy consumption by agents.
        </p>
        <ul>
          <li>Read-only queries for data retrieval</li>
          <li>Parameterized queries for security</li>
          <li>Result formatting and pagination</li>
          <li>Connection pooling for performance</li>
        </ul>

        <h3>HTTP Tool</h3>
        <p>
          Make HTTP requests to external APIs and services. Supports GET, POST, PUT, DELETE methods
          with configurable headers, authentication, and allowlist for security.
        </p>
        <ul>
          <li>Multiple HTTP methods (GET, POST, PUT, DELETE)</li>
          <li>Configurable headers and authentication</li>
          <li>URL allowlist for security</li>
          <li>Request/response logging</li>
        </ul>

        <h3>Code Tool</h3>
        <p>
          Execute code in sandboxed environments. Supports multiple languages with resource limits
          and timeout controls for security.
        </p>
        <ul>
          <li>Sandboxed code execution</li>
          <li>Multiple language support</li>
          <li>Resource limits and timeouts</li>
          <li>Output capture and error handling</li>
        </ul>

        <h3>Shell Tool</h3>
        <p>
          Execute shell commands with whitelist-based security. Supports command validation and
          output capture for safe command execution.
        </p>
        <ul>
          <li>Whitelisted commands for security</li>
          <li>Command validation and sanitization</li>
          <li>Output capture and error handling</li>
          <li>Timeout controls</li>
        </ul>

        <h3>Browser Tool</h3>
        <p>
          Web automation using Playwright for browser interactions. Enables agents to navigate
          websites, fill forms, click buttons, and extract content.
        </p>
        <ul>
          <li>Web page navigation and interaction</li>
          <li>Form filling and button clicking</li>
          <li>Content extraction and screenshots</li>
          <li>JavaScript execution in browser context</li>
        </ul>

        <h3>Visualization Tool</h3>
        <p>
          Create data visualizations from query results. Supports charts, graphs, and other
          visualization formats for data presentation.
        </p>

        <h3>Filesystem Tool</h3>
        <p>
          Virtual filesystem for secure file operations per agent/session. Provides isolated
          file storage and management without direct filesystem access.
        </p>
        <ul>
          <li>Isolated virtual filesystem per agent/session</li>
          <li>File read, write, and delete operations</li>
          <li>Directory management</li>
          <li>Secure file access controls</li>
        </ul>

        <h3>Memory Tool</h3>
        <p>
          Direct hierarchical memory manipulation, retrieval, and management. Enables agents
          to store and retrieve information from the memory system.
        </p>

        <h3>Collaboration Tool</h3>
        <p>
          Multi-agent communication, task delegation, and workspace coordination. Enables agents
          to collaborate on complex tasks.
        </p>

        <h3>Multimodal Tool</h3>
        <p>
          Image and multimedia processing with embedding generation. Supports image analysis,
          embedding generation, and multimodal content processing.
        </p>
      </section>

      <section id="neurondb-tools">
        <h2>NeuronDB Integration Tools</h2>
        <p>
          Complete integration with NeuronDB provides agents with access to vector search, ML
          operations, RAG pipelines, analytics, and more.
        </p>

        <h3>Vector Tool</h3>
        <p>
          Vector search operations including similarity search, indexing, and vector operations.
          Enables agents to perform semantic search and vector-based operations.
        </p>

        <h3>ML Tool</h3>
        <p>
          Machine learning operations including model training, prediction, and evaluation.
          Supports all 52+ ML algorithms available in NeuronDB.
        </p>

        <h3>RAG Tool</h3>
        <p>
          RAG pipeline operations including document processing, context retrieval, and response
          generation. Enables agents to build RAG workflows.
        </p>

        <h3>Analytics Tool</h3>
        <p>
          Analytics and data analysis operations. Provides statistical analysis, aggregation,
          and reporting capabilities.
        </p>

        <h3>Hybrid Search Tool</h3>
        <p>
          Hybrid search combining vector and full-text search. Enables agents to perform
          sophisticated search operations.
        </p>

        <h3>Reranking Tool</h3>
        <p>
          Reranking operations for search results. Supports multiple reranking strategies
          including cross-encoder, LLM, and ensemble reranking.
        </p>
      </section>

      <section id="custom-tools">
        <h2>Custom Tools</h2>
        <p>
          The tool system supports custom tool registration, enabling you to extend agent
          capabilities with domain-specific tools.
        </p>

        <h3>Tool Registration</h3>
        <p>
          Custom tools can be registered via the API with JSON Schema validation for
          parameter validation and type checking.
        </p>

        <h3>Tool Implementation</h3>
        <p>
          Tools are implemented as HTTP endpoints or function handlers that receive tool
          parameters and return results in a standardized format.
        </p>

        <h3>Tool Metadata</h3>
        <p>
          Each tool includes metadata such as name, description, parameters schema, and
          return type for automatic discovery and validation.
        </p>
      </section>

      <section id="tool-registry">
        <h2>Tool Registry</h2>
        <p>
          The tool registry provides centralized management of all available tools, including
          built-in and custom tools.
        </p>

        <h3>Tool Discovery</h3>
        <p>
          Agents can discover available tools through the registry, which provides metadata
          and capabilities for each tool.
        </p>

        <h3>Tool Versioning</h3>
        <p>
          Tools support versioning, enabling updates and rollbacks while maintaining
          compatibility with existing agent configurations.
        </p>

        <h3>Tool Categories</h3>
        <p>
          Tools are organized into categories for easier discovery and management, including
          core tools, NeuronDB tools, and custom tools.
        </p>
      </section>

      <section id="tool-permissions">
        <h2>Tool Permissions</h2>
        <p>
          Granular tool access permissions ensure that agents only have access to tools
          they are authorized to use.
        </p>

        <h3>Permission Model</h3>
        <p>
          Tool permissions are managed at the agent, role, and principal levels, providing
          fine-grained access control.
        </p>

        <h3>Permission Types</h3>
        <ul>
          <li><strong>Read:</strong> Tool can be queried for metadata</li>
          <li><strong>Execute:</strong> Tool can be executed by the agent</li>
          <li><strong>Configure:</strong> Tool configuration can be modified</li>
        </ul>

        <h3>Security</h3>
        <p>
          Tool permissions are enforced at runtime, ensuring that unauthorized tool access
          is prevented even if requested by the agent.
        </p>
      </section>

      <section id="api">
        <h2>API Reference</h2>
        <p>
          The tool system is accessible through the NeuronAgent REST API for tool registration,
          discovery, and management.
        </p>

        <h3>Tool Endpoints</h3>
        <ul>
          <li><code>GET /api/v1/tools</code> - List all available tools</li>
          <li><code>GET /api/v1/tools/:id</code> - Get tool details</li>
          <li><code>POST /api/v1/tools</code> - Register a custom tool</li>
          <li><code>PUT /api/v1/tools/:id</code> - Update a tool</li>
          <li><code>DELETE /api/v1/tools/:id</code> - Delete a tool</li>
          <li><code>POST /api/v1/tools/:id/execute</code> - Execute a tool</li>
        </ul>
      </section>
    </PostgresDocsLayout>
  )
}
