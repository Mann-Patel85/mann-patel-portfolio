# Galactic / Neural Constellation AI/ML Engineer Portfolio

A modern, high-performance, single-page developer portfolio built for an aspiring AI/ML Systems Engineer with an interactive **Galactic / Deep Space / Neural Constellation** WebGL theme.

---

## Architecture & Tech Stack

- **Framework**: Next.js (App Router) + TypeScript + Tailwind CSS
- **3D WebGL Graphics**: Three.js + React Three Fiber (`@react-three/fiber`) + `@react-three/drei`
- **Animation & Transitions**: Framer Motion
- **Icons & Visuals**: Custom Brand Icons + Lucide React
- **State Coordination**: `NeuralProvider` linking UI hover states directly to 3D constellation nodes

---

## Key Modules & Features Built

### 1. 🌌 Dynamic 3D Galactic Background (`components/canvas/`)
- **Procedural Volumetric Starfield**: Drifting 3D star clusters with depth attenuation and mouse parallax.
- **Interactive 3D Neural Constellation**: Dynamic interconnected neuron nodes and glowing synapse lines with real-time distance-based signaling.
- **Reactive Synaptic Resonance**: Hovering over technical skill cards in the UI highlights corresponding connected node clusters in the 3D canvas with glowing neon pulses.
- **Volumetric Nebula Glow**: Atmospheric procedural cyan-to-violet volumetric shader planes.

### 2. ⚡ Hero Section & Real-Time Telemetry (`components/sections/Hero.tsx`)
- **Status Indicator**: `⚡ Available for AI/ML Engineering & Research Roles`.
- **Cyberpunk Gradient Typography**: Bold futuristic headlines and mission statements.
- **Live System Telemetry Card**: Simulated live GPU memory utilization (`24.2 / 80 GB VRAM`), token throughput (`138+ tok/s`), P99 latency (`<28ms`), and active cluster status.
- **Quick CTAs**: Smooth scroll to project architecture and interactive Curriculum Vitae viewer.

### 3. 🧠 Technical Matrix & Systems Radar (`components/sections/SkillsMatrix.tsx`)
- Categorized Bento Grid across 4 AI/ML domains:
  - **Deep Learning & Frameworks**: PyTorch, JAX/Flax, TensorRT, Hugging Face, TensorFlow
  - **Core ML, LLMs & Vision**: Large Language Models (LLMs), RAG, Computer Vision (YOLO/ViT), Reinforcement Learning, Diffusion
  - **MLOps, Serving & Cloud**: Triton Inference Server, vLLM, Docker/K8s, MLflow, W&B, AWS/GCP
  - **Low-Level Hardware & Compute**: Python, CUDA C++, C++20, pgvector / Vector DBs
- Interactive category filtering and kernel optimization proficiency gauges.

### 4. 🚀 Featured Engineering Projects (`components/sections/ProjectsGrid.tsx`)
- 3D mouse tilt cards with dynamic spotlight glow on hover.
- **NeuroRAG-Omni**: Low-latency multi-modal RAG with speculative decoding and GPU vector search.
- **SynapseQuant & Distill**: 70B parameter LLM distillation & AWQ INT4 quantization pipeline.
- **VisionPulse Edge**: Sub-millisecond multi-camera anomaly detection on TensorRT.
- **Aegis-RL Distributed**: Massively parallel multi-agent reinforcement learning in JAX.
- Includes problem vs. solution breakdown, performance metrics, GitHub links, and deployment graph inspection drawer.

### 5. 💻 Interactive ML Playground / Mini-Terminal (`components/sections/MLPlayground.tsx`)
- Selectable model architectures:
  - `NeuroRAG-Omni (Hybrid Vector)`
  - `DeepLogic-Distill (Chain-of-Thought)`
  - `VisionPulse-YOLO (Edge Detector)`
- **Execute Neural Inference**: Animated simulated token streaming, real-time CUDA buffer logs, latency timer (`ms`), token throughput (`tok/s`), confidence scores, and VRAM gauges.

### 6. ⏱️ Research, Benchmarks & Experience Timeline (`components/sections/ExperienceTimeline.tsx`)
- Chronological vertical cosmic timeline with orbital step indicators.
- Work history, AI research fellowships, hackathon wins (1st place global challenge), and open-source contributions.

### 7. 📡 Contact Uplink & Terminal Command (`components/sections/ContactSection.tsx`)
- Cyberpunk terminal-style message dispatch console.
- Live TLS encrypted handshake check and cosmic neon confetti celebration upon transmission.
- Social nodes matrix: GitHub, LinkedIn, Hugging Face Hub, Kaggle, Google Scholar, and direct email.

### 8. 📄 Interactive Resume Modal (`components/ui/ResumeModal.tsx`)
- Full technical resume viewer with competencies, experience breakdown, education credentials, and PDF download action.

---

## Verification & Build Results

- **Production Build**: `next build` compiled cleanly with Turbopack and zero TypeScript errors (`Route (app) ○ /`).
- **Dev Server**: Running locally at `http://localhost:3000`.
