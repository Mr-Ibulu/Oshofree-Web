"use client";
import { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

const LocationPickerRadix = ({ location, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Popover.Root onOpenChange={(e) => setIsOpen(e)}>
      <Popover.Trigger asChild>
        <button className={`${className} flex items-center justify-center gap-2`} aria-label="Change Location">
          <span className="block">{location}</span>
          <span className="">{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={`flex max-h-80 w-[93vw] flex-col overflow-hidden rounded-xl bg-white py-3 text-sm font-semibold shadow-lg sm:w-96`}
          sideOffset={5}
        >
          <div className="flex items-center gap-1 px-4">
            <div>{<BiSearch />}</div>
            <div className="grow">
              <input type="text" placeholder="Location" className="w-full border-none p-1 text-base font-light focus:outline-none focus:ring-0" />
            </div>
          </div>
          <hr className="mt-2" />
          <button className="flex w-full items-center gap-1 px-4 py-3 text-left text-red-600 hover:bg-gray-200">
            <div>
              <BiCurrentLocation />
            </div>
            <div className="grow">Current Location</div>
          </button>
          <div className="overflow-auto scrollbar-thin scrollbar-track-red-200 scrollbar-thumb-red-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
            <button className="w-full px-4 py-2 text-left hover:bg-gray-200">Odili Road, PH</button>
            <button className="w-full px-4 py-2 text-left hover:bg-gray-200">Odili Road, PH</button>
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
  );
};

export default LocationPickerRadix;
