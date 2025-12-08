import React from 'react';
import { FEATURES, PERSONAS } from '../constants';

export const FeatureGrid: React.FC = () => {
  return (
    <div className="bg-brand-dark py-24 sm:py-32 relative overflow-hidden" id="features">
       
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Core Features */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Why Move to Town?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Democratizing Business Strategy
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-400">
            We replace dry spreadsheets with a living world. Engage with your strategy 
            through movement, exploration, and conversation.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="relative pl-16 group">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Target Audience / Personas */}
        <div className="mt-32 border-t border-white/10 pt-24">
           <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">Built For You</h2>
            <p className="mt-4 text-slate-400">Whether you're starting up or scaling up.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERSONAS.map((p, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all group backdrop-blur-sm">
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">{p.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{p.description}</p>
                <div className="text-xs font-semibold text-purple-300 bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
                  Goal: {p.needs}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};