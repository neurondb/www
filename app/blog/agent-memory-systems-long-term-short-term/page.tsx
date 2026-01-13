import { BlogMarkdown } from '../../_components/BlogMarkdown';
import ShareOnLinkedIn from '../../../components/ShareOnLinkedIn';
import RelatedBlogs from '../../../components/RelatedBlogs';
import { allBlogPosts } from '@/config/blogPosts';
import BlogPageTracker from '../../../components/BlogPageTracker';

export const metadata = {
  title: 'Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents | NeuronDB',
  description: 'Complete guide to implementing agent memory systems. Learn the differences between long-term and short-term memory, retrieval strategies, and implementation patterns with NeuronDB and NeuronAgent.',
  keywords: ['agent memory', 'long-term memory', 'short-term memory', 'agent memory systems', 'memory retrieval', 'semantic memory', 'NeuronAgent', 'NeuronDB', 'PostgreSQL', 'vector search', 'AI agents', 'agentic AI'],
  authors: [{ name: 'NeuronDB Team' }],
  openGraph: {
    title: 'Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents | NeuronDB',
    description: 'Complete guide to implementing agent memory systems with long-term and short-term memory patterns',
    url: 'https://neurondb.ai/blog/agent-memory-systems-long-term-short-term',
    siteName: 'NeuronDB',
    images: [
      {
        url: 'https://neurondb.ai/blog/agent-memory-systems-long-term-short-term/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents | NeuronDB',
    description: 'Complete guide to implementing agent memory systems with long-term and short-term memory',
    images: ['https://neurondb.ai/blog/agent-memory-systems-long-term-short-term/og-image.svg'],
    creator: '@neurondb',
  },
  alternates: {
    canonical: 'https://neurondb.ai/blog/agent-memory-systems-long-term-short-term',
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

const markdown = `![Agent Memory Systems header](/blog/agent-memory-systems-long-term-short-term/header.svg?v=1)

# Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents

**[View on GitHub](https://github.com/neurondb-ai/neurondb)** | **[Download Latest Release](https://github.com/neurondb-ai/neurondb/releases)** | **[Documentation](/docs/neuronagent)**

## Introduction

AI agents need memory to maintain context across interactions. Memory enables agents to remember past conversations, learn from experience, and build knowledge over time. Without memory, agents treat each interaction as isolated, cannot learn from history, and repeat mistakes.

Memory systems in AI agents serve different purposes. Short-term memory maintains conversation context within sessions. Long-term memory stores important facts across sessions. Working memory holds temporary computation state. Each memory type requires different storage and retrieval strategies.

This guide explains agent memory architecture, covers short-term and long-term memory patterns, details implementation with NeuronDB and NeuronAgent, and provides SQL examples for memory storage and retrieval.

## What is Agent Memory

Agent memory is the system that stores and retrieves information for AI agents. Memory enables agents to remember past interactions, learn from experience, and build knowledge over time. Memory transforms agents from stateless responders into learning systems.

Memory includes three distinct types. Type one is short-term memory that stores recent conversation context. Type two is long-term memory that stores important facts across sessions. Type three is working memory that holds temporary computation state.

Each memory type serves specific purposes. Short-term memory enables conversation continuity. Long-term memory enables knowledge accumulation. Working memory enables complex reasoning.

### Why Memory Matters

Memory is essential for agentic behavior. Without memory, agents cannot learn from experience, repeat mistakes, or build on past knowledge. Memory transforms agents from stateless responders into learning systems.

Consider an agent without memory. A user asks about database performance. The agent generates a response. The user asks a follow-up question. The agent treats it as a new conversation. The agent cannot remember the previous question, cannot use context from past interactions, and cannot learn from experience.

Consider an agent with memory. A user asks about database performance. The agent generates a response and stores important facts in memory. The user asks a follow-up question. The agent retrieves relevant memories, uses context from previous interactions, and provides a coherent response. The agent learns from each interaction and improves over time.

## Memory Architecture Overview

Agent memory systems use hierarchical storage. Short-term memory uses fast in-memory storage. Long-term memory uses persistent vector databases. Working memory uses temporary storage that clears after task completion.

![Memory Architecture Overview](/blog/agent-memory-systems-long-term-short-term/diagram-memory-architecture.svg?v=1)

The memory architecture includes four layers. Layer one is input processing that extracts information from interactions. Layer two is memory encoding that converts information to embeddings. Layer three is memory storage that persists embeddings in vector databases. Layer four is memory retrieval that finds relevant memories using similarity search.

\`\`\`sql
-- Memory architecture tables
CREATE EXTENSION neurondb;

-- Short-term memory (session context)
CREATE TABLE session_memory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL,
    agent_id UUID NOT NULL,
    content TEXT NOT NULL,
    role TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB DEFAULT '{}'
);

-- Long-term memory (persistent knowledge)
CREATE TABLE long_term_memory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    agent_id UUID NOT NULL,
    content TEXT NOT NULL,
    embedding VECTOR(384),
    importance_score FLOAT DEFAULT 0.5,
    access_count INTEGER DEFAULT 0,
    last_accessed TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB DEFAULT '{}'
);

-- Working memory (temporary computation state)
CREATE TABLE working_memory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id UUID NOT NULL,
    task_id TEXT NOT NULL,
    key TEXT NOT NULL,
    value JSONB NOT NULL,
    expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for fast retrieval
CREATE INDEX idx_session_memory_session ON session_memory(session_id, timestamp);
CREATE INDEX idx_long_term_memory_agent ON long_term_memory(agent_id);
CREATE INDEX idx_long_term_memory_embedding ON long_term_memory USING hnsw (embedding vector_cosine_ops) WITH (m = 16, ef_construction = 64);
CREATE INDEX idx_working_memory_session_task ON working_memory(session_id, task_id);
\`\`\`

The memory architecture tables support all three memory types. Short-term memory stores session context. Long-term memory stores persistent knowledge with embeddings. Working memory stores temporary state.

## Short-Term Memory

Short-term memory maintains conversation context within sessions. It stores recent messages, maintains conversation state, and enables multi-turn conversations. Short-term memory is fast but limited in capacity.

![Short-Term Memory Flow](/blog/agent-memory-systems-long-term-short-term/diagram-short-term-memory.svg?v=1)

Short-term memory includes three components. Component one is message storage that stores conversation messages. Component two is context window management that maintains recent context. Component three is state tracking that tracks conversation state.

### Short-Term Memory Implementation

Short-term memory stores messages in order. Messages include user messages and agent responses. Context windows limit memory size to recent messages. State tracking maintains conversation state.

\`\`\`sql
-- Store message in short-term memory
INSERT INTO session_memory (session_id, agent_id, content, role, metadata) VALUES (
    'session-uuid-123',
    'agent-uuid-456',
    'What is vector search?',
    'user',
    '{"message_id": "msg-001", "timestamp": "2025-02-27T10:00:00Z"}'::jsonb
);

-- Retrieve recent context (last 10 messages)
SELECT 
    content,
    role,
    timestamp,
    metadata
FROM session_memory
WHERE session_id = 'session-uuid-123'
ORDER BY timestamp DESC
LIMIT 10;

-- Build conversation context
WITH recent_messages AS (
    SELECT 
        content,
        role,
        timestamp
    FROM session_memory
    WHERE session_id = 'session-uuid-123'
    ORDER BY timestamp DESC
    LIMIT 10
)
SELECT 
    string_agg(
        format('%s: %s', role, content),
        E'\\n'
        ORDER BY timestamp
    ) AS conversation_context
FROM recent_messages;

-- Results:
-- conversation_context
-- --------------------
-- user: What is vector search?
-- assistant: Vector search finds similar items using embedding vectors...
-- user: How does it work?
-- assistant: Vector search uses cosine similarity to measure...
-- (10 rows)
\`\`\`

The short-term memory stores messages and retrieves recent context. The conversation context query builds a formatted context string for agent prompts.

### Context Window Management

Context windows limit memory size to recent messages. Older messages are archived or discarded. Window size balances context depth with token limits.

\`\`\`sql
-- Manage context window (keep last 20 messages)
WITH message_ranks AS (
    SELECT 
        id,
        ROW_NUMBER() OVER (ORDER BY timestamp DESC) AS rank
    FROM session_memory
    WHERE session_id = 'session-uuid-123'
)
DELETE FROM session_memory
WHERE session_id = 'session-uuid-123'
AND id IN (
    SELECT id FROM message_ranks WHERE rank > 20
);

-- Archive old messages to long-term memory
WITH old_messages AS (
    SELECT 
        agent_id,
        content,
        timestamp
    FROM session_memory
    WHERE session_id = 'session-uuid-123'
    AND timestamp < CURRENT_TIMESTAMP - INTERVAL '1 hour'
    ORDER BY timestamp
    LIMIT 10
)
INSERT INTO long_term_memory (agent_id, content, embedding, importance_score, metadata)
SELECT 
    agent_id,
    content,
    embed_text(content, 'sentence-transformers/all-MiniLM-L6-v2'),
    0.3,
    jsonb_build_object('source', 'session_archive', 'timestamp', timestamp)
FROM old_messages;
\`\`\`

Context window management keeps recent messages in short-term memory and archives older messages to long-term memory.

## Long-Term Memory

Long-term memory stores important facts across sessions. It uses vector databases for semantic retrieval. Long-term memory enables knowledge accumulation and learning over time.

![Long-Term Memory Flow](/blog/agent-memory-systems-long-term-short-term/diagram-long-term-memory.svg?v=1)

Long-term memory includes four components. Component one is memory encoding that converts facts to embeddings. Component two is memory storage that persists embeddings in vector databases. Component three is memory retrieval that finds relevant memories using similarity search. Component four is memory importance that ranks memories by relevance.

### Long-Term Memory Implementation

Long-term memory stores facts as embeddings. Embeddings enable semantic retrieval. Importance scores rank memories by relevance. Access counts track memory usage.

\`\`\`sql
-- Store fact in long-term memory
INSERT INTO long_term_memory (agent_id, content, embedding, importance_score, metadata) VALUES (
    'agent-uuid-456',
    'Vector search uses cosine similarity to find similar embeddings',
    embed_text('Vector search uses cosine similarity to find similar embeddings', 'sentence-transformers/all-MiniLM-L6-v2'),
    0.8,
    '{"source": "conversation", "topic": "vector_search", "session_id": "session-uuid-123"}'::jsonb
);

-- Retrieve relevant memories using semantic search
WITH query_embedding AS (
    SELECT embed_text(
        'How does vector similarity work?',
        'sentence-transformers/all-MiniLM-L6-v2'
    ) AS embedding
)
SELECT 
    content,
    importance_score,
    1 - (embedding <=> qe.embedding) AS similarity_score,
    access_count,
    last_accessed
FROM long_term_memory ltm
CROSS JOIN query_embedding qe
WHERE agent_id = 'agent-uuid-456'
ORDER BY (importance_score * (1 - (embedding <=> qe.embedding))) DESC
LIMIT 5;

-- Results:
-- content | importance_score | similarity_score | access_count | last_accessed
-- --------+------------------+-----------------+--------------+---------------
-- Vector search uses cosine similarity... | 0.8 | 0.92 | 5 | 2025-02-27 10:15:00
-- Embeddings capture semantic meaning... | 0.7 | 0.85 | 3 | 2025-02-27 09:30:00
-- (5 rows)
\`\`\`

Long-term memory stores facts as embeddings and retrieves relevant memories using semantic search. The query combines importance scores with similarity scores for ranking.

### Memory Importance Scoring

Importance scores rank memories by relevance. Scores are updated based on access patterns. Frequently accessed memories have higher scores. Recently accessed memories have higher scores.

\`\`\`sql
-- Update importance score based on access
CREATE OR REPLACE FUNCTION update_memory_importance()
RETURNS TRIGGER AS $$
BEGIN
    -- Increment access count
    NEW.access_count = OLD.access_count + 1;
    NEW.last_accessed = CURRENT_TIMESTAMP;
    
    -- Update importance score (decay over time, boost on access)
    NEW.importance_score = LEAST(1.0, 
        OLD.importance_score * 0.95 + 0.1 + 
        (CASE WHEN OLD.last_accessed IS NULL THEN 0.05 ELSE 0 END)
    );
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER memory_importance_trigger
BEFORE UPDATE ON long_term_memory
FOR EACH ROW
WHEN (NEW.last_accessed != OLD.last_accessed)
EXECUTE FUNCTION update_memory_importance();

-- Query memories by importance
SELECT 
    content,
    importance_score,
    access_count,
    last_accessed,
    EXTRACT(EPOCH FROM (CURRENT_TIMESTAMP - last_accessed)) / 3600 AS hours_since_access
FROM long_term_memory
WHERE agent_id = 'agent-uuid-456'
ORDER BY importance_score DESC, last_accessed DESC NULLS LAST
LIMIT 10;
\`\`\`

Memory importance scoring updates scores based on access patterns. Frequently accessed memories have higher importance.

## Memory Retrieval Strategies

Memory retrieval uses semantic search to find relevant memories. Retrieval strategies balance recall and precision. Different strategies work for different use cases.

![Memory Retrieval Process](/blog/agent-memory-systems-long-term-short-term/diagram-memory-retrieval.svg?v=1)

Memory retrieval includes three strategies. Strategy one is similarity search that finds memories by semantic similarity. Strategy two is importance-weighted search that combines similarity with importance scores. Strategy three is hybrid search that combines semantic and keyword search.

### Similarity-Based Retrieval

Similarity-based retrieval finds memories by semantic similarity. Queries are converted to embeddings. Similarity search finds relevant memories. Results are ranked by similarity score.

\`\`\`sql
-- Similarity-based retrieval
WITH query_embedding AS (
    SELECT embed_text(
        'database performance optimization',
        'sentence-transformers/all-MiniLM-L6-v2'
    ) AS embedding
)
SELECT 
    content,
    1 - (embedding <=> qe.embedding) AS similarity,
    importance_score
FROM long_term_memory ltm
CROSS JOIN query_embedding qe
WHERE agent_id = 'agent-uuid-456'
AND 1 - (embedding <=> qe.embedding) > 0.7
ORDER BY embedding <=> qe.embedding
LIMIT 10;
\`\`\`

Similarity-based retrieval finds memories by semantic similarity. The query filters results above 0.7 similarity threshold.

### Importance-Weighted Retrieval

Importance-weighted retrieval combines similarity with importance scores. This strategy prioritizes frequently accessed memories. It balances relevance with utility.

\`\`\`sql
-- Importance-weighted retrieval
WITH query_embedding AS (
    SELECT embed_text(
        'vector search implementation',
        'sentence-transformers/all-MiniLM-L6-v2'
    ) AS embedding
),
scored_memories AS (
    SELECT 
        content,
        importance_score,
        1 - (embedding <=> qe.embedding) AS similarity,
        (importance_score * 0.4 + (1 - (embedding <=> qe.embedding)) * 0.6) AS combined_score
    FROM long_term_memory ltm
    CROSS JOIN query_embedding qe
    WHERE agent_id = 'agent-uuid-456'
)
SELECT 
    content,
    importance_score,
    similarity,
    combined_score
FROM scored_memories
WHERE similarity > 0.6
ORDER BY combined_score DESC
LIMIT 10;
\`\`\`

Importance-weighted retrieval combines similarity with importance scores. The combined score balances relevance with utility.

### Hybrid Retrieval

Hybrid retrieval combines semantic search with keyword search. This strategy improves recall for specific terms. It balances semantic understanding with exact matches.

\`\`\`sql
-- Hybrid retrieval (semantic + keyword)
ALTER TABLE long_term_memory ADD COLUMN IF NOT EXISTS fts_vector tsvector;
UPDATE long_term_memory SET fts_vector = to_tsvector('english', content) WHERE fts_vector IS NULL;
CREATE INDEX IF NOT EXISTS idx_long_term_memory_fts ON long_term_memory USING gin(fts_vector);

WITH query_embedding AS (
    SELECT embed_text(
        'PostgreSQL index optimization',
        'sentence-transformers/all-MiniLM-L6-v2'
    ) AS embedding
),
semantic_results AS (
    SELECT 
        id,
        content,
        1 - (embedding <=> qe.embedding) AS semantic_score,
        ROW_NUMBER() OVER (ORDER BY embedding <=> qe.embedding) AS semantic_rank
    FROM long_term_memory ltm
    CROSS JOIN query_embedding qe
    WHERE agent_id = 'agent-uuid-456'
    ORDER BY embedding <=> qe.embedding
    LIMIT 20
),
keyword_results AS (
    SELECT 
        id,
        content,
        ts_rank(fts_vector, plainto_tsquery('english', 'PostgreSQL index optimization')) AS keyword_score,
        ROW_NUMBER() OVER (ORDER BY ts_rank(fts_vector, plainto_tsquery('english', 'PostgreSQL index optimization')) DESC) AS keyword_rank
    FROM long_term_memory
    WHERE agent_id = 'agent-uuid-456'
    AND fts_vector @@ plainto_tsquery('english', 'PostgreSQL index optimization')
    ORDER BY keyword_score DESC
    LIMIT 20
),
hybrid_scores AS (
    SELECT 
        COALESCE(s.id, k.id) AS id,
        COALESCE(s.content, k.content) AS content,
        COALESCE(s.semantic_score, 0) AS semantic_score,
        COALESCE(k.keyword_score, 0) AS keyword_score,
        (1.0 / (60 + COALESCE(s.semantic_rank, 1000))) + 
        (1.0 / (60 + COALESCE(k.keyword_rank, 1000))) AS rrf_score
    FROM semantic_results s
    FULL OUTER JOIN keyword_results k ON s.id = k.id
)
SELECT 
    content,
    semantic_score,
    keyword_score,
    rrf_score
FROM hybrid_scores
ORDER BY rrf_score DESC
LIMIT 10;
\`\`\`

Hybrid retrieval combines semantic search with keyword search using reciprocal rank fusion. This improves recall for specific terms.

## Memory Performance Optimization

Memory systems require optimization for production use. Optimization strategies include indexing, caching, and batch operations.

### Index Optimization

Vector indexes accelerate similarity search. HNSW indexes provide sub-10ms queries on millions of vectors. Index parameters balance speed and accuracy.

\`\`\`sql
-- Optimize HNSW index for memory retrieval
CREATE INDEX idx_long_term_memory_embedding_optimized
ON long_term_memory 
USING hnsw (embedding vector_cosine_ops) 
WITH (m = 32, ef_construction = 128);

-- Monitor index performance
EXPLAIN ANALYZE
SELECT content, 1 - (embedding <=> query_embedding) AS similarity
FROM long_term_memory
WHERE agent_id = 'agent-uuid-456'
ORDER BY embedding <=> query_embedding
LIMIT 10;
\`\`\`

Index optimization improves query performance. Higher m values improve recall but slow queries. Tune parameters based on data size.

### Memory Caching

Memory caching reduces retrieval latency. Frequently accessed memories are cached in memory. Cache eviction uses LRU policy.

\`\`\`sql
-- Memory cache table (application-level, example structure)
CREATE TABLE memory_cache (
    cache_key TEXT PRIMARY KEY,
    memory_id UUID REFERENCES long_term_memory(id),
    cached_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    access_count INTEGER DEFAULT 0,
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cache frequently accessed memories
INSERT INTO memory_cache (cache_key, memory_id)
SELECT 
    'agent-' || agent_id || '-memory-' || id,
    id
FROM long_term_memory
WHERE agent_id = 'agent-uuid-456'
AND access_count > 10
AND last_accessed > CURRENT_TIMESTAMP - INTERVAL '1 day'
ON CONFLICT (cache_key) DO UPDATE
SET access_count = memory_cache.access_count + 1,
    last_accessed = CURRENT_TIMESTAMP;
\`\`\`

Memory caching reduces retrieval latency for frequently accessed memories.

## Real-World Examples

### Example 1: Customer Support Agent

A customer support agent handles 1,000 conversations daily. The agent uses short-term memory for conversation context. The agent uses long-term memory for knowledge base. Average conversation length is 5 messages. 80% of conversations reference past interactions.

The memory system stores 5,000 messages daily in short-term memory. The system stores 200 important facts daily in long-term memory. Memory retrieval improves response quality by 40%. Average response time is 2 seconds with memory, 4 seconds without.

### Example 2: Research Assistant Agent

A research assistant agent processes 500 research queries weekly. The agent uses long-term memory for research findings. The agent uses working memory for computation state. Average query requires 3 memory retrievals. 90% of queries benefit from past research.

The memory system stores 1,000 research findings weekly in long-term memory. The system uses working memory for 10 computation steps per query. Memory retrieval improves answer quality by 60%. Average query time is 5 seconds with memory, 12 seconds without.

### Example 3: Code Review Agent

A code review agent reviews 200 code changes daily. The agent uses long-term memory for coding patterns. The agent uses short-term memory for review context. Average review references 5 past patterns. 70% of reviews use memory for pattern matching.

The memory system stores 500 coding patterns in long-term memory. The system stores 200 review contexts daily in short-term memory. Memory retrieval improves review accuracy by 50%. Average review time is 3 seconds with memory, 8 seconds without.

## Best Practices

### 1. Memory Hierarchy

Use appropriate memory types for different purposes. Short-term memory for conversation context. Long-term memory for persistent knowledge. Working memory for computation state.

### 2. Importance Scoring

Implement importance scoring for long-term memory. Update scores based on access patterns. Use scores to prioritize retrieval.

### 3. Retrieval Strategies

Use similarity-based retrieval for semantic queries. Use importance-weighted retrieval for utility. Use hybrid retrieval for specific terms.

### 4. Performance Optimization

Optimize indexes for query patterns. Cache frequently accessed memories. Use batch operations for bulk updates.

### 5. Memory Management

Archive old short-term memories to long-term. Prune low-importance long-term memories. Clear working memory after task completion.

## Conclusion

Agent memory systems enable context continuity and knowledge accumulation. Short-term memory maintains conversation context. Long-term memory stores persistent knowledge. Working memory holds computation state.

Memory retrieval uses semantic search to find relevant memories. Different retrieval strategies work for different use cases. Performance optimization ensures fast retrieval at scale.

Use memory systems when agents need context continuity, knowledge accumulation, or learning from experience. NeuronDB and NeuronAgent provide complete memory infrastructure for production agent systems.

## Related Blog Posts

[Agentic AI: Guide to Autonomous AI Agents](/blog/agentic-ai)

Complete guide to building autonomous AI agents with NeuronAgent.

[Human-in-the-Loop (HITL) Workflows: Implementing Approval Systems with NeuronAgent](/blog/hitl-workflows-approval-systems-neuronagent)

Learn how to implement HITL workflows with approval systems.

[RAG: Retrieval-Augmented Generation With PostgreSQL](/blog/rag-complete-guide)

Build RAG systems with document retrieval and context building.

## Support

For questions, issues, or commercial support, contact [support@neurondb.ai](mailto:support@neurondb.ai)
`;

export default function BlogPost() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents',
    description: 'Complete guide to implementing agent memory systems with long-term and short-term memory patterns',
    image: 'https://neurondb.ai/blog/agent-memory-systems-long-term-short-term/og-image.svg',
    datePublished: '2025-02-28',
    dateModified: '2025-02-28',
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
      '@id': 'https://neurondb.ai/blog/agent-memory-systems-long-term-short-term',
    },
    keywords: 'agent memory, long-term memory, short-term memory, agent memory systems, memory retrieval, NeuronAgent, NeuronDB',
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPageTracker
        slug="agent-memory-systems-long-term-short-term"
        title="Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents"
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
                    url="https://neurondb.ai/blog/agent-memory-systems-long-term-short-term"
                    title="Agent Memory Systems: Long-Term vs Short-Term Memory in AI Agents"
                    summary="Complete guide to implementing agent memory systems with long-term and short-term memory patterns"
                    hashtags={[
                      'AgentMemory',
                      'LongTermMemory',
                      'ShortTermMemory',
                      'AgentMemorySystems',
                      'MemoryRetrieval',
                      'SemanticMemory',
                      'NeuronAgent',
                      'NeuronDB',
                      'PostgreSQL',
                      'VectorSearch',
                      'AIAgents',
                      'AgenticAI'
                    ]}
                  />
                </div>
              </div>
            </div>
            
            {/* Sidebar - Related Blogs */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="px-4 sm:px-6 lg:px-0">
                <RelatedBlogs 
                  currentSlug="agent-memory-systems-long-term-short-term" 
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