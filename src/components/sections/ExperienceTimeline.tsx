"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  Briefcase,
  GraduationCap,
  Trophy,
  GitPullRequest,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const TYPE_ICONS: Record<string, React.ReactNode> = {
  Work: <Briefcase className="w-4 h-4" />,
  Research: <Sparkles className="w-4 h-4" />,
  Award: <Trophy className="w-4 h-4" />,
  Education: <GraduationCap className="w-4 h-4" />,
  "Open Source": <GitPullRequest className="w-4 h-4" />,
};

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>EXPERIENCE & EDUCATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Experience & Education
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
          An AI internship, independent engineering projects, and academic milestones.
        </p>
      </div>

      {/* Vertical Cosmic Timeline */}
      <div className="relative border-l border-cyan-500/20 ml-4 sm:ml-8 space-y-12">
        {PORTFOLIO_DATA.timeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-10 group"
          >
            {/* Glowing Orb Indicator on the Timeline Line */}
            <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#060a1d] border border-cyan-400/50 shadow-[0_0_15px_rgba(0,245,255,0.4)] group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Content Glass Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#060a1d]/80 border border-white/10 group-hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 shadow-xl group-hover:shadow-[0_8px_30px_rgba(0,245,255,0.1)]">
            {/* Header: Period + Role + Organization / project context */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${item.badgeColor}`}
                    >
                      {TYPE_ICONS[item.type]}
                      <span>{item.type}</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2 font-mono">
                    {item.role}{" "}
                    <span className="text-cyan-400 font-semibold">· {item.organization}</span>
                  </h3>
                </div>

                <div className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 w-fit">
                  {item.period}
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2 font-sans">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies / Skills Chips */}
              <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap gap-2">
                {item.skillsUsed.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 group-hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Education Timeline Entry */}
        {PORTFOLIO_DATA.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pl-6 sm:pl-10 group"
          >
            <div className="absolute -left-[17px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#060a1d] border border-cyan-400/50 shadow-[0_0_15px_rgba(0,245,255,0.4)] group-hover:scale-110 group-hover:border-cyan-300 transition-all duration-300">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#060a1d]/80 border border-white/10 group-hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 shadow-xl group-hover:shadow-[0_8px_30px_rgba(0,245,255,0.1)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border text-cyan-400 border-cyan-500/30 bg-cyan-500/10">
                      <GraduationCap className="w-4 h-4" />
                      <span>Education</span>
                    </span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      Ahmedabad, India
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-2 font-mono">
                    {edu.degree}{" "}
                    <span className="text-cyan-400 font-semibold">@ {edu.institution}</span>
                  </h3>
                </div>

                <div className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 w-fit">
                  {edu.honors} · Final-Year Student
                </div>
              </div>

              <div className="mt-4 space-y-2 text-xs sm:text-sm text-zinc-300 font-sans">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="font-semibold text-white">Academic Standing:</span>
                  <span className="text-cyan-300 font-mono font-bold">{edu.gpa}</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <span className="font-semibold text-white">Core Coursework: </span>
                    {edu.coursework}
                  </span>
                </div>
              </div>

              {/* Certifications Sub-grid */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                  Professional Certifications
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <div className="text-xs font-bold text-white truncate">{cert.title}</div>
                      <div className="text-[11px] font-mono text-cyan-400 mt-0.5">{cert.issuer}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
