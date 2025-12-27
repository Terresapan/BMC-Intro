"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Lightbulb, Loader2, MessageSquare, Zap } from 'lucide-react';
import { GenerateContentResponse } from "@google/genai";
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Sample questions for users to click
const SAMPLE_QUESTIONS = [
  "What makes BMC Town different?",
  "How does the Canvas Advisor work?",
  "Who are the 9 experts?",
  "What is Shared Living Context?",
];

export const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "👋 Welcome to BMC Town! I'm here to answer your questions.\n\nBMC Town helps entrepreneurs build business strategies through nine AI experts and our unique Proactive Canvas Advisor.\n\nWhat would you like to know?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSamples, setShowSamples] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setShowSamples(false);

    try {
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

      const streamResult = await streamChatResponse(textToSend, messages);
      
      let fullText = '';
      
      for await (const chunk of streamResult) {
        const c = chunk as GenerateContentResponse;
        const chunkText = c.text || '';
        fullText += chunkText;
        
        setMessages(prev => {
          const newHistory = [...prev];
          const lastMsg = newHistory[newHistory.length - 1];
          if (lastMsg.role === 'model' && lastMsg.isStreaming) {
            lastMsg.text = fullText;
          }
          return newHistory;
        });
      }

       setMessages(prev => {
        const newHistory = [...prev];
        const lastMsg = newHistory[newHistory.length - 1];
        if (lastMsg.role === 'model') {
            lastMsg.isStreaming = false;
        }
        return newHistory;
      });

    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I'm having trouble connecting. Please make sure the Gemini API key is configured." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSampleClick = (question: string) => {
    handleSend(question);
  };

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24" id="demo">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-brand-dark to-brand-dark"></div>
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
               linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
             `,
             backgroundSize: '30px 30px'
           }}>
      </div>
      
      <div className="absolute top-20 right-[15%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl motion-safe:animate-blob pointer-events-none"></div>
      <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl motion-safe:animate-blob animation-delay-2000 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-indigo-300 uppercase tracking-widest mb-4">Interactive Demo</h2>
          
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 font-pixel leading-relaxed">
            <span className="block">Learn About</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">BMC Town</span>
          </p>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ask me anything about our <span className="text-fuchsia-400 font-semibold">Proactive Canvas Advisor</span>, the <span className="text-purple-400 font-semibold">9 Business Experts</span>, or how BMC Town works!
          </p>
        </div>

        {/* Main Content - Chat First Layout */}
        <div className="max-w-5xl mx-auto">
          
          {/* Chat Interface - Full Width, Taller */}
          <div className="mb-12">
            <div className="relative group">
              {/* Pixelated glow border */}
              <div className="absolute -inset-[3px] bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-slate-950/90 backdrop-blur-xl border-2 border-white/10 overflow-hidden flex flex-col h-[750px] shadow-2xl"
                   style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}>
                
                {/* Chat Header */}
                <div className="p-5 border-b-2 border-white/10 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center"
                           style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-950 motion-safe:animate-pulse"></span>
                    </div>
                    <div>
                      <span className="font-bold text-white font-pixel text-sm">BMC Town Guide</span>
                      <p className="text-xs text-green-400">● Online</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-800/50 px-3 py-1.5 border border-slate-700/50"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))' }}>
                    Powered by Gemini
                  </span>
                </div>

                {/* Messages Area */}
                <div 
                  className="flex-1 overflow-y-auto p-6 space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                  ref={chatContainerRef}
                >
                  {messages.map((msg, index) => (
                    <div 
                      key={index} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {msg.role === 'model' && (
                        <div className="flex-shrink-0 mr-3 mt-1">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center"
                               style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      )}
                      
                      <div className={`max-w-[80%] relative ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-purple-900/30 p-4' 
                          : 'bg-slate-800/70 text-slate-200 border-2 border-slate-700/50 shadow-md p-4'
                      }`}
                      style={{ 
                        clipPath: msg.role === 'user' 
                          ? 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' 
                          : 'polygon(0 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                      }}>
                        <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.text}</p>
                        {msg.isStreaming && (
                          <span className="inline-block w-2 h-4 ml-1 bg-slate-400 align-middle"
                                style={{ 
                                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                                  animation: 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                                }}>
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Sample Questions */}
                  {showSamples && messages.length === 1 && (
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="w-4 h-4 text-yellow-400" />
                        <p className="text-sm text-slate-400 font-pixel">Quick Start:</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SAMPLE_QUESTIONS.map((question, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSampleClick(question)}
                            className="group relative text-left px-4 py-3 bg-white/5 hover:bg-fuchsia-500/20 border-2 border-white/10 hover:border-fuchsia-500/50 text-sm text-slate-300 hover:text-white transition-all duration-300"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                          >
                            <span className="relative z-10">{question}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/0 to-purple-500/0 group-hover:from-fuchsia-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-5 border-t-2 border-white/10 bg-slate-900/70">
                  <div className="flex gap-3">
                    <label htmlFor="chat-input" className="sr-only">Ask a question about BMC Town</label>
                    <div className="flex-1 relative">
                      <Input
                        id="chat-input"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about BMC Town..."
                        disabled={loading}
                        className="bg-slate-800/80 text-white border-2 border-white/20 focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:border-purple-500 placeholder:text-slate-500 h-12 text-base"
                      />
                    </div>
                    <Button 
                      onClick={() => handleSend()}
                      disabled={loading || !input.trim()}
                      size="icon"
                      aria-label="Send message"
                      className="h-12 w-12 bg-gradient-to-r from-fuchsia-600 to-purple-600 hover:from-fuchsia-500 hover:to-purple-500 disabled:opacity-50 shadow-lg"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
                    >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Info Cards - Compact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card - Proactive Feature */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 border-2 border-fuchsia-500/30 p-6 hover:border-fuchsia-500/60 transition-all duration-300"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center"
                       style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 font-pixel text-sm">Proactive Insights</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">
                    Our Canvas Advisor surfaces connections you'd never think to ask about—marked with <span className="text-fuchsia-400 font-mono text-xs bg-fuchsia-500/20 px-2 py-0.5">[SYS]</span>
                  </p>
                  <p className="text-xs text-slate-400 italic">
                    "Your enterprise focus suggests dedicated account management..."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card - Memory */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-2 border-purple-500/30 p-6 hover:border-purple-500/60 transition-all duration-300"
                 style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center"
                       style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)' }}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 font-pixel text-sm">Shared Memory</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    All nine experts remember your progress and build on previous conversations—creating a coherent learning experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};