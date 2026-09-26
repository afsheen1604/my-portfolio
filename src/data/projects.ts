import type { ProjectItem } from "../types"

export const projects: ProjectItem[] = [
  {
    title: "AI Agentic Job Automation Platform",
    description: "", // TODO: [NEEDS INPUT] — planned, not built yet
    status: "planned",
    technologies: [],
  },
  {
    title: "AI Knowledge Workspace",
    description: "", // TODO: [NEEDS INPUT] — planned, not built yet
    status: "planned",
    technologies: [],
  },
  {
    title: "Resume Genie",
    description:
      "Full-stack AI resume platform with REST APIs, JWT authentication, MySQL, real-time editing, and PDF generation. Integrated the Gemini API with structured prompt engineering to generate and refine personalized resume summaries, with end-to-end CRUD workflows across frontend, backend, and database layers.",
    status: "live",
    technologies: ["React", "Strapi CMS", "MySQL", "Gemini API"],
  },
  {
    title: "LookGood",
    description:
      "Full-stack e-commerce application with JWT authentication, REST APIs, MongoDB persistence, cart management, promo codes, and PayPal integration. Backend APIs built with Node.js and Express.js for product, authentication, cart, and order workflows. Deployed on Vercel with a Git-based development workflow.",
    status: "live",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "FusionIIIT — Real-Time ERP Notification System",
    description:
      "Real-time notification system across 15+ campus modules, serving 2,000+ students, built at IIITDM Jabalpur. Optimized PostgreSQL schemas and queries, reducing query latency by 60% under concurrent load. Built reusable Django backend and REST services for integration across multiple modules.",
    status: "live",
    technologies: ["Django", "PostgreSQL", "JavaScript", "Semantic UI"],
  },
  {
    title: "Compylr",
    description: "", // TODO: [NEEDS INPUT]
    status: "live", // confirm actual status
    technologies: [],
  },
  {
    title: "Ivory Edge Interiors",
    description: "", // TODO: [NEEDS INPUT] — not yet detailed
    status: "live", // confirm actual status
    technologies: [],
  },
]