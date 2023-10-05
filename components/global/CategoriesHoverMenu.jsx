"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { findAllRootCategories, findSubCategories } from "@/lib/utils";

const CategoriesHoverMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {findAllRootCategories().map((rootCat) => (
          <NavigationMenuItem key={rootCat.title}>
            <Link href={`/${rootCat.slug}`}>
              <NavigationMenuTrigger className="font-bold">{rootCat.title}</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid gap-5 grid-cols-4 p-6 w-[900px] ">
                {findSubCategories(rootCat).map((subCat) => (
                  <li key={subCat.title}>
                    <Link
                      href={`/${rootCat.slug}/${subCat.slug}`}
                      className="font-semibold block py-2 hover:scale-105 transition-transform duration-100 ease-in-out"
                    >
                      {subCat.title}
                    </Link>
                    <ul className="space-y-1">
                      {findSubCategories(subCat).map((innerCat) => (
                        <li key={innerCat.title}>
                          <Link
                            href={`/${rootCat.slug}/${innerCat.slug}`}
                            className="font-normal block py-[1px] hover:scale-105 transition-transform duration-100 ease-in-out"
                          >
                            {innerCat.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoriesHoverMenu;
