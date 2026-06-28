'use client';

import React from 'react';
import { motion } from 'framer-motion';
import EDButton from './EDButton';

export default function EDHero() {
  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) workSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center paper-texture overflow-hidden">
      <div className="max-w-[1080px] mx-auto px-8 md:px-12 text-center relative z-10 pt-16">
        <div className="space-y-[-10px] md:space-y-[-14px]">
          <motion.h1 className="hero-headline text-[100px] md:text-[124px] leading-[0.9] tracking-[-0.02em] text-[var(--color-dark)]" initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:1, ease:[0.23,1,0.32,1]}}>
            Crafting stories
          </motion.h1>
          <motion.h1 className="hero-headline text-[100px] md:text-[124px] leading-[0.9] tracking-[-0.02em] text-[var(--color-dark)]" initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:1, ease:[0.23,1,0.32,1], delay:0.12}}>
            that people
          </motion.h1>
          <motion.h1 className="hero-headline text-[100px] md:text-[124px] leading-[0.9] tracking-[-0.02em] text-[var(--color-dark)]" initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{duration:1, ease:[0.23,1,0.32,1], delay:0.24}}>
            can&apos;t ignore.
          </motion.h1>
        </div>

        <motion.div className="mt-7 md:mt-9" initial={{opacity:0, scale:0.92}} animate={{opacity:1, scale:1}} transition={{duration:1.2, ease:[0.23,1,0.32,1], delay:0.55}}>
          <span className="hero-script text-[34px] md:text-[44px] text-[var(--color-gold)]">Precision.</span>
        </motion.div>

        <div className="mt-14 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <EDButton variant="primary" onClick={scrollToWork}>View the Work</EDButton>
          <EDButton variant="secondary" href="#contact">Begin a Project</EDButton>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-[var(--color-text-muted)]">
        <span className="text-xs tracking-[0.08em]">Scroll to explore</span>
        <div className="w-px h-7 bg-[var(--color-gold)]/60" />
      </div>
    </section>
  );
}