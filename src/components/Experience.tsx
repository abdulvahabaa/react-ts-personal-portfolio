import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ExperienceCard } from './ui/ExperienceCard';

const experiences = [
  {
    title: 'Full Stack Developer & Trainer',
    company: 'G-Tec Computer Education, Irinjalakuda',
    period: 'Jul 2025 – Present',
    description: `Conduct hands-on training sessions in full-stack development for 360+ engineering students. 
    Develop and maintain the institute’s official website, improving performance and usability. 
    Built a student task management application to streamline assignment submissions and reduce manual workload by 40%.`,
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'MongoDB',
      'TypeScript',
      'AWS',
      'Git & GitHub',
      'Training & Mentorship',
    ],
  },
  {
    title: 'Freelance Full Stack Web Developer',
    company: 'Upwork & Codyinger',
    period: 'Nov 2024 – Present',
    description: `Delivered 7+ full-stack projects including business websites and modern web applications with 78% client satisfaction. 
    Built scalable solutions with cloud integration using modern frameworks and backend technologies. 
    Managed full project cycles from architecture and development to deployment and long-term client support.`,
    skills: [
      'Next.js',
      'TypeScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'Cloud Integrations',
      'Client Communication',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company: 'Estro Tech Robotics and Innovations Pvt. Ltd',
    period: 'Aug 2023 – Aug 2024',
    description: `Developed and optimized backend services using Node.js, Express.js, and TypeScript. 
    Improved testing efficiency using Playwright and Jest, achieving 90% test coverage. 
    Managed AWS Lambda-based serverless infrastructure, improving scalability and reducing operational costs by 30%.`,
    skills: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'MongoDB',
      'AWS Lambda',
      'API Development',
      'Jest',
      'Playwright',
      'Serverless Architecture',
    ],
  },
];

export function Experience() {
  return (
    <SectionBackground>
      <section id="experience">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Where engineering, teaching, and real-world problem-solving come together.">
            Experience
          </SectionTitle>
          <div className="relative max-w-5xl mx-auto">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-0 sm:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 dark:from-blue-400 dark:via-blue-500 dark:to-blue-400 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-shimmer-line opacity-50"></div>
            </div>

            <div className="space-y-12 sm:space-y-16">
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} {...exp} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
