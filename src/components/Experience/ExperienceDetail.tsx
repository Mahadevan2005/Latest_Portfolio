import { motion } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Calendar,
  Building2,
  CheckCircle2,
  MapPin
} from "lucide-react";
import type { ExperienceProps } from "./ExperienceCard";

interface ExperienceDetailProps {
  experience: ExperienceProps;
  onClose: () => void;
}

const ExperienceDetail = ({ experience, onClose }: ExperienceDetailProps) => {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden bg-white dark:bg-gray-900">
      {/* Header with close button - Fixed header */}
      <div className="flex-shrink-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 flex-shrink-0">
              {experience.logo ? (
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="w-full h-full object-contain p-1.5 sm:p-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const sibling = e.currentTarget.nextElementSibling;
                    if (sibling) sibling.classList.remove('hidden');
                  }}
                />
              ) : null}
              <Building2 className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 ${experience.logo ? 'hidden' : ''}`} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 truncate">
                {experience.role}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                {experience.company}
              </p>
            </div>
          </motion.div>

          <motion.button
            onClick={onClose}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>

      {/* Scrollable content area */}
      <div 
        className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain"
        style={{ 
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgb(209 213 219) transparent'
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
            {/* Main header info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-3 sm:space-y-4"
            >
              <div>
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {experience.role}
                </h2>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                    {experience.company}
                  </span>
                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary dark:text-amber-200 hover:text-primary/80 dark:hover:text-amber-300 transition-colors text-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="font-medium">Visit website</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                  <Calendar className="w-4 h-4" />
                  {experience.duration}
                </span>
                
                {experience.description && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium bg-primary/10 dark:bg-amber-200/10 text-primary dark:text-amber-200 border border-primary/20 dark:border-amber-200/20">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Metrics */}
            {experience.metrics && Object.keys(experience.metrics).length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-3 sm:space-y-4"
              >
                <h3 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  <TrendingUp className="w-4 h-4 text-primary dark:text-amber-200" />
                  Key Impact Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {Object.entries(experience.metrics).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 group overflow-hidden"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + index * 0.05 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      {/* Animated gradient background */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-pink-500/5 to-transparent dark:from-amber-200/10 dark:via-pink-300/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ 
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatType: 'reverse' 
                        }}
                      />
                      
                      <div className="relative text-center">
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary via-pink-500 to-purple-500 dark:from-amber-200 dark:via-pink-300 dark:to-purple-400 bg-clip-text text-transparent mb-1">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 capitalize font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              <h3 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                Key Contributions & Achievements
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {experience.description.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-3.5 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    {/* Number badge */}
                    
                    
                    <div className="flex items-start gap-2.5 sm:gap-3 pl-6 sm:pl-8">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary dark:text-amber-200 flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            {experience.skills && experience.skills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3 sm:space-y-4"
              >
                <h3 className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider">
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-primary via-pink-500 to-purple-500 dark:from-amber-200 dark:via-pink-300 dark:to-purple-400" />
                  Technologies & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-primary/50 dark:hover:border-amber-200/50 hover:bg-primary/5 dark:hover:bg-amber-200/5 hover:scale-105 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45 + index * 0.02 }}
                      whileHover={{ y: -2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Bottom spacing for better scroll experience */}
            <div className="h-8 sm:h-12 lg:h-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;