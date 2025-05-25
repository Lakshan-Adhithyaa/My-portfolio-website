export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: string;
  category: 'Programming' | 'Tools' | 'Soft Skills';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github?: string;
  demo?: string;
  tags: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}