import React from "react";

const Section = ({ className = "", children }) => {
  return <section className={`${className} pt-20`}>{children}</section>;
};

export default Section;
