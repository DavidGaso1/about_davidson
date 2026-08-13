#!/usr/bin/env python3
from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Ahuruezenma_Davidson_Chiemezuo_Resume.pdf"
FONT_DIR_CANDIDATES = (
    Path("/usr/share/fonts/truetype/dejavu"),
    Path("/usr/share/fonts/truetype/dejavu/"),
)
FONT_DIR = next((path for path in FONT_DIR_CANDIDATES if (path / "DejaVuSans.ttf").exists()), None)
if FONT_DIR is None:
    raise RuntimeError(
        "DejaVu Sans fonts are required. Install the system package "
        "fonts-dejavu-core and rerun this script."
    )
FONT_DIR = str(FONT_DIR) + "/"

BLUE = (12, 105, 190)
DARK = (18, 25, 38)
TEXT = (38, 45, 58)
MUTED = (90, 100, 115)
LIGHT = (235, 242, 249)

class Resume(FPDF):
    def __init__(self):
        super().__init__(format="A4")
        self.add_font("DejaVu", "", FONT_DIR + "DejaVuSans.ttf")
        self.add_font("DejaVu", "B", FONT_DIR + "DejaVuSans-Bold.ttf")
        self.set_margins(15, 13, 15)
        self.set_auto_page_break(auto=True, margin=13)
        self.add_page()

    @property
    def usable(self):
        return self.w - self.l_margin - self.r_margin

    def text_block(self, text, size=8.8, color=TEXT, bold=False, line=4.25, link=None):
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B" if bold else "", size)
        self.set_text_color(*color)
        self.multi_cell(self.usable, line, text, link=link)

    def link_line(self, label, url):
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "", 8.1)
        self.set_text_color(*BLUE)
        self.multi_cell(self.usable, 4.1, label, link=url)

    def section(self, title, subtitle=None):
        self.ln(2)
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B", 11)
        self.set_text_color(*BLUE)
        self.cell(self.usable, 6.5, title.upper())
        self.ln(2)
        self.set_draw_color(*BLUE)
        self.set_line_width(0.45)
        self.line(self.l_margin, self.get_y(), self.w - self.r_margin, self.get_y())
        self.ln(3)
        if subtitle:
            self.text_block(subtitle, size=8.2, color=MUTED, line=4.0)
            self.ln(1)

    def bullet(self, text, size=8.65, line=4.15):
        self.text_block("•  " + text, size=size, line=line)

    def role(self, title, company, dates, location, bullets, tech):
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B", 9.7)
        self.set_text_color(*DARK)
        self.cell(self.usable, 5.4, title)
        self.ln(5.4)
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B", 8.7)
        self.set_text_color(*BLUE)
        self.cell(self.usable, 4.5, company)
        self.ln(4.5)
        self.text_block(f"{dates}  |  {location}", size=8.15, color=MUTED, line=3.9)
        for item in bullets:
            self.bullet(item, size=8.45, line=4.0)
        self.text_block("Stack: " + tech, size=8.0, color=MUTED, line=3.9)
        self.ln(2)

    def project(self, title, description, bullets, stack, links=()):
        self.set_x(self.l_margin)
        self.set_font("DejaVu", "B", 9.5)
        self.set_text_color(*DARK)
        self.cell(self.usable, 5.2, title)
        self.ln(5.2)
        self.text_block(description, size=8.45, color=TEXT, line=4.05)
        for item in bullets:
            self.bullet(item, size=8.25, line=3.95)
        self.text_block("Stack: " + stack, size=7.95, color=MUTED, line=3.75)
        for label, url in links:
            self.link_line(label, url)
        self.ln(2)

pdf = Resume()

# PAGE 1 — profile, skills, experience
pdf.set_font("DejaVu", "B", 20)
pdf.set_text_color(*DARK)
pdf.set_x(pdf.l_margin)
pdf.cell(pdf.usable, 9, "AHURUEZENMA DAVIDSON CHIEMEZUO")
pdf.ln(8)
pdf.set_font("DejaVu", "B", 11)
pdf.set_text_color(*BLUE)
pdf.set_x(pdf.l_margin)
pdf.cell(pdf.usable, 5.5, "AI ENGINEER  |  AGENTIC AI DEVELOPER  |  AUTOMATION SPECIALIST")
pdf.ln(6)
pdf.link_line("Email: ahuruezenmadavidson@gmail.com", "mailto:ahuruezenmadavidson@gmail.com")
pdf.link_line("Phone: +234 906 150 5041", "tel:+2349061505041")
pdf.link_line("Portfolio: david.dgi.qzz.io", "https://david.dgi.qzz.io")
pdf.link_line("GitHub: github.com/DavidGaso1", "https://github.com/DavidGaso1")
pdf.link_line("LinkedIn: linkedin.com/in/davidson-ahuruezenma-33a773294", "https://linkedin.com/in/davidson-ahuruezenma-33a773294")
pdf.ln(2)

