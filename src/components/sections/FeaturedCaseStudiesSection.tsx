import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Terminal, Network, BarChart3, Database } from 'lucide-react';

export const FeaturedCaseStudiesSection: React.FC = () => {
  const [opusTab, setOpusTab] = useState<'telemetry' | 'dag' | 'benchmarks'>('telemetry');
  const [opportunxTab, setOpportunxTab] = useState<'matches' | 'vector' | 'scale'>('matches');

  return (
    <section id="studies" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#f6f5f1] border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3 border border-black/5">
              <span>06 / AGENCY CASE DOSSIERS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-neutral-950">
              <span className="font-grotesk font-semibold">Interactive case</span>{' '}
              <span className="font-editorial italic">previews.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase">
            Click tabs below to inspect live system telemetry & architectures
          </span>
        </div>

        {/* ── CASE STUDY 01: OPUS (Dark Asymmetrical Editorial Spread) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-[#111114] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Brutalist Corner Crosshairs (+) */}
          <div className="absolute top-4 left-4 text-xs font-mono text-neutral-600 font-bold select-none">+</div>
          <div className="absolute top-4 right-4 text-xs font-mono text-neutral-600 font-bold select-none">+</div>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-600 font-bold select-none">+</div>
          <div className="absolute bottom-4 right-4 text-xs font-mono text-neutral-600 font-bold select-none">+</div>

          {/* Left Metadata & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase text-purple-300 border border-white/10">
                01 • Multi-Agent Autonomous Systems
              </span>
              <span className="text-xs font-mono text-neutral-400">2026 // PRODUCTION</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold tracking-tight text-white leading-tight">
              OPUS — Enterprise Multi-Agent Orchestration
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              An enterprise-grade autonomous AI system that translates natural language operational
              goals into parallel micro-task execution graphs with live state rollback and deterministic
              fallback validation.
            </p>

            {/* Metrics Pills */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-grotesk text-purple-400">10x</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase mt-0.5">Execution Speed</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-grotesk text-emerald-400">99.4%</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase mt-0.5">Agent Precision</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xl sm:text-2xl font-bold font-grotesk text-sky-400">5,000+</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase mt-0.5">Pipelines Run</div>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Deterministic DAG state machine with automated cycle detection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Real-time WebSocket telemetry stream with memory checkpoints</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/hasishinfant/opus-ai-agent"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-medium text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                <span>Read Full Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Interactive Preview Tabs */}
          <div className="lg:col-span-6 relative w-full">
            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 mb-3 bg-white/5 p-1 rounded-xl border border-white/10 w-fit">
              <button
                onClick={() => setOpusTab('telemetry')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  opusTab === 'telemetry' ? 'bg-white text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>[TELEMETRY]</span>
              </button>
              <button
                onClick={() => setOpusTab('dag')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  opusTab === 'dag' ? 'bg-white text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Network className="w-3.5 h-3.5" />
                <span>[DAG ARCHITECTURE]</span>
              </button>
              <button
                onClick={() => setOpusTab('benchmarks')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  opusTab === 'benchmarks' ? 'bg-white text-neutral-950 font-bold' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>[BENCHMARKS]</span>
              </button>
            </div>

            {/* Tab Body */}
            <AnimatePresence mode="wait">
              {opusTab === 'telemetry' && (
                <motion.div
                  key="telemetry"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/15 bg-neutral-900/90 p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs text-neutral-300"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[11px] text-neutral-300 font-bold">opus-agent-coordinator.ts</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">PORT 8080 // WS OPEN</span>
                  </div>

                  <div className="space-y-2 text-[11px] leading-relaxed">
                    <p className="text-purple-400">{`// Goal dispatched: "Parse AST & verify concurrency safety"`}</p>
                    <p className="text-neutral-400">{`[Orchestrator] Spawned 4 specialized subagents in isolated workspaces`}</p>
                    <div className="p-3 rounded-lg bg-black/60 border border-white/10 space-y-1.5">
                      <div className="text-sky-300">✓ Agent_01 (AST Parser): Extracted schema in 12ms</div>
                      <div className="text-emerald-300">✓ Agent_02 (Code Transformer): Generated types</div>
                      <div className="text-amber-300">✓ Agent_03 (Benchmark): Validated p99 latency &lt; 24ms</div>
                      <div className="text-purple-300">✓ Agent_04 (Verifier): Verified type completeness</div>
                    </div>
                    <p className="text-emerald-400 font-semibold">{`>> Workflow completed successfully (Execution Time: 1.42s)`}</p>
                  </div>
                </motion.div>
              )}

              {opusTab === 'dag' && (
                <motion.div
                  key="dag"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/15 bg-neutral-900/90 p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs text-neutral-300"
                >
                  <div className="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-white/10">
                    Directed Acyclic Graph (DAG) Pipeline
                  </div>
                  <div className="space-y-3 py-2">
                    <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-between">
                      <span className="text-purple-300 font-semibold">Node 0: Prompt Ingestion</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-200">VALIDATED</span>
                    </div>
                    <div className="text-center text-neutral-600 text-xs">↓ Parallel Dispatch</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-500/30 text-[11px] text-sky-200">
                        Node 1A: Vector Index
                      </div>
                      <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-500/30 text-[11px] text-sky-200">
                        Node 1B: Tool Registry
                      </div>
                    </div>
                    <div className="text-center text-neutral-600 text-xs">↓ State Rollback Guard</div>
                    <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                      <span className="text-emerald-300 font-semibold">Node 2: Output Synthesis & Verify</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200">PASS (0ms DOWNTIME)</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {opusTab === 'benchmarks' && (
                <motion.div
                  key="benchmarks"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-white/15 bg-neutral-900/90 p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4 font-mono text-xs text-neutral-300"
                >
                  <div className="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-white/10">
                    Rigorous Benchmark Metrics
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] pb-1">
                        <span className="text-neutral-400">Execution Speedup vs Serial LLM</span>
                        <span className="text-purple-300 font-bold">10.2x Faster</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 w-[95%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] pb-1">
                        <span className="text-neutral-400">Multi-Agent Task Accuracy</span>
                        <span className="text-emerald-300 font-bold">99.4% Validated</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[99%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] pb-1">
                        <span className="text-neutral-400">Token Cost Efficiency</span>
                        <span className="text-sky-300 font-bold">-45% Token Waste</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 w-[80%]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── CASE STUDY 02: OpportunX AI (High-Contrast Clean White Spread) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-white text-neutral-900 p-8 sm:p-12 lg:p-16 border border-black/10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative"
        >
          {/* Brutalist Corner Crosshairs (+) */}
          <div className="absolute top-4 left-4 text-xs font-mono text-neutral-300 font-bold select-none">+</div>
          <div className="absolute top-4 right-4 text-xs font-mono text-neutral-300 font-bold select-none">+</div>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-300 font-bold select-none">+</div>
          <div className="absolute bottom-4 right-4 text-xs font-mono text-neutral-300 font-bold select-none">+</div>

          {/* Left Visual Preview with Interactive Tabs */}
          <div className="lg:col-span-6 order-2 lg:order-1 w-full">
            <div className="flex items-center gap-2 mb-3 bg-neutral-100 p-1 rounded-xl border border-black/5 w-fit">
              <button
                onClick={() => setOpportunxTab('matches')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  opportunxTab === 'matches' ? 'bg-neutral-950 text-white font-bold' : 'text-neutral-600 hover:text-black'
                }`}
              >
                <span>[LIVE MATCHES]</span>
              </button>
              <button
                onClick={() => setOpportunxTab('vector')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  opportunxTab === 'vector' ? 'bg-neutral-950 text-white font-bold' : 'text-neutral-600 hover:text-black'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>[PGVECTOR]</span>
              </button>
              <button
                onClick={() => setOpportunxTab('scale')}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors flex items-center gap-1.5 ${
                  opportunxTab === 'scale' ? 'bg-neutral-950 text-white font-bold' : 'text-neutral-600 hover:text-black'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>[SCALE]</span>
              </button>
            </div>

            <div className="rounded-2xl border border-black/10 bg-neutral-50 p-6 shadow-inner space-y-4">
              <AnimatePresence mode="wait">
                {opportunxTab === 'matches' && (
                  <motion.div
                    key="matches"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-black/5">
                      <span className="text-xs font-mono font-semibold text-neutral-900">
                        OPPORTUNX MATCH ENGINE
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                        12,000+ REGISTERED
                      </span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-neutral-900">
                          Global GenAI Hackathon 2026
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono">$100k Prize Pool • San Francisco</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-purple-600">96% Fit</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-neutral-900">
                          Open Source AI Research Fellowship
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono">Remote • Full-time Grant</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-blue-600">92% Fit</span>
                    </div>
                  </motion.div>
                )}

                {opportunxTab === 'vector' && (
                  <motion.div
                    key="vector"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3 font-mono text-xs"
                  >
                    <div className="text-xs font-bold text-neutral-900 pb-2 border-b border-black/5">
                      Supabase PGVector Cosine Similarity
                    </div>
                    <p className="text-[11px] text-neutral-600">
                      Embeddings: text-embedding-3-small (1536-dim)
                    </p>
                    <div className="p-3 rounded-xl bg-white border border-black/5 space-y-1 text-[11px]">
                      <div className="text-neutral-800">Index Type: HNSW (M=16, efConstruction=64)</div>
                      <div className="text-emerald-700 font-semibold">Query Latency: 18.4ms (p99: 42ms)</div>
                      <div className="text-purple-700 font-semibold">Cosine Cutoff: 0.82 Threshold</div>
                    </div>
                  </motion.div>
                )}

                {opportunxTab === 'scale' && (
                  <motion.div
                    key="scale"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3 font-mono text-xs"
                  >
                    <div className="text-xs font-bold text-neutral-900 pb-2 border-b border-black/5">
                      Platform Scale Milestones
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-white border border-black/5">
                        <div className="text-2xl font-bold font-grotesk text-neutral-950">12,400+</div>
                        <div className="text-[10px] text-neutral-500 uppercase mt-0.5">Students & Builders</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-black/5">
                        <div className="text-2xl font-bold font-grotesk text-emerald-600">85%</div>
                        <div className="text-[10px] text-neutral-500 uppercase mt-0.5">Application Precision</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Metadata & Story */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-neutral-100 text-[11px] font-mono uppercase text-neutral-700 border border-black/5">
                02 • Full Stack AI Platform
              </span>
              <span className="text-xs font-mono text-neutral-400">2024–2026</span>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold tracking-tight text-neutral-950 leading-tight">
              OpportunX AI — Builder Opportunity Engine
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              AI-driven platform parsing thousands of hackathons, grants, and builder internships with
              semantic embedding matching tailored to developer velocity and skill portfolios.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="text-2xl font-bold font-grotesk text-neutral-950">12k+</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-1">Active Builders</div>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-black/5">
                <div className="text-2xl font-bold font-grotesk text-neutral-950">85%</div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase mt-1">Match Precision</div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="https://github.com/hasishinfant/opportunx-ai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
              >
                <span>View Platform Source</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturedCaseStudiesSection;
