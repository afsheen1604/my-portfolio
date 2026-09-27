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
    repoUrl: "https://github.com/afsheen1604/Ai-Resume-Builder",
  },
  {
    title: "LookGood",
    description:
      "Full-stack e-commerce application with JWT authentication, REST APIs, MongoDB persistence, cart management, promo codes, and PayPal integration. Backend APIs built with Node.js and Express.js for product, authentication, cart, and order workflows. Deployed on Vercel with a Git-based development workflow.",
    status: "live",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    repoUrl: "https://github.com/afsheen1604/LookGood",
  },
  {
    title: "FusionIIIT — Real-Time ERP Notification System",
    description:
      "Contributed a real-time notification system to FusionIIIT, an existing open-source campus ERP platform at IIITDM Jabalpur, as part of a group project. Worked on optimizing PostgreSQL schemas and queries to reduce query latency under concurrent load, and built reusable Django backend and REST services integrated across multiple existing modules.",
    status: "live",
    technologies: ["Django", "PostgreSQL", "JavaScript", "Semantic UI"],
    repoUrl: "https://github.com/afsheen1604/FusionIIIT",
  },
  {
    title: "Ivory Edge Interiors",
    description:
      "Interior design portfolio and client engagement platform for a design studio. Public-facing showcase for projects, services, reviews, and gallery content, plus an authenticated admin panel for managing projects, media, and inquiries. Backed by Supabase for auth, database, and media storage.",
    status: "live",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "TanStack Query"],
    liveUrl: "https://ivory-edge-interiors.vercel.app",
    repoUrl: "https://github.com/afsheen1604/ivory-edge-interiors",
  },
]