import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SnapSection = ({ id, nextSectionTitle, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`${className} relative scroll-smooth h-full overflow-y-auto snap-always snap-center w-screen xl:scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full`}
    >
      {children}
      {nextSectionTitle && (
        <div className="mt-5 xl:mt-10 flex flex-col items-center animate-bounce">
          <span className="text-sm font-medium capitalize">{nextSectionTitle}</span>
          <div className="text-2xl text-red-500">
            <AiFillCaretDown />
          </div>
        </div>
      )}
    </section>
  );
};

export default SnapSection;
