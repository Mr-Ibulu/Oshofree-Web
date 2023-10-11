"use client";

import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { MdOutlineError } from "react-icons/md";
import Link from "next/link";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const AccountInfoForm = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  return (
    <div>
      <Form.Root>
        <Form.Field className="mb-2 grid" name="firstName">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">First Name</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your First Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter your First Name"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2 grid" name="lastName">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Last Name</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Last Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter your Last Name"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2 grid" name="email">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Email Address</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Email Address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
              type="email"
              placeholder="Enter your Email Address"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2 grid" name="phone">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Phone Number</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Phone Number
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
              type="text"
              placeholder="Enter your Phone Number"
              required
            />
          </Form.Control>
        </Form.Field>
        <div className="mb-3 mt-8 text-xl font-medium sm:text-2xl">Change Password</div>
        <Form.Field className="mb-2 grid" name="password">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Current Password</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your current Password
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <input
                className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter your current Password"
                required
              />
            </Form.Control>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 py-2 text-lg"
              onClick={(e) => {
                e.preventDefault();
                setShowOldPassword(!showOldPassword);
              }}
            >
              {showOldPassword ? <BsEye className="w-9" /> : <BsEyeSlash className="w-9" />}
            </button>
          </div>
        </Form.Field>
        <Link href="" className="mb-2 block text-sm font-medium text-sky-700 hover:underline">
          Forgot Password?
        </Link>
        <Form.Field className="mb-2 grid" name="newPassword">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">New Password</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your new Password
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <input
                className="h-11 w-full appearance-none rounded-full border-2 border-gray-300 px-5 font-medium placeholder:text-xs data-[invalid]:border-red-500 focus:border-sky-500 focus:outline-none focus:ring-0"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your new Password"
                required
              />
            </Form.Control>
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 py-2 text-lg"
              onClick={(e) => {
                e.preventDefault();
                setShowNewPassword(!showNewPassword);
              }}
            >
              {showNewPassword ? <BsEye className="w-9" /> : <BsEyeSlash className="w-9" />}
            </button>
          </div>
        </Form.Field>
        <Form.Submit asChild>
          <button className="mt-7 w-full rounded-full bg-sky-600 py-2 font-medium text-white hover:bg-sky-700">Save Changes</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default AccountInfoForm;
