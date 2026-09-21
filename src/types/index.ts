export interface ExperienceItem {
  role: string
  company: string
  startDate: string
  endDate: string // "Present" if ongoing
  location?: string
  description: string[]
  technologies?: string[]
}

export interface ProjectItem {
  title: string
  description: string
  status: "live" | "in-progress" | "planned"
  technologies: string[]
  liveUrl?: string
  repoUrl?: string
  imageUrl?: string
  featured?: boolean
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface AchievementItem {
  title: string
  description: string
  date?: string
  url?: string
}