import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "../components/AnimatedLogo";

const AnimatedLogoScreen = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1500); // shows for 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLogo && (
        <motion.div
          key="logo-screen"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.2 }}
          transition={{ duration: 0 }}
          className="max-w-screen w-full min-h-screen flex items-center justify-center bg-white" // optional bg
        >
          <AnimatedLogo />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedLogoScreen;
