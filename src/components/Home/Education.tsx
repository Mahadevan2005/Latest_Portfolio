import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

// Replace with your actual education data
const educationData = [
  {
    id: 1,
    degree: "B.E Computer Science and Engineering",
    institution: "Prince Shri Venkateshwara Padmavathy Engineering College",
    location: "Chennai, TamilNadu, India",
    duration: "2022 - 2026",
    description: "Pursuing Bachelor's in Computer Science and Engineering with a passion to become a Software developer.",
    achievements: [
      "CGPA - 9.48/10",
      "Relevant Courses: Data Structures, Algorithms, Artificial Intelligence & Machine Learning, UI/UX Design, Computer Vision",
    ]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Data Science and Applications",
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, TamilNadu, India",
    duration: "2023 - 2026",
    description: "Pursuing Bachelor's in Data Science and applications with a keen interest to explore Data science and hone my programming skills.",
    achievements: [
      "CGPA - 8.29/10",
      "Relevant Courses: Statistics, Mathematics, Modern Application Development, System Commands, Programming in Java, Database Management Systems.",
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="section bg-muted/30">
      <div className="container-custom">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications"
        />
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <EducationItem key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface EducationItemProps {
  education: typeof educationData[0];
  index: number;
}

const EducationItem = ({ education, index }: EducationItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card p-6 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-medium">{education.degree}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {education.duration}
            </div>
          </div>
          
          <p className="text-lg font-medium">{education.institution}</p>
          <p className="text-muted-foreground mb-4">{education.location}</p>
          
          <p className="mb-4">{education.description}</p>
          
          {education.achievements.length > 0 && (
            <>
              <h4 className="font-medium mb-2">Academic Overview</h4>
              <ul className="space-y-1">
                {education.achievements.map((achievement, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2 text-primary font-medium">•</span>
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;