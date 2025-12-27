
import React from 'react';
import { GraduationCap, Briefcase, Rocket, Sparkles, Globe, Mic, ExternalLink } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5" id="bio">
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Column */}
            <div className="relative group w-full lg:w-1/3 max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-brand-dark rounded-2xl overflow-hidden border border-white/10 aspect-[3/4] shadow-2xl">
                <img 
                  src="/mm.jpg" 
                  alt="Terresa Pan - Stanford GSB Sloan Fellow and AI Strategist" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-dark via-brand-dark/100 to-transparent">
                  <div className="flex items-center gap-2 text-fuchsia-400 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-fuchsia-400">Stanford GSB Sloan Fellow</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Terresa Pan</h3>
                </div>
              </div>
              
              {/* Achievement badges */}
              <div className="absolute -right-6 top-6 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block motion-safe:animate-float-slow">
                <div className="flex items-center gap-3">
                  <div className="bg-fuchsia-500/20 p-2 rounded-lg text-fuchsia-400">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Role</p>
                    <p className="text-sm text-white font-medium">Startup Founder & CEO</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-6 bottom-35 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block motion-safe:animate-float-medium">
                <div className="flex items-center gap-3">
                  <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Venture Accelerator</p>
                    <p className="text-sm text-white font-medium">Managing Partner, TZG</p>
                  </div>
                </div>
              </div>
            {/* Social Links Row */}
            <div className="mt-6 flex justify-center gap-4">
              {[
                { name: "Portfolio", icon: Globe, href: "https://agentgarden.lovable.app/" },
                { name: "LinkedIn", icon: LinkedinIcon, href: "https://www.linkedin.com/in/terresa-pan-292443245/" },
                { name: "GitHub", icon: GithubIcon, href: "https://github.com/Terresapan?tab=repositories" },
                { name: "Podcast", icon: Mic, href: "https://open.spotify.com/show/0hYoXreD60u0S3p4vR0eWW" },
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center text-slate-400 hover:text-white transition-all hover:-translate-y-1"
                  aria-label={link.name}
                >
                  <div className="w-10 h-10 bg-slate-900/80 backdrop-blur-sm border border-white/10 group-hover:border-fuchsia-500/50 group-hover:bg-gradient-to-br group-hover:from-fuchsia-600/20 group-hover:to-purple-600/20 flex items-center justify-center transition-all duration-300 shadow-lg"
                       style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                    <link.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
            </div>

            {/* Social Links Grid */}


            {/* Content Column */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-widest mb-4">
                <Sparkles className="w-4 h-4 inline-block mr-2" /> Meet the Architect
              </h2>
              
              <h3 className="text-2xl font-bold text-white mb-6 sm:text-3xl lg:text-4xl font-pixel leading-relaxed">
                <span className="block">Strategist. Builder.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">AI Orchestrator.</span>
              </h3>
              
              <p className="text-lg text-slate-300 font-light mb-6">
              </p>

              <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
                <p>
                  Terresa Pan is a <span className="text-white font-semibold underline decoration-fuchsia-500/50 decoration-2 underline-offset-4">Stanford Graduate School of Business alumna (Sloan Fellow)</span> and a strategic leader specializing in turning AI into a practical engine for business growth. With a deep entrepreneurial foundation as a startup Founder and CEO, she understands the high-stakes reality of building a business from the ground up.
                </p>
                <p>
                  As a Managing Partner at <span className="text-indigo-300 font-medium">TZG Partners</span>—an early-stage venture accelerator with VC capacity—Terresa has a proven track record of building, investing in, and scaling companies. She combines this "builder" mindset with technical foresight to help organizations navigate the rapidly evolving AI landscape.
                </p>
                <p>
                  Terresa currently serves as a Senior Consultant at <span className="text-fuchsia-300 font-medium">The Acceleration Project (TAP)</span>, where she spearheads AI adoption initiatives for under-resourced small businesses. She designs and deploys custom AI agents that automate content creation, marketing, and operations, delivering up to <span className="text-white font-bold">200% time savings</span> and <span className="text-white font-bold">50%+ engagement boosts</span> for SMBs. 
                </p>
                {/* <p className="border-l-2 border-fuchsia-500/30 pl-6 italic text-slate-400">
                  By replacing traditional consulting overhead with cutting-edge AI orchestration, Terresa is dedicated to democratizing strategic expertise and creating scalable pathways to economic mobility for diverse founders.
                </p> */}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
