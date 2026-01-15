import { Metadata } from 'next'
import PostgresDocsLayout, { type TocItem, type NavLink } from '@/components/PostgresDocsLayout'
import BashCodeBlock from '@/components/BashCodeBlock'

export const metadata: Metadata = {
  title: 'NeuronMCP Setup | Complete Configuration Schema Setup',
  description: 'NeuronMCP complete configuration schema setup guide. Configure LLM models, vector indexes, workers, ML defaults, and system settings.',
  keywords: [
    'NeuronMCP setup',
    'MCP configuration',
    'MCP schema setup',
    'LLM model configuration',
    'MCP database setup',
    'MCP API keys'
  ].join(', '),
  alternates: {
    canonical: 'https://neurondb.ai/docs/neuronmcp/setup',
  },
}

const tableOfContents: TocItem[] = [
  { id: 'overview', title: 'Overview' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'schema-structure', title: 'Schema Structure' },
  { id: 'api-keys', title: 'Setting API Keys' },
  { id: 'verification', title: 'Verification' },
]

const prevLink: NavLink = {
  href: '/docs/neuronmcp/features',
  label: 'Features',
}
const nextLink: NavLink = {
  href: '/docs/neuronmcp/tools',
  label: 'Tool Catalog',
}

export default function NeuronMCPSetup() {
  return (
    <PostgresDocsLayout
      title="NeuronMCP Setup"
      version="NeuronMCP Documentation"
      tableOfContents={tableOfContents}
      prevLink={prevLink}
      nextLink={nextLink}
    >
      <section id="overview">
        <h2>Overview</h2>
        <p>
          The NeuronMCP Configuration Schema provides a comprehensive, production-grade database schema that sets up everything needed for NeuronMCP to work seamlessly with NeuronDB. This includes LLM models with encrypted API keys, vector index configurations, worker settings, ML model defaults, tool configurations, and system-wide settings.
        </p>
        <p>
          The schema follows database best practices with proper normalization, security, and extensibility:
        </p>
        <ul>
          <li><strong>13 Normalized Tables</strong> - Organized by concern (LLM models, indexes, workers, ML, tools, system)</li>
          <li><strong>30+ Management Functions</strong> - Complete CRUD operations for all configurations</li>
          <li><strong>Pre-populated Defaults</strong> - 50+ LLM models, index templates, worker configs, ML defaults</li>
          <li><strong>Security</strong> - Encrypted API keys using pgcrypto</li>
          <li><strong>Backward Compatible</strong> - Falls back to GUC settings if database config not found</li>
        </ul>
      </section>

      <section id="quick-start">
        <h2>Quick Start</h2>
        <h3>1. Run Setup Script</h3>
        <BashCodeBlock
          title="Run setup script"
          code={`cd NeuronMCP
./scripts/neuronmcp-setup.sh

# Or with custom database connection:
DB_HOST=localhost DB_PORT=5432 DB_NAME=neurondb DB_USER=postgres ./scripts/neuronmcp-setup.sh`}
        />

        <h3>2. Set API Keys</h3>
        <BashCodeBlock
          title="Set API keys for models"
          code={`# Set API key for a model
SELECT neurondb_set_model_key('text-embedding-3-small', 'sk-your-api-key-here');

# Set API key with expiration
SELECT neurondb_set_model_key('gpt-4', 'sk-your-key', NOW() + INTERVAL '90 days');`}
        />

        <h3>3. Verify Setup</h3>
        <BashCodeBlock
          title="Verify configuration"
          code={`# View all active models
SELECT * FROM neurondb.v_llm_models_active;

# View models ready for use (have API keys)
SELECT * FROM neurondb.v_llm_models_ready;

# Get all configurations
SELECT neurondb_get_all_configs();`}
        />
      </section>

      <section id="schema-structure">
        <h2>Schema Structure</h2>
        <p>
          The configuration schema includes:
        </p>
        <ul>
          <li><strong>LLM Models & Providers (5 tables)</strong> - Provider management, model catalog, API key storage, model configurations, and usage tracking</li>
          <li><strong>Vector Indexes (2 tables)</strong> - Index configurations and templates</li>
          <li><strong>Workers (2 tables)</strong> - Worker configurations and schedules</li>
          <li><strong>ML Defaults (2 tables)</strong> - ML algorithm defaults and hyperparameter templates</li>
          <li><strong>Tool Configurations (1 table)</strong> - Tool-specific configurations</li>
          <li><strong>System Settings (1 table)</strong> - System-wide configuration settings</li>
        </ul>
      </section>

      <section id="api-keys">
        <h2>Setting API Keys</h2>
        <p>
          API keys are encrypted using pgcrypto and stored securely in the database:
        </p>
        <ul>
          <li>Use <code>neurondb_set_model_key()</code> function to set API keys</li>
          <li>Keys are automatically encrypted before storage</li>
          <li>Support for key expiration dates</li>
          <li>Keys are decrypted automatically when needed by NeuronMCP</li>
        </ul>
      </section>

      <section id="verification">
        <h2>Verification</h2>
        <p>
          After setup, verify your configuration:
        </p>
        <ul>
          <li>Check active models: <code>SELECT * FROM neurondb.v_llm_models_active;</code></li>
          <li>Check ready models (with API keys): <code>SELECT * FROM neurondb.v_llm_models_ready;</code></li>
          <li>View all configurations: <code>SELECT neurondb_get_all_configs();</code></li>
          <li>Test MCP server connection</li>
        </ul>
      </section>

    </PostgresDocsLayout>
  )
}
