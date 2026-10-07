import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { ArrowUpRight, Cpu, Layers, Sparkles, Workflow, Terminal } from 'lucide-react';

interface BuildCapability {
  id: string;
  number: string;
  label: string;
  italicWord?: string;
  tagline: string;
  icon: React.ReactNode;
  previewType: 'graph' | 'browser' | '3d' | 'dag' | 'lab';
}

const CAPABILITIES: BuildCapability[] = [
  {
    id: 'ai-systems',
    number: '01',
    label: 'AI SYSTEMS',
    tagline: 'Multi-agent swarms, deterministic DAG routers, voice intent parsing & Gemini orchestration',
    icon: <Cpu className="w-5 h-5 text-purple-600" />,
    previewType: 'graph'
  },
  {
    id: 'full-stack',
    number: '02',
    label: 'FULL-STACK PRODUCTS',
    tagline: 'Resilient web apps with Next.js, React, Python, PostgreSQL & AWS serverless infrastructure',
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    previewType: 'browser'
  },
  {
    id: '3d-experiences',
    number: '03',
    label: '3D EXPERIENCES',
    tagline: 'Tactile spatial web interfaces, GLSL shader physics & 60 FPS WebGL choreography',
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    previewType: '3d'
  },
  {
    id: 'automations',
    number: '04',
    label: 'AUTOMATIONS',
    tagline: 'Distributed headless web scrapers, proxy rotators & asynchronous Redis queue workers',
    icon: <Workflow className="w-5 h-5 text-emerald-600" />,
    previewType: 'dag'
  },
  {
    id: 'experiments',
    number: '05',
    label: 'EXPERIMENTS',
    tagline: 'Rapid prototypes, hackathon builds, weird interface hypotheses & learning in public',
    icon: <Terminal className="w-5 h-5 text-rose-500" />,
    previewType: 'lab'
  }
];

const MiniRotatingSculpture: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2.8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[4, 5, 4]} intensity={2} color="#ffffff" />
      <directionalLight position={[-4, -3, -2]} intensity={0.8} color="#c084fc" />
      <Float speed={3} rotationIntensity={0.8} floatIntensity={0.5}>
        <mesh>
          <octahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#18181b" metalness={0.9} roughness={0.15} wireframe />
        </mesh>
      </Float>
    </Canvas>
  );
};

