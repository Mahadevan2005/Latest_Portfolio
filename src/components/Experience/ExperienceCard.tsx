import { Briefcase, Calendar, TrendingUp, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { useState } from "react";

export interface ExperienceProps {
  id: number;
  company: string;
  role: string;
  logo: string;
  duration: string;
  description: string[];
  website?: string;
  skills?: string[];
  metrics?: Record<string, string>;
}

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative w-full sm:max-w-4xl mx-auto"
    >
      <motion.div
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border-2 border-gray-200 dark:border-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 sm:p-8 cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.02, borderColor: "rgba(6, 182, 212, 0.5)" }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
      {/* Glowing Border Effect on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-amber-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-amber-500/20 group-hover:to-cyan-500/20 transition-all duration-500 blur-xl" />

      <div className="relative flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
          {/* Logo */}
          <motion.div
            className="w-20 h-20 rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 flex-shrink-0 shadow-lg"
            whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="w-full h-full object-contain p-2"
            />
          </motion.div>

          {/* Header Content */}
          <div className="flex-1 flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  {experience.role}
                  <Sparkles className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <Briefcase className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium text-base sm:text-lg">
                    {experience.company}
                  </span>
                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                      aria-label={`Visit ${experience.company} website`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <HiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 flex-shrink-0">
                <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-medium text-amber-900 dark:text-amber-200 whitespace-nowrap">
                  {experience.duration}
                </span>
              </div>
            </div>

            {/* Metrics Display */}
            {experience.metrics && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-3 mb-4"
              >
                {Object.entries(experience.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-50 to-amber-50 dark:from-cyan-950/50 dark:to-amber-950/50 border border-cyan-200 dark:border-cyan-800"
                  >
                    <TrendingUp className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {value}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                      {key}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Impact Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-gradient-to-r from-cyan-500 to-amber-500" />
            Impact Delivered
          </h4>
          <ul className="space-y-2.5">
            {experience.description.slice(0, isExpanded ? undefined : 2).map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-gray-800 dark:text-gray-200 text-sm sm:text-base leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-amber-500 mt-2 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {experience.description.length > 2 && (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-4 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors flex items-center gap-1"
              whileHover={{ x: 5 }}
            >
              {isExpanded ? "Show Less" : `Show ${experience.description.length - 2} More`}
              <span className={`transform transition-transform ${isExpanded ? "rotate-180" : ""}`}>
                ↓
              </span>
            </motion.button>
          )}
        </div>

        {/* Skills Section - Expanded View */}
        {isExpanded && experience.skills && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 dark:border-gray-800 pt-4"
          >
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-amber-500" />
              Skills Leveled Up
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-100 to-amber-100 dark:from-cyan-900/30 dark:to-amber-900/30 border border-cyan-300 dark:border-cyan-700 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Click to Expand Hint */}
        <div className="text-center pt-2">
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {isExpanded ? "Click to collapse" : "Click to expand"}
          </span>
        </div>
      </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
