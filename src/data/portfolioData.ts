export const PERSONAL_INFO = {
  name: "Davidson Chiemezuo",
  fullName: "Ahuruezenma Davidson Chiemezuo",
  title: "Agentic AI Developer",
  tagline: "Building intelligent systems, one agent at a time.",
  location: "Abuja, Nigeria",
  email: "ahuruezenmadavidson@gmail.com",
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
    image: "/projects/bolt_diy_mock_ui.png",
    status: "ready"
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
    image: null,
    status: "ready"
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
    image: null,
    status: "ready"
  },
  {
    id: 4,
    title: "VIZO-RAG System",
    client: "ViZO Technology Limited",
    description: "A source-grounded RAG assistant with ChromaDB vector search, Hugging Face embeddings, and Gemini-backed answers — refusing instead of guessing when evidence is missing.",
    longDescription: "A terminal-based RAG system that ingests a synthetic Markdown corpus, chunks and embeds it with all-MiniLM-L6-v2, persists vectors in ChromaDB, and answers questions strictly from retrieved evidence using Gemini — refusing instead of guessing when evidence is missing. Includes query expansion for broad questions, a configurable retrieval cap, conversation memory, and a 20-test offline suite that needs no API key.",
    tech: ["Python", "LangChain", "ChromaDB", "Gemini", "Hugging Face Embeddings"],
    highlights: [
      "ChromaDB vector search with similarity-threshold filtering",
      "Query expansion for broad catalog questions",
      "Source-grounded answers — refuses when evidence is missing",
      "Offline test suite: 20 tests, no API key required"
    ],
    category: "AI System",
    featured: false,
    github: "https://github.com/DavidGaso1/VIZO-RAG",
    image: "/projects/vizo_rag_mock_ui.png",
    status: "ready"
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
    github: "https://github.com/DavidGaso1/about_davidson",
    image: "/projects/portfolio_mock_ui.png",
    status: "ready"
  },
  {
    id: 6,
    title: "AI Job Application Agent",
    client: null,
    description: "A production-hardened AI job-application workspace with a FastAPI backend, LangGraph orchestration, authenticated Chrome extension, database persistence, and fail-safe browser preparation.",
    longDescription: "An agentic pipeline that researches job postings, analyzes candidate fit, and tailors resumes and cover letters through Gemini, Groq, and OpenRouter fallback paths. The production-readiness pass added Google OAuth claim validation, user-scoped SQLAlchemy persistence, structured errors, request tracing, health checks, strict extension/API contracts, and a manual-review gate that keeps prepared applications at READY_TO_SUBMIT until a human verifies the final action. Published-extension OAuth and live job-site E2E remain deployment-specific follow-up validation.",
    tech: ["FastAPI", "LangGraph", "SQLAlchemy", "Playwright", "Google OAuth", "Chrome Extension", "Gemini", "Groq"],
    highlights: [
      "111 backend tests + 7 extension build/configuration tests, with Ruff and strict mypy passing",
      "Google OAuth validates aud, sub, email, and email_verified before issuing an app JWT",
      "SQLite/Postgres-ready persistence with user-scoped profiles, applications, and documents",
      "Request IDs, structured errors, liveness/readiness checks, upload limits, and retention cleanup",
      "Manual-review safety gate: dry runs never submit and prepared forms remain READY_TO_SUBMIT"
    ],
    category: "AI System",
    featured: false,
    github: "https://github.com/DavidGaso1/Job-Agent",
    image: "/projects/job_agent_mock_ui.png",
    status: "showcase-ready"
  },
  {
    id: 7,
    title: "HealthyLife Healthcare Data Project",
    client: null,
    description: "A healthcare data engineering toolkit for generating, patching, and validating mock patient, admission, and diagnosis datasets with SQL inserts.",
    longDescription: "Comprehensive scripts that generate mock healthcare data, patch and validate foreign-key relationships, and run SQL inserts for patient, admission, and diagnosis records — a robust sandbox for healthcare data engineering, analysis, and research pipelines.",
    tech: ["Python", "SQL", "MySQL", "Data Validation"],
    highlights: [
      "Mock patient, admission, and diagnosis data generation",
      "Foreign-key patching and validation",
      "Modular Python data manipulation scripts",
      "Secure handling of sensitive and test data"
    ],
    category: "Data Engineering",
    featured: false,
    github: "https://github.com/DavidGaso1/Health-Care-Repo",
    image: null,
    status: "ready"
  },
  {
    id: 8,
    title: "NutriDine — AI Restaurant Recommendation",
    client: null,
    description: "An AI-powered restaurant recommendation system with hybrid collaborative + content-based filtering, location and time awareness, and a health-conscious RAG advisor.",
    longDescription: "NutriDine blends collaborative and content-based filtering with location- and time-aware cues to recommend restaurants around Abuja, Nigeria. Includes an AI Health Advisor with RAG for personalized nutrition analysis, allergen-aware menu analysis, and real-time learning from user interactions.",
    tech: ["FastAPI", "PostgreSQL", "React", "ChromaDB", "Gemini", "Groq"],
    highlights: [
      "Hybrid collaborative + content-based filtering",
      "Location- and time-aware recommendations",
      "AI Health Advisor with RAG for nutrition analysis",
      "Real-time learning from user interactions"
    ],
    category: "AI System",
    featured: false,
    github: "https://github.com/DavidGaso1/restaurant-recommendation-system",
    image: null,
    status: "ready"
  },
  {
    id: 9,
    title: "HealthRAG — Nigeria-First Health Triage",
    client: null,
    description: "A synthetic-only, Nigeria-first health triage prototype with rule-first emergency detection, retrieval-grounded educational answers, and a fail-closed privacy boundary.",
    longDescription: "A deterministic health triage CLI that pairs a rule-first emergency and urgent signal layer (11 rules) with retrieval-grounded educational answers in Pidgin-friendly phrasing. Synthetic-only by design: it refuses real patient input, never diagnoses or prescribes, and ships with an offline release gate that enforces the synthetic boundary. Split out of VIZO-RAG into its own repository with CI and full documentation.",
    tech: ["Python", "YAML", "RAG"],
    highlights: [
      "Rule-first triage: 11 emergency and urgent signal rules checked before retrieval runs",
      "Fail-closed privacy boundary — requires synthetic input, never real patient data",
      "Retrieval-grounded educational answers with a strict evidence citation gate",
      "Offline release gate: 55 tests + 16 synthetic evaluation cases, no API key required"
    ],
    category: "AI System",
    featured: false,
    github: "https://github.com/DavidGaso1/HealthRAG",
    image: null,
    status: "ready"
  },
  {
    id: 10,
    title: "AI-News-Update — Automated News Digest",
    client: null,
    description: "A fully automated daily AI news digest — cron-fetched from RSS with cross-day dedup, emailed every morning, and deployed as a live dashboard on Vercel. CI-tested pipeline.",
    longDescription: "An end-to-end automation showcase: GitHub Actions cron runs a Python fetcher that pulls AI news from RSS sources, deduplicates across days using a committed archive (with configurable retention), and sends a formatted email digest to subscribers. Ships with CI tests for dedup and archive merging, and a live public dashboard at ainl.vercel.app.",
    tech: ["Python", "GitHub Actions", "feedparser", "SMTP", "Vercel"],
    highlights: [
      "Daily 6 AM cron with zero-touch deployment to Vercel",
      "Cross-day dedup seeded from a committed archive with 180-day retention",
      "Multi-recipient email delivery with subscriber support",
      "CI-tested: dedup, archive merge, and retention logic all covered"
    ],
    category: "Automation",
    featured: false,
    github: "https://github.com/DavidGaso1/AI-News-Update",
    liveUrl: "https://ainl.vercel.app",
    image: null,
    status: "showcase-ready"
  },
  {
    id: 11,
    title: "financial-statement-pipeline",
    client: null,
    description: "An extraction pipeline for scanned Nigerian financial statements — OCR, structured output, validation and exporters with full test coverage and CI.",
    longDescription: "A document-processing pipeline that turns scanned financial statements into structured, validated data. Covers OCR ingestion, number parsing, field detection, validation, confidence scoring, and multiple export formats — with a full test suite and GitHub Actions CI.",
    tech: ["Python", "OCR", "Pydantic", "pytest", "CI"],
    highlights: [
      "End-to-end pipeline: scan to structured, validated output",
      "Confidence scoring and validation rules on extracted fields",
      "Full test suite covering parsing, detection, and export",
      "GitHub Actions CI on every push"
    ],
    category: "Data Engineering",
    featured: false,
    github: "https://github.com/DavidGaso1/financial-statement-pipeline",
    image: null,
    status: "showcase-ready"
  },
  {
    id: 12,
    title: "R-Medy — Natural Health Solutions",
    client: null,
    description: "A modern React/Next.js website for natural health solutions with AI-powered lead capture, secure webhooks, and deployment on Vercel.",
    longDescription: "A production web application for a natural health solutions brand — modern Next.js frontend with TypeScript and Tailwind, AI-assisted lead capture, secure webhook form integration, and Vercel deployment. Includes comprehensive README and deployment documentation.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Webhooks"],
    highlights: [
      "Modern Next.js + TypeScript frontend",
      "AI-powered lead capture with webhook integration",
      "Vercel deployment with production config",
      "Full documentation and security review included"
    ],
    category: "Web Development",
    featured: false,
    github: "https://github.com/DavidGaso1/R-Medy",
    image: null,
    status: "ready"
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
