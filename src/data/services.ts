import type { LucideIcon } from 'lucide-react';
import { Code2, Lightbulb, MonitorPlay } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Building responsive and scalable web applications using modern frameworks like React and Node.js.',
    color: 'bg-blue-500',
    image: '/assets/web dev.png',
  },
  {
    icon: MonitorPlay,
    title: 'Web Development Training',
    description:
      'Providing MERN, MEAN, Nest.js, Angular, and Django tutoring, YouTube lessons, and professional training at G-TECH',
    color: 'bg-purple-500',
    image: '/assets/training.png',
  },
  {
    icon: Lightbulb,
    title: 'Graphic Design',
    description:
      'Creating visually compelling graphics, logos, and branding materials to elevate your business presence.',
    color: 'bg-yellow-500',
    image: '/assets/graphic design.png',
  },
];
