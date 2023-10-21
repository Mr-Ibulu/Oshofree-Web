"use client";

import React, { useEffect } from "react";
import { useAnimate, useInView } from "framer-motion";

const DropInFromZoom = ({ viewportAmount = 0.05, repeat = false, initialScale = 1.13, duration = 0.4, delay, className = "", children }) => {
  const [scope, animate] = useAnimate();
  const containerInView = useInView(scope, { amount: viewportAmount, once: !repeat });
  useEffect(() => {
    if (scope.current) {
      animate(scope.current, containerInView ? { scale: [initialScale, 1], opacity: [0, 1] } : { scale: [1], opacity: [0] }, {
        type: "spring",
        bounce: 0.3,
        duration: duration,
        delay: delay ?? Math.random() * (0.3 - 0.1) + 0.1,
      });
    }
  }, [containerInView]);

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
};

export default DropInFromZoom;
