"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { MdOutlineError } from "react-icons/md";
import Link from "next/link";
import facebook_logo from "@/public/images/facebook-logo.svg";
import google_logo from "@/public/images/google-logo.svg";
import Image from "next/image";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const RegisterationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <Form.Root>
        <Form.Field className="grid mb-2" name="firstName">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">First Name</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your First Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
              type="text"
              placeholder="Enter your First Name"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="lastName">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Last Name</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Last Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
              type="text"
              placeholder="Enter your Last Name"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="email">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Email Address</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Email Address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
              type="email"
              placeholder="Enter your Email Address"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="phone">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Phone Number</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Phone Number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
              type="text"
              placeholder="Enter your Phone Number"
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
        <Form.Submit asChild>
          <button className="bg-sky-600 hover:bg-sky-700 text-white w-full py-2 rounded-full mt-7 font-medium">Create Account</button>
        </Form.Submit>
      </Form.Root>
      <div className="flex items-center space-x-3 justify-center mt-7">
        <span className="text-sm">Already have an account?</span>
        <Link href="/login" replace className="text-sky-700 font-medium hover:underline">
          Log In
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
      <div className="text-xs text-center mt-7 [word-spacing:1px]">
        <p>
          By signing up you agree to our{" "}
          <Link href="" className="inline font-bold capitalize hover:underline">
            Terms of use
          </Link>{" "}
          and{" "}
          <Link href="" className="inline font-bold capitalize hover:underline">
            Privacy policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterationForm;
