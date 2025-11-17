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
  SiVercel,
  SiFigma,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiPostgresql,
  SiPrisma,
  SiDjango,
  SiPython,
  SiDocker,
  SiRedis,
  SiPostman,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
} from 'react-icons/si';
import { FaNodeJs, FaAws } from 'react-icons/fa';
import { VscVscode, VscTerminalPowershell } from 'react-icons/vsc';

const skills = [
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
  { name: 'React', icon: SiReact, color: '#61dafb', url: 'https://react.dev/' },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06b6d4',
    url: 'https://tailwindcss.com/',
  },
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
    name: 'GraphQL',
    icon: SiGraphql,
    color: '#e535ab',
    url: 'https://graphql.org/',
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#306998',
    url: 'https://www.python.org/',
  },
  {
    name: 'Django',
    icon: SiDjango,
    color: '#306998',
    url: 'https://www.djangoproject.com/',
  },
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
    color: '#186997',
    url: 'https://www.prisma.io/',
  },
  { name: 'Git', icon: SiGit, color: '#f34f29', url: 'https://git-scm.com/' },
  { name: 'GitHub', icon: SiGithub, color: '# ', url: 'https://github.com/' },
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#007acc',
    url: 'https://www.docker.com/',
  },
  {
    name: 'Redis',
    icon: SiRedis,
    color: '#dc382d',
    url: 'https://redis.io/',
  },
  {
    name: 'AWS',
    icon: FaAws,
    color: '#ff9900',
    url: 'https://aws.amazon.com/',
  },
  {
    name: 'PowerShell',
    icon: VscTerminalPowershell,
    color: '#',
    url: 'https://docs.microsoft.com/en-us/powershell/',
  },
  {
    name: 'Postman',
    icon: SiPostman,
    color: '#ff6c37',
    url: 'https://www.postman.com/',
  },
  {
    name: 'VS Code',
    icon: VscVscode,
    color: '#007acc',
    url: 'https://code.visualstudio.com/',
  },
  { name: 'Vercel', icon: SiVercel, color: '#', url: 'https://vercel.com/' },
  {
    name: 'Figma',
    icon: SiFigma,
    color: '#f24e1e',
    url: 'https://www.figma.com/',
  },
  {
    name: 'Photoshop',
    icon: SiAdobephotoshop,
    color: '#007acc',
    url: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    name: 'Illustrator',
    icon: SiAdobeillustrator,
    color: '#ff9900',
    url: 'https://www.adobe.com/products/illustrator.html',
  },
  {
    name: 'Adobe XD',
    icon: SiAdobexd,
    color: '#e535ab',
    url: 'https://www.adobe.com/products/xd.html',
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
