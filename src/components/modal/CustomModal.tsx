"use client";
import React, { FC, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";

interface TProps {
  isOpen: boolean;
  toggel: () => void;
  children: ReactNode;
}

const CustomModal: FC<TProps> = ({ isOpen, toggel, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  if (isOpen) {
    return (
      <div className="modal-container fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-xs z-[999999]">
        <motion.div
          className="modal w-[400px] max-sm:w-[90%] p-3 rounded-2xl bg-white relative"
          initial={{ opacity: 0, top: -50 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="modal-header w-full flex justify-start items-center">
            <span
              className="text-white bg-black py-0.5 px-2 rounded-full cursor-pointer"
              onClick={() => toggel()}
            >
              X
            </span>
          </div>
          <div className="modal-body w-full">{children}</div>
        </motion.div>
      </div>
    );
  } else {
    <></>;
  }
};

export default CustomModal;
