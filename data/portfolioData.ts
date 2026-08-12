
export const PERSONAL_INFO = {
  name: "Ahuruezenma Davidson Chiemezuo",
  phone: "+2349061505041",
  roles: ["AI Developer", "Automation Specialist", "Data Protection Officer"],
  location: "Abuja, Nigeria",
  email: "derocton@gmail.com",
  github: "https://github.com/DavidGaso1",
  linkedin: "https://linkedin.com/in/davidson-ahuruezenma-33a773294",
  summary: "Davidson is an AI Engineer with a unique academic foundation in Sociology and advanced technical training. He approaches AI Engineering through a human-centric lens, specializing in building robust RAG systems, complex N8N workflows, and scalable data protection frameworks."
};

export const technicalSkills = [
  { subject: 'AI & ML', value: 80, fullMark: 100 },
  { subject: 'N8N Automation', value: 85, fullMark: 100 },
  { subject: 'SQL / Postgres', value: 80, fullMark: 100 },
  { subject: 'AWS Cloud', value: 75, fullMark: 100 },
  { subject: 'Python', value: 80, fullMark: 100 },
];

export const toolsData = [
  { name: 'PostgreSQL', val: 80, color: '#00d9ff' },
  { name: 'Python', val: 80, color: '#a855f7' },
   { name: 'Claude/Llama', val: 92, color: '#00d9ff' },
  { name: 'Antigravity', val: 95, color: '#a855f7' },
  { name: 'N8N', val: 85, color: '#00d9ff' },
  { name: 'AWS', val: 60, color: '#a855f7' },
];

export const softSkills = [
  { name: 'Problem Solving', progress: 95 },
  { name: 'Communication', progress: 90 },
  { name: 'Adaptability', progress: 85 },
  { name: 'Time Management', progress: 85 },
  { name: 'People Management', progress: 80 },
];

export const experiences = [
  {
    role: "Data Protection Officer",
    company: "ViZO Technology Limited",
    period: "April 2024 - Present",
    location: "Hybrid / Abuja",
    badge: "Current Role",
    achievements: [
      "Implementing AI-driven monitoring for data compliance and security protocols.",
      "Developing RAG systems for internal knowledge base management.",
      "Leading cross-departmental automation workflows using N8N and Supabase.",
      "Ensuring alignment with global and local data protection regulations (NDPA)."
    ]
  },
  {
    role: "AWS Cloud Virtual Internship",
    company: "DGI Integrated Services",
    period: "May 2023 - April 2024",
    location: "Remote",
    achievements: [
      "Mastered core AWS services including S3, EC2, and IAM configurations.",
      "Designed scalable cloud architectures for data-heavy applications.",
      "Gained hands-on experience in cloud security and performance optimization.",
      "Simulated enterprise cloud deployments and VPC management."
    ]
  }
];

