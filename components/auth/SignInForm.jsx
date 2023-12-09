"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { MdOutlineError } from "react-icons/md";
import Link from "next/link";
import facebook_logo from "@/public/images/facebook-logo.svg";
import google_logo from "@/public/images/google-logo.svg";
import Image from "next/image";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Form.Root>
        <Form.Field className="mb-2 grid" name="email-phone">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Email Address or Phone Number</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Email Address or Phone Number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter your Email Address OR Phone Number"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2 grid" name="password">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Password</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Password
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <input
                className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                required
              />
            </Form.Control>
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 py-2 text-lg"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <BsEye className="w-9" /> : <BsEyeSlash className="w-9" />}
            </button>
          </div>
        </Form.Field>
        <div className="mt-6 flex items-center justify-between text-sm">
          <Form.Field name="remember-me" className="inline-flex items-center">
            <Form.Control asChild>
              <input type="checkbox" defaultChecked />
            </Form.Control>
            <Form.Label className="ml-2">Remember me</Form.Label>
          </Form.Field>
          <Link href="" className="font-medium text-sky-700 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Form.Submit asChild>
          <button className="mt-7 w-full rounded-full bg-sky-600 py-2 font-medium text-white hover:bg-sky-700">Log In</button>
        </Form.Submit>
      </Form.Root>
      <div className="mt-7 flex items-center justify-center space-x-3">
        <span className="text-sm">Don&apos;t have an account?</span>
        <Link href="/register" replace className="font-medium text-sky-700 hover:underline">
          Create an account
        </Link>
      </div>
      <div className="relative my-7 flex items-center before:absolute before:top-1/2 before:block before:h-[2px] before:w-full before:-translate-y-1/2 before:rounded-full before:bg-gray-200">
        <span className="relative mx-auto inline-block bg-white px-1 text-center text-xs leading-none">or continue with</span>
      </div>
      <div className="flex items-center justify-center gap-8 pb-2">
        <button className="inline-flex items-center gap-2 rounded-full border  border-gray-300 px-6 py-2 transition-transform duration-150 ease-in-out hover:scale-110">
          <Image src={google_logo} alt="google logo" priority className="w-6" /> <span className="text-sm font-medium">Google</span>
        </button>
        <button className="inline-flex items-center gap-2 rounded-full border  border-gray-300 px-6 py-2 transition-transform duration-150 ease-in-out hover:scale-110">
          <Image src={facebook_logo} alt="google logo" priority className="w-6" /> <span className="text-sm font-medium">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
