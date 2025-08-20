import { useState } from 'react';
import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, PanelLeft, Gem, Settings } from 'lucide-react';

// These are placeholder skills, you should replace them with your actual skills
const skillsData = {
  frontend: [
    "React", "Vue.js", "TypeScript", 
    "JavaScript", "HTML", "CSS", "Tailwind CSS",
  ],
  backend: [
    "Django", "Flask", "REST APIs", 
    "MongoDB", "PostgreSQL", "MySQL"
  ],
  tools: [
    "Git", "Vercel", "Netlify", "VS Code", 
    "Figma","Postman"
  ],
  other: [
    "Testing", "SEO", "Performance Optimization", "Responsive Design", 
    "Accessibility", "UX/UI Design"
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: <Code className="h-5 w-5" /> },
    { id: 'backend', label: 'Backend', icon: <PanelLeft className="h-5 w-5" /> },
    { id: 'tools', label: 'Tools', icon: <Settings className="h-5 w-5" /> },
    { id: 'other', label: 'Other', icon: <Gem className="h-5 w-5" /> },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <SectionHeading 
          title="Skills & Tools" 
          subtitle="A comprehensive list of my technical skills and tools I use"
        />
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="bg-card border rounded-lg p-6 shadow-sm"
        >
          <div className="flex flex-wrap gap-4 mb-8 justify-center sm:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/70'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillsData[activeTab as keyof typeof skillsData].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-muted/50 rounded-lg p-3 text-center hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;