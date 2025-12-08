import React from 'react';
import { Database, Layout, Server, BrainCircuit } from 'lucide-react';

export const Architecture: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-base font-semibold text-purple-400">Under the Hood</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Modern System Architecture
          </p>
          <p className="mt-6 text-lg text-slate-400">
            A scalable, high-performance stack designed for enterprise-grade intelligence and security.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16 flex justify-center">
            <img 
              src="https://placehold.co/1200x600/1e1b4b/a855f7?text=Architecture+Diagram&font=montserrat" 
              alt="BMC Town Tech Stack Architecture" 
              className="rounded-xl shadow-2xl shadow-purple-900/20 border border-white/10 w-full max-w-5xl object-cover"
            />
        </div>

        <div className="relative">
            {/* Connecting Line (Visual only) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-900/50 to-transparent -z-10 -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Step 1: Frontend */}
                <div className="bg-white/5 p-6 rounded-xl shadow-sm border border-white/5 text-center relative group hover:-translate-y-1 transition-transform backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto bg-fuchsia-500/10 rounded-full flex items-center justify-center text-fuchsia-400 mb-4 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors ring-1 ring-fuchsia-500/20">
                        <Layout className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white">Phaser 3 Engine</h3>
                    <p className="text-sm text-slate-400 mt-2">Responsive Web App (JS)</p>
                    <p className="text-xs text-slate-500 mt-1">Immersive pixel-art rendering & physics</p>
                </div>

                {/* Step 2: Backend */}
                <div className="bg-white/5 p-6 rounded-xl shadow-sm border border-white/5 text-center relative group hover:-translate-y-1 transition-transform backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors ring-1 ring-purple-500/20">
                        <Server className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white">FastAPI & LangGraph</h3>
                    <p className="text-sm text-slate-400 mt-2">Python Orchestration</p>
                    <p className="text-xs text-slate-500 mt-1">Async workflow management</p>
                </div>

                {/* Step 3: Intelligence */}
                <div className="bg-white/5 p-6 rounded-xl shadow-sm border border-white/5 text-center relative group hover:-translate-y-1 transition-transform backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto bg-indigo-500/10 rounded-full flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors ring-1 ring-indigo-500/20">
                        <BrainCircuit className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white">Google Gemini</h3>
                    <p className="text-sm text-slate-400 mt-2">Cognitive Core</p>
                    <p className="text-xs text-slate-500 mt-1">Multimodal context & agent personas</p>
                </div>

                {/* Step 4: Data */}
                <div className="bg-white/5 p-6 rounded-xl shadow-sm border border-white/5 text-center relative group hover:-translate-y-1 transition-transform backdrop-blur-sm">
                    <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors ring-1 ring-blue-500/20">
                        <Database className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-white">MongoDB Atlas</h3>
                    <p className="text-sm text-slate-400 mt-2">Cloud Persistence</p>
                    <p className="text-xs text-slate-500 mt-1">Secure user profiles & game state</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};