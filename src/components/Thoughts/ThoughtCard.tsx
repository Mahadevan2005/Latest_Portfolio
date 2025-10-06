import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface ThoughtProps {
  id: string;
  category: string;
  text: string;
  date: string;
  color: string;
}

interface ThoughtCardProps {
  thought: ThoughtProps;
  index: number;
}

const ThoughtCard = ({ thought, index }: ThoughtCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link to={`/thoughts/${thought.id}`}>
        <div
          className={`
            ${thought.color}
            p-6 sm:p-8 
            shadow-lg 
            hover:shadow-1xl 
            hover:scale-[1.02] 
            transition-transform duration-300 
            cursor-pointer 
            text-black
            ${index % 2 === 1 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"}
          `}
        >
          <p className="text-sm sm:text-base font-semibold text-black/70 mb-2">
            Mahadevan on{" "}
            <span className="underline decoration-wavy decoration-2 decoration-sky-600">
              {thought.category}
            </span>
          </p>
          <p className="text-lg sm:text-xl font-medium mb-4 leading-relaxed">
            {thought.text}
          </p>
          <p className="text-right text-sm text-black/70">{thought.date}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ThoughtCard;
