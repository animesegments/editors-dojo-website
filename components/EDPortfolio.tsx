'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EDPortfolioCard from './EDPortfolioCard';

const portfolioItems = [
  { id: 1, title: "The Discipline of Becoming", client: "Saurabh Gandhi", category: "Personal Brand", aspect: "16:9" as const, description: "A 12-part series exploring confidence, identity, and deliberate progress through precise, emotionally intelligent editing." },
  { id: 2, title: "Luxury Living Reimagined", client: "The Aurelia Group", category: "Real Estate", aspect: "9:16" as const, description: "High-end property storytelling that converts serious buyers through refined, emotionally resonant short-form content." },
];

export default function EDPortfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const openCaseStudy = (project: any) => setSelectedProject(project);
  const closeCaseStudy = () => setSelectedProject(null);

  return (
    <section id="work" className="max-w-[1400px] mx-auto px-8 md:px-12 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
        <div>
          <p className="text-[var(--color-gold)] text-sm tracking-[0.1em] uppercase mb-4">Selected Work</p>
          <h2 className="text-[52px] md:text-[60px] font-bold tracking-[-0.025em] leading-[1.05] text-[var(--color-dark)]">Work that earns<br />its attention.</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {portfolioItems.map((item) => (
          <EDPortfolioCard key={item.id} title={item.title} client={item.client} category={item.category} aspect={item.aspect} onClick={() => openCaseStudy(item)} />
        ))}
      </div>
    </section>
  );
}