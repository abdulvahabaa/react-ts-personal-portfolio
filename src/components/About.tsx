import { User2, Code2, Lightbulb } from 'lucide-react';
import { GoGoal } from 'react-icons/go';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';

const aboutSections = [
  {
    icon: User2,
    title: 'Who I Am',
    description: [
      'Full Stack Developer with hands-on experience in scalable web applications.',
      'Passionate about clean architecture and modern JavaScript technologies.',
      'Technical trainer focusing on simplifying complex concepts.',
    ],
    color: 'bg-blue-600',
  },
  {
    icon: Code2,
    title: 'What I Do',
    description: [
      'Develop end-to-end applications using React, Next.js, Node.js, TypeScript, and databases.',
      'Create RESTful APIs and integrate cloud services for backend efficiency.',
      'Implement automated testing and maintain production-ready code.',
    ],
    color: 'bg-purple-600',
  },
  {
    icon: GoGoal,
    title: 'My Goals',
    description: [
      'Develop impactful technology products for real-world challenges.',
      'Deepen expertise in cloud-native development and DevOps.',
      'Mentor emerging developers through community engagement.',
    ],
    color: 'bg-green-600',
  },
  {
    icon: Lightbulb,
    title: 'My Philosophy',
    description: [
      'Software should be simple, reliable, and user-focused.',
      'Continuous learning is vital as technology evolves.',
      'Aim for meaningful problems rather than just complex code.',
    ],
    color: 'bg-orange-600',
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
              <span className="text-blue-600 font-semibold">Abdul Vahab</span>,
              a Full Stack MERN Developer and Technical Trainer. I specialize in
              building scalable web applications using React.js, Next.js,
              Node.js, TypeScript, MongoDB, and PostgreSQL. With experience
              delivering projects for clients worldwide and training over 350+
              students in modern development practices, I focus on creating
              efficient, user-centric digital products. I am committed to
              solving real-world problems through technology and continuously
              improving my skills to deliver impactful solutions.
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
