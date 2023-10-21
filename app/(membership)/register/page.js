import React from "react";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";
import logo from "@/public/images/brand-black.png";
import vendor from "@/public/images/vendor.webp";
import RegisterationForm from "@/components/auth/RegisterationForm";

const Register = () => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-gray-100 py-5">
      <div className="my-auto grid h-fit w-[95%] overflow-hidden rounded-lg bg-white sm:max-w-xl xl:max-w-6xl xl:grid-cols-2">
        <div className="p-6 sm:px-10">
          <Link href={"/"} className="mb-10 inline-flex items-center justify-between">
            <Image src={logo} alt="logo" priority className="w-[35%] sm:w-[25%] xl:w-[20%]" />
            <div className="flex items-center gap-2 text-sky-700 hover:underline">
              <MdOutlineHome />
              <span className="text-xs">Return Home</span>
            </div>
          </Link>
          <div className="grid gap-4">
            <div className="flex flex-col space-y-3 text-center sm:text-left">
              <div className="text-3xl font-semibold leading-none tracking-tight">Create Account</div>
              <div className="text-sm text-neutral-500">Join Our Exclusive Club</div>
            </div>
            <RegisterationForm />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <ImageWithPlaceholder src={vendor} alt="signup-image-carousel" fill={true} className={"object-cover"} />
        </div>
      </div>
    </div>
  );
};

export default Register;
