"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  Terminal,
  Clock,
  Send,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview", icon: Brain },
  { label: "Skills", href: "#skills", icon: Cpu },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Playground", href: "#playground", icon: Terminal },
  { label: "Timeline", href: "#experience", icon: Clock },
  { label: "Contact", href: "#contact", icon: Send },
];

export function Navbar({ onOpenResume }: { onOpenResume: () => void }) {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-4 md:p-6 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#060919]/80 backdrop-blur-xl border-cyan-500/20 shadow-[0_8px_32px_0_rgba(0,245,255,0.08)]"
              : "bg-[#060919]/50 backdrop-blur-md border-white/10 shadow-lg"
          }`}
        >
          {/* Logo / Brand Name */}
          <a
            href="#overview"
            className="flex items-center gap-2.5 pl-2 pr-1 group"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-[0_0_12px_#00f5ff66]">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-wider text-zinc-100 group-hover:text-cyan-400 transition-colors">
                {PORTFOLIO_DATA.personal.name.toUpperCase()}
              </span>
              <span className="text-[9px] font-mono text-cyan-400/80 -mt-0.5 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                NEURAL CORE ONLINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 px-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "text-cyan-300 font-medium"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 via-indigo-500/20 to-purple-500/15 border border-cyan-400/30 shadow-[0_0_15px_#00f5ff33]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* CTA Resume & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenResume}
              className="relative px-3.5 py-1.5 text-xs font-mono text-cyan-300 rounded-full bg-cyan-950/60 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-900/60 hover:shadow-[0_0_15px_#00f5ff44] transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
            >
              <span className="hidden sm:inline">Resume / CV</span>
              <span className="sm:hidden">CV</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 p-4 rounded-2xl bg-[#080d24]/95 backdrop-blur-2xl border border-cyan-500/20 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-mono transition-colors ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30"
                        : "text-zinc-300 hover:bg-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
