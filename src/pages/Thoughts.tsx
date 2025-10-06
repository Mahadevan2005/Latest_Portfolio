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
];

const Thoughts = () => {
  return (
    <section className="min-h-screen bg-black py-16 px-4 flex flex-col items-center bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <SectionHeading 
                  title="Thoughts" 
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
