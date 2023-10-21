"use client";

import React from "react";
import { motion } from "framer-motion";

const GrowIntoView = ({ children, viewportAmount = 0.2, reapeat = false, initialScale = 0.2, duration = 1, delay = 0.1, className = "" }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: viewportAmount, once: !reapeat }}
      variants={{
        offscreen: { scale: initialScale, opacity: 0 },
        onscreen: { scale: 1, opacity: 1, transition: { type: "spring", bounce: 0.3, duration: duration, delay: delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default GrowIntoView;
