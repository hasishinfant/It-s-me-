import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  FileText,
  Download,
  Sparkles,
  Award,
  CheckCircle2,
  Clock,
  Building2,
  GraduationCap,
  MapPin,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { usePortfolio } from '../../context/PortfolioContext';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const VideoResumeSection: React.FC = () => {
  const { setCursorType, playHover, playClick, setIsVideoModalOpen } = usePortfolio();
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const handleDownloadResume = () => {
    playClick();
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('download', 'Hasish_Infant_Resume.pdf');
    alert('Hasish Infant Resume PDF download initiated.');
  };

  return (
    <section id="video-resume" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 bg-black raw-grid">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">010</span> — RECRUITER_HUB
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Why Hire</span>
            <span className="block">Hasish Infant</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Everything engineering managers and recruiters need: video walkthrough, PDF resume, quick facts, and verified telemetry.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-start">
          
          {/* LEFT: Video + PDF (7 cols) */}
          <div className="lg:col-span-7 space-y-1">
            {/* Video Resume */}
            <div className="brutalist-card p-6 border-amber-400/20 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-widest">
                  <Sparkles size={14} />
                  <span>VIDEO_RESUME</span>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-mono text-white/40">
                  <Clock size={12} className="text-amber-400" />
                  <span>2:30 MIN &bull; 4K UHD</span>
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden brutalist-border border-white/10 flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-black group">
                {!isPlayingVideo ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                      <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest">
                        FEATURED_INTRODUCTION
                      </span>
                      <h3 className="font-brutalist font-bold text-2xl md:text-3xl text-white uppercase">
                        Hasish Infant: Engineering Products & Multi-Agent AI
                      </h3>
                      <p className="text-[9px] font-mono text-white/40 mt-1">
                        SUBTITLES: EN &bull; AUDIO: LOSSLESS 24-BIT
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        playClick();
                        setIsPlayingVideo(true);
                        setIsVideoModalOpen(true);
                      }}
                      onMouseEnter={() => {
                        setCursorType('hover');
                        playHover();
                      }}
                      onMouseLeave={() => setCursorType('default')}
                      className="absolute z-30 w-16 h-16 brutalist-border-amber flex items-center justify-center text-white group-hover:scale-110 transition-all cursor-pointer"
                    >
                      <Play size={24} className="ml-1 text-amber-400 fill-amber-400" />
                    </button>
                  </>
                ) : (
                  <iframe
                    className="w-full h-full z-30"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Hasish Infant Video Resume"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              <div className="mt-4 p-4 brutalist-card border-white/5 text-xs font-mono text-white/60 leading-relaxed">
                <span className="text-amber-400 font-bold mr-1">EXEC_SUMMARY:</span>
                "I specialize in bridging advanced multi-agent AI research with frame-perfect, award-worthy frontends."
              </div>
            </div>

            {/* PDF Resume Card */}
            <div className="brutalist-card p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 brutalist-border flex items-center justify-center text-amber-400 shrink-0">
                  <FileText size={28} />
                </div>
                <div>
                  <h4 className="font-brutalist font-bold text-xl text-white uppercase">Official Resume PDF</h4>
                  <p className="text-[9px] font-mono text-white/40">
                    UPDATED Q3 2026 &bull; AI & FULL-STACK CREDENTIALS
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 w-full md:w-auto">
                <button
                  onClick={() => setShowPdfModal(true)}
                  className="brutalist-btn text-xs flex-1 md:flex-none text-center py-2.5 px-5 cursor-pointer"
                >
                  PREVIEW_PDF
                </button>
                <button
                  onClick={handleDownloadResume}
                  className="brutalist-btn-amber text-xs flex items-center justify-center gap-2 flex-1 md:flex-none py-2.5 px-5 cursor-pointer"
                >
                  <Download size={14} />
                  <span>DOWNLOAD</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Facts + Socials + Certs (5 cols) */}
          <div className="lg:col-span-5 space-y-1">
            {/* Quick Facts */}
            <div className="brutalist-card p-6 space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                <Sparkles size={14} />
                QUICK_FACTS
              </h3>

              <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                <div className="brutalist-card p-3">
                  <span className="text-white/30 block text-[9px] uppercase tracking-wider">LOCATION</span>
                  <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-amber-400" />
                    Bangalore, India
                  </span>
                </div>
                <div className="brutalist-card p-3">
                  <span className="text-white/30 block text-[9px] uppercase tracking-wider">STATUS</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1 mt-0.5">
                    <span className="w-2 h-2 bg-emerald-400 animate-pulse" />
                    Open to Offers
                  </span>
                </div>
                <div className="brutalist-card p-3">
                  <span className="text-white/30 block text-[9px] uppercase tracking-wider">EDUCATION</span>
                  <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                    <GraduationCap size={12} className="text-cyan-400" />
                    B.Tech CS (9.2)
                  </span>
                </div>
                <div className="brutalist-card p-3">
                  <span className="text-white/30 block text-[9px] uppercase tracking-wider">FOCUS</span>
                  <span className="text-white font-bold flex items-center gap-1 mt-0.5">
                    <Building2 size={12} className="text-purple-400" />
                    AI + Full Stack
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t-2 border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>1,420+ GitHub Commits & 48-Day Streak</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>1st Place — National AI Innovation Challenge</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                  <span>12,000+ Users on OpportunX AI</span>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="brutalist-card p-6 space-y-4">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-bold">
                VERIFIED_PROFILES
              </h3>
              <div className="grid grid-cols-2 gap-1">
                <a
                  href={PERSONAL_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="brutalist-card p-4 flex items-center gap-3 group cursor-pointer"
                >
                  <GithubIcon className="w-5 h-5 text-white group-hover:text-amber-400 transition-colors" />
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">GitHub</span>
                    <span className="text-[9px] font-mono text-white/30">@hasishinfant</span>
                  </div>
                </a>
                <a
                  href={PERSONAL_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="brutalist-card p-4 flex items-center gap-3 group cursor-pointer"
                >
                  <LinkedinIcon className="w-5 h-5 text-cyan-400 group-hover:text-amber-400 transition-colors" />
                  <div>
                    <span className="text-xs font-mono font-bold text-white block">LinkedIn</span>
                    <span className="text-[9px] font-mono text-white/30">/in/hasishinfant</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Certifications */}
            <div className="brutalist-card p-6 space-y-3">
              <h3 className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold flex items-center gap-2">
                <Award size={14} />
                CERTIFICATIONS
              </h3>
              <div className="space-y-1">
                {['AWS Certified Cloud Practitioner', 'DeepLearning.AI Multi-Agent Systems', 'Meta Professional React Architect'].map((cert) => (
                  <div key={cert} className="p-3 brutalist-card flex items-center justify-between text-xs font-mono">
                    <span className="text-white/80">{cert}</span>
                    <span className="text-[9px] text-amber-400 brutalist-border-amber px-2 py-0.5">VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal — Brutalist */}
      <AnimatePresence>
        {showPdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="brutalist-card border-amber-400/30 p-6 md:p-8 max-w-4xl w-full h-[85vh] flex flex-col justify-between relative raw-grid-dense"
            >
              <button
                onClick={() => setShowPdfModal(false)}
                className="absolute top-6 right-6 p-2 brutalist-border hover:border-amber-400 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="flex items-center justify-between border-b-2 border-white/10 pb-4">
                <div>
                  <h3 className="font-brutalist font-bold text-3xl text-white uppercase">Executive Resume</h3>
                  <p className="text-[10px] font-mono text-white/40">FULL-STACK ARCHITECT & AI SPECIALIST</p>
                </div>
                <button
                  onClick={handleDownloadResume}
                  className="brutalist-btn-amber text-xs flex items-center gap-2 py-2 px-4 mr-12 cursor-pointer"
                >
                  <Download size={14} />
                  <span>DOWNLOAD</span>
                </button>
              </div>

              <div className="flex-1 my-4 brutalist-card p-6 overflow-y-auto font-mono space-y-6 text-xs text-white/70">
                <div className="border-b-2 border-white/10 pb-4 flex justify-between items-start">
                  <div>
                    <h1 className="font-brutalist font-bold text-4xl text-white uppercase">HASISH INFANT</h1>
                    <p className="text-amber-400 font-bold mt-1">AI Engineer & Full Stack Architect | Bangalore, India</p>
                    <p className="text-white/30 mt-1">hasishinfant@gmail.com | github.com/hasishinfant</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-amber-400 uppercase font-bold tracking-wider">SUMMARY</h4>
                  <p className="leading-relaxed">
                    Innovative AI Engineer and Full Stack Architect with extensive experience building autonomous multi-agent systems, high-scale web platforms, and GPU-accelerated WebGL user interfaces. Creator of OpportunX AI (12,000+ users) and 1st Place National AI Hackathon Champion.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-amber-400 uppercase font-bold tracking-wider">SKILLS & CORE COMPETENCIES</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="text-white font-bold">Languages:</span> TypeScript, JavaScript, Python, C++, SQL, GLSL</div>
                    <div><span className="text-white font-bold">Frontend:</span> React 19, Next.js, Three.js, GSAP, Framer Motion</div>
                    <div><span className="text-white font-bold">Backend & AI:</span> Node.js, FastAPI, LangChain, PyTorch</div>
                    <div><span className="text-white font-bold">Cloud:</span> AWS, Vercel, Docker, PostgreSQL, Supabase</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-amber-400 uppercase font-bold tracking-wider">FEATURED PROJECTS</h4>
                  <ul className="list-disc pl-4 space-y-2">
                    <li><strong className="text-white">OPUS:</strong> Parallel autonomous agent workflow engine, 5,000+ executions, 99.4% accuracy.</li>
                    <li><strong className="text-white">OpportunX AI:</strong> Opportunity discovery platform, 12,000+ users, PGVector search.</li>
                    <li><strong className="text-white">OceanRaksha AI:</strong> National Champion, satellite marine plastic detection, 93.2% precision.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t-2 border-white/10 flex justify-between items-center text-[9px] font-mono text-white/30 uppercase tracking-wider">
                <span>VERIFIED_DOCUMENT &bull; SHA-256 COMPLIANT</span>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="text-amber-400 hover:underline cursor-pointer"
                >
                  CLOSE_PREVIEW
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
