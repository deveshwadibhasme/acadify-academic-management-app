import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion'

const Button = ({ children, className, type, motion, isLink, toLink, onClick }) => {
  if (motion) {
    return (
      <motion.button
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        type={type}
        onClick={onClick}
        className={`py-2 px-6 transition cursor-pointer group min-w-20 bg-sooth-green rounded-xl flex items-center justify-between ${className}`}
      >
        {children}
      </motion.button>
    );
  }
  if (isLink) {
    return (
      <Link
        to={toLink}
        className={`py-2 px-6 font-title-heading transition cursor-pointer group min-w-20 bg-sooth-green rounded-xl flex items-center justify-between ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        type={type}
        className={`py-2 px-6 transition cursor-pointer group min-w-20 bg-sooth-green rounded-xl flex items-center justify-between ${className}`}
      >
        {children}
      </button>
    );
  }
};

export default Button;
