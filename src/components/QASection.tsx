"use client";

import React, { useState } from 'react';
import { QA_CONTENT } from '../constants';
import { ChevronDown, Circle } from 'lucide-react';

export const QASection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5" id="qa">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-widest mb-4">Strategic Framework</h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-pixel leading-relaxed mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">Manifesto</span>
          </p>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Our core beliefs about democratizing strategy, human agency, and the future of AI-assisted entrepreneurship.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {QA_CONTENT.map((item, index) => (
            <div 
              key={index} 
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                ? 'border-fuchsia-500/50 bg-slate-900/60 shadow-lg shadow-fuchsia-500/10' 
                : 'border-white/5 bg-slate-900/20 hover:border-white/20 hover:bg-slate-900/40'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    openIndex === index 
                    ? 'bg-fuchsia-500 text-white' 
                    : 'bg-white/5 text-slate-400 group-hover:text-fuchsia-400'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${
                    openIndex === index ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {item.question}
                  </h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-fuchsia-400' : ''}`} />
              </button>

              <div 
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 border-t border-white/5 mt-0">
                    <div className="text-slate-300 leading-relaxed text-lg font-light space-y-4 pt-6">
                      {item.answer.split('\n').filter(line => line.trim() !== '').map((line, pIdx) => {
                        const trimmedLine = line.trim();
                        const isBullet = trimmedLine.startsWith('•');
                        
                        // Function to parse **bold** text
                        const renderFormattedText = (text: string) => {
                          const parts = text.split(/(\*\*.*?\*\*)/g);
                          return parts.map((part, index) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
                            }
                            return part;
                          });
                        };

                        if (isBullet) {
                          return (
                            <div key={pIdx} className="flex gap-4 items-start pl-2 py-1">
                              <div className="mt-2 text-fuchsia-500">
                                <Circle className="w-2 h-2 fill-current shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                              </div>
                              <p className="opacity-90 flex-1">
                                {renderFormattedText(trimmedLine.substring(1).trim())}
                              </p>
                            </div>
                          );
                        }
                        
                        return (
                          <p key={pIdx} className="opacity-90 mb-4 last:mb-0">
                            {renderFormattedText(trimmedLine)}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
