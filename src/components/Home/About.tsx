import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { FaLaptopCode, FaLightbulb, FaUsers, FaCodeBranch } from "react-icons/fa";

const About = () => {
  const highlights = [
    { icon: <FaLaptopCode />, title: "Full-Stack Dev", subtitle: "Web & App" },
    { icon: <FaLightbulb />, title: "Creative Thinker", subtitle: "Problem Solver" },
    { icon: <FaUsers />, title: "Team Player", subtitle: "Collaboration" },
    { icon: <FaCodeBranch />, title: "Open Source", subtitle: "Contributor" },
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          >
            I am a{" "}
            <span className="font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
              Computer Science & Data Science student
            </span>{" "}
            passionate about software development, coding, and problem-solving. I enjoy designing elegant solutions, writing clean and efficient code, and exploring how technology can be harnessed to solve real-world challenges. My journey is aimed at becoming a{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Software Development Engineer
            </span>
            , and I have hands-on experience with both front-end and back-end technologies, allowing me to build complete software products that make an impact.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 font-medium"
          >
            I strongly believe in{" "}
            <span className="font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
              continuous learning
            </span>{" "}
            and honing my{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              problem-solving skills
            </span>
            , whether through competitive coding, personal projects, or keeping up with the latest industry trends. I am driven to collaborate on innovative projects that challenge me and contribute meaningful solutions to the tech world.
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
          transition={{ duration: 0.6, delay: 0.4 }}
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
