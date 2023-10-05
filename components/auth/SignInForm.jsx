'use client'

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
        <Form.Field className="grid mb-2" name="email-phone">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Email Address or Phone Number</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Email Address or Phone Number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
              type="text"
              placeholder="Enter your Email Address OR Phone Number"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="password">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Password</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Password
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <input
                className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                required
              />
            </Form.Control>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-3 text-lg py-2"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <BsEye className="w-9" /> : <BsEyeSlash className="w-9" />}
            </button>
          </div>
        </Form.Field>
        <div className="text-sm flex items-center justify-between mt-6">
          <Form.Field name="remember-me" className="inline-flex items-center">
            <Form.Control asChild>
              <input type="checkbox" defaultChecked />
            </Form.Control>
            <Form.Label className="ml-2">Remember me</Form.Label>
          </Form.Field>
          <Link href="" className="text-sky-700 font-medium hover:underline">
            Forgot Password?
          </Link>
        </div>
        <Form.Submit asChild>
          <button className="bg-sky-600 hover:bg-sky-700 text-white w-full py-2 rounded-full mt-7 font-medium">Log In</button>
        </Form.Submit>
      </Form.Root>
      <div className="flex items-center space-x-3 justify-center mt-7">
        <span className="text-sm">Don't have an account?</span>
        <Link href="/register" replace className="text-sky-700 font-medium hover:underline">
          Create an account
        </Link>
      </div>
      <div className="relative my-7 flex items-center before:block before:h-[2px] before:bg-gray-200 before:rounded-full before:absolute before:w-full before:top-1/2 before:-translate-y-1/2">
        <span className="relative text-xs text-center inline-block leading-none mx-auto bg-white px-1">or continue with</span>
      </div>
      <div className="flex items-center gap-8 justify-center pb-2">
        <button className="inline-flex border border-gray-300 items-center gap-2  px-6 py-2 rounded-full hover:scale-110 transition-transform ease-in-out duration-150">
          <Image src={google_logo} alt="google logo" priority className="w-6" /> <span className="text-sm font-medium">Google</span>
        </button>
        <button className="inline-flex border border-gray-300 items-center gap-2  px-6 py-2 rounded-full hover:scale-110 transition-transform ease-in-out duration-150">
          <Image src={facebook_logo} alt="google logo" priority className="w-6" /> <span className="text-sm font-medium">Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default SignInForm;
