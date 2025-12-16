import ThoughtCard, { ThoughtProps } from "../components/Thoughts/ThoughtCard";
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const thoughts: ThoughtProps[] = [
  {
    id: "learning",
    category: "learning",
    text: "Learning Never Stops - Beyond Academics!",
    date: "Oct 6, 2025",
    color: "bg-yellow-300",
  },
  {
    id: "miracles",
    category: "miracles",
    text: "Miracles Do Happen - Trust the Timing!",
    date: "Nov 29, 2025",
    color: "bg-indigo-300",
  },
];

const Thoughts = () => {
  return ( 
    <section className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 py-16 px-4 flex flex-col items-center">
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
      <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <SectionHeading 
                  title="Thoughts & Reflections" 
                  subtitle="Uncompiled fragments of how I see, feel, and make sense of the world." 
                />
              </motion.div>
            </div>

      <div className="grid gap-6 w-full max-w-4xl">
        {thoughts.map((thought, index) => (
          <ThoughtCard key={thought.id} thought={thought} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Thoughts;
