import { PORTFOLIO_DATA } from "@/data/portfolioData";

const { personal, education } = PORTFOLIO_DATA;

export function AboutSection() {
  const edu = education[0];
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      <div className="rounded-3xl border border-cyan-500/20 bg-[#060a1d]/80 p-7 sm:p-10 backdrop-blur-xl">
        <p className="font-mono text-xs tracking-widest text-cyan-400">ABOUT</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">AI engineering, end to end</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-sm sm:text-base leading-7 text-zinc-300">
          {personal.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-mono text-sm text-cyan-300">EDUCATION</h3>
            <p className="mt-2 text-sm text-zinc-300">
              {edu.degree}, {edu.institution} · {edu.period}
            </p>
            <p className="mt-1 font-mono text-sm text-emerald-300">{edu.gpa}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-mono text-sm text-purple-300">WHAT I&apos;M LOOKING FOR</h3>
            <p className="mt-2 text-sm text-zinc-300">
              AI/ML Engineer or Generative AI Developer roles (full-time or internship) working on LLM applications, retrieval systems, or applied computer vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
