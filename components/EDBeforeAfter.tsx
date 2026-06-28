'use client';

import React, { useState } from 'react';

export default function EDBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => setSliderPosition(Number(e.target.value));

  return (
    <section className="max-w-[1100px] mx-auto px-8 md:px-12 py-20 md:py-28">
      <div className="text-center mb-14">
        <p className="text-[var(--color-gold)] text-sm tracking-[0.1em] uppercase mb-4">The Difference Is In The Details</p>
        <h2 className="text-[48px] md:text-[56px] font-bold tracking-[-0.025em] leading-[1.05] text-[var(--color-dark)]">Drag to see what<br />intention looks like.</h2>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-dark)] shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center"><div className="text-center"><div className="text-white/50 text-xs tracking-[0.15em] mb-3">BEFORE</div><div className="text-white text-3xl font-medium tracking-tight">Raw. Unfocused. Flat.</div></div></div>
          <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-gold)]" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}><div className="text-center"><div className="text-[var(--color-dark)]/60 text-xs tracking-[0.15em] mb-3">AFTER</div><div className="text-[var(--color-dark)] text-3xl font-medium tracking-tight">Precise. Emotional. Inevitable.</div></div></div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-[420px] px-6 z-30">
            <div className="relative h-px bg-white/20"><div className="absolute top-0 left-0 h-px bg-[var(--color-gold)] transition-all" style={{ width: `${sliderPosition}%` }} /></div>
            <div className="absolute top-1/2 -translate-y-1/2 w-[17px] h-[17px] bg-white border-[3.5px] border-[var(--color-gold)] rounded-full shadow-xl pointer-events-none" style={{ left: `calc(${sliderPosition}% - 8.5px)` }} />
            <input type="range" min="0" max="100" value={sliderPosition} onChange={handleSliderChange} className="absolute inset-0 w-full opacity-0 cursor-col-resize z-40" />
          </div>
        </div>
      </div>
    </section>
  );
}