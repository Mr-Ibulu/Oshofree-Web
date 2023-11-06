"use client";

import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { MdOutlineLocationOn, MdSearch } from "react-icons/md";

const SearchbarHeader = () => {
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);

  return (
    <div className="mx-auto mb-6 flex h-10 items-center gap-2 overflow-hidden rounded-full border-2 border-gray-300 bg-white px-4 font-medium sm:h-10 sm:w-[80%] xl:w-[70%] 2xl:w-[60%]">
      <div className="w-5 text-2xl">
        <MdSearch />
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search Oshofree"
        className="flex-grow appearance-none bg-transparent focus:border-none focus:outline-none focus:ring-0"
      />
      <Popover.Root onOpenChange={(e) => setLocationPickerOpen(e)}>
        <Popover.Trigger asChild>
          <button
            className="inline-flex max-w-[30%] items-center space-x-2 before:mr-1 before:block before:h-[25px] before:w-[1px] before:bg-gray-400 focus:outline-none sm:max-w-[40%]"
            aria-label="Change Location"
          >
            <div className="w-5 text-lg">
              <MdOutlineLocationOn />
            </div>
            <span className="truncate text-sm">Port Harcourt</span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            className={`flex max-h-80 w-[93vw] flex-col overflow-hidden rounded-xl bg-white py-3 text-sm font-semibold shadow-lg sm:w-96`}
            sideOffset={10}
          >
            <div className="flex items-center gap-1 px-4">
              <MdSearch className="text-lg" />
              <div className="grow">
                <input type="text" placeholder="Location" className="w-full border-none p-1 text-base font-light focus:outline-none focus:ring-0" />
              </div>
            </div>
            <hr className="mt-2" />
            <button className="flex w-full items-center gap-1 px-4 py-3 text-left text-red-600 hover:bg-gray-200 focus:outline-none">
              <div>
                <BiCurrentLocation />
              </div>
              <div className="grow">Current Location</div>
            </button>
            <div className="overflow-auto scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200 focus:outline-none">Odili Road, PH</button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-200 focus:outline-none">Odili Road, PH</button>
            </div>
            <Popover.Close
              className="absolute right-[5px] top-[5px] inline-flex h-[25px] w-[25px] cursor-default items-center justify-center rounded-full outline-none"
              aria-label="Close"
            >
              <GrClose />
            </Popover.Close>
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default SearchbarHeader;
