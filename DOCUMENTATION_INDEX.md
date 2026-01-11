# NeuronDB Complete Documentation Index

**Comprehensive documentation index for the NeuronDB AI ecosystem**

This document provides a complete map of all documentation in the NeuronDB ecosystem, covering every component, feature, and capability.

## Documentation Structure

### Core Components

#### NeuronDB (PostgreSQL Extension)
- **Location**: `/app/docs/`
- **Features**: 520+ SQL functions, vector search, ML algorithms, GPU acceleration
- **Key Documents**:
  - Getting Started: `/docs/getting-started`
  - Installation: `/docs/installation`
  - Vector Types: `/docs/features/vector-types`
  - Indexing: `/docs/indexing`
  - SQL API: `/docs/sql-api`
  - Configuration: `/docs/configuration`
  - GPU Support: `/docs/gpu/`
  - ML Algorithms: `/docs/ml/`
  - Background Workers: `/docs/background-workers/`

#### NeuronAgent (Agent Runtime)
- **Location**: `/app/neuronagent`
- **Features**: REST API, WebSocket, long-term memory, tool execution
- **Key Documents**:
  - Main Page: `/neuronagent`
  - Architecture: See NeuronAgent/README.md in repository
  - API Reference: See NeuronAgent/docs/API.md
  - CLI Guide: See NeuronAgent/docs/CLI_GUIDE.md
  - Deployment: See NeuronAgent/docs/DEPLOYMENT.md
  - Connectors: See NeuronAgent/docs/CONNECTORS.md

#### NeuronMCP (MCP Server)
- **Location**: `/app/neuronmcp`
- **Features**: 100+ tools (27 PostgreSQL + 70+ NeuronDB), MCP protocol
- **Key Documents**:
  - Main Page: `/neuronmcp`
  - Tools Reference: See NeuronMCP/tools_reference.md
  - PostgreSQL Tools: See NeuronMCP/postgresql_tools.md
  - Setup Guide: See NeuronMCP/docs/NEURONDB_MCP_SETUP.md
  - Tool Catalog: See NeuronMCP/docs/tool-resource-catalog.md

#### NeuronDesktop (Web UI)
- **Location**: `/app/neurondesktop`
- **Features**: Unified dashboard, real-time monitoring, MCP integration
- **Key Documents**:
  - Main Page: `/neurondesktop`
  - API Reference: See NeuronDesktop/docs/API.md
  - Deployment: See NeuronDesktop/docs/DEPLOYMENT.md
  - Integration: See NeuronDesktop/docs/INTEGRATION.md

## Complete Feature Documentation

### Vector Search & Indexing

#### Vector Types
- **Document**: `/docs/features/vector-types`
- **Covers**:
  - `vector` - Dense vectors (float32)
  - `vectorp` - Product quantization vectors
  - `vecmap` - Sparse vector maps
  - `vgraph` - Vector graphs
  - `rtext` - Retrieval text
- **Source**: NeuronDB/docs/vector-search/vector-types.md

#### Distance Metrics
- **Document**: `/docs/features/distance-metrics`
- **Covers**:
  - L2 (Euclidean)
  - Cosine similarity
  - Inner product
  - Manhattan (L1)
  - Hamming
  - Jaccard
  - Chebyshev
  - Minkowski
- **Source**: NeuronDB/docs/vector-search/distance-metrics.md

#### Indexing
- **Document**: `/docs/indexing`
- **Covers**:
  - HNSW (Hierarchical Navigable Small World)
  - IVF (Inverted File Index)
  - Product Quantization (PQ)
  - Optimized PQ (OPQ)
  - Index tuning and maintenance
- **Source**: NeuronDB/docs/vector-search/indexing.md

#### Quantization
- **Document**: `/docs/features/quantization`
- **Covers**:
  - int8 quantization
  - fp16 quantization
  - Binary quantization
  - uint8, ternary, int4
  - Dequantization
- **Source**: NeuronDB/docs/vector-search/quantization.md

### Machine Learning

