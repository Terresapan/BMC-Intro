
import React from 'react';
import { AGENTS } from '../constants';

export const AgentShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative" id="agents">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-purple-900/10 to-brand-dark pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 uppercase tracking-widest mb-4">Meet the Locals</h2>
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-pixel leading-tight">
            The Business Experts
          </p>
          <p className="mt-6 text-lg text-slate-400 font-light">
            Nine specialized AI agents live in the town. They don't just chat; they consult based on deep business theory and your uploaded data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS.map((agent) => (
            <div 
              key={agent.name} 
              className="flex flex-col rounded-2xl border border-white/5 bg-white/5 p-6 shadow-sm hover:shadow-lg hover:shadow-purple-900/20 hover:-translate-y-1 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${agent.color}`}>
                  {agent.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white group-hover:text-purple-400 transition-colors">{agent.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{agent.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
