import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";

interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  isOngoing?: boolean;
  techStack: TechStackItem[];
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  isOngoing,
  techStack,
}: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">
        {/* Image */}
        <div className="relative overflow-hidden p-4 pb-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </a>

          {/* Ongoing Process Badge */}
          {isOngoing && (
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300 border border-orange-200 dark:border-orange-700 animate-pulse">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-ping"></span>
                Ongoing Process
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title + Icons */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* Tech Stack Icons with Tooltip */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="peer p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                    <Icon className="w-6 h-6" color={item.color} />
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 
                        opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10"
                  >
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
