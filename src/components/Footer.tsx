import React from 'react';
import { Mic, Globe, ExternalLink, Sparkles, Award, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, YoutubeIcon } from './Icons';

export const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Portfolio", icon: Globe, href: "https://agentgarden.lovable.app/" },
    { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/terresa-pan-292443245/" },
    { name: "YouTube", icon: YoutubeIcon, href: "https://www.youtube.com/@Terresa_P" },
    { name: "GitHub", icon: GithubIcon, href: "https://github.com/Terresapan?tab=repositories" },
    { name: "Podcast", icon: Mic, href: "https://open.spotify.com/show/0hYoXreD60u0S3p4vR0eWW" },
  ];

  const quickLinks = [
    { name: "Enter BMC Town", href: "https://bmc-ui-635390037922.us-central1.run.app/" },
    { name: "Features", href: "#features" },
    { name: "Meet the Experts", href: "#agents" },
    { name: "Ask BMC", href: "#demo" },
    { name: "The Manifesto", href: "#qa" },
  ];

  return (
    <footer className="bg-brand-dark border-t-2 border-white/10 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }}>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-fuchsia-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 opacity-20 blur"></div>
                  <h3 className="relative font-pixel text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 px-4 py-2 bg-slate-900/50 border border-fuchsia-500/30"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                    BMC TOWN
                  </h3>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Democratizing expert-level strategy for under-resourced entrepreneurs. Our AI advisors proactively connect the dots across your business model — then let you decide.
              </p>

              {/* Stanford Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-sm text-fuchsia-300"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                <Award className="w-4 h-4" />
                <span className="font-pixel text-xs">Stanford Create + AI 2026</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2 font-pixel text-sm">
                <Sparkles className="w-4 h-4 text-fuchsia-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="group flex items-center gap-2 text-slate-400 hover:text-fuchsia-400 transition-colors"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column */}
            <div>
              <h4 className="font-bold text-white mb-6 flex items-center gap-2 font-pixel text-sm">
                <Globe className="w-4 h-4 text-purple-400" />
                Connect
              </h4>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-slate-400 hover:text-white transition-all"
                  >
                    <div className="w-8 h-8 bg-white/5 group-hover:bg-gradient-to-br group-hover:from-fuchsia-500 group-hover:to-purple-600 border border-white/10 group-hover:border-fuchsia-500/50 flex items-center justify-center transition-all duration-300"
                         style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
                      <link.icon className="w-4 h-4 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-medium">{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-xs text-slate-500">
                © {new Date().getFullYear()} BMC Town. Crafted with AI by Terresa Pan.
              </p>
              
              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                <span className="w-2 h-2 bg-green-500 motion-safe:animate-pulse"
                      style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></span>
                <span className="text-xs text-green-400 font-mono">All Systems Operational</span>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500">Powered by:</span>
              <span className="px-2 py-1 bg-fuchsia-500/10 border border-fuchsia-500/20 text-[10px] font-bold text-fuchsia-400"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                GEMINI 3
              </span>
              <span className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                LANGGRAPH
              </span>
              <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-bold text-indigo-400"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                NEXTJS 16
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};