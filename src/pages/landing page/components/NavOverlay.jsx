import React from "react";
import { motion } from "framer-motion";

const NavOverlay = ({ onCloseNav }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="fixed z-40 w-screen h-screen transition duration-1000 bg-black top-[80px]"
      onClick={onCloseNav}
    ></motion.div>
  );
};

export default NavOverlay;
