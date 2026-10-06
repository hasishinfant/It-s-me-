import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Utensils,
  Sparkles,
  Briefcase,
  Layers,
  Bot,
  Zap,
  Rocket,
  Globe,
  X,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  description: string;
  idealFor: string[];
  deliverables: string[];
  techStack: string[];
  timeline: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'restaurant-motion',
    title: 'Restaurant & Hospitality Websites',
    category: 'Local Business & Luxury',
    tagline: 'Cinematic digital menus & interactive booking that double customer reservations.',
    icon: Utensils,
    description:
      'We transform generic PDF menus into immersive, award-winning web experiences for high-end restaurants, cafes, and luxury hotels. Featuring ambient video backgrounds, smooth webgl transitions, table reservation integrations, and mobile-first speed.',
    idealFor: ['Fine Dining Restaurants', 'Boutique Cafes', 'Luxury Hotels', 'Cocktail Lounges'],
    deliverables: ['Custom 3D/Motion Web Design', 'Interactive Digital Menu', 'OpenTable / Resy Integration', 'Mobile Optimization & SEO'],
    techStack: ['React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    timeline: '2 - 3 Weeks',
  },
  {
    id: 'luxury-landing',
    title: 'Luxury Landing Pages',
    category: 'High-Conversion Web',
    tagline: 'Apple-grade product reveals and interactive web pages built to win customers.',
    icon: Sparkles,
    description:
      'Engineered for premium brands and hardware launches. We combine high-impact typography, liquid glass morphism, smooth scroll animation, and 3D product previews to leave visitors spellbound.',
    idealFor: ['Luxury Brands', 'Hardware Startups', 'Design Agencies', 'Product Launches'],
    deliverables: ['Product Storytelling Wireframe', 'Interactive 3D Preview', 'Sub-Second Load Times', 'Conversion Rate Analytics'],
    techStack: ['Next.js', 'GSAP', 'React Three Fiber', 'Lenis'],
    timeline: '1 - 2 Weeks',
  },
  {
    id: 'business-websites',
    title: 'Corporate & Business Websites',
    category: 'Enterprise & Agencies',
    tagline: 'Scalable digital identity websites that position your business as an industry leader.',
    icon: Briefcase,
    description:
      'A complete digital overhaul for growing enterprises. Designed to impress partners, clients, and investors with clean editorial layouts, seamless CMS management, and secure architecture.',
    idealFor: ['B2B Companies', 'Consulting Firms', 'Creative Agencies', 'Law & Finance'],
    deliverables: ['Full Multi-Page Architecture', 'Headless CMS Integration', 'SEO & Schema Markup', 'Global CDN Deployment'],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Sanity / Supabase'],
    timeline: '3 - 4 Weeks',
  },
  {
    id: 'portfolio-websites',
    title: 'Executive & Artist Portfolios',
    category: 'Personal Branding',
    tagline: 'Unforgettable digital identities for founders, creators, and senior executives.',
    icon: Layers,
    description:
      'Stand out from 99% of candidates and founders with a handcrafted digital portfolio. Designed like a feature film with custom cursor interactions, case study modals, and command center recruiter hubs.',
    idealFor: ['Founders & CEOs', 'Senior Developers', 'Designers & Directors', 'Venture Capitalists'],
    deliverables: ['Custom Portfolio Architecture', 'PDF & Video Resume Integration', 'Recruiter Command Center', 'Domain & Email Setup'],
    techStack: ['React', 'Framer Motion', 'WebGL Canvas', 'Vite'],
    timeline: '1 - 2 Weeks',
  },
  {
    id: 'ai-products',
    title: 'AI Products & LLM Applications',
    category: 'Artificial Intelligence',
    tagline: 'Production-ready RAG architectures, custom agents, and generative web tools.',
    icon: Bot,
    description:
      'Turn AI ideas into reliable products. We build multi-agent orchestration systems, semantic vector search, custom chat interfaces, and automated pipeline backends with OpenAI, Anthropic, and LangChain.',
    idealFor: ['AI Startups', 'SaaS Founders', 'Enterprise Innovation Teams', 'Fintech / Edtech'],
    deliverables: ['Multi-Agent Architecture', 'Vector DB Indexing (Pinecone/Qdrant)', 'LLM Prompt Engineering', 'Streamed API Responses'],
    techStack: ['Python', 'LangChain', 'FastAPI', 'Node.js', 'React'],
    timeline: '3 - 6 Weeks',
  },
  {
    id: 'automation',
    title: 'Workflow Automation & Micro-SaaS',
    category: 'Operations & Scaling',
    tagline: 'Eliminate 80% of repetitive operational tasks with custom autonomous pipelines.',
    icon: Zap,
    description:
      'Automate lead scraping, customer support routing, document processing, and multi-app synchronization using secure API webhooks and serverless worker DAGs.',
    idealFor: ['E-Commerce Stores', 'Real Estate Agencies', 'SaaS Operators', 'Operations Teams'],
    deliverables: ['Autonomous Workflow DAGs', 'Webhook Integrations', 'Custom Dashboards', 'Error Fallback Alerts'],
    techStack: ['Node.js', 'Python', 'Firebase', 'Supabase', 'Docker'],
    timeline: '2 - 3 Weeks',
  },
  {
    id: 'startup-mvps',
    title: 'Full-Stack Startup MVPs',
    category: 'Venture Creation',
    tagline: 'From napkin sketch to live, investor-ready web app in 30 days.',
    icon: Rocket,
    description:
      'Rapid prototype development for early-stage founders needing a fast, robust, scalable MVP. We write clean, battle-tested code that scales from 1 to 100k users.',
    idealFor: ['Pre-Seed Founders', 'Y-Combinator Applicants', 'Incubator Teams', 'Serial Entrepreneurs'],
    deliverables: ['Full Stack Web App', 'Auth & Payments (Stripe)', 'Database Schema & APIs', 'Deployment & CI/CD Pipeline'],
    techStack: ['React', 'Node.js', 'PostgreSQL / Supabase', 'Tailwind'],
    timeline: '3 - 4 Weeks',
  },
  {
    id: 'interactive-experiences',
    title: 'Interactive WebGL & 3D Experiences',
    category: 'Creative Technology',
    tagline: 'Bespoke 3D product visualizers and browser-based spatial storytelling.',
    icon: Globe,
    description:
      'Push web boundaries with hardware-accelerated 3D scenes, particle physics, custom shaders, and interactive product configurators directly inside the web browser.',
    idealFor: ['Gaming & Web3', 'Architecture Studios', 'Luxury Ecommerce', 'Experimental Agencies'],
    deliverables: ['Custom GLTF 3D Models', 'Shaders & Lighting Rig', 'Frame-Rate Optimization', 'Cross-Device Fallbacks'],
    techStack: ['Three.js', 'React Three Fiber', 'GLSL', 'Drei'],
    timeline: '3 - 5 Weeks',
  },
];

