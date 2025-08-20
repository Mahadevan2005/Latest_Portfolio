import { motion } from "framer-motion";
import profilePic from "../../assets/profile.jpg";

const Hero = () => {
  return (
        <section className="relative min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4">
      {/* Big Background Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute text-[14vw] md:text-[9vw] font-extrabold leading-tight tracking-tight text-gray-300 uppercase z-0 text-center"
        style={{ lineHeight: "0.85" }}
      >
        MAHADEVAN <br className="block md:hidden" /> MANIKANDAN
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 mt-96"
      >
        <img
          src={profilePic}
          alt="Mahadevan"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
