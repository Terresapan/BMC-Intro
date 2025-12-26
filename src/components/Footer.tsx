import React from 'react';
import { Github, Linkedin, Youtube, Mic, Globe, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { name: "Portfolio", icon: Globe, href: "https://agentgarden.lovable.app/" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/terresa-pan-292443245/" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@Terresa_P" },
    { name: "GitHub", icon: Github, href: "https://github.com/Terresapan?tab=repositories" },
    { name: "Podcast", icon: Mic, href: "https://open.spotify.com/show/0hYoXreD60u0S3p4vR0eWW" },
  ];

  return (
    <footer className="bg-brand-dark border-t border-white/10 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="max-w-md">
            <h3 className="font-pixel text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 mb-4">
              BMC TOWN
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Gamifying business strategy for the modern era. Replace static templates with a living, breathing world powered by advanced AI agents.
            </p>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-white mb-6 flex items-center gap-2">
              Connect with the Creator
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <link.icon className="w-4 h-4 text-slate-400 group-hover:text-fuchsia-400 transition-colors" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{link.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Business Model Canvas Town. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 motion-safe:animate-pulse"></div>
             <span className="text-xs text-slate-400">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};