export const ServicesSection: React.FC = () => {
  const { setCursorType, playHover, playClick, setIsHireDrawerOpen } = usePortfolio();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openServiceModal = (service: ServiceItem) => {
    playClick();
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    playClick();
    setSelectedService(null);
  };

  const handleInquire = () => {
    setSelectedService(null);
    setIsHireDrawerOpen(true);
  };

  return (
    <section id="services" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 bg-black raw-grid">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">004</span> — SERVICES
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Premium</span>
            <span className="block">Digital Services</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // From luxury restaurant websites to autonomous AI products. Every service is handcrafted for world-class impact.
          </p>
        </div>

        {/* 8-Card Grid — Brutalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => openServiceModal(service)}
                onMouseEnter={() => {
                  setCursorType('hover');
                  playHover();
                }}
                onMouseLeave={() => setCursorType('default')}
                className="brutalist-card p-6 flex flex-col justify-between cursor-pointer group relative"
              >
                {/* Accent Corner Line */}
                <div className="absolute top-0 right-0 w-12 h-12 border-l-2 border-b-2 border-white/5 group-hover:border-amber-400/30 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 brutalist-border flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-mono text-white/20 tracking-wider">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400/70 font-bold">
                    {service.category}
                  </span>
                  <h3 className="font-brutalist font-bold text-lg text-white mt-1 group-hover:text-amber-400 transition-colors uppercase leading-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs text-white/50 font-mono line-clamp-3 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t-2 border-white/10 flex items-center justify-between text-[9px] font-mono text-white/40 group-hover:text-white transition-colors">
                  <span>EST. {service.timeline}</span>
                  <div className="flex items-center gap-1 text-amber-400 font-bold group-hover:translate-x-1 transition-transform">
                    <span>EXPLORE</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Interactive Modal — Brutalist */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="brutalist-card border-amber-400/30 p-6 md:p-10 max-w-3xl w-full relative max-h-[90vh] overflow-y-auto raw-grid-dense"
            >
              {/* Close Button */}
              <button
                onClick={closeServiceModal}
                className="absolute top-6 right-6 p-2 brutalist-border hover:border-amber-400 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="brutalist-tag text-amber-400 border-amber-400/40">
                  {selectedService.category}
                </span>
                <span className="text-[10px] font-mono text-white/40">EST. {selectedService.timeline}</span>
              </div>

              <h2 className="font-brutalist font-bold text-3xl sm:text-5xl text-white mt-2 uppercase tracking-tight">
                {selectedService.title}
              </h2>
              <p className="mt-2 text-sm text-amber-400/80 font-mono italic">
                "{selectedService.tagline}"
              </p>

              <p className="mt-6 text-sm text-white/70 font-body leading-relaxed">
                {selectedService.description}
              </p>

              {/* Deliverables & Ideal For */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-8">
                <div className="brutalist-card p-5 border-white/10">
                  <h4 className="text-[9px] uppercase font-mono text-amber-400 tracking-widest mb-3 font-bold">
                    DELIVERABLES
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-body text-white/80">
                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="brutalist-card p-5 border-white/10">
                  <h4 className="text-[9px] uppercase font-mono text-amber-400 tracking-widest mb-3 font-bold">
                    IDEAL_FOR
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.idealFor.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-body text-white/80">
                        <Sparkles size={12} className="text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-wider mr-2">
                  TECH:
                </span>
                {selectedService.techStack.map((tech) => (
                  <span key={tech} className="brutalist-tag text-cyan-400 border-cyan-400/30 text-[9px]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Action Bar */}
              <div className="mt-8 pt-6 border-t-2 border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-white/40 font-mono block">READY_TO_START?</span>
                  <span className="text-sm text-white font-brutalist font-bold uppercase">Let's discuss your project scope.</span>
                </div>
                <button
                  onClick={handleInquire}
                  className="brutalist-btn-amber text-xs flex items-center gap-2 py-3 px-5 cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>REQUEST_SERVICE</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
