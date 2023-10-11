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
      className={"flex w-full items-center gap-2 overflow-x-scroll scrollbar-none xl:hidden"}
    >
      {subCategories.map((cat) => (
        <div key={cat.title} className="my-3 inline-block min-w-fit rounded border px-2 py-1 text-sm">
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
      className={"flex w-full items-center gap-2 overflow-x-scroll scrollbar-none xl:hidden"}
    >
      {findSiblingCategories(category).map((cat) => (
        <div
          className={`my-3 inline-block min-w-fit rounded border px-2 py-1 text-sm ${
            cat.slug === category.slug ? "border-2 border-sky-300 font-semibold" : ""
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
