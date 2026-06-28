'use client';

import React from 'react';

const steps = [
  { number: "01", title: "Discovery", description: "We begin by listening — deeply. Not for what you want to say, but for what you need to mean." },
  { number: "02", title: "Strategy", description: "Every edit begins with structure. We design the emotional arc, pacing, and rhythm." },
  { number: "03", title: "Editing", description: "This is where the real work happens. Frame by frame. We protect moments and shape time." },
  { number: "04", title: "Feedback", description: "We treat revision as refinement. Thoughtful dialogue that sharpens the work." },
  { number: "05", title: "Delivery", description: "Final files arrive with clarity and the thinking behind key decisions." },
];

export default function EDProcess() {
  return (
    <section id="process" className="max-w-[1100px] mx-auto px-8 md:px-12 py-24 md:py-32">
      <div className="max-w-2xl mb-20">
        <p className="text-[var(--color-gold)] text-sm tracking-[0.1em] uppercase mb-4">The Ritual</p>
        <h2 className="text-[52px] md:text-[60px] font-bold tracking-[-0.025em] leading-[1.05] text-[var(--color-dark)]">We don’t follow a process.<br />We follow intention.</h2>
      </div>
      <div className="space-y-16 md:space-y-20">
        {steps.map((step, index) => (
          <div key={index} className="grid md:grid-cols-12 gap-x-12 items-start group">
            <div className="md:col-span-2 mb-4 md:mb-0">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] text-sm font-medium tracking-[0.12em]">{step.number}</div>
            </div>
            <div className="md:col-span-10">
              <h3 className="text-[26px] md:text-[28px] font-medium tracking-[-0.015em] text-[var(--color-dark)] mb-4 leading-tight">{step.title}</h3>
              <p className="text-[16px] leading-[1.7] text-[var(--color-text-body)] max-w-[52ch]">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}