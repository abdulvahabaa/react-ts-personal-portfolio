import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { socialLinks } from '../../data';

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub className="w-6 h-6 text-gray-900 dark:text-white" />,
  linkedin: <FaLinkedin className="w-6 h-6 text-[#0077B5]" />,
  youtube: <FaYoutube className="w-6 h-6 text-[#FF0000]" />,
  instagram: <FaInstagram className="w-6 h-6 text-[#E4405F]" />,
  whatsapp: <FaWhatsapp className="w-6 h-6 text-[#25D366]" />,
  gmail: <FaEnvelope className="w-6 h-6 text-[#D14836]" />,
  leetcode: <SiLeetcode className="w-6 h-6 text-[#FFA116]" />,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {socialLinks.map(({ href, iconKey, label }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-3 bg-white dark:bg-gray-900 rounded-lg hover:scale-110 transform transition-transform duration-300 border border-gray-200 dark:border-gray-800"
        >
          <div className="absolute inset-0 bg-linear-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div>{iconMap[iconKey] ?? null}</div>
        </a>
      ))}
    </div>
  );
}
