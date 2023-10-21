"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import bgImage from "@/public/images/pageImage21.png";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

const SnapView = ({ children }) => {
  const pathname = usePathname();
  // const searchParams = useSearchParams();
  const [windowHeight, setWindowHeight] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [orientation, setOrientation] = useState("");
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ container: container });

  const springVal = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 30,
    restDelta: 0.001,
  });

  const useParallax = (value, distance) => {
    return useTransform(value, [0, 1], [distance, -600]);
  };

  const y = useParallax(springVal, 0);

  useEffect(() => {
    container.current.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    setWindowHeight(window.innerHeight + 1);
    setWindowWidth(window.innerWidth);
    const handleResize = () => {
      const newScreenHeight = window.innerHeight + 1;
      if (newScreenHeight === windowHeight) {
        return;
      }
      setWindowHeight(window.innerHeight + 1);
    };

    const handleOrientationChange = (event) => {
      const { matches, media } = event;
      if (matches) {
        setOrientation(media);
      }
    };

    const mediaQueryPortrait = window.matchMedia("(orientation: portrait)");
    const mediaQueryLandscape = window.matchMedia("(orientation: landscape)");

    if (mediaQueryPortrait.matches) {
      setOrientation("portrait");
    } else if (mediaQueryLandscape.matches) {
      setOrientation("landscape");
    }

    mediaQueryPortrait.addEventListener("change", handleOrientationChange);
    mediaQueryLandscape.addEventListener("change", handleOrientationChange);
    window.addEventListener("resize", handleResize);
    return () => {
      mediaQueryPortrait.removeEventListener("change", handleOrientationChange);
      mediaQueryLandscape.removeEventListener("change", handleOrientationChange);
      window.removeEventListener("resize", handleResize);
    };
  }, [windowHeight, orientation]);

  const allowFullScreenMode = orientation === "portrait" || (orientation === "landscape" && windowHeight >= 600);

  return (
    <main
      ref={container}
      className={`${allowFullScreenMode ? "snap-y snap-mandatory overflow-x-hidden" : ""} relative text-gray-800 scrollbar-none`}
      style={{ height: allowFullScreenMode ? windowHeight : "fit-content" }}
    >
      {children}
    </main>
  );
};

export default SnapView;
