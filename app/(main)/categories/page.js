import React from "react";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import SnapSection from "@/components/global/SnapSection";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import CategoryList from "@/components/CategoryList";
import { findAllRootCategories } from "@/lib/utils";
import StaggerAnimation from "@/components/animations/StaggerAnimation";

const AllCategories = () => {
  return (
    <>
      <SnapSection nextSectionTitle={"Footer"} className="pt-20">
        <div className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
          <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1}>
            <nav className="text-sm flex mb-7">
              {["Home", "Categories"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-blue-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="text-lg mx-2" /> : ""}
                </div>
              ))}
            </nav>
          </FadeInFromSides>
          <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.2} className="mb-6">
            <div className="font-bold capitalize text-3xl sm:text-4xl mb-6 [word-spacing:3px] leading-[3rem]">
              <h1>Categories</h1>
            </div>
          </FadeInFromSides>
          <section className="py-3 overflow-hidden max-w-[1328px]">
            <StaggerAnimation selector="nav" viewPortAmount={0.1} repeat={true} yOffset={20} duration={0.5} staggerChildren={0.2} delayChildren={0.4}>
              {findAllRootCategories().map((rootCat) => (
                <CategoryList rootCategory={rootCat} key={rootCat.id} />
              ))}
            </StaggerAnimation>
          </section>
        </div>
      </SnapSection>
    </>
  );
};

export default AllCategories;
