import { motion } from "framer-motion";
import profilePic from "../../public/profile.jpg";
import bgImage from "../../public/hero-bg.jpg";
import { HiExternalLink } from "react-icons/hi"

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(80vh-5rem)] flex flex-col items-center justify-center overflow-hidden text-white px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50 z-0"></div> */}

      {/* Centered CTA */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 flex gap-8">
        <a
          href="https://www.linkedin.com/in/mahadevan-in/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0 text-white font-semibold hover:text-pink-500 transition flex-nowrap"
        >
          LinkedIn <HiExternalLink size={18} />
        </a>
        <a
          href="https://github.com/mahadevan2005"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0.5 text-white font-semibold hover:text-pink-500 transition flex-nowrap"
        >
          GitHub <HiExternalLink size={18} />
        </a>
        <a
          href="https://drive.google.com/file/d/1597qJ2TeOCFWdNNpYAmqFnZvw65zUVLH/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-0 text-white font-semibold hover:text-pink-500 transition flex-nowrap"
        >
          Resume <HiExternalLink size={18} />
        </a>
      </div>

      {/* Main Hero Content */}
      <div className="max-w-5xl w-full flex flex-col items-center justify-center relative z-10">
        {/* Background Text */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-16 sm:top-24 md:top-1/4 font-extrabold leading-tight tracking-tight text-gray-200 uppercase z-0 text-center w-full"
          style={{ lineHeight: "0.85" }}
        >
          <span className="block text-[14vw] md:text-[9vw]">MAHADEVAN</span>
          <span className="block text-[12vw] md:text-[8vw]">MANIKANDAN</span>
        </motion.h1>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mt-48 md:mt-80"
        >
          <img
            src={profilePic}
            alt="Mahadevan"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;