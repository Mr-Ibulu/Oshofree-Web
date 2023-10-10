"use client";

import React, { useEffect, useRef } from "react";
import { MdNavigateBefore, MdNavigateNext, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const AutoScrollShowcase = ({ scroll = true, horizontal = true, className, children }) => {
  const container = useRef(null);
  const width = useRef(0);
  const height = useRef(0);
  const offsetWidth = useRef(0);
  const offsetHeight = useRef(0);
  const scrollLeftMax = useRef(0);
  const scrollTopMax = useRef(0);
  const reverseDirection = useRef(true);
  const touchDetected = useRef(false);
  const skipthroughBtnPressed = useRef(false);

  const setUpInitials = () => {
    if (container.current) {
      width.current = container.current.scrollWidth;
      height.current = container.current.scrollHeight;
      offsetWidth.current = container.current.offsetWidth;
      offsetHeight.current = container.current.offsetHeight;
      scrollLeftMax.current = width.current - offsetWidth.current;
      scrollTopMax.current = height.current - offsetHeight.current;
    }
  };

  useEffect(() => {
    let autoscroll;
    if (scroll) {
      autoscroll = setTimeout(function tick() {
        setUpInitials();
        if (container.current) {
          if (!touchDetected.current && !skipthroughBtnPressed.current) {
            if (horizontal && scrollLeftMax.current > 0) {
              if (!reverseDirection.current) {
                container.current.scrollLeft += 1;
                if (Math.round((container.current.scrollLeft * 100) / scrollLeftMax.current) == 100) {
                  setTimeout(() => (reverseDirection.current = true), 1000);
                }
              }
              if (reverseDirection.current) {
                container.current.scrollLeft -= 1;
                if (Math.round((container.current.scrollLeft * 100) / scrollLeftMax.current) == 0) {
                  setTimeout(() => (reverseDirection.current = false), 1000);
                }
              }
            }
            if (!horizontal && scrollTopMax.current > 0) {
              if (!reverseDirection.current) {
                container.current.scrollTop += 1;
                if (Math.round((container.current.scrollTop * 100) / scrollTopMax.current) == 100) {
                  setTimeout(() => (reverseDirection.current = true), 1000);
                }
              }
              if (reverseDirection.current) {
                container.current.scrollTop -= 1;
                if (Math.round((container.current.scrollTop * 100) / scrollTopMax.current) == 0) {
                  setTimeout(() => (reverseDirection.current = false), 1000);
                }
              }
            }
          }
          autoscroll = setTimeout(tick, 30);
        }
      });
    }
    return () => clearTimeout(autoscroll);
  }, []);

  const endTouchTimout = useRef();

  useEffect(() => {
    const registerTouchStart = () => {
      touchDetected.current = true;
    };
    const registerTouchEnd = () => {
      clearTimeout(endTouchTimout.current);
      endTouchTimout.current = setTimeout(() => (touchDetected.current = false), 2000);
    };

    container.current.addEventListener("touchstart", registerTouchStart, { passive: true });
    container.current.addEventListener("touchend", registerTouchEnd, { passive: true });

    return () => {
      if (container.current) {
        clearTimeout(endTouchTimout.current);
        container.current.removeEventListener("touchstart", registerTouchStart);
        container.current.removeEventListener("touchend", registerTouchEnd);
      }
    };
  }, []);

  const skipBackward = () => {
    skipthroughBtnPressed.current = true;
    reverseDirection.current = true;
    if (scroll) {
      container.current.classList.add("scroll-smooth");
    }
    if (horizontal) {
      container.current.scrollLeft -= 600;
      if (scroll) {
        container.current.classList.remove("scroll-smooth");
      }
      return;
    }
    container.current.scrollTop -= 200;
    if (scroll) {
      container.current.classList.remove("scroll-smooth");
    }
  };

  const skipFoward = () => {
    skipthroughBtnPressed.current = true;
    reverseDirection.current = false;
    if (scroll) {
      container.current.classList.add("scroll-smooth");
    }
    if (horizontal) {
      container.current.scrollLeft += 600;
      if (scroll) {
        container.current.classList.remove("scroll-smooth");
      }
      return;
    }
    container.current.scrollTop += 200;
    if (scroll) {
      container.current.classList.remove("scroll-smooth");
    }
  };

  const skipButtonReleased = () => {
    skipthroughBtnPressed.current = false;
  };

  return (
    <>
      <div className={`relative ${horizontal ? "flex" : ""} ${!horizontal ? "hidden sm:flex flex-col justify-center gap-4" : ""}`}>
        {!horizontal && (
          <div className="flex justify-center">
            <button
              onPointerDown={() => {
                skipBackward();
              }}
              onMouseUp={() => skipButtonReleased()}
              className="rounded-full focus:outline-none shadow active:shadow-sm hover:scale-125 transition-transform duration-200 ease-in-out active:scale-95"
            >
              <MdKeyboardArrowUp className="text-4xl text-red-500" />
            </button>
          </div>
        )}
        <div ref={container} className={`${className} ${!scroll ? "scroll-smooth" : ""}`}>
          {children}
        </div>
        {!horizontal && (
          <div className="flex justify-center">
            <button
              onPointerDown={() => {
                skipFoward();
              }}
              onMouseUp={() => skipButtonReleased()}
              className="rounded-full focus:outline-none shadow active:shadow-sm hover:scale-125 transition-transform duration-200 ease-in-out active:scale-95"
            >
              <MdKeyboardArrowDown className="text-4xl text-red-500" />
            </button>
          </div>
        )}
      </div>
      {horizontal ? (
        <div className="hidden xl:flex justify-center gap-7">
          <button
            className="rounded-full focus:outline-none shadow active:shadow-sm hover:scale-125 transition-transform duration-200 ease-in-out active:scale-95"
            onPointerDown={() => {
              skipBackward();
            }}
            onMouseUp={() => skipButtonReleased()}
          >
            <MdNavigateBefore className="text-4xl text-red-500" />
          </button>
          <button
            className="rounded-full focus:outline-none shadow active:shadow-sm hover:scale-125 transition-transform duration-200 ease-in-out active:scale-95"
            onPointerDown={() => {
              skipFoward();
            }}
            onMouseUp={() => skipButtonReleased()}
          >
            <MdNavigateNext className="text-4xl text-red-500" />
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AutoScrollShowcase;
