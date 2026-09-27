import type { ExperienceItem } from "../types"

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer I",
    company: "MAQ Software",
    startDate: "Sep 2025",
    endDate: "Present",
    location: "Hyderabad, India",
    description: [
      "Led an Angular microfrontend migration across 11 MFEs for a platform serving 35,000+ users — designed the migration strategy that let a 10-member team ship 26 React pages and ~500 controls in parallel.",
      "Cut task effort ~20% by building AI-assisted, spec-driven workflows with GitHub Copilot, and owned Jest/Spectator testing to 100% coverage across migrated components.",
      "Built and enhanced an enterprise analytics app (React, C#, .NET, Fluent UI), including a v8→v9 Fluent UI migration and end-to-end delivery from spec through deployment.",
    ],
    technologies: ["Angular", "React", "Jest", "Spectator", "C#", ".NET", "Fluent UI"],
  },
]