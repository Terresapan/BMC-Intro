
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
      
      {/* 1. Base Radial Gradient (Matches InteractiveDemo) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900 via-brand-dark to-brand-dark"></div>

      {/* 2. Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay"></div>
      
      {/* 3. Glowing Animated Blobs (Adapted for Dark Background) */}
      <div className="absolute top-0 left-[10%] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-[10%] w-96 h-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-[30%] w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 left-20 w-3 h-3 bg-fuchsia-400/40 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 right-32 w-4 h-4 bg-indigo-400/40 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-float-fast"></div>

      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/20 mb-8 backdrop-blur-sm border border-fuchsia-500/10">
          <span className="animate-pulse text-fuchsia-400">✨</span> <span className="text-fuchsia-200">Now in Public Beta</span>
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
          <a 
            href="https://philoagents-ui-635390037922.us-central1.run.app//"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:from-fuchsia-500 hover:via-purple-500 hover:to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-900/40 transition-all flex items-center justify-center gap-2 group ring-1 ring-white/10"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/10">
            <Play className="w-4 h-4 fill-current" />
            Watch Trailer
          </button>
        </div>
      </div>
    </section>
  );
};