#### ML Algorithms (52+)
- **Location**: `/docs/ml/`
- **Categories**:
  - Classification: `/docs/ml/classification`
    - Random Forest: `/docs/ml/random-forest`
    - SVM: `/docs/ml/svm`
    - Logistic Regression
    - Naive Bayes
    - Decision Trees
    - Neural Networks
  - Regression: `/docs/ml/regression`
    - Linear Regression
    - Ridge Regression
    - Lasso Regression
    - Deep Learning models
  - Clustering: `/docs/ml/clustering`
    - K-Means
    - Mini-batch K-means
    - DBSCAN
    - GMM (Gaussian Mixture Models)
    - Hierarchical clustering
  - Dimensionality Reduction: `/docs/ml/dimensionality-reduction`
    - PCA
    - PCA Whitening
  - Gradient Boosting: `/docs/ml/gradient-boosting`
    - XGBoost
    - LightGBM
    - CatBoost
  - Quality Metrics: `/docs/ml/quality-metrics`
    - Recall@K
    - Precision@K
    - F1@K
    - MRR (Mean Reciprocal Rank)
    - Davies-Bouldin Index
  - Outlier Detection: `/docs/ml/outlier-detection`
    - Z-score
    - Modified Z-score
    - IQR (Interquartile Range)
  - Drift Detection: `/docs/ml/drift-detection`
    - Centroid drift
    - Distribution divergence
    - Temporal monitoring
  - Topic Discovery: `/docs/ml/topic-discovery`
    - Topic modeling
    - Analysis
  - Time Series: `/docs/ml/time-series`
    - ARIMA
    - Forecasting
    - Seasonal decomposition
  - Recommendation Systems: `/docs/ml/recommendation-systems`
    - Collaborative filtering
    - Ranking

#### ML Operations
- **Embedding Generation**: `/docs/ml/embedding-generation`
  - Text embeddings
  - Image embeddings
  - Multimodal embeddings
  - Caching
- **Model Inference**: `/docs/ml/inference`
  - ONNX runtime
  - Batch processing
  - GPU acceleration
- **Model Management**: `/docs/ml/model-management`
  - Version control
  - Export/import
  - Monitoring
- **AutoML**: `/docs/ml/hyperparameter-tuning`
  - Automated tuning
  - Model selection
- **Feature Store**: `/docs/ml/feature-store`
  - Feature management
  - Versioning

### Hybrid Search & Retrieval

#### Hybrid Search
- **Overview**: `/docs/hybrid/overview`
- **Multi-Vector**: `/docs/hybrid/multi-vector`
- **Faceted Search**: `/docs/hybrid/faceted-search`
- **Temporal Search**: `/docs/hybrid/temporal-search`

#### Reranking
- **Overview**: `/docs/reranking/overview`
- **Cross-Encoder**: `/docs/reranking/cross-encoder`
- **LLM Reranking**: `/docs/reranking/llm-reranking`
- **ColBERT**: `/docs/reranking/colbert`
- **Ensemble**: `/docs/reranking/ensemble`

### RAG Pipeline

#### RAG Operations
- **Overview**: `/docs/rag`
- **Document Processing**: `/docs/rag/document-processing`
  - Text processing
  - Chunking strategies
  - NLP capabilities
- **LLM Integration**: `/docs/rag/llm-integration`
  - Hugging Face
  - OpenAI
  - Local models

### Background Workers

#### Worker Overview
- **Document**: `/docs/background-workers`
- **Workers**:
  - **neuranq** (`/docs/background-workers/neuranq`)
    - Async job queue executor
    - Batch processing
  - **neuranmon** (`/docs/background-workers/neuranmon`)
    - Live query auto-tuner
    - Performance optimization
  - **neurandefrag** (`/docs/background-workers/neurandefrag`)
    - Index maintenance
    - Defragmentation
  - **neuranllm** (`/docs/background-workers/neuranllm`)
    - LLM job processor
    - Crash recovery

### GPU Acceleration

#### GPU Support
- **Overview**: `/docs/gpu`
- **CUDA Support**: `/docs/gpu/cuda-support`
  - NVIDIA GPU acceleration
  - CUDA 12.4+
  - Requirements and setup
- **ROCm Support**: `/docs/gpu/rocm-support`
  - AMD GPU acceleration
  - ROCm 6.0+
  - Requirements and setup
- **Metal Support**: `/docs/gpu/metal-support`
  - Apple Silicon GPU acceleration
  - macOS 13+
  - Requirements and setup
- **Auto-Detection**: `/docs/gpu/auto-detection`
  - Automatic GPU detection
  - Fallback to CPU

### Performance & Operations

#### Performance
- **Overview**: `/docs/performance`
- **SIMD Optimization**: `/docs/performance/simd-optimization`
  - AVX2/AVX512 (x86_64)
  - NEON (ARM64)
  - Prefetching
