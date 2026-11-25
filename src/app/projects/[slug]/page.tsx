import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA, getOrderedProjects, getProject } from "@/data/portfolioData";
import { ProjectMedia } from "@/components/ui/ProjectMedia";

export function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — ${project.tagline} | ${PORTFOLIO_DATA.personal.name}`;
  return {
    title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description: project.description, url: `/projects/${project.slug}` },
  };
}

const card = "rounded-2xl border border-white/10 bg-[#080c1d]/90 p-6 sm:p-8";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const ordered = getOrderedProjects();
  const index = ordered.findIndex((p) => p.slug === project.slug);
  const prev = ordered[(index - 1 + ordered.length) % ordered.length];
  const next = ordered[(index + 1) % ordered.length];
  const [cover, ...gallery] = project.media;

  return (
    <main className="relative min-h-screen px-4 py-16 text-zinc-100 sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#1e1b4b66,_#030611_60%)]" />
      <article className="mx-auto max-w-5xl">
        <Link href="/#projects" className="font-mono text-sm text-cyan-300 hover:text-white">
          ← All projects
        </Link>

        <header className="mt-10 rounded-3xl border border-cyan-500/20 bg-[#060a1d]/85 p-7 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            {project.slug === "graphscout" && <span className="text-amber-300">Flagship · </span>}
            {project.tagline}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{project.title}</h1>
          {(project.context || project.period) && (
            <p className="mt-2 text-sm text-zinc-400">{[project.context, project.period].filter(Boolean).join(" · ")}</p>
          )}
          <p className="mt-5 max-w-3xl leading-7 text-zinc-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                className="rounded-xl bg-cyan-400 px-4 py-2 font-mono text-sm font-bold text-slate-950 hover:bg-cyan-300"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
            )}
            {project.demoUrl && (
              <a
                className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 font-mono text-sm text-emerald-300 hover:bg-emerald-500/20"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo ↗
              </a>
            )}
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.facts.map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-white/5 bg-black/40 p-3">
                <dt className="font-mono text-[11px] text-zinc-400">{label}</dt>
                <dd className="mt-0.5 font-mono font-bold text-cyan-200">{value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {cover && (
          <div className="mt-8">
            <ProjectMedia media={cover} priority sizes="(min-width: 1024px) 1024px, 100vw" />
          </div>
        )}

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-400/15 bg-[#080c1d]/90 p-6">
            <h2 className="font-mono text-lg text-rose-300">The problem</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-emerald-400/15 bg-[#080c1d]/90 p-6">
            <h2 className="font-mono text-lg text-emerald-300">The approach</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{project.solution}</p>
          </div>
        </section>

        <section className={`mt-8 ${card}`}>
          <h2 className="text-2xl font-bold">Architecture</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {project.architecture.map((step, i) => (
              <li key={step} className="flex gap-3 rounded-xl border border-cyan-500/15 bg-cyan-950/20 p-4">
                <span className="font-mono text-cyan-400">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm leading-5 text-zinc-300">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {project.results && (
          <section className={`mt-8 ${card}`}>
            <h2 className="text-2xl font-bold">{project.results.title}</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 font-mono text-xs text-zinc-400">
                    {project.results.headers.map((h) => (
                      <th key={h} className="py-2 pr-4 font-normal">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.results.rows.map((row, ri) => (
                    <tr key={ri} className="border-b border-white/5 last:border-0">
                      {row.map((cell, ci) => (
                        <td key={ci} className={`py-2.5 pr-4 ${ci === 0 ? "text-white" : "font-mono text-cyan-200"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {project.results.note && <p className="mt-4 text-xs text-zinc-400">{project.results.note}</p>}
          </section>
        )}

        {gallery.length > 0 && (
          <section className={`mt-8 ${card}`}>
            <h2 className="text-2xl font-bold">Screenshots</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {gallery.map((m) => (
                <ProjectMedia key={m.src} media={m} sizes="(min-width: 640px) 50vw, 100vw" />
              ))}
            </div>
          </section>
        )}

        <section className={`mt-8 ${card}`}>
          <h2 className="text-2xl font-bold">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-300">
                {tag}
              </li>
            ))}
          </ul>
        </section>

        <nav className="mt-12 flex items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-sm">
          <Link href={`/projects/${prev.slug}`} className="text-zinc-400 hover:text-cyan-300">
            ← {prev.title}
          </Link>
          <Link href={`/projects/${next.slug}`} className="text-right text-zinc-400 hover:text-cyan-300">
            {next.title} →
          </Link>
        </nav>
      </article>
    </main>
  );
}
