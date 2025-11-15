import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Frontend Developer Intern",
    company: "Makos Infotech pvt ltd",
    period: "Jun 2025 - Jul 2025",
    description: `Developed and maintained dynamic web applications using the Frontend frameworks for seamless user experience. 
    Designed and developed a real-time interactive website that significantly increased user engagement by 40%. 
    Implemented responsive web design principles, ensuring an optimal mobile-friendly user experience.`,
    skills: ["HTML", "CSS", "JavaScript", "Schema.org", "React.js", "Bootstrap", "Git and GitHub"],
  },
  {
    title: "Web Design and Development Intern",
    company: "TechnoHacks Edutech Solution",
    period: "Apr 2025 - May 2025",
    description: `Led a dedicated team of 4 developers in designing and built responsive E-commerce platform. 
    Successfully launched a responsive modern personal portfolio webste, hotel room booking website . 
    Mentored and guided 4 junior developers in modern web web technologies and best coding practices.`,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Git and GitHub", "Netlify", "Team Leadership"],
  },
  {
    title: "Freelance Designer",
    company: "Remote work",
    period: "Dec 2024 - Present",
    description: `Delivered 20+ client projects (logos, UI/UX, mockups, social media graphics) with 75% client satisfaction and improved engagement. Managed end-to-end design workflows, from concept to final deliverables, under tight deadlines.`,
    skills: ["Canva Pro", "Figma", "Pinterest", "Capcut Editor", "Leonardo AI", "Teamwork"],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="From classrooms to codebases — applying knowledge where it matters most.">Experience</SectionTitle>
          <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
