export interface SkillItem {
  name: string;
  level: number; // 0-100
  icon?: string;
  category: "dl" | "ml" | "infra" | "languages";
  highlightColor?: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolution: {
    problem: string;
    solution: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  featured: boolean;
  githubUrl: string;
  demoUrl?: string;
  paperUrl?: string;
  architectureDetails: string[];
  gradient: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  type: "Work" | "Research" | "Open Source" | "Award";
  description: string[];
  skillsUsed: string[];
  badgeColor: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  gpa?: string;
  honors?: string;
  coursework: string;
}

export interface PlaygroundModel {
  id: string;
  name: string;
  category: string;
  architecture: string;
  parameters: string;
  defaultPrompt: string;
  responseTemplate: {
    tokensPerSec: number;
    latencyMs: number;
    confidence: number;
    vramMb: number;
    outputLines: string[];
    syntheticTokens: string[];
  };
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mann Patel",
    role: "AI & Machine Learning Systems Engineer",
    statusBadge: "⚡ Available for AI/ML Engineering & Research Roles",
    location: "Ahmedabad, Mumbai, Pune / Remote",
    tagline: "Architecting Autonomous Multi-Agent AI Swarms, Production RAG Pipelines & Computer Vision Systems.",
    bio: "Computer Science & Engineering specialist skilled in building Autonomous Multi-Agent Swarms, Retrieval-Augmented Generation (RAG) engines, on-device Computer Vision with OpenCV, and high-performance full-stack AI architectures using Python (FastAPI), Next.js, PyTorch, Google Gemini, and Hugging Face diffusion models.",
    metrics: [
      { label: "Active Agent Swarms", value: "6 Coordinated", change: "Full Autonomy" },
      { label: "Omnichannel Formats", value: "12 Channels", change: "15 Platforms" },
      { label: "Zero-Cloud Security", value: "100% On-Prem", change: "OpenCV Biometrics" },
      { label: "P99 Inference Latency", value: "< 28ms", change: "Real-Time Telemetry" },
    ],
    socials: {
      github: "https://github.com/Mann-Patel85",
      linkedin: "https://linkedin.com/in/mannpatel",
      huggingface: "https://huggingface.co",
      kaggle: "https://kaggle.com",
      x: "https://x.com",
      email: "mann6657@gmail.com",
      scholar: "https://scholar.google.com",
    },
  },

