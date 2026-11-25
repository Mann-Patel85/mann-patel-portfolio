/**
 * Single source of truth for every section of the portfolio, including the
 * resume modal. Edit content here — components only render it.
 *
 * Adding media later:
 *   1. Drop files into /public/projects/<slug>/ (e.g. cover.png, demo.mp4).
 *   2. Add entries to that project's `media` array below. The first entry is
 *      used as the card cover; all entries appear on the project page.
 */

export type SkillCategoryId = "ml" | "generative" | "backend" | "languages" | "databases" | "tools";

export interface SkillGroup {
  id: SkillCategoryId;
  title: string;
  items: string[];
}

export interface ProjectMedia {
  type: "image" | "video";
  /** Path under /public, e.g. "/projects/graphscout/cover.png" */
  src: string;
  alt: string;
  caption?: string;
  /** Optional poster frame for videos */
  poster?: string;
}

export interface ProjectResults {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  /** Short factual facts shown as chips — not performance claims. */
  facts: { label: string; value: string }[];
  tags: string[];
  featured: boolean;
  /** Omit when the code is not public yet. */
  githubUrl?: string;
  demoUrl?: string;
  architecture: string[];
  /** Measured results (benchmarks, accuracy, latency). Only add real numbers. */
  results?: ProjectResults;
  media: ProjectMedia[];
  /** Bullets used in the resume modal (keep in sync with the PDF). */
  resumeBullets?: string[];
  context?: string;
  /** e.g. "Aug 2026 – Present" */
  period?: string;
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
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  gpa?: string;
  period: string;
  coursework: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  url?: string;
}

