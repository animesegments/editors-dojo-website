'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function EDAbout() {
  return (
    <section id="philosophy" className="max-w-[1200px] mx-auto px-8 md:px-12 py-24 md:py-32">
      <div className="grid md:grid-cols-12 gap-x-16 items-start">
        <div className="md:col-span-7">
          <div className="flex gap-6">
            <div className="hidden md:block w-[2px] bg-[var(--color-gold)] self-stretch mt-3" />
            <blockquote className="text-[42px] md:text-[52px] leading-[1.05] tracking-[-0.015em] text-[var(--color-dark)] font-medium">
              The edit is where<br />the story is decided.
            </blockquote>
          </div>
        </div>
        <div className="md:col-span-5 mt-12 md:mt-4">
          <div className="space-y-7 text-[16px] leading-[1.75] text-[var(--color-text-body)]">
            <p>Every great editor knows the truth: the raw footage is never the story. The story lives in the cuts you choose not to make, the pauses you protect, and the moments you allow to breathe.</p>
            <p>editorsdojo exists for those who understand this. We treat every frame as an investment in attention. We do not chase trends or volume. We chase inevitability.</p>
            <p className="pt-2 text-[15px] text-[var(--color-text-muted)]">This is not content creation.<br />This is the quiet work of making people stay.</p>
          </div>
        </div>
      </div>
    </section>
  );
}