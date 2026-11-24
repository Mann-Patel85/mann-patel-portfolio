"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#040714]/90 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-400">
        {/* Left: Brand / Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{PORTFOLIO_DATA.personal.name.toUpperCase()}</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span>© {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.</span>
        </div>

        {/* Center: Status */}
        <div className="flex items-center gap-2 text-[11px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Available for Opportunities</span>
        </div>

        {/* Right: Built With Stack */}
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span>Built with Next.js, Three.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
