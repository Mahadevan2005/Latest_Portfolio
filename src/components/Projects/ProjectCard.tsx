import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  sourceUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: ProjectProps;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden h-full flex flex-col hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-medium mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-sm flex items-center gap-1"
              aria-label={`View source code for ${project.title}`}
            >
              <Github className="h-4 w-4" />
              Source
            </a>
          )}
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm flex items-center gap-1"
              aria-label={`View live site for ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          )}
          
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary text-sm flex items-center gap-1"
              aria-label={`View demo for ${project.title}`}
            >
              <Play className="h-4 w-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;