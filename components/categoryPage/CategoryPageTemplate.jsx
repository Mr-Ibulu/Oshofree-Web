import React from "react";
import Link from "next/link";
import SnapSection from "@/components/global/SnapSection";
import SearchbarHeader from "@/components/ui/searchbarHeader";
import { MdOutlineChevronRight } from "react-icons/md";
import FilterCard from "@/components/categoryPage/FilterLeftCard";
import TitleHead from "@/components/categoryPage/TitleHead";
import HorizontalCategoryList from "./HorizontalCategoryList";
import DealCard from "@/components/DealCard";
import StaggerContainer from "@/components/animations/StaggerContainer";

const CategoryPageTemplate = ({ category, results }) => {
  return (
    <>
      <SnapSection nextSectionTitle={"Footer"} className="pt-20">
        <div className="px-6 pt-3 pb-1 lg:px-28 xl:px-32 2xl:px-0 max-w-screen-xl 3xl:max-w-[1400px] mx-auto">
          <SearchbarHeader />
          <StaggerContainer selector=".stagger" viewportAmount={0} repeat={true} yOffset={20} duration={0.5} staggerChildren={0.12} delayChildren={0}>
            <nav className="stagger text-xs sm:text-sm flex mb-3 sm:mb-7 overflow-x-scroll scrollbar-none">
              {["Home", "Local", "?????"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-sky-900 min-w-fit" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="text-lg mx-0 sm:mx-2" /> : ""}
                </div>
              ))}
            </nav>
            <TitleHead category={category} />
            <HorizontalCategoryList category={category} />
            <div className="flex gap-5">
              <div className="stagger basis-[20%] hidden xl:block">
                <FilterCard category={category} />
              </div>
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
          </StaggerContainer>
        </div>
      </SnapSection>
    </>
  );
};

export default CategoryPageTemplate;