export const WhatIBuildSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('ai-systems');

  const activeCapability = CAPABILITIES.find((c) => c.id === activeId) || CAPABILITIES[0];

  return (
    <section id="what-i-build" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3 border border-black/5">
              <span>SECTION 02 // CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase">
              WHAT I BUILD
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-neutral-600 font-mono">
            Hover each discipline to inspect the operational model and visual artifacts.
          </p>
        </div>

        {/* ── SPLIT LAYOUT: GIANT TYPOGRAPHY ON LEFT, DYNAMIC PREVIEW ON RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Giant Typography List */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              [DISCIPLINE MATRIX]
            </div>

            {CAPABILITIES.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`group relative py-4 sm:py-6 px-4 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-white border-black/10 shadow-sm translate-x-2'
                      : 'bg-transparent border-transparent hover:border-black/5'
                  }`}
                >
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span className="text-xs sm:text-sm font-mono text-neutral-400 group-hover:text-black">
                      [{item.number}]
                    </span>
                    <h3
                      className={`text-2xl sm:text-4xl md:text-5xl font-bold font-grotesk tracking-tight transition-colors ${
                        isActive ? 'text-neutral-950' : 'text-neutral-500 group-hover:text-neutral-900'
                      }`}
                    >
                      {item.label}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl transition-all ${
                        isActive ? 'bg-neutral-100 text-black scale-110' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {item.icon}
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform ${
                        isActive ? 'translate-x-0.5 -translate-y-0.5 text-neutral-950' : 'opacity-0 group-hover:opacity-100 text-neutral-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Interactive Preview Artifact */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl bg-white border border-black/10 p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col justify-between min-h-[360px] sm:min-h-[420px]"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-black/5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-neutral-100">{activeCapability.icon}</div>
                    <span className="text-xs font-mono uppercase font-bold text-neutral-900">
                      {activeCapability.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400">
                    TYPE: {activeCapability.previewType.toUpperCase()}
                  </span>
                </div>

                {/* Central Visual Artifact Container */}
                <div className="my-6 flex-grow flex items-center justify-center">
                  {activeCapability.previewType === 'graph' && (
                    <div className="w-full h-44 rounded-2xl bg-neutral-950 p-4 font-mono text-xs text-neutral-300 flex flex-col justify-between shadow-inner">
                      <div className="flex items-center justify-between text-[10px] text-purple-400 pb-2 border-b border-white/10">
                        <span>● NEURAL GRAPH BUS</span>
                        <span>DAG: ACTIVE</span>
                      </div>
                      <div className="space-y-1.5 text-[11px] text-neutral-400">
                        <p className="text-purple-300">&gt; User query ingested: "Synthesize paper graph"</p>
                        <p>&gt; Worker_01: Parsed 14 entities into Neo4j</p>
                        <p className="text-emerald-400">&gt; Subagent state: Verified acyclic DAG</p>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full w-4/5 animate-pulse" />
                      </div>
                    </div>
                  )}

                  {activeCapability.previewType === 'browser' && (
                    <div className="w-full h-44 rounded-2xl border border-black/10 bg-neutral-50 p-4 flex flex-col justify-between shadow-sm">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-black/10">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] font-mono text-neutral-400 ml-2">https://app.opportunx.dev</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-2.5 rounded-xl bg-white border border-black/5 shadow-xs">
                          <span className="text-[10px] font-mono text-neutral-400">SERVERLESS</span>
                          <p className="font-bold text-neutral-900 mt-1">AWS Lambda</p>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-black/5 shadow-xs">
                          <span className="text-[10px] font-mono text-neutral-400">CACHE LAYER</span>
                          <p className="font-bold text-neutral-900 mt-1">CloudFront Edge</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500">12,000+ daily requests indexed</span>
                    </div>
                  )}

                  {activeCapability.previewType === '3d' && (
                    <div className="w-full h-44 rounded-2xl bg-neutral-950 overflow-hidden relative">
                      <MiniRotatingSculpture />
                      <div className="absolute bottom-2 left-3 text-[10px] font-mono text-neutral-400">
                        WebGL 2.0 • 60 FPS • Custom GLSL
                      </div>
                    </div>
                  )}

                  {activeCapability.previewType === 'dag' && (
                    <div className="w-full h-44 rounded-2xl bg-neutral-900 text-white p-4 font-mono text-xs flex flex-col justify-between">
                      <div className="text-[10px] text-emerald-400 flex justify-between">
                        <span>WORKER CLUSTER: ONLINE</span>
                        <span>LATENCY: 18ms</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                        <div className="p-2 rounded bg-white/5 border border-white/10">Scraper [IP 1]</div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">Queue [Redis]</div>
                        <div className="p-2 rounded bg-white/5 border border-white/10">Parser [FastAPI]</div>
                      </div>
                      <div className="text-[11px] text-neutral-400">Distributed rate-limit guard active</div>
                    </div>
                  )}

                  {activeCapability.previewType === 'lab' && (
                    <div className="w-full h-44 rounded-2xl bg-white border border-black/10 p-4 font-mono text-xs flex flex-col justify-between">
                      <div className="text-[10px] text-rose-500 font-bold">CHAOTIC PROTOTYPE BENCH</div>
                      <p className="text-neutral-700 text-xs leading-relaxed">
                        Testing multimodal zero-shot token classifiers and spatial sound coordinate mappers.
                      </p>
                      <div className="text-[10px] text-neutral-400">BUILD: 026 // BENGALURU</div>
                    </div>
                  )}
                </div>

                {/* Tagline Footer */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light pt-3 border-t border-black/5">
                  {activeCapability.tagline}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatIBuildSection;
