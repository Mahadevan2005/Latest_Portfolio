import { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard, { ProjectProps } from '../components/Projects/ProjectCard';
import { motion } from 'framer-motion';

// Replace with your actual project data
const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment processing.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com",
    demoUrl: "https://youtube.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks with features like drag-and-drop, filters, and team collaboration.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "TypeScript", "Firebase", "Material UI"],
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An application that uses machine learning to generate unique images based on text prompts.",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Python", "TensorFlow", "Flask", "React"],
    sourceUrl: "https://github.com",
    demoUrl: "https://youtube.com"
  },
  {
    id: 4,
    title: "Real-time Chat Application",
    description: "A chat application with real-time messaging, user profiles, and file sharing capabilities.",
    image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Socket.io", "Node.js", "Express"],
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A weather application that provides current conditions and forecasts for locations worldwide.",
    image: "https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "OpenWeather API", "Tailwind CSS"],
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and experience.",
    image: "https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    sourceUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

// Tech stack filter options
const allTags = Array.from(new Set(projectsData.flatMap(project => project.tags)));

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredProjects = filter 
    ? projectsData.filter(project => project.tags.includes(filter))
    : projectsData;

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Projects" 
            subtitle="A collection of my recent work and personal projects"
          />
          
          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium mr-2">Filter by:</span>
              <button
                onClick={() => setFilter(null)}
                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                  !filter 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/70'
                }`}
              >
                All
              </button>
              
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    filter === tag 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/70'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">No projects found with the selected filter.</p>
            <button
              onClick={() => setFilter(null)}
              className="btn btn-primary mt-4"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;