
import React from 'react';
import { GraduationCap, Briefcase, Rocket, Sparkles } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5" id="author">
      {/* Background visual flair */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Image Column */}
            <div className="relative group w-full lg:w-1/3 max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-brand-dark rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] shadow-2xl">
                <img 
                  src="https://placehold.co/600x750/1e1b4b/d946ef?text=Terresa+Pan&font=montserrat" 
                  alt="Terresa Pan" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent">
                  <div className="flex items-center gap-2 text-fuchsia-400 mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Stanford GSB Sloan Fellow</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Terresa Pan</h3>
                </div>
              </div>
              
              {/* Achievement badges */}
              <div className="absolute -right-6 top-10 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block animate-float-slow">
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
              
              <div className="absolute -left-6 bottom-20 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-xl hidden sm:block animate-float-medium">
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
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-2/3">
              <div className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/10 px-4 py-1.5 text-sm font-medium text-fuchsia-300 ring-1 ring-inset ring-fuchsia-500/20 mb-8 backdrop-blur-sm border border-fuchsia-500/10">
                <Sparkles className="w-4 h-4" /> Meet the Architect
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6 font-pixel leading-tight">
                Strategist. Builder. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400">AI Orchestrator.</span>
              </h2>

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
                <p className="border-l-2 border-fuchsia-500/30 pl-6 italic text-slate-400">
                  By replacing traditional consulting overhead with cutting-edge AI orchestration, Terresa is dedicated to democratizing strategic expertise and creating scalable pathways to economic mobility for diverse founders.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
