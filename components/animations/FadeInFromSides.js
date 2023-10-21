"use client";

import React from "react";
import { motion } from "framer-motion";

const FadeInFromSides = ({
  children,
  animateSelf = true,
  viewportAmount = 0.2,
  reapeat = false,
  xOffset = 0,
  yOffset = 0,
  duration = 1,
  delay,
  className = "",
}) => {
  return (
    <motion.div
      {...(animateSelf && { initial: "offscreen", whileInView: "onscreen", viewport: { amount: viewportAmount, once: !reapeat } })}
      variants={{
        offscreen: { x: xOffset, y: yOffset, opacity: 0 },
        onscreen: { x: 0, y: 0, opacity: 1, transition: { type: "spring", bounce: 0.4, duration: duration, ...(delay && { delay: delay }) } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInFromSides;
