import SectionHeading from '../SectionHeading';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-muted/30">
      <div className="container-custom">
        <SectionHeading 
          title="About Me" 
          subtitle="A brief introduction to who I am and what I do"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <p>
            Hello! I’m a Computer Science and Data Science student with a deep passion for software engineering. Ever since I wrote my first line of code, I’ve been driven by the excitement of solving problems and creating impactful solutions through technology.
            </p>
            <p>
            I love the process of turning ideas into real, functional applications—blending logic, creativity, and clean code. With experience across both front-end and back-end development, I’m constantly exploring, building, and learning.
            </p>
            <p>
            Whether it’s refining my skills through coding challenges, diving into new tech, or simply experimenting with ideas, I’m always looking for ways to grow and contribute.
            </p>
            <p>
            I’m excited about where this journey will take me—and I’m always open to connecting with like-minded folks along the way!
            </p>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* This should be replaced with your image */}
            {/* <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-lg font-medium mb-4">Your About Image Here</p>
                <p className="text-sm text-muted-foreground">Replace this with your about section image</p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;