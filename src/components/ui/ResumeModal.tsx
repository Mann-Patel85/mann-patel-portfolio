"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  GraduationCap,
  Briefcase,
  Cpu,
  CheckCircle2,
  Award,
  FolderGit2,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function ResumeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#080d22]/98 border border-cyan-500/30 shadow-[0_0_60px_rgba(0,245,255,0.2)] overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/10 bg-[#0c122e]/95">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-cyan-300 ml-1 sm:ml-2 truncate max-w-[200px] sm:max-w-none">
                Mann_Patel_Resume_2026.pdf
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-7 text-zinc-300 font-sans print:p-0">
            {/* Header: Name & Contact Details */}
            <div className="border-b border-white/10 pb-6 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  MANN PATEL
                </h2>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 self-center sm:self-auto">
                  AI-ML Developer
                </span>
              </div>

              {/* Contact Icons Bar */}
              <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 text-xs font-mono text-zinc-300">
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone || "+919824804372"}`}
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PORTFOLIO_DATA.personal.phone || "+91 9824804372"}</span>
                </a>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.socials.email}`}
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PORTFOLIO_DATA.personal.socials.email}</span>
                </a>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ahmedabad, Gujarat</span>
                </span>
                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>

              {/* Objective */}
              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                  OBJECTIVE
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {PORTFOLIO_DATA.personal.objective ||
                    "Results-driven Computer Engineering student seeking an AI-ML Developer role. Proven experience architecting autonomous multi-agent systems, high-availability LLM failover arrays, and RAG vector search pipelines. Currently expanding expertise in Cloud Engineering and serverless infrastructure (AWS/Cloudflare) to build scalable, cloud-native AI solutions."}
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              {PORTFOLIO_DATA.education?.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/20 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-zinc-300 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1 sm:mt-0">
                      {edu.gpa && (
                        <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">
                          {edu.gpa}
                        </span>
                      )}
                      {edu.honors && (
                        <span className="text-xs font-mono text-zinc-400">
                          {edu.honors}
                        </span>
                      )}
                    </div>
                  </div>
                  {edu.coursework && (
                    <p className="text-xs text-zinc-400 mt-2">
                      <span className="font-mono text-emerald-400/80">Key Coursework:</span>{" "}
                      {edu.coursework}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                <Briefcase className="w-4 h-4" />
                <span>WORK EXPERIENCE</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-colors space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm sm:text-base font-semibold text-zinc-100">
                    Artificial Intelligence Intern{" "}
                    <span className="text-purple-400 font-mono">
                      @ CodeAlpha (Virtual)
                    </span>
                  </h4>
                  <span className="text-xs font-mono text-zinc-400">
                    December 2025 (1 Month)
                  </span>
                </div>
                <ul className="space-y-1.5 pt-1">
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      Completed an intensive AI development program, successfully architecting and deploying 4 end-to-end machine learning pipelines.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      Engineered a real-time object tracking system using <strong className="text-white">YOLOv8 & OpenCV</strong> and trained an <strong className="text-white">LSTM neural network</strong> in TensorFlow to autonomously generate MIDI music sequences.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>
                      Developed full-stack NLP applications, including a <strong className="text-white">TF-IDF powered intent-matching chatbot</strong> and a multi-lingual translator, deploying interactive web UIs via <strong className="text-white">Gradio</strong>.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Featured Projects */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <FolderGit2 className="w-4 h-4" />
                <span>KEY PROJECTS</span>
              </div>
              <div className="space-y-3">
                {/* AgenticMarketer */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>AgenticMarketer: Autonomous Multi-Agent Marketing Swarm</span>
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-400">
                      Python • FastAPI • Next.js • Groq LPU • Cloudflare Workers AI • RAG • Pillow
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>
                        <strong className="text-zinc-100">Asynchronous Multi-Agent Architecture:</strong> Built a decoupled 6-agent system using FastAPI and CrewAI to deliver 11-channel campaigns in &lt;15s with zero-delay HTTP 429 LLM failover (gpt-oss-120b → qwen3.8-27b).
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>
                        <strong className="text-zinc-100">Multimodal RAG & Brand Guardrails:</strong> Engineered an offline hybrid TF-IDF vector engine with Cloudflare Vision (Llama-3.2-11B) for OCR/diagram parsing and an entity-level isolation gate to prevent cross-brand context contamination.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>
                        <strong className="text-zinc-100">4-Tier Edge Visual Diffusion:</strong> Deployed an edge-rendered image pipeline via Cloudflare Workers AI (@cf/black-forest-labs/flux-1-schnell) paired with a Pillow TrueType compositor for 100% typography accuracy.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* FaceTrack */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-white">
                      FaceTrack: AI-Powered Attendance System
                    </h4>
                    <span className="text-[11px] font-mono text-blue-400">
                      Python • Streamlit • OpenCV • DeepFace (VGG-Face)
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      <span>
                        Developed an end-to-end computer vision application using Streamlit and OpenCV to process video footage, automate attendance tracking, and generate real-time CSV reports.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                      <span>
                        Implemented deep learning facial recognition utilizing VGG-Face to extract high-dimensional facial embeddings, successfully matching dynamic video frames against a secure image database.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400">
                <Award className="w-4 h-4" />
                <span>CERTIFICATIONS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div className="text-xs font-bold text-white">AI Developer</div>
                  <div className="text-[11px] font-mono text-amber-400 mt-1">AICERTs</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div className="text-xs font-bold text-white">Data Analytics</div>
                  <div className="text-[11px] font-mono text-blue-400 mt-1">IBM SkillBuild PBL Program</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
                  <div className="text-xs font-bold text-white">Diploma in Multilingual Computer Programming</div>
                  <div className="text-[11px] font-mono text-purple-400 mt-1">CDAC</div>
                </div>
              </div>
            </div>

            {/* Technical Skills Bento */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Code2 className="w-4 h-4" />
                <span>TECHNICAL SKILLS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-cyan-300 font-semibold block mb-1">
                    AI/ML & Agent Systems:
                  </span>
                  <span className="text-zinc-300">
                    CrewAI, Swarm Architecture, Retrieval-Augmented Generation (RAG), Groq Cloud LPU, Llama-3.2 Vision, Diffusion Models (FLUX.1-schnell), YOLOv8, OpenCV, DeepFace
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-emerald-300 font-semibold block mb-1">
                    Languages:
                  </span>
                  <span className="text-zinc-300">
                    Python, C++, Java, C, JavaScript, TypeScript
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-purple-300 font-semibold block mb-1">
                    Web & Cloud Infrastructure:
                  </span>
                  <span className="text-zinc-300">
                    FastAPI, Next.js, React, HTML, CSS, AWS, Cloudflare Workers AI
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="font-mono text-amber-300 font-semibold block mb-1">
                    Databases, Tools & Concepts:
                  </span>
                  <span className="text-zinc-300">
                    MySQL, Git, GitHub, XAMPP, Figma, DSA, OS, DBMS, Computer Networks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
