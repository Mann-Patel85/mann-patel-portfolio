"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  FileText,
  Sparkles,
  Terminal,
  Activity,
  Cpu,
  Layers,
  ChevronRight,
  Flame,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const [liveVram, setLiveVram] = useState(24.2);
  const [liveTps, setLiveTps] = useState(138);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVram((prev) => +(24.0 + Math.random() * 0.5).toFixed(1));
      setLiveTps((prev) => 135 + Math.floor(Math.random() * 12));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Floating Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,245,255,0.15)] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono text-cyan-300 font-medium tracking-wide">
            {PORTFOLIO_DATA.personal.statusBadge}
          </span>
        </motion.div>

        {/* Main Title / Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Architecting{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,245,255,0.3)]">
              Neural Systems
            </span>
            <br />& Scalable ML Engines
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300/90 leading-relaxed font-sans">
            Specializing in high-throughput foundation model inference, sub-50ms multi-modal RAG architectures, and custom CUDA GPU kernel acceleration.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:shadow-[0_0_35px_rgba(0,245,255,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>EXPLORE PROJECTS</span>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0a102a]/80 hover:bg-[#0f173d] text-zinc-100 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md font-mono text-sm tracking-wide hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
            <span>CURRICULUM VITAE</span>
          </button>
        </motion.div>

        {/* Live Metrics Telemetry Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 w-full max-w-4xl"
        >
          <div className="relative rounded-2xl bg-[#060a1d]/80 border border-cyan-500/20 backdrop-blur-xl p-4 sm:p-5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  SYSTEM TELEMETRY // CLUSTER NODE: US-WEST-2-H100
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>ALL KERNELS ACTIVE</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
              {PORTFOLIO_DATA.personal.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all duration-200"
                >
                  <div className="text-[11px] font-mono text-zinc-400 truncate">
                    {metric.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-400/80 mt-0.5">
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Stream Footer */}
            <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>NVIDIA H100 SXM5:</span>
                <span className="text-cyan-300">{liveVram} / 80 GB VRAM (30.2%)</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Throughput:</span>
                <span className="text-amber-300">{liveTps} tok/s / instance</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-12 text-zinc-400 hover:text-cyan-400 transition-colors"
        >
          <a href="#skills" className="flex flex-col items-center gap-1 text-[11px] font-mono">
            <span>SCROLL TO INITIALIZE MATRIX</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
