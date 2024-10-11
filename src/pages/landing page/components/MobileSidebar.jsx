import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavOverlay from "./NavOverlay";

const MobileSidebar = ({ onCloseNav, children, navRef, isOpen }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return createPortal(
    <div className="absolute block border xl:hidden " ref={navRef}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
        className="fixed right-0 top-0 bg-[white] w-[300px] h-screen z-50"
      >
        <div className="relative flex flex-col w-full h-full gap-6 px-6 py-12 border-[#EBEBEB] border-l">
          <XMarkIcon
            className="absolute w-5 h-5 cursor-pointer top-8 right-6"
            onClick={onCloseNav}
            color="#1D319A"
          />
          <div className="flex flex-col h-full gap-4 mt-4">{children}</div>
        </div>
      </motion.div>
      <NavOverlay onCloseNav={onCloseNav} />
    </div>,
    document.body
  );
};

export default MobileSidebar;
