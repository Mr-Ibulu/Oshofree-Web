import React from "react";
import Link from "next/link";
import SnapSection from "@/components/global/SnapSection";
import SearchbarHeader from "@/components/ui/searchbarHeader";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import { MdOutlineChevronRight } from "react-icons/md";
import FilterCard from "@/components/categoryPage/FilterLeftCard";
import TitleHead from "@/components/categoryPage/TitleHead";
import HorizontalCategoryList from "./HorizontalCategoryList";
import DealCard from "@/components/DealCard";

const CategoryPageTemplate = ({ category, results }) => {
  return (
    <SnapSection nextSectionTitle={"Footer"} className="pt-20">
      <div className="px-6 pt-3 pb-1 lg:px-28 xl:px-32 2xl:px-0 max-w-screen-xl 3xl:max-w-[1400px] mx-auto">
        <SearchbarHeader />
        <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1}>
          <nav className="text-xs sm:text-sm flex mb-3 sm:mb-7 overflow-x-scroll scrollbar-none">
            {["Home", "Local", "?????"].map((breadcrumb, index, arr) => (
              <div className="inline-flex items-center text-sky-900 min-w-fit" key={index}>
                <Link href={""} className="hover:underline">
                  {breadcrumb}
                </Link>
                {index !== arr.length - 1 ? <MdOutlineChevronRight className="text-lg mx-0 sm:mx-2" /> : ""}
              </div>
            ))}
          </nav>
        </FadeInFromSides>
        <div>
          <TitleHead category={category} />
          <HorizontalCategoryList category={category} />
          <div className="flex gap-5">
            <FadeInFromSides duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.3} className="basis-[20%] hidden xl:block">
              <FilterCard category={category} />
            </FadeInFromSides>
            <div className="xl:basis-[80%] grid sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-9 mt-5">
              {results.map((item) => (
                <Link href={`/deals/${item.id}`} key={item.id}>
                  <DealCard
                    image={item.image}
                    isNew={item.isNew}
                    rating={item.rating}
                    description={item.description}
                    prevPrice={item.prevPrice}
                    newPrice={item.newPrice}
                  />
                </Link>
              ))}
              {results.map((item) => (
                <Link href={`/deals/${item.id}`} key={item.id}>
                  <DealCard
                    image={item.image}
                    isNew={item.isNew}
                    rating={item.rating}
                    description={item.description}
                    prevPrice={item.prevPrice}
                    newPrice={item.newPrice}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SnapSection>
  );
};

export default CategoryPageTemplate;
