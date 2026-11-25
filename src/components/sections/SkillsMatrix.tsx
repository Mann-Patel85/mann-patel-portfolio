"use client";

import React from "react";
import { motion } from "framer-motion";
import { Boxes, BrainCircuit, Server, Database, Code2, Wrench, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA, type SkillCategoryId } from "@/data/portfolioData";
import { useNeural } from "@/context/NeuralContext";

const CATEGORY_STYLE: Record<SkillCategoryId, { icon: React.ReactNode; accent: string }> = {
  generative: { icon: <Boxes className="w-5 h-5" />, accent: "text-cyan-300" },
  ml: { icon: <BrainCircuit className="w-5 h-5" />, accent: "text-purple-300" },
  backend: { icon: <Server className="w-5 h-5" />, accent: "text-emerald-300" },
  databases: { icon: <Database className="w-5 h-5" />, accent: "text-blue-300" },
  languages: { icon: <Code2 className="w-5 h-5" />, accent: "text-amber-300" },
  tools: { icon: <Wrench className="w-5 h-5" />, accent: "text-orange-300" },
};

export function SkillsMatrix() {
  const { setActiveCategory } = useNeural();

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SKILLS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Technical skills</h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          The tools I&apos;ve used in the projects below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PORTFOLIO_DATA.skills.map((group, index) => {
          const style = CATEGORY_STYLE[group.id];
          return (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setActiveCategory(group.id)}
              onMouseLeave={() => setActiveCategory(null)}
              className="group p-5 rounded-2xl bg-[#060a1d]/75 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <span className={`p-1.5 rounded-lg bg-white/5 border border-white/5 ${style.accent}`}>{style.icon}</span>
                <h3 className={`font-mono text-sm font-bold uppercase tracking-wide ${style.accent}`}>{group.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs text-zinc-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
