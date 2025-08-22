import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi"

export interface ExperienceProps {
  id: number;
  company: string;
  role: string;
  logo: string;
  duration: string;
  description: string[];
  website?: string;
}

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group w-full sm:max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 p-6 sm:p-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-5">
        {/* Logo */}
        <motion.div
          className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex items-center justify-center border border-gray-200 dark:border-gray-700 flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={experience.logo}
            alt={`${experience.company} logo`}
            className="w-full h-full object-contain p-2"
          />
        </motion.div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-amber-200 group-hover:text-primary transition-colors">
              {experience.role}
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              <Calendar className="h-4 w-4 mr-1 text-gray-400 dark:text-gray-500" />
              {experience.duration}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-4 w-4 text-gray-400 dark:text-gray-500" />
            <span className="text-gray-700 dark:text-gray-300 font-medium text-base sm:text-lg">
              {experience.company}
            </span>
            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-0 flex items-center text-primary dark:text-amber-300 hover:text-primary/80 transition-colors"
                aria-label={`Visit ${experience.company} website`}
              >
                <HiExternalLink size={18} />
              </a>
            )}
          </div>

          <ul className="space-y-2 mt-2">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-gray-900 dark:text-yellow-100 text-sm sm:text-base"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="text-primary dark:text-amber-200 mt-1">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {experience.website && (
            <motion.a
              href={experience.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center text-primary dark:text-amber-300 hover:underline hover:text-primary/80 text-sm sm:text-base font-medium"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: experience.description.length * 0.1 }}
            >
              {/* Visit Company <ArrowUpRight className="h-4 w-4 ml-1" /> */}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
