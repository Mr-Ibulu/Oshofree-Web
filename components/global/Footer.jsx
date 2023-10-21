import React from "react";
import logo from "@/public/images/brand-white.png";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import footerImg from "@/public/images/footerImg.jpg";
import mastercardLogo from "@/public/images/mastercard-logo.png";
import visacardLogo from "@/public/images/visa-logo.png";
import vervecardLogo from "@/public/images/verve-logo.png";
import { MdPhone, MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Section>
      <footer className="relative pb-20 pt-20 [word-spacing:3px] sm:min-h-full">
        <ImageWithPlaceholder src={footerImg} alt={"footer-image"} fill={true} sizes={"(max-width: 768px) 80vw, 100vw"} priority={true} />
        <div className="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto overflow-x-hidden">
          <div className="mx-6 flex flex-col justify-center gap-5 rounded-lg bg-white p-6 sm:gap-6 lg:items-center xl:flex-row">
            <div className="flex flex-col gap-4 gap-x-8 sm:flex-row">
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-red-100 p-3 text-red-500 focus:outline-none">
                  <span className="sr-only">Call</span>
                  <MdPhone className="text-lg" />
                </button>
                <p className="w-40 font-medium">+234 123 456 7890</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-red-100 p-3 text-red-500 focus:outline-none">
                  <span className="sr-only">Email</span>
                  <MdEmail className="text-lg" />
                </button>
                <p className="font-medium">consultoshofree@gmail.com</p>
              </div>
            </div>
            <div className="h-1 w-[20%] self-center rounded-full bg-red-500 xl:h-10 xl:w-1"></div>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="text-sm">
                <p>Subcribe to our newsletter to get the latest deals sent to your inbox.</p>
              </div>
              <div className="flex gap-1 rounded-full bg-gray-100 p-2">
                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  placeholder="Enter your email address"
                  required
                  className="w-64 border-none bg-transparent font-medium focus:border-none focus:ring-0"
                />
                <button className="rounded-full bg-red-500 px-3 py-1 font-medium text-white transition duration-75 focus:outline-none active:scale-95 sm:px-6 sm:py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex w-[80%] flex-col text-white">
            <div className="self-start">
              <Link href="/" className="relative">
                <Image src={logo} alt="logo" className="w-48" />
              </Link>
              <div className="mt-5 flex flex-col gap-1 xl:text-sm">
                <div>
                  <Link href={"/"} className="inline-block px-1 py-1 hover:text-red-500">
                    Track Order
                  </Link>
                </div>
                <div>
                  <Link href={"/"} className="inline-block px-1 py-1 hover:text-red-500">
                    Delivery & Returns
                  </Link>
                </div>
                <div>
                  <Link href={"/"} className="inline-block px-1 py-1 hover:text-red-500">
                    Warranty
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-4">
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>About Us</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    About Us
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Contact Us
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Our Blog
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Careers
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>Useful Links</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Site Map
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Privacy Policy
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    FAQs
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>Make Money On Oshofree</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Become a Vendor
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Become a Logistics Service Partner
                  </Link>
                </div>
              </div>
              <div className="">
                <div className="text-xl font-semibold uppercase">
                  <p>More Info</p>
                </div>
                <div className="mt-3">
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Bulk Purchase
                  </Link>
                  <Link href={"/"} className="my-1 block w-fit px-1 py-1 hover:text-red-500">
                    Return Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative mt-10 items-center space-y-4 sm:flex sm:space-y-0">
              <div className="space-x-4 text-xl">
                <Link
                  href="/"
                  className="my-3 inline-block rounded-full p-2 transition-transform duration-150 ease-in-out hover:scale-150 hover:text-[#1877F2]"
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://twitter.com/oshofreeapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-3 inline-block rounded-full p-2 transition-transform duration-150 ease-in-out hover:scale-150 hover:text-[#1DA1F2]"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://instagram.com/oshofreeapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-3 inline-block rounded-full p-2 transition-transform duration-150 ease-in-out hover:scale-150 hover:text-[#D62976]"
                >
                  <FaInstagram />
                </Link>
                <Link
                  href="https://www.tiktok.com/@oshofreeapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="my-3 inline-block rounded-full p-2 transition-transform duration-150 ease-in-out hover:scale-150 hover:text-[#ff0050]"
                >
                  <FaTiktok />
                </Link>
              </div>
              <div className="ml-auto space-x-4">
                <div className="relative inline-block aspect-[16/9] w-10 overflow-hidden rounded-md">
                  <ImageWithPlaceholder src={mastercardLogo} alt={"mastercard-logo"} sizes={"10vw"} fill={true} className="object-cover" />
                </div>
                <div className="relative inline-block aspect-[16/9] w-10 overflow-hidden rounded-md">
                  <ImageWithPlaceholder src={visacardLogo} alt={"visacard-logo"} sizes={"10vw"} fill={true} className="object-cover" />
                </div>
                <div className="relative inline-block aspect-[16/9] w-10 overflow-hidden rounded-md">
                  <ImageWithPlaceholder src={vervecardLogo} alt={"vervecard-logo"} sizes={"50vw"} fill={true} className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
