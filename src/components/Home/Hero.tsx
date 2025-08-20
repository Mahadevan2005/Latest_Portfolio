import { motion } from "framer-motion";
import profilePic from "../../public/profile.jpg";
import bgImage from "../../public/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(80vh-5rem)] flex items-center justify-center overflow-hidden text-white px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Centered container with reduced width */}
      <div className="max-w-5xl w-full flex flex-col items-center justify-center relative z-10">
        {/* Big Background Text */}
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
