export const PERSONAL_INFO = {
  name: "Davidson Chiemezuo",
  fullName: "Ahuruezenma Davidson Chiemezuo",
  title: "Agentic AI Developer",
  tagline: "Building intelligent systems, one agent at a time.",
  location: "Abuja, Nigeria",
  email: "derocton@gmail.com",
  phone: "+2349061505041",
  github: "https://github.com/DavidGaso1",
  linkedin: "https://linkedin.com/in/davidson-ahuruezenma-33a773294",
  summary: "Agentic AI Developer with 2+ years building production multi-agent systems and automation pipelines using Claude Code, n8n, and RAG architecture. Skilled in multi-LLM orchestration, vector-based retrieval systems, and production reliability engineering including retry logic, circuit breakers, and dual-channel alerting. Seeking a permanent remote role at an AI startup where I can architect and scale autonomous, tool-using AI systems.",
  bioShort: "I bridge AI innovation with data-driven automation. With a foundation in Sociology & Anthropology, I bring a unique human-centric lens to building intelligent systems that actually work for people.",
  avatar: "/profile.jpg",
  resumePdf: "/Ahuruezenma_Davidson_Chiemezuo_Resume.pdf",
  openTo: ["Remote (Permanent)", "AI Startups", "US Hours Compatible"]
};

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = {
  remote: [
    "Self-directed project ownership",
    "Asynchronous communication",
    "Client-facing requirements gathering",
    "Independent troubleshooting",
    "Cross-functional documentation",
    "Remote team collaboration"
  ],
  ai: [
    "Claude Code",
    "Multi-agent orchestration",
    "RAG systems",
    "Vector embeddings",
    "Prompt engineering",
    "Multi-LLM integration",
    "Model Context Protocol (MCP)",
    "LangChain / LangGraph",
    "CrewAI / AutoGen",
    "AI agent evaluation"
  ],
  tools: [
    "n8n",
    "Python",
    "SQL / PostgreSQL / MySQL",
    "Supabase",
    "AWS S3 / Management Console / CLI",
    "Git / GitHub",
    "REST API integration",
    "Webhooks"
  ],
  domain: [
    "Data governance (GDPR, NDPR, ISO 27001)",
    "Privacy Impact Assessments",
    "Technical documentation",
    "Workflow architecture",
    "Systems design",
    "Human-AI interaction"
  ]
};

