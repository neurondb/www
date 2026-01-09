# NeuronDB Documentation - Complete Guide

This document provides comprehensive information about all NeuronDB ecosystem documentation available in this repository.

## Overview

The NeuronDB documentation is organized to cover every aspect of the ecosystem:

- **NeuronDB** - PostgreSQL extension with vector search, ML algorithms, GPU acceleration
- **NeuronAgent** - AI agent runtime with REST API, WebSocket, and tool execution
- **NeuronMCP** - Model Context Protocol server with 100+ tools
- **NeuronDesktop** - Unified web interface for managing all components

## Documentation Structure

### Web Documentation (Next.js Pages)

All web-accessible documentation is located in `/app/docs/` and is served through Next.js:

- **Getting Started**: `/app/docs/getting-started/`
- **Installation**: `/app/docs/installation/`
- **Features**: `/app/docs/features/`
- **ML Algorithms**: `/app/docs/ml/`
- **GPU Support**: `/app/docs/gpu/`
- **Deployment**: `/app/docs/deployment/`
- **Components**: `/app/neuronagent/`, `/app/neuronmcp/`, `/app/neurondesktop/`

### Source Documentation (Markdown Files)

The source repository contains detailed documentation in markdown format:

- **Main Docs**: `/neurondb/Docs/`
- **Component Docs**: 
  - `/neurondb/NeuronDB/docs/`
  - `/neurondb/NeuronAgent/docs/`
  - `/neurondb/NeuronMCP/docs/`
  - `/neurondb/NeuronDesktop/docs/`

## Complete Feature Coverage

### NeuronDB Core Extension

#### Vector Search & Indexing
- ✅ Vector types (vector, vectorp, vecmap, vgraph, rtext)
- ✅ Distance metrics (L2, Cosine, Inner Product, Manhattan, Hamming, Jaccard, Chebyshev, Minkowski)
- ✅ Indexing methods (HNSW, IVF, PQ, OPQ)
- ✅ Quantization (int8, fp16, binary, uint8, ternary, int4)
- ✅ Index tuning and maintenance

#### Machine Learning (52+ Algorithms)
- ✅ Classification (Random Forest, SVM, Logistic Regression, Naive Bayes, Decision Trees, Neural Networks)
- ✅ Regression (Linear, Ridge, Lasso, Deep Learning)
- ✅ Clustering (K-Means, Mini-batch K-means, DBSCAN, GMM, Hierarchical)
- ✅ Dimensionality Reduction (PCA, PCA Whitening)
- ✅ Gradient Boosting (XGBoost, LightGBM, CatBoost)
- ✅ Quality Metrics (Recall@K, Precision@K, F1@K, MRR, Davies-Bouldin)
- ✅ Outlier Detection (Z-score, Modified Z-score, IQR)
- ✅ Drift Detection (Centroid drift, Distribution divergence, Temporal monitoring)
- ✅ Topic Discovery
- ✅ Time Series (ARIMA, Forecasting, Seasonal decomposition)
- ✅ Recommendation Systems (Collaborative filtering, Ranking)

#### ML Operations
- ✅ Embedding Generation (Text, Image, Multimodal)
- ✅ Model Inference (ONNX runtime, Batch processing)
- ✅ Model Management (Version control, Export/import, Monitoring)
- ✅ AutoML (Automated hyperparameter tuning, Model selection)
- ✅ Feature Store (Feature management, Versioning)

#### Hybrid Search & Retrieval
- ✅ Hybrid Search (Vector + Full-text)
- ✅ Multi-Vector Search
- ✅ Faceted Search
- ✅ Temporal Search

#### Reranking
- ✅ Cross-Encoder Reranking
- ✅ LLM Reranking
- ✅ ColBERT Reranking
- ✅ Ensemble Reranking

#### RAG Pipeline
- ✅ Document Processing (Text processing, Chunking, NLP)
- ✅ LLM Integration (Hugging Face, OpenAI)
- ✅ Context Retrieval
- ✅ Response Generation

