import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
// import { ContactForm } from './ui/ContactForm';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { Phone } from 'lucide-react';
import ContactCards from './ui/ContactCard';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Let's collaborate on your next big idea — I'm just a message away.">
            Get In Touch
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Left Column: Contact Info */}
            <div className="relative group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl active:shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:active:shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden animate-fade-in active:scale-[0.98]">
              {/* Background Gradient Effect - Visible on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 dark:from-blue-400/5 dark:via-purple-400/5 dark:to-blue-400/5 opacity-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glowing Border Effect - Visible on mobile */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl sm:rounded-2xl opacity-10 md:opacity-0 md:group-hover:opacity-20 blur-sm transition-opacity duration-500" />

              <div className="relative">
                <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-gray-100 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Let's Connect
                </h3>
                <p className="text-base sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="mailto:abdulvahabaa.official@gmail.com"
                    className="group/link flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl active:bg-blue-50 dark:active:bg-blue-900/20 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform active:translate-x-1 md:hover:translate-x-2 active:scale-[0.98]"
                  >
                    <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-active/link:bg-blue-200 dark:group-active/link:bg-blue-800/50 md:group-hover/link:bg-blue-200 dark:md:group-hover/link:bg-blue-800/50 transition-colors duration-300">
                      <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 group-active/link:text-blue-600 dark:group-active/link:text-blue-400 md:group-hover/link:text-blue-600 dark:md:group-hover/link:text-blue-400 transition-colors duration-300 font-medium break-all">
                      abdulvahabaa.official@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://github.com/abdulvahabaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl active:bg-gray-50 dark:active:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 transform active:translate-x-1 md:hover:translate-x-2 active:scale-[0.98]"
                  >
                    <div className="p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-800/50 rounded-lg group-active/link:bg-gray-200 dark:group-active/link:bg-gray-700/50 md:group-hover/link:bg-gray-200 dark:md:group-hover/link:bg-gray-700/50 transition-colors duration-300">
                      <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
                    </div>
                    <span className="text-base sm:text-base md:text-lg text-gray-700 dark:text-gray-300 group-active/link:text-blue-600 dark:group-active/link:text-blue-400 md:group-hover/link:text-blue-600 dark:md:group-hover/link:text-blue-400 transition-colors duration-300 font-medium">
                      github.com/abdulvahabaa
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abdulvahabaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl active:bg-blue-50 dark:active:bg-blue-900/20 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform active:translate-x-1 md:hover:translate-x-2 active:scale-[0.98]"
                  >
                    <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg group-active/link:bg-blue-200 dark:group-active/link:bg-blue-800/50 md:group-hover/link:bg-blue-200 dark:md:group-hover/link:bg-blue-800/50 transition-colors duration-300">
                      <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-base sm:text-base md:text-lg text-gray-700 dark:text-gray-300 group-active/link:text-blue-600 dark:group-active/link:text-blue-400 md:group-hover/link:text-blue-600 dark:md:group-hover/link:text-blue-400 transition-colors duration-300 font-medium">
                      linkedin.com/in/abdulvahabaa
                    </span>
                  </a>
                  <a
                    href="https://leetcode.com/u/abdulvahabaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl active:bg-orange-50 dark:active:bg-orange-900/20 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 transform active:translate-x-1 md:hover:translate-x-2 active:scale-[0.98]"
                  >
                    <div className="p-1.5 sm:p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg group-active/link:bg-orange-200 dark:group-active/link:bg-orange-800/50 md:group-hover/link:bg-orange-200 dark:md:group-hover/link:bg-orange-800/50 transition-colors duration-300">
                      <SiLeetcode className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-base sm:text-base md:text-lg text-gray-700 dark:text-gray-300 group-active/link:text-orange-600 dark:group-active/link:text-orange-400 md:group-hover/link:text-orange-600 dark:md:group-hover/link:text-orange-400 transition-colors duration-300 font-medium">
                      leetcode.com/u/abdulvahabaa
                    </span>
                  </a>
                  <a
                    href="tel:+919747733770"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl active:bg-green-50 dark:active:bg-green-900/20 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 transform active:translate-x-1 md:hover:translate-x-2 active:scale-[0.98]"
                  >
                    <div className="p-1.5 sm:p-2 bg-green-100 dark:bg-green-900/50 rounded-lg group-active/link:bg-green-200 dark:group-active/link:bg-green-800/50 md:group-hover/link:bg-green-200 dark:md:group-hover/link:bg-green-800/50 transition-colors duration-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="text-base sm:text-base md:text-lg text-gray-700 dark:text-gray-300 group-active/link:text-green-600 dark:group-active/link:text-green-400 md:group-hover/link:text-green-600 dark:md:group-hover/link:text-green-400 transition-colors duration-300 font-medium">
                      +91 9747733770
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/abdulvahabaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl active:bg-pink-50 dark:active:bg-pink-900/20 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-300 transform active:translate-x-1 md:hover:translate-x-2 active:scale-[0.98]"
                  >
                    <div className="p-1.5 sm:p-2 bg-pink-100 dark:bg-pink-900/50 rounded-lg group-active/link:bg-pink-200 dark:group-active/link:bg-pink-800/50 md:group-hover/link:bg-pink-200 dark:md:group-hover/link:bg-pink-800/50 transition-colors duration-300">
                      <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 dark:text-pink-400" />
                    </div>
                    <span className="text-base sm:text-base md:text-lg text-gray-700 dark:text-gray-300 group-active/link:text-pink-600 dark:group-active/link:text-pink-400 md:group-hover/link:text-pink-600 dark:md:group-hover/link:text-pink-400 transition-colors duration-300 font-medium">
                      instagram.com/abdulvahabaa
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl active:shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:active:shadow-[0_25px_60px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden animate-fade-in active:scale-[0.98]">
              {/* Background Gradient Effect - Visible on mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5 dark:from-purple-400/5 dark:via-blue-400/5 dark:to-purple-400/5 opacity-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glowing Border Effect - Visible on mobile */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-xl sm:rounded-2xl opacity-10 md:opacity-0 md:group-hover:opacity-20 blur-sm transition-opacity duration-500" />

              <div className="relative">
                <ContactCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