pdf.section("Professional Profile")
pdf.text_block(
    "AI Engineer with 2+ years of hands-on experience designing and delivering production AI systems, retrieval-augmented generation pipelines, and multi-channel automation. I build systems that connect models to real operational workflows: retrieval, validation, persistence, notifications, observability, and safe human review. My work combines Python, LangChain, ChromaDB, Gemini, n8n, Supabase, AWS, and Claude Code with reliability patterns such as retries, circuit breakers, timeouts, and dual-channel alerting.",
    size=9.0, line=4.45,
)
pdf.ln(1)
pdf.text_block(
    "Target roles: AI Engineer, AI Developer, Agentic AI Engineer, RAG Engineer, and AI Automation Engineer. Open to permanent remote roles, AI startups, and teams working with US-compatible hours.",
    size=8.7, color=MUTED, line=4.2,
)

pdf.section("Technical Capabilities")
pdf.bullet("AI systems: RAG architecture, semantic retrieval, vector embeddings, multi-agent orchestration, prompt engineering, multi-LLM integration, model evaluation, MCP, LangChain/LangGraph, CrewAI/AutoGen.")
pdf.bullet("Engineering: Python, TypeScript, React, FastAPI, SQL, PostgreSQL/MySQL, SQLAlchemy, REST APIs, webhooks, structured validation, test-driven development, GitHub Actions CI.")
pdf.bullet("Platforms and automation: n8n, Supabase, AWS S3, AWS CLI, CloudWatch, Gemini, Groq, OpenRouter, ChromaDB, Hugging Face embeddings, Playwright, Chrome extensions.")
pdf.bullet("Reliability and governance: retries with exponential backoff, circuit breakers, timeouts, request tracing, health checks, human-in-the-loop gates, GDPR, NDPR, ISO 27001, privacy impact assessments.")

pdf.section("Professional Experience")
pdf.role(
    "Freelance AI Automation Specialist",
    "Independent Contractor — Zenko Limited, Theldoforce, DGI Integrated Services",
    "2024 – Present", "Remote",
    [
        "Own delivery of three production automation systems spanning DTC lead generation, security-services operations, and AWS infrastructure monitoring.",
        "Built the Zenko lead pipeline from website webhook and Excel audit backup through Python validation, Gemini personalization, Supabase persistence, and automated email delivery.",
        "Built Theldoforce's operations system to distribute schedules, security alerts, and task assignments across Telegram, Gmail, and WhatsApp with AI-powered role tiering.",
        "Built DGI's AWS monitoring workflow with secured webhook capture, AI-assisted error classification, immediate Telegram alerts, and circuit-breaking for repeated failures.",
        "Standardized a reliability layer across client systems: 3x retries, exponential backoff, AI processing timeouts, exact failed-step alerts, and consecutive-failure pausing."
    ],
    "n8n · Python · Gemini · Supabase · AWS · Telegram · Claude Code",
)
pdf.role(
    "AI Engineer",
    "ViZO Technology Limited",
    "April 2024 – Present", "Hybrid, Abuja",
    [
        "Architected a production RAG system that uses document chunking, vector embeddings, semantic search, retrieval controls, and grounded model responses over organizational knowledge.",
        "Integrated RAG patterns with Supabase-backed storage and n8n orchestration to make AI workflows repeatable and operationally maintainable.",
        "Designed AI automation workflows and translated technical opportunities into adoption and ROI recommendations for leadership.",
        "Documented AI workflows and governance controls aligned with NDPR, GDPR, and ISO 27001; trained teams on responsible AI use and prompt engineering."
    ],
    "Python · LangChain · RAG · Supabase · n8n · Vector Embeddings",
)
pdf.role(
    "AWS Cloud & Automation Intern",
    "DGI Integrated Services",
    "May 2023 – April 2024", "Remote",
    [
        "Automated cloud infrastructure provisioning and monitoring using the AWS Management Console and CLI.",
        "Designed structured data-ingestion workflows supporting tooling, dataset versioning, and repeatable operations.",
        "Deployed scalable AWS S3 storage architectures with an emphasis on fault tolerance and operational clarity."
    ],
    "AWS S3 · AWS CLI · CloudWatch · n8n",
)

