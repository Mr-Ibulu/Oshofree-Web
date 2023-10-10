import React from "react";
import Link from "next/link";
import { findRootParent, findSiblingCategories, findSubCategories } from "@/lib/utils";
import StaggerContainer from "../animations/StaggerContainer";

const HorizontalCategoryList = ({ category }) => {
  const subCategories = findSubCategories(category);
  return subCategories.length > 0 ? (
    <StaggerContainer
      viewportAmount={0.8}
      repeat={true}
      xOffset={20}
      duration={0.3}
      staggerChildren={0.08}
      delayChildren={0.3}
      className={"flex xl:hidden gap-2 items-center w-full overflow-x-scroll scrollbar-none"}
    >
      {subCategories.map((cat) => (
        <div key={cat.title} className="inline-block border px-2 py-1 text-sm rounded min-w-fit my-3">
          <Link href={`/${findRootParent(cat).slug}/${cat.slug}`}>{cat.title}</Link>
        </div>
      ))}
    </StaggerContainer>
  ) : (
    <StaggerContainer
      viewportAmount={0.8}
      repeat={true}
      xOffset={20}
      duration={0.8}
      staggerChildren={0.08}
      delayChildren={0.3}
      className={"flex xl:hidden gap-2 items-center w-full overflow-x-scroll scrollbar-none"}
    >
      {findSiblingCategories(category).map((cat) => (
        <div
          className={`inline-block border px-2 py-1 text-sm rounded min-w-fit my-3 ${
            cat.slug === category.slug ? "border-sky-300 border-2 font-semibold" : ""
          }`}
          key={cat.title}
        >
          <Link href={`/${findRootParent(cat).slug}/${cat.slug}`}>{cat.title}</Link>
        </div>
      ))}
    </StaggerContainer>
  );
};

export default HorizontalCategoryList;