export const EXPERIENCES = [
  {
    id: 1,
    role: "Freelance AI Automation Specialist",
    company: "Independent Contractor",
    clients: "Zenko Limited, Theldoforce, DGI Integrated Services",
    period: "2024 \u2013 Present",
    location: "Remote",
    type: "Current",
    description: "Sole technical owner delivering production automation systems for three independent clients across lead generation, security operations, and infrastructure monitoring.",
    achievements: [
      "Architected and deployed three independent production automation systems spanning lead generation, security operations, and AWS infrastructure monitoring as sole technical owner",
      "Productionized a reusable reliability framework across all builds incorporating automatic retry with exponential backoff, circuit-breaker pausing on repeated failures, and dual-channel alerting",
      "Orchestrated a personal multi-agent development environment coordinating Claude Code alongside complementary coding agents with shared configuration and cross-agent advisory protocols"
    ],
    tech: ["n8n", "Python", "Supabase", "AWS", "Claude Code"]
  },
  {
    id: 2,
    role: "Data Protection Officer & AI Data Governance Specialist",
    company: "ViZO Technology Limited",
    period: "April 2024 \u2013 Present",
    location: "Hybrid, Abuja",
    type: "Current",
    description: "Lead data protection strategy while architecting AI-powered knowledge management systems and operational automation workflows.",
    achievements: [
      "Architected a production RAG system integrating vector embeddings for semantic search across organizational knowledge bases",
      "Evaluated and implemented AI tools and automation workflows across operational functions, delivering adoption and ROI recommendations to leadership",
      "Designed and documented repeatable data governance and AI workflows aligned with NDPR, GDPR, and ISO 27001 standards",
      "Trained cross-functional teams on responsible AI tool use and prompt engineering practices"
    ],
    tech: ["Python", "LangChain", "Supabase", "n8n", "RAG"]
  },
  {
    id: 3,
    role: "AWS Cloud & Automation Intern",
    company: "DGI Integrated Services",
    period: "May 2023 \u2013 April 2024",
    location: "Remote",
    type: "Internship",
    description: "Built cloud infrastructure and automation workflows supporting enterprise data operations.",
    achievements: [
      "Automated cloud infrastructure provisioning and monitoring workflows using AWS Management Console and CLI",
      "Designed structured data ingestion pipelines supporting tooling and dataset versioning",
      "Deployed fault-tolerant, scalable AWS S3 storage architectures"
    ],
    tech: ["AWS S3", "AWS CLI", "CloudWatch", "n8n"]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Lead Generation & Personalization Automation",
    client: "Zenko Limited",
    description: "End-to-end lead capture and personalization pipeline for a DTC health and wellness brand. Website webhook to Excel backup to Python validation to Gemini personalization to Supabase to automated email delivery.",
    longDescription: "A comprehensive lead generation system that captures prospects from the Zenko website, validates and enriches data through Python processing, uses Google Gemini for personalized messaging, and delivers targeted emails via Supabase-triggered automation. Features production-grade reliability with 3x automatic retry, 30-second AI processing timeout with Telegram alerting, and circuit-breaker logic.",
    tech: ["n8n", "Python", "Google Gemini", "Supabase", "Google Drive", "Email API"],
    highlights: [
      "3x automatic retry with exponential backoff",
      "30-second AI processing timeout with Telegram alerting",
      "Circuit-breaker logic pausing ingestion during suspicious request volume",
      "Full audit trail via Excel backup before validation"
    ],
    category: "Automation",
    featured: true,
    github: null,
    image: "/projects/zenko-leads.png"
  },
  {
    id: 2,
    title: "Operations & Personnel Alert System",
    client: "Theldoforce (Security Services)",
    description: "Bi-directional operations automation distributing shift schedules, security alerts, and task assignments across Telegram, Gmail, and WhatsApp with AI-powered tiering.",
    longDescription: "A mission-critical operations system for a security services company that automates the distribution of shift schedules, security incident alerts, and task assignments across multiple channels (Telegram, Gmail, WhatsApp). Features an AI processing layer that tiers incoming updates by recipient role, ensuring relevant detail per team member rather than broadcast noise.",
    tech: ["n8n", "Python", "AI Model", "Supabase", "Telegram API", "Gmail API", "WhatsApp API"],
    highlights: [
      "AI-powered message tiering by recipient role",
      "Multi-channel distribution (Telegram, Gmail, WhatsApp)",
      "Dual-channel failure alerting with exact failed-step context",
      "Real-time personnel scheduling and alert management"
    ],
    category: "Automation",
    featured: true,
    github: null,
    image: "/projects/theldoforce-ops.png"
  },
  {
    id: 3,
    title: "AWS Infrastructure Error Monitoring",
    client: "DGI Integrated Services",
    description: "Real-time monitoring automation capturing AWS error signals via secured webhook, applying AI-assisted error classification, and pushing immediate Telegram alerts.",
    longDescription: "A fault-tolerant monitoring system that captures AWS infrastructure error signals through secured webhooks, applies AI-assisted error classification for intelligent alerting, and pushes immediate notifications to operations teams via Telegram. Reduced incident detection from manual log review to near real-time notification.",
    tech: ["AWS API", "n8n", "Python", "AI Model", "Supabase", "Telegram API"],
    highlights: [
      "Real-time AWS error signal capture via secured webhook",
      "AI-assisted error classification for intelligent alerting",
      "Proven reliability patterns: 3x retry, AI timeout, consecutive-failure circuit breaking",
      "Reduced incident detection from manual review to near real-time"
    ],
    category: "Infrastructure",
    featured: true,
    github: null,
    image: "/projects/aws-monitor.png"
  },
  {
    id: 4,
    title: "VIZO-RAG System",
    client: "ViZO Technology Limited",
    description: "Enterprise-grade Retrieval-Augmented Generation system featuring vector embeddings and semantic document search for organizational knowledge management.",
    longDescription: "A production RAG system built for ViZO Technologies that enables semantic search across organizational knowledge bases. Integrates vector embeddings for intelligent document retrieval and contextual response generation, supporting internal teams with instant access to institutional knowledge.",
    tech: ["Python", "LangChain", "OpenAI", "Supabase", "Vector Embeddings"],
    highlights: [
      "Vector-based semantic document search",
      "Integration with organizational knowledge bases",
      "Contextual response generation",
      "Production deployment with monitoring"
    ],
    category: "AI System",
    featured: false,
    github: "https://github.com/DavidGaso1/VIZO-RAG",
    image: "/projects/vizo-rag.png"
  },
  {
    id: 5,
    title: "AI Portfolio",
    description: "This portfolio \u2014 a modern, interactive showcase built with React, Vite, and TypeScript featuring WebGL shader backgrounds and 3D elements.",
    longDescription: "A modern, high-performance portfolio website featuring a custom WebGL matrix-rain shader background, 3D kinetic text helix, scroll-reveal animations, and terminal-style typing effects. Built to demonstrate front-end craftsmanship alongside AI engineering expertise.",
    tech: ["React", "TypeScript", "Vite", "WebGL", "Tailwind CSS"],
    highlights: [
      "Custom WebGL matrix-rain shader background",
      "Scroll-reveal animations throughout",
      "Terminal-style hacker text effects",
      "Optimized for AI startup job applications"
    ],
    category: "Web Development",
    featured: false,
    github: "https://github.com/DavidGaso1/davidson-s-ai-portfolio",
    image: "/projects/portfolio.png"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Claude Code 101",
    issuer: "Anthropic Education",
    year: "2026",
    category: "AI"
  },
  {
    title: "Introduction to Subagents",
    issuer: "Anthropic Education",
    year: "2026",
    category: "AI"
  },
  {
    title: "Introduction to Agent Skills",
    issuer: "Anthropic Education",
    year: "2026",
    category: "AI"
  },
  {
    title: "AI Fluency: Framework and Foundations",
    issuer: "Anthropic Education",
    year: "2026",
    category: "AI"
  },
  {
    title: "Claude 101",
    issuer: "Anthropic Education",
    year: "2026",
    category: "AI"
  },
  {
    title: "Workflow Automation Training",
    issuer: "Udemy",
    year: "2025",
    category: "Automation"
  },
  {
    title: "Data Protection Officer Training",
    issuer: "Data Protection Academy",
    year: "2024",
    category: "Compliance"
  },
  {
    title: "AWS S3 Fundamentals",
    issuer: "AWS Training",
    year: "2022",
    category: "Cloud"
  }
];

export const STATS = [
  { label: "Production Systems", value: "3+" },
  { label: "Years Experience", value: "2+" },
  { label: "Certifications", value: "8+" },
  { label: "Clients Served", value: "3" }
];

export const EDUCATION = {
  degree: "Bachelor of Science, Sociology and Anthropology",
  school: "Obafemi Awolowo University, Ile-Ife",
  year: "2023",
  note: "Systems theory, organizational behavior, and qualitative research \u2014 applied to human-AI interaction design and agent workflow architecture."
};
