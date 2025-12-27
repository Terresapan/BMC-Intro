import React from 'react';
import { Lightbulb, Brain, Gamepad2, FileDown, Users, Sparkles, ExternalLink } from 'lucide-react';

const FEATURES = [
  {
    title: "Insights You'd Never Ask For",
    description: "The Canvas Advisor proactively surfaces cross-block connections — like a real consultant connecting the dots across your entire business model.",
    icon: Lightbulb,
    color: "from-fuchsia-500 to-purple-600",
    highlight: true
  },
  {
    title: "It Remembers Everything",
    description: "Pick up where you left off. Our 'Shared Living Context' means all nine experts remember your progress and build on previous conversations.",
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Learning Through Play",
    description: "A Phaser 3 pixel-art RPG world transforms strategy planning into an engaging adventure — reducing cognitive load and increasing retention.",
    icon: Gamepad2,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Trained on Your Business",
    description: "Upload PDFs, images, or notes. Gemini multimodal AI grounds every response in YOUR specific business data — not generic templates.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "You're Always in Control",
    description: "Proactive suggestions are staged [SYS], not auto-applied. You confirm or dismiss each insight — the AI advises, never decides.",
    icon: Users,
    color: "from-cyan-500 to-teal-600"
  },
  {
    title: "One-Click Strategy Export",
    description: "Download a professional PDF of your complete Business Model Canvas, automatically populated with strategic points from your sessions.",
    icon: FileDown,
    color: "from-teal-500 to-green-600"
  }
];

const PERSONAS = [
  {
    title: "The First-Time Founder",
    description: "From idea to investor-ready in weeks, not months.",
    stat: "90%",
    statLabel: "Woman-Owned",
    color: "border-fuchsia-500/30 hover:border-fuchsia-500"
  },
  {
    title: "The Bootstrapped Team",
    description: "No budget for $500/hr consultants? We've got you covered.",
    stat: "60%",
    statLabel: "Black-Owned",
    color: "border-purple-500/30 hover:border-purple-500"
  },
  {
    title: "The Nonprofit Accelerator",
    description: "Scale your impact with AI-assisted coaching for your cohorts.",
    stat: "24/7",
    statLabel: "Available",
    color: "border-indigo-500/30 hover:border-indigo-500"
  }
];

