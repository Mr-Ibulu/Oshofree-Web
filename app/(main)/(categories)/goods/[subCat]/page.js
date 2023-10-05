import React from "react";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import { categories } from "@/data/categories";
import CategoryPageTemplate from "@/components/categoryPage/CategoryPageTemplate";
import { findAllDescendantCategory } from "@/lib/utils";

export function generateStaticParams() {
  const subCategories = findAllDescendantCategory(categories.find((cat) => cat.slug === "goods"));
  return subCategories.map((subcategory) => ({ subCat: subcategory.slug }));
}

const Subcategory = ({ params }) => {
  const category = categories.find((cat) => cat.slug === params.subCat);
  return (
    <>
      <CategoryPageTemplate category={category} results={dealOfTheDay} />
    </>
  );
};

export default Subcategory;
