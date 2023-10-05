import React from "react";
import CategoryPageTemplate from "@/components/categoryPage/CategoryPageTemplate";
import { categories } from "@/data/categories";
import { dealOfTheDay } from "@/data/dealOfTheDay";

const TravelAndHotels = ({ params }) => {
  const mainCategory = categories.find((cat) => cat.slug === "travel-and-hotels");
  return (
    <>
      <CategoryPageTemplate category={mainCategory} results={dealOfTheDay} />
    </>
  );
};

export default TravelAndHotels;
