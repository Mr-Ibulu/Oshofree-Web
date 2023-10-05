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
        <button className={`${className} flex justify-center items-center gap-2`} aria-label="Change Location">
          <span className="block">{location}</span>
          <span className="">{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className={`max-h-80 py-3 text-sm font-semibold bg-white shadow-lg flex flex-col rounded-xl w-[93vw] sm:w-96 overflow-hidden`}
          sideOffset={5}
        >
          <div className="flex items-center gap-1 px-4">
            <div>{<BiSearch />}</div>
            <div className="grow">
              <input type="text" placeholder="Location" className="w-full text-base p-1 border-none font-light focus:ring-0 focus:outline-none" />
            </div>
          </div>
          <hr className="mt-2" />
          <button className="flex items-center gap-1 hover:bg-gray-200 w-full text-left py-3 px-4 text-red-600">
            <div>
              <BiCurrentLocation />
            </div>
            <div className="grow">Current Location</div>
          </button>
          <div className="overflow-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-red-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full">
            <button className="hover:bg-gray-200 w-full text-left py-2 px-4">Odili Road, PH</button>
            <button className="hover:bg-gray-200 w-full text-left py-2 px-4">Odili Road, PH</button>
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
  );
};

export default LocationPickerRadix;
