import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { SkillCard } from "./ui/SkillCard";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiBootstrap,
  SiMysql,
  SiNetlify,
  SiCanva,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs, FaPython, FaJava, FaAws, FaMicrosoft } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import { BiBarChartAlt2, BiBrain } from "react-icons/bi";

const skills = [
  {
    name: "HTML",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#ffd600",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06b6d4",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952b3",
    url: "https://getbootstrap.com/",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479a1",
    url: "https://www.mysql.com/",
  },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    url: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#ffca28",
    url: "https://firebase.google.com/",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#f7b731",
    url: "https://www.java.com/",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "#306998",
    url: "https://www.python.org/",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#ff9900",
    url: "https://aws.amazon.com/",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    color: "#007acc",
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Cursor IDE",
    icon: BiBrain,
    color: "#00d4aa",
    url: "https://cursor.sh/",
  },
  { name: "Git", icon: SiGit, color: "#f34f29", url: "https://git-scm.com/" },
  { name: "GitHub", icon: SiGithub, color: "# ", url: "https://github.com/" },
  { name: "Vercel", icon: SiVercel, color: "#", url: "https://vercel.com/" },
  {
    name: "Netlify",
    icon: SiNetlify,
    color: "#00c7b7",
    url: "https://www.netlify.com/",
  },
  {
    name: "Excel",
    icon: FaMicrosoft,
    color: "#217346",
    url: "https://www.microsoft.com/en-us/microsoft-365/excel",
  },
  {
    name: "PowerBI",
    icon: BiBarChartAlt2,
    color: "#f2c811",
    url: "https://powerbi.microsoft.com/",
  },
  {
    name: "Canva",
    icon: SiCanva,
    color: "#00c4cc",
    url: "https://www.canva.com/",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#f24e1e",
    url: "https://www.figma.com/",
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
            {skills.map((tech) => (
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
