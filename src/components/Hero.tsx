
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
      
      {/* 1. Base Radial Gradient (Matches InteractiveDemo) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900 via-brand-dark to-brand-dark"></div>

      {/* 2. Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"}}></div>
      
      {/* 3. Glowing Animated Blobs (with motion-safe) */}
      <div className="absolute top-0 left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl motion-safe:animate-blob"></div>
      <div className="absolute top-0 right-[10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl motion-safe:animate-blob animation-delay-2000"></div>

      {/* Floating Particles (reduced to 2 for performance) */}
      <div className="absolute top-1/4 left-20 w-3 h-3 bg-fuchsia-400/40 rounded-full motion-safe:animate-float-slow"></div>
      <div className="absolute top-1/2 right-32 w-4 h-4 bg-indigo-400/40 rounded-full motion-safe:animate-float-medium"></div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/20 mb-8 backdrop-blur-sm border border-fuchsia-500/10">
          <span className="motion-safe:animate-pulse text-fuchsia-400">✨</span> <span className="text-fuchsia-200">Now in Public Beta</span>
        </div>
        
        <h1 className="mx-auto max-w-5xl font-pixel text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8 drop-shadow-2xl leading-tight">
          Transform Strategy into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 filter drop-shadow-lg">
            An Adventure
          </span>
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-300 mb-10 drop-shadow-md font-light">
          Stop staring at static canvas templates. Enter <strong>Business Model Canvas Town</strong>, 
          where AI agents like <em>Steven Segments</em> and <em>Victor Value</em> help you 
          build robust business strategies in an immersive pixel-art world.
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
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            variant="glass"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Trailer
          </Button>
        </div>
      </div>
    </section>
  );
};
