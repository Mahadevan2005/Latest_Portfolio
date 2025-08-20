import { Briefcase, ArrowUpRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-md overflow-hidden bg-muted flex-shrink-0 border flex items-center justify-center">
          <img 
            src={experience.logo} 
            alt={`${experience.company} logo`} 
            className="w-full h-full object-contain p-2"
          />
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-medium">{experience.role}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {experience.duration}
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
            <span className="text-lg font-medium">{experience.company}</span>
            
            {experience.website && (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                aria-label={`Visit ${experience.company} website`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
          
          <ul className="space-y-2 mt-4">
            {experience.description.map((item, i) => (
              <li key={i} className="flex">
                <span className="mr-2 text-primary font-medium">•</span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          
          {experience.website && (
            <div className="mt-4">
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
                aria-label={`Visit ${experience.company} website`}
              >
                Visit Company
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;