import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function HandwritingAnimation() {
  const name = 'Abdul Vahab';
  const controls = useAnimation();
  const drawDuration = 2.8;

  useEffect(() => {
    const sequence = async () => {
      await new Promise(resolve => setTimeout(resolve, drawDuration * 1000));
      controls.start({
        fillOpacity: 1,
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
    };
    sequence();
  }, [controls]);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      {/* Importing Dancing Script font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');

          /* Responsive font sizing for SVG text */
          .handwriting-text {
            font-family: 'Dancing Script', cursive;
            font-size: 90px;
          }

          @media (min-width: 768px) {
            .handwriting-text {
              font-size: 130px;
            }
          }

          @media (min-width: 1024px) {
            .handwriting-text {
              font-size: 160px;
            }
          }
        `}
      </style>

      <svg
        viewBox="0 0 1000 250"
        className="w-full max-w-5xl h-auto"
        aria-label={name}
      >
        <defs>
          <clipPath id="clip-path-draw">
            <motion.rect
              x="0"
              y="0"
              width="1000"
              height="250"
              initial={{ width: 0 }}
              animate={{ width: 1000 }}
              transition={{ duration: drawDuration, ease: 'easeInOut' }}
            />
          </clipPath>
        </defs>

        <motion.text
          x="50%"
          y="50%"
          dy="30px"
          textAnchor="middle"
          className="handwriting-text text-blue-600 dark:text-blue-400"
          clipPath="url(#clip-path-draw)"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          initial={{ fillOpacity: 0 }}
          animate={controls}
        >
          {name}
        </motion.text>
      </svg>
    </div>
  );
}
