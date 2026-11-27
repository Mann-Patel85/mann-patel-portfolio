"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, Phone, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA, getResumeProjects } from "@/data/portfolioData";

const { personal, education, experience, certifications, skills } = PORTFOLIO_DATA;
const resumeProjects = getResumeProjects();

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1.5 mb-3 print:text-black print:border-black/30">
      {children}
    </h3>
  );
}

export function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="resume-print-root fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-title"
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#080d22] border border-cyan-500/30 shadow-[0_0_60px_rgba(0,245,255,0.15)] overflow-hidden focus:outline-none print:max-h-none print:border-0 print:shadow-none print:bg-white print:rounded-none"
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-3 border-b border-white/10 bg-[#0c122e] print:hidden">
              <span className="text-xs font-mono text-cyan-300">Resume</span>
              <div className="flex items-center gap-2">
                {personal.resumeUrl ? (
                  <a
                    href={personal.resumeUrl}
                    download
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs font-mono hover:bg-cyan-400 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF
                  </a>
                ) : null}
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  {personal.resumeUrl ? "Print" : "Print / Save as PDF"}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close resume"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="resume-body p-5 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 text-sm print:overflow-visible print:text-black print:p-0">
              <header className="text-center sm:text-left">
                <h2 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
                  {personal.name}
                </h2>
                <p className="mt-0.5 font-mono text-xs text-cyan-300 print:text-black">{personal.role}</p>
                <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1.5 text-xs text-zinc-300 print:text-black">
                  <a href={`mailto:${personal.socials.email}`} className="flex items-center gap-1.5 hover:text-cyan-300">
                    <Mail className="w-3.5 h-3.5" /> {personal.socials.email}
                  </a>
                  <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-cyan-300">
                    <Phone className="w-3.5 h-3.5" /> {personal.phone}
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {personal.location}
                  </span>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300">
                    <GithubIcon className="w-3.5 h-3.5" /> {personal.socials.github.replace("https://", "")}
                  </a>
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-cyan-300">
                    <LinkedinIcon className="w-3.5 h-3.5" /> {personal.socials.linkedin.replace("https://", "")}
                  </a>
                </div>
              </header>

              <section>
                <SectionTitle>Education</SectionTitle>
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                      <h4 className="font-semibold text-white print:text-black">
                        {edu.degree} — {edu.institution}, {edu.location}
                      </h4>
                      <span className="text-xs font-mono text-zinc-400 print:text-black">{edu.period}</span>
                    </div>
                    <p className="text-xs mt-1">
                      <span className="font-semibold">{edu.gpa}</span> · {edu.coursework}
                    </p>
                  </div>
                ))}
              </section>

              <section>
                <SectionTitle>Experience</SectionTitle>
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                      <h4 className="font-semibold text-white print:text-black">
                        {exp.role} — {exp.organization} ({exp.location})
                      </h4>
                      <span className="text-xs font-mono text-zinc-400 print:text-black">{exp.period}</span>
                    </div>
                    <ul className="mt-1.5 list-disc pl-5 space-y-1 text-xs">
                      {exp.description.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section>
                <SectionTitle>Projects</SectionTitle>
                <div className="space-y-4">
                  {resumeProjects.map((p) => (
                    <div key={p.slug}>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5">
                        <h4 className="font-semibold text-white print:text-black">
                          {p.title} <span className="font-normal text-zinc-400 print:text-black">— {p.tagline}</span>
                        </h4>
                        <span className="flex shrink-0 items-center gap-2 text-xs font-mono text-zinc-400 print:text-black">
                          {p.period}
                          {p.githubUrl && (
                            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline print:text-black">
                              GitHub
                            </a>
                          )}
                          {p.demoUrl && (
                            <a href={p.demoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline print:text-black">
                              Live demo
                            </a>
                          )}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-400 print:text-black">{p.resumeStack ?? p.tags.join(", ")}</p>
                      <ul className="mt-1.5 list-disc pl-5 space-y-1 text-xs">
                        {p.resumeBullets!.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle>Skills</SectionTitle>
                <dl className="space-y-1 text-xs">
                  {skills.map((g) => (
                    <div key={g.id} className="flex flex-col sm:flex-row sm:gap-2">
                      <dt className="font-semibold text-white shrink-0 sm:w-44 print:text-black">{g.title}:</dt>
                      <dd>{g.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </section>

              <section>
                <SectionTitle>Certifications</SectionTitle>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  {certifications.map((c) => (
                    <li key={c.title}>
                      <span className="font-semibold">{c.title}</span> — {c.issuer}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
