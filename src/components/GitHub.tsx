import { useState, useEffect } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { FaGithub } from 'react-icons/fa';

interface Repo {
  name: string;
  description?: string;
  stars: number;
  forks: number;
  language?: string;
  html_url: string;
}

interface UserProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  followers: number;
  public_repos: number;
  html_url: string;
}

const SPECIFIC_REPOS: Repo[] = [
  {
    name: 'TechnoHacks-Portfolio-Website-MDinesh30',
    description:
      'Personal portfolio website built with HTML, CSS, and JavaScript. Features modern design, responsive layout, and dynamic interactions.',
    stars: 7,
    forks: 0,
    language: 'CSS',
    html_url:
      'https://github.com/dineshit27/TechnoHacks-Portfolio-Website-MDinesh30',
  },
  {
    name: 'DSA-in-JAVA',
    description:
      'Data Structures and Algorithms implemented in Java with multiple solved problems.',
    stars: 9,
    forks: 1,
    language: 'Java',
    html_url: 'https://github.com/dineshit27/DSA-in-JAVA',
  },
  {
    name: 'Cognifyz-Data-Analysis',
    description:
      'Data analysis project using Python and Jupyter Notebooks for insights and visualizations.',
    stars: 10,
    forks: 1,
    language: 'Jupyter Notebook',
    html_url: 'https://github.com/dineshit27/Cognifyz-Data-Analysis',
  },
];

export function GitHub() {
  const [repos] = useState<Repo[]>(SPECIFIC_REPOS);
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/abdulvahabaa')
      .then(res => res.json())
      .then((data: UserProfile) => setUser(data))
      .catch(() => {});
  }, []);

  return (
    <SectionBackground>
      <section id="github">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Code that lives, breathes, and contributes — open source and beyond.">
            GitHub Contributions
          </SectionTitle>

          {/* Contribution Graph */}
          <div className="mb-10 flex flex-col items-center">
            <div className="w-full p-6 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
              <GitHubCalendar
                username="abdulvahabaa"
                blockSize={14.6}
                blockMargin={5}
                colorScheme="light"
                theme={{
                  light: [
                    '#afb8c2',
                    '#60a5fa',
                    '#1a53e6',
                    '#1c3dff',
                    '#1c3dff',
                  ],
                }}
              />
            </div>
          </div>

          {/* Top Repositories */}
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {repos.map(repo => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {repo.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {repo.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-gray-500">
                  <span>{repo.language}</span>
                  <div className="flex space-x-4">
                    <span>⭐ {repo.stars}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* GitHub Profile Widget */}
          {user && (
            <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg p-6 shadow-lg">
              {/* Avatar & Name */}
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt="GitHub Avatar"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-blue-600"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    @{user.login}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="hidden md:block text-gray-700 dark:text-gray-300 flex-1 text-center md:text-left mx-6">
                {user.bio}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
                <span className="flex items-center gap-1 text-sm">
                  👥 {user.followers} Followers
                </span>
                <span className="flex items-center gap-1 text-sm">
                  📦 {user.public_repos} Repos
                </span>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto text-center flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all mt-3 md:mt-0"
                >
                  <FaGithub className="w-5 h-5" /> View Profile
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
