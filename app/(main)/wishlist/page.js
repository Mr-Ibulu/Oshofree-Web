import React from "react";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import SnapSection from "@/components/global/SnapSection";
import SearchbarHeader from "@/components/ui/searchbarHeader";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";
import DealCard from "@/components/DealCard";
import { dealOfTheDay } from "@/data/dealOfTheDay";

const Wishlist = () => {
  return (
    <>
      <SnapSection nextSectionTitle={"Footer"} className="pt-20">
        <div className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
          <SearchbarHeader />
          <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1}>
            <nav className="text-sm flex mb-7">
              {["Home", "Cart"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-blue-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="text-lg mx-2" /> : ""}
                </div>
              ))}
            </nav>
          </FadeInFromSides>
          <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.2} className="mb-6">
            <div className="font-bold capitalize text-2xl sm:text-4xl mb-6 [word-spacing:3px] leading-[3rem]">
              <h1>Your Saved Items</h1>
            </div>
          </FadeInFromSides>
          <section className="px-6 py-3 overflow-hidden max-w-[1328px] mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-9">
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
                    <div className="flex items-center gap-9 mt-4 justify-center">
                      <button className="bg-sky-700 px-2 py-1 text-white rounded-md text-sm xl:text-xs font-medium hover:scale-110 transition-transform duration-100 ease-in-out">
                        Add to Cart
                      </button>
                      <button className="border border-red-500 hover:bg-red-500 hover:text-white px-2 py-1 rounded-md text-sm xl:text-xs font-medium hover:scale-110 transition-transform duration-100 ease-in-out">
                        Remove
                      </button>
                    </div>
                  </div>
                ))
                .slice(0, 5)}
            </div>
          </section>
        </div>
      </SnapSection>
    </>
  );
};

export default Wishlist;
