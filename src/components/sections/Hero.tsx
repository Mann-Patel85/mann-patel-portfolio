"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText, ChevronRight, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const { personal } = PORTFOLIO_DATA;

export function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs sm:text-sm font-mono text-cyan-200 tracking-wide">{personal.statusBadge}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold uppercase tracking-widest">
            {personal.name} · {personal.role}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
              agentic AI
            </span>
            <br />
            that works on real data
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 leading-relaxed">{personal.summary}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-mono font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,245,255,0.35)] hover:shadow-[0_0_35px_rgba(0,245,255,0.6)] transition-shadow"
          >
            View projects
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a102a]/80 hover:bg-[#0f173d] text-zinc-100 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md font-mono text-sm transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            Resume
          </button>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a102a]/80 hover:bg-[#0f173d] text-zinc-100 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md font-mono text-sm transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 w-full max-w-4xl"
        >
          <div className="rounded-2xl bg-[#060a1d]/80 border border-cyan-500/20 backdrop-blur-xl p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {personal.highlights.map((h) => (
                <div key={h.label} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <dt className="text-[11px] font-mono text-zinc-400">{h.label}</dt>
                  <dd className="text-xl sm:text-2xl font-bold font-mono text-white mt-1">{h.value}</dd>
                  <dd className="text-[11px] font-mono text-cyan-400/80 mt-0.5">{h.sub}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-400">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-zinc-500">Stack:</span>
                {personal.coreStack.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-cyan-500/5 border border-cyan-500/15 text-cyan-200">
                    {s}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-zinc-300">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personal.location}
              </span>
            </div>
          </div>
        </motion.div>

        <a
          href="#about"
          className="mt-12 flex flex-col items-center gap-1 text-[11px] font-mono text-zinc-500 hover:text-cyan-400 transition-colors motion-safe:animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