- **Monitoring**: `/docs/performance/monitoring`
  - 7 built-in monitoring views
  - Prometheus metrics export
  - Grafana dashboards

#### Security
- **Document**: `/docs/security`
- **Covers**:
  - Encryption
  - Differential privacy
  - Row-Level Security (RLS)
  - Authentication
  - API key management

#### Configuration
- **Document**: `/docs/configuration`
- **Covers**:
  - GUC variables
  - Core settings
  - GPU settings
  - LLM settings
  - Worker settings
  - ONNX Runtime settings
  - Quota settings
  - AutoML settings

#### Troubleshooting
- **Document**: `/docs/troubleshooting`
- **Covers**:
  - Common issues
  - Solutions
  - Debugging guides
  - Performance tuning

### Deployment

#### Docker Deployment
- **Quick Start**: `/docs/getting-started/docker`
- **Simple Start**: `/docs/getting-started/simple-start`
- **Docker Guide**: See dockers/README.md

#### Kubernetes Deployment
- **Document**: `/docs/deployment/kubernetes`
- **Covers**:
  - Helm charts
  - HPA (Horizontal Pod Autoscaling)
  - PDB (Pod Disruption Budgets)
  - Persistent storage
  - Monitoring stack

#### Observability
- **Document**: `/docs/deployment/observability`
- **Covers**:
  - Prometheus metrics
  - Grafana dashboards
  - Jaeger distributed tracing
  - Health checks

#### Operational Scripts
- **Document**: `/docs/deployment/scripts`
- **Covers**:
  - Docker management scripts
  - Database setup scripts
  - Health check scripts
  - Monitoring scripts

### API References

#### SQL API
- **Document**: `/docs/sql-api`
- **Covers**: All 520+ SQL functions
  - Vector operations
  - Distance metrics
  - Quantization functions
  - Indexing functions
  - Embedding generation
  - Hybrid search
  - Reranking
  - Machine learning
  - RAG functions
  - LLM functions
  - Utility functions

#### NeuronAgent API
- **Location**: NeuronAgent/docs/API.md
- **Covers**:
  - REST API endpoints
  - WebSocket API
  - Authentication
  - Agents CRUD
  - Sessions management
  - Messages
  - Tools execution
  - Memory search
  - Background jobs
  - Evaluation framework
  - Execution snapshots
  - Workflow schedules

#### NeuronMCP Tools
- **Location**: NeuronMCP/tools_reference.md
- **Covers**: All 100+ tools
  - Vector operations (50+ tools)
  - ML operations
  - RAG operations
  - Analytics tools
  - PostgreSQL administration (27 tools)
  - Resources
  - Prompts protocol
  - Sampling/completions

#### NeuronDesktop API
- **Location**: NeuronDesktop/docs/API.md
- **Covers**:
  - Profiles management
  - NeuronDB operations
  - Agent integration
  - MCP integration
  - Model management
  - Database management

## Component-Specific Documentation

### NeuronAgent Detailed Documentation

#### Architecture
- **File**: NeuronAgent/docs/ARCHITECTURE.md
- **Components**:
  - Database Layer (internal/db/)
  - Agent Runtime (internal/agent/)
  - Tools System (internal/tools/)
  - API Layer (internal/api/)
  - Authentication (internal/auth/)
  - Background Jobs (internal/jobs/)
  - Memory Store (HNSW-based)
  - State Machine

#### Features
- Agent State Machine with persistence
- Long-term Memory (HNSW vector search)
- Tool System (SQL, HTTP, Code, Shell)
- REST API & WebSocket
- Background Jobs (PostgreSQL-based queue)
- Authentication & Security (API keys, rate limiting, RBAC)
- Session Management
- NeuronDB Integration

#### Database Schema
- **Migrations**: NeuronAgent/sql/
  - 001_initial_schema.sql
  - 002_add_indexes.sql
  - 003_add_triggers.sql
  - 004_advanced_features.sql
  - 005_budget_schema.sql
  - 006_webhooks_schema.sql
  - 007_human_in_loop_schema.sql
  - 008_principals_and_permissions.sql
  - 009_execution_snapshots.sql
  - 010_evaluation_framework.sql
  - 011_workflow_engine.sql
  - 012_browser_sessions.sql
  - 013_collaboration_workspace.sql
  - 014_hierarchical_memory.sql
  - 015_event_stream.sql
  - 016_verification_agent.sql
  - 017_virtual_filesystem.sql
  - 018_async_tasks.sql
  - 019_sub_agents.sql
  - 020_task_alerts.sql

