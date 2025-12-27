
import { Agent, QAItem, Feature, Persona } from './types';
import { 
  Info,
  AlertTriangle,
  Zap,
  GraduationCap,
  LineChart,
  Scale,
  Flag,
  Wallet,
  Lightbulb,
  Brain,
  Gamepad2,
  Sparkles,
  Users,
  FileDown
} from 'lucide-react';

export const FEATURES: Feature[] = [
  {
    title: "Insights You&apos;d Never Ask For",
    description: "The Canvas Advisor proactively surfaces cross-block connections — like a real consultant connecting the dots across your entire business model.",
    icon: Lightbulb,
    color: "from-fuchsia-500 to-purple-600",
    highlight: true
  },
  {
    title: "It Remembers Everything",
    description: "Pick up where you left off. Our 'Shared Living Context' means all nine experts remember your progress and build on previous conversations.",
    icon: Brain,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Learning Through Play",
    description: "A Phaser 3 pixel-art RPG world transforms strategy planning into an engaging adventure — reducing cognitive load and increasing retention.",
    icon: Gamepad2,
    color: "from-indigo-500 to-blue-600"
  },
  {
    title: "Trained on Your Business",
    description: "Upload PDFs, images, or notes. Gemini multimodal AI grounds every response in YOUR specific business data — not generic templates.",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "You&apos;re Always in Control",
    description: "Proactive suggestions are staged [SYS], not auto-applied. You confirm or dismiss each insight — the AI advises, never decides.",
    icon: Users,
    color: "from-cyan-500 to-teal-600"
  },
  {
    title: "One-Click Strategy Export",
    description: "Download a professional PDF of your complete Business Model Canvas, automatically populated with strategic points from your sessions.",
    icon: FileDown,
    color: "from-teal-500 to-green-600"
  }
];

export const PERSONAS: Persona[] = [
  {
    title: "The First-Time Founder",
    description: "From idea to investor-ready in weeks, not months.",
    stat: "90%",
    statLabel: "Woman-Owned",
    color: "border-fuchsia-500/30 hover:border-fuchsia-500"
  },
  {
    title: "The Bootstrapped Team",
    description: "No budget for $500/hr consultants? We've got you covered.",
    stat: "60%",
    statLabel: "Black-Owned",
    color: "border-purple-500/30 hover:border-purple-500"
  },
  {
    title: "The Nonprofit Accelerator",
    description: "Scale your impact with AI-assisted coaching for your cohorts.",
    stat: "24/7",
    statLabel: "Available",
    color: "border-indigo-500/30 hover:border-indigo-500"
  }
];

export const AGENTS: Agent[] = [
  {
    name: "Steven Segments",
    role: "Customer Segments",
    description: "Analytical market researcher. Helps identify target nuances.",
    icon: "👥",
    color: "bg-blue-500/10 text-blue-300 ring-1 ring-blue-500/20"
  },
  {
    name: "Victor Value",
    role: "Value Propositions",
    description: "Creative problem-solver. Focuses on the 'why' and 'what'.",
    icon: "🎁",
    color: "bg-red-500/10 text-red-300 ring-1 ring-red-500/20"
  },
  {
    name: "Chloe Channels",
    role: "Channels",
    description: "Strategic distribution expert. Plans how to reach customers.",
    icon: "🚚",
    color: "bg-green-500/10 text-green-300 ring-1 ring-green-500/20"
  },
  {
    name: "Rita Relations",
    role: "Customer Relationships",
    description: "Warm relationship specialist. Designs retention and loyalty strategies.",
    icon: "❤️",
    color: "bg-pink-500/10 text-pink-300 ring-1 ring-pink-500/20"
  },
  {
    name: "Ryan Revenue",
    role: "Revenue Streams",
    description: "Numbers-oriented financial strategist. Maximizes income potential.",
    icon: "💰",
    color: "bg-yellow-500/10 text-yellow-300 ring-1 ring-yellow-500/20"
  },
  {
    name: "Rebecca Resources",
    role: "Key Resources",
    description: "Practical operations expert. Identifies essential assets.",
    icon: "🏗️",
    color: "bg-slate-500/10 text-slate-300 ring-1 ring-slate-500/20"
  },
  {
    name: "Alex Activities",
    role: "Key Activities",
    description: "Efficiency-minded process specialist. Defines core workflows.",
    icon: "⚙️",
    color: "bg-orange-500/10 text-orange-300 ring-1 ring-orange-500/20"
  },
  {
    name: "Parker Partners",
    role: "Key Partnerships",
    description: "Network-savvy business developer. Connects with partners and allies.",
    icon: "🤝",
    color: "bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20"
  },
  {
    name: "Carlos Costs",
    role: "Cost Structure",
    description: "Pragmatic financial analyst. Detailed breakdown of expenses.",
    icon: "📉",
    color: "bg-gray-500/10 text-gray-300 ring-1 ring-gray-500/20"
  }
];

