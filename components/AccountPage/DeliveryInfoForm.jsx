"use client";

import React from "react";
import * as Form from "@radix-ui/react-form";
import { MdKeyboardArrowDown, MdOutlineError } from "react-icons/md";

const DeliveryInfoForm = () => {
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
        <Form.Field className="grid mb-2" name="address">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">Delivery Address</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please enter your Delivery Address
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
              type="text"
              placeholder="Enter your Delivery Address"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-2" name="state">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">State</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please choose your State
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <select
                className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
                type="text"
                defaultValue={""}
                required
              >
                <option disabled={true} value="">
                  Choose State
                </option>
                <option value="lagos">Lagos</option>
                <option value="port-harcourt">Rivers</option>
              </select>
            </Form.Control>
            <span className="absolute top-1/2 -translate-y-1/2 right-3 text-2xl">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </Form.Field>
        <Form.Field className="grid mb-2" name="city">
          <div className="flex flex-col">
            <Form.Label className="text-sm font-medium leading-8">City</Form.Label>
            <Form.Message className="text-xs font-medium text-red-500 flex items-center gap-1" match="valueMissing">
              <MdOutlineError className="text-sm" /> Please choose your City
            </Form.Message>
          </div>
          <div className="relative">
            <Form.Control asChild>
              <select
                className="data-[invalid]:border-red-500 border-2 border-gray-300 placeholder:text-xs w-full h-11 font-medium px-5 appearance-none rounded-full focus:ring-0 focus:border-sky-500 focus:outline-none"
                type="text"
                defaultValue=""
                required
              >
                <option disabled={true} value="">
                  Choose City
                </option>
                <option value="lagos">Lagos</option>
                <option value="port-harcourt">Port Harcourt</option>
              </select>
            </Form.Control>
            <span className="absolute top-1/2 -translate-y-1/2 right-3 text-2xl">
              <MdKeyboardArrowDown />
            </span>
          </div>
        </Form.Field>
        <Form.Submit asChild>
          <button className="bg-sky-600 hover:bg-sky-700 text-white w-full py-2 rounded-full mt-7 font-medium">Save Changes</button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default DeliveryInfoForm;
