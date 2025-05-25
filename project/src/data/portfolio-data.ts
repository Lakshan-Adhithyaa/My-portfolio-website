import { NavItem, Project, Skill, SocialLink } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const ROLES = ['Software Developer', 'UI/UX Designer', 'Problem Solver'];

export const SKILLS: Skill[] = [
  {
    name: 'JavaScript',
    percentage: 90,
    icon: 'Code2',
    category: 'Programming',
  },
  {
    name: 'React',
    percentage: 85,
    icon: 'Atom',
    category: 'Programming',
  },
  {
    name: 'TypeScript',
    percentage: 80,
    icon: 'FileCode',
    category: 'Programming',
  },
  {
    name: 'Node.js',
    percentage: 75,
    icon: 'Server',
    category: 'Programming',
  },
  {
    name: 'CSS/SCSS',
    percentage: 85,
    icon: 'Palette',
    category: 'Programming',
  },
  {
    name: 'Figma',
    percentage: 80,
    icon: 'Figma',
    category: 'Tools',
  },
  {
    name: 'Git',
    percentage: 85,
    icon: 'GitBranch',
    category: 'Tools',
  },
  {
    name: 'VS Code',
    percentage: 90,
    icon: 'Code',
    category: 'Tools',
  },
  {
    name: 'Communication',
    percentage: 95,
    icon: 'MessageSquare',
    category: 'Soft Skills',
  },
  {
    name: 'Teamwork',
    percentage: 90,
    icon: 'Users',
    category: 'Soft Skills',
  },
  {
    name: 'Problem Solving',
    percentage: 85,
    icon: 'Lightbulb',
    category: 'Soft Skills',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with React, Node.js, and MongoDB.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag and drop functionality.',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['React', 'TypeScript', 'Firebase'],
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current and forecasted weather data.',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['JavaScript', 'API', 'CSS'],
  },
  {
    id: 'project-4',
    title: 'Blog Platform',
    description: 'A full-stack blog platform with authentication and content management.',
    image: 'https://images.pexels.com/photos/34153/pexels-photo.jpg',
    github: 'https://github.com',
    demo: 'https://demo.com',
    tags: ['Next.js', 'Tailwind CSS', 'Prisma'],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:hello@example.com',
    icon: 'Mail',
  },
];