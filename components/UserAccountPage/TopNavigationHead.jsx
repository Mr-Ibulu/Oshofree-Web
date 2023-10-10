"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineChevronLeft, MdOutlineClose, MdOutlineSettings } from "react-icons/md";
import StaggerContainer from "../animations/StaggerContainer";

const TopNavigationHead = ({ navGroups, className }) => {
  const pathname = usePathname();
  const router = useRouter();
  const activeGroup = navGroups.find((navGroup) => navGroup.links.find((link) => link.href === pathname));

  return (
    <div className={`${className}`}>
      <div className={`flex items-center`}>
        <div className="font-bold capitalize text-2xl sm:text-3xl [word-spacing:3px] leading-[3rem] flex items-center gap-2">
          {activeGroup ? (
            <>
              <span className="text-4xl sm:text-5xl">{activeGroup?.icon}</span>
              <h1>{activeGroup?.title}</h1>
            </>
          ) : (
            <button className="text-4xl sm:text-5xl pr-2" onClick={() => router.back()}>
              <MdOutlineChevronLeft />
            </button>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-2xl sm:text-3xl ml-auto mr-3 p-2 transition-transform duration-150 ease-in-out active:scale-75">
              <MdOutlineSettings />
            </button>
          </SheetTrigger>
          <SheetContent side={"bottom"} className="w-[100%] rounded-t-2xl px-8 pt-4 pb-8">
            <h2 className="text-2xl font-bold text-center mb-4 border-b pb-2">My Account</h2>
            <SheetClose asChild>
              <button className="text-2xl focus:outline-none absolute top-5 right-5">
                <MdOutlineClose />
              </button>
            </SheetClose>
            <div className="space-y-10 sticky top-0">
              {navGroups.map((navGroup) => (
                <div key={navGroup.title}>
                  <div className="text-lg flex gap-2 items-center font-semibold">
                    <span className="text-3xl">{navGroup.icon}</span>
                    <span>{navGroup.title}</span>
                  </div>
                  <div className="space-y-2 ml-9 mt-2 md:text-sm">
                    {navGroup.links.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link href={`${link.href}`} className={`block ${pathname === `${link.href}` ? "text-sky-700 font-semibold" : ""}`}>
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
          className={"flex xl:hidden gap-2 items-center mb-2 w-full overflow-x-scroll scrollbar-none mt-6"}
        >
          {activeGroup?.links.map((option) => (
            <div
              className={`inline-block border px-2 py-1 text-sm rounded min-w-fit ${
                option.href === pathname ? "border-sky-300 border-2 font-semibold" : ""
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
