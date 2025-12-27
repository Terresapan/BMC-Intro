
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
      
      {/* 1. Base Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900 via-brand-dark to-brand-dark"></div>

      {/* 2. Pixel Town Background Image - Subtle */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] pointer-events-none"
        style={{ backgroundImage: "url('/hero-bmc-town.png')" }}
      ></div>

      {/* 3. Gradient overlay to fade image into background */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent pointer-events-none"></div>

      {/* 4. Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}}></div>
      
      {/* 5. Glowing Animated Blobs (with motion-safe) */}
      <div className="absolute top-0 left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl motion-safe:animate-blob"></div>
      <div className="absolute top-0 right-[10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl motion-safe:animate-blob animation-delay-2000"></div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-20 w-3 h-3 bg-fuchsia-400/40 rounded-full motion-safe:animate-float-slow"></div>
      <div className="absolute top-1/2 right-32 w-4 h-4 bg-indigo-400/40 rounded-full motion-safe:animate-float-medium"></div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/20 mb-8 backdrop-blur-sm border border-fuchsia-500/10">
          <span className="motion-safe:animate-pulse text-fuchsia-400">✨</span> 
          <span className="text-fuchsia-200">Stanford Create+AI Challenge 2026</span>
        </div>
        
        <h1 className="mx-auto max-w-6xl font-pixel text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-8 drop-shadow-2xl leading-tight">
          Expert-Level Strategy Guidance,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 filter drop-shadow-lg">
            Now Accessible to Everyone
          </span>
        </h1>
        
        <p className="mx-auto max-w-3xl text-lg lg:text-xl leading-8 text-slate-300 mb-10 drop-shadow-md font-light">
          Our AI agents don't just answer questions — they <strong className="text-white">surface strategic connections</strong> you'd never think to ask about, 
          then <strong className="text-white">let you decide</strong> what fits your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            variant="gradient"
            size="lg"
            className="w-full sm:w-auto group"
          >
            <a 
              href="https://bmc-ui-635390037922.us-central1.run.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enter BMC Town
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            variant="glass"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-fuchsia-400">●</span>
            <span>Powered by Google Gemini</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-purple-400">●</span>
            <span>Built for TAP Community</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-400">●</span>
            <span>9 Specialized AI Agents</span>
          </div>
        </div>
      </div>
    </section>
  );
};
