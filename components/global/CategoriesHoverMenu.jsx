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
              <ul className="grid w-[900px] grid-cols-4 gap-5 p-6 ">
                {findSubCategories(rootCat).map((subCat) => (
                  <li key={subCat.title}>
                    <Link
                      href={`/${rootCat.slug}/${subCat.slug}`}
                      className="block py-2 font-semibold transition-transform duration-100 ease-in-out hover:scale-105"
                    >
                      {subCat.title}
                    </Link>
                    <ul className="space-y-1">
                      {findSubCategories(subCat).map((innerCat) => (
                        <li key={innerCat.title}>
                          <Link
                            href={`/${rootCat.slug}/${innerCat.slug}`}
                            className="block py-[1px] font-normal transition-transform duration-100 ease-in-out hover:scale-105"
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
