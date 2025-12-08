import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { AgentShowcase } from './components/AgentShowcase';
import { InteractiveDemo } from './components/InteractiveDemo';
import { Architecture } from './components/Architecture';
import { Footer } from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className={`font-pixel text-lg font-bold tracking-tighter flex items-center gap-2 ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
             <span className="text-2xl">🏘️</span> BMC TOWN
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a 
              href="#features" 
              className={`transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}
            >
              Features
            </a>
            <a 
              href="#agents" 
              className={`transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}
            >
              The Experts
            </a>
            <a 
              href="#demo" 
              className={`transition-colors ${scrolled ? 'text-slate-600 hover:text-indigo-500' : 'text-slate-200 hover:text-indigo-400'}`}
            >
              Talk to Demo
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://bmc-town-ai-cost-simulator-18196303090.us-west1.run.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 hover:opacity-90 text-white text-xs font-bold py-2 px-4 rounded shadow-lg shadow-purple-500/20 transition-transform hover:scale-105 uppercase tracking-wide"
            >
              Cost Simulator
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <FeatureGrid />
        <AgentShowcase />
        <InteractiveDemo />
        <Architecture />
      </main>

      <Footer />
    </div>
  );
}

export default App;