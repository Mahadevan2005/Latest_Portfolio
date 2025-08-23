import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Skills from '../components/Home/Skills';
import Education from '../components/Home/Education';
import ContactForm from '../components/ContactForm';
import SectionHeading from '../components/SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      
      {/* Contact Section */}
      <section id="contact" className="section bg-gradient-to-b from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
          <div className="container-custom">
            <SectionHeading title="Let's Connect!" />
            <p className="text-gray-600 dark:text-stone-200 text-base sm:text-lg max-w-2xl mx-auto mb-6">
              Whether you're looking to collaborate on a project, need a solution to a challenging problem, 
              or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.
            </p>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl mx-auto"
          >
            <ContactForm />
          </motion.div>
        </section>
        </div>
  );
};

export default Home;