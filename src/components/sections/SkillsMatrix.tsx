"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  BrainCircuit,
  Server,
  Cpu,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useNeural } from "@/context/NeuralContext";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  dl: <Boxes className="w-5 h-5 text-cyan-400" />,
  ml: <BrainCircuit className="w-5 h-5 text-purple-400" />,
  infra: <Server className="w-5 h-5 text-emerald-400" />,
  backend: <Server className="w-5 h-5 text-emerald-400" />,
  generative: <Boxes className="w-5 h-5 text-cyan-400" />,
  databases: <Server className="w-5 h-5 text-blue-400" />,
  tools: <Cpu className="w-5 h-5 text-amber-400" />,
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
          <span>SKILLS & TECHNOLOGIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technical Skills
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
          Technologies, frameworks, and programming languages I use to build intelligent AI systems and scalable software applications.
        </p>

        {/* Filter / Category Selector Bar */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-[#080d24]/80 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => {
              setSelectedCategory("all");
              setActiveCategory(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${selectedCategory === "all"
                ? "bg-cyan-500 text-black font-bold shadow-[0_0_15px_#00f5ff66]"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
          >
            All Skills ({PORTFOLIO_DATA.skills.length})
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
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${selectedCategory === cat.id
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


          </motion.div>
        ))}
      </div>
    </section>
  );
}
