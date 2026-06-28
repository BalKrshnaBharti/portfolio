// ============================================================
//   EDIT EVERYTHING HERE — BAAKI FILES MAT CHHONA 😄
// ============================================================

const PORTFOLIO = {

  // ----------------------------------------------------------
  // PERSONAL INFO
  // ----------------------------------------------------------
  name:       "Bal Krishna Bharti",
  initials:   "BK",
  title:      "AI Engineer · Agentic AI · GenAI · DevOps Automation",
  location:   "Bhubaneswar, Odisha",
  phone:      "+91 7461920628",
  email:      "bkb1662000@gmail.com",
  linkedin:   "https://linkedin.com/in/bal-krishna-bharti",   // apna sahi URL daalo
  github:     "https://github.com/BalKrshnaBharti",
  available:  true,   // false karo to "Available" badge hatega

  tagline: "Building autonomous AI agents that think, decide, and act — from self-healing CI/CD pipelines to intelligent DevOps systems. 3+ years shaping the future of AI-powered engineering at Infosys.",

  about: [
    "I'm an experienced AI Engineer specializing in <strong>Generative AI</strong> and <strong>Agentic AI</strong> solutions for DevOps automation, currently working as a Technology Analyst at Infosys.",
    "My work centers around building intelligent agents that automate complex engineering workflows — from autonomous pipeline remediation to AI-driven code migration. I work daily with LLMs, RAG pipelines, MCP servers, and modern DevOps tooling.",
    "Based in Bhubaneswar, Odisha. Passionate about pushing the boundaries of what AI agents can do in enterprise environments."
  ],

  heroChips: ["LangChain","LangGraph","RAG","FastAPI","GitHub Copilot","Claude API","MCP Server"],

  // ----------------------------------------------------------
  // STATS (About section ke neeche)
  // ----------------------------------------------------------
  stats: [
    { num: "3+",  label: "Years Experience" },
    { num: "10+", label: "AI Projects" },
    { num: "5",   label: "Hackathons" }
  ],

  // ----------------------------------------------------------
  // SKILLS
  // ----------------------------------------------------------
  skills: [
    {
      category: "🤖 AI & Machine Learning",
      tags: ["Generative AI","Agentic AI","LLMs","RAG","NLU","Prompt Engineering","Chatbot Development","LangChain","LangGraph","MCP Server"]
    },
    {
      category: "⚙️ DevOps & Cloud",
      tags: ["CI/CD Pipelines","GitHub Actions","Harness","Docker","Kubernetes","Terraform","Azure","AWS","Ansible"]
    },
    {
      category: "🛠️ Tools & Platforms",
      tags: ["GitHub Copilot","Claude Code","Cursor IDE","Devin AI","Gemini CLI","VS Code","Jira","Confluence","HuggingFace"]
    },
    {
      category: "💻 Languages & Frameworks",
      tags: ["Python","FastAPI","Streamlit","ChromaDB","FAISS","pgvector","PostgreSQL","ReactJS"]
    }
  ],

  // ----------------------------------------------------------
  // EXPERIENCE
  // ----------------------------------------------------------
  experience: [
    {
      role:     "Technology Analyst",
      company:  "Infosys · Northern Trust Engagement",
      date:     "Jan 2026 – Present",
      color:    "accent",   // accent | purple | cyan | gray
      points: [
        "<strong>Self-Healing CI/CD Pipeline:</strong> Built a fully autonomous agentic AI system that detects pipeline failures, analyses logs, determines root cause, and either auto-remediates or escalates via MCP server.",
        "<strong>Container Vulnerability Remediation:</strong> AI agent scans Docker images (JFrog + Trivy/Snyk), auto-fixes Dockerfile vulnerabilities, and raises pull requests on GitHub via GitHub MCP server."
      ]
    },
    {
      role:     "Senior Systems Engineer",
      company:  "Infosys",
      date:     "Jan 2025 – Jan 2026",
      color:    "purple",
      points: [
        "<strong>ADO-to-GitHub Actions Migration:</strong> AI-driven migration with confidence scoring — re-runs up to 3 times to achieve 90%+ accuracy.",
        "<strong>Shell-to-Ansible Migration:</strong> Used Gen AI to migrate legacy Shell scripts to Ansible playbooks with reliability testing.",
        "<strong>Confluence RAG Chatbot:</strong> DevOps troubleshooting chatbot using RAG, similarity scoring, and image-based retrieval.",
        "<strong>Harness AIDA:</strong> Explored Harness AI to streamline SDLC, reducing time and cost."
      ]
    },
    {
      role:     "System Engineer",
      company:  "Infosys",
      date:     "Apr 2023 – Dec 2024",
      color:    "cyan",
      points: [
        "Gemini API chatbot with Streamlit UI.",
        "Multi-source semantic search across Confluence, SharePoint, and local repos using embeddings and vector retrieval.",
        "Chef-to-Ansible migration automation using AI.",
        "Infrastructure-as-Code generation: LLM → Terraform code → auto GitHub commit → pipeline validation.",
        "YAML to Harness YAML code migration."
      ]
    },
    {
      role:     "System Engineer Trainee",
      company:  "Infosys",
      date:     "Oct 2022 – Mar 2023",
      color:    "gray",
      points: [
        "Foundation training in Java, DBMS, and ReactJS.",
        "Built 'Wanderlust' capstone travel booking app with auth and booking flows."
      ]
    }
  ],

  // ----------------------------------------------------------
  // PROJECTS
  // ----------------------------------------------------------
  projects: [
    {
      icon:  "🤖",
      color: "blue",   // blue | purple | cyan
      title: "Self-Healing CI/CD Pipeline",
      desc:  "Autonomous AI agent using LangGraph + Claude that detects GitHub Actions failures, analyses logs with RAG, and auto-remediates or escalates via MCP server.",
      tags:  ["LangGraph","Claude API","MCP Server","RAG","GitHub Actions"]
    },
    {
      icon:  "🔒",
      color: "purple",
      title: "Container Vulnerability Remediation",
      desc:  "AI agent scans Docker images from JFrog using Trivy/Snyk, auto-fixes Dockerfile vulnerabilities, and raises PRs via GitHub MCP server.",
      tags:  ["Docker","Trivy","GitHub MCP","AI Agent","JFrog"]
    },
    {
      icon:  "📑",
      color: "cyan",
      title: "ADO → GitHub Actions Migrator",
      desc:  "AI-driven migration tool with confidence scoring that validates each conversion and re-runs until 90% accuracy is achieved.",
      tags:  ["Azure DevOps","GitHub Actions","Gen AI","YAML"]
    },
    {
      icon:  "🔍",
      color: "blue",
      title: "Multi-Source Semantic Search",
      desc:  "Enterprise semantic search across Confluence, SharePoint, and local docs using Python embeddings and vector-based retrieval.",
      tags:  ["Python","Embeddings","Vector DB","Confluence","SharePoint"]
    },
    {
      icon:  "🏗️",
      color: "purple",
      title: "AI Terraform Code Generator",
      desc:  "User inputs → LLM generates Terraform IaC → auto commits to GitHub → pipeline validates. Zero manual coding.",
      tags:  ["Terraform","LLM","GitHub","IaC","FastAPI"]
    },
    {
      icon:  "💬",
      color: "cyan",
      title: "Confluence RAG Chatbot",
      desc:  "DevOps troubleshooting chatbot with RAG, similarity scoring, image-based retrieval, and AI generation for unmatched queries.",
      tags:  ["RAG","LangChain","Confluence","Streamlit","Gemini"]
    }
  ],

  // ----------------------------------------------------------
  // HACKATHONS
  // ----------------------------------------------------------
  hackathons: [
    {
      org:   "AWS",
      title: "Gen AI Driveathon",
      desc:  "Built a Self-Healing CI/CD Pipeline agent that autonomously detects failures, analyses logs, and remediates issues."
    },
    {
      org:   "Anthropic",
      title: "Anthropic Hackathon",
      desc:  "Developed a Regulatory Change Management System to track, analyse, and summarize regulatory updates using Claude."
    },
    {
      org:   "Microsoft",
      title: "Copilot Innovation Jam",
      desc:  "Built an HR Recruitment Assistant Agent in Copilot Studio — analyses resumes, ranks candidates, and suggests shortlists."
    },
    {
      org:   "Cursor AI",
      title: "Cursor AI Hackathon",
      desc:  "Created a Migration Assessment and Validation tool using AI to evaluate and verify code migration accuracy."
    },
    {
      org:   "Google",
      title: "Gemini CLI Buildathon",
      desc:  "In Progress — building a project leveraging Gemini CLI for developer productivity automation."
    }
  ],

  // ----------------------------------------------------------
  // CERTIFICATIONS
  // ----------------------------------------------------------
  certifications: [
    { icon: "🧠", name: "Claude Certified Architect",          issuer: "Anthropic · Foundations" },
    { icon: "🐙", name: "Microsoft GitHub Copilot",            issuer: "Microsoft · Valid Nov 2027" },
    { icon: "⚡", name: "Infosys Certified GenAI Professional", issuer: "Infosys" },
    { icon: "🐍", name: "Infosys Certified Python Programmer",  issuer: "Infosys" },
    { icon: "🤖", name: "Infosys Certified Agentic AI",         issuer: "Infosys" }
  ],

  // ----------------------------------------------------------
  // AWARDS
  // ----------------------------------------------------------
  awards: [
    { emoji: "🏆", name: "ENG - RISE Award for Best Team BTN",        date: "March 2026" },
    { emoji: "⭐", name: "Certificate of Appreciation - INSTA Award", date: "March 2026" },
    { emoji: "🏅", name: "Certificate of Appreciation - INSTA Award", date: "December 2025" },
    { emoji: "🥇", name: "Best Team BTN - Unit RISE Award",           date: "September 2025" },
    { emoji: "⭐", name: "Certificate of Appreciation - INSTA Award", date: "September 2025" }
  ],

  // ----------------------------------------------------------
  // EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      icon:   "🎓",
      uni:    "Visvesvaraya Technological University (VTU)",
      degree: "Bachelor of Engineering",
      place:  "Bangalore, Karnataka",
      years:  "2018 – 2022",
      cgpa:   "8.0 / 10"
    }
  ],

  // ----------------------------------------------------------
  // FOOTER
  // ----------------------------------------------------------
  footerText: "Built with ❤️ by Bal Krishna Bharti · AI Engineer · 2026"

};
