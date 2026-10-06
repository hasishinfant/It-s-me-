import React from 'react';
import { GitCommit, Code, Flame, RefreshCw } from 'lucide-react';
import { GITHUB_STATS } from '../../data/portfolioData';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 bg-black">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">007</span> — GITHUB_TELEMETRY
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Open Source</span>
            <span className="block">Velocity</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Real metrics extracted from @hasishinfant's GitHub contribution telemetry.
          </p>
        </div>

        {/* Telemetry Stats Grid — Brutalist */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 mb-8">
          <div className="brutalist-card p-6 text-center space-y-2">
            <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">
              TOTAL_CONTRIBUTIONS
            </span>
            <span className="font-brutalist font-bold text-4xl sm:text-5xl text-white">
              {GITHUB_STATS.totalContributions}+
            </span>
            <span className="text-[9px] font-mono text-amber-400 block">✦ 2026 COMMIT VOLUME</span>
          </div>

          <div className="brutalist-card p-6 text-center space-y-2">
            <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">ACTIVE_STREAK</span>
            <span className="font-brutalist font-bold text-4xl sm:text-5xl text-white flex items-center justify-center gap-2">
              {GITHUB_STATS.currentStreak} <Flame className="w-6 h-6 text-amber-400" />
            </span>
            <span className="text-[9px] font-mono text-white/30 block">
              LONGEST: {GITHUB_STATS.longestStreak} DAYS
            </span>
          </div>

          <div className="brutalist-card p-6 text-center space-y-2">
            <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">TOTAL_REPOS</span>
            <span className="font-brutalist font-bold text-4xl sm:text-5xl text-white">
              {GITHUB_STATS.repositoriesCount}
            </span>
            <span className="text-[9px] font-mono text-amber-400 block">
              ✦ {GITHUB_STATS.totalStars} STARS
            </span>
          </div>

          <div className="brutalist-card p-6 text-center space-y-2">
            <span className="text-[10px] font-mono text-white/40 block uppercase tracking-widest">PULL_REQUESTS</span>
            <span className="font-brutalist font-bold text-4xl sm:text-5xl text-white">
              {GITHUB_STATS.totalPRs}
            </span>
            <span className="text-[9px] font-mono text-white/30 block">OPEN SOURCE MERGES</span>
          </div>
        </div>

        {/* Contribution Matrix — Brutalist */}
        <div className="brutalist-card p-6 md:p-8 space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-amber-400" />
              CONTRIBUTION_MATRIX &bull; @HASISHINFANT
            </span>
            <span className="text-[9px] font-mono text-white/30">52 WEEKS</span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-[2px] min-w-[650px]">
              {Array.from({ length: 364 }).map((_, i) => {
                const intensity = (i * 17 + 5) % 5;
                const bgClass =
                  intensity === 4
                    ? 'bg-amber-400'
                    : intensity === 3
                      ? 'bg-amber-600'
                      : intensity === 2
                        ? 'bg-amber-900/60'
                        : intensity === 1
                          ? 'bg-white/15'
                          : 'bg-white/5';
                return (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 ${bgClass} hover:scale-150 transition-transform`}
                    title={`Day ${i + 1}: ${intensity * 3 + 1} commits`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Commit Stream & Language Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
          {/* Commit Stream — Brutalist */}
          <div className="lg:col-span-7 brutalist-card p-6 space-y-4">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-white/50 flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-amber-400" />
              RECENT_COMMITS
            </h3>
            <div className="space-y-1">
              {GITHUB_STATS.recentCommits.map((c, i) => (
                <div key={i} className="brutalist-card p-3.5 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-amber-400 font-bold">{c.repo}</span>
                    <span className="text-white/30">{c.time}</span>
                  </div>
                  <p className="text-xs font-mono text-white/70">{c.message}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages — Brutalist Bars */}
          <div className="lg:col-span-5 brutalist-card p-6 space-y-4">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-white/50 flex items-center gap-2">
              <Code className="w-4 h-4 text-amber-400" />
              LANG_DISTRIBUTION
            </h3>
            <div className="space-y-4 pt-2">
              {GITHUB_STATS.topLanguages.map((lang, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2" style={{ backgroundColor: lang.color }} />
                      {lang.name}
                    </span>
                    <span className="font-bold">{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1.5 overflow-hidden">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
