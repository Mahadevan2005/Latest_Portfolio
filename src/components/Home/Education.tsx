import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.E Computer Science and Engineering",
    institution: "Prince Shri Venkateshwara Padmavathy Engineering College",
    location: "Chennai, TamilNadu, India",
    duration: "2022 - 2026",
    description:
      "Pursuing Bachelor's in Computer Science and Engineering, with a strong focus on becoming a thoughtful and skilled software developer.",
    achievements: [
      "CGPA - 9.48/10 (Rank 1 in the Department)",
      "General Proficiency Award – 2 Consecutive Years, awarded for overall academic and extracurricular excellence.",
      "Completed LEAP Program – gained hands-on experience in IIT-style product-driven projects and real-world problem solving in multidisciplinary teams.",
      "Winner & Participant in Inter-College Speech Competitions – developed communication and presentation skills.",
      "Idea Approved by YUKTI Hackathon Committee – selected among top projects for innovation and feasibility.",
      "Relevant Courses: Data Structures & Algorithms, AI & ML, Operating Systems, Computer Networks, Database Management Systems, Software Testing",
    ],
  },
  {
    id: 2,
    degree: "B.S Data Science and Applications",
    institution: "Indian Institute of Technology Madras",
    location: "Chennai, TamilNadu, India",
    duration: "2023 - 2026",
    description:
      "Studying Data Science, curious about programming, how data reveals patterns, and how it can be used to solve problems in many areas.",
    achievements: [
      "CGPA - 8.29/10",
      "Best Capstone Project Award – recognized for excellence in app development.",
      "Completed Foundation Level – established strong basics in mathematics and statistics for data science.",
      "Completed Diploma in Programming Level – gained hands-on experience in app development (Vue.js, Flask, SQL), Java programming, Linux (bash), and database management.",
      "Top 5% Ranking – achieved in DBMS, Statistics, System Commands, and Modern App Development (MAD-1) courses.",
      "Relevant Courses: Statistics, Mathematics, Python, Linux, Java, Modern App Development, DSA, DBMS, ML Foundations, ML Techniques, Tools in Data Science",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="My academic background and qualifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Detect screen width (optional: can also use Tailwind breakpoints)
  const isLargeScreen = typeof window !== "undefined" ? window.innerWidth >= 768 : true;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: isLargeScreen ? (index % 2 === 0 ? -50 : 50) : 0, // horizontal slide only for large screens
      }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="rounded-2xl bg-card/80 backdrop-blur-md border border-border shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-all"
    >
      {/* Top Row */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 bg-gradient-to-tr from-primary/80 to-primary rounded-xl flex items-center justify-center flex-shrink-0">
          <GraduationCap className="h-7 w-7 text-white" />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground leading-snug">
            {education.degree}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Calendar className="h-4 w-4" />
            <span>{education.duration}</span>
          </div>
        </div>
      </div>

      {/* Institution & Location */}
      <div>
        <p className="text-base sm:text-lg font-semibold text-primary">
          {education.institution}
        </p>
        <p className="text-sm text-muted-foreground">{education.location}</p>
      </div>

      {/* Description */}
      <p className="text-foreground text-sm sm:text-base">{education.description}</p>

      {/* Achievements */}
      {education.achievements.length > 0 && (
        <div>
          <h4 className="font-medium mb-2 text-foreground">Academic Overview</h4>
          <ul className="space-y-1 text-sm">
            {education.achievements
              .filter(a => !a.startsWith("Relevant Courses"))
              .map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* Relevant Courses */}
      {education.achievements.some(a => a.startsWith("Relevant Courses")) && (
        <div className="mt-2">
          <h4 className="font-medium mb-1 text-foreground">Relevant Courses</h4>
          <p className="text-sm sm:text-base text-muted-foreground">
            {education.achievements
              .find(a => a.startsWith("Relevant Courses"))
              ?.replace("Relevant Courses: ", "")}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default Education;