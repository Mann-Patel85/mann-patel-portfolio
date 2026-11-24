export interface SkillItem {
  name: string;
  level?: number;
  icon?: string;
  category: string;
  highlightColor?: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
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
  demoStatus: "Live demo" | "Simulated workflow" | "Coming soon";
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

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeColor?: string;
  date?: string;
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
    role: "AI/ML Engineer | Generative AI Developer",
    phone: "+91 9824804372",
    objective: "Results-driven Computer Engineering student (9.27 CGPA) seeking an AI/ML Developer role. Proven experience building autonomous multi-agent systems, RAG pipelines, and computer vision applications with Python, PyTorch, and Next.js.",
    statusBadge: "Available for Full-Time Roles & Internships",
    location: "Ahmedabad, Gujarat, India",
    tagline: "Building Intelligent AI Systems & Scalable Applications",
    bio: "I am Mann Patel, a final-year B.Tech Computer Science and Engineering student at Silver Oak College of Technology, Ahmedabad, with a CGPA of 9.27. I am passionate about Artificial Intelligence, Machine Learning, and Generative AI, with a particular interest in building practical intelligent applications. My project experience includes autonomous multi-agent systems, Graph-based Retrieval-Augmented Generation, hierarchical document retrieval, multimodal AI, computer vision, and privacy-focused local AI applications. I enjoy exploring emerging technologies, designing system architectures, solving engineering challenges, and transforming complex ideas into functional applications. My career objective is to contribute as an AI/ML Engineer or Generative AI Developer, building reliable, intelligent, and impactful applications.",
    metrics: [
      { label: "Academic Performance", value: "9.27 / 10", change: "B.Tech CSE" },
      { label: "Project Portfolio", value: "6 Projects", change: "AI & Full-Stack" },
      { label: "Specialization", value: "AI / GenAI", change: "Agentic Systems & RAG" },
      { label: "Engineering Stack", value: "Python / FastAPI", change: "AI Backend Development" },
    ],
    socials: {
      github: "https://github.com/Mann-Patel85",
      linkedin: "https://linkedin.com/in/mannpatel",
      huggingface: "",
      kaggle: "",
      x: "",
      email: "mann6657@gmail.com",
      scholar: "",
    },
  },

  skills: [
    { name: "Python, C++, Java, C, JavaScript", category: "languages", highlightColor: "#3776AB", description: "Programming languages used across AI, backend, and web projects." },
    { name: "Machine Learning & Deep Learning", category: "ml", highlightColor: "#F59E0B", description: "Applied machine learning, deep learning, and model workflows." },
    { name: "Computer Vision · OpenCV · DeepFace · TensorFlow", category: "ml", highlightColor: "#10B981", description: "Vision and learning tools used in project work, including video and face processing." },
    { name: "LLMs · Agentic AI · CrewAI · Gemini", category: "generative", highlightColor: "#8B5CF6", description: "Generative AI and multi-agent application development." },
    { name: "RAG · GraphRAG · LlamaIndex", category: "generative", highlightColor: "#00F5FF", description: "Hierarchical retrieval, graph retrieval, and orchestration workflows." },
    { name: "FLUX.1", category: "generative", highlightColor: "#A855F7", description: "Image generation technology referenced in AgenticMarketer." },
    { name: "FastAPI · Streamlit · React · Next.js", category: "backend", highlightColor: "#009688", description: "Frameworks used to build APIs, interactive tools, and web interfaces." },
    { name: "HTML · CSS", category: "backend", highlightColor: "#38BDF8", description: "Web interface foundations." },
    { name: "MySQL · ChromaDB · TigerGraph · GSQL", category: "databases", highlightColor: "#F59E0B", description: "Relational, vector, and graph database technologies used in projects." },
    { name: "Git · GitHub · Docker · AWS · Cloudflare", category: "tools", highlightColor: "#2496ED", description: "Development and infrastructure tools used in project workflows." },
    { name: "Pillow · Figma", category: "tools", highlightColor: "#FF7C00", description: "Image handling and interface design tools." },
  ] as SkillItem[],

  skillCategories: [
    { id: "ml", title: "AI / Machine Learning", icon: "BrainCircuit", color: "from-purple-500 to-indigo-600" },
    { id: "generative", title: "Generative AI & Agentic Systems", icon: "Boxes", color: "from-cyan-500 to-blue-600" },
    { id: "backend", title: "Backend & Frontend", icon: "Server", color: "from-emerald-500 to-teal-600" },
    { id: "languages", title: "Programming Languages", icon: "Cpu", color: "from-amber-500 to-rose-600" },
    { id: "databases", title: "Databases & Graph Technologies", icon: "Server", color: "from-blue-500 to-cyan-600" },
    { id: "tools", title: "Tools & Infrastructure", icon: "Cpu", color: "from-amber-500 to-orange-600" },
  ],

  projects: [
    {
      id: "project-agentic-marketer",
      slug: "agenticmarketer",
      title: "AgenticMarketer",
      tagline: "Autonomous Multi-Agent Marketing Intelligence & Omnichannel Publisher",
      description: "An autonomous six-agent marketing intelligence system combining brand-specific RAG, live market research, multi-channel copywriting, FLUX.1 image generation, SEO auditing, and social publishing workflows.",
      problemSolution: {
        problem: "Modern marketing workflows suffer from brand inconsistency, fragmented multi-tool subscriptions, manual adaptation across 12+ channels, and lack of real-time market/competitor research.",
        solution: "Orchestrated a 6-agent pipeline (Brand Retrieval, Live Web Research, Multi-Channel Copywriter, Multimodal FLUX.1 Visual Designer, SEO/Readability Auditor, and Omnichannel Social Publisher) with hybrid vector RAG."
      },
      metrics: [
        { label: "Autonomous Swarm", value: "6 AI Agents" },
        { label: "Content Formats", value: "12 Channels" },
        { label: "Social Publishing", value: "Workflow" },
        { label: "Image Generation", value: "FLUX.1" }
      ],
      tags: ["FastAPI", "Next.js 16", "Google Gemini", "FLUX.1 Diffusion", "Hybrid RAG", "DuckDuckGo API", "textstat", "JWT RBAC"],
      featured: false,
      demoStatus: "Live demo",
      githubUrl: "https://github.com/Mann-Patel85/AgenticMarketer-Automated-Marketing-Intelligence",
      demoUrl: "https://agentic-marketer-automated-marketin.vercel.app/",
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
      id: "project-graphscout",
      slug: "graphscout",
      title: "GraphScout: Agentic GraphRAG",
      tagline: "Autonomous Multi-Hop Graph Investigation & GSQL Engine",
      description: "An autonomous multi-agent GraphRAG system engineered for the TigerGraph Agentic GraphRAG Hackathon via Unstop. It investigates complex multi-hop queries across an Olympic document corpus using dynamic N-hop graph traversal and GSQL-powered retrieval.",
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
      demoStatus: "Simulated workflow",
      githubUrl: "https://github.com/Mann-Patel85/GraphScout-Agentic-GraphRAG",
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
      slug: "document-auditor",
      title: "Enterprise RAG: Document Auditor",
      tagline: "Hierarchical Auto-Merging RAG & Compliance Intelligence",
      description: "An enterprise-oriented agentic RAG auditor for complex legal documents such as MSAs, SLAs, and Privacy Policies, built using LlamaIndex and Google Gemini 2.5 Flash.",
      problemSolution: {
        problem: "Naive flat-chunk RAG pipelines fragment multi-page legal agreements, losing crucial contract liability caps, indemnification terms, and surrounding context.",
        solution: "Engineered a 3-tier HierarchicalNodeParser with ChromaDB vector indexing on 128-token leaf nodes and dynamic auto-merging to 512/2048-token parent nodes for high-fidelity compliance auditing."
      },
      metrics: [
        { label: "RAG Architecture", value: "3-Tier Tree" },
        { label: "Embedding Dims", value: "3,072 Dims" },
        { label: "Vector Database", value: "ChromaDB" },
        { label: "Retrieval", value: "Auto-Merging" }
      ],
      tags: ["LlamaIndex", "Gemini 2.5 Flash", "ChromaDB", "Hierarchical RAG", "AutoMergingRetriever", "Python", "PDFReader"],
      featured: true,
      demoStatus: "Simulated workflow",
      githubUrl: "https://github.com/Mann-Patel85/Enterprise-RAG-Agentic-Document-Auditor",
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
      slug: "locustriage",
      title: "LocusTriage AI",
      tagline: "Intelligent Municipal Hazard Triage & Spatial Command Center",
      description: "An AI-assisted civic hazard triage system that analyzes submitted images, assigns urgency scores, extracts available EXIF GPS coordinates, and visualizes incidents on an interactive map.",
      problemSolution: {
        problem: "Traditional 311 municipal grievance portals suffer from slow manual classification, delayed response for fatal civic hazards (open manholes, live dangling power cables, water/gas leaks), and lack of visual urgency verification.",
        solution: "Engineered an instant AI triage pipeline using Google Gemini 2.5 Flash to visually evaluate hazard photos, assign a 1-10 severity score, extract GPS coordinates, and route incidents to municipal field teams via a live interactive geospatial command center."
      },
      metrics: [
        { label: "Vision Engine", value: "Gemini 2.5 Flash" },
        { label: "Severity Scoring", value: "1 to 10 Scale" },
        { label: "Incident Workflow", value: "Municipal Triage" },
        { label: "Full-Stack Setup", value: "Docker Compose" }
      ],
      tags: ["FastAPI", "Next.js 16", "Gemini 2.5 Flash", "Leaflet Maps", "SQLAlchemy", "Pydantic v2", "Docker", "Pillow EXIF"],
      featured: true,
      demoStatus: "Coming soon",
      githubUrl: "https://github.com/Mann-Patel85/LocusTriage-AI",
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
      id: "project-nexusshare-ai",
      slug: "nexusshare",
      title: "NexusShare AI",
      tagline: "Zero-Cloud P2P Network AI Intelligence & Steganography Vault",
      description: "A local peer-to-peer file-sharing application featuring face verification, on-device document classification, offline question answering, image steganography, and expiring shares.",
      problemSolution: {
        problem: "Cloud file sharing exposes sensitive enterprise documents to third-party data breaches, incurs high internet bandwidth overhead, and risks unauthorized access on local networks.",
        solution: "Built a high-speed local intranet platform with OpenCV Haar Cascade facial verification, offline TF-IDF NLP document Q&A, image steganography hiding payloads inside pixel bytes, and self-destruct ghost shares."
      },
      metrics: [
        { label: "Deployment Model", value: "Local Network" },
        { label: "ML Classifier", value: "7 Domains" },
        { label: "Face Verification", value: "OpenCV-based" },
        { label: "Network Telemetry", value: "Live WebSockets" }
      ],
      tags: ["Python FastAPI", "React 19 Vite", "OpenCV", "Scikit-Learn", "WebSockets", "Steganography", "psutil", "SHA-256"],
      featured: false,
      demoStatus: "Coming soon",
      githubUrl: "https://github.com/Mann-Patel85/NexusShare-AI",
      architectureDetails: [
        "OpenCV Haar Cascade face detection with 128-dimensional spatial histogram extraction & single-use token issuance",
        "On-device SGDClassifier + TF-IDF model categorizing documents across 7 business/tech domains with auto-tagging",
        "Zero-cloud local document Q&A engine utilizing sentence-aware chunking and vector similarity without external APIs",
        "OpenCV LSB pixel steganography vault allowing secret text payload embedding and extraction inside cover images",
        "Ghost share engine with TTL countdown timers, auto-shredding, and SHA-256 smart deduplication"
      ],
      gradient: "from-emerald-500/20 via-teal-600/10 to-transparent"
    },
    {
      id: "project-facetrack",
      slug: "facetrack",
      title: "FaceTrack: AI-Powered Attendance System",
      tagline: "Real-Time Biometric Face Recognition & Automated Attendance Tracking",
      description: "An end-to-end computer vision application built with Streamlit and OpenCV to process live video footage, automate attendance tracking, and generate real-time CSV reports. Implemented deep learning facial recognition utilizing VGG-Face to extract high-dimensional facial embeddings and match dynamic video frames against a secure image database.",
      problemSolution: {
        problem: "Manual attendance logging in classrooms and organizations is time-consuming, prone to proxy attendance/buddy punching, and lacks automated reporting.",
        solution: "Engineered an automated real-time biometric vision pipeline with OpenCV and DeepFace (VGG-Face) that extracts facial embeddings from dynamic video frames, matches identities against a secure database, and generates instant CSV attendance logs."
      },
      metrics: [
        { label: "Vision Backbone", value: "OpenCV + DeepFace" },
        { label: "Recognition Model", value: "VGG-Face Deep Net" },
        { label: "App Interface", value: "Streamlit Web UI" },
        { label: "Report Generation", value: "Real-Time CSV" }
      ],
      tags: ["Python", "Streamlit", "OpenCV", "DeepFace", "VGG-Face", "Computer Vision", "Facial Biometrics"],
      featured: false,
      demoStatus: "Coming soon",
      githubUrl: "https://github.com/Mann-Patel85",
      architectureDetails: [
        "Real-time video frame capture and facial bounding box localization via OpenCV Haar Cascades",
        "DeepFace feature extraction extracting high-dimensional facial embeddings using VGG-Face",
        "Cosine similarity matching against authenticated image database with dynamic frame validation",
        "Automated attendance logging with timestamp deduplication and exportable CSV reports"
      ],
      gradient: "from-blue-500/20 via-cyan-600/10 to-transparent"
    }
  ] as ProjectItem[],

  timeline: [
    {
      id: "exp-1",
      period: "2024 — Present",
      role: "Independent AI Engineering Projects",
      organization: "Personal project work",
      location: "India / Remote",
      type: "Research",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      description: [
        "Built GraphScout: an autonomous Agentic GraphRAG system utilizing TigerGraph GSQL, dynamic N-hop subgraph traversals, and 3-way RAG benchmarks.",
        "Architected Enterprise RAG Document Auditor: hierarchical 3-tier indexing (2048t/512t/128t) with LlamaIndex and Gemini 2.5 Flash.",
        "Engineered LocusTriage AI (Gemini 2.5 Flash vision & Leaflet) and AgenticMarketer (6-Agent Swarm with FLUX.1 diffusion).",
        "Developed full-stack prototypes with Docker Compose, FastAPI, SQLAlchemy, and Next.js."
      ],
      skillsUsed: ["TigerGraph", "GSQL", "LlamaIndex", "FastAPI", "Next.js 16", "Gemini 2.5 Flash", "ChromaDB", "Docker"]
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
        "Completed AI development projects covering NLP translation, intent-matching chatbots, LSTM music generation, and YOLOv8 object tracking.",
        "GlobalConnect AI: Built Neural Machine Translator supporting 25+ languages with gTTS audio voice synthesis and document batch translation.",
        "NeuroMelody AI: Trained a 2-layer LSTM sequence model in TensorFlow/Keras & music21 to compose dynamic multi-instrument MIDI music tracks.",
        "YOLOv8 Pro: Deployed a real-time object detection & persistent tracking pipeline with live OpenCV analytics HUD (FPS, Track IDs) and Gradio Vision Studio."
      ],
      skillsUsed: ["YOLOv8", "TensorFlow / Keras", "LSTMs", "OpenCV", "Gradio", "gTTS", "music21", "Scikit-Learn"]
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
      degree: "B. TECH in Computer Science & Engineering",
      institution: "Silver Oak College of Technology | Ahmedabad",
      gpa: "9.27 CGPA",
      honors: "2023 — 2027",
      coursework: "Data Structures & Algorithms (DSA), Operating Systems (OS), Database Management Systems (DBMS), Computer Networks, Machine Learning, Deep Learning, Cloud Computing (AWS)."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "AI Developer",
      issuer: "AICERTs",
      badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10"
    },
    {
      title: "Data Analytics",
      issuer: "IBM SkillBuild PBL Program",
      badgeColor: "text-blue-400 border-blue-500/30 bg-blue-500/10"
    },
    {
      title: "Diploma in Multilingual Computer Programming",
      issuer: "CDAC",
      badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10"
    }
  ] as CertificationItem[]
};
