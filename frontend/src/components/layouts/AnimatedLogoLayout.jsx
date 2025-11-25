import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLogo from "../AnimatedLogo";

const AnimatedLogoLayout = ({ children, className }) => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showLogo ? (
        <motion.div
          key="logo-screen"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-screen w-full min-h-screen flex items-center justify-center bg-white/50"
        >
          <AnimatedLogo />
        </motion.div>
      ) : (
        <>
          {children}
        </>
      )}
    </AnimatePresence>
  );
};

export default AnimatedLogoLayout;
