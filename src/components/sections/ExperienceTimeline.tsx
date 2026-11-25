"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Briefcase, GraduationCap, MapPin, Award, ExternalLink } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const { experience, education, certifications } = PORTFOLIO_DATA;

function TimelineItem({ index, children }: { index: number; children: React.ReactNode }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 sm:pl-10"
    >
      <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#060a1d] border-2 border-cyan-400/70" />
      <div className="p-6 sm:p-7 rounded-2xl bg-[#060a1d]/80 border border-white/10 backdrop-blur-xl">{children}</div>
    </motion.li>
  );
}

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
          <Clock className="w-3.5 h-3.5" />
          <span>EXPERIENCE & EDUCATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Experience & education</h2>
      </div>

      <ol className="relative border-l border-cyan-500/20 ml-2 sm:ml-6 space-y-10">
        {experience.map((item, i) => (
          <TimelineItem key={item.id} index={i}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-white/5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-emerald-300 border-emerald-500/30 bg-emerald-500/10">
                    <Briefcase className="w-3.5 h-3.5" />
                    {item.type}
                  </span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-2 font-mono">
                  {item.role} <span className="text-cyan-400">· {item.organization}</span>
                </h3>
              </div>
              <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 w-fit">
                {item.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2">
              {item.description.map((d) => (
                <li key={d} className="flex gap-2.5 text-sm text-zinc-300">
                  <span className="text-cyan-400">›</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
              {item.skillsUsed.map((s) => (
                <span key={s} className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300">
                  {s}
                </span>
              ))}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 text-xs font-mono text-cyan-300 hover:text-white"
                >
                  Code <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </TimelineItem>
        ))}

        {education.map((edu, i) => (
          <TimelineItem key={edu.degree} index={experience.length + i}>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-4 border-b border-white/5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-cyan-300 border-cyan-500/30 bg-cyan-500/10">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Education
                  </span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-2 font-mono">
                  {edu.degree} <span className="text-cyan-400">· {edu.institution}</span>
                </h3>
              </div>
              <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/20 w-fit">
                {edu.period}
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-300">
              <span className="font-mono font-bold text-emerald-300">{edu.gpa}</span>
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              <span className="text-zinc-300">Coursework: </span>
              {edu.coursework}
            </p>

            <div className="mt-5 pt-4 border-t border-white/5">
              <h4 className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                Certifications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {certifications.map((c) => (
                  <li key={c.title} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-xs font-bold text-white">{c.title}</div>
                    <div className="text-[11px] font-mono text-cyan-400 mt-0.5">{c.issuer}</div>
                  </li>
                ))}
              </ul>
            </div>
          </TimelineItem>
        ))}
      </ol>
    </section>
  );
}
