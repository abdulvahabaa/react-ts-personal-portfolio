'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { User2, Code2, Lightbulb } from 'lucide-react';
import { GoGoal } from 'react-icons/go';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { TerminalWindow } from './ui/TerminalWindow';
import { AboutTerminal } from './ui/AboutTerminal';

const whoAmICard = {
  icon: User2,
  title: 'Who I Am',
  description: [
    'Full Stack Developer with hands-on experience in scalable web applications.',
    'Passionate about clean architecture and modern JavaScript technologies.',
    'Technical trainer focusing on simplifying complex concepts.',
  ],
  color: 'bg-blue-600',
};

const whatIDoCard = {
  icon: Code2,
  title: 'What I Do',
  description: [
    'Develop end-to-end applications using React, Next.js, Node.js, TypeScript, and databases.',
    'Create RESTful APIs and integrate cloud services for backend efficiency.',
    'Implement automated testing and maintain production-ready code.',
  ],
  color: 'bg-purple-600',
};

const myGoalsCard = {
  icon: GoGoal,
  title: 'My Goals',
  description: [
    'Develop impactful technology products for real-world challenges.',
    'Deepen expertise in cloud-native development and DevOps.',
    'Mentor emerging developers through community engagement.',
  ],
  color: 'bg-green-600',
};

const myPhilosophyCard = {
  icon: Lightbulb,
  title: 'My Philosophy',
  description: [
    'Software should be simple, reliable, and user-focused.',
    'Continuous learning is vital as technology evolves.',
    'Aim for meaningful problems rather than just complex code.',
  ],
  color: 'bg-orange-600',
};

function AboutCard({
  icon: Icon,
  title,
  description,
  color,
}: {
  icon: typeof User2;
  title: string;
  description: string[];
  color: string;
}) {
  return (
    <div className="relative group h-full">
      <div
        className={`absolute inset-0 rounded-xl opacity-20 blur-xl transition-opacity duration-300 group-hover:opacity-60 pointer-events-none ${color}`}
      />
      <div className="relative h-full rounded-xl border border-gray-200 bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
        <div className="mb-4 flex items-center space-x-4">
          <div className={`rounded-lg p-3 ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
        </div>
        <ul className="list-disc space-y-1 pl-6 text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <SectionBackground>
      <section id="about" ref={sectionRef}>
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <SectionTitle subtitle="Passionate developer building innovative solutions and solving real-world problems.">
            About Me
          </SectionTitle>

          {/* 2x2 grid: terminal | cat bio / whoami | whatido */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* Top-left: Terminal DEV (hero-style interactive terminal) */}
            <div className="flex min-h-[320px] justify-center md:justify-start sm:min-h-[360px]">
              <TerminalWindow />
            </div>

            {/* Top-right: Cat bio (typing $ cat about.txt) */}
            <div className="flex min-h-[320px] items-stretch sm:min-h-[360px]">
              <AboutTerminal isInView={isInView} />
            </div>

            {/* Bottom-left: Who I Am card */}
            {/* <div className="flex items-stretch">
              <AboutCard
                icon={whoAmICard.icon}
                title={whoAmICard.title}
                description={whoAmICard.description}
                color={whoAmICard.color}
              />
            </div> */}

            {/* Bottom-right: What I Do card */}
            {/* <div className="flex items-stretch">
              <AboutCard
                icon={whatIDoCard.icon}
                title={whatIDoCard.title}
                description={whatIDoCard.description}
                color={whatIDoCard.color}
              />
            </div> */}

            {/* My Goals card */}
            {/* <div className="flex items-stretch">
              <AboutCard
                icon={myGoalsCard.icon}
                title={myGoalsCard.title}
                description={myGoalsCard.description}
                color={myGoalsCard.color}
              />
            </div> */}

            {/* My Philosophy card */}
            {/* <div className="flex items-stretch">
              <AboutCard
                icon={myPhilosophyCard.icon}
                title={myPhilosophyCard.title}
                description={myPhilosophyCard.description}
                color={myPhilosophyCard.color}
              />
            </div> */}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
