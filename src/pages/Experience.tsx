import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Sparkles, LayoutGrid } from "lucide-react";
import ExperienceCard, { ExperienceProps } from "../components/Experience/ExperienceCard";
import ExperienceDetail from "../components/Experience/ExperienceDetail";

const experienceData: ExperienceProps[] = [
  {
    id: 1,
    company: "Skyflo.ai",
    role: "Open Source Developer",
    logo: "/experience/skyflo_ai_logo.jpg",
    duration: "Dec 2025 - Dec 2025",
    description: [
      "Built TPS (Tokens Per Second) metric with server-measured timing, eliminating network latency from performance calculations.",
      "Architected server-side duration measurement by extending SSE (Server-Sent Events) to emit high-precision timestamps from the Engine.",
      "Implemented aggregate TPS calculations across multi-turn conversations and bulk approval workflows.",
      "Added real-time throttling mechanism (200ms intervals) to balance live feedback with UI rendering performance and ensured backwards compatibility for existing API consumers"
    ],
    website: "https://skyflo.ai/",
    skills: ["React.js", "FastAPI", "TypeScript", "API Development", "Server-Sent Events (SSE)", "Code Reviews"],
    metrics: { IssuesClosed: "#72, #75", LinesOfCode: "250+", ReviewCycles: "15+" },
    location: "Remote - Chennai, TN, India"
  },
  {
    id: 2,
    company: "IIT Madras (BS in Data Science Programme)",
    role: "Software Developer Intern",
    logo: "/experience/iitm_bs_logo.png",
    duration: "Sept 2025 - Dec 2025",
    description: [
      "Built and scaled a payments reconciliation system, migrating from Flask to Django to automate high-volume transaction validation and deliver accurate tracking of large-scale fund transactions.",
      "Led the complete development lifecycle - requirement gathering, SRS documentation, backend architecture, feature implementation, testing, and demos - boosting speed by 40% and cutting errors by 50%.",
      "Developed a Python-based QC automation script to process and validate 60K+ data rows, automating manual checks and cutting verification time by 70%, ensuring accurate, reliable reports across centers.",
      "Resolved critical issues in payment workflows, course enrollment, and user dashboards, improving system stability and enhancing the experience for 50+ students."
    ],
    website: "https://study.iitm.ac.in/ds/",
    skills: ["Django", "Python", "Flask", "API Development", "Database Design", "OAuth Integration"],
    metrics: { efficiency: "+40%", accuracy: "+50%", scale: "60K+" },
    location: "Onsite - Chennai, TN, India"
  },
  {
    id: 3,
    company: "Centre for Outreach and Digital Education (CODE)",
    role: "Junior Developer Intern",
    logo: "/experience/code_logo.jpeg",
    duration: "Feb 2025 - Apr 2025",
    description: [
      "Designed and implemented an automated tool from scratch for NPTEL to compile lecture PDFs into structured E-Books using Python and Flask.",
      "Reduced processing time from 3 hours to 5 minutes (90% time savings)",
      "Streamlined collaborative development by managing feature branches and reviewing pull request using Git, resulting in a 40% reduction in merge conflicts and improved code quality across the team.",
      "Improved code reliability and consistency by conducting thorough reviews and enforcing delivery standards, leading to a measurable drop in post-deployment issues and rework.",
    ],
    website: "https://code.iitm.ac.in/",
    skills: ["Python", "Flask", "Git", "Automation", "Code Review"],
    metrics: { timeSaved: "90%", conflicts: "-40%", processAutomated: "100%" },
    location: "Onsite - Chennai, TN, India",
  },
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceProps | null>(null);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  // Prevent body scroll when modal is open on mobile - improved method
  useEffect(() => {
    if (isMobileDetailOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isMobileDetailOpen]);

  // Auto-select first experience on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && !selectedExperience) {
        setSelectedExperience(experienceData[0]);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedExperience]);

  const handleCardClick = (exp: ExperienceProps) => {
    setSelectedExperience(exp);
    // On mobile, open the modal
    if (window.innerWidth < 1024) {
      setIsMobileDetailOpen(true);
    }
  };

  const handleClose = () => {
    setIsMobileDetailOpen(false);
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden isolate">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient orbs matching your theme */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/10 to-pink-200/10 dark:from-amber-500/5 dark:to-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-200/10 to-blue-200/10 dark:from-purple-500/5 dark:to-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-14">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm mb-4 sm:mb-6"
          >
            <Briefcase className="w-4 h-4 text-primary dark:text-amber-200" />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Career Journey</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 px-4"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-pink-500 to-purple-500 dark:from-amber-200 dark:via-pink-300 dark:to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4"
          >
            Actively involved in designing, building, and maintaining systems with an emphasis on clarity, performance, and long-term reliability.
          </motion.p>
        </motion.div>

        {/* Main Content - Responsive Layout */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[450px_1fr] gap-6 lg:gap-8 items-start">
          {/* Cards Column */}
          <div className="space-y-4 lg:space-y-5">
            {/* Section header for cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="hidden lg:flex items-center gap-2 px-2"
            >
              <LayoutGrid className="w-4 h-4 text-primary dark:text-amber-200" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                Roles
              </span>
              <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            </motion.div>

            {experienceData.map((exp, idx) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={idx}
                onClick={() => handleCardClick(exp)}
                isActive={selectedExperience?.id === exp.id}
              />
            ))}

            {/* Pro tip - Desktop only */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden lg:flex items-start gap-3 p-4 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-sm mt-6"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-amber-200/10 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5 text-primary dark:text-amber-200" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Tip
                </h4>
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                  Click on different roles to see detailed breakdowns of contributions, 
                  metrics, and technologies used in each position.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Detail Panel - Desktop Only */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <AnimatePresence mode="wait">
                {selectedExperience && (
                  <motion.div
                    key={selectedExperience.id}
                    initial={{ opacity: 0, scale: 0.98, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: 10 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg"
                    style={{ 
                      height: 'calc(100vh - 12rem)',
                      maxHeight: '800px',
                      minHeight: '600px'
                    }}
                  >
                    <ExperienceDetail 
                      experience={selectedExperience} 
                      onClose={() => {
                        // On desktop, switch to next experience
                        if (experienceData.length > 0) {
                          const nextExp = experienceData.find(e => e.id !== selectedExperience.id) || experienceData[0];
                          setSelectedExperience(nextExp);
                        }
                      }} 
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Mobile Detail Modal - Rendered outside section for proper layering */}
      <AnimatePresence>
        {isMobileDetailOpen && selectedExperience && (
          <>
            {/* Backdrop - z-[9998] to be above everything with full coverage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="lg:hidden fixed inset-0 bg-black/90 dark:bg-black/95 backdrop-blur-md z-[9998]"
              style={{ 
                touchAction: 'none',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%'
              }}
            />
            
            {/* Modal - z-[9999] to be above backdrop and all content */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 35, 
                stiffness: 400,
                mass: 0.8
              }}
              className="lg:hidden fixed inset-x-0 bottom-0 z-[9999] bg-white dark:bg-gray-900 rounded-t-3xl border-t-2 border-gray-300 dark:border-gray-700 shadow-2xl overflow-hidden"
              style={{ 
                height: '90vh',
                maxHeight: '90vh',
                touchAction: 'none',
                position: 'fixed',
                left: 0,
                right: 0,
                bottom: 0
              }}
            >
              {/* Drag handle */}
              <div 
                className="flex-shrink-0 flex items-center justify-center py-3 cursor-grab active:cursor-grabbing bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700"
                onTouchStart={(e) => {
                  const startY = e.touches[0].clientY;
                  const startTime = Date.now();
                  
                  const onTouchMove = (e: TouchEvent) => {
                    const currentY = e.touches[0].clientY;
                    const diff = currentY - startY;
                    const timeDiff = Date.now() - startTime;
                    
                    // Close if dragged down more than 100px or quick swipe down
                    if (diff > 100 || (diff > 50 && timeDiff < 300)) {
                      handleClose();
                      document.removeEventListener('touchmove', onTouchMove);
                    }
                  };
                  
                  const onTouchEnd = () => {
                    document.removeEventListener('touchmove', onTouchMove);
                    document.removeEventListener('touchend', onTouchEnd);
                  };
                  
                  document.addEventListener('touchmove', onTouchMove);
                  document.addEventListener('touchend', onTouchEnd);
                }}
              >
                <div className="w-12 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
              </div>
              
              <div className="h-[calc(100%-52px)] overflow-hidden">
                <ExperienceDetail 
                  experience={selectedExperience} 
                  onClose={handleClose} 
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Experience;