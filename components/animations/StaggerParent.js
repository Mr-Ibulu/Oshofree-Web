"use client";

import React from "react";
import { motion } from "framer-motion";

const StaggerParent = ({ className, children, ...props }) => {
  return (
    <motion.div {...props} className={className}>
      {children}
    </motion.div>
  );
};

export default StaggerParent;
