import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
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

// Define reusable tech stack icons & colors
const techStacks = {
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

// Define projects data
const projects = [
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
      {icon: SiRedis, name: 'Redis', color: '#dc382d' },
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

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Every project, a product. Every product, a solution with a story.">
            Projects
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
