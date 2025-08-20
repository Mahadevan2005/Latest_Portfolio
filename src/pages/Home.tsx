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
      <section id="contact" className="section">
        <div className="container-custom">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have a question or want to work together? Drop me a message!"
            centered
          />
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card border rounded-lg p-6 sm:p-8 shadow-sm">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;