import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Codolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen py-16 sm:py-24 relative overflow-hidden
      bg-gradient-to-b from-white via-amber-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950">

      {/* Premium Background Shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute w-80 h-80 bg-gradient-to-tr from-cyan-200 to-purple-300 dark:from-purple-900 dark:to-cyan-700 rounded-full filter blur-4xl opacity-30 -top-24 -left-28"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-br from-pink-200 to-yellow-200 dark:from-yellow-900 dark:to-pink-700 rounded-full filter blur-4xl opacity-30 bottom-0 right-0"></div>
      </div>

      <div className="container-custom relative z-10 flex flex-col items-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <SectionHeading
            title="My Codolio"
            subtitle="A curated showcase of my coding journey, GitHub contributions, and problem-solving milestones across platforms, reflecting my dedication to continuous learning, upskilling, and mastering problem-solving skills."
          />
          <a
            href="https://codolio.com/profile/Mahadevan/card"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center font-medium text-primary hover:text-primary/80 dark:text-amber-200 dark:hover:text-amber-300 text-lg transition-colors duration-300"
          >
            Visit My Detailed Codolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>

        {/* Codolio Embed - Full screen style with premium shadow and border pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full h-[90vh] sm:h-[80vh] md:h-[70vh] overflow-hidden rounded-3xl shadow-2xl border-2 border-gray-300 dark:border-gray-700 mt-12 animate-breathe"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50 rounded-3xl">
              <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-primary dark:border-amber-200"></div>
            </div>
          )}
          <iframe
            src="https://codolio.com/profile/Mahadevan/card"
            title="Codolio Profile"
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: 'translateY(-20px)' }}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Codolio;
