import React from 'react';
import { Globe2, ArrowUpRight } from 'lucide-react';

export const CaseStudySpotlightSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#09090b] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase tracking-widest text-emerald-400 mb-3 border border-white/10">
              <Globe2 className="w-3.5 h-3.5" />
              <span>09 • SPOTLIGHT ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-white">
              <span className="font-grotesk font-semibold">OceanRaksha</span>{' '}
              <span className="font-editorial italic text-neutral-300">AI.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-400 font-mono">
            National Hackathon Winner • Satellite Marine Plastic Detection
          </p>
        </div>

        {/* ── LARGE DARK VISUAL PANEL & PROBLEM → BUILD → RESULT ── */}
        <div className="rounded-[2.5rem] bg-neutral-900/60 border border-white/10 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle Radar Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          {/* Top Live Satellite Telemetry Mockup */}
          <div className="rounded-2xl border border-white/15 bg-black/70 p-6 backdrop-blur-md mb-12">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-emerald-400 font-semibold">ESA SENTINEL-2 ORBITAL SCAN</span>
                <span className="text-neutral-500">• 10m Ground Resolution</span>
              </div>
              <div className="text-neutral-400">COORDINATES: 12.9716° N, 77.5946° E</div>
            </div>

            <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold font-grotesk text-emerald-400">93.2%</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase mt-1">Detection Precision</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold font-grotesk text-white">500 km²</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase mt-1">Coastline Monitored</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl sm:text-3xl font-bold font-grotesk text-sky-400">&lt; 1.2s</div>
                <div className="text-[11px] font-mono text-neutral-400 uppercase mt-1">Inference Latency</div>
              </div>
            </div>
          </div>

          {/* 3-Step Concise Story: Problem → Build → Result */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Step 1: Problem */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-widest font-semibold">
                [01 / THE PROBLEM]
              </div>
              <h4 className="text-xl font-grotesk font-semibold text-white">
                Invisible Debris & Cloud Occlusion
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Over 14M tons of plastic choke coastlines annually. Traditional optical satellites
                failed to detect submerged debris masked by heavy maritime cloud coverage.
              </p>
            </div>

            {/* Step 2: Build */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
                [02 / THE BUILD]
              </div>
              <h4 className="text-xl font-grotesk font-semibold text-white">
                Multi-Spectral Band Segmentation
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Engineered a hybrid YOLOv8 + U-Net model combining NDWI and near-infrared (NIR)
                spectral ratios to penetrate atmospheric haze and broadcast GeoJSON layers to Mapbox GL.
              </p>
            </div>

            {/* Step 3: Result */}
            <div className="space-y-3">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                [03 / THE RESULT]
              </div>
              <h4 className="text-xl font-grotesk font-semibold text-white">
                National Hackathon Champion
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Awarded 1st Place at National AI Innovation Hackathon. Deployed prototype monitoring
                hundreds of square kilometers with instant real-time telemetry.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">
              Stack: PyTorch • OpenCV • Sentinel-2 • Mapbox GL • FastAPI
            </span>
            <a
              href="https://github.com/hasishinfant/ocean-raksha-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Explore GitHub Repository</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CaseStudySpotlightSection;
