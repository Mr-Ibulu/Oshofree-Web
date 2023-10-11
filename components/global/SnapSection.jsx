import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const SnapSection = ({ id, nextSectionTitle, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`${className} relative h-full w-screen snap-center snap-always overflow-y-auto scroll-smooth scrollbar-track-red-200 scrollbar-thumb-red-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full xl:scrollbar-thin`}
    >
      {children}
      {nextSectionTitle && (
        <div className="mt-5 flex animate-bounce flex-col items-center xl:mt-10">
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
