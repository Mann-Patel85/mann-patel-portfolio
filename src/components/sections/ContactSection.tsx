"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration / AI Role Inquiry",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.socials.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <Send className="w-3.5 h-3.5" />
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let&apos;s Build Something Intelligent.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl font-sans">
          I am interested in AI/ML engineering opportunities, Generative AI development, internships, and collaborative projects. Let&apos;s connect and explore how intelligent technology can solve real-world problems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Social Nodes & Status (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status Glass Card */}
          <div className="p-6 rounded-3xl bg-[#060a1d]/85 border border-cyan-500/20 backdrop-blur-xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                CONTACT INFORMATION
              </span>
              <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Open to Opportunities
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
              Feel free to reach out directly via email or connect with me across GitHub and LinkedIn.
            </p>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-zinc-300 flex items-center justify-between">
              <span className="text-zinc-400">Email:</span>
              <a
                href={PORTFOLIO_DATA.personal.socials.email.startsWith("mailto:") ? PORTFOLIO_DATA.personal.socials.email : `mailto:${PORTFOLIO_DATA.personal.socials.email}`}
                className="text-cyan-300 hover:underline hover:text-cyan-200"
              >
                {PORTFOLIO_DATA.personal.socials.email.replace("mailto:", "")}
              </a>
            </div>
          </div>

          {/* Social Nodes Bento */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#060a1d]/80 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 flex items-center gap-3 group"
            >
              <GithubIcon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-300 transition-colors" />
              <div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-300 font-mono">GitHub</div>
                <div className="text-[10px] text-zinc-400 font-mono">Repositories</div>
              </div>
            </a>

            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#060a1d]/80 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all duration-300 flex items-center gap-3 group"
            >
              <LinkedinIcon className="w-5 h-5 text-zinc-400 group-hover:text-cyan-300 transition-colors" />
              <div>
                <div className="text-xs font-bold text-white group-hover:text-cyan-300 font-mono">LinkedIn</div>
                <div className="text-[10px] text-zinc-400 font-mono">Network</div>
              </div>
            </a>

          </div>
        </div>

        {/* Right Column: Terminal Command Prompt Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl bg-[#060a1d]/90 border border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-zinc-400">
                  guest@neural-host:~$ ./dispatch_message.sh
                </span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500">EMAIL HANDOFF</span>
            </div>

            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-mono text-white">
                  Continue in your email app
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-sans">
                  Your message was prepared in a mailto link. Send it from your email app to complete delivery. If it did not open, email {PORTFOLIO_DATA.personal.socials.email} directly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-300 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-zinc-400">
                      NAME / SENDER_ID
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. Sarah Connor"
                      className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs sm:text-sm font-mono text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-zinc-400">
                      ELECTRONIC_MAIL
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@deepmind.com"
                      className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs sm:text-sm font-mono text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-zinc-400">
                    SUBJECT // TOPIC
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs sm:text-sm font-mono text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-zinc-400">
                    PAYLOAD // MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We came across your work on CUDA-accelerated speculative decoding and would love to chat..."
                    className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs sm:text-sm font-mono text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={false}
                  className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                    false
                      ? "bg-cyan-950/60 text-cyan-400/50 border border-cyan-500/20 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-black shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.7)] hover:scale-[1.01] active:scale-[0.99]"
                  }`}
                >
                  <Send className="w-4 h-4 fill-black text-black" />
                  <span>OPEN EMAIL TO SEND</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
