import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Loader2 } from 'lucide-react';
import { GenerateContentResponse } from "@google/genai";
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to Business Model Canvas Town! I'm the Town Greeter. Are you an entrepreneur, a student, or just passing through?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Use scrollTop to scroll the container internally without jumping the whole page
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Create a temporary model message for streaming
      setMessages(prev => [...prev, { role: 'model', text: '', isStreaming: true }]);

      const streamResult = await streamChatResponse(userMsg.text, messages);
      
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

       // Finalize
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
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, the town is currently experiencing a communications blackout (API Error). Please try again later." }]);
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

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 min-h-screen flex items-center" id="demo">
      
      {/* --- Background Effects (Echoing Hero Section) --- */}
      
      {/* 1. Base Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900 via-brand-dark to-brand-dark"></div>

      {/* 2. Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
      
      {/* 3. Glowing Animated Blobs */}
      <div className="absolute top-10 right-[20%] w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob pointer-events-none"></div>
      <div className="absolute bottom-10 left-[10%] w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Floating Particles */}
      <div className="absolute top-1/4 right-20 w-3 h-3 bg-fuchsia-400/20 rounded-full animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-1/3 left-32 w-4 h-4 bg-indigo-400/20 rounded-full animate-float-medium pointer-events-none"></div>
      <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-float-fast pointer-events-none"></div>

      {/* --- Content --- */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-6 backdrop-blur-sm border border-indigo-500/10">
              <Sparkles className="w-3 h-3" /> Live Demo
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6 drop-shadow-lg">
              Talk to the Town
            </h2>
            <p className="text-lg text-slate-300 mb-8 drop-shadow-md">
              Experience the power of our conversational agents. Ask the Greeter about the different districts, or describe a business problem you have.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-md rounded-lg border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                <div className="bg-fuchsia-500/20 p-2 rounded-lg text-fuchsia-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Context Aware</h4>
                  <p className="text-sm text-slate-400 mt-1">Agents remember who you are and adapt to your specific business niche.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-800/40 backdrop-blur-md rounded-lg border border-slate-700/50 hover:bg-slate-800/60 transition-colors">
                <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Distinct Personalities</h4>
                  <p className="text-sm text-slate-400 mt-1">From "Steven Segments" to "Carlos Costs", every interaction is unique.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Chat Interface */}
          <div className="bg-slate-950/70 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px] ring-1 ring-white/5">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
              </div>
              <span className="text-xs font-mono text-slate-400">Town_Greeter_v1.2.exe</span>
            </div>

            {/* Messages Area */}
            <div 
              className="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-sm scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
              ref={chatContainerRef}
            >
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-lg p-3 ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-purple-900/20' 
                      : 'bg-slate-800/80 text-slate-200 border border-slate-700 shadow-sm'
                  }`}>
                    <p className="whitespace-pre-wrap">{msg.text}</p>
                    {msg.isStreaming && <span className="inline-block w-2 h-4 ml-1 bg-slate-400 animate-pulse align-middle"></span>}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-slate-900/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Say hello to the greeter..."
                  disabled={loading}
                  className="w-full bg-slate-800/50 text-white rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 border border-white/10 placeholder-slate-500 transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={loading || !input.trim()}
                  className="absolute right-2 top-2 p-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-purple-900/20"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest">Powered by Gemini 2.5 Flash</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};