export const projects = [
  {
    title: "AI-News-Update",
    description: "Fully automated daily AI news digest — cron-fetched from RSS, cross-day dedup, email delivery, live dashboard on Vercel. Built with Python, feedparser, GitHub Actions and a CI-tested pipeline.",
    tech: ["Python", "GitHub Actions", "RSS", "SMTP", "Vercel"],
    primaryTech: "Python / Automation",
    github: "https://github.com/DavidGaso1/AI-News-Update",
    repoOwner: "DavidGaso1",
    repoName: "AI-News-Update",
    liveUrl: "https://ainl.vercel.app",
    imageUrl: "/projects/job_agent_mock_ui.png"
  },
  {
    title: "HealthRAG",
    description: "Nigeria-first synthetic-only health triage prototype — source-grounded RAG with safety guardrails, full documentation, architecture diagrams and CI.",
    tech: ["Python", "RAG", "LangChain", "ChromaDB", "Gemini"],
    primaryTech: "Python / RAG",
    github: "https://github.com/DavidGaso1/HealthRAG",
    repoOwner: "DavidGaso1",
    repoName: "HealthRAG",
    imageUrl: "/projects/vizo_rag_mock_ui.png"
  },
  {
    title: "VIZO-RAG System",
    description: "Enterprise-grade Retrieval-Augmented Generation system for ViZO Technologies — vector embeddings, semantic document search and grounded answers.",
    tech: ["Python", "LangChain", "ChromaDB", "HF Embeddings"],
    primaryTech: "Python / AI",
    github: "https://github.com/DavidGaso1/VIZO-RAG",
    repoOwner: "DavidGaso1",
    repoName: "VIZO-RAG",
    imageUrl: "/projects/vizo_rag_mock_ui.png"
  },
  {
    title: "financial-statement-pipeline",
    description: "Extraction pipeline for scanned Nigerian financial statements — OCR, structured output, validation and exporters with full test coverage.",
    tech: ["Python", "OCR", "Pydantic", "pytest", "CI"],
    primaryTech: "Python / Data",
    github: "https://github.com/DavidGaso1/financial-statement-pipeline",
    repoOwner: "DavidGaso1",
    repoName: "financial-statement-pipeline",
    imageUrl: "/projects/portfolio_mock_ui.png"
  },
  {
    title: "Job-Agent",
    description: "AI-powered job application assistant that automates searches, tailors resumes and assists in the application process.",
    tech: ["Python", "Playwright", "Qwen 0.5B", "FastAPI"],
    primaryTech: "Python / AI",
    github: "https://github.com/DavidGaso1/Job-Agent",
    repoOwner: "DavidGaso1",
    repoName: "Job-Agent",
    imageUrl: "/projects/job_agent_mock_ui.png"
  },
  {
    title: "R-Medy",
    description: "Natural health solutions web app — modern React/Next.js frontend with AI-powered lead capture and secure webhook integrations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "AI"],
    primaryTech: "Full-Stack / AI",
    github: "https://github.com/DavidGaso1/R-Medy",
    repoOwner: "DavidGaso1",
    repoName: "R-Medy",
    imageUrl: "/projects/portfolio_mock_ui.png"
  },
  {
    title: "N8n Automation Hub",
    description: "A collection of AI-driven n8n automation workflows — academic research, task management and API integrations with Gemini and Telegram.",
    tech: ["n8n", "JSON", "Gemini", "Automation"],
    primaryTech: "n8n Workflows",
    github: "https://github.com/DavidGaso1/N8n-Automation",
    repoOwner: "DavidGaso1",
    repoName: "N8n-Automation",
    imageUrl: "/projects/bolt_diy_mock_ui.png"
  },
  {
    title: "AI Portfolio",
    description: "The very portfolio you are viewing — a modern, interactive React/TypeScript showcase with WebGL shaders and a local AI assistant.",
    tech: ["React", "TypeScript", "WebGL", "Vite"],
    primaryTech: "React / TS",
    github: "https://github.com/DavidGaso1/davidson-s-ai-portfolio",
    repoOwner: "DavidGaso1",
    repoName: "davidson-s-ai-portfolio",
    liveUrl: "https://david.dgi.qzz.io",
    imageUrl: "/projects/portfolio_mock_ui.png"
  },
  {
    title: "data-analysis-projects",
    description: "Python, SQL and Jupyter notebook data analysis portfolio — cleaning, EDA and visualization with documented notebooks.",
    tech: ["Python", "Jupyter", "Pandas", "SQL"],
    primaryTech: "Data Analysis",
    github: "https://github.com/DavidGaso1/data-analysis-projects",
    repoOwner: "DavidGaso1",
    repoName: "data-analysis-projects",
    imageUrl: "/projects/job_agent_mock_ui.png"
  }
];

export const certifications = [
  {
    title: "NYSC Certificate",
    issuer: "Federal Govt of Nigeria",
    year: "2025",
    type: "National"
  },
  {
    title: "Workflow Automation",
    issuer: "Udemy",
    year: "2025",
    type: "Technical"
  },
  {
    title: "Data Protection",
    issuer: "Data Protection Academy",
    year: "2024",
    type: "Compliance"
  },
  {
    title: "AWS S3 Basics",
    issuer: "Amazon Web Services",
    year: "2022",
    type: "Cloud"
  },
  {
    title: "Project Management",
    issuer: "Coursera / Google",
    year: "2023",
    type: "Management"
  }
];
