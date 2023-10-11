"use client";

import React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

const SortToggleGroup = () => {
  const toggleGroupItemCLasses =
    "bg-white border-y-[1px] first:border-l-[1px] last:border-r-[1px] text-xs xl:text-sm font-medium first:rounded-l-lg last:rounded-r-lg focus:z-10 focus:shadow focus:border-x-[1px] focus:outline-none p-2 data-[state=on]:text-sky-800 data-[state=on]:bg-sky-100";
  return (
    <>
      <div className="text-xs font-medium xl:text-sm">Sort By:</div>
      <ToggleGroup.Root type="single" defaultValue="relevance" aria-label="Sort by">
        <ToggleGroup.Item value="relevance" className={toggleGroupItemCLasses} aria-label="Sort by Relevance">
          Relevance
        </ToggleGroup.Item>
        <ToggleGroup.Item value="price-H-L" className={toggleGroupItemCLasses} aria-label="Sort by Price: Low to High">
          Price: Low to High
        </ToggleGroup.Item>
        <ToggleGroup.Item value="price-L-H" className={toggleGroupItemCLasses} aria-label="Sort by Price: High to Low">
          Price: High to Low
        </ToggleGroup.Item>
        <ToggleGroup.Item value="distance" className={toggleGroupItemCLasses} aria-label="Sort by Distance">
          Distance
        </ToggleGroup.Item>
        <ToggleGroup.Item value="rating" className={toggleGroupItemCLasses} aria-label="Sort by Rating">
          Rating
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </>
  );
};

export default SortToggleGroup;
