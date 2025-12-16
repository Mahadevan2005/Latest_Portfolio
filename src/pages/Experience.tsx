import ExperienceCard, { ExperienceProps } from "../components/Experience/ExperienceCard";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
// import { Code2, TrendingUp } from "lucide-react";

const experienceData: ExperienceProps[] = [
  {
    id: 1,
    company: "IIT Madras (BS in Data Science Programme)",
    role: "Software Developer Intern",
    logo: "/experience/iitm_bs_logo.png",
    duration: "September 2025 - Present",
    description: [
      "Built and scaled a payments reconciliation system, migrating from Flask to Django to automate high-volume transaction validation and deliver accurate tracking of large-scale fund transactions.",
      "Led the complete development lifecycle - requirement gathering, SRS documentation, backend architecture, feature implementation, testing, and demos - boosting speed by 40% and cutting errors by 50%.",
      "Developed a Python-based QC automation script to process and validate 60K+ data rows, automating manual checks and cutting verification time by 70%, ensuring accurate, reliable reports across centers.",
      "Resolved critical issues in payment workflows, course enrollment, and user dashboards, improving system stability and enhancing the experience for 50+ students."
    ],
    website: "https://study.iitm.ac.in/ds/",
    skills: ["Django", "Python", "Flask", "API Development", "Database Design", "OAuth Integration"],
    metrics: { efficiency: "+40%", accuracy: "+50%", scale: "60K+" }
  },
  {
    id: 2,
    company: "Centre for Outreach and Digital Education (CODE)",
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
    skills: ["Python", "Flask", "Git", "Automation", "Code Review"],
    metrics: { timeSaved: "90%", conflicts: "-40%", quality: "High" }
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden relative">

        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 dark:from-cyan-600/20 dark:to-blue-800/20 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-amber-400/30 to-yellow-500/30 dark:from-amber-600/20 dark:to-yellow-800/20 rounded-full filter blur-3xl"
          />

          {/* Floating Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-16 pb-6 sm:pt-20 sm:pb-12 text-center"
        >
          {/* Badge */}
          <div className="absolute inset-x-0 top-6 md:top-8 lg:top-10 flex justify-center z-50">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                  bg-amber-100/95 dark:bg-amber-900/40
                  border border-amber-300 dark:border-amber-700 shadow-xl"
              >
                <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span className="text-sm font-medium text-amber-900 dark:text-amber-200">
                  Career Journey
                </span>
              </motion.div>
            </div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Experience isn't time spent.
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-amber-600 to-cyan-600 dark:from-cyan-400 dark:via-amber-400 dark:to-cyan-400 bg-clip-text text-transparent">
              It's impact delivered.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Building systems that scale, solving problems that matter, and leveling up with every mission.
          </motion.p>

          {/* Stats Row */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-12"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                <Code2 className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                2+
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                Organizations
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                <TrendingUp className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                90%
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                Time Optimized
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                60K+
              </div>
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
                Records Processed
              </div>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Journey Timeline Connector (moved inside cards wrapper so it spans only cards area) */}

        {/* Experience Cards - Chapters */}
        <div className="pb-12 -mt-8 relative">
          {/* Connector runs from top of first card to bottom of last card */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-amber-400 to-transparent dark:from-cyan-600 dark:via-amber-600 origin-top z-0"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
          </motion.div>

          <div className="space-y-6 sm:space-y-10">
            {experienceData.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
