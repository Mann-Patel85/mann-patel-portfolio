"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Server,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA, SkillItem } from "@/data/portfolioData";
import { useNeural } from "@/context/NeuralContext";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  dl: <Boxes className="w-5 h-5 text-cyan-400" />,
  ml: <BrainCircuit className="w-5 h-5 text-purple-400" />,
  infra: <Server className="w-5 h-5 text-emerald-400" />,
  languages: <Cpu className="w-5 h-5 text-amber-400" />,
};

export function SkillsMatrix() {
  const { setActiveCategory, setActiveSkill } = useNeural();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredSkills =
    selectedCategory === "all"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SYNAPTIC ARCHITECTURE // 01</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Matrix & Systems Radar
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
          Hover over categories or skills to trigger resonant neural activations in the 3D celestial constellation behind.
        </p>

        {/* Filter / Category Selector Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-[#080d24]/80 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setActiveCategory(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_#00f5ff66]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            All Systems ({PORTFOLIO_DATA.skills.length})
          </button>

          {PORTFOLIO_DATA.skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => {
                if (selectedCategory === "all") setActiveCategory(null);
                else setActiveCategory(selectedCategory);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(0,245,255,0.2)]"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {CATEGORY_ICONS[cat.id]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            onMouseEnter={() => {
              setActiveCategory(skill.category);
              setActiveSkill(skill.name);
            }}
            onMouseLeave={() => {
              setActiveSkill(null);
              if (selectedCategory === "all") setActiveCategory(null);
              else setActiveCategory(selectedCategory);
            }}
            className="group relative p-5 rounded-2xl bg-[#060a1d]/75 border border-white/10 hover:border-cyan-400/50 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,245,255,0.12)] hover:-translate-y-1"
          >
            {/* Top Row: Title + Category Icon */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: skill.highlightColor || "#00f5ff",
                    boxShadow: `0 0 10px ${skill.highlightColor || "#00f5ff"}`,
                  }}
                />
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-mono">
                  {skill.name}
                </h3>
              </div>
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                {CATEGORY_ICONS[skill.category]}
              </div>
            </div>

            {/* Description / Implementation Details */}
            <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-sans">
              {skill.description}
            </p>

            {/* Proficiency Bar with Glow */}
            <div className="mt-4 pt-3 border-t border-white/5">
              <div className="flex justify-between items-center text-[11px] font-mono text-zinc-400 mb-1.5">
                <span>Kernel Optimization Index</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hardware & Acceleration Spec Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-cyan-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/30">
            <Cpu className="w-7 h-7 text-cyan-300 animate-pulse" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white font-mono">
              High-Throughput Parallel Acceleration Stack
            </h4>
            <p className="text-xs text-zinc-300 mt-1 max-w-xl">
              Specialized in writing low-level Triton & CUDA kernels for FlashAttention-2, AWQ INT4 dequantization, and zero-copy shared memory tensor transfers.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-cyan-300">
            FP8 / INT4 GEMM
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-purple-300">
            PagedAttention
          </span>
        </div>
      </div>
    </section>
  );
}
