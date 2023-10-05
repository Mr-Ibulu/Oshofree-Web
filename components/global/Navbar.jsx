import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
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
    <header className="fixed top-0 left-0 right-0 w-full z-10 backdrop-blur bg-transparent">
      <div className="flex px-4 sm:px-7 lg:px-14 2xl:px-0 py-4 justify-between max-w-[1328px] mx-auto items-center">
        <div className="h-full lg:h-[100dvh] self-start absolute left-0 w-14 sm:w-24 -translate-y-4 ">
          <div className="flex flex-col items-center h-full relative">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-3xl sm:text-4xl mt-6 focus:outline-none">
                  <span className="sr-only">Menu</span>
                  <MdMenu />
                  <div className="hidden sm:block text-xs">Menu</div>
                </button>
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[80%] rounded-r-2xl p-0">
                <Sidebar />
              </SheetContent>
            </Sheet>
            <section className="hidden lg:block text-lg absolute top-1/2 -translate-y-1/2 text-gray-600">
              <Link
                href="/"
                className="my-3 block p-2 rounded-full hover:scale-150 transition-transform ease-in-out duration-150 hover:text-[#1877F2]"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://twitter.com/oshofreeapp"
                target="_blank"
                rel="noopener noreferrer"
                className="my-3 block p-2 rounded-full hover:scale-150 transition-transform ease-in-out duration-150 hover:text-[#1DA1F2]"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://instagram.com/oshofreeapp"
                target="_blank"
                rel="noopener noreferrer"
                className="my-3 block p-2 rounded-full hover:scale-150 transition-transform ease-in-out duration-150 hover:text-[#D62976]"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.tiktok.com/@oshofreeapp"
                target="_blank"
                rel="noopener noreferrer"
                className="my-3 block p-2 rounded-full hover:scale-150 transition-transform ease-in-out duration-150 hover:text-[#ff0050]"
              >
                <FaTiktok />
              </Link>
            </section>
          </div>
        </div>
        <Link href="/" className="ml-10 sm:ml-16 xl:ml-12 2xl:ml-0">
          <Image src={logo} alt="logo" priority className="w-24 xs:w-28 sm:w-32" />
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-6 font-medium text-sm">
          <HoverCard openDelay={50}>
            <HoverCardTrigger asChild>
              <Link
                href={"/categories"}
                className="group hover:underline decoration-red-500 decoration-2 font-extrabold text-lg underline-offset-4 flex items-center gap-1"
              >
                Categories
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit hidden xl:block">
              <CategoriesHoverMenu />
            </HoverCardContent>
          </HoverCard>
          <Link href={"/wishlist"} className="hover:underline decoration-red-500 decoration-2 underline-offset-4 flex items-center gap-1">
            <MdFavoriteBorder className="text-lg" />
            My Wishlist
          </Link>
          <Link href={"/sell"} className="hover:underline decoration-red-500 decoration-2 underline-offset-4 flex items-center gap-1">
            Sell On Oshofree
          </Link>
          <Link href={"/blog"} className="hidden hover:underline decoration-red-500 decoration-2 underline-offset-4 xl:flex items-center gap-1">
            Blog
          </Link>
          <Link href={"/help"} className="hover:underline decoration-red-500 decoration-2 underline-offset-4 flex items-center gap-1">
            Help
          </Link>
        </nav>
        <section className="flex justify-between gap-5 lg:gap-4 p-2 font-semibold">
          <Link href={"/cart"} className="inline-flex items-center gap-1 relative hover:scale-105 transition-transform duration-100 ease-in-out">
            <MdOutlineShoppingCart className="text-2xl sm:text-3xl" />
            <span className="inline-flex absolute top-0 right-0 translate-x-2 -translate-y-2 items-center justify-center rounded-full h-[18px] w-[18px] px-1 py-1 text-white leading-4 bg-red-500 text-[10px]">
              {cart.length}
            </span>
          </Link>
          <HoverCard openDelay={50}>
            <HoverCardTrigger asChild>
              <Link
                href={"/login"}
                aria-label="Login"
                scroll={false}
                className="inline-flex items-center gap-2 hover:scale-105 transition-transform duration-100 ease-in-out"
              >
                <MdPersonOutline className="text-2xl sm:text-3xl" />
                <div className="text-xs hidden sm:block sm:text-sm">Sign In</div>
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-72 px-0 hidden xl:block">
              <ProfileHoverMenu />
            </HoverCardContent>
          </HoverCard>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
