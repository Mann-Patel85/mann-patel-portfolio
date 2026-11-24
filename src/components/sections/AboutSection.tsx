import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function AboutSection() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      <div className="rounded-3xl border border-cyan-500/20 bg-[#060a1d]/80 p-7 sm:p-10 backdrop-blur-xl">
        <p className="font-mono text-xs tracking-widest text-cyan-400">ABOUT ME</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">AI engineering with a practical focus</h2>
        <p className="mt-5 max-w-3xl text-sm sm:text-base leading-7 text-zinc-300">{PORTFOLIO_DATA.personal.bio}</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-mono text-sm text-cyan-300">ACADEMIC BACKGROUND</h3>
            <p className="mt-2 text-sm text-zinc-300">Final-year B.Tech Computer Science and Engineering student at Silver Oak College of Technology, Ahmedabad. CGPA: 9.27/10.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h3 className="font-mono text-sm text-purple-300">ENGINEERING INTERESTS</h3>
            <p className="mt-2 text-sm text-zinc-300">Agentic AI, GraphRAG, retrieval systems, multimodal applications, computer vision, and AI backend development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
