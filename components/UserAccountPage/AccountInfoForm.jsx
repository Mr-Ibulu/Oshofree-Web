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
        <div className="text-xl sm:text-2xl font-medium mt-8 mb-3">Change Password</div>
        <Form.Field className="grid mb-2" name="password">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Current Password</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your current Password
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <input
                className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter your current Password"
                required
              />
            </Form.Control>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-3 text-lg py-2"
              onClick={(e) => {
                e.preventDefault();
                setShowOldPassword(!showOldPassword);
              }}
            >
              {showOldPassword ? <BsEye className="w-9" /> : <BsEyeSlash className="w-9" />}
            </button>
          </div>
        </Form.Field>
        <Link href="" className="block text-sky-700 mb-2 font-medium text-sm hover:underline">
          Forgot Password?
        </Link>
        <Form.Field className="grid mb-2" name="newPassword">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">New Password</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your new Password
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <input
                className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter your new Password"
                required
              />
            </Form.Control>
            <button
              className="absolute top-1/2 -translate-y-1/2 right-3 text-lg py-2"
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
          <button className="bg-sky-600 hover:bg-sky-700 text-white w-full py-2 rounded-full mt-7 font-medium">Save Changes</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default AccountInfoForm;
