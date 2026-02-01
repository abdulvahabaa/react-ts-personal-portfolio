import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiRedis,
  SiDocker,
} from 'react-icons/si';

export interface TechStackItem {
  icon: IconType;
  name: string;
  color: string;
}

const techStacks: Record<string, TechStackItem> = {
  react: { icon: SiReact, name: 'React', color: '#00cfff' },
  node: { icon: SiNodedotjs, name: 'Node.js', color: '#228b22' },
  firebase: { icon: SiFirebase, name: 'Firebase', color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: 'TypeScript', color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: 'Next.js', color: '#' },
  mongodb: { icon: SiMongodb, name: 'MongoDB', color: '#10b981' },
  prisma: { icon: SiPrisma, name: 'Prisma', color: '#186997' },
  shadcn: { icon: SiShadcnui, name: 'ShadCN', color: '#6366f1' },
  framer: { icon: SiFramer, name: 'Framer Motion', color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: 'Socket.io', color: '#' },
  stripe: { icon: SiStripe, name: 'Stripe', color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: 'Appwrite', color: '#ff3d00' },
};

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  techStack: TechStackItem[];
}

export const projects: ProjectItem[] = [
  {
    title: 'Personal Portfolio',
    description:
      'My portfolio website, showcasing my professional background and more. Clean, responsive, and shows off my work while keeping things simple and professional.',
    image: '/assets/img/portfolio.png',
    link: 'https://abdulvahabaaa.in/',
    github: 'https://github.com/abdulvahabaa/react-ts-personal-portfolio',
    techStack: [
      { icon: SiHtml5, name: 'HTML', color: '#e34c26' },
      { icon: SiCss3, name: 'CSS', color: '#264de4' },
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
    ],
  },
  {
    title: 'Node-Mongoose-JWT-APIs-TS',
    description:
      'Production-grade REST API built with Node.js, TypeScript, Express, MongoDB, Redis and Docker. Includes Jest, Supertest, test Coverage and Docker Compose.',
    image: '/assets/img/Backend API.png',
    link: '',
    github: 'https://github.com/abdulvahabaa/Node-Mongoose-JWT-APIs-TS',
    techStack: [
      techStacks.node,
      { icon: SiExpress, name: 'Express', color: '#000' },
      techStacks.typescript,
      techStacks.mongodb,
      { icon: SiRedis, name: 'Redis', color: '#dc382d' },
      { icon: SiDocker, name: 'Docker', color: '#2496ed' },
    ],
  },
  {
    title: 'Modern Portfolio',
    description:
      'This is a modern developer portfolio. Designed with a clean UI/UX, smooth animations, and dynamic content. it is fully responsive and optimized for performance.',
    image: '/assets/img/modern-portfolio.png',
    link: 'https://modern-portfolio-eta-eight.vercel.app/',
    github: 'https://github.com/abdulvahabaa/modern-portfolio',
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
];
