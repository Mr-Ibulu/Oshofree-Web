"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ href, title }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${href}`}
      className={`block hover:scale-105 transition-transform duration-100 ease-linear ${pathname === `${href}` ? "text-sky-700 font-semibold" : ""}`}
    >
      {title}
    </Link>
  );
};

export default NavigationLink;