export const QA_CONTENT: QAItem[] = [
  {
    question: "Summary of the Idea",
    answer: "**BMC Town** is a gamified, AI-powered platform designed to democratize high-level business strategy for under-resourced entrepreneurs. Built within an engaging pixel-art RPG world, the platform features nine specialized AI agents—such as 'Victor Value' and 'Ryan Revenue'—who act as persistent, 24/7 business consultants. These agents guide users through the Business Model Canvas (BMC) framework, providing personalized advice grounded in the user's specific business data.\n\n What sets BMC Town apart is its **Proactive Agent Architecture**: a 'Canvas Advisor' that automatically surfaces cross-canvas insights without being asked. For example, when discussing customer segments, the system proactively suggests relevant channel strategies—mimicking how a real consultant connects the dots across business areas. Combined with **Gemini search grounding**, **multimodal AI** (processing text, PDFs, and images), and **'Shared Living Context'** that remembers user progress across sessions, BMC Town bridges the gap between limited human-led consulting and the need for ongoing, expert-level strategic refinement.",
    icon: Info
  },
  {
    question: "The Problem",
    answer: "Under-resourced small business owners—specifically the **90% woman-owned** and **60% black-owned** businesses supported by TAP—often lack affordable access to high-impact strategic consulting. While nonprofit programs provide vital human-led sessions, these resources are finite; **support often ceases once the session ends**. Entrepreneurs require a low-barrier, persistent way to practice and validate their business models without the constant presence of a volunteer consultant.\n\nExisting strategy tools are often **dry, form-based, and siloed**—they don't connect insights across different parts of the business model the way a skilled consultant would. BMC Town solves this by providing an 'always-on' AI advisory system that scales the expertise of a professional consultant to thousands of users simultaneously. Its **Proactive Canvas Advisor** goes beyond reactive Q&A—it actively identifies cross-canvas implications and stages them for user confirmation, ensuring business owners don't miss critical strategic connections.",
    icon: AlertTriangle
  },
  {
    question: "Our Approach",
    answer: "BMC Town utilizes a **Multi-Agent Architecture** powered by Google Gemini and LangGraph to deliver high-impact mentorship. Unlike generic chatbots, our approach features:\n\n• **Pre-configured Personalization:** Admins pre-load business profiles, enabling AI experts to greet users by name and engage with their specific strategic context.\n• **Shared Living Context:** Memory extraction runs inside each workflow, persisting business insights in real-time. This ensures all nine experts 'remember' and build upon a user's progress.\n• **Proactive Canvas Advisor:** Our system actively generates cross-canvas suggestions. When a user discusses 'enterprise customers', the Advisor surfaces implications (e.g., 'Consider dedicated account management') for the next relevant expert.\n• **Strategy Synthesis & Export:** Users preview progress in real-time and download a professional PDF of their Business Model Canvas, automatically populated with strategic points.\n\n This personalized, proactive experience transforms professional-grade strategy from a scarce resource into an accessible, persistent utility—allowing entrepreneurs to focus on action rather than administrative overhead.",
    icon: Zap
  },
  {
    question: "Learning Science & Design",
    answer: "BMC Town leverages proven learning science and UX principles:\n\n• **Scaffolding & Gamification:** A Phaser 3-powered virtual world transforms static strategy planning into an interactive journey, reducing cognitive load. Each agent acts as a Cognitive Apprentice.\n• **Zone of Proximal Development:** The Proactive Canvas Advisor identifies connections users might miss on their own, guiding learners just beyond their current understanding.\n• **Continuity of Learning:** The 'Shared Living Context' acknowledges prior progress, reinforcing concepts across sessions and creating a coherent learning narrative rather than isolated interactions.\n• **Learner Agency & Metacognition:** Users maintain full authority. Proactive suggestions are staged (marked [SYS]) rather than auto-applied—users must explicitly confirm or reject them, encouraging critical reflection.\n• **Non-Intrusive Feedback:** System suggestions appear as dismissible tooltips, respecting user attention while surfacing insights at the right moment.",
    icon: GraduationCap
  },
  {
    question: "Measuring Impact",
    answer: "We aim to see a **50% boost in user engagement** and **200% time savings** for founders refining their models. Success will be measured through:\n\n• **Business Literacy Gains:** Tracking completion of all nine BMC blocks. We measure how often cross-canvas suggestions lead to blocks users wouldn't have completed independently.\n• **Proactive Value Metrics:** Monitoring [SYS] suggestion acceptance rates. High confirmation rates indicate the AI is surfacing genuinely useful connections.\n• **Consulting Scalability:** Measuring reduction in wait times for human consultants as the AI handles routine strategic questions and synthesis.\n• **Quality Assurance:** Utilizing LangSmith to monitor Hallucination Detection, Memory Extraction Accuracy, and Document grounding verification.\n• **Persistence & Engagement:** Analyzing session frequency, duration, and return rates within the virtual town—comparing against traditional template-based tools to verify long-term engagement.",
    icon: LineChart
  },
  {
    question: "Fairness & Inclusion",
    answer: "Designed intentionally for entrepreneurs traditionally excluded from expensive consulting networks, BMC Town promotes inclusion by:\n\n• **Democratizing Strategic Insight:** Bringing professional cross-business connection identifying skills to everyone via the Proactive Canvas Advisor.\n• **Preserving User Agency:** All AI suggestions are staged, not applied. Users maintain full authority over their business narrative—the AI advises, never decides.\n• **Multimodal Accessibility:** Users communicate via sketches, PDFs, or verbal notes, supporting diverse learning styles and training backgrounds.\n• **Contextual Personalization:** Agents address users by name and acknowledge specific business challenges, respecting the individual's context.\n• **Identity Safety:** Automated evaluation pipelines ensure AI agents never break character or provide biased responses.",
    icon: Scale
  },
  {
    question: "Success Plan (Year 1)",
    answer: "Within the next year, key milestones include:\n\n• **Month 3:** Complete pilot testing with 50 businesses; validate the **Proactive Canvas Advisor** and refine cross-canvas logic.\n• **Month 6:** Launch the **Cohort Intelligence Layer**. Aggregate anonymized patterns to provide community-wisdom recommendations (e.g., '87% of B2B SaaS founders in your cohort use Direct Sales').\n• **Month 9:** Implement **Event-Driven Notifications**. Agents proactively reach out (via email or in-app) when they detect strategic opportunities between sessions.\n• **Month 12:** Achieve 70%+ satisfaction rate. Target: 500+ completed, validated Business Model Canvases with measurable reduction in human consultant wait times.",
    icon: Flag
  },
  {
    question: "Budget & Funding ($50,000)",
    answer: "If selected for the **$50,000 award**, funds will be allocated as follows:\n\n• **Technology & Infrastructure (25% / $12,500):** Scaling Google Cloud Run and MongoDB Atlas for 2,000+ concurrent users.\n• **Research & User Testing (25% / $12,500):** Deep-dive feedback sessions with black-owned and woman-owned businesses to validate proactive suggestion quality.\n• **AI Development (35% / $17,500):** Building the Cohort Intelligence Layer, model fine-tuning for improved expert personas, and enhancing the LangSmith evaluation pipeline.\n• **Asset Creation & Accessibility (15% / $7,500):** Expanding the Town environment, mobile-responsive design, onboarding tutorials, and shareable Canvas exports.",
    icon: Wallet
  }
];
