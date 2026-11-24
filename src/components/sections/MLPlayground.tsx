"use client";

import React, { useState } from "react";
import {
  Terminal,
  Play,
  Activity,
  Sliders,
} from "lucide-react";
import { PORTFOLIO_DATA, type PlaygroundModel } from "@/data/portfolioData";
import Link from "next/link";

export function MLPlayground() {
  const [selectedModel, setSelectedModel] = useState<PlaygroundModel>(
    PORTFOLIO_DATA.playgroundModels[0]
  );
  const [userPrompt, setUserPrompt] = useState(PORTFOLIO_DATA.playgroundModels[0].defaultPrompt);
  const [isInferencing, setIsInferencing] = useState(false);
  const [streamedText, setStreamedText] = useState<string>("");
  const [logLines, setLogLines] = useState<string[]>([]);

  const handleModelChange = (model: PlaygroundModel) => {
    setSelectedModel(model);
    setUserPrompt(model.defaultPrompt);
    setStreamedText("");
    setLogLines([]);
  };

  const runInference = () => {
    if (isInferencing) return;
    setIsInferencing(true);
    setStreamedText("");
    setLogLines([`[INITIALIZING] Loading pipeline components for ${selectedModel.name}...`]);

    const template = selectedModel.responseTemplate;
    const tokens = template.syntheticTokens;
    let currentIdx = 0;

    // Simulate logs sequence
    setTimeout(() => {
      setLogLines((prev) => [
        ...prev,
        `[READY] Executing query across pipeline...`,
        ...template.outputLines.slice(0, 2),
      ]);
    }, 250);

    // Stream tokens
    const interval = setInterval(() => {
      if (currentIdx < tokens.length) {
        setStreamedText((prev) => prev + tokens[currentIdx]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsInferencing(false);
        setLogLines((prev) => [
          ...prev,
          `[COMPLETED] Pipeline execution finished successfully.`,
        ]);
      }
    }, 45);
  };

  return (
    <section
      id="playground"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>ENGINEERING LAB · SIMULATED WORKFLOWS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering Lab
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
          These browser-only workflows display scripted examples. They do not call project backends or run AI models. Choose a project to inspect its workflow.
        </p>
      </div>

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {PORTFOLIO_DATA.projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="rounded-2xl border border-white/10 bg-[#060a1d]/80 p-4 transition-colors hover:border-cyan-400/40">
            <span className="block text-sm font-semibold text-white">{project.title}</span>
            <span className="mt-2 block font-mono text-xs text-amber-300">{project.demoStatus}</span>
          </Link>
        ))}
      </div>

      {/* Main Terminal Window */}
      <div className="rounded-3xl bg-[#060a1d]/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,245,255,0.1)] overflow-hidden">
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-b border-white/10 bg-[#080d26]/80">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-cyan-300">
              simulated_demo_console://scripted-workflow
            </span>
          </div>

          {/* Model Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {PORTFOLIO_DATA.playgroundModels.map((m) => (
              <button
                key={m.id}
                onClick={() => handleModelChange(m)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                  selectedModel.id === m.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.2)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {m.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Model Spec Ribbon */}
        <div className="px-6 py-3 bg-[#0a1030]/60 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Architecture:</span>
            <span className="text-cyan-300">{selectedModel.architecture}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Scope:</span>
            <span className="text-purple-300">{selectedModel.parameters}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Task:</span>
            <span className="text-emerald-300">{selectedModel.category}</span>
          </div>
        </div>

        {/* Terminal Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {/* Left Column: Input Prompt & Controls (5 cols) */}
          <div className="lg:col-span-5 p-6 space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                Input Query / Prompt
              </label>

              <textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-xl bg-black/50 border border-white/10 p-3.5 text-xs sm:text-sm font-mono text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Enter prompt or query..."
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Mode: Interactive Demo</span>
                <span>Status: Ready</span>
              </div>
            </div>

            {/* Run Button */}
            <div className="pt-4">
              <button
                onClick={runInference}
                disabled={isInferencing}
                className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  isInferencing
                    ? "bg-cyan-950/60 text-cyan-400/50 border border-cyan-500/20 cursor-not-allowed"
                    : "bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-black shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.7)] hover:scale-[1.02] active:scale-[0.98]"
                }`}
              >
                {isInferencing ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin text-cyan-400" />
                    <span>PROCESSING PIPELINE WORKFLOW...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black text-black" />
                    <span>RUN DEMO WORKFLOW</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Output & Telemetry (7 cols) */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-6">
            {/* Live Streaming Terminal Output */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400 uppercase">Execution Output Stream</span>
                {isInferencing && (
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    PROCESSING
                  </span>
                )}
              </div>

              <div className="min-h-[160px] rounded-xl bg-black/60 border border-white/10 p-4 font-mono text-xs text-zinc-200 overflow-y-auto space-y-2">
                {logLines.map((log, idx) => (
                  <div key={idx} className="text-zinc-400 text-[11px]">
                    {log}
                  </div>
                ))}

                {streamedText && (
                  <div className="pt-2 text-cyan-300 leading-relaxed">
                    <span className="text-zinc-400 mr-1">&gt;</span>
                    {streamedText}
                    {isInferencing && (
                      <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
                    )}
                  </div>
                )}

                {!isInferencing && !streamedText && (
                  <div className="text-zinc-400 flex items-center gap-2 h-24 justify-center">
                    <span>Click &quot;Run Demo Workflow&quot; to test pipeline output.</span>
                  </div>
                )}
              </div>
            </div>

            <p className="rounded-xl border border-amber-400/20 bg-amber-950/20 p-4 text-xs leading-5 text-amber-100">Scripted demonstration only. Output is illustrative and does not report actual model execution, latency, confidence, or memory use.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
