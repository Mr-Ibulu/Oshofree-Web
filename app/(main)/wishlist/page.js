import React from "react";
import SearchbarHeader from "@/components/ui/searchbarHeader";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import DealCard from "@/components/DealCard";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

const Wishlist = () => {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-[1328px] px-6 py-3 lg:px-8 xl:px-32 2xl:px-14">
          <SearchbarHeader />
          <StaggerContainer
            selector=".stagger"
            viewportAmount={0.1}
            repeat={true}
            yOffset={20}
            duration={0.5}
            staggerChildren={0.12}
            delayChildren={0}
          >
            <nav className="stagger mb-7 flex text-sm">
              {["Home", "Cart"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-blue-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="mx-2 text-lg" /> : ""}
                </div>
              ))}
            </nav>
            <h1 className="stagger mb-6 text-2xl font-bold capitalize leading-[3rem] [word-spacing:3px] sm:text-4xl">Your Saved Items</h1>
          </StaggerContainer>
          <section className="mx-auto mb-20 max-w-[1328px] overflow-hidden px-6 py-3">
            <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {dealOfTheDay
                .map((item) => (
                  <div key={item.id}>
                    <Link href={`/deals/${item.id}`}>
                      <DealCard
                        image={item.image}
                        isNew={item.isNew}
                        rating={item.rating}
                        description={item.description}
                        prevPrice={item.prevPrice}
                        newPrice={item.newPrice}
                      />
                    </Link>
                    <div className="mt-4 flex items-center justify-center gap-9">
                      <button className="rounded-md bg-sky-700 px-2 py-1 text-sm font-medium text-white transition-transform duration-100 ease-in-out hover:scale-110 xl:text-xs">
                        Add to Cart
                      </button>
                      <button className="rounded-md border border-red-500 px-2 py-1 text-sm font-medium transition-transform duration-100 ease-in-out hover:scale-110 hover:bg-red-500 hover:text-white xl:text-xs">
                        Remove
                      </button>
                    </div>
                  </div>
                ))
                .slice(0, 5)}
            </div>
          </section>
        </div>
      </Section>
    </>
  );
};

export default Wishlist;
