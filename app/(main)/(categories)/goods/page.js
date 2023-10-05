import React from "react";
import CategoryPageTemplate from "@/components/categoryPage/CategoryPageTemplate";
import { categories } from "@/data/categories";
import { dealOfTheDay } from "@/data/dealOfTheDay";

const Goods = ({ params }) => {
  const mainCategory = categories.find((cat) => cat.slug === "goods");
  return (
    <>
      <CategoryPageTemplate category={mainCategory} results={dealOfTheDay} />
    </>
  );
};

export default Goods;
