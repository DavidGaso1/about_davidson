# Project Repository Manual

A plain-language guide to every repository on [github.com/DavidGaso1](https://github.com/DavidGaso1). Each entry answers four questions: **what it is, what problem it solves, how it was built (phases & challenges), and who it's for.**

> A quick note on terms used below:
> - **RAG** ("retrieval-augmented generation") — an AI that first *looks up* relevant documents, then answers using only what it found, instead of making things up.
> - **n8n** — a visual tool for wiring together apps and AI into automated workflows (like Zapier, but self-hostable).
> - **OCR** — "optical character recognition": turning scanned images/PDFs into searchable text.
> - **CI** ("continuous integration") — automated checks that run on every code change so a broken change never ships unnoticed.

---

## 📋 Quick Glance

| Project | One-line summary | Category |
|---|---|---|
| [Job-Agent](#job-agent) | AI that researches jobs, tailors applications, and drafts submissions | AI agent |
| [VIZO-RAG](#vizo-rag) | Ask questions over company documents and get cited, grounded answers | AI / RAG |
| [HealthRAG](#healthrag) | Safety-first Nigerian health triage that refuses to guess | AI / RAG |
| [ai-nutrition-advisor](#ai-nutrition-advisor) | Personalized nutrition guidance for Nigerian + international foods | AI / RAG |
| [nutrivoice](#nutrivoice) | Voice nutrition assistant in English, Igbo, Hausa & Yoruba | AI / voice |
| [AI-News-Update](#ai-news-update) | Daily AI-news digest that emails itself to you | Automation |
| [ai-email-task-assistant](#ai-email-task-assistant) | Personal AI assistant — email triage, tasks, daily briefings | Automation |
| [ai-academic-assignment-generator](#ai-academic-assignment-generator) | Telegram query → formatted academic assignment | Automation |
| [theldoforce](#theldoforce) | Security-company ops: schedules & alerts to the right person/channel | Automation (client) |
| [zenko-limited](#zenko-limited) | Lead-capture pipeline with AI-personalized follow-ups | Automation (client) |
| [financial-statement-pipeline](#financial-statement-pipeline) | Turn scanned Nigerian financial statements into clean, validated data | Data |
| [data-analysis-projects](#data-analysis-projects) | End-to-end data analysis portfolio (Python, SQL, Power BI, Excel) | Data |
| [Health-Care-Repo](#health-care-repo) | Healthcare data pipeline + readmission-risk ML + clinical-guideline RAG | Data |
| [Data-Cleaning-With-MySQL](#data-cleaning-with-mysql) | Step-by-step data cleaning of Olympic data with MySQL | Data |
| [restaurant-recommender](#restaurant-recommender) | AI restaurant recommendation engine (NutriDine, public) | Full-stack |
| [R-Medy](#r-medy) | Natural-health brand website with lead capture | Full-stack (client) |
| [Remedy-care](#remedy-care) | Static website for a natural-health client | Web (client) |
| [about_davidson](#about_davidson) | This portfolio site | Web |

---

## 🤖 AI Agents & RAG

### Job-Agent

**What it is.** A modular AI agent that researches job postings, judges how well you fit, tailors your resume and cover letter, and prepares the application — through a FastAPI backend and a Chrome extension.

**Problem it solves.** Job applications are repetitive and time-consuming, and generic applications get ignored. This automates the research → tailor → submit pipeline while keeping a human in control.

**Phases & challenges.**
1. **Research** — built page objects for LinkedIn, Indeed, and Glassdoor so a browser can navigate them reliably (the hard part: sites change selectors, so each is isolated and recoverable).
2. **Tailor** — wired Gemini, Groq, and OpenRouter as interchangeable LLM backends so one provider failing doesn't stop the pipeline.
3. **Trust & safety** — added Google OAuth (validated audience, subject, email), user-scoped storage, rate limiting, and a *dry-run gate* so nothing is ever auto-submitted without a human approving the final action.
4. **Production hardening** — request IDs, health checks, retries with backoff, and a full test suite (**111 backend tests + Ruff + strict mypy**) running in CI.

**Who it's for.** Job seekers, career coaches, and any team evaluating agentic-AI + browser-automation engineering.

**Stack.** FastAPI · LangGraph · SQLAlchemy · Playwright · Google OAuth · Chrome Extension · Gemini / Groq / OpenRouter

---

### VIZO-RAG

**What it is.** A source-grounded RAG assistant: you point it at Markdown documents, it turns them into searchable embeddings, retrieves the relevant evidence, and answers — refusing to guess when the evidence isn't there.

**Problem it solves.** Teams have knowledge buried in documents, but asking a generic chatbot produces confident-sounding wrong answers. This keeps answers tied to *actual sources*.

**Phases & challenges.**
1. **Ingestion** — split documents into overlapping chunks so context isn't cut at awkward boundaries.
2. **Retrieval** — embedded chunks with Hugging Face models and searched ChromaDB with similarity thresholds, plus query expansion for broad questions.
3. **Answering** — generated answers with citation gates and explicit refusal when confidence is too low.
4. **Testability** — a 20-test offline suite runs with no API key so retrieval behavior stays repeatable.

**Who it's for.** Organizations needing an internal knowledge assistant; engineers evaluating RAG, embeddings, and grounded-generation skills.

**Stack.** Python · LangChain · ChromaDB · Hugging Face embeddings · Gemini

---

### HealthRAG

**What it is.** A Nigeria-first health triage prototype that checks deterministic safety rules (11 emergency/urgent signals) *before* any retrieval or generation, and gives grounded educational answers in accessible, Pidgin-friendly language.

**Problem it solves.** In low-resource settings, people need trustworthy first guidance — but a hallucinating chatbot in healthcare is dangerous. This is *fail-closed*: it refuses real patient input, never diagnoses, and prioritizes escalation.

**Phases & challenges.**
1. **Safety first** — encoded emergency/urgent rules that run before anything else, so escalation always wins.
2. **Synthetic-only** — built and tested entirely on synthetic scenarios (no real patient data) to stay privacy-safe.
3. **Grounded education** — answers cite sources and refuse to guess; language is localized for Nigeria.
4. **Verification** — 55 tests + 16 synthetic evaluation cases in an offline release gate.

**Who it's for.** Public-health researchers, NGOs, and teams building safe healthcare AI; also a strong demonstration of responsible-AI design.

**Stack.** Python · YAML · RAG · deterministic safety rules · synthetic evaluation

---

### ai-nutrition-advisor

**What it is.** A RAG nutrition advisor with a Nigerian + international food database: allergen detection, personalized advice, ChromaDB semantic search, and both Groq/Gemini LLM backends — plus a rule-based path that works fully offline.

**Problem it solves.** Generic nutrition advice ignores local foods and individual constraints (allergies, health goals). This gives evidence-based, personalized guidance for the foods people actually eat.

**Phases & challenges.**
1. **Data** — built a nutrition knowledge base covering local Nigerian dishes and ingredients.
2. **Retrieval** — vectorized the knowledge into ChromaDB for semantic search.
3. **Personalization** — added allergen severity flags and goal-aware recommendations.
4. **Reliability** — made the whole thing importable and usable *offline* (no API keys, no LLM), with a rule-based fallback and a CI that enforces it.

**Who it's for.** Individuals managing diet/allergies; nutrition-tech products; teams evaluating RAG + multi-LLM design.

**Stack.** Python · ChromaDB · Groq · Gemini · rule-based fallback

---

### nutrivoice

**What it is.** A voice-first AI agent for nutrition consultations, appointment booking, and healthy-food ordering in Nigeria — speaking English, Igbo, Hausa, and Yoruba.

**Problem it solves.** Text-only interfaces exclude many users; voice + local languages make nutrition guidance and ordering accessible to a much wider audience.

**Phases & challenges.**
1. **Voice** — live speech-driven consultations with a real-time transcript.
2. **Languages** — multi-language support (EN/Igbo/Hausa/Yoruba).
3. **Actions** — connected booking and food ordering, with location awareness.

**Who it's for.** Nigerian consumers; health/food-tech products; teams evaluating voice + multilingual AI UX.

**Stack.** React · TypeScript · Gemini

---

## ⚙️ Automation & Workflows

### AI-News-Update

**What it is.** A fully automated daily AI-news digest: a scheduled job fetches RSS sources, deduplicates, builds a newsletter, emails it to subscribers, and publishes a live dashboard.

**Problem it solves.** Keeping up with fast-moving AI news is a chore, and feeds repeat the same story. This delivers one clean, de-duplicated digest every morning — automatically.

**Phases & challenges.**
1. **Fetch** — pulled multiple RSS/API sources on a 6 AM cron.
2. **Dedup** — four layers (retweet filtering, fuzzy title match, URL normalization, cross-day dedup) so the same story appears once.
3. **Delivery** — multi-recipient email plus a Telegram channel.
4. **Freshness & trust** — the archive accumulates 180 days of history, and CI tests the dedup/retention logic so regressions fail the build.

**Who it's for.** Anyone wanting a daily AI briefing; teams evaluating scheduled automation, delivery, and observability.

**Stack.** Python · GitHub Actions · feedparser · SMTP · Vercel · Telegram

---

### ai-email-task-assistant

**What it is.** A personal AI assistant built in n8n: it watches Gmail, runs a Gemini agent with a Google Tasks/Calendar/Drive tool suite, and delivers summaries, follow-ups, a daily TODO, transaction alerts, and weekly reports through Telegram.

**Problem it solves.** Inbox and task overload — the manual grind of reading, triaging, and following up. This automates the busywork and keeps one digestible daily + weekly briefing.

**Phases & challenges.**
1. **Triage** — a Gmail trigger filtered by sender/keyword, with follow-up evaluation.
2. **Agent core** — a Gemini agent with a customizable prompt and a tool suite (Tasks, Gmail, Drive, Calendar).
3. **Automation** — daily TODO (24H trigger), transaction alerts, and Monday weekly reports.
4. **Memory** — Supabase vector store + Postgres chat history for cross-session context.

**Who it's for.** Busy professionals and anyone evaluating AI-driven personal productivity automation.

**Stack.** n8n · Gemini · Telegram · Google Tasks · Supabase

### ai-academic-assignment-generator

**What it is.** An n8n workflow that turns a short Telegram query into a fully formatted academic assignment: Gemini drafts the content, code nodes apply strict formatting, and the result is saved to Google Drive and Sheets.

**Problem it solves.** Formatting academic assignments by hand is tedious and error-prone; this standardizes the output so submissions are consistently formatted.

**Phases & challenges.**
1. **Intake** — a Telegram bot receives the assignment request.
2. **Generate** — Gemini drafts the structured content.
3. **Format & deliver** — HTML with strict academic formatting, uploaded to Google Drive and logged to Google Sheets.

**Who it's for.** Students and anyone learning n8n + AI content generation.

**Stack.** n8n · Gemini · Telegram · Google Drive · Google Sheets

---

### theldoforce

**What it is.** An operations-automation system for a security-services client: it distributes shift schedules, security alerts, and task assignments to the right person, on the right channel, with the right level of detail (Telegram, Gmail, WhatsApp).

**Problem it solves.** Broadcast noise — everyone getting everything. This *tiers* each message per role so a field officer gets a short Telegram note while the ops director gets full context by email.

**Phases & challenges.**
1. **Validation** — a Python module validates and normalizes each message (type, subject, body, priority, roles).
2. **Tiering & routing** — role-based condensation and channel selection.
3. **Reliability** — retries, circuit breaker, dedup, rate limiting, timezone-aware scheduling, and dual-channel failure alerts.

**Who it's for.** Security/operations teams; a client-delivery case study showing production automation beyond prototypes.

**Stack.** n8n · Python · Supabase · Telegram · Gmail · WhatsApp Business

---

### zenko-limited

**What it is.** An end-to-end lead-capture pipeline for a DTC health brand (40–80 age demographic): webhook capture → validation → AI-personalized email → Supabase persistence.

**Problem it solves.** Raw leads are messy and follow-ups are generic. This cleans, validates, and personalizes each lead before a human ever sees it.

**Phases & challenges.**
1. **Capture** — webhook + Excel/Google-Drive backup so raw data is never lost.
2. **Validation** — email/phone/age-range checks and smart dedup (one customer can be multiple valid leads).
3. **Personalization** — Gemini writes a tailored email per lead.
4. **Reliability** — retries, AI timeouts, Telegram alerting, and circuit-breaking.

**Who it's for.** DTC/e-commerce marketing teams; a client-delivery case study in lead automation.

**Stack.** n8n · Python · Gemini · Supabase · Google Drive · Email

---

## 📊 Data Engineering & Analysis

### financial-statement-pipeline

**What it is.** A document-processing pipeline that turns OCR output from scanned Nigerian financial statements into structured, validated data — with confidence scoring, field detection, parsing, and exporters.

**Problem it solves.** Financial documents are scanned images; extracting accurate numbers by hand is slow and error-prone. This automates the conversion with validation at every step.

**Phases & challenges.**
1. **OCR ingestion** — accept OCR text and normalize it.
2. **Parsing & detection** — detect fields, parse numbers, score confidence.
3. **Validation** — structured, validated output (Pydantic) with focused modules and tests for parsing, detection, logging, and export.

**Who it's for.** Finance/audit teams, and engineers evaluating document-processing and data-validation skills.

**Stack.** Python · OCR · Pydantic · pytest · GitHub Actions

---

### data-analysis-projects

**What it is.** A portfolio of end-to-end data analysis projects built with Python, SQL, Power BI, and Excel, each following the same workflow: **obtain data → clean → explore → model/summarize → present actionable findings.**

**Problem it solves.** Demonstrates the full analysis lifecycle on real datasets — not just charts, but the cleaning and reasoning that make findings trustworthy.

**Phases & challenges.**
1. **Obtain** — source raw datasets.
2. **Clean** — handle missing/bad data.
3. **Explore & model** — find patterns and summarize.
4. **Present** — turn findings into business-actionable insight (dashboards/workbooks).

**Who it's for.** Hiring managers assessing data-analysis fundamentals across multiple tools.

**Stack.** Python · SQL · Jupyter · Power BI · Excel

---

### Health-Care-Repo

**What it is.** A healthcare data-engineering pipeline: ingest legacy SQL, patch/validate foreign keys, generate seeded synthetic data, train a readmission-risk ML model, and run a clinical-guideline RAG — packaged as an installable Python project with a Streamlit demo and Docker.

**Problem it solves.** Healthcare data is messy and fragmented. This unifies it into a validated, queryable pipeline and adds ML + RAG on top.

**Phases & challenges.**
1. **Pipeline** — env-driven SQLAlchemy engine, schema bootstrap, ingest + foreign-key patching.
2. **ML** — XGBoost readmission-risk classifier over engineered features.
3. **RAG** — offline-first clinical-guideline retrieval (TF-IDF cosine similarity; no GPU/downloads in CI).
4. **Demo & CI** — Streamlit app; 19 tests with a Python 3.10–3.12 matrix + Postgres service.

**Who it's for.** Healthcare-data teams; engineers evaluating data pipelines, ML, and offline RAG.

**Stack.** Python · SQLAlchemy · XGBoost · Streamlit · Docker · GitHub Actions

---

### Data-Cleaning-With-MySQL

**What it is.** A step-by-step data-cleaning and analysis project on 120 years of Olympic Games data using MySQL.

**Problem it solves.** Real-world data is dirty; this walks through loading, cleaning, and querying a large dataset to answer real questions (games held, medals, seasons).

**Phases & challenges.**
1. **Load** — 271k athlete records + NOC regions + medal tallies into MySQL.
2. **Clean & validate** — schema creation and data-quality checks.
3. **Analyze** — SQL queries drawing insights from the cleaned data.

**Who it's for.** Learners and hiring managers assessing SQL/data-cleaning fundamentals.

**Stack.** MySQL · SQL · CSV

---

## 🌐 Web & Full-Stack

### restaurant-recommender

**What it is.** The public engine behind **NutriDine** — an AI restaurant recommendation system using hybrid collaborative + content-based filtering with location and time awareness (FastAPI backend, React frontend).

**Problem it solves.** "Where should I eat?" depends on taste, location, and time. This blends signals to recommend restaurants that actually fit the moment.

**Phases & challenges.**
1. **Modeling** — hybrid recommendation (collaborative + content-based) in scikit-learn.
2. **API** — FastAPI endpoints for recommendations, cuisine suggestions, and user profiles.
3. **Frontend** — React SPA with search, dashboard, and interaction tracking.
4. **Quality** — 33 backend tests + frontend build in CI.

**Who it's for.** Food-tech products; engineers evaluating recommendation systems and full-stack delivery.

**Stack.** FastAPI · React · scikit-learn · SQLAlchemy

---

### R-Medy

**What it is.** A production Next.js/TypeScript website for a natural-health brand, with AI-assisted lead capture, secure webhook integration, and a live deployment.

**Problem it solves.** A client needed a modern storefront that captures leads securely and runs in production — not just a prototype.

**Phases & challenges.**
1. **Frontend** — responsive product/content experience (Next.js, Tailwind).
2. **Leads** — form capture wired to secure webhooks.
3. **Deployment & security** — documented deployment plus a security-remediation pass.

**Who it's for.** The natural-health client; a demonstration of shipping client-facing web products.

**Stack.** Next.js · TypeScript · Tailwind CSS · Webhooks

---

### Remedy-care

**What it is.** A static website for the Remedy Care natural-health brand, deployed to GitHub Pages with webhook integration for form submissions.

**Problem it solves.** A lightweight, fast, low-cost web presence for a client with working lead capture.

**Phases & challenges.**
1. **Build** — static React site.
2. **Forms** — webhook integration for submissions.
3. **Deploy** — automated GitHub Pages deployment.

**Who it's for.** The Remedy Care client.

**Stack.** TypeScript · React · GitHub Pages

---

### about_davidson

**What it is.** This portfolio site — a dark-themed React/TypeScript site with a WebGL shader background, project showcase, and downloadable resume.

**Problem it solves.** A single place that presents the person, skills, and projects behind the repositories above.

**Who it's for.** Recruiters and hiring managers.

**Stack.** React · TypeScript · Vite · Tailwind · WebGL

---

## 🔗 How it all connects

The repositories are one theme viewed from different angles: **take a real, messy problem and make it reliable, observable, and safe.**

- The **RAG/agent** projects (VIZO-RAG, HealthRAG, ai-nutrition-advisor, Job-Agent) show how to make AI *grounded and trustworthy* instead of impressive-but-wrong.
- The **automation** projects (AI-News-Update, ai-email-task-assistant, ai-academic-assignment-generator, theldoforce, zenko-limited) show how to move AI from a demo into *production workflows* with retries, alerting, and human review.
- The **data** projects (financial-statement-pipeline, data-analysis-projects, Health-Care-Repo, Data-Cleaning-With-MySQL) show the *foundation* — clean, validated data.
- The **web** projects (restaurant-recommender, R-Medy, Remedy-care, about_davidson) show the *delivery* — real products people actually use.

Every repository is MIT-licensed, documented, and covered by CI so a recruiter can verify claims by clicking a badge.

*Note: a few repositories are private (NutriDine — the full restaurant monorepo; zenko-limited and Data-Cleaning-With-MySQL — client/work projects) and therefore don't appear in the public profile.*
