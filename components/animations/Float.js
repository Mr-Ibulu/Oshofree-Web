"use client";
import React from "react";
import { motion } from "framer-motion";

const Float = ({ children, className = "", delay = 1 }) => {
  return (
    <motion.div animate={{ y: [0, 30, 0] }} transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, delay: delay }} className={className}>
      {children}
    </motion.div>
  );
};

export default Float;
