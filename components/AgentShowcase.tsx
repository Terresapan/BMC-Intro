import React from 'react';
import { AGENTS } from '../constants';

export const AgentShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="agents">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600 uppercase tracking-wide">Meet the Locals</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            The Business Experts
          </p>
          <p className="mt-6 text-lg text-slate-600">
            Nine specialized AI agents live in the town. They don't just chat; they consult based on deep business theory and your uploaded data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AGENTS.map((agent) => (
            <div 
              key={agent.name} 
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${agent.color}`}>
                  {agent.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{agent.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{agent.role}</p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};