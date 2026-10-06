import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { ImageIcon, MovieIcon, LightbulbIcon } from './Icons';

const CAPABILITIES_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4';

interface CapabilityCardData {
  id: string;
  title: string;
  icon: React.ReactNode;
  tags: string[];
  body: string;
}

export const CapabilitiesSection: React.FC = () => {
  const cards: CapabilityCardData[] = [
    {
      id: 'design',
      title: 'Design',
      icon: <ImageIcon size={20} className="text-white" />,
      tags: ['Brand Systems', 'Art Direction', 'Visual Identity', 'Motion'],
      body: 'We shape identities and interfaces that feel unmistakably yours \u2014 typographic systems, component libraries, and art-directed pages that scale without losing soul.',
    },
    {
      id: 'engineering',
      title: 'Engineering',
      icon: <MovieIcon size={20} className="text-white" />,
      tags: ['React', 'Next.js', 'Headless CMS', 'Edge-Ready'],
      body: 'Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented \u2014 with code your team will enjoy extending long after launch.',
    },
    {
      id: 'growth',
      title: 'Growth',
      icon: <LightbulbIcon size={20} className="text-white" />,
      tags: ['SEO', 'Analytics', 'A/B Testing', 'Retention'],
      body: 'Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.',
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col justify-between">
      {/* Background Video */}
      <FadingVideo
        src={CAPABILITIES_VIDEO_URL}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="mb-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-body text-white/80 mb-6"
          >
            // Capabilities
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.2 }}
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white whitespace-pre-line"
          >
            {'Studio craft,\nend to end'}
          </motion.h2>
        </header>

        {/* Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' as const, delay: 0.3 + index * 0.15 }}
              className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                <div className="flex flex-wrap justify-end gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1 min-h-[40px]" />

              {/* Bottom Details */}
              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none mb-3 text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {card.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
