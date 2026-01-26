import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SkillCard } from './ui/SkillCard';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiDocker,
  SiRedis,
  SiPostman,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiAdobepremierepro,
  SiAngular,
  SiKubernetes,
  SiNx,
  SiNestjs,
  SiBitbucket,
} from 'react-icons/si';
import { FaNodeJs, FaAws } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  // Frontend Fundamentals
  {
    name: 'HTML',
    icon: SiHtml5,
    color: '#e34f26',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: SiCss3,
    color: '#1572b6',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#f7df1e',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178c6',
    url: 'https://www.typescriptlang.org/',
  },
  // Frontend Frameworks
  { name: 'React', icon: SiReact, color: '#61dafb', url: 'https://react.dev/' },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Angular',
    icon: SiAngular,
    color: '#dd0031',
    url: 'https://angular.io/',
  },
  {
    name: 'NX',
    icon: SiNx,
    color: '#143055',
    url: 'https://nx.dev/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06b6d4',
    url: 'https://tailwindcss.com/',
  },
  // Backend Technologies
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#68a063',
    url: 'https://nodejs.org/',
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#68a063',
    url: 'https://expressjs.com/',
  },
  {
    name: 'Nest.js',
    icon: SiNestjs,
    color: '#e0234e',
    url: 'https://nestjs.com/',
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776ab',
    url: 'https://www.python.org/',
  },
  // Databases & ORMs
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47a248',
    url: 'https://www.mongodb.com/',
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#336791',
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Prisma',
    icon: SiPrisma,
    color: '#2d3748',
    url: 'https://www.prisma.io/',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    color: '#dc382d',
    url: 'https://redis.io/',
  },
  // DevOps & Cloud
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ed',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    color: '#326ce5',
    url: 'https://kubernetes.io/',
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: '#ff9900',
    url: 'https://aws.amazon.com/',
  },
  // Version Control
  { name: 'Git', icon: SiGit, color: '#f34f29', url: 'https://git-scm.com/' },
  { name: 'GitHub', icon: SiGithub, color: '# ', url: 'https://github.com/' },
  { name: 'Bitbucket', icon: SiBitbucket, color: '#0052cc', url: 'https://bitbucket.org/' },
  // Development Tools
  {
    name: 'VS Code',
    icon: VscVscode,
    color: '#007acc',
    url: 'https://code.visualstudio.com/',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    color: '#ff6c37',
    url: 'https://www.postman.com/',
  },
  // Design Tools
  {
    name: 'Figma',
    icon: SiFigma,
    color: '#f24e1e',
    url: 'https://www.figma.com/',
  },
  {
    name: 'Photoshop',
    icon: SiAdobephotoshop,
    color: '#31A8FF',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    name: 'Illustrator',
    icon: SiAdobeillustrator,
    color: '#FF9A00',
    url: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    name: 'Adobe XD',
    icon: SiAdobexd,
    color: '#FF61F6',
    url: 'https://www.adobe.com/products/xd.html',
  },
  {
    name: 'Premiere Pro',
    icon: SiAdobepremierepro,
    color: '#9999FF',
    url: 'https://www.adobe.com/products/premiere.html',
  },
];

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="A modern tech stack designed for impact, efficiency, and scale.">
            Skills
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map(tech => (
              <SkillCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                url={tech.url}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
