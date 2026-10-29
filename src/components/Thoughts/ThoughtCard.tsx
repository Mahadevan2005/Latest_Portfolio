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
        <div className="card-link bg-[var(--paper-raised)] p-6 sm:p-8 cursor-pointer">
          <p className="mono text-[10px] uppercase tracking-[.12em] text-[var(--signal)] mb-5">Mahadevan on {thought.category}</p>
          <p className="display text-[clamp(28px,3.4vw,46px)] mb-7 leading-[1.05]">{thought.text}</p>
          <p className="mono text-[10px] uppercase tracking-[.1em] text-[var(--ink-soft)]">{thought.date} <span className="float-right text-[var(--signal)]">Read →</span></p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ThoughtCard;
