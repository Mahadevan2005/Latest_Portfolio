import { motion } from "framer-motion";
import { Building2, ChevronRight, Calendar, TrendingUp } from "lucide-react";

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
  onClick: () => void;
  isActive: boolean;
}

const ExperienceCard = ({ experience, index, onClick, isActive }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative"
    >
      <motion.button
        onClick={onClick}
        className={`
          relative w-full text-left p-5 sm:p-6 rounded-2xl sm:rounded-3xl
          transition-all duration-500 cursor-pointer
          bg-white/70 dark:bg-gray-800/70 backdrop-blur-md
          border
          ${isActive 
            ? 'ring-2 ring-primary dark:ring-amber-200 shadow-lg border-primary dark:border-amber-200 bg-white/90 dark:bg-gray-800/90' 
            : 'border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-primary/30 dark:hover:border-amber-200/30 hover:-translate-y-1'
          }
        `}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gradient overlay on hover */}
        <div className={`
          absolute inset-0 rounded-2xl sm:rounded-3xl 
          bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 
          dark:from-amber-200/10 dark:via-transparent dark:to-purple-400/10
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
          ${isActive ? 'opacity-100' : ''}
        `} />
        
        {/* Glow effect */}
        <div className={`
          absolute -inset-px rounded-2xl sm:rounded-3xl 
          bg-gradient-to-r from-primary/20 via-pink-500/10 to-purple-500/20 
          dark:from-amber-200/20 dark:via-pink-300/10 dark:to-purple-400/20
          opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10
          ${isActive ? 'opacity-100' : ''}
        `} />
        
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
          {/* Logo Container */}
          <motion.div
            className={`
              relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0
              bg-gray-100 dark:bg-gray-700 flex items-center justify-center
              border transition-all duration-300
              ${isActive 
                ? 'border-primary dark:border-amber-200 shadow-lg' 
                : 'border-gray-200 dark:border-gray-600 group-hover:border-primary/30 dark:group-hover:border-amber-200/30 group-hover:shadow-md'
              }
            `}
            whileHover={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 0.4 }}
          >
            {experience.logo ? (
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const sibling = e.currentTarget.nextElementSibling;
                  if (sibling) sibling.classList.remove('hidden');
                }}
              />
            ) : null}
            <Building2 className={`w-7 h-7 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400 ${experience.logo ? 'hidden' : ''}`} />
            
            {/* Active indicator pulse */}
            {isActive && (
              <motion.div
                className="absolute inset-0 border-2 border-primary dark:border-amber-200 rounded-xl sm:rounded-2xl"
                initial={false}
                animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
            )}
          </motion.div>

          {/* Content */}
          <div className="flex-1 min-w-0 w-full sm:w-auto">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100 group-hover:text-primary dark:group-hover:text-amber-200 transition-colors duration-300 line-clamp-2 sm:line-clamp-1">
                  {experience.role}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-1 mt-1">
                  {experience.company}
                </p>
              </div>
              
              {/* Arrow indicator - Desktop */}
              <motion.div
                className={`
                  hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full items-center justify-center
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-primary dark:bg-amber-200 text-white dark:text-gray-900' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-primary dark:group-hover:bg-amber-200 group-hover:text-white dark:group-hover:text-gray-900'
                  }
                `}
                animate={{ x: isActive ? 2 : 0 }}
                whileHover={{ x: 3 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </div>

            {/* Duration & Skills Row */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-primary/10 dark:bg-amber-200/10 text-primary dark:text-amber-200 border border-primary/20 dark:border-amber-200/20">
                <Calendar className="w-3 h-3" />
                {experience.duration}
              </span>
              
              {/* Metrics preview - Mobile when active */}
              {experience.metrics && Object.keys(experience.metrics).length > 0 && (
                <span className={`
                  inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium 
                  bg-purple-500/10 dark:bg-purple-400/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 dark:border-purple-400/20
                  ${isActive ? 'sm:hidden' : 'hidden'}
                `}>
                  <TrendingUp className="w-3 h-3" />
                  {Object.keys(experience.metrics).length} metrics
                </span>
              )}
              
              {/* Skills preview - Desktop only */}
              {experience.skills && experience.skills.length > 0 && (
                <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
                  {experience.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 truncate max-w-[100px]"
                    >
                      {skill}
                    </span>
                  ))}
                  {experience.skills.length > 3 && (
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      +{experience.skills.length - 3}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Description preview - Mobile only when active */}
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="sm:hidden mt-3 text-xs text-gray-600 dark:text-gray-400 line-clamp-2"
              >
                {experience.description[0]}
              </motion.p>
            )}
          </div>
        </div>

        {/* Mobile: Tap to view indicator */}
        <motion.div
          className={`
            sm:hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700
            flex items-center justify-center gap-2 text-xs
            ${isActive ? 'text-primary dark:text-amber-200' : 'text-gray-600 dark:text-gray-400'}
          `}
        >
          <span>Tap to view details</span>
          <ChevronRight className="w-3 h-3" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ExperienceCard;