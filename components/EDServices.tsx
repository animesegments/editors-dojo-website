'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Video, User, Instagram, Play, Youtube, RefreshCw } from 'lucide-react';

const services = [
  { icon: Scissors, title: "Short Form Editing", description: "We don’t just cut. We decide what deserves to exist." },
  { icon: Video, title: "Motion Graphics", description: "Motion that serves emotion, never decoration." },
  { icon: User, title: "Personal Brand Content", description: "We help you own your voice visually." },
  { icon: Instagram, title: "Instagram Reels", description: "Built to stop the scroll without screaming." },
  { icon: Play, title: "TikTok", description: "Native to the platform. Never forced." },
  { icon: Youtube, title: "YouTube Shorts", description: "Discovery-first editing that builds audiences." },
  { icon: RefreshCw, title: "Content Repurposing", description: "One story. Multiple precise expressions." },
];

export default function EDServices() {
  return (
    <section id="services" className="max-w-[1280px] mx-auto px-8 md:px-12 py-24 md:py-32">
      <div className="max-w-2xl mb-16">
        <p className="text-[var(--color-gold)] text-sm tracking-[0.1em] uppercase mb-4">Capability, Not Services</p>
        <h2 className="text-[52px] md:text-[60px] font-bold tracking-[-0.025em] leading-[1.05] text-[var(--color-dark)]">We don’t offer packages.<br />We offer precision.</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div key={index} whileHover={{ y: -6 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }} className="group border-l-2 border-[var(--color-border)] pl-8 hover:border-[var(--color-gold)] transition-all duration-500">
              <div className="mb-6"><Icon size={26} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-gold)] transition-colors" /></div>
              <h3 className="text-[22px] font-medium tracking-[-0.015em] text-[var(--color-dark)] mb-4 leading-tight">{service.title}</h3>
              <p className="text-[15px] leading-[1.6] text-[var(--color-text-body)] mb-3">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}