export const FeatureGrid: React.FC = () => {
  return (
    <div className="bg-brand-dark py-24 sm:py-32 relative overflow-hidden" id="features">
       
       {/* Enhanced Background with Pixel Grid */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          {/* Pixel grid overlay */}
          <div className="absolute inset-0 opacity-[0.015]" 
               style={{
                 backgroundImage: `
                   linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                   linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '20px 20px'
               }}>
          </div>
       </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="text-base font-semibold leading-7 text-indigo-300 uppercase tracking-widest mb-4">Why BMC Town?</h2>
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl font-pixel leading-relaxed">
            <span className="block">Strategy Consulting,</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">Reimagined</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300 font-light max-w-2xl mx-auto">
            Multi-agent AI meets learning science to deliver expert-level business guidance—accessible to everyone, anytime.
          </p>
        </div>

        {/* Unique Diagonal Staggered Layout */}
        <div className="mx-auto max-w-7xl mb-32">
          <div className="relative">
            
            {/* Row 1 - Highlight Card (Large) */}
            <div className="mb-8 lg:mb-12">
              <div 
                className="group relative overflow-hidden"
                style={{ transform: 'rotate(-0.5deg)' }}
              >
                {/* Pixelated border effect */}
                <div className="absolute -inset-[2px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ 
                       clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
                     }}>
                </div>
                
                <div className="relative bg-brand-dark border-2 border-fuchsia-500/30 p-8 lg:p-12 group-hover:border-fuchsia-500/60 transition-all duration-500"
                     style={{ 
                       clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
                       transform: 'translateZ(0)'
                     }}>
                  
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-xl shadow-fuchsia-500/20"
                           style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)' }}>
                        <Lightbulb className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-pixel leading-relaxed group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-purple-400 transition-all">
                        Insights You'd Never Ask For
                      </h3>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        The Canvas Advisor proactively surfaces cross-block connections — like a real consultant connecting the dots across your entire business model.
                      </p>
                      
                      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/30 text-sm text-fuchsia-400 font-medium"
                           style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                        <span className="w-2 h-2 bg-fuchsia-400 motion-safe:animate-pulse"
                              style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></span>
                        Core Innovation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 - Two Medium Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 lg:mb-12">
              {[FEATURES[1], FEATURES[2]].map((feature, idx) => (
                <div 
                  key={feature.title}
                  className="group relative"
                  style={{ 
                    transform: idx === 0 ? 'rotate(0.5deg)' : 'rotate(-0.3deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Pixelated corner accent */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                       style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
                  </div>
                  
                  <div className="relative overflow-hidden bg-white/[0.02] border border-white/10 p-8 group-hover:bg-white/[0.05] group-hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
                       style={{ 
                         clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                         transform: 'translateZ(0)'
                       }}>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative">
                      <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}
                           style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                        {feature.title}
                      </h3>
                      
                      <p className="text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3 - Three Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[FEATURES[3], FEATURES[4], FEATURES[5]].map((feature, idx) => (
                <div 
                  key={feature.title}
                  className="group relative"
                  style={{ 
                    transform: `rotate(${idx % 2 === 0 ? '0.3' : '-0.4'}deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-2 border-white/5 p-6 group-hover:border-white/20 transition-all duration-500 group-hover:-translate-y-2"
                       style={{ 
                         clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)'
                       }}>
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} shadow-md mb-4`}
                           style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience - Hexagonal Cards */}
        <div className="border-t border-white/5 pt-24">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-300 uppercase tracking-widest mb-4">Target Audience</h2>
            <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl font-pixel mb-6 leading-relaxed">
              Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">TAP Community</span>
            </p>
            <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              Designed for under-resourced entrepreneurs who've been excluded from expensive consulting—bringing world-class strategy to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {PERSONAS.map((persona, idx) => (
              <div 
                key={persona.title}
                className="group relative"
                style={{ 
                  transform: `translateY(${idx % 2 === 0 ? '0' : '20px'})`
                }}
              >
                {/* Glowing border effect */}
                <div className={`absolute -inset-[2px] bg-gradient-to-br ${persona.color.includes('fuchsia') ? 'from-fuchsia-500 to-purple-600' : persona.color.includes('purple') ? 'from-purple-500 to-indigo-600' : 'from-indigo-500 to-blue-600'} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500`}></div>
                
                <div className={`relative overflow-hidden border-2 ${persona.color} bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:-translate-y-2`}
                     style={{ 
                       clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                     }}>
                  
                  {/* Content */}
                  <div className="text-center">
                    <div className="mb-6">
                      <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 block">
                        {persona.stat}
                      </span>
                      <p className="text-xs text-slate-500 uppercase tracking-widest mt-2 font-pixel">
                        {persona.statLabel}
                      </p>
                    </div>

                    <h3 className="font-bold text-lg text-white mb-3 group-hover:text-fuchsia-400 transition-colors">
                      {persona.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {persona.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* TAP Mission Statement */}
          <div className="max-w-5xl mx-auto">
            <div className="group relative cursor-default">
              {/* Outer glow */}
              <div className="absolute -inset-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-20 group-hover:opacity-25 blur-xl transition-opacity duration-700"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 border-2 border-fuchsia-500/30 group-hover:border-fuchsia-500/40 p-8 lg:p-12 backdrop-blur-sm transition-all duration-700"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 opacity-20 group-hover:opacity-25 transition-opacity duration-700"
                     style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20 group-hover:opacity-25 transition-opacity duration-700"
                     style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>

                <div className="relative flex flex-col lg:flex-row items-start gap-8">
                  {/* Logo/Badge */}
                  <div className="flex-shrink-0">
                    {/* TAP Logo - Clickable */}
                    <a 
                      href="https://www.theaccelerationproject.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo relative block"
                      aria-label="Visit The Acceleration Project website"
                    >
                      <div className="relative w-24 h-24 bg-white/95 flex items-center justify-center shadow-2xl border-2 border-fuchsia-500/30 group-hover/logo:border-fuchsia-500/60 transition-all duration-500 group-hover/logo:scale-105"
                           style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                        <img 
                          src="/TAP.jpg" 
                          alt="The Acceleration Project Logo" 
                          className="w-16 h-16 object-contain"
                        />
                        
                        {/* Clickable hint */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-fuchsia-500 flex items-center justify-center opacity-0 group-hover/logo:opacity-100 transition-all duration-300 shadow-lg"
                             style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 bg-slate-900/95 backdrop-blur-sm border border-fuchsia-500/30 text-xs text-white whitespace-nowrap opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none"
                             style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                          Visit TAP Website
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <a 
                        href="https://www.theaccelerationproject.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title"
                      >
                        <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 font-pixel leading-relaxed group-hover/title:from-fuchsia-300 group-hover/title:via-purple-300 group-hover/title:to-indigo-300 transition-all duration-300 flex items-center gap-2">
                          About TAP
                          <ExternalLink className="w-5 h-5 text-fuchsia-400 opacity-0 group-hover/title:opacity-100 transition-opacity" />
                        </h3>
                      </a>
                      <div className="h-px flex-1 bg-gradient-to-r from-fuchsia-500/50 to-transparent"></div>
                    </div>
                    
                    <p className="text-slate-200 text-lg leading-relaxed mb-6">
                      <span className="font-bold text-white">TAP (The Acceleration Project)</span> is a nonprofit organization, serving 10,000+ under-resourced entrepreneurs, with a mission to unlock pathways to wealth creation and economic mobility by accelerating under-resourced small businesses through high-impact, customized support in strategy, operations, finance, and marketing.
                    </p>

                    {/* Key metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-white/5 border border-white/10 hover:border-white/15 transition-all duration-500"
                           style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                        <p className="text-sm text-slate-400 font-bold">Strategy</p>
                      </div>
                      <div className="text-center p-3 bg-white/5 border border-white/10 hover:border-white/15 transition-all duration-500"
                           style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                        <p className="text-sm text-slate-400 font-bold">Operations</p>
                      </div>
                      <div className="text-center p-3 bg-white/5 border border-white/10 hover:border-white/15 transition-all duration-500"
                           style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                        <p className="text-sm text-slate-400 font-bold">Finance</p>
                      </div>
                      <div className="text-center p-3 bg-white/5 border border-white/10 hover:border-white/15 transition-all duration-500"
                           style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)' }}>
                        <p className="text-sm text-slate-400 font-bold">Marketing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};