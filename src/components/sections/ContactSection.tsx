"use client";

import React, { useState } from "react";
import { Send, Mail, Phone, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const { socials, phone } = PORTFOLIO_DATA.personal;

const inputClass =
  "w-full rounded-xl bg-black/50 border border-white/10 p-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    setOpened(true);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <Send className="w-3.5 h-3.5" />
          <span>CONTACT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Let&apos;s talk</h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl">
          Hiring for an AI/ML or GenAI role, or want to collaborate on a project? Email is the fastest way to reach me.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 space-y-3">
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center gap-3 p-4 rounded-2xl bg-[#060a1d]/85 border border-cyan-500/20 hover:border-cyan-400/50 transition-colors"
          >
            <Mail className="w-5 h-5 text-cyan-400" />
            <div>
              <div className="text-[11px] font-mono text-zinc-400">Email</div>
              <div className="text-sm text-white">{socials.email}</div>
            </div>
          </a>
          {phone && (
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-4 rounded-2xl bg-[#060a1d]/85 border border-white/10 hover:border-cyan-400/50 transition-colors"
            >
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-[11px] font-mono text-zinc-400">Phone</div>
                <div className="text-sm text-white">{phone}</div>
              </div>
            </a>
          )}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#060a1d]/80 border border-white/10 hover:border-cyan-400/50 transition-colors flex items-center gap-3"
            >
              <GithubIcon className="w-5 h-5 text-zinc-300" />
              <span className="text-sm font-mono text-white">GitHub</span>
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#060a1d]/80 border border-white/10 hover:border-cyan-400/50 transition-colors flex items-center gap-3"
            >
              <LinkedinIcon className="w-5 h-5 text-zinc-300" />
              <span className="text-sm font-mono text-white">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-[#060a1d]/90 border border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-8">
            {opened ? (
              <div className="py-10 flex flex-col items-center text-center space-y-4" role="status">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Finish in your email app</h3>
                <p className="text-sm text-zinc-400 max-w-md">
                  Your message is drafted in your email client — press send there. If nothing opened, email{" "}
                  <a className="text-cyan-300 underline" href={`mailto:${socials.email}`}>{socials.email}</a> directly.
                </p>
                <button
                  onClick={() => setOpened(false)}
                  className="mt-2 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400">Name</label>
                    <input
                      id="contact-name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-mono font-bold text-sm flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] transition-shadow cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Open in email app
                </button>
                <p className="text-center text-[11px] text-zinc-500">Opens your email client with the message pre-filled.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
