import { User2, Code2, Lightbulb, LayoutDashboard } from 'lucide-react';
import { GoGoal } from 'react-icons/go';
import { SiFigma } from 'react-icons/si';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';

const aboutSections = [
  {
    icon: User2,
    title: 'Who I Am',
    description: [
      'A web developer having interest in software engineering.',
      'Enjoy solving problems and building scalable applications.',
      'Always learning new technologies to improve my skills.',
    ],
    color: 'bg-blue-600',
  },
  {
    icon: Code2,
    title: 'What I Do',
    description: [
      'Develop high-performance web apps using modern tech stacks.',
      'Solve algorithmic problems and optimize code efficiency.',
      'Contribute to open-source and follow industry trends.',
    ],
    color: 'bg-purple-600',
  },
  {
    icon: GoGoal,
    title: 'My Goals',
    description: [
      'Build tech products that solve real-world challenges at scale.',
      'Advance as a web developer with modern frameworks.',
      'Grow the dev community through open-source contributions.',
    ],
    color: 'bg-green-600',
  },
  {
    icon: Lightbulb,
    title: 'My Philosophy',
    description: [
      'Technology should simplify lives, not complicate them.',
      'Great software solves problems, not just writes code.',
      'Continuous learning keeps you ahead in tech.',
    ],
    color: 'bg-orange-600',
  },
];

// Sample services data
const services = [
  {
    icon: Lightbulb, // Using Lightbulb for Graphic Design
    title: 'Graphic Design',
    description:
      'Creating visually compelling graphics, logos, and branding materials to elevate your business presence.',
    color: 'bg-pink-500',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Building responsive and scalable web applications using modern frameworks like React and Node.js.',
    color: 'bg-blue-500',
  },
  {
    icon: null, // We'll handle custom rendering for UI/UX Design
    title: 'UI/UX Design',
    description:
      'Designing intuitive and engaging user interfaces and experiences for web and mobile platforms.',
    color: 'bg-green-500',
  },
];

export function About() {
  return (
    <SectionBackground>
      <section id="about">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Passionate developer building innovative solutions and solving real-world problems.">
            About Me
          </SectionTitle>

          {/* Introduction */}
          <div className="max-w-5xl mx-auto mb-10 text-center">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hey there! 👋 I'm{' '}
              <span className="text-blue-600 font-semibold">M Dinesh</span>, a
              B.Tech Information Technology student passionate about building
              web web applications that solve real-world problems. I've created
              projects like Aquawatt for monitor the usage of water and
              electricity. With skills in React, JavaScript, Node.js, and
              Python, I love exploring new technologies, solving DSA problems
              and working on AI-powered solutions.
            </p>
            <div className="mt-6 flex justify-center">
              <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
                🚀 I like to build smart solutions for future
              </span>
            </div>
          </div>

          {/* About Section Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {aboutSections.map(({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Background Effect */}
                <div
                  className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Card Content */}
                <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    {/* Icon */}
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {title}
                    </h3>
                  </div>
                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
