import { motion } from "framer-motion";
import TiledLogo from "/Acadify Tiled Logo.svg";

const Loading = () => {
  return (
    <div className="max-w-screen w-full min-h-screen flex justify-center items-center">
      {/* <motion.img
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity }}
        className="max-w-20"
        src={TiledLogo}
        alt=""
      /> */}
    </div>
  );
};

export default Loading;
