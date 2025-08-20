import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HelloAnimationProps {
  onFinish: () => void;
}

const greetings: string[] = [
  "• Hello", "• Hola", "• Bonjour", "• Ciao", "• ನಮಸ್ಕಾರ", "• नमस्ते", "• வணக்கம்"
];

const HelloAnimation: React.FC<HelloAnimationProps> = ({ onFinish }) => {
  const [index, setIndex] = useState<number>(0);
  const [fadeOutContainer, setFadeOutContainer] = useState(false);

  useEffect(() => {
    if (index >= greetings.length) return;

    const timer = setTimeout(() => {
      if (index + 1 === greetings.length) {
        // Start fade out of the entire container
        setFadeOutContainer(true);
        setTimeout(onFinish, 500); // wait for container fade-out
      } else {
        setIndex(index + 1);
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <AnimatePresence>
      {!fadeOutContainer && (
        <motion.div
          key="hello-container"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0f0f0f",
          }}
        >
          <AnimatePresence mode="wait">
            {index < greetings.length && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                style={{
                  fontSize: "4rem",
                  fontWeight: 600,
                  color: "#ff69b4",
                  textAlign: "center",
                }}
              >
                {greetings[index]}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelloAnimation;
