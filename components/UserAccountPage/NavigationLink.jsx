"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${href}`}
      className={`block transition-transform duration-100 ease-linear hover:scale-105 ${pathname === `${href}` ? "font-semibold text-sky-700" : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavigationLink;
