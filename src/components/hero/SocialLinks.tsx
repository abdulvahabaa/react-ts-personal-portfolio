import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const links = [
  {
    href: 'https://github.com/abdulvahabaa',
    icon: <FaGithub className="w-6 h-6 text-gray-900 dark:text-white" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/abdulvahabaa/',
    icon: <FaLinkedin className="w-6 h-6 text-[#0077B5]" />,
    label: 'LinkedIn',
  },
  {
    href: 'https://www.youtube.com/@eldoradotechie',
    icon: <FaYoutube className="w-6 h-6 text-[#FF0000]" />,
    label: 'YouTube',
  },
  {
    href: 'https://www.instagram.com/abubakthiyar',
    icon: <FaInstagram className="w-6 h-6 text-[#E4405F]" />,
    label: 'Instagram',
  },
  {
    href: 'https://wa.me/919747733770',
    icon: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
    label: 'WhatsApp',
  },
  {
    href: 'mailto:abdulvahabaa.official@gmail.com',
    icon: <FaEnvelope className="w-6 h-6 text-[#D14836]" />,
    label: 'Gmail',
  },
  {
    href: 'https://leetcode.com/u/abdulvahabaa/',
    icon: <SiLeetcode className="w-6 h-6 text-[#FFA116]" />,
    label: 'LeetCode',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
}
