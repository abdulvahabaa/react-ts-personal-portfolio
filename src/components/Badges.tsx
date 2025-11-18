import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';

const badges = [
  {
    id: 'Certified-Ethical-Hacker',
    platform: 'EC-Council',
    title: 'Certified Ethical Hacker',
    image:
      '/assets/logos/CEH_2E345519D3F7.png',
    profile:
      'https://www.credly.com/badges/acc5fa97-0b4e-47c2-bc59-30e2d2a0161a/public_url',
  },

  // {
  //   id: 'github-foundations',
  //   platform: 'GitHub',
  //   title: 'GitHub Foundations',
  //   image:
  //     'https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
  //   profile:
  //     'https://www.credly.com/badges/acc5fa97-0b4e-47c2-bc59-30e2d2a0161a/public_url',
  // },
  // {
  //   id: 'leetcode-50',
  //   platform: 'LeetCode',
  //   title: '50 Days Badge 2025',
  //   image: 'https://assets.leetcode.com/static_assets/others/2550.gif',
  //   profile: 'https://leetcode.com/u/abdulvahabaa/',
  // },
  // {
  //   id: 'leetcode-100',
  //   platform: 'LeetCode',
  //   title: '100 Days Badge 2025',
  //   image: 'https://assets.leetcode.com/static_assets/others/25100.gif',
  //   profile: 'https://leetcode.com/u/abdulvahabaa/',
  // },
  // {
  //   id: 'leetcode-top-sql-50',
  //   platform: 'LeetCode',
  //   title: 'Top SQL 50',
  //   image: 'https://assets.leetcode.com/static_assets/others/Top_SQL_50.gif',
  //   profile: 'https://leetcode.com/u/abdulvahabaa/',
  // },
  // {
  //   id: 'leetcode-leetcode-75',
  //   platform: 'LeetCode',
  //   title: 'LeetCode 75',
  //   image: 'https://assets.leetcode.com/static_assets/others/LeetCode_75.gif',
  //   profile: 'https://leetcode.com/u/abdulvahabaa/',
  // },
  {
    id: 'github-shark',
    platform: 'GitHub',
    title: 'Pull Shark',
    image:
      'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',
    profile: 'https://github.com/abdulvahabaaa',
  },
  {
    id: 'github-arctic',
    platform: 'GitHub',
    title: 'Starstruck',
    image:
      'https://github.githubassets.com/assets/starstruck-default--light-a594e2a027e0.png',
    profile: 'https://github.com/abdulvahabaaa',
  },

  {
    id: 'github-yolo',
    platform: 'GitHub',
    title: 'YOLO',
    image:
      'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png',
    profile: 'https://github.com/abdulvahabaaa',
  },

  {
    id: 'github-pair-extraordinary',
    platform: 'GitHub',
    title: 'Pair Extraordinary',
    image:
      'https://github.githubassets.com/assets/pair-extraordinaire-default-579438a20e01.png',
    profile: 'https://github.com/abdulvahabaaa',
  },
  {
    id: 'github-quickdraw',
    platform: 'GitHub',
    title: 'Quickdraw',
    image:
      'https://github.githubassets.com/assets/quickdraw-default--light-8f798b35341a.png',
    profile: 'https://github.com/abdulvahabaaa',
  },
  // {
  //   id: 'github-galaxy-star',
  //   platform: 'GitHub',
  //   title: 'Galaxy Brain',
  //   image:
  //     'https://github.githubassets.com/assets/galaxy-brain-default-847262c21056.png',
  //   profile: 'https://github.com/abdulvahabaaa',
  // },
];

export function Badges() {
  return (
    <SectionBackground>
      <section id="badges">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Milestones that reflect the journey of continuous growth and mastery.">
            Coding Badges
          </SectionTitle>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
            {badges.map(badge => (
              <a
                key={badge.id}
                href={badge.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

                {/* Badge Image */}
                <img
                  src={badge.image}
                  alt={badge.platform}
                  className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
                />

                {/* Badge Text */}
                <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {badge.title}
                </p>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {badge.platform}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
