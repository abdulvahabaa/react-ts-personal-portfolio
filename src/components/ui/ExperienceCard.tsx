import { Briefcase } from 'lucide-react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="relative group pl-6 sm:pl-10">
      {/* Timeline Dot */}
      <div className="absolute -left-4 top-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>

      {/* Experience Card */}
      <div className="relative bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl">
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {title}
              </h3>
              <p className="text-base text-blue-600 dark:text-blue-400">
                {company}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {period}
              </p>
            </div>
          </div>

          {/* Description (Custom Blue Bullets) */}
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            {description.split('\n').map((line, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  •
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          {/* Skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="
        px-3 py-0.5 text-sm font-medium
        rounded-full cursor-pointer select-none
        transition-colors duration-150

        /* Light mode base */
        bg-[#F1F8FF] text-[#0366D6] border border-[#0366D6]/30

        /* Dark mode base */
        dark:bg-[#13233A] dark:text-[#539BF5] dark:border-[#539BF5]/30

        /* Light mode hover */
        hover:bg-[#DAEAFE] hover:text-[#0366D6] hover:border-[#0366D6]

        /* Dark mode hover — blue bg + white text */
        dark:hover:bg-[#1F6FEB] dark:hover:text-white dark:hover:border-[#1F6FEB]
      "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
