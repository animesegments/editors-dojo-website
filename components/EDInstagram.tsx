'use client';

import React from 'react';
import { motion } from 'framer-motion';

const reels = [
  { id: 1, title: "Discipline Over Motivation", plays: "2.1M" },
  { id: 2, title: "The Art of the Cut", plays: "1.4M" },
  { id: 3, title: "Protect the Pause", plays: "980K" },
  { id: 4, title: "Frame by Frame", plays: "1.7M" },
  { id: 5, title: "Emotional Pacing", plays: "1.1M" },
  { id: 6, title: "Less is More", plays: "2.4M" },
];

export default function EDInstagram() {
  return (
    <section className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-[var(--color-gold)] text-sm tracking-[0.1em] uppercase mb-4">From the Archive</p>
        <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.025em] leading-[1.05] text-[var(--color-dark)]">Not content.<br />Moments worth keeping.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reels.map((reel, index) => (
          <motion.div key={index} whileHover={{ scale: 1.012 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} className="group cursor-pointer">
            <div className="relative bg-[var(--color-bg-secondary)] p-5 rounded-2xl border border-[var(--color-border)] group-hover:border-[var(--color-gold)]/50 transition-all duration-500">
              <div className="relative aspect-[9/16] bg-[var(--color-dark)] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 z-10" />
                <div className="relative z-20 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 backdrop-blur-sm transition-all group-hover:border-[var(--color-gold)]">
                  <div className="w-0 h-0 border-l-[11px] border-l-white border-y-[7px] border-y-transparent ml-[3px] group-hover:border-l-[var(--color-gold)] transition-colors" />
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.6px,transparent_1px)] bg-[length:3px_3px] opacity-[0.08] z-10" />
              </div>
              <div className="mt-5 px-1">
                <div className="text-[15px] font-medium tracking-[-0.01em] text-[var(--color-dark)] leading-tight">{reel.title}</div>
                <div className="text-xs text-[var(--color-text-muted)] mt-2 tracking-[0.04em]">{reel.plays} plays</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-sm text-[var(--color-text-muted)] tracking-[0.03em]">A curated selection from <span className="text-[var(--color-dark)]">@editorsdojo</span></p>
      </div>
    </section>
  );
}