# PAGE 2 — relevant projects first
pdf.add_page()
pdf.section("Featured AI Engineering Projects", "Selected work ordered for AI Engineer, RAG, agent, and automation roles. Links are clickable in the PDF.")
pdf.project(
    "1. AI Job Application Agent",
    "Production-hardened agentic workspace for researching job postings, analyzing candidate fit, tailoring resumes and cover letters, and preparing browser actions through a FastAPI backend and authenticated Chrome extension.",
    [
        "Orchestrates agent workflows with LangGraph and supports Gemini, Groq, and OpenRouter fallback paths.",
        "Added Google OAuth claim validation for audience, subject, email, and email_verified before issuing application JWTs.",
        "Implemented user-scoped SQLAlchemy persistence for profiles, applications, documents, and job records with SQLite/Postgres readiness.",
        "Added request IDs, structured errors, liveness/readiness checks, upload limits, retention cleanup, and strict extension/API contracts.",
        "Maintains a manual-review safety gate: dry runs never submit and prepared applications remain READY_TO_SUBMIT until a human verifies the final action.",
        "Verified with 111 backend tests plus 7 extension build/configuration tests, Ruff, and strict mypy."
    ],
    "FastAPI · LangGraph · SQLAlchemy · Playwright · Google OAuth · Chrome Extension · Gemini · Groq",
    [("GitHub: github.com/DavidGaso1/Job-Agent", "https://github.com/DavidGaso1/Job-Agent")],
)
pdf.project(
    "2. VIZO-RAG System",
    "Source-grounded retrieval assistant for organizational knowledge. The system ingests Markdown content, creates embeddings, persists vectors, retrieves evidence, and generates answers that refuse to guess when evidence is missing.",
    [
        "Uses ChromaDB with all-MiniLM-L6-v2/Hugging Face embeddings and configurable retrieval controls.",
        "Supports query expansion for broad questions, conversation memory, and evidence-aware response generation with Gemini.",
        "Includes a 20-test offline suite that runs without an API key, making retrieval behavior repeatable during development.",
        "Documents ingestion, retrieval, prompting, evaluation, health checks, and operational usage for handoff."
    ],
    "Python · LangChain · ChromaDB · Gemini · Hugging Face Embeddings",
    [("GitHub: github.com/DavidGaso1/VIZO-RAG", "https://github.com/DavidGaso1/VIZO-RAG")],
)
pdf.project(
    "3. HealthRAG — Nigeria-First Health Triage",
    "Synthetic-only health triage prototype combining deterministic safety rules with retrieval-grounded educational answers. It is explicitly fail-closed: it refuses real patient input and does not diagnose or prescribe.",
    [
        "Checks 11 emergency and urgent-signal rules before retrieval runs, ensuring safety signals take priority over generation.",
        "Uses evidence citation gates and Pidgin-friendly phrasing for accessible, grounded educational responses.",
        "Ships with an offline release gate covering 55 tests and 16 synthetic evaluation cases without an API key.",
        "Separates safety, privacy, retrieval, evaluation, documentation, and operational concerns into a maintainable repository."
    ],
    "Python · YAML · RAG · Safety Rules · Synthetic Evaluation",
    [("GitHub: github.com/DavidGaso1/HealthRAG", "https://github.com/DavidGaso1/HealthRAG")],
)
pdf.project(
    "4. Financial Statement Extraction Pipeline",
    "Document-processing pipeline for scanned Nigerian financial statements. It converts OCR input into structured, validated data and supports confidence scoring, detection, parsing, and export workflows.",
    [
        "Covers OCR ingestion, number parsing, field detection, validation, confidence scoring, and exporters.",
        "Uses focused modules and tests for parsing, detection, validation, logging, OCR, jobs, and export behavior.",
        "Provides a repeatable foundation for financial-document processing rather than a one-off extraction script."
    ],
    "Python · OCR · Pydantic · pytest · GitHub Actions",
    [("GitHub: github.com/DavidGaso1/financial-statement-pipeline", "https://github.com/DavidGaso1/financial-statement-pipeline")],
)
pdf.project(
    "5. R-Medy — Natural Health Solutions",
    "Production web application for a natural-health brand with a modern Next.js/TypeScript frontend, AI-assisted lead capture, secure webhook integration, deployment documentation, and a public production site.",
    [
        "Built responsive product and content experiences with TypeScript, Tailwind, and Next.js conventions.",
        "Connected lead capture to secure webhook-based workflows and documented deployment/security considerations.",
        "Public site: rmedy.qzz.io. Client-facing delivery demonstrates the ability to ship beyond prototypes."
    ],
    "Next.js · TypeScript · Tailwind CSS · Webhooks · Deployment",
    [("GitHub: github.com/DavidGaso1/R-Medy", "https://github.com/DavidGaso1/R-Medy"), ("Live: rmedy.qzz.io", "https://rmedy.qzz.io")],
)

