import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import { OpusOrbitalPreview3D } from '../canvas/OpusOrbitalPreview3D';

export const SelectedWorkSection: React.FC = () => {
  const opportunx = PROJECTS.find((p) => p.id === 'opportunx')!;
  const opus = PROJECTS.find((p) => p.id === 'opus')!;
  const neoscholar = PROJECTS.find((p) => p.id === 'neoscholar')!;
  const travelsphere = PROJECTS.find((p) => p.id === 'travelsphere')!;
  const civicflow = PROJECTS.find((p) => p.id === 'civicflow')!;

  return (
    <section id="work" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3 border border-black/5">
              <span>SECTION 06 // EXHIBITION PROJECTS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase leading-[0.92]">
              SELECTED WORK
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-600 font-mono">
            "A few things I've built while trying to solve problems that interested me."
          </p>
        </div>

        {/* ── PROJECT 01: OPUS (HERO PROJECT — PERSONAL AI OS WITH 3D ORBITAL UI) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-[#0c0c0e] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#9333ea_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

          {/* Left Metadata & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider border border-purple-500/30 font-bold">
                ★ HERO PROJECT // 2026
              </span>
              <span className="text-xs font-mono text-neutral-400">NEXT.JS • THREE.JS • GEMINI</span>
            </div>

            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-grotesk tracking-tight text-white leading-tight">
              OPUS — Personal AI Operating System
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {opus.description}
            </p>

            {/* Recruiter Callout */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Statement: "I don't only build CRUD apps." A 3D orbital operating layer for your computer.</span>
            </div>

            {/* Features & Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-lg sm:text-xl font-bold font-grotesk text-purple-400">&lt; 400ms</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase mt-0.5">Voice Intent Routing</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-lg sm:text-xl font-bold font-grotesk text-emerald-400">Native</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase mt-0.5">macOS Tool Bridge</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-lg sm:text-xl font-bold font-grotesk text-sky-400">60 FPS</div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase mt-0.5">Orbital 3D UI</div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#opus-study"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-950 font-grotesk font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-colors"
              >
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-neutral-500">VOICE + ORBITAL LAUNCHER</span>
            </div>
          </div>

          {/* Right: Embedded 3D Orbital Canvas Visual */}
          <div className="lg:col-span-6 relative w-full">
            <OpusOrbitalPreview3D />
          </div>
        </motion.div>

        {/* ── PROJECT 02: OPPORTUNX (DIMENSIONAL FLOATING OPPORTUNITY CARDS) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group rounded-[2.5rem] bg-white border border-black/10 p-8 sm:p-12 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Metadata & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-mono uppercase tracking-wider border border-blue-200 font-bold">
                CAREER TECH // 2026
              </span>
              <span className="text-xs font-mono text-neutral-500">AWS SERVERLESS + REACT</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold font-grotesk tracking-tight text-neutral-950">
              OPPORTUNX — AI Opportunity Discovery Engine
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              {opportunx.description}
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {opportunx.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              {opportunx.devpostUrl && (
                <a
                  href={opportunx.devpostUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-grotesk font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  <span>VIEW PROJECT ON DEVPOST</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Right: Dimensional Floating Opportunity Cards Simulation */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200/80 p-6 flex flex-col justify-center items-center overflow-hidden border border-black/5 group-hover:scale-[1.01] transition-transform">
            {/* Card 1: Internship */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-full max-w-sm p-4 rounded-xl bg-white border border-black/10 shadow-md mb-3 -rotate-1 group-hover:rotate-0 transition-transform"
            >
              <div className="flex items-center justify-between text-[11px] font-mono pb-2 border-b border-black/5">
                <span className="font-bold text-blue-600">INTERNSHIP // AI RESEARCH</span>
                <span className="text-emerald-600 font-bold">96% FIT SCORE</span>
              </div>
              <p className="text-xs font-semibold text-neutral-900 mt-2">Global Machine Learning Fellowship</p>
              <p className="text-[11px] text-neutral-500 mt-1">Autonomous evaluation, remote stipend, Python stack</p>
            </motion.div>

            {/* Card 2: Hackathon */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
              className="w-full max-w-sm p-4 rounded-xl bg-neutral-900 text-white border border-black/15 shadow-xl rotate-2 group-hover:rotate-0 transition-transform"
            >
              <div className="flex items-center justify-between text-[11px] font-mono pb-2 border-b border-white/10">
                <span className="font-bold text-amber-400">HACKATHON // CLIMATE TECH</span>
                <span className="text-sky-300 font-bold">$25,000 PRIZE POOL</span>
              </div>
              <p className="text-xs font-semibold text-white mt-2">National AI Innovation Sprint</p>
              <p className="text-[11px] text-neutral-400 mt-1">Satellite intelligence & environmental sensing</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ── PROJECT 03: NEOSCHOLAR AI (RESEARCH INTELLIGENCE GRAPH) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-white border border-black/10 p-8 sm:p-12 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.04)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-mono uppercase tracking-wider border border-emerald-200 font-bold">
                NEO4J MINI-HACK // 2026
              </span>
              <span className="text-xs font-mono text-neutral-500">PAPERS → KNOWLEDGE → GRAPH</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold font-grotesk tracking-tight text-neutral-950">
              NEOSCHOLAR AI — Research Intelligence Platform
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              {neoscholar.description}
            </p>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs font-mono text-emerald-800">
              ⚡ Highlight: "Built during an intense 2-hour Neo4j mini-hackathon with real-time Cypher relationship mapping."
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {neoscholar.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-neutral-400 uppercase">CASE STUDY AVAILABLE BELOW</span>
            </div>
          </div>

          {/* Right: Neo4j Knowledge Graph Visualizer Simulation */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-neutral-950 p-6 flex flex-col justify-between overflow-hidden border border-white/10 text-white font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-bold">NEO4J CYPHER GRAPH VISUALIZER</span>
              </div>
              <span className="text-neutral-500">2-HOUR MINI-HACK BUILD</span>
            </div>

            {/* Connecting Knowledge Nodes Mockup */}
            <div className="relative w-full h-44 flex items-center justify-center">
              <div className="absolute top-4 left-6 p-2 rounded-lg bg-white/10 border border-white/15 text-[10px]">
                [Doc: "Attention Is All You Need"]
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 rounded-xl bg-emerald-500 text-black font-bold text-xs shadow-lg">
                (Concept: Self-Attention)
              </div>
              <div className="absolute bottom-4 right-6 p-2 rounded-lg bg-white/10 border border-white/15 text-[10px]">
                [Paper: "FlashAttention v2"]
              </div>
              <div className="w-48 h-0.5 bg-emerald-400/40 rotate-12" />
            </div>

            <div className="flex justify-between text-[11px] text-neutral-400 pt-2 border-t border-white/10">
              <span>Nodes: 1,420</span>
              <span>Edges: 3,890</span>
              <span>Query Latency: 14ms</span>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECT 04: TRAVELSPHERE (DESTINATION CONFIDENCE SCORE) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-white border border-black/10 p-8 sm:p-12 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.04)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-mono uppercase tracking-wider border border-amber-200 font-bold">
                TRAVEL INTELLIGENCE // 2026
              </span>
              <span className="text-xs font-mono text-neutral-500">DECISION SUPPORT ENGINE</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold font-grotesk tracking-tight text-neutral-950">
              TRAVELSPHERE — Travel Decision Intelligence
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              {travelsphere.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800">Risk Factors</div>
              <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800">Weather Forecasts</div>
              <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800">Transport Viability</div>
              <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800">Health Advisories</div>
              <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800">Budget Telemetry</div>
              <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-800">Preferences</div>
            </div>
          </div>

          {/* Right: Large Destination Interface with Central Confidence Score */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-neutral-900 text-white p-6 flex flex-col justify-between overflow-hidden border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
              <span className="text-amber-400 font-bold">DESTINATION: REYKJAVIK, ICELAND</span>
              <span className="text-neutral-400">UPDATED REAL-TIME</span>
            </div>

            {/* Central Giant Confidence Score */}
            <div className="flex flex-col items-center justify-center my-4">
              <div className="relative w-32 h-32 rounded-full border-4 border-amber-400/40 flex flex-col items-center justify-center bg-black/40 shadow-xl">
                <span className="text-4xl font-bold font-grotesk text-amber-400">88%</span>
                <span className="text-[10px] font-mono text-neutral-300 uppercase">CONFIDENCE</span>
              </div>
              <span className="text-xs font-mono text-neutral-300 mt-3">High Weather Stability • Low Risk Index</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono border-t border-white/10 pt-3">
              <div>Weather: 12°C Calm</div>
              <div>Transport: 94% Reliable</div>
              <div>Budget Fit: Optimal</div>
            </div>
          </div>
        </motion.div>

        {/* ── PROJECT 05: CIVICFLOW (SPATIAL CITY OPERATIONS SYSTEM) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-white border border-black/10 p-8 sm:p-12 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.04)] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-mono uppercase tracking-wider border border-pink-200 font-bold">
                CIVIC TECH // 2026
              </span>
              <span className="text-xs font-mono text-neutral-500">MUNICIPAL RESOURCE ROUTING</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-bold font-grotesk tracking-tight text-neutral-950">
              CIVICFLOW — Spatial City Operations
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
              {civicflow.description}
            </p>

            <div className="space-y-2 text-xs font-mono text-neutral-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Geospatial incident clustering & urgent priority calculation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                <span>Automated dispatch response optimization across city wards</span>
              </div>
            </div>
          </div>

          {/* Right: Spatial City Operations Dashboard Mockup */}
          <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-neutral-950 text-white p-6 flex flex-col justify-between overflow-hidden border border-white/10 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-pink-400 font-bold">CITY WIDE INCIDENT RADAR</span>
              <span className="text-emerald-400 font-semibold">● 18 TEAMS ACTIVE</span>
            </div>

            <div className="space-y-2.5 my-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-xs">Ward 4: Main Pipeline Leak</div>
                  <div className="text-[10px] text-neutral-400">Reported 8m ago • Severity: High</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px]">
                  DISPATCHED
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-xs">Ward 11: Power Transformer Fault</div>
                  <div className="text-[10px] text-neutral-400">Reported 22m ago • Severity: Medium</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">
                  EN ROUTE
                </span>
              </div>
            </div>

            <div className="flex justify-between text-[11px] text-neutral-400 pt-2 border-t border-white/10">
              <span>Avg Resolution: 34m</span>
              <span>Priority Index: 92%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default SelectedWorkSection;
