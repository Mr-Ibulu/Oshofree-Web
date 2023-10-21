import React from "react";
import { MdPersonOutline, MdOutlineShoppingCart, MdFavoriteBorder, MdMenu } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/public/images/brand-black.png";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/global/Sidebar";
import { cart } from "@/data/cart";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import CategoriesHoverMenu from "./CategoriesHoverMenu";
import ProfileHoverMenu from "./ProfileHoverMenu";

const Navbar = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 w-full bg-transparent backdrop-blur">
      <div className="mx-auto flex max-w-[1328px] items-center justify-between px-4 py-4 sm:px-7 lg:px-14 2xl:px-0">
        <div className="absolute left-0 flex h-full w-14 -translate-y-4 items-center justify-center self-start sm:w-24">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-3xl focus:outline-none sm:text-4xl xl:mt-3">
                <span className="sr-only">Menu</span>
                <MdMenu />
                <div className="hidden text-xs xl:block">Menu</div>
              </button>
            </SheetTrigger>
            <SheetContent side={"left"} className="w-[80%] rounded-r-2xl p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="ml-10 sm:ml-16 xl:ml-12 2xl:ml-0">
          <Image src={logo} alt="logo" priority className="w-24 xs:w-28 sm:w-32" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-6 text-sm font-medium lg:flex">
          <HoverCard openDelay={50}>
            <HoverCardTrigger asChild>
              <Link
                href={"/categories"}
                className="group flex items-center gap-1 text-lg font-extrabold decoration-red-500 decoration-2 underline-offset-4 hover:underline"
              >
                Categories
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                </span>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="hidden w-fit xl:block">
              <CategoriesHoverMenu />
            </HoverCardContent>
          </HoverCard>
          <Link href={"/wishlist"} className="flex items-center gap-1 decoration-red-500 decoration-2 underline-offset-4 hover:underline">
            <MdFavoriteBorder className="text-lg" />
            My Wishlist
          </Link>
          <Link href={"/sell"} className="flex items-center gap-1 decoration-red-500 decoration-2 underline-offset-4 hover:underline">
            Sell On Oshofree
          </Link>
          <Link href={"/"} className="hidden items-center gap-1 decoration-red-500 decoration-2 underline-offset-4 hover:underline xl:flex">
            Blog
          </Link>
          <Link href={"/"} className="flex items-center gap-1 decoration-red-500 decoration-2 underline-offset-4 hover:underline">
            Help
          </Link>
        </nav>
        <section className="flex justify-between gap-5 p-2 font-semibold lg:gap-4">
          <Link href={"/cart"} className="relative inline-flex items-center gap-1 transition-transform duration-100 ease-in-out hover:scale-105">
            <MdOutlineShoppingCart className="text-2xl sm:text-3xl" />
            <span className="absolute right-0 top-0 inline-flex h-[18px] w-[18px] -translate-y-2 translate-x-2 items-center justify-center rounded-full bg-red-500 px-1 py-1 text-[10px] leading-4 text-white">
              {cart.length}
            </span>
          </Link>
          <HoverCard openDelay={50}>
            <HoverCardTrigger asChild>
              <Link
                href={"/login"}
                aria-label="Login"
                className="inline-flex items-center gap-2 transition-transform duration-100 ease-in-out hover:scale-105"
              >
                <MdPersonOutline className="text-2xl sm:text-3xl" />
                <div className="hidden text-xs sm:block sm:text-sm">Sign In</div>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="hidden w-72 px-0 xl:block">
              <ProfileHoverMenu />
            </HoverCardContent>
          </HoverCard>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
