import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  index?: number;
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
  index = 0,
}: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group pl-6 sm:pl-10"
      style={{
        animationDelay: `${index * 0.15}s`,
      }}
    >
      {/* Enhanced Timeline Dot with Glow Effect */}
      <div className="absolute -left-5 top-6 z-20">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 w-10 h-10 rounded-full bg-blue-500/20 dark:bg-blue-400/20 animate-glow-pulse blur-md"></div>
          {/* Middle glow ring */}
          <div className="absolute inset-0 w-8 h-8 rounded-full bg-blue-500/40 dark:bg-blue-400/40 animate-glow-pulse blur-sm"></div>
          {/* Inner dot */}
          <div
            className="relative w-10 h-10 rounded-full border-4 border-white dark:border-gray-950 shadow-lg"
            style={{
              background:
                'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
              boxShadow:
                '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.2)',
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Modern Experience Card with Glow */}
      <div
        className={`
          relative overflow-hidden
          bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl
          p-6 sm:p-8 rounded-2xl
          border border-gray-200/50 dark:border-gray-800/50
          shadow-xl
          transition-all duration-500 ease-out
          ${isVisible ? 'animate-card-enter opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}
          
          /* Hover effects */
          hover:border-blue-400/50 dark:hover:border-blue-500/50
          hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20
          hover:-translate-y-1
          
          /* Glow effect on hover */
          hover:before:opacity-100
        `}
      >
        {/* Animated gradient background overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10"></div>

        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
            {/* Icon with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <div className="relative p-4 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Title and Company Info */}
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{period}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description with animated bullets */}
          <div className="mb-6">
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {description.split('\n').map((line, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 group/item"
                  style={{
                    animationDelay: `${index * 0.15 + idx * 0.1}s`,
                  }}
                >
                  <span className="relative mt-1.5 flex-shrink-0">
                    <span className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm"></span>
                    <span className="relative w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"></span>
                  </span>
                  <span className="flex-1 leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills with enhanced styling */}
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="
                  relative overflow-hidden
                  px-4 py-1.5 text-sm font-medium
                  rounded-full cursor-pointer select-none
                  transition-all duration-300
                  
                  /* Light mode */
                  bg-gradient-to-r from-blue-50 to-indigo-50
                  text-blue-700 dark:text-blue-300
                  border border-blue-200/50 dark:border-blue-500/30
                  shadow-sm
                  
                  /* Dark mode */
                  dark:bg-gradient-to-r dark:from-blue-950/50 dark:to-indigo-950/50
                  
                  /* Hover effects */
                  hover:scale-110 hover:shadow-md
                  hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100
                  hover:text-blue-800 hover:border-blue-300
                  dark:hover:bg-gradient-to-r dark:hover:from-blue-900/70 dark:hover:to-indigo-900/70
                  dark:hover:text-blue-200 dark:hover:border-blue-400/50
                  hover:shadow-blue-500/20
                  
                  /* Glow on hover */
                  hover:before:opacity-100
                "
                style={{
                  animationDelay: `${index * 0.15 + skillIndex * 0.05}s`,
                }}
              >
                {/* Glow effect for skill tags */}
                <span className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
