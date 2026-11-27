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
  /** Measured results (benchmarks, accuracy, latency). Only add real, reproducible numbers. */
  results?: ProjectResults[];
  media: ProjectMedia[];
  /** Bullets used in the resume modal (keep in sync with the PDF). */
  resumeBullets?: string[];
  /** Tech line shown on the resume (matches the PDF). Defaults to `tags`. */
  resumeStack?: string;
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
      "Most of my work sits where LLMs meet real data: an agentic GraphRAG system that began at a TigerGraph hackathon and now runs on Neo4j, a hierarchical RAG auditor for legal contracts, a seven-agent marketing pipeline with a fact-checking agent I measured against planted errors, and photo-based triage for civic hazards.",
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
      items: ["RAG", "Hybrid RAG", "GraphRAG", "Agentic AI", "Multi-agent systems", "LLM integration", "LLM evaluation", "Hallucination mitigation", "Prompt engineering", "CrewAI", "LlamaIndex", "Groq", "Gemini"],
    },
    {
      id: "ml",
      title: "Machine Learning & Vision",
      items: ["scikit-learn", "TensorFlow / Keras", "Computer vision", "OpenCV", "YOLOv8", "NLP"],
    },
    {
      id: "backend",
      title: "Frameworks & APIs",
      items: ["FastAPI", "Pydantic", "SQLAlchemy", "REST APIs", "WebSockets", "JWT, OAuth 2.0 & RBAC", "Next.js", "React", "Streamlit", "Gradio"],
    },
    {
      id: "databases",
      title: "Databases & Cloud",
      items: ["PostgreSQL", "MySQL", "SQLite", "Neo4j (Cypher)", "ChromaDB", "AWS", "Cloudflare Workers AI"],
    },
    {
      id: "languages",
      title: "Languages",
      items: ["Python", "C++", "Java", "C", "JavaScript"],
    },
    {
      id: "tools",
      title: "Tools",
      items: ["Docker", "Git", "GitHub", "pytest", "Figma"],
    },
  ] as SkillGroup[],

  projects: [
    {
      slug: "graphscout",
      title: "GraphScout",
      tagline: "Agentic GraphRAG on Neo4j",
      context: "Began at the TigerGraph Agentic GraphRAG Hackathon (Unstop)",
      period: "Oct 2026",
      description:
        "An orchestrator agent that answers multi-hop questions over 2,951 Olympic event documents (~5.46M tokens) by choosing, each round, between Cypher graph traversal, vector search, exact event filtering and evidence evaluation until the answer is complete. Runs on Neo4j, or on an in-memory graph with zero setup.",
      problem:
        "Plain vector RAG retrieves similar chunks but can't follow chains of relations (venue → event → Games → gold medallist). And search or graph walks only ever return a sample, so questions that need every matching event — how many, which had the most competitors, who won at the Games before 2008 — come back wrong.",
      solution:
        "An orchestrator keeps a Pydantic InvestigationState and picks the next tool each round: entity linking, N-hop Cypher traversal, vector search, a find_events filter that returns exact counts and sorted rows over every event's infobox fields, or evidence evaluation. It stops when the evidence is complete or the budget runs out and answers with citations. A benchmark runner compares it with standard RAG and single-pass GraphRAG on ground-truth accuracy and context recall.",
      facts: [
        { label: "Corpus", value: "2,951 docs" },
        { label: "Eval set", value: "150 questions" },
        { label: "Graph DB", value: "Neo4j / in-memory" },
        { label: "Tests", value: "43 passing" },
      ],
      tags: ["Python", "Neo4j", "Cypher", "FastAPI", "Pydantic v2", "Groq / OpenAI", "Next.js", "Vis-Network", "pytest"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/GraphScout",
      architecture: [
        "Graph model: Entity and Chunk nodes, RELATED_TO edges (HELD_AT, PART_OF_GAMES, WON_GOLD) and MENTIONS provenance edges; constraints and indexes created on connect",
        "Orchestrator loop: entity linking → N-hop Cypher BFS → vector search → find_events → gap evaluation → synthesis with citations",
        "find_events: exact filtering and ranking over every event's infobox fields (sport, Games, venue, date, competitors, nations, gold medallist), with one rule set shared by both backends",
        "Neo4j (AuraDB Free or 5.11+) with a native vector index, or an in-memory graph built from the corpus at start-up; vectors use a free hashed bag-of-words embedder",
        "Benchmark runner: Standard RAG vs single-pass GraphRAG vs Agentic GraphRAG on ground-truth accuracy (token-F1), context recall, tokens and latency",
        "Next.js investigation studio (knowledge-graph canvas, step traces, passages, corpus explorer, Cypher schema view) on FastAPI; LLM via Groq gpt-oss-120b or OpenAI",
      ],
      // TODO(Mann): results/benchmark_report.json in the repo is still old offline-mock output
      // (simulated answers, 0 retrieved chunks, fixed scores), so it is NOT shown here.
      // After a real run (LLM key set, Neo4j or in-memory graph) on eval_public.jsonl, add e.g.:
      // results: [{
      //   title: "3-way benchmark (100 public questions)",
      //   headers: ["Pipeline", "Accuracy", "Completeness", "Avg tokens", "Latency"],
      //   rows: [
      //     ["Standard RAG", "…", "…", "…", "…"],
      //     ["GraphRAG", "…", "…", "…", "…"],
      //     ["GraphScout (agentic)", "…", "…", "…", "…"],
      //   ],
      // }],
      media: [],
      resumeStack: "Python, Neo4j, Cypher, Pydantic v2, FastAPI, Next.js",
      resumeBullets: [
        "Built an agentic GraphRAG system over a Neo4j knowledge graph of 2,951 documents and about 5.46M tokens.",
        "Wrote an orchestrator agent that keeps investigation state, runs dynamic Cypher traversals and detects missing information.",
        "Implemented N-hop BFS graph exploration and an exact event filter for counting and ranking questions.",
        "Built a 3-way benchmark (Vector RAG, Static GraphRAG, Agentic GraphRAG) on accuracy, completeness and tokens; 43 tests.",
      ],
    },
    {
      slug: "agenticmarketer",
      title: "AgenticMarketer",
      tagline: "Seven-agent marketing pipeline with fact-checking",
      period: "Aug 2026 – Present",
      description:
        "A deployed full-stack platform where seven agents turn a campaign goal into grounded, multi-channel marketing content — and a dedicated Fact-Check Agent verifies every claim against the user's own documents and cited sources before anything is published.",
      problem:
        "AI-written marketing copy invents things: statistics, customers, awards and prices that appear in no source. Publishing that is a brand and legal risk, and checking it by hand defeats the point of automation.",
      solution:
        "Every agent is grounded in the signed-in user's private brand documents (TF-IDF retrieval) and numbered research sources (Google News RSS, Wikipedia). Copy is written on Groq gpt-oss, then a Fact-Check Agent at temperature 0 plus a deterministic statistics checker labels each claim supported, contradicted or unsupported — correcting or removing it and linking the evidence used. A reproducible eval harness measures the effect.",
      facts: [
        { label: "Agents", value: "7, sequential" },
        { label: "Planted errors caught", value: "103 / 103" },
        { label: "True claims flagged", value: "0 / 82" },
        { label: "Invented stats", value: "−98%" },
      ],
      tags: ["FastAPI", "Next.js 16", "Groq gpt-oss", "NVIDIA Nemotron", "Cloudflare Workers AI", "FLUX.1", "TF-IDF RAG", "PostgreSQL (Neon)", "SQLAlchemy", "Google OAuth", "JWT RBAC", "SSE"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/AgenticMarketer-Automated-Marketing-Intelligence",
      demoUrl: "https://agentic-marketer-automated-marketin.vercel.app/",
      architecture: [
        "Pipeline: Ingestion → Research → Copywriter → Fact-Check → Image generation → SEO audit → Publisher",
        "Private per-user knowledge base (pdf, docx, txt, md and images via a Cloudflare vision model) with TF-IDF cosine retrieval",
        "Research agent numbers every Google News / Wikipedia source so claims can be cited; it may not invent statistics or events",
        "Fact-Check Agent: builds an evidence pack, extracts checkable claims, verifies each at temperature 0, auto-corrects wrong values and flags the rest",
        "Groq gpt-oss-120b / 20b with NVIDIA Nemotron as backup when rate-limited; FLUX.1-schnell banners with Eden AI → Pollinations fallbacks",
        "Neon PostgreSQL via SQLAlchemy, JWT + Google OAuth, role-based access, SSRF-safe site auditor; deployed on Vercel + Render",
      ],
      results: [
        {
          title: "Fact-Check Agent on planted errors",
          headers: ["Metric", "Result"],
          rows: [
            ["Planted false claims caught", "103 / 103 (all fixed automatically)"],
            ["Wrong values corrected to the true value", "38 / 38"],
            ["True claims wrongly flagged or removed", "0 / 82"],
          ],
          note: "24 synthetic campaigns for fictional brands mixing true facts with planted false claims (wrong years, cities, percentages, prices; invented customers, awards, studies). gpt-oss-120b on Groq, November 2026.",
        },
        {
          title: "Invented statistics in real AI-written copy",
          headers: ["Pipeline", "Invented statistics per campaign"],
          rows: [
            ["Before (old research + copywriter instructions)", "11.2"],
            ["After (new instructions + Fact-Check Agent)", "0.2"],
          ],
          note: "5 campaigns; statistics that appear in no source are counted by code, not an AI judge (56 → 1, a 98% reduction). Limitations: small sample and run-to-run variance (a pilot missed 1 of 9 planted claims); non-numeric invented claims are harder (about half fixed automatically, the rest flagged); on the free Groq tier, rate limits made 2 of 5 runs fall back to statistics-only checking.",
        },
      ],
      media: [],
      resumeStack: "Python, FastAPI, Next.js, React, SQLAlchemy, PostgreSQL, Groq, Cloudflare Workers AI",
      resumeBullets: [
        "Built a full-stack marketing platform with a FastAPI backend and Next.js frontend, running an asynchronous seven-agent pipeline for brand-context retrieval, market research, copywriting, fact-checking, image generation, SEO analysis, and publishing, with progress streamed over Server-Sent Events.",
        "Built a Fact-Check Agent that verifies every factual claim against the user's documents and cited sources; in a reproducible evaluation it caught 103/103 planted false claims with 0/82 true claims wrongly flagged, and with new grounding instructions, invented statistics per campaign fell 98% (from 11.2 to 0.2).",
        "Implemented a document-grounding workflow that extracts text from PDF, DOCX, TXT, and image files into each user's private knowledge base and retrieves relevant passages using TF-IDF and cosine similarity.",
        "Added JWT and Google OAuth sign-in, role-based access, PostgreSQL persistence via SQLAlchemy, Groq with an NVIDIA Nemotron fallback, and publishing connectors for social platforms, blogs, and webhooks.",
      ],
    },
    {
      slug: "document-auditor",
      title: "Enterprise RAG Document Auditor",
      tagline: "Hierarchical auto-merging RAG for contracts",
      description:
        "A RAG auditor for long legal documents (MSAs, SLAs, privacy policies) that searches small chunks but answers with the full surrounding clause. It runs a four-area compliance checklist and returns risk-rated findings with page-level citations, built with LlamaIndex and Gemini.",
      problem:
        "Flat chunking splits multi-page contracts, so a retrieved chunk about a liability cap often loses the exceptions and definitions around it.",
      solution:
        "Documents are parsed into a three-level tree (2048 → 512 → 128 tokens) and only the 128-token leaves are embedded, locally with FastEmbed. The retriever pulls the top 12 leaves; when at least half of a section's children match, it swaps them for the whole parent section before Gemini answers. Each audit area returns a summary, a LOW–CRITICAL risk level, quoted clauses and recommendations.",
      facts: [
        { label: "Chunk tree", value: "2048/512/128" },
        { label: "Embeddings", value: "Local bge-small" },
        { label: "Retriever", value: "Auto-merging" },
        { label: "LLM", value: "Gemini 3.8 Flash" },
      ],
      tags: ["Python", "LlamaIndex", "Gemini 3.8 Flash", "FastEmbed (bge-small)", "FastAPI", "pypdf"],
      featured: true,
      githubUrl: "https://github.com/Mann-Patel85/Enterprise-RAG-Agentic-Document-Auditor",
      architecture: [
        "HierarchicalNodeParser: 2048-token roots → 512-token sections → 128-token leaves, with every level kept in the docstore",
        "Local ONNX embeddings (FastEmbed, BAAI/bge-small-en-v1.5): no embedding API calls or rate limits; the index is persisted to disk",
        "AutoMergingRetriever: top-12 leaf search, merged into the parent section when at least 50% of its children are retrieved",
        "Four-area audit checklist: liability & indemnification, data privacy & AI-training use, termination & notice, governing law & disputes",
        "Findings with a server-parsed LOW / MEDIUM / HIGH / CRITICAL risk level, quoted clauses, page citations and a Markdown audit report",
        "FastAPI web app (PDF upload, re-index, ad-hoc questions, audits) plus a CLI; Gemini calls run in a thread pool with a 90 s timeout",
      ],
      media: [],
    },
    {
      slug: "locustriage",
      title: "LocusTriage AI",
      tagline: "Photo-based civic hazard triage",
      period: "Jul 2026",
      description:
        "Citizens photograph a hazard (open manhole, dangling cable, water leak); Gemini 2.5 Flash classifies it and scores urgency 1–10, nearby duplicates are merged, and city officials work the queue from a live map — while citizens track their report's status.",
      problem:
        "Municipal complaint portals rely on manual sorting, so a dangerous open manhole can wait in the same queue as a faded road marking — and the same pothole gets reported twenty times.",
      solution:
        "A FastAPI backend sends each photo to Gemini with a structured output schema (fixed category list, urgency, one-line diagnosis) and rejects photos that show no hazard. Reports of the same category within 60 m are linked as duplicates and boost the original's priority. Officials get a token-protected Next.js dashboard with a Leaflet map, priority queue, KPIs and CSV export.",
      facts: [
        { label: "Vision model", value: "Gemini 2.5 Flash" },
        { label: "Urgency", value: "1–10 score" },
        { label: "Duplicate merge", value: "Within 60 m" },
        { label: "Deploy", value: "Docker Compose" },
      ],
      tags: ["FastAPI", "Next.js 16", "Gemini 2.5 Flash", "Pydantic v2", "SQLAlchemy 2", "SQLite", "Leaflet / OpenStreetMap", "Docker", "pytest"],
      featured: false,
      githubUrl: "https://github.com/Mann-Patel85/LocusTriage-AI",
      architecture: [
        "Gemini structured output: category from a fixed list, urgency 1–10, diagnosis; non-hazard photos rejected, and reports marked NEEDS REVIEW if the AI is unavailable",
        "Location priority: browser GPS or manual entry → photo EXIF GPS → approximate (clearly flagged)",
        "Duplicate detection links open reports of the same category within 60 m and adds a confirmation to the original",
        "Citizen report tracking with a status timeline; one atomic community confirmation per device",
        "Token-protected official dashboard: priority queue (urgency + confirmations), KPIs incl. average time to resolve, Leaflet map, CSV export hardened against formula injection",
        "Photos re-encoded on upload to strip EXIF and block decompression bombs; Docker Compose and a pytest suite",
      ],
      media: [],
      resumeStack: "Python, FastAPI, Gemini 2.5 Flash, Next.js, Leaflet, SQLAlchemy, Docker",
      resumeBullets: [
        "Scored reported civic hazards from photos on a 1–10 urgency scale using Gemini 2.5 Flash image analysis.",
        "Extracted GPS coordinates from image EXIF metadata to place each report on a map.",
        "Built a Leaflet dashboard with a priority queue and KPIs, and merged duplicate reports within 60 m.",
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
        "Self-destructing shares (TTL or one download, shredded after the file is delivered), SHA-256 duplicate detection, and file paths confined to the shared folder",
      ],
      media: [],
      resumeStack: "Python, FastAPI, React, scikit-learn, OpenCV, WebSockets",
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