# PAGE 3 — supporting work and AI News last
pdf.add_page()
pdf.section("Additional Production & Automation Work", "Supporting projects that demonstrate client delivery, infrastructure automation, data engineering, and operational reliability.")
pdf.project(
    "6. Lead Generation & Personalization Automation — Zenko Limited",
    "End-to-end DTC lead pipeline from website webhook to auditable backup, Python validation, Gemini personalization, Supabase persistence, and automated email delivery.",
    [
        "Uses an Excel/Google Drive backup before validation to preserve an operational audit trail.",
        "Adds 3x automatic retry with exponential backoff, a 30-second AI timeout, Telegram alerting, and circuit-breaker logic.",
        "Designed as a production workflow with failure visibility instead of a simple happy-path integration."
    ],
    "n8n · Python · Gemini · Supabase · Google Drive · Email API",
    [],
)
pdf.project(
    "7. Operations & Personnel Alert System — Theldoforce",
    "Bi-directional operations automation for security services, distributing schedules, security alerts, and task assignments across Telegram, Gmail, and WhatsApp.",
    [
        "Uses AI-powered tiering by recipient role so each team member receives relevant detail instead of broadcast noise.",
        "Includes dual-channel failure alerting with exact failed-step context for faster diagnosis.",
        "Automates real-time personnel scheduling and alert management across three communication channels."
    ],
    "n8n · Python · AI Model · Supabase · Telegram · Gmail · WhatsApp",
    [("Workflow repository: github.com/DavidGaso1/theldoforce", "https://github.com/DavidGaso1/theldoforce")],
)
pdf.project(
    "8. AWS Infrastructure Error Monitoring — DGI Integrated Services",
    "Fault-tolerant monitoring workflow that receives secured AWS error signals, classifies them with AI assistance, and pushes immediate Telegram alerts to operations teams.",
    [
        "Moves incident detection from manual log review toward near-real-time notification.",
        "Combines AI classification with retry, timeout, and consecutive-failure circuit-breaking patterns.",
        "Designed for operational clarity: the alert includes the failed step and actionable context."
    ],
    "AWS API · n8n · Python · AI Model · Supabase · Telegram API",
    [],
)
pdf.project(
    "9. N8n Automation Hub",
    "Reusable AI workflow collection covering academic research, task management, API integrations, Gemini, Supabase, Gmail, Google Calendar, and Telegram.",
    [
        "Uses structured JSON outputs, context-aware retrieval, output validation, and multi-model fallback patterns.",
        "Demonstrates practical automation design across email parsing, summarization, task tracking, and scheduling."
    ],
    "n8n · Gemini · Supabase · Gmail · Google Calendar · Telegram",
    [("GitHub: github.com/DavidGaso1/N8n-Automation", "https://github.com/DavidGaso1/N8n-Automation")],
)
pdf.project(
    "10. AI-News-Update — Automated News Digest",
    "A fully automated daily AI news digest. This is intentionally last: it demonstrates scheduled automation, data freshness, deduplication, delivery, deployment, and CI reliability after the core AI engineering work above.",
    [
        "Runs from a GitHub Actions cron at 6 AM, fetches RSS sources, and publishes a public dashboard on Vercel.",
        "Seeds cross-day URL/title deduplication from a committed archive and retains 180 days of history.",
        "Sends multi-recipient email digests and includes CI tests for deduplication, archive merging, and retention behavior.",
        "Live dashboard: ainl.vercel.app."
    ],
    "Python · GitHub Actions · feedparser · SMTP · Vercel",
    [("GitHub: github.com/DavidGaso1/AI-News-Update", "https://github.com/DavidGaso1/AI-News-Update"), ("Live: ainl.vercel.app", "https://ainl.vercel.app")],
)

pdf.section("Certifications")
for cert in [
    "Claude Code 101 — Anthropic Education (2026)",
    "Introduction to Subagents — Anthropic Education (2026)",
    "Introduction to Agent Skills — Anthropic Education (2026)",
    "AI Fluency: Framework and Foundations — Anthropic Education (2026)",
    "Claude 101 — Anthropic Education (2026)",
    "Workflow Automation Training — Udemy (2025)",
    "Data Protection Officer Training — Data Protection Academy (2024)",
    "AWS S3 Fundamentals — AWS Training (2022)",
]:
    pdf.bullet(cert, size=8.35, line=4.0)

pdf.section("Education")
pdf.text_block("Bachelor of Science, Sociology and Anthropology — Obafemi Awolowo University, Ile-Ife (2023).", size=8.7, line=4.2)
pdf.text_block("Academic foundation in systems theory, organizational behavior, and qualitative research applied to human–AI interaction and agent workflow architecture.", size=8.35, color=MUTED, line=4.0)

pdf.output(str(OUT))
print(f"Resume written: {OUT}")
