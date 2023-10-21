"use client";

import React, { useEffect } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";

const StaggerContainer = ({
  selector = "div",
  viewportAmount = 0.2,
  repeat = false,
  xOffset = 0,
  yOffset = 0,
  duration = 1,
  staggerChildren = 0.05,
  delayChildren = 0.07,
  dependencies = [],
  className = "",
  children,
}) => {
  const [scope, animate] = useAnimate();
  const containerInView = useInView(scope, { amount: viewportAmount, once: !repeat });
  useEffect(() => {
    if (scope.current) {
      animate(selector, containerInView ? { x: [xOffset, 0], y: [yOffset, 0], opacity: [0, 1] } : { x: [xOffset], y: [yOffset], opacity: [0] }, {
        type: "spring",
        bounce: 0.4,
        duration: duration,
        delay: stagger(staggerChildren, { startDelay: delayChildren }),
      });
    }
  }, [...dependencies, containerInView]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
};

export default StaggerContainer;
