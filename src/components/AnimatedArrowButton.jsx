import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const AnimatedArrowButton = ({ isHovered = false }) => {
  return (
    <motion.button
      animate={{
        backgroundColor: isHovered ? "#ffffff" : "#ffffff",
        width: isHovered ? 48 : 24, // 48px = w-12, 24px = w-6
      }}
      transition={{ duration: 0.3 }}
      className="h-10 md:h-12 rounded-full flex items-center justify-center shadow-md overflow-hidden rotate-20"
    >
      <motion.span
        animate={{
          rotate: isHovered ? 70 : 0,
          color: isHovered ? "#000000" : "#000000",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <ArrowUpRight className="w-5 h-5 -rotate-45" />
      </motion.span>
    </motion.button>
  );
};

export default AnimatedArrowButton;
