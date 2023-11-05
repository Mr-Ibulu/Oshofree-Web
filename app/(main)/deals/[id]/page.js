import React from "react";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import { MdOutlineChevronRight, MdOutlineLocationOn, MdOutlineInfo, MdFavoriteBorder, MdSearch } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";
import RatingStars from "@/components/ui/ratingStars";
import Link from "next/link";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import AutoScrollShowcase from "@/components/AutoScrollShowcase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DealCard from "@/components/DealCard";
import SearchbarHeader from "@/components/ui/searchbarHeader";
import DealActions from "@/components/dealPage/DealActions";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

export function generateStaticParams() {
  return dealOfTheDay.map((deal) => ({ id: `${deal.id}` }));
}

const DealItem = ({ params }) => {
  const productId = params.id;
  const deal = dealOfTheDay.find((deal) => deal.id == productId);
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
            <nav className="stagger mb-7 hidden text-sm sm:flex">
              {["Local", "Home Services", "Cleaning Services", "House Cleaning"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-blue-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="mx-2 text-lg" /> : ""}
                </div>
              ))}
            </nav>
            <div className="stagger mb-6 hidden md:block">
              <div className="mb-6 font-bold capitalize leading-[3rem] [word-spacing:3px] md:text-2xl lg:text-3xl xl:text-4xl">
                <h1>{deal.description}</h1>
              </div>
              <div className="mb-1 flex items-center gap-3">
                <MdOutlineLocationOn className="min-w-[15px] text-lg text-gray-500" /> <span className="">No. 15 Ehimare Crescent, Odili Rd</span>
              </div>
              <div className="mb-1 flex items-center gap-3">
                <MdOutlineInfo className="min-w-[15px] text-lg text-gray-500" />
                <span className="">{deal.description}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="min-w-[15px]">{deal.rating}</span>
                <RatingStars rating={deal.rating} />
                <span className="text-gray-500">(59 Ratings)</span>
              </div>
            </div>
            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="stagger flex h-72 gap-4 sm:h-[400px] md:mb-8 lg:basis-[65%] 3xl:h-[450px]">
                <AutoScrollShowcase
                  horizontal={false}
                  className="flex h-[60%] w-20 flex-col gap-3 overflow-x-hidden overflow-y-scroll scrollbar-none"
                >
                  <div className="relative min-h-[64px] w-full overflow-hidden rounded-xl">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative min-h-[64px] w-full overflow-hidden rounded-xl">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative min-h-[64px] w-full overflow-hidden rounded-xl">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative min-h-[64px] w-full overflow-hidden rounded-xl">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative min-h-[64px] w-full overflow-hidden rounded-xl">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                </AutoScrollShowcase>
                <div className="relative grow overflow-hidden rounded-xl">
                  <ImageWithPlaceholder src={deal.image} alt={deal.description} fill={true} sizes={"100vw"} className={"object-cover"} />
                </div>
              </div>
              <div className="stagger mb-6 text-sm md:hidden">
                <div className="mb-6 text-xl font-bold capitalize [word-spacing:3px] sm:text-2xl ">
                  <h1>{deal.description}</h1>
                </div>
                <div className="mb-1 flex items-center gap-3">
                  <MdOutlineLocationOn className="min-w-[20px] text-lg text-gray-500" /> <span className="">No. 22 Royal Avenue, Odili Rd</span>
                </div>
                <div className="mb-1 flex items-center gap-3">
                  <MdOutlineInfo className="min-w-[20px] text-lg text-gray-500" />
                  <span className="">{deal.description}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="min-w-[20px]">{deal.rating}</span>
                  <RatingStars rating={deal.rating} />
                  <span className="text-gray-500">(59 Ratings)</span>
                </div>
              </div>
              <div className="stagger shrink-0 md:mx-auto md:w-[90%] xl:basis-[35%]">
                <DealActions dealItem={deal} />
                <div className="mt-7 flex items-center justify-center gap-4 xl:px-5">
                  <span className="font-medium">Share This Deal:</span>
                  <div className="flex gap-4 text-xl text-gray-600">
                    <Link href={""} className="transition-transform duration-100 ease-in-out hover:scale-125" aria-label="facebook">
                      <FaFacebookF />
                    </Link>
                    <Link href={""} className="transition-transform duration-100 ease-in-out hover:scale-125" aria-label="twitter">
                      <FaTwitter />
                    </Link>
                    <Link href={""} className="transition-transform duration-100 ease-in-out hover:scale-125" aria-label="instagram">
                      <FaInstagram />
                    </Link>
                    <Link href={""} className="transition-transform duration-100 ease-in-out hover:scale-125" aria-label="tiktok">
                      <FaTiktok />
                    </Link>
                    <Link href={""} className="transition-transform duration-100 ease-in-out hover:scale-125" aria-label="whatsapp">
                      <FaWhatsapp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </Section>
      <Section>
        <StaggerContainer selector=".stagger" viewportAmount={0.1} yOffset={50} duration={1.5} staggerChildren={0.15} delayChildren={0}>
          <h1 className="stagger mb-11 text-center text-2xl font-extrabold capitalize sm:text-3xl">About this deal</h1>
          <section className="mx-auto max-w-[1328px] space-y-10 px-6 lg:px-8 xl:px-32 2xl:px-14">
            <div className="stagger mx-auto max-w-3xl">
              <h2 className="mb-3 text-2xl font-bold">Description</h2>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reprehenderit totam, quasi quae libero assumenda eligendi laborum
                iure sunt voluptates itaque ducimus quos esse maiores dolores aut fugiat iste? Nisi, reprehenderit! Deserunt consequuntur nulla minus
                quo quia ipsa voluptatum at. Beatae non neque earum eaque totam similique a, libero consectetur iusto eligendi ducimus laborum soluta
                sapiente aut quia voluptatibus fugiat corporis, nesciunt nulla exercitationem? Nihil, perferendis. Alias excepturi sunt dolorem
                laudantium optio laboriosam doloribus dolor rem, tenetur quisquam ratione reprehenderit saepe, dicta quos debitis nobis! Repudiandae
                sunt alias ipsum voluptatibus tempora perferendis unde, fugiat itaque officia praesentium ratione, necessitatibus veritatis.
              </div>
            </div>
            <div className="stagger mx-auto max-w-3xl">
              <h2 className="mb-3 text-2xl font-bold">Additional Infomation</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit molestiae facere, placeat neque ullam asperiores voluptatem ab. Iure
                beatae rerum debitis ducimus. Maiores corporis quisquam tempore quis, minima nisi at cupiditate doloremque, facere nulla impedit
                nostrum dolorum rem? Aliquid repudiandae magnam natus non voluptates incidunt reprehenderit. Fugit qui tempora eaque!
              </div>
            </div>
            <div className="stagger mx-auto max-w-3xl">
              <h2 className="mb-3 text-2xl font-bold">About Vendor</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore esse aliquam molestias quae repellendus incidunt unde nulla
                necessitatibus sint error accusantium possimus ad non enim molestiae nostrum quod quas?
              </div>
              <div className="mt-6 aspect-video overflow-hidden rounded-md">
                <video controls className="h-full w-full object-cover">
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
        </StaggerContainer>
      </Section>
      <Section>
        <StaggerContainer selector=".stagger" viewportAmount={0.1} yOffset={50} duration={1.5} staggerChildren={0.15} delayChildren={0}>
          <h1 className="stagger mb-11 text-center text-2xl font-extrabold capitalize sm:text-3xl">Customer Reviews</h1>
          <section className="mx-auto max-w-[1328px] px-6 lg:px-8 xl:px-32 2xl:px-14 ">
            <div className="stagger mx-auto mb-10 flex max-w-3xl items-center gap-4">
              <h2 className="text-5xl font-bold">{deal.rating}</h2>
              <RatingStars rating={deal.rating} className={"text-2xl"} />
              <div>54 Ratings</div>
            </div>
            <div className="stagger mx-auto max-w-3xl space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>OF</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">Customer 1</span>
                  <RatingStars rating={2.1} />
                  <span className="ml-auto">July 4, 2023</span>
                </div>
                <div className="rounded-md bg-white p-3 shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint non. Odio veritatis perferendis ipsa dolorum corrupti molestiae
                  debitis cupiditate?
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>OF</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">Customer 2</span>
                  <RatingStars rating={4.4} />
                  <span className="ml-auto">July 4, 2023</span>
                </div>
                <div className="rounded-md bg-white p-3 shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint non. Odio veritatis perferendis ipsa dolorum corrupti molestiae
                  debitis cupiditate?
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>OF</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">Customer 3</span>
                  <RatingStars rating={2.7} />
                  <span className="ml-auto">July 4, 2023</span>
                </div>
                <div className="rounded-md bg-white p-3 shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint non. Odio veritatis perferendis ipsa dolorum corrupti molestiae
                  debitis cupiditate?
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>OF</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">Customer 4</span>
                  <RatingStars rating={3.1} />
                  <span className="ml-auto">July 4, 2023</span>
                </div>
                <div className="rounded-md bg-white p-3 shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint non. Odio veritatis perferendis ipsa dolorum corrupti molestiae
                  debitis cupiditate?
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>OF</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">Customer 5</span>
                  <RatingStars rating={1.1} />
                  <span className="ml-auto">July 4, 2023</span>
                </div>
                <div className="rounded-md bg-white p-3 shadow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint non. Odio veritatis perferendis ipsa dolorum corrupti molestiae
                  debitis cupiditate?
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl">
              <Link
                href={"/"}
                className="mx-auto mt-8 block rounded-full border-2 border-red-400 py-2 text-center font-bold hover:bg-red-500 hover:text-white sm:w-[50%] xl:w-[30%]"
              >
                Load More
              </Link>
            </div>
          </section>
        </StaggerContainer>
      </Section>
      <Section>
        <div className="mb-11 text-center capitalize">
          <h1 className="text-2xl font-extrabold sm:text-3xl">Similar Deals</h1>
        </div>
        <section className="mx-auto max-w-[1328px] px-6 pb-20 lg:px-8 xl:px-32 2xl:px-14">
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
              .slice(0, 5)}
          </div>
          <Link href={"/"} className="mx-auto mt-12 block rounded-full border-2 border-red-400 py-2 text-center font-bold sm:w-[50%] xl:w-[30%]">
            See More
          </Link>
        </section>
      </Section>
    </>
  );
};

export default DealItem;
