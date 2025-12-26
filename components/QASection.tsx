
import React from 'react';
import { QA_CONTENT } from '../constants';

export const QASection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden" id="qa">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-fuchsia-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-400 uppercase tracking-[0.2em] mb-4">Strategic Framework</h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-white font-pixel leading-tight">
            The Manifesto
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-fuchsia-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {QA_CONTENT.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-start group p-8 rounded-3xl border border-white/5 hover:border-fuchsia-500/20 transition-all duration-500 bg-slate-900/20 backdrop-blur-sm ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 text-fuchsia-400 group-hover:from-fuchsia-500 group-hover:to-indigo-500 group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-fuchsia-500/20">
                  <item.icon className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-fuchsia-300 transition-colors flex items-center gap-3">
                  <span className="text-slate-600 font-mono text-sm">0{index + 1}</span>
                  {item.question}
                </h3>
                <div className="text-slate-300 leading-relaxed text-lg font-light whitespace-pre-wrap space-y-4">
                  {item.answer.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="opacity-90 group-hover:opacity-100 transition-opacity">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
