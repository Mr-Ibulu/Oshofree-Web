import React from "react";
import logo from "@/public/images/brand-white.png";
import SnapSection from "@/components/global/SnapSection";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import footerImg from "@/public/images/footerImg.jpg";
import mastercardLogo from "@/public/images/mastercard-logo.png";
import visacardLogo from "@/public/images/visa-logo.png";
import vervecardLogo from "@/public/images/verve-logo.png";
import { MdPhone, MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <SnapSection className={"z-20"}>
      <footer className="pt-20 pb-20 relative sm:min-h-full [word-spacing:3px]">
        <ImageWithPlaceholder src={footerImg} alt={"footer-image"} fill={true} sizes={"(max-width: 768px) 80vw, 100vw"} priority={true} />
        <div className="relative h-full w-full max-w-screen-2xl mx-auto overflow-y-auto overflow-x-hidden xl:scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
          <div className="bg-white flex flex-col xl:flex-row gap-5 sm:gap-6 mx-6 lg:items-center justify-center rounded-lg p-6">
            <div className="flex flex-col sm:flex-row gap-4 gap-x-8">
              <div className="flex gap-4 items-center">
                <button className="rounded-full text-red-500 p-3 bg-red-100 focus:outline-none">
                  <span className="sr-only">Call</span>
                  <MdPhone className="text-lg" />
                </button>
                <p className="font-medium w-40">+234 123 456 7890</p>
              </div>
              <div className="flex gap-4 items-center">
                <button className="rounded-full text-red-500 p-3 bg-red-100 focus:outline-none">
                  <span className="sr-only">Email</span>
                  <MdEmail className="text-lg" />
                </button>
                <p className="font-medium">consultoshofree@gmail.com</p>
              </div>
            </div>
            <div className="w-[20%] h-1 xl:h-10 xl:w-1 rounded-full bg-red-500 self-center"></div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="text-sm">
                <p>Subcribe to our newsletter to get the latest deals sent to your inbox.</p>
              </div>
              <div className="bg-gray-100 p-2 rounded-full flex gap-1">
                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  placeholder="Enter your email address"
                  required
                  className="bg-transparent border-none w-64 focus:border-none focus:ring-0 font-medium"
                />
                <button className="bg-red-500 text-white font-medium rounded-full active:scale-95 transition duration-75 py-1 px-3 sm:py-2 sm:px-6 focus:outline-none">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-10 text-white flex flex-col w-[80%] mx-auto">
            <div className="self-start">
              <Link href="/" className="relative">
                <Image src={logo} alt="logo" className="w-48" />
              </Link>
              <div className="flex flex-col mt-5 gap-1 xl:text-sm">
                <div>
                  <Link href={"/"} className="hover:text-red-500 py-1 px-1 inline-block">
                    Track Order
                  </Link>
                </div>
                <div>
                  <Link href={"/"} className="hover:text-red-500 py-1 px-1 inline-block">
                    Delivery & Returns
                  </Link>
                </div>
                <div>
                  <Link href={"/"} className="hover:text-red-500 py-1 px-1 inline-block">
                    Warranty
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 sm:gap-x-10 gap-y-10 mt-10">
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>About Us</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    About Us
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Contact Us
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Our Blog
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Careers
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>Useful Links</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Site Map
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Privacy Policy
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    FAQs
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>Make Money On Oshofree</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Become a Vendor
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Become a Logistics Service Partner
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>More Info</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Bulk Purchase
                  </Link>
                  <Link href={"/"} className="block w-fit hover:text-red-500 my-1 py-1 px-1">
                    Return Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 relative space-x-4">
              <div className="relative w-14 aspect-[16/9] inline-block overflow-hidden rounded-md">
                <ImageWithPlaceholder src={mastercardLogo} alt={"mastercard-logo"} sizes={"10vw"} fill={true} className="object-cover" />
              </div>
              <div className="relative w-14 aspect-[16/9] inline-block overflow-hidden rounded-md">
                <ImageWithPlaceholder src={visacardLogo} alt={"visacard-logo"} sizes={"10vw"} fill={true} className="object-cover" />
              </div>
              <div className="relative w-14 aspect-[16/9] inline-block overflow-hidden rounded-md">
                <ImageWithPlaceholder src={vervecardLogo} alt={"vervecard-logo"} sizes={"50vw"} fill={true} className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </SnapSection>
  );
};

export default Footer;
