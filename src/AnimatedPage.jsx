// src/components/AnimatedPage.jsx
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // smoother easing
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
