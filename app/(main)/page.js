import { MdSearch } from "react-icons/md";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import SnapSection from "@/components/global/SnapSection";
import Link from "next/link";
import DealCard from "@/components/DealCard";
import CategoryCardCollection from "@/components/homePage/CategoryCardCollection";
import LocationPickerRadix from "@/components/ui/locationPickerRadix";
import VendorForm from "@/components/VendorForm";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import Float from "@/components/animations/Float";
import vendor from "@/public/images/vendor.webp";
import vendor2 from "@/public/images/vendor2.jpg";
import vendor3 from "@/public/images/vendor3.webp";
import appleStore from "@/public/images/apple-store-button.png";
import playStore from "@/public/images/google-play-button.png";
import ipad from "@/public/images/ipad-frame.png";
import iphone from "@/public/images/iphone-frame.png";
import AutoScrollShowcase from "@/components/AutoScrollShowcase";
import { findAllRootCategories } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <SnapSection nextSectionTitle={"Deals Of The Week"} className="pt-20">
        <div className="px-5 sm:px-6 pt-3 pb-1 lg:px-28 xl:px-32 2xl:px-0 max-w-[1328px] 3xl:max-w-screen-2xl mx-auto">
          <div className="text-center my-3 sm:my-8">
            <p className="text-xl sm:text-2xl [word-spacing:3px]">So You Love Discounts</p>
            <p className="text-3xl sm:text-4xl [word-spacing:3px] pt-2">We've Got You Covered</p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center py-8">
            <LocationPickerRadix location={"Port Harcourt"} className={"text-2xl sm:text-3xl px-3 font-extrabold py-1 focus:outline-none"} />
            <div className="w-full sm:w-[80%] xl:w-[70%] 2xl:w-[60%] border-2 border-gray-300 h-12 font-medium rounded-full flex items-center gap-2 px-4">
              <MdSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search Oshofree"
                className="appearance-none focus:ring-0 focus:border-none focus:outline-none flex-grow bg-transparent"
              />
            </div>
          </div>
          <div className="max-w-screen-xl 3xl:max-w-[1400px] mx-auto">
            <div className="pt-8">
              <div className="text-xl xl:text-2xl font-extrabold mb-3 px-2">Featured</div>
              <div className="text-sm px-2">Sponsored</div>
              <AutoScrollShowcase className="flex gap-5 overflow-x-scroll overflow-y-hidden px-2 pt-3 pb-5 scrollbar-none">
                {dealOfTheDay
                  .map((item) => (
                    <Link href={`/deals/${item.id}`} key={item.id}>
                      <DealCard
                        image={item.image}
                        isNew={item.isNew}
                        rating={item.rating}
                        description={item.description}
                        prevPrice={item.prevPrice}
                        newPrice={item.newPrice}
                        className="w-72"
                      />
                    </Link>
                  ))
                  .slice(0, 6)}
              </AutoScrollShowcase>
            </div>
            <div className="pt-8">
              <div className="text-xl xl:text-2xl font-extrabold mb-3 px-2">Only For Today </div>
              <div className="text-sm px-2"></div>
              <AutoScrollShowcase scroll={false} className="flex gap-5 overflow-x-scroll overflow-y-hidden px-2 pt-3 pb-5 scrollbar-none">
                {dealOfTheDay
                  .map((item) => (
                    <Link href={`/deals/${item.id}`} key={item.id}>
                      <DealCard
                        image={item.image}
                        isNew={item.isNew}
                        rating={item.rating}
                        description={item.description}
                        prevPrice={item.prevPrice}
                        newPrice={item.newPrice}
                        className="w-72"
                      />
                    </Link>
                  ))
                  .slice(0, 6)}
              </AutoScrollShowcase>
            </div>
          </div>
        </div>
      </SnapSection>
      <SnapSection nextSectionTitle={"Our Categories"} className="pt-20">
        <div className="mt-6 mb-4 text-center capitalize">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Deals of the week</h1>
          <div className="mt-2 font-semibold relative flex justify-center">
            <LocationPickerRadix
              location={"Port Harcourt"}
              className={"text-sm px-3 font-medium py-1 rounded-md focus:outline-none bg-red-500 active:bg-red-400 text-white"}
            />
          </div>
        </div>
        <section className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-9">
            {dealOfTheDay
              .map((item) => (
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
              ))
              .slice(0, 12)}
          </div>
          <Link href={"/"} className="block border-2 border-red-400 py-2 text-center sm:w-[50%] xl:w-[30%] mx-auto rounded-full font-bold mt-12">
            See More
          </Link>
        </section>
      </SnapSection>
      <SnapSection id="categories" nextSectionTitle={"Sell On Oshofree"} className="pt-20">
        <div className="mt-6 mb-11 text-center capitalize">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Deals Based On Category</h1>
        </div>
        <section className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
          {findAllRootCategories().map((rootCat) => (
            <CategoryCardCollection key={rootCat.id} rootCategory={rootCat} />
          ))}
        </section>
      </SnapSection>
      <SnapSection nextSectionTitle={"Download our app"} className="pt-20">
        <div className="flex flex-col xl:flex-row px-6 lg:px-36 xl:px-40  max-w-screen-2xl mx-auto">
          <div className="xl:basis-1/2 relative h-64 sm:h-80 lg:h-96 xl:h-auto overflow-hidden">
            <Float className="aspect-[4/3] w-[50%] md:w-[35%] lg:w-[45%] xl:w-[80%] absolute left-[10%] md:left-[20%] lg:left-[10%] xl:left-0 top-[8%] overflow-hidden rounded-lg">
              <ImageWithPlaceholder
                src={vendor3}
                alt={"vendor"}
                fill={true}
                sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                priority={true}
                className={"object-cover"}
              />
            </Float>
            <Float
              delay={2}
              className="aspect-[4/3] w-[40%] md:w-[28%] lg:w-[35%] xl:w-[60%] absolute right-[10%] md:right-[23%] lg:right-[20%] xl:right-[5%] top-[30%] xl:top-[40%] overflow-hidden rounded-lg"
            >
              <ImageWithPlaceholder
                src={vendor}
                alt={"vendor"}
                fill={true}
                sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                priority={true}
                className={"object-cover"}
              />
            </Float>
            <Float
              delay={4}
              className="aspect-[4/3] w-[30%] md:w-[20%] lg:w-[25%] xl:w-[45%] absolute top-[50%] md:top-[58%] xl:top-[45%] left-[25%] md:left-[33%] lg:left-[25%] xl:left-[10%] overflow-hidden rounded-lg"
            >
              <ImageWithPlaceholder
                src={vendor2}
                alt={"vendor"}
                fill={true}
                sizes={"(max-width: 768px) 30vw, (max-width: 1200px) 70vw, 100vw"}
                priority={true}
                className={"object-cover"}
              />
            </Float>
          </div>
          <div className="sm:mt-6 mb-10 xl:basis-1/2">
            <FadeInFromSides yOffset={100} delay={0.1}>
              <h1 className="text-2xl sm:text-4xl font-extrabold [word-spacing:5px] mb-6 text-center">Sell a Product or Service on Oshofree</h1>
            </FadeInFromSides>
            <FadeInFromSides yOffset={100} delay={0.3}>
              <div className="mb-6  sm:w-[70%] xl:w-auto mx-auto">
                <p className="[word-spacing:3px] text-sm sm:text-base">
                  Reach New Customers. Showcase Your Deals on Products and Services. Build Loyalty. Get Started Today!
                </p>
              </div>
            </FadeInFromSides>
            <FadeInFromSides yOffset={100} delay={0.4} viewportAmount={0.1}>
              <VendorForm showMoreInfoButton={true} />
            </FadeInFromSides>
          </div>
        </div>
      </SnapSection>
      <SnapSection nextSectionTitle={"Footer"} className="pt-20">
        <div className="flex flex-col lg:flex-row px-6 lg:px-28 xl:px-40 max-w-screen-2xl mx-auto h-[90%]">
          <div className="basis-1/2 relative overflow-hidden">
            <div className=" aspect-[1.38/1] w-[80%] absolute left-[10%] top-1/2 -translate-y-1/2">
              <Float className="h-full w-full relative">
                <div className="absolute overflow-hidden bg-red-500 aspect-[1.43/1] w-[94%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
                <ImageWithPlaceholder src={ipad} alt={"tablet"} fill={true} sizes={"(max-width: 768px) 50vw, 100vw"} priority={true} />
              </Float>
            </div>
            <div className=" aspect-[1/2] w-[25%] absolute left-[70%] top-1/2 -translate-y-[40%]">
              <Float className="h-full w-full relative" delay={2.3}>
                <div className="absolute overflow-hidden bg-emerald-500 aspect-[1/2.17] w-[89%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
                <ImageWithPlaceholder src={iphone} alt={"tablet"} fill={true} sizes={"(max-width: 768px) 50vw, 100vw"} priority={true} />
              </Float>
            </div>
          </div>
          <div className="my-auto lg:basis-1/2 flex flex-col justify-center">
            <FadeInFromSides yOffset={100} delay={0.1}>
              <h1 className="text-2xl sm:text-4xl font-extrabold [word-spacing:5px] mb-6 text-center">Experience The Convenience Of Our App</h1>
            </FadeInFromSides>
            <FadeInFromSides yOffset={100} delay={0.3} className="mb-6 sm:w-[90%] mx-auto">
              <p className="[word-spacing:3px] text-sm sm:text-base">
                Get instant access to our services and stay connected on thee go. Unlock a world of possibilities at your fingertips.
              </p>
            </FadeInFromSides>
            <FadeInFromSides yOffset={100} delay={0.4} className="flex gap-8 pt-6 px-3 items-center justify-center">
              <Link href={"/"} className="relative">
                <ImageWithPlaceholder src={appleStore} alt={"apple-store-button"} className="w-52" />
              </Link>
              <Link href={"/"} className="relative">
                <ImageWithPlaceholder src={playStore} alt={"play-store-button"} className="w-52" />
              </Link>
            </FadeInFromSides>
          </div>
        </div>
      </SnapSection>
    </>
  );
}
