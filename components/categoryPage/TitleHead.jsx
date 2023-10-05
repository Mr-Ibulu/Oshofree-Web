import React from "react";
import FadeInFromSides from "../animations/FadeInFromSides";
import FilterBottomSheet from "./FilterBottomSheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdOutlineFilterAlt } from "react-icons/md";
import SortToggleGroup from "./SortToggleGroup";


const TitleHead = ({ category }) => {
  return (
    <FadeInFromSides
      reapeat={true}
      duration={0.7}
      yOffset={20}
      viewportAmount={0.1}
      delay={0.2}
      className="mb-3 xl:mb-6 px-1 flex flex-wrap items-center gap-y-1"
    >
      <h1 className="text-3xl font-extrabold [word-spacing:3px] truncate">
        {category?.title} <span className="hidden sm:inline">Deals Near Me</span>
      </h1>
      <div className="hidden ml-auto xl:flex items-center space-x-3">
        <SortToggleGroup/>
      </div>
      <div className="ml-auto xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="border min-w-fit inline-flex items-center gap-1 rounded-full px-2 py-1 focus:outline-none">
              <MdOutlineFilterAlt className="text-lg text-sky-700" />
              <span className="text-sm">Filter Result</span>
            </button>
          </SheetTrigger>
          <SheetContent side={"bottom"} className="w-[100%] h-[90%] rounded-t-2xl p-0">
            <FilterBottomSheet category={category} />
          </SheetContent>
        </Sheet>
      </div>
    </FadeInFromSides>
  );
};

export default TitleHead;