#### Background Workers
- ✅ neuranq (Async job queue executor)
- ✅ neuranmon (Live query auto-tuner)
- ✅ neurandefrag (Index maintenance)
- ✅ neuranllm (LLM job processor)

#### GPU Acceleration
- ✅ CUDA Support (NVIDIA GPUs)
- ✅ ROCm Support (AMD GPUs)
- ✅ Metal Support (Apple Silicon)
- ✅ Auto-Detection (Automatic GPU detection with CPU fallback)

#### Performance & Security
- ✅ SIMD Optimization (AVX2/AVX512, NEON)
- ✅ Security (Encryption, Differential privacy, RLS)
- ✅ Monitoring (7 built-in views, Prometheus metrics)

### NeuronAgent

#### Core Features
- ✅ Agent State Machine (State persistence, Recovery, Transitions)
- ✅ Long-term Memory (HNSW-based vector search)
- ✅ Tool System (SQL, HTTP, Code, Shell)
- ✅ REST API (Full CRUD for agents, sessions, messages)
- ✅ WebSocket (Real-time streaming responses)
- ✅ Background Jobs (PostgreSQL-based job queue)
- ✅ Authentication & Security (API keys, Rate limiting, RBAC)
- ✅ Session Management
- ✅ NeuronDB Integration

#### Advanced Features
- ✅ Evaluation Framework
- ✅ Execution Snapshots & Replay
- ✅ Workflow Engine
- ✅ Workflow Schedules
- ✅ Agent Specializations
- ✅ Multi-agent Collaboration
- ✅ Human-in-the-Loop (HITL)
- ✅ Budget Management
- ✅ Webhooks
- ✅ Observability (Metrics, Tracing, Logging)
- ✅ Safety Filters
- ✅ Browser Automation
- ✅ Virtual Filesystem
- ✅ Async Tasks
- ✅ Sub-agents
- ✅ Task Alerts

### NeuronMCP

#### MCP Protocol
- ✅ JSON-RPC 2.0 over stdio
- ✅ HTTP and SSE transport support
- ✅ Tools Protocol
- ✅ Resources Protocol
- ✅ Prompts Protocol
- ✅ Sampling/Completions
- ✅ Progress Tracking
- ✅ Batch Operations

#### Tools (100+)
- ✅ Vector Operations (50+ tools)
- ✅ Embedding Functions
- ✅ Hybrid Search Tools
- ✅ Reranking Tools
- ✅ ML Operations Tools
- ✅ Analytics Tools
- ✅ Time Series Tools
- ✅ AutoML Tools
- ✅ ONNX Tools
- ✅ Index Management Tools
- ✅ RAG Operations Tools
- ✅ Workers & GPU Tools
- ✅ Vector Graph Tools
- ✅ Vecmap Operations Tools
- ✅ Dataset Loading Tools
- ✅ PostgreSQL Administration (27 tools)

#### Resources
- ✅ Schema Resources
- ✅ Model Resources
- ✅ Index Resources
- ✅ Config Resources
- ✅ Worker Resources
- ✅ Stats Resources

#### Enterprise Features
- ✅ Middleware (Validation, Logging, Timeout, Error Handling, Auth, Rate Limiting)
- ✅ Caching Layer (TTL, Connection Pooling)
- ✅ Metrics (Prometheus)
- ✅ Webhooks
- ✅ Retry/Resilience (Circuit Breaker)
- ✅ Health Checks

### NeuronDesktop

#### Core Features
- ✅ Unified Dashboard (Single interface for all components)
- ✅ Real-time Communication (WebSocket)
- ✅ MCP Server Integration
- ✅ Agent Management
- ✅ Vector Search Interface
- ✅ Secure Authentication
- ✅ Metrics & Monitoring
- ✅ Comprehensive Logging
- ✅ Automated Setup

