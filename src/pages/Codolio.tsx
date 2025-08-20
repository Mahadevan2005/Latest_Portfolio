import { useState, useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Codolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate iframe loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="My Codolio" 
            subtitle="Explore my coding journey and projects through Codolio's interactive showcase"
          />
          
          <div className="bg-card border rounded-lg p-6 mb-8 shadow-sm">
            <h3 className="text-xl font-medium mb-4">About Codolio</h3>
            <p className="mb-4">
              Codolio is a platform that allows developers to showcase their coding projects, skills, and contributions in an interactive and engaging way. It provides a comprehensive view of my coding journey, including my GitHub repositories, contributions to open source, and coding statistics.
            </p>
            <p className="mb-6">
              Explore the embedded Codolio page below to see a visual representation of my coding activity, popular repositories, language usage, and more.
            </p>
            <a 
              href="https://codolio.com/profile/Mahadevan/card" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              Visit Codolio
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video w-full bg-muted/30 rounded-lg overflow-hidden border"
        >
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <iframe
              src="https://codolio.com/profile/Mahadevan/card" // Replace with your actual Codolio embed URL
              title="Codolio Profile"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          
          <div className="absolute inset-0 pointer-events-none border-2 border-transparent hover:border-primary/20 transition-colors duration-300"></div>
        </motion.div>
        
        <p className="text-center text-muted-foreground mt-4">
          Note: You will need to replace the iframe src with your actual Codolio embed URL.
        </p>
      </div>
    </div>
  );
};

export default Codolio;