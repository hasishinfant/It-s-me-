import React from 'react';
import { TECHNICAL_STACK } from '../../data/portfolioData';

const STACK_CATEGORIES = [
  { key: 'languages', title: 'LANGUAGES', items: TECHNICAL_STACK.languages },
  { key: 'frontend', title: 'FRONTEND', items: TECHNICAL_STACK.frontend },
  { key: 'backend', title: 'BACKEND', items: TECHNICAL_STACK.backend },
  { key: 'cloud', title: 'CLOUD', items: TECHNICAL_STACK.cloud },
  { key: 'ai', title: 'AI & INTELLIGENCE', items: TECHNICAL_STACK.ai },
  { key: 'tools', title: 'TOOLS & WORKFLOW', items: TECHNICAL_STACK.tools },
];

export const StackSection: React.FC = () => {
  return (
    <section id="stack" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-2 border border-black/5">
              <span>SECTION 03 // TECHNICAL INDEX</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase">
              TECHNICAL INDEX
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase">
            Minimal stack index without unnecessary logo clutter
          </p>
        </div>

        {/* ── 6 MINIMAL RESTRAINED COLUMNS ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 pt-4 border-t border-black/10">
          {STACK_CATEGORIES.map((cat) => (
            <div key={cat.key} className="space-y-4">
              <div className="text-[11px] font-mono font-bold tracking-wider text-neutral-950 uppercase pb-2 border-b border-black/10">
                {cat.title}
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm text-neutral-600 hover:text-neutral-950 font-normal transition-colors cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StackSection;
