"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { BiSolidErrorCircle } from "react-icons/bi";
import Link from "next/link";

const VendorForm = ({ showMoreInfoButton = false, className }) => {
  return (
    <div className={`${className} bg-white border shadow-lg shadow-gray-300 p-8 rounded-2xl`}>
      <Form.Root>
        <Form.Field className="grid mb-2" name="business_name">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Form.Label className="text-[15px] font-medium leading-8">Business Name</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <BiSolidErrorCircle className="text-base" /> Please enter your Business Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="business_address">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Form.Label className="text-[15px] font-medium leading-8">Business Address</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <BiSolidErrorCircle className="text-base" /> Please enter your Business Address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <div className="grid sm:grid-cols-2 gap-3 mb-2">
          <Form.Field className="grid mb-2" name="firstName">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">First Name</Form.Label>
              <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your First Name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-2" name="lastName">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">Last Name</Form.Label>
              <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your Last Name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mb-2">
          <Form.Field className="grid mb-2" name="email">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">Email Address</Form.Label>
              <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your Email Address
              </Form.Message>
              <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="typeMismatch">
                <BiSolidErrorCircle className="text-base" /> Please provide a valid Email Address
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none"
                type="email"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-2" name="phone">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">Phone Number</Form.Label>
              <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your Phone Number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
        </div>
        <Form.Field className="grid mb-2" name="business">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Form.Label className="text-[15px] font-medium leading-8">Type Of Business</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <BiSolidErrorCircle className="text-base" /> Please select a category
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select
              className="data-[valid]:border-green-500 data-[invalid]:border-red-500 border-2 border-gray-300 w-full h-10 font-medium px-2 appearance-none rounded-md focus:ring-0 focus:border-gray-300 focus:outline-none bg-transparent"
              type="text"
              defaultValue={""}
              required
            >
              <option disabled={true} value="">
                Choose a Category
              </option>
              <option value="Local">Local experiences (Restaurants, Beauty, Leisure, Products & Services)</option>
              <option value="Tickets">Ticketed Events</option>
              <option value="Travel">Hotels & Travel</option>
            </select>
          </Form.Control>
        </Form.Field>
        <div className="text-xs py-3 text-center">
          <p>By clicking below, I agree to the Terms of Use and that I have read the Privacy Statement.</p>
        </div>
        <Form.Submit asChild>
          <button className="w-full py-3 text-white rounded-full bg-red-500 font-medium focus:outline-none mt-[10px]">Sign Up</button>
        </Form.Submit>
      </Form.Root>
      {showMoreInfoButton && (
        <div className="flex flex-col items-center mt-10 gap-3">
          <p>
            Need more information on <b>Oshofree For Vendors</b>?
          </p>
          <Link
            href={"/sell"}
            className="border block border-red-500 rounded-full px-4 py-1 font-medium hover:bg-red-500 active:scale-95 transition duration-75 hover:text-white"
          >
            Click Here
          </Link>
        </div>
      )}
    </div>
  );
};

export default VendorForm;