#### CLI
- **Guide**: NeuronAgent/docs/CLI_GUIDE.md
- **Commands**:
  - Agent creation
  - Agent management
  - Workflow management
  - Testing
  - Templates

#### Deployment
- **Guide**: NeuronAgent/docs/DEPLOYMENT.md
- **Covers**:
  - Environment variables
  - Configuration file
  - Docker deployment
  - Production setup
  - Scaling
  - Monitoring

#### Connectors
- **Guide**: NeuronAgent/docs/CONNECTORS.md
- **Covers**:
  - SQL connector
  - HTTP connector
  - Code connector
  - Shell connector
  - Custom connectors

### NeuronMCP Detailed Documentation

#### MCP Protocol
- **Implementation**: JSON-RPC 2.0 over stdio
- **Transport**: stdio, HTTP, SSE
- **Features**:
  - Tools protocol
  - Resources protocol
  - Prompts protocol
  - Sampling/completions
  - Progress tracking
  - Batch operations

#### Tools (100+)
- **Vector Operations**: 50+ tools
  - vector_search
  - vector_search_l2
  - vector_search_cosine
  - vector_search_inner_product
  - vector_similarity
  - vector_arithmetic
  - vector_distance
  - vector_quantize
  - quantization_analyze
- **Embeddings**: 
  - generate_embedding
  - batch_embedding
  - embed_image
  - embed_multimodal
  - embed_cached
  - configure_embedding_model
- **Hybrid Search**:
  - hybrid_search
  - reciprocal_rank_fusion
  - semantic_keyword_search
  - multi_vector_search
  - faceted_vector_search
  - temporal_vector_search
  - diverse_vector_search
- **Reranking**:
  - rerank_cross_encoder
  - rerank_llm
  - rerank_cohere
  - rerank_colbert
  - rerank_ltr
  - rerank_ensemble
- **ML Operations**:
  - train_model
  - predict
  - predict_batch
  - evaluate_model
  - list_models
  - get_model_info
  - delete_model
  - export_model
- **Analytics**:
  - analyze_data
  - cluster_data
  - reduce_dimensionality
  - detect_outliers
  - quality_metrics
  - detect_drift
  - topic_discovery
- **Time Series**:
  - timeseries_analysis
- **AutoML**:
  - automl
- **ONNX**:
  - onnx_model
- **Index Management**:
  - create_hnsw_index
  - create_ivf_index
  - index_status
  - drop_index
  - tune_hnsw_index
  - tune_ivf_index
- **RAG Operations**:
  - process_document
  - retrieve_context
  - generate_response
  - chunk_document
- **Workers & GPU**:
  - worker_management
  - gpu_info
- **Vector Graph**:
  - vector_graph
- **Vecmap Operations**:
  - vecmap_operations
- **Dataset Loading**:
  - load_dataset (HuggingFace, URLs, GitHub, S3, local)
- **PostgreSQL (27 tools)**:
  - postgresql_version
  - postgresql_stats
  - postgresql_databases
  - postgresql_connections
  - postgresql_locks
  - postgresql_replication
  - postgresql_settings
  - postgresql_extensions
  - postgresql_tables
  - postgresql_indexes
  - postgresql_schemas
  - postgresql_views
  - postgresql_sequences
  - postgresql_functions
  - postgresql_triggers
  - postgresql_constraints
  - postgresql_users
  - postgresql_roles
  - postgresql_permissions
  - postgresql_table_stats
  - postgresql_index_stats
  - postgresql_active_queries
  - postgresql_wait_events
  - postgresql_table_size
  - postgresql_index_size
  - postgresql_bloat
  - postgresql_vacuum_stats

#### Resources
- schema
- models
- indexes
- config
- workers
- stats

#### Setup
- **Guide**: NeuronMCP/docs/NEURONDB_MCP_SETUP.md
- **Covers**:
  - Database schema setup
  - LLM model configuration
  - API key management
  - Index templates
  - Worker configurations
  - ML algorithm defaults

#### Claude Desktop Integration
- **Configuration**: claude_desktop_config.json
- **Platforms**: macOS, Windows, Linux
- **Examples**: claude_desktop_config.*.json

### NeuronDesktop Detailed Documentation

