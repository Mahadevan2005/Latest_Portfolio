import SectionHeading from "../SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa";
import ghibliPic from "../../public/Mahadevan_Ghibli.png";

const About = () => {
  const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.2, // triggers earlier
  rootMargin: "0px 0px -10% 0px", // helps mobile trigger faster
});

  return (
    <section id="about" className="section bg-muted/30">
      <div className="container-custom">
        <SectionHeading
          title="WHAT I DO"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Hello! I’m a <span className="font-semibold text-primary">Computer Science and Data Science student</span> with a deep passion for{" "}
              <span className="font-medium">software engineering</span>. Ever since I wrote my first line of code, I’ve been driven by the excitement of solving problems and creating impactful solutions through technology.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I love turning <span className="font-semibold">ideas into real applications</span>—blending logic, creativity, and clean code. With experience across both front-end and back-end development, I’m constantly{" "}
              <span className="font-medium">exploring, building, and learning</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether it’s refining my skills through coding challenges, diving into new tech, or experimenting with ideas, I’m always looking for ways to{" "}
              <span className="font-medium">grow and contribute</span>.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I’m excited about where this journey will take me—and I’m always open to connecting with{" "}
              <span className="font-medium">like-minded innovators</span> along the way!
            </p>

            {/* Highlights / Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm backdrop-blur-md">
                <FaLaptopCode className="text-primary text-2xl mb-2" />
                <p className="font-semibold">Full-Stack</p>
                <p className="text-sm text-muted-foreground">Dev Experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm backdrop-blur-md">
                <FaLightbulb className="text-yellow-500 text-2xl mb-2" />
                <p className="font-semibold">Problem Solver</p>
                <p className="text-sm text-muted-foreground">Creative Thinker</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white/70 dark:bg-gray-800/60 shadow-sm backdrop-blur-md">
                <FaUsers className="text-green-500 text-2xl mb-2" />
                <p className="font-semibold">Team Player</p>
                <p className="text-sm text-muted-foreground">Collaborative Spirit</p>
              </div>
            </div>
          </motion.div>

          {/* Image / Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={ghibliPic}
              alt="Mahadevan illustration"
              className="w-80 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
