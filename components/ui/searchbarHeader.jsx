"use client";

import * as Popover from "@radix-ui/react-popover";
import React, { useState } from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { MdOutlineLocationOn, MdSearch } from "react-icons/md";

const SearchbarHeader = () => {
  const [locationPickerOpen, setLocationPickerOpen] = useState(false);

  return (
    <div className="mx-auto mb-6 bg-white sm:w-[80%] xl:w-[70%] 2xl:w-[60%] border-2 overflow-hidden border-gray-300 h-9 sm:h-10 font-medium rounded-full flex items-center gap-2 px-4">
      <div className="text-2xl w-5">
        <MdSearch />
      </div>
      <input
        type="text"
        name="search"
        placeholder="Search Oshofree"
        className="appearance-none focus:ring-0 focus:border-none focus:outline-none flex-grow bg-transparent"
      />
      <Popover.Root onOpenChange={(e) => setLocationPickerOpen(e)}>
        <Popover.Trigger asChild>
          <button
            className="max-w-[30%] sm:max-w-[40%] focus:outline-none inline-flex items-center space-x-2 before:w-[1px] before:h-[25px] before:mr-1 before:bg-gray-400 before:block"
            aria-label="Change Location"
          >
            <div className="w-5 text-lg">
              <MdOutlineLocationOn />
            </div>
            <span className="text-sm truncate">Port Harcourt</span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            className={`max-h-80 py-3 text-sm font-semibold bg-white shadow-lg flex flex-col rounded-xl w-[93vw] sm:w-96 overflow-hidden`}
            sideOffset={10}
          >
            <div className="flex items-center gap-1 px-4">
              <MdSearch className="text-lg" />
              <div className="grow">
                <input type="text" placeholder="Location" className="w-full text-base p-1 border-none font-light focus:ring-0 focus:outline-none" />
              </div>
            </div>
            <hr className="mt-2" />
            <button className="flex items-center gap-1 focus:outline-none hover:bg-gray-200 w-full text-left py-3 px-4 text-red-600">
              <div>
                <BiCurrentLocation />
              </div>
              <div className="grow">Current Location</div>
            </button>
            <div className="overflow-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
              <button className="hover:bg-gray-200 w-full text-left py-2 focus:outline-none px-4">Odili Road, PH</button>
              <button className="hover:bg-gray-200 w-full text-left py-2 focus:outline-none px-4">Odili Road, PH</button>
            </div>
            <Popover.Close
              className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center absolute top-[5px] right-[5px] outline-none cursor-default"
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
