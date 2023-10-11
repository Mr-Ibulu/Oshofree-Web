import React from "react";
import FilterBottomSheet from "./FilterBottomSheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdOutlineFilterAlt } from "react-icons/md";
import SortToggleGroup from "./SortToggleGroup";

const TitleHead = ({ category }) => {
  return (
    <div className="stagger mb-3 flex flex-wrap items-center gap-y-1 px-1 xl:mb-6">
      <h1 className="truncate text-3xl font-extrabold [word-spacing:3px]">
        {category?.title} <span className="hidden sm:inline">Deals Near Me</span>
      </h1>
      <div className="ml-auto hidden items-center space-x-3 xl:flex">
        <SortToggleGroup />
      </div>
      <div className="ml-auto xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="inline-flex min-w-fit items-center gap-1 rounded-full border px-2 py-1 focus:outline-none">
              <MdOutlineFilterAlt className="text-lg text-sky-700" />
              <span className="text-sm">Filter Result</span>
            </button>
          </SheetTrigger>
          <SheetContent side={"bottom"} className="h-[90%] w-[100%] rounded-t-2xl p-0">
            <FilterBottomSheet category={category} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default TitleHead;
