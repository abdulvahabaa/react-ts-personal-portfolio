import type { ComponentType } from 'react';
import type { LucideIcon } from 'lucide-react';
import { User2, Code2, Lightbulb } from 'lucide-react';
import { GoGoal } from 'react-icons/go';

export interface AboutCardItem {
  icon: LucideIcon | ComponentType<{ className?: string }>;
  title: string;
  description: string[];
  color: string;
}

export const whoAmICard: AboutCardItem = {
  icon: User2,
  title: 'Who I Am',
  description: [
    'Full Stack Developer with hands-on experience in scalable web applications.',
    'Passionate about clean architecture and modern JavaScript technologies.',
    'Technical trainer focusing on simplifying complex concepts.',
  ],
  color: 'bg-blue-600',
};

export const whatIDoCard: AboutCardItem = {
  icon: Code2,
  title: 'What I Do',
  description: [
    'Develop end-to-end applications using React, Next.js, Node.js, TypeScript, and databases.',
    'Create RESTful APIs and integrate cloud services for backend efficiency.',
    'Implement automated testing and maintain production-ready code.',
  ],
  color: 'bg-purple-600',
};

export const myGoalsCard: AboutCardItem = {
  icon: GoGoal,
  title: 'My Goals',
  description: [
    'Develop impactful technology products for real-world challenges.',
    'Deepen expertise in cloud-native development and DevOps.',
    'Mentor emerging developers through community engagement.',
  ],
  color: 'bg-green-600',
};

export const myPhilosophyCard: AboutCardItem = {
  icon: Lightbulb,
  title: 'My Philosophy',
  description: [
    'Software should be simple, reliable, and user-focused.',
    'Continuous learning is vital as technology evolves.',
    'Aim for meaningful problems rather than just complex code.',
  ],
  color: 'bg-orange-600',
};
