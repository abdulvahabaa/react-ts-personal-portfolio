import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryCardProps {
  image: string;
  title: string;
  description: string;
  onView: () => void;
  index: number;
}

export function GalleryCard({
  image,
  title,
  description,
  onView,
  index,
}: GalleryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
        duration: 0.6,
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative rounded-2xl overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Moving Border Effect */}
      <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-900" />
      </div>

      {/* Image Container - Horizontal Card - Bigger */}
      <motion.div
        className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-white dark:bg-gray-800 shadow-lg group-hover:shadow-2xl"
        whileHover={{ shadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Image - Clear and visible, fits inside card */}
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-contain brightness-100"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05, brightness: 1.1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            duration: 0.4,
          }}
        />

        {/* Overlay with Details - Shows on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50 dark:from-black/95 dark:via-black/80 dark:to-black/60 flex flex-col justify-end items-center p-4 sm:p-6"
        >
          {/* Title and Description - Center Aligned, Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{
              delay: 0.1,
              duration: 0.4,
              ease: 'easeOut',
            }}
            className="text-white text-center"
          >
            <motion.h3
              className="text-base sm:text-lg font-semibold mb-2 drop-shadow-lg"
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 5,
              }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-xs sm:text-sm text-gray-200 mb-3 line-clamp-2 leading-relaxed px-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 5,
              }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {description}
            </motion.p>
          </motion.div>

          {/* View Button - Center Aligned */}
          <motion.button
            onClick={onView}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 10,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              delay: 0.25,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium shadow-lg mx-auto"
          >
            <Eye className="w-4 h-4" />
            View Full Image
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
