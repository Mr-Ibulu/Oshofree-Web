import { MdSearch } from "react-icons/md";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import Link from "next/link";
import DealCard from "@/components/DealCard";
import CategoryCardCollection from "@/components/homePage/CategoryCardCollection";
import LocationPickerRadix from "@/components/ui/locationPickerRadix";
import VendorForm from "@/components/VendorForm";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
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
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-[1328px] px-5 pt-3 sm:px-6 lg:px-8 xl:px-32 2xl:px-0 3xl:max-w-screen-2xl">
          <div className="my-3 text-center sm:my-8">
            <p className="text-xl [word-spacing:3px] sm:text-2xl">So You Love Discounts</p>
            <p className="pt-2 text-3xl [word-spacing:3px] sm:text-4xl">We&apos;ve Got You Covered</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <LocationPickerRadix location={"Port Harcourt"} className={"px-3 py-1 text-2xl font-extrabold focus:outline-none sm:text-3xl"} />
            <div className="flex h-12 w-full items-center gap-2 rounded-full border-2 border-gray-300 px-4 font-medium sm:w-[80%] xl:w-[70%] 2xl:w-[60%]">
              <MdSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search Oshofree"
                className="flex-grow appearance-none bg-transparent focus:border-none focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          <div className="mx-auto max-w-screen-xl 3xl:max-w-[1400px]">
            <div className="pt-8">
              <div className="mb-3 px-2 text-xl font-extrabold xl:text-2xl">Featured</div>
              <div className="px-2 text-sm">Sponsored</div>
              <AutoScrollShowcase className="flex gap-5 overflow-y-hidden overflow-x-scroll px-2 pb-5 pt-3 scrollbar-none">
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
              <div className="mb-3 px-2 text-xl font-extrabold xl:text-2xl">Only For Today </div>
              <div className="px-2 text-sm"></div>
              <AutoScrollShowcase scroll={false} className="flex gap-5 overflow-y-hidden overflow-x-scroll px-2 pb-5 pt-3 scrollbar-none">
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
      </Section>
      <Section>
        <div className="mb-4 text-center capitalize">
          <h1 className="text-2xl font-extrabold sm:text-3xl">Deals of the week</h1>
          <div className="relative mt-2 flex justify-center font-semibold">
            <LocationPickerRadix
              location={"Port Harcourt"}
              className={"rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white focus:outline-none active:bg-red-400"}
            />
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl px-6 py-3 lg:px-8 xl:px-32 2xl:px-0 3xl:max-w-[1400px]">
          <div className="grid gap-x-6 gap-y-9 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
          <Link href={"/"} className="mx-auto mt-12 block rounded-full border-2 border-red-400 py-2 text-center font-bold sm:w-[50%] xl:w-[30%]">
            See More
          </Link>
        </div>
      </Section>
      <Section>
        <div className="mb-11 text-center capitalize">
          <h1 className="text-2xl font-extrabold sm:text-3xl">Deals Based On Category</h1>
        </div>
        <section className="mx-auto max-w-screen-xl px-6 py-3 lg:px-8 xl:px-32 2xl:px-0 3xl:max-w-[1400px]">
          {findAllRootCategories().map((rootCat) => (
            <CategoryCardCollection key={rootCat.id} rootCategory={rootCat} />
          ))}
        </section>
      </Section>
      <Section>
        <div className="mx-auto flex max-w-screen-2xl flex-col px-6 lg:px-36 xl:flex-row xl:px-40">
          <div className="relative h-64 overflow-hidden sm:h-96 lg:h-[450px] xl:h-auto xl:basis-1/2">
            <Float className="absolute left-[10%] top-[8%] aspect-[4/3] w-[50%] overflow-hidden rounded-lg md:left-[20%] md:w-[35%] lg:left-[10%] lg:w-[45%] xl:left-0 xl:w-[80%]">
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
              className="absolute right-[10%] top-[30%] aspect-[4/3] w-[40%] overflow-hidden rounded-lg md:right-[23%] md:w-[28%] lg:right-[20%] lg:w-[35%] xl:right-[5%] xl:top-[40%] xl:w-[60%]"
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
              className="absolute left-[25%] top-[50%] aspect-[4/3] w-[30%] overflow-hidden rounded-lg md:left-[33%] md:top-[58%] md:w-[20%] lg:left-[25%] lg:w-[25%] xl:left-[10%] xl:top-[45%] xl:w-[45%]"
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
          <StaggerContainer
            selector=".stagger"
            viewportAmount={0.1}
            yOffset={100}
            duration={1.5}
            staggerChildren={0.15}
            delayChildren={0}
            className="xl:basis-1/2"
          >
            <h1 className="stagger mb-6 text-center text-2xl font-extrabold [word-spacing:5px] sm:text-4xl">Sell a Product or Service on Oshofree</h1>
            <div className="stagger mx-auto mb-6 sm:w-[70%] xl:w-auto">
              <p className="text-sm [word-spacing:3px] sm:text-base">
                Reach New Customers. Showcase Your Deals on Products and Services. Build Loyalty. Get Started Today!
              </p>
            </div>
            <VendorForm showMoreInfoButton={true} className={"stagger"} />
          </StaggerContainer>
        </div>
      </Section>
      <Section>
        <div className="mx-auto mb-20 flex max-w-screen-2xl flex-col px-6 lg:min-h-[500px] lg:flex-row lg:px-8 xl:px-40">
          <div className="relative h-80 overflow-hidden sm:h-96 lg:h-auto lg:basis-1/2">
            <div className=" absolute right-1/2 top-1/2 aspect-[1.38/1] w-[80%] max-w-sm -translate-y-1/2 translate-x-1/2 lg:left-[10%] lg:right-0 lg:max-w-none lg:translate-x-0">
              <Float className="relative h-full w-full">
                <div className="absolute left-1/2 top-1/2 aspect-[1.43/1] w-[94%] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-red-500"></div>
                <ImageWithPlaceholder src={ipad} alt={"tablet"} fill={true} sizes={"(max-width: 768px) 50vw, 100vw"} priority={true} />
              </Float>
            </div>
            <div className=" absolute left-[70%] top-1/2 aspect-[1/2] w-[25%] max-w-[120px] -translate-y-[40%] lg:max-w-none">
              <Float className="relative h-full w-full" delay={2.3}>
                <div className="absolute left-1/2 top-1/2 aspect-[1/2.17] w-[89%] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-emerald-500"></div>
                <ImageWithPlaceholder src={iphone} alt={"tablet"} fill={true} sizes={"(max-width: 768px) 50vw, 100vw"} priority={true} />
              </Float>
            </div>
          </div>
          <StaggerContainer
            selector=".stagger"
            viewportAmount={0.1}
            yOffset={100}
            duration={1.5}
            staggerChildren={0.15}
            delayChildren={0}
            className="my-auto flex flex-col justify-center lg:basis-1/2"
          >
            <h1 className="stagger mb-6 text-center text-2xl font-extrabold [word-spacing:5px] sm:text-4xl">Experience The Convenience Of Our App</h1>
            <div className="stagger mx-auto mb-6 sm:w-[90%]">
              <p className="text-sm [word-spacing:3px] sm:text-base">
                Get instant access to our services and stay connected on thee go. Unlock a world of possibilities at your fingertips.
              </p>
            </div>
            <div className="stagger flex items-center justify-center gap-8 px-3 pt-6">
              <Link href={"/"} className="relative">
                <ImageWithPlaceholder src={appleStore} alt={"apple-store-button"} className="w-52" />
              </Link>
              <Link href={"/"} className="relative">
                <ImageWithPlaceholder src={playStore} alt={"play-store-button"} className="w-52" />
              </Link>
            </div>
          </StaggerContainer>
        </div>
      </Section>
    </>
  );
}
