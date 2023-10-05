import React from "react";
import CategoryPageTemplate from "@/components/categoryPage/CategoryPageTemplate";
import { categories } from "@/data/categories";
import { dealOfTheDay } from "@/data/dealOfTheDay";

const Local = ({ params }) => {
  const mainCategory = categories.find((cat) => cat.slug === "local");
  return (
    <>
      <CategoryPageTemplate category={mainCategory} results={dealOfTheDay} />
    </>
  );
};

export default Local;
