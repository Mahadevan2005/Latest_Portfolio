import SectionHeading from '../components/SectionHeading';
import ExperienceCard, { ExperienceProps } from '../components/Experience/ExperienceCard';
import { motion } from 'framer-motion';

// Replace with your actual experience data
const experienceData: ExperienceProps[] = [
  {
    id: 1,
    company: "Tech Innovators Inc.",
    role: "Senior Software Engineer",
    logo: "https://images.pexels.com/photos/11035363/pexels-photo-11035363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    duration: "Jan 2021 - Present",
    description: [
      "Lead a team of 5 developers in building a scalable e-commerce platform using React, Node.js, and MongoDB",
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
      "Optimized database queries resulting in a 30% improvement in application performance",
      "Mentored junior developers and conducted code reviews to ensure high code quality standards"
    ],
    website: "https://example.com"
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Professional Experience" 
            subtitle="My journey through various roles and companies in the tech industry"
          />
        </motion.div>
        
        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-muted/50 hidden sm:block"></div>
          
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="relative sm:pl-14">
              {/* Timeline Dot */}
              <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 hidden sm:block"></div>
              
              <ExperienceCard experience={experience} index={index} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;