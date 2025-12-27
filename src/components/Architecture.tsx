import React from 'react';
import { Database, Layout, Server, BrainCircuit, Search, GitBranch, Workflow, Zap } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      {/* Background with pixel grid */}
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }}>
      </div>
      
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-widest mb-4">System Engineering</h2>
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl font-pixel leading-relaxed">
            <span className="block">Multi-Agent</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">Intelligence</span>
          </p>
          <p className="mt-6 text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Orchestrating complex strategic reasoning with persistent memory and proactive insight delivery—all powered by Gemini and LangGraph.
          </p>
        </div>

        {/* Architecture Diagrams - Tech Stack Prominent */}
        <div className="mb-20 max-w-7xl mx-auto">
          
          {/* Main Tech Stack Diagram - Full Width, Large */}
          <div className="mb-8">
            <div className="group relative">
              <div className="absolute -inset-[3px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
              
              <div className="relative overflow-hidden border-2 border-fuchsia-500/20 group-hover:border-fuchsia-500/40 transition-all duration-500 shadow-2xl"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)' }}>
                <img 
                  src="/teckstack.png" 
                  alt="BMC Town Multi-Agent Architecture - LangGraph Workflow" 
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Enhanced Label */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-slate-900/95 backdrop-blur-xl p-6 border-2 border-fuchsia-500/40 shadow-xl shadow-fuchsia-500/20"
                       style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shadow-lg"
                             style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                          <GitBranch className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-pixel text-fuchsia-400 uppercase mb-1">Multi-Agent Architecture</p>
                          <p className="text-white font-bold text-lg">State Orchestration & Workflow Engine</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-fuchsia-500/20 border border-fuchsia-500/40 text-xs font-bold text-fuchsia-300"
                              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                          GEMINI 3
                        </span>
                        <span className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/40 text-xs font-bold text-purple-300"
                              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                          LANGGRAPH
                        </span>
                        <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/40 text-xs font-bold text-indigo-300"
                              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                          LANGSMITH
                        </span>
                        <span className="px-3 py-1.5 bg-cyan-500/20 border border-cyan-500/40 text-xs font-bold text-cyan-300"
                              style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                          MONGODB
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Flow - Smaller, Secondary Position */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Flow Diagram - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="group relative max-h-[500px] overflow-hidden">
                <div className="absolute -inset-[2px] bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
                
                <div className="relative overflow-hidden border-2 border-white/10 group-hover:border-purple-500/30 transition-all duration-500 h-full flex items-center justify-center bg-slate-950/50"
                     style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                  <img 
                    src="/userflow.png" 
                    alt="BMC Town Conversation Flow - Proactive Suggestion Pipeline" 
                    className="w-auto h-full max-h-[480px] object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-slate-900/90 backdrop-blur-md p-3 border-2 border-purple-500/30"
                         style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center"
                             style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                          <Workflow className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-pixel text-purple-400 uppercase">Conversation Flow</p>
                          <p className="text-white font-bold text-sm">Proactive Suggestion Pipeline</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow Description - Takes 1 column */}
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-500/20 backdrop-blur-sm"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0"
                       style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                    <Workflow className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 font-pixel text-xs">Workflow Pipeline</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Each user message flows through memory extraction, business conversation, and proactive suggestion nodes.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></span>
                    <span className="text-slate-400">Memory persisted to MongoDB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-400" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></span>
                    <span className="text-slate-400">[SYS] insights staged for review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400" style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}></span>
                    <span className="text-slate-400">Conditional summarization</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tech Stack Cards - Redesigned with Pixel Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Frontend Card */}
          <div className="group relative"
               style={{ transform: 'rotate(0.5deg)' }}>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-fuchsia-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-white/10 p-6 group-hover:border-fuchsia-500/40 transition-all duration-500 backdrop-blur-sm"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              
              <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                   style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
                <Layout className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-pixel text-sm">Phaser 3 Game</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Pixel-art RPG engine reducing cognitive load during strategy sessions.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  React
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Orchestration Card */}
          <div className="group relative"
               style={{ transform: 'rotate(-0.4deg)' }}>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-indigo-500 to-blue-600 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-white/10 p-6 group-hover:border-indigo-500/40 transition-all duration-500 backdrop-blur-sm"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                   style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-pixel text-sm">LangGraph</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                State management for 9 agents and the Proactive Canvas Advisor.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  FastAPI
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  Python
                </span>
              </div>
            </div>
          </div>

          {/* Cognitive Core Card */}
          <div className="group relative"
               style={{ transform: 'rotate(0.3deg)' }}>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-purple-500 to-indigo-600 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-white/10 p-6 group-hover:border-purple-500/40 transition-all duration-500 backdrop-blur-sm"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                   style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
                <Search className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-pixel text-sm">Gemini 3</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Multimodal AI processing PDFs, images, and search grounding.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  Grounding
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  Vision
                </span>
              </div>
            </div>
          </div>

          {/* Database Card */}
          <div className="group relative"
               style={{ transform: 'rotate(-0.5deg)' }}>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-cyan-500 to-teal-600 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
            
            <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-900/40 border-2 border-white/10 p-6 group-hover:border-cyan-500/40 transition-all duration-500 backdrop-blur-sm"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                   style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}>
                <Database className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 font-pixel text-sm">MongoDB Atlas</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Persistent memory extraction across all town districts.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  NoSQL
                </span>
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-slate-500"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}>
                  Cloud
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Key Innovation Highlight */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 opacity-20 blur-xl"></div>
            
            <div className="relative bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-indigo-500/10 border-2 border-fuchsia-500/30 p-8 backdrop-blur-sm"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center"
                       style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-bold text-xl mb-2 font-pixel text-base">Shared Living Context</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Memory extraction runs inside each conversation workflow, persisting insights in real-time. 
                    All nine experts remember and build upon your progress across the entire virtual town.
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="px-4 py-2 bg-slate-900/80 border border-fuchsia-500/30 text-xs font-mono text-fuchsia-300 uppercase tracking-wider"
                       style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
                    Persistent Memory
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};