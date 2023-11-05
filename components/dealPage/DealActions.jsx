"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MdFavoriteBorder } from "react-icons/md";

const DealActions = ({ dealItem }) => {
  return (
    <>
      <RadioGroup defaultValue="option-one" className="space-y-3 xl:px-5">
        <div className="flex gap-3 rounded-xl bg-white px-2 shadow transition-shadow duration-100 ease-in-out hover:shadow-md">
          <RadioGroupItem value="option-one" id="option-one" className="mt-2" aria-label="Service/Product Option One" />
          <Label htmlFor="option-one" className="grow">
            <div>
              <div className="text-base" id="Service/Product Option One">
                Service/Product Option One
              </div>
              <div className="mt-2 flex items-center gap-4">
                <div className="old-price text-sm font-light text-gray-500 line-through">
                  <span>&#8358;{dealItem.prevPrice}</span>
                </div>
                <div className="new-price text-xl font-bold text-red-600">
                  <span>&#8358;{dealItem.newPrice}</span>
                </div>
                <div className="rounded-lg border bg-red-200 px-2 text-sm text-red-600">
                  <span>{Math.trunc(((dealItem.newPrice - dealItem.prevPrice) * 100) / dealItem.prevPrice)}%</span>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div className="flex gap-3 rounded-xl bg-white px-2 shadow transition-shadow duration-100 ease-in-out hover:shadow-md">
          <RadioGroupItem value="option-two" id="option-two" className="mt-2" aria-label="Service/Product Option Two" />
          <Label htmlFor="option-two" className="grow">
            <div>
              <div className="text-base" id="Service/Product Option Two">
                Service/Product Option Two
              </div>
              <div className="mt-2 flex items-center gap-4">
                <div className="old-price text-sm font-light text-gray-500 line-through">
                  <span>&#8358;{dealItem.prevPrice}</span>
                </div>
                <div className="new-price text-xl font-bold text-red-600">
                  <span>&#8358;{dealItem.newPrice}</span>
                </div>
                <div className="rounded-lg border bg-red-200 px-2 text-sm text-red-600">
                  <span>{Math.trunc(((dealItem.newPrice - dealItem.prevPrice) * 100) / dealItem.prevPrice)}%</span>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div className="flex gap-3 rounded-xl bg-white px-2 shadow transition-shadow duration-100 ease-in-out hover:shadow-md">
          <RadioGroupItem value="option-three" id="option-three" className="mt-2" aria-label="Service/Product Option Three" />
          <Label htmlFor="option-three" className="grow">
            <div>
              <div className="text-base" id="Service/Product Option Three">
                Service/Product Option Three
              </div>
              <div className="mt-2 flex items-center gap-4">
                <div className="old-price text-sm font-light text-gray-500 line-through">
                  <span>&#8358;{dealItem.prevPrice}</span>
                </div>
                <div className="new-price text-xl font-bold text-red-600">
                  <span>&#8358;{dealItem.newPrice}</span>
                </div>
                <div className="rounded-lg border bg-red-200 px-2 text-sm text-red-600">
                  <span>{Math.trunc(((dealItem.newPrice - dealItem.prevPrice) * 100) / dealItem.prevPrice)}%</span>
                </div>
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>
      <div className="mt-10 space-y-4 xl:px-5">
        <button className="w-full h-12 rounded-md border border-sky-700 bg-sky-700 py-2 font-semibold text-white hover:bg-sky-800 hover:text-white focus:outline-none">
          Buy Now
        </button>
        <button className="w-full h-12 rounded-md border border-sky-700 py-2 font-semibold text-sky-700 hover:bg-sky-800 hover:text-white focus:outline-none">
          Add To Cart
        </button>
        <button className="inline-flex w-full h-12 items-center justify-center gap-2 rounded-md border border-sky-700 py-2 font-semibold text-sky-700 hover:bg-sky-800 hover:text-white focus:outline-none">
          Save For Later <MdFavoriteBorder className="text-lg" />
        </button>
      </div>
    </>
  );
};

export default DealActions;
