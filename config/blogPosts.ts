export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  category: string;
  featured: boolean;
  icon: string;
  views: number;
  likes: number;
  comments: number;
  tags: string[];
}

export const allBlogPosts: BlogPost[] = [
  {
    slug: 'neurondb',
    title: 'NeuronDB a PostgreSQL AI Extension',
    excerpt: 'NeuronDB adds vector search, ML inference, and RAG capabilities to PostgreSQL. Includes HNSW indexing, GPU acceleration, 10 distance metrics, and pgvector compatibility.',
    content: 'NeuronDB is a PostgreSQL extension. Provides vector search, machine learning inference, GPU acceleration, and hybrid retrieval. For semantic search, RAG applications, and recommendation systems.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-20',
    readTime: '22 min read',
    category: 'Technical',
    featured: true,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['AI', 'Vector Database', 'Machine Learning', 'Semantic Search', 'RAG', 'PostgreSQL']
  },
  {
    slug: 'neurondb-semantic-search-guide',
    title: 'Semantic Search Over Text with NeuronDB',
    excerpt: 'Implement semantic search over text using NeuronDB. Includes examples, SQL queries, and code. Guide to building document search systems, RAG pipelines, and hybrid search.',
    content: 'Guide to implementing semantic search with NeuronDB. Includes examples, SQL queries, RAG pipeline construction, hybrid search techniques, and optimization strategies.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-19',
    readTime: '25 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['NeuronDB', 'Semantic Search', 'RAG', 'Vector Search', 'PostgreSQL', 'Tutorial', 'AI']
  },
  {
    slug: 'neurondb-vectors',
    title: 'Vectors in PostgreSQL',
    excerpt: 'Vector operations, indexing, and similarity search in PostgreSQL with NeuronDB. Guide with SQL queries and results. Learn HNSW indexing, distance metrics, quantization, and performance optimization.',
    content: 'Guide to working with vectors in PostgreSQL using NeuronDB. Covers vector types, operations, distance metrics, indexing strategies, quantization, and performance optimization with SQL queries and results.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-21',
    readTime: '30 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['NeuronDB', 'Vectors', 'Vector Search', 'HNSW', 'Distance Metrics', 'PostgreSQL', 'Tutorial', 'AI', 'Indexing']
  },
  {
    slug: 'neurondb-mcp-server',
    title: 'MCP Server: Model Context Protocol Explained',
    excerpt: 'MCP Server (Model Context Protocol) guide. What it is, how it works, integration with Claude Desktop, known MCP servers, and NeuronMCP implementation. Learn how MCP enables AI assistants to access external tools and resources.',
    content: 'MCP Server architecture, protocol implementation, Claude Desktop integration, popular MCP servers, and NeuronMCP. Learn how the Model Context Protocol enables AI assistants to access external tools and data sources.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-22',
    readTime: '28 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['MCP', 'ModelContextProtocol', 'ClaudeDesktop', 'NeuronMCP', 'AI', 'PostgreSQL', 'VectorDatabase', 'MachineLearning', 'RAG', 'OpenSource', 'NeuronDB']
  },
  {
    slug: 'rag-complete-guide',
    title: 'RAG: Retrieval-Augmented Generation With PostgreSQL',
    excerpt: 'RAG (Retrieval-Augmented Generation) guide with examples, SQL queries, and implementation patterns. Learn how to build RAG systems with document retrieval, context building, LLM integration, and response generation.',
    content: 'RAG architecture, implementation patterns, SQL examples, and NeuronDB integration. Learn how to build RAG systems with document processing, embedding generation, similarity search, context building, and response generation.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-23',
    readTime: '35 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['RAG', 'RetrievalAugmentedGeneration', 'LLM', 'VectorSearch', 'SemanticSearch', 'NeuronDB', 'PostgreSQL', 'AI', 'MachineLearning', 'DocumentRetrieval', 'KnowledgeBase']
  },
  {
    slug: 'rag-architectures-ai-builders-should-understand',
    title: 'RAG Architectures AI Builders Should Understand',
    excerpt: 'Practical guide to the core RAG architecture patterns: basic, conversational, filtered, adaptive, hypothesis-driven, agent-driven, and graph-based RAG. Learn when to use each and what trade-offs matter in production.',
    content: 'Core RAG patterns and how to choose between them. Covers conversational RAG, filtering/reranking, adaptive retrieval, agent-driven workflows, graph-based retrieval, and operational realities.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2026-01-01',
    readTime: '18 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['RAG', 'RAGArchitectures', 'LLM', 'VectorSearch', 'SemanticSearch', 'GraphRAG', 'AgenticAI', 'ProductionAI']
  },
  {
    slug: 'agentic-ai',
    title: 'Agentic AI: Guide to Autonomous AI Agents',
    excerpt: 'Agentic AI systems guide. Explains agent architecture, planning, tool use, memory systems, and autonomous task execution. Includes implementation using NeuronDB and NeuronAgent with code examples.',
    content: 'Agentic AI architecture, planning systems, tool execution, memory management, state machines, and implementation patterns. Learn how to build autonomous agents using NeuronDB and NeuronAgent with code examples.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-24',
    readTime: '40 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['AgenticAI', 'AutonomousAgents', 'AIAgents', 'AgentArchitecture', 'ToolUse', 'Planning', 'MemorySystems', 'NeuronDB', 'NeuronAgent', 'PostgreSQL', 'LLM', 'RAG', 'VectorSearch', 'MachineLearning', 'AI']
  },
  {
    slug: 'postgresql-vector-database',
    title: 'PostgreSQL as a Vector Database',
    excerpt: 'Guide to using PostgreSQL as a vector database. Learn how PostgreSQL with NeuronDB extension works as a vector database with HNSW indexing, similarity search, and production capabilities.',
    content: 'PostgreSQL vector database architecture, performance benchmarks, indexing strategies, query patterns, and migration approaches. Learn how PostgreSQL with NeuronDB works as a vector database solution.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-25',
    readTime: '35 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['PostgreSQL', 'VectorDatabase', 'NeuronDB', 'VectorSearch', 'HNSW', 'SQL', 'Database', 'AI', 'SemanticSearch', 'Production', 'Indexing']
  },
  {
    slug: 'ai-with-database-on-prem',
    title: 'AI With Data On-Premises',
    excerpt: 'Guide to deploying AI workloads with databases on-premises. Learn about on-premises AI infrastructure, data sovereignty, security, performance, and implementation with NeuronDB. Includes architecture patterns, deployment strategies, and examples.',
    content: 'On-premises AI infrastructure, data sovereignty, security architecture, performance optimization, deployment strategies, and implementation patterns. Learn how to deploy NeuronDB and AI workloads on-premises with control over data and infrastructure.',
    author: 'NeuronDB Team',
    authorRole: 'Core Developers',
    date: '2025-02-26',
    readTime: '38 min read',
    category: 'Technical',
    featured: false,
    icon: 'neurondb',
    views: 0,
    likes: 0,
    comments: 0,
    tags: ['OnPremises', 'AIInfrastructure', 'DataSovereignty', 'PrivateAI', 'EnterpriseAI', 'SelfHosted', 'NeuronDB', 'PostgreSQL', 'Security', 'Compliance', 'EdgeAI', 'HybridCloud']
  }
];
