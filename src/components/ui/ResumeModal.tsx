"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Terminal,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Cpu,
  CheckCircle2,
} from "lucide-react";
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#080d22]/95 border border-cyan-500/30 shadow-[0_0_50px_rgba(0,245,255,0.15)] overflow-hidden z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c122e]/90">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-cyan-300 ml-2">
                res_vance_cv_2026.pdf [ENCRYPTED SHA-256]
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                download={`${PORTFOLIO_DATA.personal.name.replace(/\s+/g, "_")}_Resume.pdf`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-zinc-300 font-sans">
            {/* Title / Summary */}
            <div className="border-b border-white/10 pb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </h2>
              <p className="text-sm sm:text-base font-mono text-cyan-400 mt-1">
                {PORTFOLIO_DATA.personal.role} • {PORTFOLIO_DATA.personal.location}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                {PORTFOLIO_DATA.personal.bio}
              </p>
            </div>

            {/* Core Competency Radar */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Cpu className="w-4 h-4" />
                <span>Primary Technical Competencies</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-zinc-400">Deep Learning</div>
                  <div className="text-sm font-semibold text-white mt-1">PyTorch, JAX, Hugging Face</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-zinc-400">LLM Systems & RAG</div>
                  <div className="text-sm font-semibold text-white mt-1">vLLM, FAISS, DPO, ColBERT</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-zinc-400">Low-Level & HPC</div>
                  <div className="text-sm font-semibold text-white mt-1">CUDA C++, TensorRT, C++20</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs font-mono text-zinc-400">Serving & MLOps</div>
                  <div className="text-sm font-semibold text-white mt-1">Triton, K8s, Docker, Ray</div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-400">
                <Briefcase className="w-4 h-4" />
                <span>Selected Experience & Research</span>
              </div>
              <div className="space-y-4">
                {PORTFOLIO_DATA.timeline.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm sm:text-base font-semibold text-zinc-100">
                        {exp.role} <span className="text-cyan-400">@ {exp.organization}</span>
                      </h4>
                      <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5">
                      {exp.description.map((desc, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Credentials</span>
              </div>
              {PORTFOLIO_DATA.education?.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-1">
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {edu.institution} {edu.gpa ? `• GPA: ${edu.gpa}` : ""}
                      </p>
                    </div>
                    {edu.honors && (
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                        {edu.honors}
                      </span>
                    )}
                  </div>
                  {edu.coursework && (
                    <p className="text-xs text-zinc-400 mt-2">
                      <span className="font-mono text-cyan-400">Key Coursework:</span> {edu.coursework}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