#### Architecture
- **Frontend**: Next.js + React + TypeScript
- **Backend**: Go + Gorilla Mux
- **Integration**:
  - MCP Proxy Client
  - NeuronDB Client
  - Agent Client

#### Features
- Unified Dashboard
- Real-time Communication (WebSocket)
- MCP Server Integration
- Agent Management
- Vector Search Interface
- Secure Authentication
- Metrics & Monitoring
- Comprehensive Logging
- Automated Setup

#### Database Schema
- **Migrations**: NeuronDesktop/api/migrations/
  - 001_initial_schema.sql
  - 002_add_model_configs.sql
  - 002_add_profile_credentials.sql
  - 002_app_settings.sql
  - 003_app_settings.sql
  - 004_users.sql
  - 005_add_user_is_admin.sql
  - 006_sessions_oidc.sql
  - 007_mcp_chat_threads.sql
  - 008_agent_templates.sql
  - 008_unified_identity_model.sql
  - 009_audit_logs.sql
  - 009_oidc_hardening.sql
  - 010_organizations.sql

#### API
- **Reference**: NeuronDesktop/docs/API.md
- **Endpoints**:
  - Profiles management
  - NeuronDB operations
  - Agent integration
  - MCP integration
  - Model management
  - Database management

#### Deployment
- **Guide**: NeuronDesktop/docs/DEPLOYMENT.md
- **Covers**:
  - Docker deployment
  - Environment variables
  - Production setup
  - Monitoring

## Repository Structure

### Main Repository Files
- README.md - Main project overview
- DOCUMENTATION.md - Documentation index
- QUICKSTART.md - Quick start guide
- CHANGELOG.md - Version history
- ROADMAP.md - Feature roadmap
- SECURITY.md - Security policy
- COMPATIBILITY.md - Platform compatibility
- CONTRIBUTING.md - Contribution guidelines
- CLOUD_NATIVE.md - Kubernetes deployment guide

### Component Directories
- NeuronDB/ - PostgreSQL extension
- NeuronAgent/ - Agent runtime
- NeuronMCP/ - MCP server
- NeuronDesktop/ - Web UI

### Documentation Directories
- Docs/ - Main documentation
- NeuronDB/docs/ - NeuronDB-specific docs
- NeuronAgent/docs/ - NeuronAgent docs
- NeuronMCP/docs/ - NeuronMCP docs
- NeuronDesktop/docs/ - NeuronDesktop docs

### Examples
- examples/ - Working examples
  - semantic-search-docs/
  - rag-chatbot-pdfs/
  - agent-tools/
  - mcp-integration/
  - data_loading/

### Scripts
- scripts/ - Automation scripts
  - neurondb-setup.sh
  - neurondb-healthcheck.sh
  - neurondb-monitor.sh
  - neurondb-helm.sh
  - neurondb-docker.sh

## Documentation Coverage Summary

### Fully Documented
- ✅ Getting Started guides
- ✅ Installation instructions
- ✅ Vector search & indexing
- ✅ ML algorithms (52+)
- ✅ GPU acceleration (CUDA, ROCm, Metal)
- ✅ Background workers
- ✅ Configuration options
- ✅ Deployment options (Docker, Kubernetes)
- ✅ API references (SQL, REST, MCP)
- ✅ Component overviews

### Partially Documented (Need Enhancement)
- ⚠️ Advanced features (need more examples)
- ⚠️ Performance tuning (need best practices)
- ⚠️ Troubleshooting (need more scenarios)
- ⚠️ Security best practices (need detailed guides)

### Needs Documentation
- ❌ Internal architecture details
- ❌ Development guide for contributors
- ❌ Migration guides between versions
- ❌ Integration patterns and examples
- ❌ Production runbooks

## How to Use This Index

1. **For Users**: Start with `/docs/getting-started` for installation
2. **For Developers**: Check component-specific docs (NeuronAgent/docs/, etc.)
3. **For Operators**: See deployment docs (`/docs/deployment/`)
4. **For API Users**: See API references (SQL API, NeuronAgent API, etc.)
5. **For Contributors**: See CONTRIBUTING.md and development guides

## Documentation Version

- **Version**: 2.0.0 (main branch)
- **Last Updated**: 2026-01-08
- **Repository**: https://github.com/neurondb-ai/neurondb

---

**Note**: This index reflects the comprehensive documentation available. For the most up-to-date information, always refer to the official documentation site at https://www.neurondb.ai/docs and the GitHub repository.

