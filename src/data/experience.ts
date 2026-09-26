import type { ExperienceItem } from "../types"

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer I",
    company: "MAQ Software",
    startDate: "Sep 2025",
    endDate: "Present",
    location: "Hyderabad, India",
    description: [
      "Delivered an Angular microfrontend migration across 11 MFEs and a shell for a platform serving 35,000+ users across 260+ corporate legal departments.",
      "Designed a dependency-driven migration strategy, enabling a 10-member team to migrate 26 React pages and ~500 controls in parallel.",
      "Built AI-assisted, spec-driven workflows using GitHub Copilot, reducing task effort from ~10 hours to ~8 hours (~20% improvement).",
      "Owned Jest and Spectator automated testing, achieving 100% code coverage across migrated components, services, pipes, guards, and controls.",
      "Developed and enhanced an enterprise analytics application (React, C#, .NET, Fluent UI), delivering client features and resolving application defects.",
      "Migrated selected Fluent UI components from v8 to v9, improving UI consistency and functionality.",
      "Followed a spec-driven workflow covering requirements, architecture, security, implementation planning, test strategy, and readiness.",
      "Automated development and testing workflows using Janus and ePlay, reducing manual effort and improving consistency.",
      "Managed end-to-end delivery from Jira task analysis through implementation, automated testing, build, deployment, and validation.",
    ],
    technologies: ["Angular", "React", "Jest", "Spectator", "C#", ".NET", "Fluent UI"],
  },
]