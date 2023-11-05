import React from "react";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import CategoryList from "@/components/CategoryList";
import { findAllRootCategories } from "@/lib/utils";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

const AllCategories = () => {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-[1328px] px-6 pb-20 lg:px-8 xl:px-32 2xl:px-14">
          <StaggerContainer
            selector=".stagger"
            viewportAmount={0.1}
            repeat={true}
            yOffset={20}
            duration={0.5}
            staggerChildren={0.12}
            delayChildren={0}
          >
            <nav className="stagger mb-7 flex text-sm">
              {["Home", "Categories"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-blue-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="mx-2 text-lg" /> : ""}
                </div>
              ))}
            </nav>
            <h1 className="stagger mb-6 text-3xl font-bold capitalize leading-[3rem] [word-spacing:3px] sm:text-4xl">Categories</h1>
          </StaggerContainer>
          <section className="max-w-[1328px] overflow-hidden py-3">
            <StaggerContainer selector="nav" viewportAmount={0.1} repeat={true} yOffset={20} duration={1.5} staggerChildren={0.15} delayChildren={0.15}>
              {findAllRootCategories().map((rootCat) => (
                <CategoryList rootCategory={rootCat} key={rootCat.id} />
              ))}
            </StaggerContainer>
          </section>
        </div>
      </Section>
    </>
  );
};

export default AllCategories;
