export const PERSONAL_INFO = {
  name: "Ahuruezenma Davidson Chiemezuo",
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
  resumeFileName: "Ahuruezenma_Davidson_Chiemezuo_Resume.pdf",
  openTo: ["Remote (Permanent)", "AI Startups", "US Hours Compatible"]
};

export const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const TECH_STACK = [
  {
    id: "ai-agents",
    label: "AI & Agents",
    eyebrow: "Reasoning layer",
    description: "The model, retrieval, and orchestration technologies behind my agentic systems.",
    technologies: [
      { name: "Claude Code", signal: "Development copilot", detail: "Used to coordinate multi-agent development workflows, shared configuration, and production delivery practices.", usedIn: ["Freelance AI Automation", "AI Portfolio"] },
      { name: "RAG systems", signal: "Grounded answers", detail: "Designing retrieval pipelines that search organizational knowledge and refuse to guess when supporting evidence is missing.", usedIn: ["VIZO-RAG System", "HealthRAG", "ViZO AI Engineer role"] },
      { name: "LangChain / LangGraph", signal: "Agent orchestration", detail: "Connecting model calls, retrieval, tools, state, and safe workflow transitions into repeatable systems.", usedIn: ["AI Job Application Agent", "VIZO-RAG System"] },
      { name: "Gemini", signal: "Model layer", detail: "Applied to personalization, grounded generation, classification, and academic content workflows with explicit validation boundaries.", usedIn: ["Zenko lead pipeline", "VIZO-RAG System", "N8n Automation"] },
      { name: "21st.dev MCP", signal: "UI component workflow", detail: "Configured as a development-only remote component search and refinement tool; it does not ship as a frontend runtime dependency or expose credentials to visitors.", usedIn: ["Interactive Tech Stack", "Portfolio UI refinement"] },
      { name: "Multi-agent orchestration", signal: "System design", detail: "Coordinating specialized agents with shared instructions, handoffs, review loops, and human approval gates.", usedIn: ["Freelance AI Automation", "AI Job Application Agent"] },
    ],
  },
  {
    id: "data-retrieval",
    label: "Data & Retrieval",
    eyebrow: "Knowledge layer",
    description: "The storage, embedding, validation, and document-processing tools that make AI outputs useful and traceable.",
    technologies: [
      { name: "Python", signal: "Primary engineering language", detail: "Used for orchestration, validation, data processing, API services, evaluation suites, and automation workers.", usedIn: ["All production automation", "HealthRAG", "Financial pipeline"] },
      { name: "ChromaDB", signal: "Vector persistence", detail: "Persisting embeddings and retrieving semantically relevant evidence for source-grounded assistants.", usedIn: ["VIZO-RAG System", "NutriDine"] },
      { name: "Hugging Face embeddings", signal: "Semantic indexing", detail: "Creating local embeddings for offline-friendly retrieval experiments and repeatable evaluation.", usedIn: ["VIZO-RAG System"] },
      { name: "Supabase", signal: "Operational data", detail: "Providing durable storage, workflow state, and integration points for production automation systems.", usedIn: ["Zenko", "Theldoforce", "DGI monitoring", "ViZO RAG"] },
      { name: "SQL / PostgreSQL", signal: "Structured persistence", detail: "Modeling user-scoped records, operational data, and validated datasets with a focus on clear ownership boundaries.", usedIn: ["AI Job Application Agent", "NutriDine", "Healthcare data project"] },
      { name: "OCR & validation", signal: "Document intelligence", detail: "Turning scanned financial statements into structured outputs with parsing, confidence scoring, and export checks.", usedIn: ["Financial statement pipeline"] },
    ],
  },
  {
    id: "automation-cloud",
    label: "Automation & Cloud",
    eyebrow: "Execution layer",
    description: "The infrastructure and workflow tools that move systems from a model response to a dependable operation.",
    technologies: [
      { name: "n8n", signal: "Workflow orchestration", detail: "Connecting webhooks, APIs, model calls, databases, notifications, and human handoffs into observable workflows.", usedIn: ["Zenko", "Theldoforce", "DGI monitoring", "N8n Automation"] },
      { name: "AWS", signal: "Cloud operations", detail: "Building storage, monitoring, and infrastructure automation with AWS S3, CLI, and CloudWatch patterns.", usedIn: ["DGI infrastructure monitoring", "AWS internship"] },
      { name: "GitHub Actions", signal: "Scheduled CI/CD", detail: "Running tests, scheduled jobs, retention logic, and deployment workflows without manual intervention.", usedIn: ["AI-News-Update", "Financial statement pipeline", "HealthRAG"] },
      { name: "Webhooks", signal: "Event-driven systems", detail: "Receiving secured events and routing them through validation, enrichment, persistence, and alerting steps.", usedIn: ["Zenko", "DGI monitoring", "R-Medy"] },
      { name: "Telegram / Gmail / WhatsApp", signal: "Operational delivery", detail: "Delivering role-aware notifications and failure alerts through the channels teams already use.", usedIn: ["Theldoforce", "Zenko", "DGI monitoring"] },
    ],
  },
  {
    id: "product-engineering",
    label: "Product Engineering",
    eyebrow: "Experience layer",
    description: "The frontend, API, browser, and design technologies used to turn systems into clear, usable products.",
    technologies: [
      { name: "React / TypeScript", signal: "Interactive interfaces", detail: "Building maintainable interfaces with typed data, responsive components, stateful interactions, and accessible controls.", usedIn: ["This portfolio", "NutriDine"] },
      { name: "FastAPI", signal: "Typed API services", detail: "Providing structured backend APIs, health checks, authentication boundaries, and machine-readable errors.", usedIn: ["AI Job Application Agent", "NutriDine"] },
      { name: "Next.js", signal: "Production web delivery", detail: "Shipping responsive client-facing experiences with typed components, Tailwind styling, and deployment documentation.", usedIn: ["R-Medy"] },
      { name: "Tailwind CSS", signal: "Design system", detail: "Creating consistent responsive layouts, visual hierarchy, hover states, and polished dark interfaces quickly.", usedIn: ["This portfolio", "R-Medy"] },
      { name: "Playwright", signal: "Browser automation", detail: "Preparing browser workflows with explicit safety gates and human review before any consequential submission.", usedIn: ["AI Job Application Agent"] },
      { name: "SVG / CSS motion", signal: "Visual storytelling", detail: "Using responsive SVG paths, animated data-flow lines, and CSS grid motion to make a technical portfolio feel like an engineered product.", usedIn: ["This portfolio"] },
    ],
  },
  {
    id: "reliability-quality",
    label: "Reliability & Quality",
    eyebrow: "Trust layer",
    description: "The controls that keep AI and automation systems observable, testable, fail-safe, and ready for human review.",
    technologies: [
      { name: "Retry + circuit breakers", signal: "Failure recovery", detail: "Recovering from transient failures while pausing ingestion when repeated failures indicate a deeper problem.", usedIn: ["Zenko", "Theldoforce", "DGI monitoring"] },
      { name: "pytest / offline suites", signal: "Repeatable evaluation", detail: "Testing safety rules, retrieval behavior, parsing, deduplication, and exporters without depending on live credentials.", usedIn: ["HealthRAG", "VIZO-RAG", "Financial pipeline", "AI-News-Update"] },
      { name: "OAuth + JWT", signal: "Identity boundaries", detail: "Validating identity claims and scoping persistent records before an application token is issued.", usedIn: ["AI Job Application Agent"] },
      { name: "CI/CD", signal: "Release confidence", detail: "Combining automated checks, build validation, and deployment workflows so changes are visible before release.", usedIn: ["AI-News-Update", "HealthRAG", "Financial pipeline"] },
      { name: "Human-in-the-loop", signal: "Safe autonomy", detail: "Keeping high-impact actions in a reviewable state instead of allowing an agent to cross a consequential boundary silently.", usedIn: ["AI Job Application Agent", "AI workflow design"] },
    ],
  },
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
    role: "AI Engineer",
    company: "ViZO Technology Limited",
    period: "April 2024 \u2013 Present",
    location: "Hybrid, Abuja",
    type: "Current",
    description: "Building production AI systems — including a RAG pipeline for semantic search across organizational knowledge — and automation workflows that run core operations.",
    achievements: [
      "Architected a production RAG system integrating vector embeddings for semantic search across organizational knowledge bases",
      "Designed and implemented AI automation workflows across operational functions, delivering adoption and ROI recommendations to leadership",
      "Integrated retrieval-augmented generation patterns with Supabase-backed storage and n8n orchestration for repeatable AI pipelines",
      "Documented data governance and AI workflows aligned with NDPR, GDPR, and ISO 27001 standards, and trained teams on responsible AI use"
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
    github: null,
    image: "/projects/bolt_diy_mock_ui.png",
    status: "ready",
    metrics: ["24/7 automated", "3x retry + circuit breaker", "Full audit trail"]
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
    github: null,
    image: null,
    status: "ready",
    metrics: ["3 channels (Telegram/Gmail/WhatsApp)", "Role-based AI tiering", "Dual-channel failure alerts"]
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
    github: null,
    image: null,
    status: "ready",
    metrics: ["Near real-time alerts", "AI error classification", "Consecutive-failure circuit breaking"]
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
    github: "https://github.com/DavidGaso1/VIZO-RAG",
    image: "/projects/vizo_rag_mock_ui.png",
    status: "ready"
  },
  {
    id: 5,
    title: "AI Portfolio",
    description: "This portfolio \u2014 a modern, interactive showcase built with React, Vite, and TypeScript featuring an animated systems-grid hero and an interactive technology constellation.",
    longDescription: "A modern, high-performance portfolio website featuring an animated systems-grid hero, connected technology constellation, scroll-reveal animations, and terminal-style interaction. Built to demonstrate front-end craftsmanship alongside AI engineering expertise.",
    tech: ["React", "TypeScript", "Vite", "SVG", "Tailwind CSS"],
    highlights: [
      "Animated systems-grid hero with data-flow visuals",
      "Scroll-reveal animations throughout",
      "Terminal-style hacker text effects",
      "Optimized for AI startup job applications"
    ],
    category: "Web Development",
    github: "https://github.com/DavidGaso1/about_davidson",
    liveUrl: "https://david.dgi.qzz.io",
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
    github: "https://github.com/DavidGaso1/AI-News-Update",
    liveUrl: "https://ainl.vercel.app",
    image: null,
    status: "showcase-ready",
    metrics: ["Daily 6 AM delivery", "0 duplicates cross-day", "CI-tested pipeline"]
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
    github: "https://github.com/DavidGaso1/R-Medy",
    liveUrl: "https://rmedy.qzz.io",
    image: null,
    status: "ready",
    metrics: ["Live production site", "AI lead capture", "Webhook integration"]
  },
  {
    id: 13,
    title: "AI-Powered Academic Assignment Generator",
    client: null,
    description: "An AI essay generator using Google Gemini that creates structured academic assignments with headings, citations, and properly formatted paragraphs.",
    longDescription: "Built a prompt-driven system that converts JSON data into production-ready, responsive HTML documents. Streamlined academic submissions by standardizing formatting and integrating evidence-based content with proper references.",
    tech: ["Google Gemini", "n8n", "HTML/CSS", "JavaScript"],
    highlights: [
      "Automated creation of formatted academic content with headings and citations",
      "Prompt-driven JSON-to-HTML conversion",
      "Evidence-based content with proper references"
    ],
    category: "AI System",
    github: "https://github.com/DavidGaso1/N8n-Automation",
    image: null,
    status: "ready",
    metrics: ["Zero manual formatting", "Citations auto-included"]
  }
];

