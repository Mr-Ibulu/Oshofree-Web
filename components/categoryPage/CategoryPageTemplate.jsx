import React from "react";
import Link from "next/link";
import SearchbarHeader from "@/components/ui/searchbarHeader";
import { MdOutlineChevronRight } from "react-icons/md";
import FilterCard from "@/components/categoryPage/FilterLeftCard";
import TitleHead from "@/components/categoryPage/TitleHead";
import HorizontalCategoryList from "./HorizontalCategoryList";
import DealCard from "@/components/DealCard";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "../global/Section";

const CategoryPageTemplate = ({ category, results }) => {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-screen-xl px-6 pb-1 pt-3 lg:px-8 xl:px-32 2xl:px-0 3xl:max-w-[1400px]">
          <SearchbarHeader />
          <StaggerContainer selector=".stagger" viewportAmount={0} repeat={true} yOffset={20} duration={1} staggerChildren={0.20} delayChildren={0}>
            <nav className="stagger mb-3 flex overflow-x-scroll text-xs scrollbar-none sm:mb-7 sm:text-sm">
              {["Home", "Local", "?????"].map((breadcrumb, index, arr) => (
                <div className="inline-flex min-w-fit items-center text-sky-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="mx-0 text-lg sm:mx-2" /> : ""}
                </div>
              ))}
            </nav>
            <TitleHead category={category} />
            <HorizontalCategoryList category={category} />
            <div className="mb-20 flex gap-5">
              <div className="stagger hidden basis-[20%] xl:block">
                <FilterCard category={category} />
              </div>
              <div className="mt-5 grid gap-x-6 gap-y-9 sm:grid-cols-2 md:grid-cols-3 xl:basis-[80%]">
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
      </Section>
    </>
  );
};

export default CategoryPageTemplate;
