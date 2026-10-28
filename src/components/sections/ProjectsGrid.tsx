"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  FileText,
  Activity,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  ChevronRight,
  Info,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";

function TiltProjectCard({
  project,
  onOpenDetails,
}: {
  project: ProjectItem;
  onOpenDetails: (p: ProjectItem) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#060a1d]/85 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl p-6 sm:p-7 transition-all duration-200 shadow-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,245,255,0.15)]"
    >
      {/* Radial Hover Spotlight Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{
          background: `radial-gradient(400px circle at ${glowPos.x}% ${glowPos.y}%, rgba(0,245,255,0.12), transparent 80%)`,
        }}
      />

      <div className="relative z-10 space-y-5">
        {/* Card Header: Featured Badge + Links */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
              {project.tagline}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-cyan-300 transition-colors"
                title="ArXiv Paper / Weights"
              >
                <FileText className="w-4 h-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-cyan-300 transition-colors"
              title="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-cyan-300 transition-colors"
                title="Live Deployment"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        {/* Problem vs Solution Callout */}
        <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs font-sans">
          <div className="flex items-start gap-2">
            <span className="font-mono text-rose-400 font-bold shrink-0">[PROBLEM]</span>
            <span className="text-zinc-400">{project.problemSolution.problem}</span>
          </div>
          <div className="flex items-start gap-2 pt-1 border-t border-white/5">
            <span className="font-mono text-emerald-400 font-bold shrink-0">[SOLVE]</span>
            <span className="text-zinc-300">{project.problemSolution.solution}</span>
          </div>
        </div>

        {/* Performance Benchmark Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center"
            >
              <div className="text-[10px] font-mono text-zinc-400 truncate">{m.label}</div>
              <div className="text-sm sm:text-base font-bold font-mono text-cyan-300 mt-0.5">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:border-cyan-500/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Architecture Modal Trigger */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <button
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
        >
          <Info className="w-3.5 h-3.5" />
          <span>INSPECT DEPLOYMENT GRAPH</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          VRAM OPTIMIZED
        </span>
      </div>
    </motion.div>
  );
}

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>DEPLOYED NEURAL SYSTEMS // 02</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured Engineering Projects
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
          Production-grade LLM orchestration, high-concurrency vector retrieval, and custom CUDA-accelerated edge computer vision pipelines.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PORTFOLIO_DATA.projects.map((project) => (
          <TiltProjectCard
            key={project.id}
            project={project}
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Architecture Breakdown Drawer Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#070b20] border border-cyan-500/30 p-6 sm:p-8 z-10 shadow-2xl space-y-6">
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Deep Dive Architecture
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-mono mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-white/5 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-zinc-400 uppercase">
                Kernel Pipeline & System Components:
              </h4>
              <ul className="space-y-2.5">
                {selectedProject.architectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center justify-between">
              <span>Status: Production Verified Benchmarks</span>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:text-cyan-300 underline"
              >
                Inspect GitHub Repo →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