export const PORTFOLIO_DATA = {
  site: {
    url: "https://mann-patel-portfolio-dun.vercel.app",
  },

  personal: {
    name: "Mann Patel",
    role: "AI/ML Engineer · Generative AI Developer",
    phone: "+91 9824804372",
    location: "Ahmedabad, Gujarat, India",
    statusBadge: "Open to full-time AI/ML roles & internships",
    headline: "I build agentic AI systems, retrieval pipelines, and the full-stack apps around them.",
    summary:
      "Final-year B.Tech CSE student (9.27 CGPA) building multi-agent LLM systems, GraphRAG and hierarchical RAG pipelines, and computer-vision applications — end to end, from FastAPI backends to Next.js frontends.",
    bio: [
      "I'm a final-year B.Tech Computer Science and Engineering student at Silver Oak College of Technology, Ahmedabad (CGPA 9.27).",
      "Most of my work sits where LLMs meet real data: an agentic GraphRAG system on TigerGraph built for a hackathon, a hierarchical RAG auditor for legal contracts, a six-agent marketing pipeline, and computer-vision tools for civic hazard triage and attendance.",
      "I like owning the whole system — data ingestion, retrieval, the agent loop, the API, and the interface someone actually uses.",
    ],
    coreStack: ["Python", "FastAPI", "LLM APIs (Gemini, Groq, OpenAI)", "RAG / GraphRAG", "OpenCV", "Next.js", "Docker"],
    highlights: [
      { label: "CGPA", value: "9.27", sub: "B.Tech CSE · 2023–2027" },
      { label: "AI projects", value: "5", sub: "All open source on GitHub" },
      { label: "Focus", value: "Agentic AI", sub: "Multi-agent · RAG · GraphRAG" },
      { label: "Internship", value: "CodeAlpha", sub: "AI Intern · Dec 2025" },
    ],
    /** PDF in /public. Set to "" to fall back to printing the resume modal. */
    resumeUrl: "/Mann_Patel_Resume.pdf",
    socials: {
      github: "https://github.com/Mann-Patel85",
      linkedin: "https://www.linkedin.com/in/mann-patel-429049185/",
      email: "mann6657@gmail.com",
    },
  },

  skills: [
    {
      id: "generative",
      title: "Generative AI & Agents",
      items: ["RAG", "Hybrid RAG", "GraphRAG", "Agentic AI", "Multi-agent systems", "LLM integration", "Prompt engineering", "CrewAI", "LlamaIndex", "Groq", "Gemini"],
    },
    {
      id: "ml",
      title: "Machine Learning & Vision",
      items: ["scikit-learn", "TensorFlow / Keras", "Computer vision", "OpenCV", "YOLOv8", "NLP"],
    },
    {
      id: "backend",
      title: "Frameworks & APIs",
      items: ["FastAPI", "Pydantic", "SQLAlchemy", "REST APIs", "WebSockets", "JWT auth & RBAC", "Next.js", "React", "Streamlit", "Gradio"],
    },
    {
      id: "databases",
      title: "Databases & Cloud",
      items: ["PostgreSQL", "MySQL", "SQLite", "ChromaDB", "TigerGraph (GSQL)", "AWS", "Cloudflare Workers AI"],
    },
    {
      id: "languages",
      title: "Languages",
      items: ["Python", "C++", "Java", "C", "JavaScript"],
    },
    {
      id: "tools",
      title: "Tools",
      items: ["Docker", "Git", "GitHub", "Figma"],
    },
  ] as SkillGroup[],

  projects: [
    {
      slug: "graphscout",
      title: "GraphScout",
      tagline: "Agentic GraphRAG on TigerGraph",
      context: "TigerGraph Agentic GraphRAG Hackathon (Unstop)",
      period: "Oct 2026",
      description:
        "An orchestrator agent that answers multi-hop questions over 2,951 Olympic event documents (~5.46M tokens) by choosing, step by step, between GSQL graph traversal, vector search, and evidence evaluation until the answer is complete.",
      problem:
        "Plain vector RAG retrieves similar chunks but can't follow chains of relations (venue → event → date → medalist). Single-pass GraphRAG pulls a fixed neighbourhood and misses facts that sit further out.",
      solution:
        "An orchestrator keeps a Pydantic InvestigationState, picks the next tool (entity linking, N-hop GSQL traversal, vector search, evidence evaluation), detects gaps, and stops when evidence is complete or the budget runs out. A benchmark runner compares it with standard RAG and single-pass GraphRAG.",
      facts: [
        { label: "Corpus", value: "2,951 docs" },
        { label: "Eval set", value: "150 questions" },
        { label: "Graph DB", value: "TigerGraph" },
        { label: "Tests", value: "11 pytest" },
      ],
      tags: ["Python", "TigerGraph", "GSQL", "FastAPI", "Pydantic v2", "OpenAI API", "Next.js", "Vis-Network"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/GraphScout",
      architecture: [
        "GSQL schema with Document, Chunk, Entity and Event vertices plus directional edges",
        "Orchestrator loop: entity linking → N-hop GSQL traversal → vector search → gap evaluation → synthesis with citations",
        "Benchmark runner comparing Standard RAG vs single-pass GraphRAG vs Agentic GraphRAG on accuracy, completeness, tokens and latency",
        "Next.js investigation studio: knowledge-graph view, step traces, supporting passages and corpus explorer",
        "FastAPI backend with OpenAPI docs and an offline TigerGraph mock for tests",
      ],
      // TODO(Mann): paste real numbers from `python main.py --benchmark`, e.g.
      // results: {
      //   title: "3-way benchmark (100 public questions)",
      //   headers: ["Pipeline", "Accuracy", "Completeness", "Avg tokens", "Latency"],
      //   rows: [
      //     ["Standard RAG", "…", "…", "…", "…"],
      //     ["GraphRAG", "…", "…", "…", "…"],
      //     ["GraphScout (agentic)", "…", "…", "…", "…"],
      //   ],
      // },
      media: [],
      resumeBullets: [
        "Built an agentic GraphRAG system on a TigerGraph dataset of 2,951 documents and about 5.46M tokens.",
        "Wrote an orchestrator agent that keeps investigation state, runs dynamic GSQL traversals and detects missing information.",
        "Implemented N-hop BFS graph exploration to gather context around each entity.",
        "Benchmarked 3 approaches (Vector RAG, Static GraphRAG, Agentic GraphRAG) on accuracy, completeness and token use.",
      ],
    },
    {
      slug: "agenticmarketer",
      title: "AgenticMarketer",
      tagline: "Six-agent marketing content pipeline",
      period: "Aug 2026 – Present",
      description:
        "A full-stack app where six agents run in sequence — brand-document retrieval, live competitor research, multi-channel copywriting, FLUX.1 image generation, readability/SEO checks, and social publishing — streamed live to the dashboard.",
      problem:
        "Producing one campaign means moving between research tools, a copywriter, a designer, an SEO check and several social schedulers — and keeping every piece consistent with the brand guide.",
      solution:
        "A FastAPI pipeline grounds every agent in uploaded brand documents (TF-IDF retrieval), researches competitors with DuckDuckGo, writes copy with Groq-hosted gpt-oss models, renders banners with FLUX.1-schnell on Cloudflare Workers AI, and scores readability with textstat before publishing.",
      facts: [
        { label: "Agents", value: "6, sequential" },
        { label: "LLM", value: "Groq gpt-oss" },
        { label: "Images", value: "FLUX.1-schnell" },
        { label: "Live demo", value: "Vercel" },
      ],
      tags: ["FastAPI", "Next.js 16", "React", "SQLAlchemy", "SQLite / PostgreSQL", "Groq", "Cloudflare Workers AI", "FLUX.1", "TF-IDF RAG", "SSE", "JWT RBAC"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/AgenticMarketer-Automated-Marketing-Intelligence",
      demoUrl: "https://agentic-marketer-automated-marketin.vercel.app/",
      architecture: [
        "Pipeline: Ingestion → Research → Copywriter → Image generation → SEO audit → Publisher",
        "Brand grounding with a TF-IDF cosine vector store (pdf/docx/txt) and file-scoped search",
        "Copy generation on Groq (gpt-oss-120b, gpt-oss-20b) for hooks, LinkedIn, Reddit, blog, email and ad variants",
        "1024×1024 banners via Cloudflare Workers AI FLUX.1-schnell with an image-quality check",
        "Server-Sent Events stream agent progress to the Next.js dashboard",
        "JWT auth with role-based access, SQLAlchemy persistence and campaign history; fallback paths between image providers",
      ],
      media: [],
      resumeBullets: [
        "Built a full-stack marketing platform with a FastAPI backend and Next.js frontend, connecting campaign creation, document grounding, SEO auditing, and publishing workflows.",
        "Developed an asynchronous six-stage campaign pipeline for brand-context retrieval, market research, multi-channel copywriting, image generation, SEO analysis, and publishing preparation; streamed progress and results to the UI with Server-Sent Events.",
        "Implemented a document-grounding workflow that extracts text from PDF, DOCX, and TXT files, splits it into overlapping chunks, and retrieves relevant passages using TF-IDF and cosine similarity.",
        "Integrated Groq and image-generation services with fallback paths, and added campaign SEO checks for readability, keywords, and technical site metadata.",
        "Added JWT authentication, role-based access controls, SQLAlchemy persistence, campaign history, and publishing connectors for social platforms, blogs, and webhooks.",
      ],
    },
    {
      slug: "document-auditor",
      title: "Enterprise RAG Document Auditor",
      tagline: "Hierarchical auto-merging RAG for contracts",
      description:
        "A RAG auditor for long legal documents (MSAs, SLAs, privacy policies) that searches small chunks but answers with the full surrounding clause, built with LlamaIndex, ChromaDB and Gemini 2.5 Flash.",
      problem:
        "Flat chunking splits multi-page contracts, so a retrieved chunk about a liability cap often loses the exceptions and definitions around it.",
      solution:
        "Documents are parsed into a three-level tree (2048 → 512 → 128 tokens). Search runs on 128-token leaves in ChromaDB; when several leaves from one section match, an auto-merging retriever swaps them for the parent section before Gemini answers.",
      facts: [
        { label: "Chunk tree", value: "2048/512/128" },
        { label: "Vector DB", value: "ChromaDB" },
        { label: "Retriever", value: "Auto-merging" },
        { label: "LLM", value: "Gemini 2.5 Flash" },
      ],
      tags: ["Python", "LlamaIndex", "ChromaDB", "Gemini 2.5 Flash", "Gemini embeddings"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/Enterprise-RAG-Agentic-Document-Auditor",
      architecture: [
        "HierarchicalNodeParser: 2048-token roots → 512-token sections → 128-token leaves",
        "Gemini embedding model with persistent ChromaDB storage",
        "AutoMergingRetriever promotes clustered leaf hits to their parent section",
        "Audit prompts covering liability limits, indemnification and data-protection clauses",
      ],
      media: [],
    },
    {
      slug: "locustriage",
      title: "LocusTriage AI",
      tagline: "Photo-based civic hazard triage",
      period: "Jul 2026",
      description:
        "Citizens upload a photo of a hazard; Gemini 2.5 Flash classifies it and scores urgency 1–10, GPS is read from EXIF (or the browser), and city staff manage incidents on a live map.",
      problem:
        "Municipal complaint portals rely on manual sorting, so a dangerous open manhole can wait in the same queue as a faded road marking.",
      solution:
        "A FastAPI backend sends each photo to Gemini with a Pydantic response schema, stores the category, urgency and summary in SQLite, and a Next.js dashboard plots incidents on a Leaflet map with status tracking and CSV export.",
      facts: [
        { label: "Vision model", value: "Gemini 2.5 Flash" },
        { label: "Urgency", value: "1–10 score" },
        { label: "Map", value: "Leaflet" },
        { label: "Deploy", value: "Docker Compose" },
      ],
      tags: ["FastAPI", "Next.js", "Gemini 2.5 Flash", "Pydantic v2", "SQLAlchemy", "SQLite", "Leaflet", "Docker"],
      featured: false,
      githubUrl: "https://github.com/Mann-Patel85/LocusTriage-AI",
      architecture: [
        "Gemini 2.5 Flash with structured Pydantic output: category, urgency score, summary",
        "EXIF GPS extraction with Pillow, falling back to browser geolocation",
        "Citizen portal (upload, severity gauge, upvotes) and official dashboard (filters, status updates, CSV export)",
        "Leaflet map with colour-coded urgency pins",
        "Docker Compose setup for backend and frontend",
      ],
      media: [],
      resumeBullets: [
        "Scored reported civic hazards from photos on a 1–10 urgency scale using Gemini 2.5 Flash image analysis.",
        "Extracted GPS coordinates from image EXIF metadata to place each report on a map.",
        "Built a Leaflet dashboard to view incidents by location.",
        "Structured the app as a FastAPI and Next.js stack with SQLAlchemy, Pydantic and Docker Compose.",
      ],
    },
    {
      slug: "nexusshare",
      title: "NexusShare AI",
      tagline: "Offline LAN file sharing with on-device ML",
      period: "Jul 2026",
      description:
        "A local-network file-sharing app that works with no cloud: documents are auto-classified and searchable offline, downloads can require a face check, and files can self-destruct after one download.",
      problem:
        "Sharing files with people on the same network usually means uploading them to a third-party cloud first.",
      solution:
        "A FastAPI + React app shares files over the LAN with live WebSocket updates. A TF-IDF + SGDClassifier model tags documents across 7 domains, TF-IDF search answers questions offline, and OpenCV face matching gates protected downloads.",
      facts: [
        { label: "Network", value: "LAN only" },
        { label: "Classifier", value: "7 domains" },
        { label: "Face check", value: "OpenCV" },
        { label: "Realtime", value: "WebSockets" },
      ],
      tags: ["FastAPI", "React 19", "scikit-learn", "OpenCV", "WebSockets", "psutil"],
      featured: false,
      githubUrl: "https://github.com/Mann-Patel85/NexusShare-AI",
      architecture: [
        "TF-IDF + SGDClassifier document classifier across 7 domains with key-phrase tags",
        "Offline document Q&A using sentence-aware chunking and TF-IDF retrieval — no external API",
        "OpenCV Haar-cascade face detection and histogram matching to issue single-use download tokens",
        "LSB steganography to hide text inside images",
        "Self-destructing shares (TTL or one download) and SHA-256 duplicate detection",
      ],
      media: [],
      resumeBullets: [
        "Built a full-stack local network file-sharing app with a FastAPI backend and React dashboard for uploads, downloads, file management, search, and storage analytics.",
        "Implemented document categorization and keyword tagging with TF-IDF and SGDClassifier, plus local document Q&A that retrieves relevant passages using TF-IDF similarity.",
        "Added WebSocket system telemetry, SHA-256 duplicate detection, expiring shares, OpenCV-based download checks, and image steganography.",
      ],
    },
  ] as ProjectItem[],

  experience: [
    {
      id: "exp-codealpha",
      period: "Dec 2025 (1 month)",
      role: "AI Intern",
      organization: "CodeAlpha",
      location: "Virtual",
      type: "Work",
      link: "https://github.com/Mann-Patel85/codealpha_tasks",
      description: [
        "Built four Python AI projects spanning language translation, FAQ chatbots, music generation, and computer vision.",
        "Developed a multilingual translation app supporting 25 languages, with automatic source-language detection, text-to-speech, and .txt file translation using Gradio, deep-translator, and gTTS.",
        "Created an FAQ chatbot using TF-IDF and cosine similarity to match customer questions to answers; added intent handling, response confidence, suggested questions, and chat transcript export.",
        "Implemented an LSTM-based music generation pipeline with TensorFlow/Keras and music21, plus controls for tempo, instrument, and sampling temperature and MIDI export.",
        "Built image detection and video tracking tools with YOLOv8 and OpenCV, including adjustable detection thresholds, object counts, tracking IDs, an FPS overlay, and snapshot capture.",
      ],
      skillsUsed: ["YOLOv8", "TensorFlow / Keras", "LSTM", "OpenCV", "scikit-learn", "Gradio"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech, Computer Science & Engineering",
      institution: "Silver Oak College of Technology",
      location: "Ahmedabad",
      gpa: "9.27 CGPA",
      period: "2023 – 2027",
      coursework: "Data Structures and Algorithms, Operating Systems, Digital Logic, Compiler Design, Computer Networks, DBMS",
    },
  ] as EducationItem[],

  certifications: [
    { title: "AI Developer", issuer: "AICERTs" },
    { title: "Data Analytics", issuer: "IBM SkillsBuild (PBL)" },
    { title: "Diploma in Multilingual Computer Programming", issuer: "C-DAC" },
  ] as CertificationItem[],
};

/** Projects in the same order as the PDF resume. */
export function getResumeProjects() {
  const order = ["agenticmarketer", "graphscout", "locustriage", "nexusshare"];
  return order.map((slug) => getProject(slug)).filter((p): p is ProjectItem => !!p?.resumeBullets?.length);
}

export function getProject(slug: string) {
  return PORTFOLIO_DATA.projects.find((p) => p.slug === slug);
}

/** Featured first, original order otherwise. */
export function getOrderedProjects() {
  return [...PORTFOLIO_DATA.projects].sort((a, b) => Number(b.featured) - Number(a.featured));
}
