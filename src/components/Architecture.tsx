
import React from 'react';
import { Database, Layout, Server, BrainCircuit, Search, GitBranch } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-base font-semibold text-fuchsia-400 uppercase tracking-widest">System Engineering</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-pixel">
            Multi-Agent Intelligence
          </p>
          <p className="mt-6 text-lg text-slate-400">
            Orchestrating complex strategic reasoning with persistent memory and proactive insight delivery.
          </p>
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="mb-20 flex justify-center px-4">
            <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/10 aspect-video group">
              <img 
                src="/teckstack.png" 
                alt="BMC Town Multi-Agent Architecture - LangGraph Proactive Agent Workflow" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                  <p className="text-xs font-mono text-fuchsia-400 uppercase tracking-widest mb-1">Workflow Engine</p>
                  <p className="text-white font-bold">Multi-Agent State Orchestration</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-brand-dark/80 rounded-full text-[10px] font-bold text-slate-300 border border-white/5">GEMINI 3</span>
                  <span className="px-3 py-1 bg-brand-dark/80 rounded-full text-[10px] font-bold text-slate-300 border border-white/5">LANGGRAPH</span>
                </div>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 hover:border-fuchsia-500/30 transition-all group backdrop-blur-md">
                <div className="w-12 h-12 bg-fuchsia-500/10 rounded-xl flex items-center justify-center text-fuchsia-400 mb-6 group-hover:bg-fuchsia-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-fuchsia-500/20">
                    <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Phaser 3 Game Interface</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  A high-performance RPG engine delivering an immersive pixel-art experience that reduces cognitive load during strategy sessions.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500">React</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500">TypeScript</span>
                </div>
            </div>

            {/* Orchestration */}
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group backdrop-blur-md">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-indigo-500/20">
                    <GitBranch className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">LangGraph Workflows</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Complex state management orchestrating 9 specialized agents and the Proactive Canvas Advisor for cross-canvas synthesis.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500">FastAPI</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500">Python</span>
                </div>
            </div>

            {/* Cognitive Core */}
            <div className="bg-slate-900/40 p-8 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group backdrop-blur-md">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-lg group-hover:shadow-purple-500/20">
                    <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Gemini 2.5 Multimodal</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  The cognitive core utilizing search grounding and multimodal inputs (PDFs, images) to process real-world business data.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500">Search Grounding</span>
                  <span className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-500">Vision</span>
                </div>
            </div>
        </div>

        {/* Persistence Banner */}
        <div className="mt-12 bg-gradient-to-r from-fuchsia-600/10 via-indigo-600/10 to-transparent p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="bg-brand-dark p-3 rounded-lg border border-white/10">
              <Database className="w-6 h-6 text-fuchsia-400" />
            </div>
            <div>
              <h4 className="text-white font-bold">Shared Living Context</h4>
              <p className="text-sm text-slate-400 italic">Memory extraction persists insights across all town districts.</p>
            </div>
          </div>
          <div className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.2em]">
            Syncing: MongoDB Atlas Architecture
          </div>
        </div>
      </div>
    </section>
  );
};
