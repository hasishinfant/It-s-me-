import React from 'react';
import { motion } from 'framer-motion';

interface BlurTextProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

export const BlurText: React.FC<BlurTextProps> = ({ text, className = '', delayOffset = 0 }) => {
  const words = text.split(' ');

  return (
    <motion.div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '0.1em',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          style={{
            display: 'inline-block',
            marginRight: '0.28em',
          }}
          variants={{
            hidden: {
              filter: 'blur(10px)',
              opacity: 0,
              y: 50,
            },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
                delay: delayOffset + index * 0.1,
                ease: 'easeOut' as const,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
