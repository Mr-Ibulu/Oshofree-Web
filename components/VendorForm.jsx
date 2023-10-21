"use client";
import React from "react";
import * as Form from "@radix-ui/react-form";
import { BiSolidErrorCircle } from "react-icons/bi";
import Link from "next/link";

const VendorForm = ({ showMoreInfoButton = false, className = "" }) => {
  return (
    <div className={`${className} rounded-2xl border bg-white p-8 shadow-lg shadow-gray-300`}>
      <Form.Root>
        <Form.Field className="mb-2 grid" name="business_name">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Form.Label className="text-[15px] font-medium leading-8">Business Name</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <BiSolidErrorCircle className="text-base" /> Please enter your Business Name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="mb-2 grid" name="business_address">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Form.Label className="text-[15px] font-medium leading-8">Business Address</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <BiSolidErrorCircle className="text-base" /> Please enter your Business Address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <div className="mb-2 grid gap-3 sm:grid-cols-2">
          <Form.Field className="mb-2 grid" name="firstName">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">First Name</Form.Label>
              <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your First Name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-2 grid" name="lastName">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">Last Name</Form.Label>
              <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your Last Name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
        </div>
        <div className="mb-2 grid gap-3 sm:grid-cols-2">
          <Form.Field className="mb-2 grid" name="email">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">Email Address</Form.Label>
              <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your Email Address
              </Form.Message>
              <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="typeMismatch">
                <BiSolidErrorCircle className="text-base" /> Please provide a valid Email Address
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
                type="email"
                required
              />
            </Form.Control>
          </Form.Field>
          <Form.Field className="mb-2 grid" name="phone">
            <div className="flex flex-col justify-between">
              <Form.Label className="text-[15px] font-medium leading-8">Phone Number</Form.Label>
              <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
                <BiSolidErrorCircle className="text-base" /> Please enter your Phone Number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
                type="text"
                required
              />
            </Form.Control>
          </Form.Field>
        </div>
        <Form.Field className="mb-2 grid" name="business">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <Form.Label className="text-[15px] font-medium leading-8">Type Of Business</Form.Label>
            <Form.Message className="flex items-center gap-1 text-xs font-medium text-red-500" match="valueMissing">
              <BiSolidErrorCircle className="text-base" /> Please select a category
            </Form.Message>
          </div>
          <Form.Control asChild>
            <select
              className="h-10 w-full appearance-none rounded-md border-2 border-gray-300 bg-transparent px-2 font-medium data-[invalid]:border-red-500 data-[valid]:border-green-500 focus:border-gray-300 focus:outline-none focus:ring-0"
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
        <div className="py-3 text-center text-xs">
          <p>By clicking below, I agree to the Terms of Use and that I have read the Privacy Statement.</p>
        </div>
        <Form.Submit asChild>
          <button className="mt-[10px] w-full rounded-full bg-red-500 py-3 font-medium text-white focus:outline-none">Sign Up</button>
        </Form.Submit>
      </Form.Root>
      {showMoreInfoButton && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <p>
            Need more information on <b>Oshofree For Vendors</b>?
          </p>
          <Link
            href={"/sell"}
            className="block rounded-full border border-red-500 px-4 py-1 font-medium transition duration-75 hover:bg-red-500 hover:text-white active:scale-95"
          >
            Click Here
          </Link>
        </div>
      )}
    </div>
  );
};

export default VendorForm;