#### Technical Features
- ✅ Profile Management
- ✅ Connection Configuration
- ✅ API Key Management
- ✅ Model Configuration
- ✅ Database Management
- ✅ Query Editor
- ✅ Index Management
- ✅ Performance Analytics

## Documentation Files by Category

### Getting Started
- `/app/docs/getting-started/page.tsx` - Main getting started guide
- `/app/docs/getting-started/simple-start/page.tsx` - Beginner-friendly guide
- `/app/docs/getting-started/docker/page.tsx` - Docker quick start
- `/app/docs/getting-started/quickstart/page.tsx` - Technical quick start
- `/app/docs/installation/page.tsx` - Installation guide

### Core Features
- `/app/docs/features/vector-types/page.tsx` - Vector types
- `/app/docs/features/distance-metrics/page.tsx` - Distance metrics
- `/app/docs/features/quantization/page.tsx` - Quantization
- `/app/docs/indexing/page.tsx` - Indexing methods

### Machine Learning
- `/app/docs/ml/page.tsx` - ML overview
- `/app/docs/ml/classification/page.tsx` - Classification algorithms
- `/app/docs/ml/regression/page.tsx` - Regression algorithms
- `/app/docs/ml/clustering/page.tsx` - Clustering algorithms
- `/app/docs/ml/embedding-generation/page.tsx` - Embedding generation
- `/app/docs/ml/inference/page.tsx` - Model inference
- `/app/docs/ml/model-management/page.tsx` - Model management
- `/app/docs/ml/random-forest/page.tsx` - Random Forest
- `/app/docs/ml/gradient-boosting/page.tsx` - Gradient Boosting
- `/app/docs/ml/dimensionality-reduction/page.tsx` - Dimensionality Reduction
- `/app/docs/ml/quality-metrics/page.tsx` - Quality Metrics
- `/app/docs/ml/outlier-detection/page.tsx` - Outlier Detection
- `/app/docs/ml/drift-detection/page.tsx` - Drift Detection
- `/app/docs/ml/topic-discovery/page.tsx` - Topic Discovery
- `/app/docs/ml/time-series/page.tsx` - Time Series
- `/app/docs/ml/recommendation-systems/page.tsx` - Recommendation Systems

### Hybrid Search & RAG
- `/app/docs/hybrid/overview/page.tsx` - Hybrid search overview
- `/app/docs/hybrid/multi-vector/page.tsx` - Multi-vector search
- `/app/docs/hybrid/faceted-search/page.tsx` - Faceted search
- `/app/docs/hybrid/temporal-search/page.tsx` - Temporal search
- `/app/docs/rag/page.tsx` - RAG overview
- `/app/docs/rag/document-processing/page.tsx` - Document processing
- `/app/docs/rag/llm-integration/page.tsx` - LLM integration
- `/app/docs/reranking/overview/page.tsx` - Reranking overview
- `/app/docs/reranking/cross-encoder/page.tsx` - Cross-encoder
- `/app/docs/reranking/llm-reranking/page.tsx` - LLM reranking
- `/app/docs/reranking/colbert/page.tsx` - ColBERT
- `/app/docs/reranking/ensemble/page.tsx` - Ensemble reranking

### Background Workers
- `/app/docs/background-workers/page.tsx` - Workers overview
- `/app/docs/background-workers/neuranq/page.tsx` - Queue worker
- `/app/docs/background-workers/neuranmon/page.tsx` - Auto-tuner
- `/app/docs/background-workers/neurandefrag/page.tsx` - Index maintenance
- `/app/docs/background-workers/neuranllm/page.tsx` - LLM processor

### GPU Acceleration
- `/app/docs/gpu/page.tsx` - GPU overview
- `/app/docs/gpu/cuda-support/page.tsx` - CUDA support
- `/app/docs/gpu/rocm-support/page.tsx` - ROCm support
- `/app/docs/gpu/metal-support/page.tsx` - Metal support
- `/app/docs/gpu/auto-detection/page.tsx` - Auto-detection

