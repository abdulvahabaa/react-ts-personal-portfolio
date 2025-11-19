import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
// import { ContactForm } from './ui/ContactForm';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import {Phone} from 'lucide-react'
import ContactCards from './ui/ContactCard';

export function Contact() {
  return (
    <SectionBackground>
      <section id="contact">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="Let's collaborate on your next big idea — I'm just a message away.">
            Get In Touch
          </SectionTitle>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:abdulvahabaa.official@gmail.com"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaEnvelope className="w-6 h-6" />
                  <span>abdulvahabaa.official@gmail.com</span>
                </a>
                <a
                  href="https://github.com/abdulvahabaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaGithub className="w-6 h-6" />
                  <span>github.com/abdulvahabaa</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulvahabaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaLinkedin className="w-6 h-6" />
                  <span>linkedin.com/in/abdulvahabaa</span>
                </a>
                <a
                  href="https://www.leetcode.com/in/u/abdulvahabaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <SiLeetcode className="w-6 h-6" />
                  <span>leetcode.com/in/u/abdulvahabaa/</span>
                </a>
                <a
                  href="tel:+919747733770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Phone className="w-6 h-6" />
                  <span>+91 9747733770</span>
                </a>
                <a
                  href="https://www.instagram.com/abdulvahabaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaInstagram className="w-6 h-6" />
                  <span>instagram.com/abdulvahabaa</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              {/* <ContactForm /> */}
              <ContactCards/>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
