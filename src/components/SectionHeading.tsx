import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionHeadingProps { title: string; subtitle?: string; centered?: boolean; }

export default function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: .1 });
  return <motion.div ref={ref} initial={{ opacity: 0, y: 18 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }} transition={{ duration: .5 }} className={`section-head ${centered ? "text-center" : ""}`}>
    <div><p className="eyebrow">Selected archive</p><h2 className="display">{title}</h2></div>{subtitle && <p>{subtitle}</p>}
  </motion.div>;
}
