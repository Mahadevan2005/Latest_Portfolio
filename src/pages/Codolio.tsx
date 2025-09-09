import { useState, useEffect } from "react";
import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaTrophy, 
  FaBrain, 
  FaPython,
  FaCodeBranch,
  FaMedal,
  FaAward,
  FaGithub, 
  FaJava, 
  FaLayerGroup 
} from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const highlights = [
  { icon: <FaCode />, title: "1325+ Problems Solved", subtitle: "Across LeetCode, CodeChef, and other platforms." },
  { icon: <FaBrain />, title: "Strong DSA Foundations", subtitle: "Mastering algorithms, data structures, and patterns." },
  { icon: <FaMedal />, title: "Flipkart Grid 7.0 Semifinalist", subtitle: "Reached semifinals out of 1.6 Lakh+ participants." },
  { icon: <FaTrophy />, title: "Max : 1451 Leetcode Rating", subtitle: "Best Contest Rank: 1772 / 25,000+" },
  { icon: <FaGithub />, title: "Active GitHub Contributor", subtitle: "Consistent commits, pull requests, and open-source projects." },
  { icon: <FaJava />, title: "Java ⭐⭐⭐⭐⭐", subtitle: "Awarded by HackerRank." },
  { icon: <FaPython />, title: "Python ⭐⭐⭐⭐⭐", subtitle: "Awarded by HackerRank." },
  { icon: <FaAward />, title: "20+ Awards & Badges", subtitle: "Including LeetCode 100 Days, CodeStudio Specialist Badges." },
  { icon: <FaCodeBranch />, title: "825+ Commits", subtitle: "Consistent coding streak & contributions." },
  { icon: <FaLayerGroup />, title: "Algorithmic Thinking", subtitle: "Breaking down complex problems into efficient solutions." },
];


const Codolio = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen py-12 sm:py-16 overflow-hidden
      bg-gradient-to-b from-white via-amber-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950"
    >
      <div className="container-custom relative z-10 flex flex-col px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <SectionHeading
            title="Codolio"
            subtitle="Showcasing my coding journey, problem-solving milestones, and continuous learning progress."
          />
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-medium">
            Scroll below to explore my GitHub contributions, coding achievements, and detailed Codolio profile.
          </p>
        </motion.div>

        {/* Highlights Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-2xl font-bold text-gray-800 dark:text-gray-200 text-center"
        >
          Some Key Highlights of My Journey 🚀
        </motion.h3>

        {/* Highlights */}
        <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 w-full max-w-6xl">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/70 shadow-md backdrop-blur-md hover:shadow-2xl hover:bg-gradient-to-r hover:from-amber-200 hover:to-pink-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
            >
              <div className="text-4xl text-amber-500 dark:text-amber-400 mb-4 drop-shadow-lg">
                {item.icon}
              </div>
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
        </div>

        {/* CTA before iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://codolio.com/profile/Mahadevan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-primary dark:text-amber-200 text-lg hover:text-primary/80 transition-colors duration-300"
          >
            Explore My Detailed Codolio
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>

        {/* Codolio Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="
            relative w-full 
            sm:max-w-4xl md:max-w-6xl lg:max-w-7xl
            h-[75vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh]
            mt-20 rounded-3xl shadow-2xl border-2 
            border-gray-300 dark:border-gray-700 overflow-hidden 
            bg-gradient-to-br from-white via-amber-50 to-white 
            dark:from-gray-900 dark:via-gray-800
          "
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-gray-900/50 rounded-3xl z-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary dark:border-amber-200"></div>
            </div>
          )}
          {/* iframe shifted upwards to hide header/login */}
          <iframe
            src="https://codolio.com/profile/Mahadevan"
            title="Codolio Profile"
            className="absolute top-[-70px] left-0 w-full h-[calc(100%+70px)] rounded-3xl border-none"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Codolio;
