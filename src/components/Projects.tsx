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
  SiJavascript,
  SiBootstrap,
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
    title: 'Aquawatt',
    description:
      'A platform for track and monitor the water and electricity in each room or areas. It is a Full-stack and Iot based real time project.',
    image: '/assets/aquawatt.png',
    link: 'https://aquawatt-org.web.app/',
    github: 'https://github.com/dineshit27/aquawatt-org',
    techStack: [
      { icon: SiHtml5, name: 'HTML', color: '#e34c26' },
      { icon: SiCss3, name: 'CSS', color: '#264de4' },
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },
  {
    title: 'Brain Tumour Detector',
    description:
      'My first real freelance project! where I built the website’s front-end. Clean design, responsive UI and user friendly navigation.',
    image: '/assets/brain.png',
    link: 'https://tumour-spotter-ai.lovable.app',
    github: 'https://github.com/dineshit27/tumour-spotter-ai',
    techStack: [
      { icon: SiHtml5, name: 'HTML', color: '#e34c26' },
      { icon: SiCss3, name: 'CSS', color: '#264de4' },
      techStacks.typescript,
      techStacks.react,
      techStacks.tailwind,
      techStacks.firebase,
    ],
  },
  {
    title: 'Portfolio Website',
    description:
      'My portfolio website, showcasing my professional background and more. Clean, responsive, and shows off my work while keeping things simple and professional.',
    image: '/assets/p2.png',
    link: 'https://m-dinesh-30.web.app/',
    github: 'https://github.com/dineshit27/portfolio-web-pvt',
    techStack: [
      techStacks.next,
      techStacks.react,
      techStacks.typescript,
      techStacks.tailwind,
      techStacks.framer,
    ],
  },
  {
    title: 'FoodieHub430',
    description:
      'A modern restaurant discovery platform that helps food lovers find their perfect dining experience. With an intuitive interface & powerful search capabilities.',
    image: '/assets/food.png',
    link: 'https://foodie-hub430.netlify.app/',
    github: 'https://github.com/dineshit27/FoodieHub430',
    techStack: [
      { icon: SiHtml5, name: 'HTML', color: '#e34c26' },
      { icon: SiCss3, name: 'CSS', color: '#264de4' },
      { icon: SiJavascript, name: 'JavaScript', color: '#f0db4f' },
      { icon: SiBootstrap, name: 'Bootstrap', color: '#563d7c' },
    ],
  },
  {
    title: 'Business Website',
    description:
      'A business website showcasing portfolio, services, client testimonials, and contact section with responsive design and modern UI/UX styling.',
    image: '/assets/jdmweb.png',
    link: 'https://jdm-studio430.netlify.app/',
    github: 'https://github.com/dineshit27/jdm-studio430-website',
    techStack: [
      { icon: SiHtml5, name: 'HTML', color: '#e34c26' },
      { icon: SiCss3, name: 'CSS', color: '#264de4' },
      { icon: SiJavascript, name: 'JavaScript', color: '#f0db4f' },
      { icon: SiBootstrap, name: 'Bootstrap', color: '#563d7c' },
    ],
  },
  {
    title: 'Tech-Hub430',
    description:
      'It is a E-commerce website which showcase the product price and details, discounts, client testimonials, our services, etc.',
    image: '/assets/techhub430.png',
    link: 'https://tech-hub430.netlify.app/',
    github:
      'https://github.com/dineshit27/TechnoHacks-Ecommerce-Website-Tech-hub430',
    techStack: [
      { icon: SiHtml5, name: 'HTML', color: '#e34c26' },
      { icon: SiCss3, name: 'CSS', color: '#264de4' },
      { icon: SiJavascript, name: 'JavaScript', color: '#f0db4f' },
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
