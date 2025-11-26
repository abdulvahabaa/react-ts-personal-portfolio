import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  link,
  image,
}: CertificationCardProps) {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl transition-transform duration-300 overflow-hidden group">
      {/* Background Image */}
      <img
        src={image}
        alt={`${title} certification`}
        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="p-3 bg-blue-600 dark:bg-blue-700 rounded-lg mb-4">
          <Award className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-1">{issuer}</p>
        <p className="text-sm text-gray-400 mb-4">{date}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium hover:bg-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:border-blue-600 transition-transform duration-300 transform hover:scale-105"
        >
          <span>Verify</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
