import React from "react";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import SnapSection from "@/components/global/SnapSection";
import Link from "next/link";
import { MdDelete, MdOutlineChevronRight, MdFavoriteBorder } from "react-icons/md";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import DealCard from "@/components/DealCard";
import { cart } from "@/data/cart";

const Cart = () => {
  const cartSubtotal = cart.reduce((acc, val) => acc + val.deal.newPrice * val.quantity, 0);
  return (
    <>
      <SnapSection nextSectionTitle={"You might also like"} className="pt-20">
        <div className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
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
              <h1>Your Cart ({cart.length} Items)</h1>
            </div>
          </FadeInFromSides>
          <div className="flex flex-col md:flex-row gap-10">
            <FadeInFromSides
              reapeat={true}
              duration={0.7}
              yOffset={20}
              viewportAmount={0.1}
              delay={0.3}
              className="basis-[60%] xl:basis-[70%] space-y-10"
            >
              {cart.map((cartItem) => (
                <div className="bg-white" key={cartItem.deal.id}>
                  <div className="flex flex-col xl:flex-row flex-wrap items-start gap-y-4 gap-x-2">
                    <Link href={`/deals/${cartItem.deal.id}`}>
                      <div className="flex space-x-4">
                        <div className="relative w-44 rounded-md overflow-hidden">
                          <ImageWithPlaceholder src={cartItem.deal.image} />
                        </div>
                        <div className="text-sm sm:text-base font-semibold max-w-xs py-2">{cartItem.deal.description}</div>
                      </div>
                    </Link>

                    <div className="flex grow justify-center py-2 gap-6 sm:gap-14 xl:gap-6 mx-auto">
                      <div className="flex items-center gap-1">
                        <div className="font-medium">Qty:</div>
                        <Select defaultValue={`${cartItem.quantity}`}>
                          <SelectTrigger className="focus:ring-0" aria-label="Select Quantity">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="old-price line-through text-gray-500 font-medium text-sm">
                            <span>&#8358;{cartItem.deal.prevPrice}</span>
                          </div>
                          <div className="new-price font-bold text-lg text-red-600">
                            <span>&#8358;{cartItem.deal.newPrice}</span>
                          </div>
                        </div>
                        <div className="text-sm mt-2 font-medium text-sky-700">
                          You Save <span>&#8358;{cartItem.deal.prevPrice - cartItem.deal.newPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-8 mt-4">
                    <button className="flex items-center text-sm gap-2 p-2 font-medium hover:scale-110 transition-transform duration-100 ease-in-out">
                      Remove
                      <div className="text-xl text-red-500">
                        <MdDelete />
                      </div>
                    </button>
                    <button className="flex items-center text-sm gap-2 p-2 font-medium hover:scale-110 transition-transform duration-100 ease-in-out">
                      Save For Later
                      <div className="text-xl text-sky-700">
                        <MdFavoriteBorder />
                      </div>
                    </button>
                  </div>
                  <Separator className="mt-6" />
                </div>
              ))}
            </FadeInFromSides>
            <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.4} className="basis-[40%] xl:basis-[30%] ">
              <div className="shadow rounded-md p-4 bg-white max-h-screen sticky top-0">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-lg">Order Summary</span> <span>{cart.length} Items</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>VAT</span> <span>&#8358;200</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Sub Total</span> <span>&#8358;{cartSubtotal}</span>
                  </div>
                </div>
                <Separator className="mt-6" />
                <div className="flex items-center justify-between font-bold mt-3">
                  <span className="text-lg">Total</span> <span>&#8358;{cartSubtotal + 200}</span>
                </div>
                <Separator className="mt-6" />
                <div className="mt-3">
                  <Link
                    href={""}
                    className="bg-red-500 block text-center text-white w-full py-3 rounded-md focus:outline-none hover:scale-105 transition-transform duration-200 ease-in-out"
                  >
                    Proceed To Checkout
                  </Link>
                </div>
              </div>
            </FadeInFromSides>
          </div>
        </div>
      </SnapSection>
      <SnapSection nextSectionTitle={"Footer"} className="pt-20">
        <div className="mt-6 mb-11 text-center capitalize">
          <h1 className="text-2xl sm:text-3xl font-extrabold">You Might Also Like</h1>
        </div>
        <section className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 overflow-hidden max-w-[1328px] mx-auto">
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

export default Cart;
