"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { Code2, ExternalLink, ArrowRight, BarChart3 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { getOrderedProjects, type ProjectItem } from "@/data/portfolioData";

function ProjectCard({ project }: { project: ProjectItem }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // Motion values update the transform without re-rendering React.
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(py * -5);
    rotateY.set(px * 5);
  };
  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const cover = project.media[0];

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex flex-col rounded-3xl bg-[#060a1d]/85 border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl p-6 sm:p-7 shadow-xl transition-colors"
    >
      {cover && (
        <div className="mb-5">
          <ProjectMedia media={cover} />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            {project.slug === "graphscout" && <span className="text-amber-300">Flagship · </span>}
            {project.tagline}
          </p>
          <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-white font-mono">
            <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0 after:rounded-3xl focus:outline-none">
              {project.title}
            </Link>
          </h3>
          {(project.context || project.period) && (
            <p className="mt-1 text-xs text-zinc-400">{[project.context, project.period].filter(Boolean).join(" · ")}</p>
          )}
        </div>
        <div className="relative z-10 flex shrink-0 items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-cyan-300 transition-colors"
              aria-label={`${project.title} source code on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 hover:bg-emerald-500/25 text-xs font-mono transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live demo
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{project.description}</p>

      <dl className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {project.facts.map((f) => (
          <div key={f.label} className="p-2.5 rounded-lg bg-black/40 border border-white/5">
            <dt className="text-[10px] font-mono text-zinc-400 truncate">{f.label}</dt>
            <dd className="text-[13px] leading-snug font-bold font-mono text-cyan-200 mt-0.5 break-words">{f.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li key={tag} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300">
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-5">
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
          {project.results?.length ? (
            <span className="inline-flex items-center gap-1.5 text-amber-300">
              <BarChart3 className="w-3.5 h-3.5" />
              Measured results inside
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-cyan-300 group-hover:text-white transition-colors">
            Case study
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsGrid() {
  const projects = getOrderedProjects();

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/30 text-xs font-mono text-indigo-300 mb-3">
          <Code2 className="w-3.5 h-3.5" />
          <span>PROJECTS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Selected work</h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
          Agentic systems, retrieval pipelines and computer-vision apps. Open any card for the architecture and details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
