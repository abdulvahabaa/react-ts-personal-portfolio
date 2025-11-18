import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ContactCards() {
  const [copied, setCopied] = useState(false);
  const email = 'abdulvahabaa.official@gmail.com';
  const whatsappNumber = '919747733770';
  const whatsappMessage = "Hi! I'd like to get in touch with you.";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <div className="text-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
            Choose your preferred way to contact me
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Email Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3 mb-3">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                Email Me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Send me an email directly
              </p>
              {/* <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-4">
                <p className="text-sm md:text-base text-gray-800 dark:text-gray-200 break-all">
                  {email}
                </p>
              </div> */}
              <button
                onClick={handleCopyEmail}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full p-3 mb-3">
                <FaWhatsapp className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                WhatsApp
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Chat with me instantly
              </p>
              {/* <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-lg p-3 mb-4">
                <p className="text-sm md:text-base text-gray-800 dark:text-gray-200">
                  Quick & Easy Messaging
                </p>
              </div> */}
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                Open WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
