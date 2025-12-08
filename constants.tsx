import { Agent, Persona } from './types';
import { 
  Map, 
  Users, 
  Brain, 
  FileText, 
  ShieldCheck, 
  Cpu 
} from 'lucide-react';

export const AGENTS: Agent[] = [
  {
    name: "Steven Segments",
    role: "Customer Segments",
    description: "Analytical market researcher. Helps identify target nuances.",
    icon: "👥",
    color: "bg-blue-100 text-blue-800"
  },
  {
    name: "Victor Value",
    role: "Value Propositions",
    description: "Creative problem-solver. Focuses on the 'why' and 'what'.",
    icon: "🎁",
    color: "bg-red-100 text-red-800"
  },
  {
    name: "Chloe Channels",
    role: "Channels",
    description: "Strategic distribution expert. Plans how to reach customers.",
    icon: "🚚",
    color: "bg-green-100 text-green-800"
  },
  {
    name: "Rita Relations",
    role: "Customer Relationships",
    description: "Warm relationship specialist. Designs retention and loyalty strategies.",
    icon: "❤️",
    color: "bg-pink-100 text-pink-800"
  },
  {
    name: "Ryan Revenue",
    role: "Revenue Streams",
    description: "Numbers-oriented financial strategist. Maximizes income potential.",
    icon: "💰",
    color: "bg-yellow-100 text-yellow-800"
  },
  {
    name: "Rebecca Resources",
    role: "Key Resources",
    description: "Practical operations expert. Identifies essential assets.",
    icon: "🏗️",
    color: "bg-slate-100 text-slate-800"
  },
  {
    name: "Alex Activities",
    role: "Key Activities",
    description: "Efficiency-minded process specialist. Defines core workflows.",
    icon: "⚙️",
    color: "bg-orange-100 text-orange-800"
  },
  {
    name: "Parker Partners",
    role: "Key Partnerships",
    description: "Network-savvy business developer. Connects with suppliers and allies.",
    icon: "🤝",
    color: "bg-indigo-100 text-indigo-800"
  },
  {
    name: "Carlos Costs",
    role: "Cost Structure",
    description: "Pragmatic financial analyst. Detailed breakdown of expenses.",
    icon: "📉",
    color: "bg-gray-100 text-gray-800"
  }
];

export const PERSONAS: Persona[] = [
  {
    title: "The Aspiring Entrepreneur",
    description: "Has a great idea but struggles with structure.",
    needs: "Needs guidance, examples, and a roadmap."
  },
  {
    title: "The Business Student",
    description: "Learning the ropes of strategy.",
    needs: "Needs an engaging way to practice without boring textbooks."
  },
  {
    title: "The Corporate Strategist",
    description: "Needs a fresh perspective for new product lines.",
    needs: "Structured brainstorming and team alignment."
  },
  {
    title: "Consulting Firms",
    description: "Want to enhance and scale client services.",
    needs: "Automated initial strategy sessions and consistent advice."
  }
];

export const FEATURES = [
  {
    title: "Interactive Town",
    description: "Explore a pixel-art RPG world. Walk around, find buildings, and discover experts.",
    icon: Map
  },
  {
    title: "Personalized Agents",
    description: "Agents know who you are. They address you by name and tailor advice to your specific challenges.",
    icon: Users
  },
  {
    title: "Multimodal Intelligence",
    description: "Upload PDFs and Images. Agents can 'see' your sketches and read your reports.",
    icon: FileText
  },
  {
    title: "Expert Consultants",
    description: "Nine specialized AI agents representing every building block of the Business Model Canvas.",
    icon: Brain
  },
  {
    title: "Smart Security",
    description: "Token-based auth and strict data isolation ensure your strategy remains confidential.",
    icon: ShieldCheck
  },
  {
    title: "Modern Stack",
    description: "Built with Phaser 3, FastAPI, LangGraph, and Google Gemini for top-tier performance.",
    icon: Cpu
  }
];