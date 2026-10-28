"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
  Activity,
  Cpu,
  CheckCircle2,
  Sliders,
  ChevronDown,
} from "lucide-react";
import { PORTFOLIO_DATA, PlaygroundModel } from "@/data/portfolioData";

export function MLPlayground() {
  const [selectedModel, setSelectedModel] = useState<PlaygroundModel>(
    PORTFOLIO_DATA.playgroundModels[0]
  );
  const [userPrompt, setUserPrompt] = useState(PORTFOLIO_DATA.playgroundModels[0].defaultPrompt);
  const [isInferencing, setIsInferencing] = useState(false);
  const [streamedText, setStreamedText] = useState<string>("");
  const [logLines, setLogLines] = useState<string[]>([]);
  const [metrics, setMetrics] = useState({
    latency: 0,
    tokensPerSec: 0,
    confidence: 0,
    vram: 0,
  });

  const handleModelChange = (model: PlaygroundModel) => {
    setSelectedModel(model);
    setUserPrompt(model.defaultPrompt);
    setStreamedText("");
    setLogLines([]);
    setMetrics({ latency: 0, tokensPerSec: 0, confidence: 0, vram: 0 });
  };

  const runInference = () => {
    if (isInferencing) return;
    setIsInferencing(true);
    setStreamedText("");
    setLogLines([`[KERNEL INITIALIZE] Allocating CUDA tensor buffer for ${selectedModel.name}...`]);

    const template = selectedModel.responseTemplate;
    const tokens = template.syntheticTokens;
    let currentIdx = 0;

    // Simulate logs sequence
    setTimeout(() => {
      setLogLines((prev) => [
        ...prev,
        `[FP8 ENGINE] Weights loaded into VRAM: ${template.vramMb} MB`,
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
          `[COMPLETED] Stream finished with zero-copy buffer release.`,
        ]);
        setMetrics({
          latency: template.latencyMs,
          tokensPerSec: template.tokensPerSec,
          confidence: template.confidence,
          vram: template.vramMb,
        });
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
          <span>INTERACTIVE INFERENCE LAB // 03</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Neural Playground & Mini-Terminal
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl font-sans">
          Select an optimized model architecture and trigger synthetic parallel inference on simulated NVIDIA H100 hardware.
        </p>
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
              neural_infer_session://v1.4.0-cuda12.4
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
            <span className="text-zinc-400">Weights:</span>
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
                Input Inference Prompt
              </label>

              <textarea
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                rows={4}
                className="w-full rounded-xl bg-black/50 border border-white/10 p-3.5 text-xs sm:text-sm font-mono text-zinc-200 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                placeholder="Enter prompt or query..."
              />

              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Precision: FP8 / INT4 Quantized</span>
                <span>Context: 8,192 tokens</span>
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
                    <span>SYNAPSE FORWARD PASS RUNNING...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-black text-black" />
                    <span>EXECUTE NEURAL INFERENCE</span>
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
                <span className="text-zinc-400 uppercase">Streaming Output Stream</span>
                {isInferencing && (
                  <span className="text-cyan-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    GENERATING TOKENS
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
                    <span>Press "Execute Neural Inference" to stream response.</span>
                  </div>
                )}
              </div>
            </div>

            {/* Performance Metric Gauges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] font-mono text-zinc-400">INFERENCE LATENCY</div>
                <div className="text-base font-bold font-mono text-cyan-300 mt-1">
                  {metrics.latency ? `${metrics.latency} ms` : "--"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] font-mono text-zinc-400">THROUGHPUT</div>
                <div className="text-base font-bold font-mono text-purple-300 mt-1">
                  {metrics.tokensPerSec ? `${metrics.tokensPerSec} tok/s` : "--"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] font-mono text-zinc-400">CONFIDENCE</div>
                <div className="text-base font-bold font-mono text-emerald-300 mt-1">
                  {metrics.confidence ? `${(metrics.confidence * 100).toFixed(1)}%` : "--"}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-[10px] font-mono text-zinc-400">VRAM ALLOCATED</div>
                <div className="text-base font-bold font-mono text-amber-300 mt-1">
                  {metrics.vram ? `${metrics.vram} MB` : "--"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
