import React from "react";
import SnapSection from "@/components/global/SnapSection";
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

export function generateStaticParams() {
  return dealOfTheDay.map((deal) => ({ id: `${deal.id}` }));
}

const DealItem = ({ params }) => {
  const productId = params.id;
  const deal = dealOfTheDay.find((deal) => deal.id == productId);
  return (
    <>
      <SnapSection nextSectionTitle={"About this deal"} className="pt-20">
        <div className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
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
            <nav className="stagger hidden text-sm sm:flex mb-7">
              {["Local", "Home Services", "Cleaning Services", "House Cleaning"].map((breadcrumb, index, arr) => (
                <div className="inline-flex items-center text-blue-900" key={index}>
                  <Link href={""} className="hover:underline">
                    {breadcrumb}
                  </Link>
                  {index !== arr.length - 1 ? <MdOutlineChevronRight className="text-lg mx-2" /> : ""}
                </div>
              ))}
            </nav>
            <div className="stagger hidden md:block mb-6">
              <div className="font-bold capitalize md:text-2xl lg:text-3xl xl:text-4xl mb-6 [word-spacing:3px] leading-[3rem]">
                <h1>{deal.description}</h1>
              </div>
              <div className="flex items-center gap-3 mb-1">
                <MdOutlineLocationOn className="text-lg text-gray-500 min-w-[15px]" /> <span className="">No. 15 Ehimare Crescent, Odili Rd</span>
              </div>
              <div className="flex items-center gap-3 mb-1">
                <MdOutlineInfo className="text-lg text-gray-500 min-w-[15px]" />
                <span className="">{deal.description}</span>
              </div>
              <div className="flex gap-2 items-center text-sm">
                <span className="min-w-[15px]">{deal.rating}</span>
                <RatingStars rating={deal.rating} />
                <span className="text-gray-500">(59 Ratings)</span>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-6">
              <div className="stagger lg:basis-[65%] flex gap-4 h-72 sm:h-[400px] 3xl:h-[500px] md:mb-8">
                <AutoScrollShowcase
                  horizontal={false}
                  className="w-20 h-[60%] flex flex-col gap-3 overflow-y-scroll overflow-x-hidden scrollbar-none"
                >
                  <div className="relative w-full min-h-[64px] rounded-xl overflow-hidden">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative w-full min-h-[64px] rounded-xl overflow-hidden">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative w-full min-h-[64px] rounded-xl overflow-hidden">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative w-full min-h-[64px] rounded-xl overflow-hidden">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                  <div className="relative w-full min-h-[64px] rounded-xl overflow-hidden">
                    <ImageWithPlaceholder
                      src={deal.image}
                      alt={deal.description}
                      fill={true}
                      sizes={"(max-width: 768px) 50vw, 33vw"}
                      className={"object-cover"}
                    />
                  </div>
                </AutoScrollShowcase>
                <div className="grow relative rounded-xl overflow-hidden">
                  <ImageWithPlaceholder src={deal.image} alt={deal.description} fill={true} sizes={"100vw"} className={"object-cover"} />
                </div>
              </div>
              <div className="stagger md:hidden mb-6 text-sm">
                <div className="font-bold capitalize text-xl sm:text-2xl mb-6 [word-spacing:3px] ">
                  <h1>{deal.description}</h1>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <MdOutlineLocationOn className="text-lg text-gray-500 min-w-[20px]" /> <span className="">No. 22 Royal Avenue, Odili Rd</span>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <MdOutlineInfo className="text-lg text-gray-500 min-w-[20px]" />
                  <span className="">{deal.description}</span>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <span className="min-w-[20px]">{deal.rating}</span>
                  <RatingStars rating={deal.rating} />
                  <span className="text-gray-500">(59 Ratings)</span>
                </div>
              </div>
              <div className="stagger xl:basis-[35%] md:w-[90%] md:mx-auto">
                <DealActions dealItem={deal} />
                <div className="xl:px-5 mt-7 flex gap-4 items-center justify-center">
                  <span className="font-medium">Share This Deal:</span>
                  <div className="flex gap-4 text-xl text-gray-600">
                    <Link href={""} className="hover:scale-125 transition-transform ease-in-out duration-100" aria-label="facebook">
                      <FaFacebookF />
                    </Link>
                    <Link href={""} className="hover:scale-125 transition-transform ease-in-out duration-100" aria-label="twitter">
                      <FaTwitter />
                    </Link>
                    <Link href={""} className="hover:scale-125 transition-transform ease-in-out duration-100" aria-label="instagram">
                      <FaInstagram />
                    </Link>
                    <Link href={""} className="hover:scale-125 transition-transform ease-in-out duration-100" aria-label="tiktok">
                      <FaTiktok />
                    </Link>
                    <Link href={""} className="hover:scale-125 transition-transform ease-in-out duration-100" aria-label="whatsapp">
                      <FaWhatsapp />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </SnapSection>
      <SnapSection nextSectionTitle={"Reviews"} className="pt-20">
        <StaggerContainer selector=".stagger" viewportAmount={0.1} yOffset={50} duration={0.5} staggerChildren={0.12} delayChildren={0.1}>
          <h1 className="stagger text-2xl sm:text-3xl font-extrabold mt-6 mb-11 text-center capitalize">About this deal</h1>
          <section className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto space-y-10">
            <div className="stagger max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">Description</h2>
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias reprehenderit totam, quasi quae libero assumenda eligendi laborum
                iure sunt voluptates itaque ducimus quos esse maiores dolores aut fugiat iste? Nisi, reprehenderit! Deserunt consequuntur nulla minus
                quo quia ipsa voluptatum at. Beatae non neque earum eaque totam similique a, libero consectetur iusto eligendi ducimus laborum soluta
                sapiente aut quia voluptatibus fugiat corporis, nesciunt nulla exercitationem? Nihil, perferendis. Alias excepturi sunt dolorem
                laudantium optio laboriosam doloribus dolor rem, tenetur quisquam ratione reprehenderit saepe, dicta quos debitis nobis! Repudiandae
                sunt alias ipsum voluptatibus tempora perferendis unde, fugiat itaque officia praesentium ratione, necessitatibus veritatis.
              </div>
            </div>
            <div className="stagger max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">Additional Infomation</h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit molestiae facere, placeat neque ullam asperiores voluptatem ab. Iure
                beatae rerum debitis ducimus. Maiores corporis quisquam tempore quis, minima nisi at cupiditate doloremque, facere nulla impedit
                nostrum dolorum rem? Aliquid repudiandae magnam natus non voluptates incidunt reprehenderit. Fugit qui tempora eaque!
              </div>
            </div>
            <div className="stagger max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">About Vendor</h2>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, inventore esse aliquam molestias quae repellendus incidunt unde nulla
                necessitatibus sint error accusantium possimus ad non enim molestiae nostrum quod quas?
              </div>
              <div className="aspect-video mt-6 rounded-md overflow-hidden">
                <video controls className="w-full h-full object-cover">
                  <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </section>
        </StaggerContainer>
      </SnapSection>
      <SnapSection nextSectionTitle={"Similar deals"} className="pt-20">
        <StaggerContainer selector=".stagger" viewportAmount={0.1} yOffset={50} duration={0.5} staggerChildren={0.12} delayChildren={0.1}>
          <h1 className="stagger text-2xl sm:text-3xl font-extrabold mt-6 mb-11 text-center capitalize">Customer Reviews</h1>
          <section className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto ">
            <div className="stagger max-w-3xl mx-auto flex gap-4 items-center mb-10">
              <h2 className="text-5xl font-bold">{deal.rating}</h2>
              <RatingStars rating={deal.rating} className={"text-2xl"} />
              <div>54 Ratings</div>
            </div>
            <div className="stagger max-w-3xl mx-auto space-y-6">
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
                <div className="bg-white rounded-md shadow p-3">
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
                <div className="bg-white rounded-md shadow p-3">
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
                <div className="bg-white rounded-md shadow p-3">
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
                <div className="bg-white rounded-md shadow p-3">
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
                <div className="bg-white rounded-md shadow p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint non. Odio veritatis perferendis ipsa dolorum corrupti molestiae
                  debitis cupiditate?
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <Link
                href={"/"}
                className="block border-2 border-red-400 hover:bg-red-500 hover:text-white py-2 text-center sm:w-[50%] xl:w-[30%] mx-auto rounded-full font-bold mt-8"
              >
                Load More
              </Link>
            </div>
          </section>
        </StaggerContainer>
      </SnapSection>
      <SnapSection nextSectionTitle={"Footer"} className="pt-20">
        <div className="mt-6 mb-11 text-center capitalize">
          <h1 className="text-2xl sm:text-3xl font-extrabold">Similar Deals</h1>
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
              .slice(0, 5)}
          </div>
          <Link href={"/"} className="block border-2 border-red-400 py-2 text-center sm:w-[50%] xl:w-[30%] mx-auto rounded-full font-bold mt-12">
            See More
          </Link>
        </section>
      </SnapSection>
    </>
  );
};

export default DealItem;