### Deployment & Operations
- `/app/docs/deployment/kubernetes/page.tsx` - Kubernetes deployment
- `/app/docs/deployment/observability/page.tsx` - Observability stack
- `/app/docs/deployment/scripts/page.tsx` - Operational scripts
- `/app/docs/configuration/page.tsx` - Configuration guide
- `/app/docs/troubleshooting/page.tsx` - Troubleshooting guide
- `/app/docs/performance/page.tsx` - Performance guide
- `/app/docs/performance/monitoring/page.tsx` - Monitoring
- `/app/docs/performance/simd-optimization/page.tsx` - SIMD optimization
- `/app/docs/security/page.tsx` - Security guide

### Components
- `/app/neuronagent/page.tsx` - NeuronAgent overview
- `/app/neuronmcp/page.tsx` - NeuronMCP overview
- `/app/neurondesktop/page.tsx` - NeuronDesktop overview

### API References
- `/app/docs/sql-api/page.tsx` - SQL API reference (473+ functions)

## Documentation Completeness

### Fully Documented ✅
- Getting Started guides
- Installation instructions
- Vector search & indexing
- ML algorithms (all 52+)
- GPU acceleration (all platforms)
- Background workers (all 4)
- Configuration options
- Deployment options
- Component overviews
- API references

### Needs Enhancement ⚠️
- Advanced features examples
- Performance tuning best practices
- Troubleshooting scenarios
- Security best practices details
- Production runbooks

### Missing Documentation ❌
- Internal architecture deep dives
- Contributor development guides
- Version migration guides
- Integration pattern examples
- Production operation runbooks

## How to Contribute Documentation

1. **Identify Gap**: Check what's missing or needs improvement
2. **Use Format**: Follow existing Next.js page format (`/app/docs/*/page.tsx`)
3. **Reference Source**: Base content on neurondb repository documentation
4. **Add Examples**: Include code examples and use cases
5. **Test Links**: Ensure all internal links work
6. **Update Index**: Update DOCUMENTATION_INDEX.md

## Documentation Sources

### Primary Sources
- `/neurondb/README.md` - Main project README
- `/neurondb/DOCUMENTATION.md` - Documentation index
- `/neurondb/Docs/` - Main documentation directory
- Component-specific docs in each component directory

### Component Documentation
- `/neurondb/NeuronDB/docs/` - NeuronDB extension docs
- `/neurondb/NeuronAgent/docs/` - NeuronAgent docs
- `/neurondb/NeuronMCP/` - NeuronMCP docs (README, tools_reference.md, etc.)
- `/neurondb/NeuronDesktop/docs/` - NeuronDesktop docs

### Examples & Tutorials
- `/neurondb/examples/` - Working examples
- Component-specific examples in each component directory

## Version Information

- **Documentation Version**: 2.0.0 (main branch)
- **Last Updated**: 2026-01-08
- **Repository**: https://github.com/neurondb-ai/neurondb
- **Web Documentation**: https://www.neurondb.ai/docs

## Key Statistics

- **Total SQL Functions**: 473+
- **ML Algorithms**: 52+
- **MCP Tools**: 100+
- **Components**: 4 (NeuronDB, NeuronAgent, NeuronMCP, NeuronDesktop)
- **Documentation Pages**: 76+ Next.js pages
- **Markdown Docs**: 100+ files in repository

## Quick Links

- **Main Documentation**: https://www.neurondb.ai/docs
- **Getting Started**: https://www.neurondb.ai/docs/getting-started
- **GitHub Repository**: https://github.com/neurondb-ai/neurondb
- **API Reference**: https://www.neurondb.ai/docs/sql-api

---

**This documentation index is maintained to ensure comprehensive coverage of all NeuronDB ecosystem features and capabilities.**

