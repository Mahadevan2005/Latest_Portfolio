import SectionHeading from "../components/SectionHeading";
import ExperienceCard, { ExperienceProps } from "../components/Experience/ExperienceCard";
import { motion } from "framer-motion";

const experienceData: ExperienceProps[] = [
  {
    id: 1,
    company: "CODE IIT Madras (NPTEL)",
    role: "Junior Developer Intern",
    logo: "/experience/code_logo.jpeg",
    duration: "February 2025 - April 2025",
    description: [
      "Designed and implemented an automated tool from scratch for NPTEL to compile lecture PDFs into structured E-Books using Python and Flask.",
      "Reduced processing time from 3 hours to 5 minutes (90% time savings)",
      "Streamlined collaborative development by managing feature branches and reviewing pull request using Git, resulting in a 40% reduction in merge conflicts and improved code quality across the team.",
      "Improved code reliability and consistency by conducting thorough reviews and enforcing delivery standards, leading to a measurable drop in post-deployment issues and rework.",
    ],
    website: "https://code.iitm.ac.in/",
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen py-16 sm:py-20 
        bg-gradient-to-b 
          from-white/80 via-amber-50 to-white/90 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 
        overflow-hidden relative">
        
        {/* Background Shapes */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          {/* Left Top Blob */}
          <div className="absolute w-80 h-80 bg-gradient-to-tr 
            from-cyan-200 to-purple-300 dark:from-purple-900 dark:to-cyan-700 
            rounded-full filter blur-4xl opacity-30 -top-20 -left-24"></div>

          {/* Right Bottom Blob */}
          <div className="absolute w-96 h-96 bg-gradient-to-br 
            from-pink-200 to-yellow-200 dark:from-yellow-900 dark:to-pink-700 
            rounded-full filter blur-4xl opacity-30 bottom-0 right-0"></div>
          
          {/* Center Soft Glow */}
          <div className="absolute w-72 h-72 bg-gradient-to-r from-cyan-100 via-white to-amber-100 
            rounded-full filter blur-3xl opacity-20 top-1/3 left-1/2 -translate-x-1/2"></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Professional Experience"
            subtitle="My journey through various roles and companies in the tech industry"
          />
        </motion.div>

        {/* Experience Cards */}
        <div className="mt-12 space-y-12">
          {experienceData.map((exp, idx) => (
            <ExperienceCard key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
