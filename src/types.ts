export interface Project {
  id: string;
  title: string;
  name: string;
  category: string;
  filter: 'All' | 'Recommendation' | 'Systems & Edge' | 'Vision & GAN' | 'Analytics & Platforms';
  description: string;
  highlightSummary: string;
  meta: string;
  isForked: boolean;
  forkedFrom?: string;
  isPrivate: boolean;
  language: string;
  license?: string;
  updatedDate?: string;
  stars?: number;
  forks?: number;
  tags: string[];
  metrics: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  impactBullets: string[];
  technologies: string[];
  websiteUrl?: string;
  logoUrl?: string;
  duration?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  honors?: string;
  location: string;
  websiteUrl?: string;
  logoUrl?: string;
  symbolNote?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; note: string }[];
}

export interface MovieItem {
  id: string;
  title: string;
  year: number;
  genres: string[];
  director: string;
  collaborativeAffinity: number; // 0 to 1
  contentSimilarity: number; // 0 to 1
  posterIcon: string;
  description: string;
}
