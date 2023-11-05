import React from "react";
import Link from "next/link";
import { MdDelete, MdOutlineChevronRight, MdFavoriteBorder } from "react-icons/md";
import { dealOfTheDay } from "@/data/dealOfTheDay";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import DealCard from "@/components/DealCard";
import { cart } from "@/data/cart";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

const Cart = () => {
  const cartSubtotal = cart.reduce((acc, val) => acc + val.deal.newPrice * val.quantity, 0);
  return (
    <>
      <Section>
        <div className="mx-auto max-w-[1328px] px-6 py-3 lg:px-8 xl:px-32 2xl:px-14">
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
            <h1 className="stagger mb-10 text-2xl font-bold capitalize leading-[3rem] [word-spacing:3px] sm:text-4xl">
              Your Cart ({cart.length} Items)
            </h1>
            <div className="flex flex-col gap-10 sm:flex-row">
              <div className="stagger basis-[60%] space-y-10 xl:basis-[70%]">
                {cart.map((cartItem) => (
                  <div className="bg-white" key={cartItem.deal.id}>
                    <div className="flex flex-col flex-wrap items-start gap-x-2 gap-y-4 sm:flex-row">
                      <Link href={`/deals/${cartItem.deal.id}`}>
                        <div className="flex space-x-4">
                          <div className="relative aspect-[3/2] w-20 shrink-0 overflow-hidden rounded-md sm:w-40">
                            <ImageWithPlaceholder
                              src={cartItem.deal.image}
                              fill={true}
                              alt={cartItem.deal.description}
                              sizes={"(max-width:768px) 40vw, 60vw"}
                            />
                          </div>
                          <div className="max-w-xs py-2 text-sm font-semibold sm:text-base">
                            <p className="line-clamp-3">{cartItem.deal.description}</p>
                          </div>
                        </div>
                      </Link>

                      <div className="mx-auto flex grow justify-center gap-6 py-2 sm:gap-14 xl:gap-6">
                        <div className="flex items-center gap-1">
                          <div className="font-medium">Qty:</div>
                          <Select defaultValue={`${cartItem.quantity}`}>
                            <SelectTrigger className="h-8 focus:ring-0" aria-label="Select Quantity">
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
                            <div className="old-price text-sm font-medium text-gray-500 line-through">
                              <span>&#8358;{cartItem.deal.prevPrice}</span>
                            </div>
                            <div className="new-price text-lg font-bold text-red-600">
                              <span>&#8358;{cartItem.deal.newPrice}</span>
                            </div>
                          </div>
                          <div className="mt-2 text-sm font-medium text-sky-700">
                            You Save <span>&#8358;{cartItem.deal.prevPrice - cartItem.deal.newPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mx-auto mt-4 flex max-w-sm items-center justify-between gap-8">
                      <button className="flex items-center gap-2 p-2 text-sm font-medium transition-transform duration-100 ease-in-out hover:scale-110">
                        Remove
                        <div className="text-xl text-red-500">
                          <MdDelete />
                        </div>
                      </button>
                      <button className="flex items-center gap-2 p-2 text-sm font-medium transition-transform duration-100 ease-in-out hover:scale-110">
                        Save For Later
                        <div className="text-xl text-sky-700">
                          <MdFavoriteBorder />
                        </div>
                      </button>
                    </div>
                    <Separator className="mt-6" />
                  </div>
                ))}
              </div>
              <div className="stagger basis-[40%] xl:basis-[30%] ">
                <div className="sticky top-20 max-h-screen rounded-xl bg-white p-4 shadow-md">
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
                  <div className="mt-3 flex items-center justify-between font-bold">
                    <span className="text-lg">Total</span> <span>&#8358;{cartSubtotal + 200}</span>
                  </div>
                  <Separator className="mt-6" />
                  <div className="mt-3">
                    <Link
                      href={""}
                      className="block w-full rounded-md bg-red-600 py-3 text-center text-white transition-transform duration-200 ease-in-out hover:scale-105 focus:outline-none"
                    >
                      Proceed To Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </StaggerContainer>
        </div>
      </Section>
      <Section>
        <div className="mb-11 text-center capitalize">
          <h1 className="text-2xl font-extrabold sm:text-3xl">You Might Also Like</h1>
        </div>
        <section className="mx-auto max-w-[1328px] overflow-hidden px-6 py-3 lg:px-8 xl:px-32 2xl:px-14">
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
          <Link
            href={"/"}
            className="mx-auto mb-20 mt-12 block rounded-full border-2 border-red-400 py-2 text-center font-bold sm:w-[50%] xl:w-[30%]"
          >
            See More
          </Link>
        </section>
      </Section>
    </>
  );
};

export default Cart;