// One source of truth for the portfolio's recruiter-facing featured-project order.
export const FEATURED_PROJECT_IDS = [6, 4, 9];

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

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Davidson built our entire lead generation pipeline end-to-end — from website capture to personalized email delivery. It runs 24/7 with zero manual steps, and the reliability layer means failures alert us before they ever reach a customer.",
    author: "Founder",
    company: "Zenko Limited (DTC health & wellness brand)",
    project: "Lead Generation & Personalization Automation",
    metric: "24/7 automated"
  },
  {
    id: 2,
    quote: "Shift schedules, security alerts, and task assignments now distribute themselves across Telegram, Gmail, and WhatsApp — tiered by role so each person gets exactly the detail they need. What used to be daily manual coordination is now fully automated.",
    author: "Operations Lead",
    company: "Theldoforce (Security Services)",
    project: "Operations & Personnel Alert System",
    metric: "3 channels"
  },
  {
    id: 3,
    quote: "AWS errors that once took manual log review to find now trigger instant, classified alerts. The circuit-breaker pattern means the system pauses itself during suspicious traffic instead of compounding alerts.",
    author: "Engineering Team",
    company: "DGI Integrated Services",
    project: "AWS Infrastructure Error Monitoring",
    metric: "Near real-time"
  }
];

export const EDUCATION = {
  degree: "Bachelor of Science, Sociology and Anthropology",
  school: "Obafemi Awolowo University, Ile-Ife",
  year: "2023",
  note: "Systems theory, organizational behavior, and qualitative research \u2014 applied to human-AI interaction design and agent workflow architecture."
};
