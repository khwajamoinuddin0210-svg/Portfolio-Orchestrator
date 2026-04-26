import {
  Bot,
  BrainCircuit,
  Compass,
  Github,
  Linkedin,
  Mail,
  Network,
  Orbit,
  Radar,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ToolItem = {
  name: string;
  description: string;
  signal: string;
  icon: LucideIcon;
};

export type NewsItem = {
  title: string;
  source: string;
  date: string;
  summary: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  href?: string;
  tags: string[];
};

export type BenchmarkItem = {
  label: string;
  value: string;
  source: string;
};

export const profile = {
  name: "Khwaja Moinuddin Shaik",
  role: "Data Analyst / AI Enthusiast / AI Orchestrator",
  tagline:
    "I build practical workflows with data, automation, and AI tools to support research, decisions, and productivity.",
  location: "Dublin, Ireland",
  // Update these links here if your public profiles or contact email change.
  links: {
    github: "https://github.com/khwajamoinuddin0210-svg",
    linkedin: "https://www.linkedin.com/in/khwaja-moinuddin-shaik-30542a318",
    email: "khwajamoinuddin0210@gmail.com"
  }
};

export const about = {
  title: "AI-focused analyst, building useful workflows.",
  description:
    "I am Khwaja Moinuddin Shaik, a Dublin-based data analyst and AI enthusiast exploring how modern AI tools can make work smarter.",
  paragraphs: [
    "I combine data analysis with hands-on AI experimentation, working across tools like SQL, Excel, Power BI, Claude, ChatGPT, Gemini, Perplexity, and Google AI products.",
    "My focus is simple: explore the right tools, orchestrate them into clear workflows, and build practical systems that help people research, decide, automate, and create with less friction."
  ],
  stats: [
    { label: "Base", value: "Dublin" },
    { label: "Focus", value: "AI workflows" },
    { label: "Mode", value: "Explore, orchestrate, build" }
  ]
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about", icon: Compass },
  { label: "Stack", href: "#stack", icon: BrainCircuit },
  { label: "Projects", href: "#projects", icon: Orbit },
  { label: "News", href: "#news", icon: Radar },
  { label: "Contact", href: "#contact", icon: Mail }
];

export const actionLinks = [
  { label: "GitHub", href: profile.links.github, icon: Github },
  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin },
  { label: "Contact", href: "#contact", icon: Mail }
];

export const modelWatch = {
  label: "Top model watch",
  model: "Claude Opus 4.7 Thinking",
  category: "General text leaderboard",
  updated: "Updated Apr 26, 2026",
  note:
    "Public leaderboards move quickly, so this highlights the current general leader and shows coding benchmarks separately.",
  sourceHref: "https://lmarena.ai/leaderboard/",
  benchmarks: [
    {
      label: "LMArena Text Arena",
      value: "#1 overall",
      source: "claude-opus-4-7-thinking"
    },
    {
      label: "Hard prompts",
      value: "#3",
      source: "LMArena Text Arena"
    },
    {
      label: "Coding category",
      value: "#1",
      source: "LMArena Text Arena"
    },
    {
      label: "SWE-bench Verified",
      value: "Claude Opus 4.6 leads at 83.7%",
      source: "Coding-specific benchmark"
    }
  ] satisfies BenchmarkItem[]
};

export const aiTools: ToolItem[] = [
  {
    name: "Claude",
    description: "Long-form reasoning, critique, and workflow design.",
    signal: "Reasoning",
    icon: Sparkles
  },
  {
    name: "ChatGPT / GPT",
    description: "Rapid prototyping, coding support, and agentic task loops.",
    signal: "Creation",
    icon: Bot
  },
  {
    name: "Gemini",
    description: "Research, multimodal exploration, and Google-native AI tests.",
    signal: "Multimodal",
    icon: BrainCircuit
  },
  {
    name: "Perplexity",
    description: "Source-aware discovery and fast comparison research.",
    signal: "Research",
    icon: Radar
  },
  {
    name: "Google AI Tools",
    description: "Notebook-style exploration, search experiments, and productivity flows.",
    signal: "Workspace",
    icon: Network
  },
  {
    name: "Automation Tools",
    description: "Connecting prompts, apps, data, and repeatable routines.",
    signal: "Systems",
    icon: Workflow
  },
  {
    name: "Prompt Engineering",
    description: "Shaping context, constraints, and evaluation loops.",
    signal: "Control",
    icon: Zap
  },
  {
    name: "AI Agents",
    description: "Testing delegated, multi-step workflows with practical guardrails.",
    signal: "Orchestration",
    icon: Orbit
  }
];

export const principles = [
  {
    title: "Explore",
    body: "Compare models, interfaces, and assumptions until the useful pattern appears."
  },
  {
    title: "Orchestrate",
    body: "Route the right tool to the right task and make the handoffs clear."
  },
  {
    title: "Build",
    body: "Turn experiments into lightweight workflows people can actually use."
  }
];

export const currentExperiments = [
  "Multi-model research loops",
  "Personal AI operating systems",
  "Agent-assisted content workflows",
  "Prompt evaluation patterns"
];

// Add real projects here later. The Projects section will render cards automatically.
export const projects: ProjectItem[] = [];

// Replace this mock list with data from a real API route or external AI/news API.
export const aiNews: NewsItem[] = [
  {
    title: "AI news feed module prepared",
    source: "Portfolio system",
    date: "Coming soon",
    summary:
      "This card uses the same shape a live feed can return: title, source, date, and summary."
  },
  {
    title: "API-ready placeholder",
    source: "Local config",
    date: "Draft",
    summary:
      "Connect a news provider later by swapping this config for a server component or API route."
  }
];
