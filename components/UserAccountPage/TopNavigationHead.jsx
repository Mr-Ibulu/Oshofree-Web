"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineChevronLeft, MdOutlineClose, MdOutlineSettings } from "react-icons/md";
import StaggerContainer from "../animations/StaggerContainer";

const TopNavigationHead = ({ navGroups, className = "" }) => {
  const pathname = usePathname();
  const router = useRouter();
  const activeGroup = navGroups.find((navGroup) => navGroup.links.find((link) => link.href === pathname));

  return (
    <div className={`${className}`}>
      <div className={`flex items-center`}>
        <div className="flex items-center gap-2 text-2xl font-bold capitalize leading-[3rem] [word-spacing:3px] sm:text-3xl">
          {activeGroup ? (
            <>
              <span className="text-4xl sm:text-5xl">{activeGroup?.icon}</span>
              <h1>{activeGroup?.title}</h1>
            </>
          ) : (
            <button className="pr-2 text-4xl sm:text-5xl" onClick={() => router.back()}>
              <MdOutlineChevronLeft />
            </button>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="ml-auto mr-3 p-2 text-2xl transition-transform duration-150 ease-in-out active:scale-75 sm:text-3xl">
              <MdOutlineSettings />
            </button>
          </SheetTrigger>
          <SheetContent side={"bottom"} className="w-[100%] rounded-t-2xl px-8 pb-8 pt-4">
            <h2 className="mb-4 border-b pb-2 text-center text-2xl font-bold">My Account</h2>
            <SheetClose asChild>
              <button className="absolute right-5 top-5 text-2xl focus:outline-none">
                <MdOutlineClose />
              </button>
            </SheetClose>
            <div className="sticky top-0 space-y-10">
              {navGroups.map((navGroup) => (
                <div key={navGroup.title}>
                  <div className="flex items-center gap-2 text-lg font-semibold">
                    <span className="text-3xl">{navGroup.icon}</span>
                    <span>{navGroup.title}</span>
                  </div>
                  <div className="ml-9 mt-2 space-y-2 md:text-sm">
                    {navGroup.links.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={`${link.href}`} className={`block ${pathname === `${link.href}` ? "font-semibold text-sky-700" : ""}`}>
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {activeGroup && (
        <StaggerContainer
          viewportAmount={0.8}
          repeat={true}
          xOffset={20}
          duration={0.8}
          staggerChildren={0.08}
          delayChildren={0.3}
          dependencies={[activeGroup]}
          className={"mb-2 mt-6 flex w-full items-center gap-2 overflow-x-scroll scrollbar-none xl:hidden"}
        >
          {activeGroup?.links.map((option) => (
            <div
              className={`inline-block min-w-fit rounded border px-2 py-1 text-sm ${
                option.href === pathname ? "border-2 border-sky-300 font-semibold" : ""
              }`}
              key={option.name}
            >
              <Link href={option.href}>{option.name}</Link>
            </div>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
};

export default TopNavigationHead;
