"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { MdFavoriteBorder } from "react-icons/md";

const DealActions = ({ dealItem }) => {
  return (
    <>
      <RadioGroup defaultValue="option-one" className="xl:px-5 space-y-3">
        <div className="flex gap-3 shadow hover:shadow-md transition-shadow duration-100 ease-in-out bg-white rounded-xl px-2">
          <RadioGroupItem value="option-one" id="option-one" className="mt-2" aria-label="Service/Product Option One" />
          <Label htmlFor="option-one" className="grow">
            <div>
              <div className="text-base" id="Service/Product Option One">
                Service/Product Option One
              </div>
              <div className="flex gap-4 items-center mt-2">
                <div className="old-price line-through text-gray-500 font-light text-sm">
                  <span>&#8358;{dealItem.prevPrice}</span>
                </div>
                <div className="new-price font-bold text-xl text-red-600">
                  <span>&#8358;{dealItem.newPrice}</span>
                </div>
                <div className="border text-sm bg-red-200 text-red-600 rounded-lg px-2">
                  <span>{Math.trunc(((dealItem.newPrice - dealItem.prevPrice) * 100) / dealItem.prevPrice)}%</span>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div className="flex gap-3 shadow hover:shadow-md transition-shadow duration-100 ease-in-out bg-white rounded-xl px-2">
          <RadioGroupItem value="option-two" id="option-two" className="mt-2" aria-label="Service/Product Option Two" />
          <Label htmlFor="option-two" className="grow">
            <div>
              <div className="text-base" id="Service/Product Option Two">
                Service/Product Option Two
              </div>
              <div className="flex gap-4 items-center mt-2">
                <div className="old-price line-through text-gray-500 font-light text-sm">
                  <span>&#8358;{dealItem.prevPrice}</span>
                </div>
                <div className="new-price font-bold text-xl text-red-600">
                  <span>&#8358;{dealItem.newPrice}</span>
                </div>
                <div className="border text-sm bg-red-200 text-red-600 rounded-lg px-2">
                  <span>{Math.trunc(((dealItem.newPrice - dealItem.prevPrice) * 100) / dealItem.prevPrice)}%</span>
                </div>
              </div>
            </div>
          </Label>
        </div>
        <div className="flex gap-3 shadow hover:shadow-md transition-shadow duration-100 ease-in-out bg-white rounded-xl px-2">
          <RadioGroupItem value="option-three" id="option-three" className="mt-2" aria-label="Service/Product Option Three" />
          <Label htmlFor="option-three" className="grow">
            <div>
              <div className="text-base" id="Service/Product Option Three">
                Service/Product Option Three
              </div>
              <div className="flex gap-4 items-center mt-2">
                <div className="old-price line-through text-gray-500 font-light text-sm">
                  <span>&#8358;{dealItem.prevPrice}</span>
                </div>
                <div className="new-price font-bold text-xl text-red-600">
                  <span>&#8358;{dealItem.newPrice}</span>
                </div>
                <div className="border text-sm bg-red-200 text-red-600 rounded-lg px-2">
                  <span>{Math.trunc(((dealItem.newPrice - dealItem.prevPrice) * 100) / dealItem.prevPrice)}%</span>
                </div>
              </div>
            </div>
          </Label>
        </div>
      </RadioGroup>
      <div className="xl:px-5 mt-10 space-y-4">
        <button className="py-2 border w-full rounded-md font-semibold border-sky-700 bg-sky-700 text-white hover:bg-sky-800 hover:text-white focus:outline-none">
          Buy Now
        </button>
        <button className="py-2 border w-full rounded-md font-semibold border-sky-700 text-sky-700 hover:bg-sky-800 hover:text-white focus:outline-none">
          Add To Cart
        </button>
        <button className="py-2 border w-full rounded-md font-semibold border-sky-700 text-sky-700 hover:bg-sky-800 hover:text-white inline-flex items-center justify-center gap-2 focus:outline-none">
          Save For Later <MdFavoriteBorder className="text-lg" />
        </button>
      </div>
    </>
  );
};

export default DealActions;
