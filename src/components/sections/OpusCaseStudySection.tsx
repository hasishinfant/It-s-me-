import React from 'react';
import { ArchitectureGraph3D } from '../canvas/ArchitectureGraph3D';

export const OpusCaseStudySection: React.FC = () => {
  return (
    <section id="opus-study" className="relative py-32 sm:py-44 px-4 sm:px-8 bg-[#080808] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
        {/* ── CASE STUDY OPENING (Dramatically Larger) ── */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider border border-purple-500/30 font-bold">
              CASE STUDY 01 // DEEP DIVE
            </span>
            <span className="text-xs font-mono text-neutral-400">2026 ARCHITECTURE</span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-grotesk tracking-tight text-white uppercase leading-[0.92]">
            OPUS
          </h2>
          <p className="text-2xl sm:text-4xl lg:text-5xl font-editorial italic text-neutral-300">
            "My attempt at building Jarvis."
          </p>
        </div>

        {/* ── THE PROBLEM & THE IDEA (TWO-COLUMN EDITORIAL) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-8 border-t border-white/10 items-start">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              [01 / THE PROBLEM]
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-grotesk text-white">
              "I wanted to explore what a personal AI operating system could feel like."
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              Current computing interfaces are trapped in a 50-year-old desktop metaphor of nested folders,
              rigid windows, and manual keyboard shortcuts. AI chatbots sit in isolated browser tabs, unable to
              touch the native operating system, launch native applications, or understand user context.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-purple-400">
              [02 / THE IDEA]
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-grotesk text-white">
              An AI layer between the user and their computer.
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light">
              Instead of forcing the human to speak the operating system's language, OPUS translates natural
              voice intent directly into native system automation. An ambient 3D orbital interface provides continuous
              spatial feedback without cluttering screen real estate.
            </p>
          </div>
        </div>

        {/* ── THE SYSTEM PIPELINE FLOW (Voice → Intent → Agent → Tool → macOS → Feedback) ── */}
        <div className="space-y-8 pt-8 border-t border-white/10">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              [03 / THE SYSTEM EXECUTION PIPELINE]
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-grotesk text-white">
              From Spoken Word to Native System Execution
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between h-32">
              <span className="text-[10px] text-purple-400 font-bold">STAGE 01</span>
              <span className="text-sm font-bold text-white font-grotesk">VOICE</span>
              <span className="text-[10px] text-neutral-400">Streaming VAD Audio</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between h-32">
              <span className="text-[10px] text-purple-400 font-bold">STAGE 02</span>
              <span className="text-sm font-bold text-white font-grotesk">INTENT</span>
              <span className="text-[10px] text-neutral-400">Gemini Classification</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between h-32">
              <span className="text-[10px] text-purple-400 font-bold">STAGE 03</span>
              <span className="text-sm font-bold text-white font-grotesk">AGENT</span>
              <span className="text-[10px] text-neutral-400">DAG State Machine</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between h-32">
              <span className="text-[10px] text-purple-400 font-bold">STAGE 04</span>
              <span className="text-sm font-bold text-white font-grotesk">TOOL</span>
              <span className="text-[10px] text-neutral-400">Sandboxed Execution</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between h-32">
              <span className="text-[10px] text-purple-400 font-bold">STAGE 05</span>
              <span className="text-sm font-bold text-white font-grotesk">MACOS</span>
              <span className="text-[10px] text-neutral-400">Native OS Tool Bridge</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between h-32">
              <span className="text-[10px] text-purple-400 font-bold">STAGE 06</span>
              <span className="text-sm font-bold text-white font-grotesk">FEEDBACK</span>
              <span className="text-[10px] text-neutral-400">3D Orbital Telemetry</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 15: TECHNICAL ARCHITECTURE VISUALIZATION (Interactive 3D Graph) ── */}
        <div className="space-y-6 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                [04 / ARCHITECTURE TOPOLOGY]
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold font-grotesk text-white">
                Interactive Spatial Topology Diagram
              </h3>
            </div>
            <span className="text-xs font-mono text-purple-400">
              Interactive 3D Canvas • Hover nodes to inspect telemetry
            </span>
          </div>

          {/* Interactive 3D Architecture Canvas */}
          <ArchitectureGraph3D />
        </div>

        {/* ── THE INTERFACE & THE STACK ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-8 border-t border-white/10">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              [05 / THE INTERFACE]
            </div>
            <h4 className="text-2xl font-bold font-grotesk text-white">3D Orbital UI Paradigm</h4>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Instead of windows that overlap, OPUS renders a dynamic solar system of processes.
              Active agents orbit around a central intelligence sun, expanding on demand and contracting
              when idle to prevent screen noise.
            </p>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              [06 / THE STACK]
            </div>
            <h4 className="text-2xl font-bold font-grotesk text-white">Next.js • Three.js • TypeScript • Gemini</h4>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Frontend rendered with React Three Fiber and hardware-accelerated shaders.
              Voice telemetry processed via WebAudio buffers into Gemini 1.5 streaming endpoints,
              communicating via local WebSockets with native macOS Swift and AppleScript handlers.
            </p>
          </div>
        </div>

        {/* ── THE NEXT VERSION (FUTURE SKETCHES & BLUEPRINTS) ── */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono">
            <span className="text-purple-400 font-bold">[07 / THE NEXT VERSION — CONCEPT BLUEPRINT]</span>
            <span className="text-neutral-500">V2.0 RESEARCH SPECIFICATION</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-neutral-300 font-bold">1. Local Small Language Models</span>
              <p className="text-neutral-400 text-[11px] font-light leading-relaxed">
                Transitioning basic intent routing to quantized 3B on-device models for 0ms network latency.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-neutral-300 font-bold">2. Proactive Ambient Triggers</span>
              <p className="text-neutral-400 text-[11px] font-light leading-relaxed">
                Autonomous background agents that prepare context before the user even speaks.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <span className="text-neutral-300 font-bold">3. Multi-Display Spatial Anchoring</span>
              <p className="text-neutral-400 text-[11px] font-light leading-relaxed">
                Extending the 3D orbital plane across multi-monitor setups and spatial headsets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OpusCaseStudySection;
