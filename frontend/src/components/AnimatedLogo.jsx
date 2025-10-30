import { motion } from "framer-motion";
import RectLogo from "/Acadify Rect Logo.svg";

const AnimatedLogo = () => {
  return (
    <div className="relative inline-block -translate-x-15 scale-125">
      <motion.img
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        src={RectLogo}
        className="w-20 h-15 z-10 relative"
        alt=""
      />
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="w-30 h-12 bg-gradient-to-r from-[#06408C] to-[#2F80ED] absolute -right-22 top-2 rounded-2xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute z-15 font-logo text-white text-[40px] left-2 -top-1"
        >
          cadify
        </motion.span>
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="absolute text-[7px] -bottom-5 w-42 font-subtitle text-center"
      >
        Your Central Hub for Academic Management
      </motion.span>
    </div>
  );
};

export default AnimatedLogo;
