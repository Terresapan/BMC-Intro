"use client";

import React, { useState } from 'react';
import { AGENTS } from '../constants';
import { X, MessageCircle } from 'lucide-react';

// Position hints for where each agent's building is on the map (percentages)
const AGENT_POSITIONS: Record<string, { top: string; left: string }> = {
  "Key Partners": { top: "25%", left: "8%" },
  "Key Activities": { top: "45%", left: "12%" },
  "Key Resources": { top: "65%", left: "8%" },
  "Cost Structure": { top: "85%", left: "25%" },
  "Value Propositions": { top: "45%", left: "42%" },
  "Customer Relationships": { top: "25%", left: "72%" },
  "Channels": { top: "45%", left: "78%" },
  "Customer Segments": { top: "65%", left: "72%" },
  "Revenue Streams": { top: "85%", left: "65%" },
};

export const AgentShowcase: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<typeof AGENTS[0] | null>(null);
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden" id="agents">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-purple-900/10 to-brand-dark pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-widest mb-4">Explore the Town</h2>
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl font-pixel leading-relaxed mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">Business Experts</span>
          </p>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            Nine specialized AI agents, each mastering a different part of your business model—hover or click the buildings to meet them.
          </p>
        </div>

        {/* Town Map */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Map Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20">
            <img 
              src="/town-map.png" 
              alt="BMC Town Map - Click buildings to meet the AI agents"
              className="w-full h-auto"
            />
            
            {/* Interactive Hotspots */}
            {AGENTS.map((agent) => {
              const position = AGENT_POSITIONS[agent.role];
              if (!position) return null;
              
              return (
                <button
                  key={agent.name}
                  onClick={() => setSelectedAgent(agent)}
                  onMouseEnter={() => setHoveredAgent(agent.name)}
                  onMouseLeave={() => setHoveredAgent(null)}
                  className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full 
                    transition-all duration-300 cursor-pointer
                    ${hoveredAgent === agent.name 
                      ? 'bg-fuchsia-500/40 ring-2 ring-fuchsia-400 scale-125' 
                      : 'bg-white/10 hover:bg-fuchsia-500/30 ring-1 ring-white/20'
                    }
                  `}
                  style={{ top: position.top, left: position.left }}
                  aria-label={`Meet ${agent.name}, expert in ${agent.role}`}
                >
                  <span className="text-xl">{agent.icon}</span>
                  
                  {/* Tooltip on hover */}
                  {hoveredAgent === agent.name && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 
                      bg-slate-900/95 backdrop-blur-sm rounded-lg border border-white/10
                      whitespace-nowrap text-sm z-20 shadow-xl
                      motion-safe:animate-float-fast"
                    >
                      <p className="font-bold text-white">{agent.name}</p>
                      <p className="text-xs text-slate-400">{agent.role}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:block">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-xl border border-white/10 p-4 shadow-xl max-h-[500px] overflow-y-auto">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-bold">All Agents</p>
              <div className="space-y-1">
                {AGENTS.map((agent) => (
                  <button
                    key={agent.name}
                    onClick={() => setSelectedAgent(agent)}
                    onMouseEnter={() => setHoveredAgent(agent.name)}
                    onMouseLeave={() => setHoveredAgent(null)}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg w-full text-left transition-colors
                      ${hoveredAgent === agent.name || selectedAgent?.name === agent.name
                        ? 'bg-fuchsia-500/20 text-white' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="text-sm">{agent.icon}</span>
                    <span className="text-xs truncate max-w-[100px]">{agent.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agent Cards Grid (fallback/mobile) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AGENTS.map((agent) => (
            <button 
              key={agent.name}
              onClick={() => setSelectedAgent(agent)}
              className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] 
                hover:bg-white/[0.05] hover:border-fuchsia-500/30 transition-all text-left"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${agent.color}`}>
                {agent.icon}
              </div>
              <div>
                <h3 className="font-bold text-white">{agent.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{agent.role}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Agent Detail Modal */}
        {selectedAgent && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm"
            onClick={() => setSelectedAgent(null)}
          >
            <div 
              className="relative max-w-lg w-full bg-slate-900 rounded-2xl border border-white/10 
                shadow-2xl shadow-purple-900/30 p-8 motion-safe:animate-float-fast"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedAgent(null)}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-start gap-6">
                <div className={`flex h-20 w-20 items-center justify-center rounded-2xl text-4xl ${selectedAgent.color} shadow-lg`}>
                  {selectedAgent.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedAgent.name}</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-fuchsia-400 mb-4">{selectedAgent.role}</p>
                  <p className="text-slate-300 leading-relaxed">{selectedAgent.description}</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Sample Conversation</p>
                    <p className="text-sm text-slate-300 italic">
                      "Let me help you think through your {selectedAgent.role.toLowerCase()}. 
                      What makes your approach different from competitors?"
                    </p>
                  </div>
                </div>
              </div>

              <button 
                className="mt-6 w-full py-3 px-6 bg-gradient-to-r from-fuchsia-600 to-purple-600 
                  hover:from-fuchsia-500 hover:to-purple-500 rounded-xl font-semibold text-white
                  shadow-lg shadow-purple-900/30 transition-all"
                onClick={() => window.open('https://bmc-ui-635390037922.us-central1.run.app/', '_blank')}
              >
                Talk to {selectedAgent.name.split(' ')[0]}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
