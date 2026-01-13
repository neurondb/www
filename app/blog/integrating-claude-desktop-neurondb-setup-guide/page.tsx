import { BlogMarkdown } from '../../_components/BlogMarkdown';
import ShareOnLinkedIn from '../../../components/ShareOnLinkedIn';
import RelatedBlogs from '../../../components/RelatedBlogs';
import { allBlogPosts } from '@/config/blogPosts';
import BlogPageTracker from '../../../components/BlogPageTracker';

export const metadata = {
  title: 'Integrating Claude Desktop with NeuronDB: Complete Setup Guide | NeuronDB',
  description: 'Step-by-step guide to integrating Claude Desktop with NeuronDB using NeuronMCP. Learn installation, configuration, testing, and common workflows for using NeuronDB tools in Claude Desktop.',
  keywords: ['Claude Desktop', 'NeuronMCP', 'MCP server', 'Claude integration', 'NeuronDB setup', 'Model Context Protocol', 'Claude Desktop configuration', 'NeuronDB tools', 'MCP integration'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'Integrating Claude Desktop with NeuronDB: Complete Setup Guide | NeuronDB',
    description: 'Step-by-step guide to integrating Claude Desktop with NeuronDB using NeuronMCP',
    url: 'https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide',
    siteName: 'NeuronDB',
    images: [
      {
        url: 'https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Integrating Claude Desktop with NeuronDB: Complete Setup Guide',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Integrating Claude Desktop with NeuronDB: Complete Setup Guide | NeuronDB',
    description: 'Step-by-step guide to integrating Claude Desktop with NeuronDB using NeuronMCP',
    images: ['https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide/og-image.svg'],
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide',
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
};

const markdown = `![Claude Desktop Integration header](/blog/integrating-claude-desktop-neurondb-setup-guide/header.svg?v=1)

# Integrating Claude Desktop with NeuronDB: Complete Setup Guide

**[View on GitHub](https://github.com/neurondb-ai/neurondb)** | **[Download Latest Release](https://github.com/neurondb-ai/neurondb/releases)** | **[Documentation](/docs/neuronmcp)**

## Introduction

Claude Desktop is Anthropic's desktop application for Claude AI. It supports Model Context Protocol (MCP) servers that enable Claude to access external tools and data sources. NeuronMCP is an MCP server implementation that provides Claude Desktop with access to NeuronDB's vector search, ML inference, and RAG capabilities.

This guide provides step-by-step instructions for integrating Claude Desktop with NeuronDB. The guide covers installation, configuration, testing, common workflows, and troubleshooting. By the end, you can use NeuronDB tools directly in Claude Desktop conversations.

## Prerequisites

Before integrating Claude Desktop with NeuronDB, ensure you have the following components installed and configured.

### Required Components

- **PostgreSQL 16, 17, or 18**: NeuronDB requires PostgreSQL 16 or later
- **NeuronDB Extension**: PostgreSQL extension with vector search and ML capabilities
- **NeuronMCP Server**: MCP server binary for Claude Desktop integration
- **Claude Desktop**: Anthropic's desktop application (latest version)

### System Requirements

- **Operating System**: macOS, Windows, or Linux
- **PostgreSQL**: Version 16, 17, or 18
- **Database**: Database with NeuronDB extension enabled
- **Network**: Local or remote PostgreSQL connection

\`\`\`bash
# Check PostgreSQL version
psql --version

# Expected output:
# psql (PostgreSQL) 16.0
\`\`\`

## Installation Steps

### Step 1: Install PostgreSQL and NeuronDB

Install PostgreSQL 16, 17, or 18 for your operating system. Download and install the NeuronDB extension. Enable the extension in your database.

\`\`\`bash
# Create database
createdb neurondb

# Connect to database
psql -d neurondb

# Enable NeuronDB extension
CREATE EXTENSION neurondb;

# Verify installation
SELECT * FROM pg_extension WHERE extname = 'neurondb';
\`\`\`

The extension should be listed in the output. Verify that vector operations work correctly.

\`\`\`sql
-- Test vector operations
SELECT embed_text('test', 'sentence-transformers/all-MiniLM-L6-v2') AS embedding;

-- Expected output:
-- embedding
-- ----------
-- [0.1234, -0.5678, ...] (384 dimensions)
\`\`\`

### Step 2: Download NeuronMCP Server

Download the NeuronMCP server binary for your operating system. The server is available from the NeuronDB releases page.

\`\`\`bash
# Download NeuronMCP (example for Linux)
wget https://github.com/neurondb-ai/neurondb/releases/download/v2.0.0/neurondb-mcp-linux-amd64

# Make executable
chmod +x neurondb-mcp-linux-amd64

# Move to bin directory
sudo mv neurondb-mcp-linux-amd64 /usr/local/bin/neurondb-mcp

# Verify installation
neurondb-mcp --version
\`\`\`

The server binary should be executable and accessible from your PATH.

### Step 3: Configure Database Connection

NeuronMCP requires a PostgreSQL connection string. Create a configuration file or use environment variables.

\`\`\`bash
# Set database connection (example)
export NEURONDB_DATABASE_URL="postgresql://user:password@localhost:5432/neurondb"

# Or create config file
cat > ~/.neurondb-mcp/config.json << EOF
{
  "database": {
    "url": "postgresql://user:password@localhost:5432/neurondb"
  }
}
EOF
\`\`\`

Test the database connection using the MCP server.

\`\`\`bash
# Test connection
neurondb-mcp test-connection

# Expected output:
# Connection successful
# Database: neurondb
# Extension version: 2.0.0
\`\`\`

## Claude Desktop Configuration

Claude Desktop reads MCP server configuration from a settings file. The file location varies by platform.

![Claude Desktop Integration Architecture](/blog/integrating-claude-desktop-neurondb-setup-guide/diagram-claude-integration.svg?v=1)

### Configuration File Locations

- **macOS**: \`~/Library/Application Support/Claude/claude_desktop_config.json\`
- **Windows**: \`%APPDATA%\\Claude\\claude_desktop_config.json\`
- **Linux**: \`~/.config/claude/claude_desktop_config.json\`

### Step 1: Create Configuration File

Create or edit the Claude Desktop configuration file. Add NeuronMCP server configuration.

\`\`\`json
{
  "mcpServers": {
    "neurondb": {
      "command": "/usr/local/bin/neurondb-mcp",
      "args": [
        "--database",
        "postgresql://user:password@localhost:5432/neurondb"
      ],
      "env": {
        "NEURONDB_LOG_LEVEL": "info"
      }
    }
  }
}
\`\`\`

### Step 2: Configure Server Settings

The configuration includes three main properties. The command property specifies the executable path. The args property includes command-line arguments. The env property sets environment variables.

\`\`\`json
{
  "mcpServers": {
    "neurondb": {
      "command": "/usr/local/bin/neurondb-mcp",
      "args": [
        "--database",
        "postgresql://user:password@localhost:5432/neurondb",
        "--log-level",
        "info"
      ],
      "env": {
        "NEURONDB_LOG_LEVEL": "info",
        "NEURONDB_CACHE_SIZE": "1000"
      }
    }
  }
}
\`\`\`

### Step 3: Restart Claude Desktop

After saving the configuration file, restart Claude Desktop. Claude Desktop reads the configuration on startup. Valid servers are started automatically.

\`\`\`bash
# Restart Claude Desktop (macOS)
killall "Claude"

# Or quit and reopen the application
\`\`\`

## Testing the Integration

After configuring NeuronMCP, test the integration in Claude Desktop.

### Step 1: Verify Server Connection

Open Claude Desktop. Check that NeuronMCP server is connected. Look for server status in settings or connection indicators.

### Step 2: Test Vector Search Tool

Test the vector search tool in a Claude Desktop conversation.

\`\`\`
User: Search for documents about PostgreSQL performance using vector search

Claude: I'll search for documents about PostgreSQL performance using NeuronDB's vector search.

[Uses vector_search tool]

Found 5 relevant documents:
1. "PostgreSQL Query Optimization" (similarity: 0.92)
2. "Database Index Tuning" (similarity: 0.88)
3. "Performance Monitoring" (similarity: 0.85)
...
\`\`\`

### Step 3: Test Embedding Generation

Test embedding generation in Claude Desktop.

\`\`\`
User: Generate an embedding for "PostgreSQL is a powerful database"

Claude: I'll generate an embedding for that text using NeuronDB.

[Uses generate_embedding tool]

Generated 384-dimensional embedding vector:
[0.1234, -0.5678, 0.9012, ...]
\`\`\`

### Step 4: Test RAG Pipeline

Test RAG pipeline tools in Claude Desktop.

\`\`\`
User: Retrieve context about vector databases for a RAG query

Claude: I'll retrieve relevant context about vector databases using NeuronDB's RAG pipeline.

[Uses retrieve_context tool]

Retrieved 3 relevant chunks:
1. "Vector databases store high-dimensional embeddings..."
2. "HNSW indexes enable fast similarity search..."
3. "Vector search uses cosine similarity..."
\`\`\`

## Common Workflows

### Workflow 1: Semantic Search

Use Claude Desktop to perform semantic search over documents stored in NeuronDB.

\`\`\`
User: Find documents similar to "machine learning algorithms"

Claude: I'll search for documents about machine learning algorithms.

[Uses vector_search tool with query embedding]

Found documents:
- "Neural Network Training Methods" (similarity: 0.94)
- "Deep Learning Optimization" (similarity: 0.91)
- "Gradient Descent Variants" (similarity: 0.88)
\`\`\`

### Workflow 2: Document Analysis

Use Claude Desktop to analyze documents using NeuronDB's ML capabilities.

\`\`\`
User: Analyze the sentiment of these customer reviews stored in the database

Claude: I'll analyze customer review sentiment using NeuronDB's ML tools.

[Uses analyze_sentiment tool]

Analysis results:
- Positive: 75%
- Neutral: 20%
- Negative: 5%
\`\`\`

### Workflow 3: Knowledge Base Q&A

Use Claude Desktop to answer questions using a RAG pipeline with NeuronDB.

\`\`\`
User: How do I configure HNSW index parameters?

Claude: I'll retrieve relevant documentation about HNSW index configuration.

[Uses retrieve_context tool, then rerank_results tool]

Based on the documentation:
HNSW indexes require two parameters:
- m: Number of connections per layer (recommended: 16)
- ef_construction: Index quality parameter (recommended: 64)
\`\`\`

## MCP Communication Flow

NeuronMCP communicates with Claude Desktop using JSON-RPC 2.0 over stdio. The protocol enables tool discovery, tool execution, and resource access.

![MCP Communication Flow](/blog/integrating-claude-desktop-neurondb-setup-guide/diagram-mcp-flow.svg?v=1)

The communication flow includes five steps. Step one is initialization where Claude Desktop connects to NeuronMCP. Step two is tool discovery where Claude discovers available tools. Step three is tool execution where Claude calls tools with parameters. Step four is result processing where NeuronMCP executes operations and returns results. Step five is response generation where Claude uses results in responses.

\`\`\`json
// Example: Tool call request
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "tools/call",
  "params": {
    "name": "vector_search",
    "arguments": {
      "query_text": "PostgreSQL performance",
      "table": "documents",
      "limit": 5
    }
  }
}

// Example: Tool call response
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "content": [
      {
        "type": "text",
        "text": "Found 5 similar documents"
      },
      {
        "type": "resource",
        "resource": {
          "uri": "neurondb://results/123",
          "mimeType": "application/json"
        }
      }
    ]
  }
}
\`\`\`

## Troubleshooting

### Problem 1: Server Not Starting

**Symptoms**: NeuronMCP server does not start in Claude Desktop.

**Solutions**:
- Verify executable path is correct
- Check file permissions (executable bit set)
- Verify database connection string
- Check Claude Desktop logs for errors

\`\`\`bash
# Verify executable
which neurondb-mcp
ls -l /usr/local/bin/neurondb-mcp

# Test server manually
neurondb-mcp --version
\`\`\`

### Problem 2: Database Connection Failed

**Symptoms**: NeuronMCP cannot connect to PostgreSQL database.

**Solutions**:
- Verify PostgreSQL is running
- Check connection string format
- Verify user permissions
- Test connection manually

\`\`\`bash
# Test PostgreSQL connection
psql "postgresql://user:password@localhost:5432/neurondb" -c "SELECT version();"

# Check NeuronDB extension
psql "postgresql://user:password@localhost:5432/neurondb" -c "SELECT * FROM pg_extension WHERE extname = 'neurondb';"
\`\`\`

### Problem 3: Tools Not Available

**Symptoms**: NeuronDB tools do not appear in Claude Desktop.

**Solutions**:
- Verify configuration file syntax (valid JSON)
- Check server logs for errors
- Restart Claude Desktop
- Verify NeuronDB extension is enabled

\`\`\`bash
# Validate JSON configuration
cat ~/.config/claude/claude_desktop_config.json | jq .

# Check server logs
tail -f ~/.neurondb-mcp/logs/server.log
\`\`\`

### Problem 4: Tool Execution Errors

**Symptoms**: Tools execute but return errors.

**Solutions**:
- Verify table names exist
- Check column names and types
- Verify vector indexes are created
- Check tool parameter formats

\`\`\`sql
-- Verify table exists
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name = 'documents';

-- Verify vector column exists
SELECT column_name, data_type FROM information_schema.columns
WHERE table_name = 'documents' AND column_name = 'embedding';

-- Verify index exists
SELECT indexname FROM pg_indexes 
WHERE tablename = 'documents' AND indexname LIKE '%embedding%';
\`\`\`

## Best Practices

### 1. Secure Configuration

Store database credentials securely. Use environment variables or secure configuration files. Avoid hardcoding passwords in configuration files.

\`\`\`bash
# Use environment variables
export NEURONDB_DATABASE_URL="postgresql://user:password@localhost:5432/neurondb"

# Or use .env file (not committed to git)
echo "NEURONDB_DATABASE_URL=postgresql://user:password@localhost:5432/neurondb" > .env
\`\`\`

### 2. Connection Pooling

Configure connection pooling for production use. Limit maximum connections. Monitor connection usage.

\`\`\`json
{
  "mcpServers": {
    "neurondb": {
      "command": "/usr/local/bin/neurondb-mcp",
      "args": [
        "--database",
        "postgresql://user:password@localhost:5432/neurondb",
        "--max-connections",
        "10"
      ]
    }
  }
}
\`\`\`

### 3. Logging and Monitoring

Enable logging for debugging. Monitor server performance. Track tool usage.

\`\`\`json
{
  "mcpServers": {
    "neurondb": {
      "command": "/usr/local/bin/neurondb-mcp",
      "env": {
        "NEURONDB_LOG_LEVEL": "info",
        "NEURONDB_LOG_FILE": "/var/log/neurondb-mcp.log"
      }
    }
  }
}
\`\`\`

### 4. Error Handling

Handle errors gracefully. Provide clear error messages. Log errors for debugging.

### 5. Performance Optimization

Optimize database queries. Use indexes for fast retrieval. Cache frequently accessed data.

## Advanced Configuration

### Multiple Database Connections

Configure multiple NeuronMCP servers for different databases.

\`\`\`json
{
  "mcpServers": {
    "neurondb_prod": {
      "command": "/usr/local/bin/neurondb-mcp",
      "args": ["--database", "postgresql://user:pass@prod-server:5432/neurondb"]
    },
    "neurondb_dev": {
      "command": "/usr/local/bin/neurondb-mcp",
      "args": ["--database", "postgresql://user:pass@dev-server:5432/neurondb"]
    }
  }
}
\`\`\`

### Custom Tool Configuration

Configure tool-specific settings in NeuronMCP.

\`\`\`json
{
  "mcpServers": {
    "neurondb": {
      "command": "/usr/local/bin/neurondb-mcp",
      "args": [
        "--database",
        "postgresql://user:password@localhost:5432/neurondb",
        "--embedding-model",
        "sentence-transformers/all-mpnet-base-v2",
        "--default-limit",
        "10"
      ]
    }
  }
}
\`\`\`

## Real-World Use Cases

### Use Case 1: Technical Documentation Assistant

A developer uses Claude Desktop with NeuronDB to search technical documentation. The system contains 5,000 documentation pages. Average query retrieves 5 relevant pages. Response time is 2 seconds.

The integration enables natural language queries over documentation. Claude understands context and provides accurate answers. Vector search finds relevant pages even with different wording.

### Use Case 2: Research Assistant

A researcher uses Claude Desktop with NeuronDB to analyze research papers. The system contains 10,000 research papers. Average query retrieves 10 relevant papers. Response time is 3 seconds.

The integration enables semantic search over research papers. Claude synthesizes information from multiple papers. RAG pipeline provides cited answers.

### Use Case 3: Customer Support Knowledge Base

A support team uses Claude Desktop with NeuronDB to answer customer questions. The system contains 1,000 support articles. Average query retrieves 3 relevant articles. Response time is 1.5 seconds.

The integration enables fast customer support. Claude provides accurate answers with citations. Support team handles 200 queries daily.

## Conclusion

Integrating Claude Desktop with NeuronDB enables powerful AI-assisted workflows. NeuronMCP provides seamless access to NeuronDB's vector search, ML inference, and RAG capabilities. The integration requires minimal configuration and works out of the box.

Key benefits include natural language queries over databases, semantic search capabilities, RAG-powered Q&A, and ML analysis tools. The integration is straightforward with clear configuration steps.

Use Claude Desktop with NeuronDB when you need AI assistance for database queries, document search, knowledge base Q&A, or data analysis. The integration provides production-ready capabilities with minimal setup.

## Related Blog Posts

[MCP Server: Model Context Protocol Explained](/blog/neurondb-mcp-server)

Learn about MCP protocol and how it enables AI assistants to access external tools.

[NeuronDB vs pgvector: Feature Comparison and Migration Guide](/blog/neurondb-vs-pgvector-comparison-migration)

Compare NeuronDB and pgvector features and learn migration strategies.

[Semantic Search Over Text with NeuronDB](/blog/neurondb-semantic-search-guide)

Build semantic search systems with document chunking and hybrid search.

## Support

For questions, issues, or commercial support, contact [support@neurondb.ai](mailto:support@neurondb.ai)
`;

export default function BlogPost() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Integrating Claude Desktop with NeuronDB: Complete Setup Guide',
    description: 'Step-by-step guide to integrating Claude Desktop with NeuronDB using NeuronMCP',
    image: 'https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide/og-image.svg',
    datePublished: '2025-03-01',
    dateModified: '2025-03-01',
    author: {
      '@type': 'Organization',
      name: 'NeuronDB',
      url: 'https://neurondb.ai',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NeuronDB',
      logo: {
        '@type': 'ImageObject',
        url: 'https://neurondb.ai/neurondb_ai_512.ico',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide',
    },
    keywords: 'Claude Desktop, NeuronMCP, MCP server, Claude integration, NeuronDB setup, Model Context Protocol',
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPageTracker
        slug="integrating-claude-desktop-neurondb-setup-guide"
        title="Integrating Claude Desktop with NeuronDB: Complete Setup Guide"
      />
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0 lg:max-w-3xl">
              <div className="px-4 sm:px-6 lg:px-0">
                <BlogMarkdown>{markdown}</BlogMarkdown>
                
                <div className="border-t border-white/10 pt-8 mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Share This Article</h3>
                  <ShareOnLinkedIn
                    url="https://neurondb.ai/blog/integrating-claude-desktop-neurondb-setup-guide"
                    title="Integrating Claude Desktop with NeuronDB: Complete Setup Guide"
                    summary="Step-by-step guide to integrating Claude Desktop with NeuronDB using NeuronMCP"
                    hashtags={[
                      'ClaudeDesktop',
                      'NeuronMCP',
                      'MCPServer',
                      'ClaudeIntegration',
                      'NeuronDB',
                      'ModelContextProtocol',
                      'PostgreSQL',
                      'VectorSearch',
                      'AIAssistants'
                    ]}
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar - Related Blogs */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="px-4 sm:px-6 lg:px-0">
                <RelatedBlogs 
                  currentSlug="integrating-claude-desktop-neurondb-setup-guide" 
                  allPosts={allBlogPosts}
                  maxPosts={4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}