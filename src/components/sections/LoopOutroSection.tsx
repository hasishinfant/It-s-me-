import React from 'react';
import { OutroIdentity3D } from '../canvas/OutroIdentity3D';
import { ArrowUp, Sparkles, Layers, Cpu } from 'lucide-react';

interface LoopOutroSectionProps {
  onLoopToTop?: () => void;
}

export const LoopOutroSection: React.FC<LoopOutroSectionProps> = ({ onLoopToTop }) => {
  const scrollToTop = () => {
    if (onLoopToTop) {
      onLoopToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 px-4 sm:px-8 bg-[#f6f5f1] border-t border-black/5 flex flex-col justify-between items-center text-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* ── FRAME 20–21 (44s–46s): COMPANIES / COLLABORATIONS PANEL ── */}
        <div className="mb-24 pb-20 border-b border-black/10">
          <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 mb-8">
            COMPANIES & ECOSYSTEMS I'VE WORKED WITH
          </div>

          {/* Visual Floating Project Showcase Panel */}
          <div className="relative rounded-[2.5rem] bg-white border border-black/10 p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-left">
              <div className="space-y-3">
                <span className="text-xs font-mono text-purple-600 font-semibold uppercase">
                  ENTERPRISE & OPEN SOURCE
                </span>
                <h3 className="text-2xl font-grotesk font-bold text-neutral-900">
                  Engineering Systems That Last
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  From high-concurrency Node/TypeScript APIs to machine learning research pipelines,
                  every piece of code is structured for maintainability and speed.
                </p>
              </div>

              {/* Center Dashboard Mockup Simulation */}
              <div className="rounded-2xl border border-black/10 bg-neutral-50 p-5 shadow-inner space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-700">
                  <span>TELEMETRY DASHBOARD</span>
                  <span className="text-emerald-600 font-semibold">99.98% UPTIME</span>
                </div>
                <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-[94%]" />
                </div>
                <div className="flex justify-between text-[11px] font-mono text-neutral-500 pt-1">
                  <span>Latency: 18ms</span>
                  <span>Requests: 1.2M/mo</span>
                </div>
              </div>

              {/* Right Stats Column */}
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-neutral-100/80 border border-black/5">
                  <div className="text-xl font-bold font-grotesk text-neutral-900">0.02s</div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Average API Response</div>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-100/80 border border-black/5">
                  <div className="text-xl font-bold font-grotesk text-neutral-900">100%</div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase">Type-Safe Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── FRAME 22–23 (48s–50s): HERO VARIATION & CONTINUOUS VISUAL LOOP ── */}
        <div className="relative flex flex-col items-center justify-center space-y-6 pt-4 pb-12">
          {/* Floating 3D Identity Object returning */}
          <div className="relative">
            <OutroIdentity3D />

            {/* Orbiting UI Pills in Outro */}
            <div className="absolute -top-2 -left-6 p-2.5 rounded-full bg-white border border-black/10 shadow-sm">
              <Cpu className="w-4 h-4 text-purple-600" />
            </div>
            <div className="absolute -top-2 -right-6 p-2.5 rounded-full bg-white border border-black/10 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div className="absolute -bottom-2 left-0 p-2.5 rounded-full bg-white border border-black/10 shadow-sm">
              <Layers className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Huge Loop Headline */}
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-950 leading-[0.95]">
              <span className="font-grotesk font-semibold block">Our paths</span>
              <span className="font-editorial italic font-normal text-neutral-900 block mt-1">
                just crossed.
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-mono mt-3">
              Full circle. Ready to build the next remarkable experience together?
            </p>
          </div>

          {/* Interactive Replay / Loop to Top Button */}
          <div className="pt-6">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-950 text-white font-grotesk font-semibold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
              <span>LOOP BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Minimal Editorial Footer */}
        <div className="pt-16 mt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            © 2026 HASISH INFANT • AI ENGINEER & ARCHITECT
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/hasishinfant"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/hasishinfant"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href="https://twitter.com/hasishinfant"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black transition-colors"
            >
              TWITTER
            </a>
            <a
              href="mailto:hasishinfant@gmail.com"
              className="hover:text-black transition-colors"
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LoopOutroSection;