  skills: [
    // Deep Learning & Multi-Agent Frameworks
    { name: "Multi-Agent Swarms & LlamaIndex", level: 96, category: "dl", highlightColor: "#00f5ff", description: "LlamaIndex Workflows, 6-agent autonomous pipelines, tool orchestration & SSE streams" },
    { name: "TigerGraph & GSQL (GraphRAG)", level: 95, category: "dl", highlightColor: "#F59E0B", description: "N-hop BFS GSQL graph queries, schema design, entity provenance & conflict detection" },
    { name: "Google Gemini 2.5 & Multimodal Vision", level: 96, category: "dl", highlightColor: "#8b5cf6", description: "Gemini 2.5 Flash, Gemini 3.6/3.7, multimodal hazard triage, text-embedding-004" },
    { name: "TensorFlow, Keras & LSTMs", level: 91, category: "dl", highlightColor: "#FF6F00", description: "Recurrent neural networks, generative music composition (music21), sequence modeling" },
    { name: "Hugging Face Diffusion", level: 92, category: "dl", highlightColor: "#FFD21E", description: "FLUX.1-schnell & SDXL commercial multimodal image generation" },
    { name: "PyTorch & Deep Learning", level: 90, category: "dl", highlightColor: "#EE4C2C", description: "Custom neural architectures, transfer learning, tensor operations" },

    // Core ML, GraphRAG & Computer Vision
    { name: "Agentic GraphRAG & Knowledge Graphs", level: 97, category: "ml", highlightColor: "#00F5FF", description: "Multi-hop graph navigation, dynamic gap detection, entity linking, 3-way RAG benchmarks" },
    { name: "Hierarchical RAG & Auto-Merging", level: 97, category: "ml", highlightColor: "#06B6D4", description: "3-tier tree parsing (2048t/512t/128t), AutoMergingRetriever, ChromaDB, zero context loss" },
    { name: "YOLOv8 & Real-Time Object Tracking", level: 95, category: "ml", highlightColor: "#10B981", description: "Ultralytics YOLOv8, live OpenCV analytics HUD, multi-object tracking IDs, snapshots" },
    { name: "Computer Vision (OpenCV & Gemini)", level: 95, category: "ml", highlightColor: "#EC4899", description: "Haar Cascade facial detection, 128D spatial histograms & EXIF GPS extraction" },
    { name: "Geospatial Mapping (Leaflet & OSM)", level: 92, category: "ml", highlightColor: "#10B981", description: "Interactive 2D/3D spatial mapping, India boundaries, color-coded urgency pins" },
    { name: "NLP, Translation & Conversational AI", level: 94, category: "ml", highlightColor: "#A855F7", description: "deep-translator, gTTS voice synthesis, FAQ chatbots, N-gram TF-IDF cosine matching" },

    // Tools, Cloud & Backend
    { name: "FastAPI & Python Async", level: 96, category: "infra", highlightColor: "#009688", description: "Asynchronous REST endpoints, WebSockets, SQLAlchemy 2.0 ORM, Pydantic v2" },
    { name: "TigerGraph DB & ChromaDB", level: 95, category: "infra", highlightColor: "#F59E0B", description: "pyTigerGraph REST++, GSQL endpoints, ChromaDB 3072-dim persistent vector stores" },
    { name: "Gradio & Streamlit Dashboards", level: 94, category: "infra", highlightColor: "#FF7C00", description: "Interactive AI studios, subgraph visualizers, 3-way RAG evaluation suites" },
    { name: "Next.js 16 & React 19", level: 95, category: "infra", highlightColor: "#38BDF8", description: "App Router, SSR/CSR, Turbopack, Tailwind CSS v4, Framer Motion" },
    { name: "Docker & Container Orchestration", level: 92, category: "infra", highlightColor: "#2496ED", description: "Multi-stage Dockerfiles, docker-compose.yml, Cloud Run container readiness" },
    { name: "Security, RBAC & JWT", level: 92, category: "infra", highlightColor: "#EF4444", description: "bcrypt password hashing, jose JWT auth, role-based access control" },

    // Languages & Accelerated Compute
    { name: "Python", level: 98, category: "languages", highlightColor: "#3776AB", description: "AsyncIO concurrency, NumPy vector math, LlamaIndex, pyTigerGraph, OpenCV, Scikit-Learn" },
    { name: "GSQL & SQL Relational DBs", level: 94, category: "languages", highlightColor: "#F59E0B", description: "TigerGraph GSQL graph queries, SQLite, PostgreSQL, SQLAlchemy 2.0 ORM" },
    { name: "TypeScript / JavaScript", level: 94, category: "languages", highlightColor: "#3178C6", description: "Modern ES6+, Next.js App Router, React 19, strict type definitions" },
    { name: "C / C++", level: 85, category: "languages", highlightColor: "#00599C", description: "Memory management, algorithms, low-level data structures" },
  ] as SkillItem[],

  skillCategories: [
    { id: "dl", title: "Autonomous Agents, LSTMs & Vision AI", icon: "Boxes", color: "from-cyan-500 to-blue-600" },
    { id: "ml", title: "Agentic GraphRAG, Vision & NLP", icon: "BrainCircuit", color: "from-purple-500 to-indigo-600" },
    { id: "infra", title: "FastAPI, TigerGraph & Next.js", icon: "Server", color: "from-emerald-500 to-teal-600" },
    { id: "languages", title: "Languages & Core Systems", icon: "Cpu", color: "from-amber-500 to-rose-600" },
  ],

