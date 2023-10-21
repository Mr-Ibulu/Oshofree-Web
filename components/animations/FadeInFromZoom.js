"use client";
import React from "react";
import { motion } from "framer-motion";

const FadeInFromZoom = ({ children, viewportAmount = 0.1, repeat = false, initialScale = 1.13, duration = 0.2, delay, className = "" }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: viewportAmount, once: !repeat }}
      variants={{
        offscreen: { scale: initialScale, opacity: 0 },
        onscreen: {
          scale: 1,
          opacity: 1,
          transition: { type: "spring", bounce: 0.3, duration: duration, delay: delay ?? Math.random() * (0.3 - 0.1) + 0.1 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromZoom;
