import React from 'react';
import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { AgentShowcase } from '@/components/AgentShowcase';
import { InteractiveDemo } from '@/components/InteractiveDemo';
import { Architecture } from '@/components/Architecture';
import { QASection } from '@/components/QASection';
import { AuthorSection } from '@/components/AuthorSection';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-dark text-slate-200">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <FeatureGrid />
        <AgentShowcase />
        <InteractiveDemo />
        <AuthorSection />
        <QASection />
        <Architecture />
      </main>

      <Footer />
    </div>
  );
}

