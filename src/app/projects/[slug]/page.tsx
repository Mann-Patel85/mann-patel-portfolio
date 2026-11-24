import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} | Mann Patel`, description: project.description, alternates: { canonical: `/projects/${project.slug}` } } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-16 text-zinc-100 sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[#030611]" />
      <article className="mx-auto max-w-5xl">
        <Link href="/#projects" className="font-mono text-sm text-cyan-300 hover:text-white">← Back to projects</Link>
        <header className="mt-12 rounded-3xl border border-cyan-500/20 bg-[#060a1d]/85 p-7 sm:p-10">
          {project.slug === "graphscout" && <p className="mb-4 inline-flex rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 font-mono text-xs text-amber-300">FLAGSHIP PROJECT</p>}
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">{project.tagline}</p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{project.title}</h1>
          <p className="mt-5 max-w-3xl leading-7 text-zinc-300">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="rounded-xl bg-cyan-500 px-4 py-2 font-mono text-sm font-bold text-slate-950" href={project.githubUrl} target="_blank" rel="noreferrer">{project.slug === "facetrack" ? "GitHub profile" : "GitHub repository"}</a>
            {project.demoUrl && <a className="rounded-xl border border-white/15 px-4 py-2 font-mono text-sm" href={project.demoUrl} target="_blank" rel="noreferrer">Open available demo</a>}
          </div>
          <p className="mt-4 font-mono text-xs text-zinc-400">Demo status: {project.demoStatus}</p>
        </header>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-400/15 bg-[#080c1d]/90 p-6"><h2 className="font-mono text-lg text-rose-300">Problem</h2><p className="mt-3 text-sm leading-6 text-zinc-300">{project.problemSolution.problem}</p></div>
          <div className="rounded-2xl border border-emerald-400/15 bg-[#080c1d]/90 p-6"><h2 className="font-mono text-lg text-emerald-300">Solution</h2><p className="mt-3 text-sm leading-6 text-zinc-300">{project.problemSolution.solution}</p></div>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-[#080c1d]/90 p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Architecture & workflow</h2>
          <p className="mt-2 text-sm text-zinc-400">Workflow summary based on the project description.</p>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.architectureDetails.map((step, index) => <li key={step} className="flex gap-3 rounded-xl border border-cyan-500/15 bg-cyan-950/20 p-4"><span className="font-mono text-cyan-400">{String(index + 1).padStart(2, "0")}</span><span className="text-sm leading-5 text-zinc-300">{step}</span></li>)}
          </ol>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-[#080c1d]/90 p-6"><h2 className="text-2xl font-bold">Technical highlights</h2><ul className="mt-4 space-y-3">{project.architectureDetails.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-6 text-zinc-300"><span className="text-cyan-400">›</span>{detail}</li>)}</ul></div>
          <div className="rounded-2xl border border-white/10 bg-[#080c1d]/90 p-6"><h2 className="text-2xl font-bold">Stack & reported figures</h2><div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300">{tag}</span>)}</div><dl className="mt-5 space-y-3">{project.metrics.map(({ label, value }) => <div key={label} className="flex justify-between gap-3 border-b border-white/5 pb-2 text-sm"><dt className="text-zinc-400">{label}</dt><dd className="text-right text-cyan-200">{value}</dd></div>)}</dl><p className="mt-4 text-xs leading-5 text-zinc-500">Figures are project-reported. Evaluation results and implementation details should be verified against the repository.</p></div>
        </section>

        {project.slug === "nexusshare" && <aside className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-950/20 p-6 text-sm leading-6 text-amber-100"><h2 className="font-mono text-lg">Security terminology</h2><p className="mt-2">Steganography conceals that a message is present; it does not encrypt the message. Hashing produces an integrity fingerprint and is not reversible encryption. Authentication checks identity. LSB steganography alone does not provide cryptographic confidentiality or security guarantees.</p></aside>}
        {project.slug === "facetrack" && <aside className="mt-8 rounded-2xl border border-purple-400/20 bg-purple-950/20 p-6 text-sm leading-6 text-purple-100"><h2 className="font-mono text-lg">Biometric privacy</h2><p className="mt-2">Face images and embeddings are sensitive biometric data. Use consent, limit retention and access, and assess applicable privacy requirements before using attendance recognition with real people.</p></aside>}
      </article>
    </main>
  );
}
