import React from 'react';
import { IconType } from 'react-icons';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export function SkillCard({ name, icon: Icon, color, url }: SkillCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl 
        before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-transparent before:to-(--glow-color,rgba(255,255,255,0)) before:opacity-0 before:blur-lg before:transition-all before:duration-500 hover:before:opacity-50"
      style={{ '--glow-color': color } as React.CSSProperties}
    >
      {/* Icon with Background */}
      <div
        className="p-3 rounded-full transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}1A` }}
      >
        <Icon size={50} color={color} className="group-hover:brightness-100" />
      </div>

      {/* Skill Name */}
      <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">
        {name}
      </span>
    </a>
  );
}
