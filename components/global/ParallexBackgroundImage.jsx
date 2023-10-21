"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import bgImage from "@/public/images/pageImage21.png";
import Image from "next/image";

const ParallexBackgroundImage = () => {
  const { scrollYProgress } = useScroll();

  const springVal = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001,
  });

  const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [distance, -600]);
  };

  const y = useParallax(springVal, 0);

  return (
    <motion.div style={{ y: y, height: "150vh" }} className=" fixed -z-50 w-full">
      <Image src={bgImage} alt="background" fill className="object-cover" priority={true} />
    </motion.div>
  );
};

export default ParallexBackgroundImage;
