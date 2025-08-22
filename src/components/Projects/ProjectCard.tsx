import { useState, useRef } from 'react';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  images: string[]; // multiple images
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

  // refs for custom nav buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 rounded-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Swiper for multiple images */}
      <div className="relative h-48 sm:h-56">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          loop
          onBeforeInit={(swiper) => {
            // bind swiper navigation to refs
            if (typeof swiper.params.navigation !== 'boolean') {
              swiper.params.navigation!.prevEl = prevRef.current;
              swiper.params.navigation!.nextEl = nextRef.current;
            }
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full h-full"
        >
          {project.images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`${project.title} - ${idx + 1}`}
                className="w-full h-60 object-cover rounded-t-2xl"
                style={{
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <button
          ref={prevRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/70 rounded-full shadow hover:bg-white transition"
        >
          <ChevronLeft className="w-4 h-4 text-gray-800" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/70 rounded-full shadow hover:bg-white transition"
        >
          <ChevronRight className="w-4 h-4 text-gray-800" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-amber-300 mb-2">{project.title}</h3>
          <p className="text-base leading-relaxed mb-4 text-stone-600 dark:text-stone-100">
            {project.description}
          </p>

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

        <div className="flex gap-3 mt-4 flex-wrap">
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
