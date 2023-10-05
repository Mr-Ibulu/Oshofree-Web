import React from "react";
import SignInForm from "@/components/auth/SignInForm";
import logo from "@/public/images/brand-black.png";
import Image from "next/image";
import ImageWithPlaceholder from "@/components/ImageWithPlaceholder";
import vendor from "@/public/images/vendor.webp";
import Link from "next/link";
import { MdOutlineHome } from "react-icons/md";

const Login = () => {
  return (
    <div className="bg-gray-100 h-[100dvh] w-full flex justify-center overflow-y-auto py-5 xl:scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
      <div className="bg-white w-[95%] h-fit sm:max-w-xl xl:max-w-6xl rounded-lg grid xl:grid-cols-2 overflow-hidden my-auto">
        <div className="p-6 sm:px-10">
          <Link href={"/"} className="mb-10 inline-flex items-center justify-between">
            <Image src={logo} alt="logo" priority className="w-[35%] sm:w-[25%] xl:w-[20%]" />
            <div className="flex items-center gap-2 hover:underline text-sky-700">
              <MdOutlineHome />
              <span className="text-xs">Return Home</span>
            </div>
          </Link>
          <div className="grid gap-4">
            <div className="flex flex-col space-y-3 text-center sm:text-left">
              <div className="text-3xl font-semibold leading-none tracking-tight">Login</div>
              <div className="text-sm text-neutral-500">Welcome Back, Login to your account</div>
            </div>
            <SignInForm />
          </div>
        </div>
        <div className="hidden lg:block relative">
          <ImageWithPlaceholder src={vendor} alt="signup-image-carousel" fill={true} className={"object-cover"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
