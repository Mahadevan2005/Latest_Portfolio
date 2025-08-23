import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Accolades from './pages/Accolades';
import Experience from './pages/Experience';
import Codolio from './pages/Codolio';
import HelloAnimation from './components/HelloAnimation';
import About from './components/Home/About'
import ContactForm from './components/ContactForm';
import SectionHeading from './components/SectionHeading';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {showAnimation && <HelloAnimation onFinish={() => setShowAnimation(false)} />}

      {!showAnimation && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ThemeProvider>
            <Layout>
              <Routes location={location} key={location.pathname}> 
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/accolades" element={<Accolades />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/codolio" element={<Codolio />} />
                <Route
                path="/contact"
                element={
                  <section className="section bg-white dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
                    <div className="container-custom">
                      <SectionHeading title="Let's Connect!" />
                      <p className="text-gray-600 dark:text-stone-200 text-base sm:text-lg max-w-2xl mx-auto mb-6">
                        Whether you're looking to collaborate on a project, need a solution to a challenging problem,
                        or just want to talk tech, feel free to reach out. Together, we can turn ideas into reality.
                      </p>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="max-w-3xl mx-auto"
                      >
                        <ContactForm />
                      </motion.div>
                    </div>
                  </section>
                }
              />
              </Routes>
            </Layout>
          </ThemeProvider>
        </motion.div>
      )}
    </>
  );
}

export default App;
