"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Activity, ShieldCheck, Heart } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Footer() {
  const [uptimeSeconds, setUptimeSeconds] = useState(14820);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d ${h}h ${m}m ${s}s`;
  };

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
          <span>© {new Date().getFullYear()} All Neural Rights Reserved.</span>
        </div>

        {/* Center: System Status & Telemetry */}
        <div className="flex items-center gap-4 text-[11px]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>ALL SYSTEMS OPERATIONAL</span>
          </div>
          <span className="text-zinc-600">•</span>
          <div className="text-cyan-400">
            <span>UPTIME: </span>
            <span className="text-zinc-200">{formatUptime(uptimeSeconds)}</span>
          </div>
        </div>

        {/* Right: Built With Stack */}
        <div className="flex items-center gap-2 text-[11px] text-zinc-400">
          <span>Built with Next.js, Three.js & Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
