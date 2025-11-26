import { useState } from 'react';
import { Mail, Copy, Check, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ContactCards() {
  const [copied, setCopied] = useState(false);
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
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
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm md:text-base">
            Choose your preferred way to contact me
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Email Card */}
          <div
            className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl active:shadow-[0_20px_50px_rgba(59,130,246,0.3)] dark:active:shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] dark:hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-all duration-300 p-5 sm:p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden animate-fade-in active:scale-[0.98]"
            style={{ animationDelay: '0.1s' }}
            onMouseEnter={() => setIsHoveringEmail(true)}
            onMouseLeave={() => setIsHoveringEmail(false)}
            onTouchStart={() => setIsHoveringEmail(true)}
            onTouchEnd={() => setTimeout(() => setIsHoveringEmail(false), 300)}
          >
            {/* Animated Background Gradient - Always visible on mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-blue-400/10 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glowing Light Effect - Visible on mobile */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl sm:rounded-2xl opacity-10 md:opacity-0 md:group-hover:opacity-20 blur-xl transition-opacity duration-500 animate-glow-pulse" />

            {/* Floating Particles Effect - Always visible on mobile */}
            <div
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-100 animate-floating"
              style={{ animationDelay: '0s' }}
            />
            <div
              className="absolute top-6 right-6 sm:top-8 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-500 rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-100 animate-floating"
              style={{ animationDelay: '0.5s' }}
            />
            <div
              className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-1 h-1 bg-blue-400 rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-100 animate-floating"
              style={{ animationDelay: '1s' }}
            />

            <div className="relative flex flex-col items-center text-center">
              {/* Icon with Glow Effect */}
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-blue-500/30 dark:bg-blue-400/30 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 rounded-full p-3 sm:p-4 transform group-active:scale-110 group-active:rotate-6 md:group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2 group-active:text-blue-600 dark:group-active:text-blue-400 md:group-hover:text-blue-600 dark:md:group-hover:text-blue-400 transition-colors duration-300">
                Email Me
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                Send me an email directly
              </p>

              {/* Magic Copy Button */}
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setIsHoveringEmail(true)}
                onTouchStart={() => setIsHoveringEmail(true)}
                className="relative w-full group/btn overflow-hidden active:scale-95 transition-transform duration-150"
              >
                {/* Button Background with Gradient - Visible on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-500 dark:via-purple-500 dark:to-blue-500 rounded-lg sm:rounded-xl opacity-20 md:opacity-0 md:group-hover/btn:opacity-100 transition-opacity duration-300" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-active/btn:translate-x-full md:group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 border-blue-600 dark:border-blue-400 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm group-active/btn:border-transparent md:group-hover/btn:border-transparent group-active/btn:text-white md:group-hover/btn:text-white text-blue-600 dark:text-blue-400 text-sm sm:text-base font-semibold transition-all duration-300 transform group-active/btn:scale-105 md:group-hover/btn:scale-105 shadow-lg group-active/btn:shadow-2xl md:group-hover/btn:shadow-2xl">
                  {copied ? (
                    <>
                      <div className="relative">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 animate-heartbeat-spin" />
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 text-yellow-400 animate-pulse" />
                      </div>
                      <span className="font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHoveringEmail ? 'rotate-12 scale-110' : ''}`}
                      />
                      <span>Copy Email</span>
                      {isHoveringEmail && (
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 animate-pulse" />
                      )}
                    </>
                  )}
                </div>

                {/* Glow Effect - Visible on mobile */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-blue-500/10 md:bg-blue-500/0 md:group-hover/btn:bg-blue-500/20 blur-xl transition-all duration-300 -z-10" />
              </button>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div
            className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl active:shadow-[0_20px_50px_rgba(34,197,94,0.3)] dark:active:shadow-[0_20px_50px_rgba(34,197,94,0.2)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.3)] dark:hover:shadow-[0_20px_50px_rgba(34,197,94,0.2)] transition-all duration-300 p-5 sm:p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 overflow-hidden animate-fade-in active:scale-[0.98]"
            style={{ animationDelay: '0.2s' }}
          >
            {/* Animated Background Gradient - Always visible on mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-green-500/10 dark:from-green-400/10 dark:via-emerald-400/10 dark:to-green-400/10 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glowing Light Effect - Visible on mobile */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 rounded-xl sm:rounded-2xl opacity-10 md:opacity-0 md:group-hover:opacity-20 blur-xl transition-opacity duration-500" />

            {/* Floating Particles Effect - Always visible on mobile */}
            <div
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-100 animate-floating"
              style={{ animationDelay: '0.3s' }}
            />
            <div
              className="absolute top-6 right-6 sm:top-8 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-500 rounded-full opacity-50 md:opacity-0 md:group-hover:opacity-100 animate-floating"
              style={{ animationDelay: '0.8s' }}
            />

            <div className="relative flex flex-col items-center text-center">
              {/* Icon with Glow Effect */}
              <div className="relative mb-3 sm:mb-4">
                <div className="absolute inset-0 bg-green-500/30 dark:bg-green-400/30 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 rounded-full p-3 sm:p-4 transform group-active:scale-110 group-active:rotate-6 md:group-hover:scale-110 md:group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2 group-active:text-green-600 dark:group-active:text-green-400 md:group-hover:text-green-600 dark:md:group-hover:text-green-400 transition-colors duration-300">
                WhatsApp
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                Chat with me instantly
              </p>

              {/* Enhanced WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="relative w-full group/btn overflow-hidden active:scale-95 transition-transform duration-150"
              >
                {/* Button Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 dark:from-green-500 dark:via-emerald-500 dark:to-green-500 rounded-lg sm:rounded-xl" />

                {/* Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-active/btn:translate-x-full md:group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Button Content */}
                <div className="relative flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-white text-sm sm:text-base font-semibold transition-all duration-300 transform group-active/btn:scale-105 md:group-hover/btn:scale-105 shadow-lg group-active/btn:shadow-2xl md:group-hover/btn:shadow-2xl">
                  <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-active/btn:scale-110 md:group-hover/btn:scale-110" />
                  <span>Open WhatsApp</span>
                </div>

                {/* Glow Effect - Visible on mobile */}
                <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-green-500/20 md:bg-green-500/30 blur-xl transition-all duration-300 -z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