  projects: [
    {
      id: "project-graphscout",
      title: "GraphScout: Agentic GraphRAG",
      tagline: "Autonomous Multi-Hop Graph Investigation & GSQL Engine",
      description: "An autonomous multi-agent GraphRAG system engineered for the TigerGraph Agentic GraphRAG Hackathon (via Unstop). Decomposes complex multi-hop queries across 2,951 Olympic documents (5.46M tokens), dynamically traversing N-hop TigerGraph subgraphs via GSQL while enforcing a 3-way benchmark against standard vector RAG and static GraphRAG.",
      problemSolution: {
        problem: "Standard vector RAG fails at multi-hop relational queries, and static GraphRAG collapses on temporal chains and N-hop aggregations.",
        solution: "Engineered an autonomous Orchestrator Agent loop with Pydantic v2 InvestigationState, dynamic GSQL graph traversal, gap detection, and 3-way benchmark evaluation (Accuracy, Completeness, Token Budgeting)."
      },
      metrics: [
        { label: "Graph Engine", value: "TigerGraph GSQL" },
        { label: "Corpus Indexed", value: "2,951 Docs / 5.4M t" },
        { label: "Benchmark Suite", value: "3-Way Evaluation" },
        { label: "Query Strategy", value: "N-Hop BFS Subgraph" }
      ],
      tags: ["TigerGraph", "GSQL", "Agentic GraphRAG", "Python", "Streamlit", "Multi-Agent Swarm", "REST++"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/GraphScout-Agentic-GraphRAG",
      demoUrl: "https://unstop.com",
      architectureDetails: [
        "TigerGraph GSQL Graph Schema with Document, Chunk, Entity, and Event vertices + 5 directional edge types",
        "Orchestrator Agent managing dynamic loop: entity linking -> GSQL N-hop traversal -> vector search -> gap evaluation -> synthesis",
        "3-Way Benchmarking Harness evaluating Standard RAG vs GraphRAG vs Agentic GraphRAG across accuracy and token cost",
        "Streamlit Investigation Studio with live step traces, interactive subgraph visualizer, and corpus explorer"
      ],
      gradient: "from-amber-500/20 via-orange-600/10 to-transparent"
    },
    {
      id: "project-enterprise-rag",
      title: "Enterprise RAG: Document Auditor",
      tagline: "Hierarchical Auto-Merging RAG & Compliance Intelligence",
      description: "An enterprise-grade agentic RAG auditor for complex legal contracts (MSAs, SLAs, Privacy Policies) built on LlamaIndex and Google Gemini 2.5 Flash, utilizing 3-tier hierarchical tree indexing (2048t/512t/128t) and Auto-Merging Retrieval to eliminate context loss.",
      problemSolution: {
        problem: "Naive flat-chunk RAG pipelines fragment multi-page legal agreements, losing crucial contract liability caps, indemnification terms, and surrounding context.",
        solution: "Engineered a 3-tier HierarchicalNodeParser with ChromaDB vector indexing on 128-token leaf nodes and dynamic auto-merging to 512/2048-token parent nodes for high-fidelity compliance auditing."
      },
      metrics: [
        { label: "RAG Architecture", value: "3-Tier Tree" },
        { label: "Embedding Dims", value: "3,072 Dims" },
        { label: "Vector Database", value: "ChromaDB" },
        { label: "Context Retention", value: "100% Auto-Merge" }
      ],
      tags: ["LlamaIndex", "Gemini 2.5 Flash", "ChromaDB", "Hierarchical RAG", "AutoMergingRetriever", "Python", "PDFReader"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/Enterprise-RAG-Agentic-Document-Auditor",
      demoUrl: "https://github.com/Mann-Patel85/Enterprise-RAG-Agentic-Document-Auditor",
      architectureDetails: [
        "3-Tier Hierarchical Parsing: 2048-token Root Nodes -> 512-token Mid Nodes -> 128-token Search Leaf Nodes",
        "Google Gemini Embedding-001 (3072 dimensions) with ChromaDB persistent vector storage context",
        "AutoMergingRetriever automatically elevating clustered leaf hits into full parent section context",
        "Multi-Agent Compliance Auditor evaluating liability limits, indemnification clauses, and GDPR/SOC2 alignment"
      ],
      gradient: "from-cyan-500/20 via-blue-600/10 to-transparent"
    },
    {
      id: "project-locustriage-ai",
      title: "LocusTriage AI",
      tagline: "Intelligent Municipal Hazard Triage & Spatial Command Center",
      description: "An AI-powered civic hazard triage and municipal dispatch system engineered for Indian Municipal Corporations (AMC, BMC, MCD, BBMP) utilizing Google Gemini 2.5 Flash multimodal vision, EXIF GPS coordinate extraction, 1-10 Urgency Scoring, and interactive Leaflet geospatial mapping.",
      problemSolution: {
        problem: "Traditional 311 municipal grievance portals suffer from slow manual classification, delayed response for fatal civic hazards (open manholes, live dangling power cables, water/gas leaks), and lack of visual urgency verification.",
        solution: "Engineered an instant AI triage pipeline using Google Gemini 2.5 Flash to visually evaluate hazard photos, assign a 1-10 severity score, extract GPS coordinates, and route incidents to municipal field teams via a live interactive geospatial command center."
      },
      metrics: [
        { label: "Vision Engine", value: "Gemini 2.5 Flash" },
        { label: "Severity Scoring", value: "1 to 10 Scale" },
        { label: "Municipal Reach", value: "6 Metro Corps" },
        { label: "Full-Stack Setup", value: "Docker Compose" }
      ],
      tags: ["FastAPI", "Next.js 16", "Gemini 2.5 Flash", "Leaflet Maps", "SQLAlchemy", "Pydantic v2", "Docker", "Pillow EXIF"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/LocusTriage-AI",
      demoUrl: "http://localhost:3000",
      architectureDetails: [
        "Google Gemini 2.5 Flash vision engine parsing hazard photos to compute 1-10 Urgency Score & diagnostic summary",
        "Pillow (PIL) metadata parser extracting EXIF GPS coordinates with fallback to device geolocation and city presets",
        "Two-Tier Portal: Citizen Reporting Dropzone + Municipal Command Center with inline SQLite status updates",
        "Geospatial Leaflet & OpenStreetMap interface with dynamic color-coded urgency pins (Critical 8-10, Moderate 5-7, Minor 1-4)",
        "Docker Compose orchestration with Python 3.11-slim backend and Node 20-alpine Next.js multi-stage frontend"
      ],
      gradient: "from-purple-500/20 via-indigo-600/10 to-transparent"
    },
    {
      id: "project-agentic-marketer",
      title: "AgenticMarketer",
      tagline: "Autonomous Multi-Agent Marketing Intelligence & Omnichannel Publisher",
      description: "An enterprise-grade autonomous 6-agent cooperative swarm that ingests brand documentation via RAG, conducts live market research with DuckDuckGo, drafts 12 tailored copy formats, generates FLUX.1 diffusion banners, and publishes across 15 social platforms.",
      problemSolution: {
        problem: "Modern marketing workflows suffer from brand inconsistency, fragmented multi-tool subscriptions, manual adaptation across 12+ channels, and lack of real-time market/competitor research.",
        solution: "Orchestrated a 6-agent pipeline (Brand Retrieval, Live Web Research, Multi-Channel Copywriter, Multimodal FLUX.1 Visual Designer, SEO/Readability Auditor, and Omnichannel Social Publisher) with hybrid vector RAG."
      },
      metrics: [
        { label: "Autonomous Swarm", value: "6 AI Agents" },
        { label: "Content Formats", value: "12 Channels" },
        { label: "Social Networks", value: "15 Platforms" },
        { label: "Visual Banner Res", value: "1024x1024 FLUX.1" }
      ],
      tags: ["FastAPI", "Next.js 16", "Google Gemini", "FLUX.1 Diffusion", "Hybrid RAG", "DuckDuckGo API", "textstat", "JWT RBAC"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/AgenticMarketer-Automated-Marketing-Intelligence",
      demoUrl: "http://localhost:8000/docs",
      paperUrl: "https://aistudio.google.com",
      architectureDetails: [
        "6-Agent Swarm Pipeline: Brand Ingestion -> Market Research -> Creative Copywriting -> FLUX.1 Image Gen -> SEO Audit -> Omnichannel Dispatch",
        "Hybrid RAG vector retrieval with Google text-embedding-004 and local TF-IDF cosine similarity fallback",
        "Multimodal visual generation routing to Hugging Face FLUX.1-schnell & SDXL with Gemini Image failover",
        "Mathematical text analysis with Flesch-Kincaid grade level, keyword density checks, and length validation",
        "Omnichannel broadcast engine supporting LinkedIn, X, Threads, Reddit, YouTube, TikTok, Medium, Discord, and Webhooks"
      ],
      gradient: "from-purple-500/20 via-indigo-600/10 to-transparent"
    },
    {
      id: "project-nexusshare-ai",
      title: "NexusShare AI",
      tagline: "Zero-Cloud P2P Network AI Intelligence & Steganography Vault",
      description: "A private, zero-cloud peer-to-peer local Wi-Fi file sharing ecosystem featuring OpenCV facial biometric authentication, on-device ML document classification across 7 domains, local zero-cloud AI Q&A, and LSB image steganography encryption.",
      problemSolution: {
        problem: "Cloud file sharing exposes sensitive enterprise documents to third-party data breaches, incurs high internet bandwidth overhead, and risks unauthorized access on local networks.",
        solution: "Built a high-speed local intranet platform with OpenCV Haar Cascade facial verification, offline TF-IDF NLP document Q&A, image steganography hiding payloads inside pixel bytes, and self-destruct ghost shares."
      },
      metrics: [
        { label: "Privacy Rating", value: "100% Zero-Cloud" },
        { label: "ML Classifier", value: "7 Domains" },
        { label: "Face Match Acc", value: ">72% 128D Cosine" },
        { label: "Network Telemetry", value: "Live WebSockets" }
      ],
      tags: ["Python FastAPI", "React 19 Vite", "OpenCV", "Scikit-Learn", "WebSockets", "Steganography", "psutil", "SHA-256"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/NexusShare-AI",
      demoUrl: "http://localhost:8000",
      architectureDetails: [
        "OpenCV Haar Cascade face detection with 128-dimensional spatial histogram extraction & single-use token issuance",
        "On-device SGDClassifier + TF-IDF model categorizing documents across 7 business/tech domains with auto-tagging",
        "Zero-cloud local document Q&A engine utilizing sentence-aware chunking and vector similarity without external APIs",
        "OpenCV LSB pixel steganography vault allowing secret text payload embedding and extraction inside cover images",
        "Ghost share engine with TTL countdown timers, auto-shredding, and SHA-256 smart deduplication"
      ],
      gradient: "from-emerald-500/20 via-teal-600/10 to-transparent"
    }
  ] as ProjectItem[],

  timeline: [
    {
      id: "exp-1",
      period: "2024 — Present",
      role: "AI & Full-Stack Systems Engineer",
      organization: "Autonomous Intelligence & Systems",
      location: "India / Remote",
      type: "Work",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      description: [
        "Built GraphScout: an autonomous Agentic GraphRAG system utilizing TigerGraph GSQL, dynamic N-hop subgraph traversals, and 3-way RAG benchmarks.",
        "Architected Enterprise RAG Document Auditor: hierarchical 3-tier indexing (2048t/512t/128t) with LlamaIndex and Gemini 2.5 Flash.",
        "Engineered LocusTriage AI (Gemini 2.5 Flash vision & Leaflet) and AgenticMarketer (6-Agent Swarm with FLUX.1 diffusion).",
        "Containerized production microservices with Docker Compose, FastAPI (SQLAlchemy 2.0), and Next.js 16."
      ],
      skillsUsed: ["TigerGraph", "GSQL", "LlamaIndex", "FastAPI", "Next.js 16", "Gemini 2.5 Flash", "ChromaDB", "Docker"]
    },
    {
      id: "exp-hackathon-tigergraph",
      period: "2025",
      role: "Hackathon Finalist — TigerGraph Agentic GraphRAG Challenge",
      organization: "TigerGraph via Unstop",
      location: "India / Global",
      type: "Award",
      badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      description: [
        "Engineered GraphScout: an autonomous multi-agent GraphRAG system answering multi-hop queries across 2,951 Olympic event documents (~5.46M tokens).",
        "Authored GSQL schemas and N-hop BFS expansion queries, implementing a rigorous 3-Way Benchmark suite (Standard RAG vs GraphRAG vs Agentic GraphRAG)."
      ],
      skillsUsed: ["TigerGraph", "GSQL", "GraphRAG", "Streamlit", "Pydantic v2", "pyTigerGraph"]
    },
    {
      id: "exp-codealpha",
      period: "December 2025",
      role: "Artificial Intelligence Intern",
      organization: "CodeAlpha",
      location: "Remote / Virtual",
      type: "Work",
      badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      description: [
        "Engineered 4 production-grade AI applications covering NLP Machine Translation, Conversational FAQ Chatbots, Generative LSTM Music, and Real-Time YOLOv8 Object Tracking.",
        "GlobalConnect AI: Built Neural Machine Translator supporting 25+ languages with gTTS audio voice synthesis and document batch translation.",
        "NeuroMelody AI: Trained a 2-layer LSTM sequence model in TensorFlow/Keras & music21 to compose dynamic multi-instrument MIDI music tracks.",
        "YOLOv8 Pro: Deployed a real-time object detection & persistent tracking pipeline with live OpenCV analytics HUD (FPS, Track IDs) and Gradio Vision Studio."
      ],
      skillsUsed: ["YOLOv8", "TensorFlow / Keras", "LSTMs", "OpenCV", "Gradio", "gTTS", "music21", "Scikit-Learn"]
    },
    {
      id: "exp-2",
      period: "2023 — 2024",
      role: "Machine Learning & Software Developer",
      organization: "Applied AI Research Labs",
      location: "India",
      type: "Research",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      description: [
        "Built document extraction and hybrid vector retrieval engines supporting multi-format parsing (PDF, DOCX, Markdown).",
        "Trained and evaluated Scikit-Learn text classifiers (SGDClassifier + TF-IDF) achieving high precision on domain categorization.",
        "Developed image steganography algorithms hiding encrypted payloads inside LSB pixel bytes with SHA-256 deduplication."
      ],
      skillsUsed: ["Python", "PyTorch", "NLP", "OpenCV", "TF-IDF", "FastAPI"]
    }
  ] as ExperienceItem[],

  playgroundModels: [
    {
      id: "model-graphscout",
      name: "GraphScout (TigerGraph Agentic GraphRAG)",
      category: "Multi-Hop Knowledge Graph Reasoning",
      architecture: "TigerGraph GSQL Engine + Multi-Agent Orchestrator Loop",
      parameters: "2,951 Olympic Docs (5.46M tokens) + REST++ Graph DB",
      defaultPrompt: "Execute multi-hop GSQL query: 'Who won the gold medal in the event held at Eton Dorney on 6 to 8 August at the 2012 Summer Olympics?'",
      responseTemplate: {
        tokensPerSec: 172.4,
        latencyMs: 15.6,
        confidence: 0.998,
        vramMb: 1980,
        outputLines: [
          "[ENTITY LINKING] Identified entities: 'Eton Dorney' (Venue), '2012 Summer Olympics' (Event), '6 to 8 August' (Date).",
          "[GSQL TRAVERSAL] Executed 'get_entity_subgraph' (2-hop BFS): Linked Venue -> Event ('Men's Single Sculls Rowing').",
          "[GAP DETECTED] Missing: Gold Medalist vertex for 'Men's Single Sculls 2012'.",
          "[VECTOR SEARCH] Retrieved provenance chunk from corpus.jsonl -> Matched: 'Mahé Drysdale (New Zealand)'.",
          "[3-WAY BENCHMARK] Standard RAG: INCOMPLETE | GraphRAG: PARTIAL | GraphScout Agentic: 100% FACTUAL [PASS]."
        ],
        syntheticTokens: [
          "GraphScout", " traversed", " 2-hop", " TigerGraph", " GSQL", " paths.", " Linked", " venue", " 'Eton Dorney'", " to", " 2012", " Rowing", " final.", " Resolved", " gold", " medalist:", " Mahé", " Drysdale", " (New", " Zealand)", " with", " 100%", " factual", " completeness."
        ]
      }
    },
    {
      id: "model-enterprise-rag",
      name: "Enterprise RAG (Hierarchical Auto-Merge)",
      category: "Hierarchical RAG & Legal Clause Auditing",
      architecture: "LlamaIndex HierarchicalNodeParser + Gemini 2.5 Flash",
      parameters: "3-Tier Tree (2048t Root / 512t Mid / 128t Leaf) + ChromaDB",
      defaultPrompt: "Audit uploaded Master Services Agreement [MSA_2026.pdf]: search for 'Limitation of Liability' and auto-merge parent clause context to verify indemnification caps.",
      responseTemplate: {
        tokensPerSec: 154.0,
        latencyMs: 16.2,
        confidence: 0.998,
        vramMb: 2600,
        outputLines: [
          "[LEAF SEARCH] Matched 3 leaf nodes (128t) in ChromaDB for query: 'Limitation of Liability' (similarity: 0.962).",
          "[AUTO-MERGING RETRIEVER] Leaf cluster threshold exceeded -> Expanding to 512-token Parent Node (Section 14.2).",
          "[ROOT CONTEXT RETRIEVED] Merged 2048-token Section 14: 'Indemnification & Aggregate Liability Caps'.",
          "[GEMINI 2.5 AUDIT] Aggregate liability capped at 12x monthly recurring fees ($1.2M cap). Consequential damages excluded.",
          "[COMPLIANCE SCORE] Legal Risk Rating: LOW (Standard Commercial Terms) [AUDIT_PASS]."
        ],
        syntheticTokens: [
          "Enterprise", " RAG", " executed", " 3-tier", " hierarchical", " auto-merging", " retrieval.", " Leaf", " nodes", " triggered", " automatic", " parent", " clause", " expansion,", " delivering", " 100%", " contextual", " integrity", " to", " Gemini", " 2.5", " Flash", " with", " zero", " clause", " fragmentation."
        ]
      }
    },
    {
      id: "model-locustriage",
      name: "LocusTriage AI (Gemini 2.5 Flash Vision)",
      category: "Municipal Hazard Triage & Spatial Routing",
      architecture: "Google Gemini 2.5 Flash Vision + EXIF GPS Extraction",
      parameters: "Multimodal Visual Inspection & Urgency Scorer",
      defaultPrompt: "Inspect citizen upload [IMG_AMC_MANHOLE_04.jpg]: detect high-risk civic hazard, extract EXIF GPS, compute 1-10 Urgency Score, and route to Ahmedabad Municipal Corporation (AMC) dispatch.",
      responseTemplate: {
        tokensPerSec: 162.5,
        latencyMs: 14.8,
        confidence: 0.996,
        vramMb: 1480,
        outputLines: [
          "[EXIF PARSER] Extracted GPS: Lat 23.0225° N, Lon 72.5714° E (Ahmedabad, Gujarat).",
          "[GEMINI 2.5 FLASH] Identified hazard: 'Uncovered Open Manhole on Pedestrian Footpath'.",
          "[SEVERITY ASSESSMENT] Urgency Score: 9 / 10 (CRITICAL_FATAL_RISK) [EMERGENCY DISPATCH].",
          "[DATABASE LOGGED] Issue ID created: 'IND-AMC-89421' -> Persisted to SQLite.",
          "[SPATIAL ROUTING] Pin plotted on Leaflet Command Map -> SMS Alert sent to AMC Ward 7 Engineer."
        ],
        syntheticTokens: [
          "LocusTriage", " AI", " evaluated", " hazard", " photo", " with", " Gemini", " 2.5", " Flash.", " Detected", " critical", " open", " manhole", " with", " Urgency", " Score", " 9/10.", " Extracted", " EXIF", " GPS", " coordinates", " and", " routed", " to", " AMC", " municipal", " emergency", " dispatch."
        ]
      }
    },
    {
      id: "model-agentic-marketer",
      name: "AgenticMarketer (6-Agent Swarm)",
      category: "Autonomous Swarm & Diffusion Generation",
      architecture: "6-Agent Swarm + FLUX.1 + Hybrid RAG",
      parameters: "6 Sub-Agents + text-embedding-004 + HF FLUX.1",
      defaultPrompt: "Execute multi-agent campaign pipeline: ingest brand guidelines, conduct live DuckDuckGo competitor analysis, generate copy for 12 channels, and synthesize 1024x1024 FLUX.1 banner.",
      responseTemplate: {
        tokensPerSec: 184.2,
        latencyMs: 18.4,
        confidence: 0.994,
        vramMb: 3200,
        outputLines: [
          "[AGENT 1 - BRAND INGESTION] Retrieved style guide vectors from ChromaDB (hybrid cosine + text-embedding-004).",
          "[AGENT 2 - MARKET RESEARCH] Live DuckDuckGo search: extracted 4 trending competitor angles.",
          "[AGENT 3 - COPYWRITER] Generated tailored copy for 12 channels (LinkedIn, X, Threads, TikTok, etc.).",
          "[AGENT 4 - FLUX.1 DESIGNER] Rendered 1024x1024 high-res visual banner with commercial typography.",
          "[AGENT 5 & 6 - SEO AUDIT & BROADCAST] Flesch-Kincaid grade 8.2 verified -> Ready for omnichannel dispatch."
        ],
        syntheticTokens: [
          "AgenticMarketer", " 6-agent", " swarm", " completed", " end-to-end", " marketing", " execution.", " Brand", " voice", " matched", " with", " zero", " drift.", " FLUX.1", " diffusion", " generated", " 1024x1024", " visual", " asset.", " Omnichannel", " broadcast", " payloads", " prepared", " across", " 15", " social", " platforms."
        ]
      }
    },
    {
      id: "model-nexusshare-ai",
      name: "NexusShare AI (Zero-Cloud P2P Intelligence)",
      category: "On-Device Biometrics & Steganography Vault",
      architecture: "OpenCV Haar Cascades + SGDClassifier + LSB Steg",
      parameters: "128D Spatial Histograms + 7-Domain Offline NLP",
      defaultPrompt: "Authenticate peer user via webcam biometric feed (128D facial histogram), embed top-secret RSA payload inside cover image PNG using LSB steganography, and dispatch 60s self-destruct ghost share.",
      responseTemplate: {
        tokensPerSec: 195.0,
        latencyMs: 12.1,
        confidence: 0.999,
        vramMb: 1120,
        outputLines: [
          "[OPENCV BIOMETRICS] Face detected via Haar Cascade -> 128D spatial histogram matched (cosine: 0.884 > 0.72 threshold). Single-use token generated.",
          "[OFFLINE NLP CLASSIFIER] Document parsed -> SGDClassifier classified as 'LEGAL_SECURITY_CONTRACT' (confidence: 94.2%).",
          "[LSB ENCRYPTION ENGINE] Embedded 4,096-byte secret RSA payload across least significant bits of cover_image.png with SHA-256 integrity hash.",
          "[P2P WEBSOCKET STREAM] Direct intranet peer connection established on port 8000 (100% zero-cloud, 0 internet bytes).",
          "[GHOST SHARE TIMER] 60-second self-destruct TTL armed -> Automated zero-fill shredding queued."
        ],
        syntheticTokens: [
          "NexusShare", " AI", " verified", " biometric", " identity", " locally", " via", " OpenCV", " 128D", " spatial", " histogram.", " Secret", " payload", " concealed", " inside", " image", " pixels", " using", " LSB", " steganography.", " Direct", " peer-to-peer", " transmission", " completed", " with", " 100%", " zero-cloud", " privacy", " and", " self-destruct", " countdown."
        ]
      }
    }
  ] as PlaygroundModel[],

  education: [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Institute of Technology",
      gpa: "8.8 / 10.0",
      honors: "Specialization in Artificial Intelligence & Machine Learning",
      coursework: "Artificial Intelligence, Machine Learning, Deep Learning, Cloud Computing (AWS), Computer Vision (OpenCV), Data Structures & Algorithms, Operating Systems, Distributed Systems."
    }
  ] as EducationItem[]
};
