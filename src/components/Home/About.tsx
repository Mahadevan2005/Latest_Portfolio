import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, 
  FaProjectDiagram, 
  FaUsers, 
  FaLightbulb, 
  FaRocket, 
  FaServer, 
  FaMobileAlt, 
  FaChartLine 
} from "react-icons/fa";

const About = () => {
  const highlights = [
    { icon: <FaProjectDiagram />, title: "Problem Solver", subtitle: "Algorithmic & Logical Thinking" },
    { icon: <FaLaptopCode />, title: "Full-Stack Developer", subtitle: "React, Vue, Flask, SpringBoot" },
    { icon: <FaServer />, title: "Backend Enthusiast", subtitle: "APIs, Databases & Server Logic" },
    { icon: <FaMobileAlt />, title: "Responsive UI Designer", subtitle: "Mobile, Tablet & Desktop" },
    { icon: <FaUsers />, title: "Team Collaborator", subtitle: "Agile & Cross-functional Teams" },
    { icon: <FaLightbulb />, title: "Innovative Thinker", subtitle: "Creative & Practical Solutions" },
    { icon: <FaRocket />, title: "Continuous Learner", subtitle: "Exploring Latest Tech Trends & Improving Skills" },
    { icon: <FaChartLine />, title: "Performance Oriented", subtitle: "Optimized Code & Efficient Solutions" },
  ];

  return (
    <section
      id="about"
      className="section bg-gradient-to-b from-amber-50 via-white to-amber-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container-custom lg:text-left">
        <SectionHeading title="About Me" />

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Opening Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            I build things.
          </motion.p>

          {/* Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          >
            I’m a{" "}
            <span className="font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
              Computer Science & Data Science student
            </span>{" "}
            who enjoys turning ideas into working products - from backend systems to clean, intuitive interfaces. I’ve worked across the stack, so I care not just about making features work, but making them{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              reliable, scalable, and pleasant to use
            </span>.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          >
            I like solving problems that involve real constraints - performance, edge cases, messy data, or unclear requirements. Whether it’s debugging something that “should work but doesn’t” or designing a system from scratch, I enjoy getting into the details.
          </motion.p>

          {/* Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          >
            Lately, I’ve been focusing on{" "}
            <span className="font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
              writing better code
            </span>
            , building end-to-end projects, and improving how I think about systems - not just features.
          </motion.p>

          {/* Closing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          >
            I’m working towards becoming a{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Software Development Engineer
            </span>{" "}
            who can own and ship meaningful products.
          </motion.p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-10">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/80 dark:bg-gray-800/70 shadow-md backdrop-blur-md hover:shadow-2xl hover:bg-gradient-to-r hover:from-amber-200 hover:to-pink-200 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
            >
              <div className="text-4xl text-amber-500 dark:text-amber-400 mb-4 drop-shadow-lg">
                {item.icon}
              </div>
              <p className="font-semibold text-lg">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/mahadevan2005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-bold bg-gradient-to-r from-amber-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
