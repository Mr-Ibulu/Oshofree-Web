import React from "react";
import {
  MdPersonOutline,
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdOutlineHome,
  MdOutlineManageAccounts,
  MdOutlineAccountBalanceWallet,
  MdOutlineShoppingBag,
  MdOutlineLogout,
} from "react-icons/md";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";
import { findAllRootCategories, findSubCategories } from "@/lib/utils";
import StaggerContainer from "../animations/StaggerContainer";

const Sidebar = () => {
  return (
    <div className=" overflow-y-scroll rounded-r-2xl h-full scrollbar-none">
      <StaggerContainer
        selector="li"
        viewportAmount={0.2}
        repeat={true}
        xOffset={-100}
        duration={0.45}
        staggerChildren={0.02}
        delayChildren={0.1}
        className={"bg-white px-4 pt-4"}
      >
        <ul>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/"} className="flex items-center h-12">
                <div className="w-10">
                  <MdOutlineHome className="text-2xl" />
                </div>
                <div className="grow">Home</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/login"} className="flex items-center h-12">
                <div className="w-10">
                  <MdPersonOutline className="text-2xl" />
                </div>
                <div className="grow">Sign In</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/cart"} className="flex items-center h-12">
                <div className="w-10">
                  <MdOutlineShoppingCart className="text-2xl" />
                </div>
                <div className="grow">Cart</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/account/account-info"} className="flex items-center h-12">
                <div className="w-10">
                  <MdOutlineManageAccounts className="text-2xl" />
                </div>
                <div className="grow">My Account</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/account/open-orders"} className="flex items-center h-12">
                <div className="w-10">
                  <MdOutlineShoppingBag className="text-2xl" />
                </div>
                <div className="grow">Orders</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/account/wallet"} className="flex items-center h-12">
                <div className="w-10">
                  <MdOutlineAccountBalanceWallet className="text-2xl" />
                </div>
                <div className="grow">Wallet</div>
                <div className="text-sm">
                  Bal: <span>&#8358;0.00</span>
                </div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/wishlist"} className="flex items-center h-12">
                <div className="w-10">
                  <MdFavoriteBorder className="text-2xl" />
                </div>
                <div className="grow">My WishList</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/logout"} className="flex items-center h-12">
                <div className="w-10">
                  <MdOutlineLogout className="text-2xl" />
                </div>
                <div className="grow">Logout</div>
              </Link>
            </SheetClose>
          </li>
        </ul>
      </StaggerContainer>
      <div className="bg-gray-200 h-3"></div>
      <StaggerContainer
        selector="li"
        viewportAmount={0.2}
        repeat={true}
        xOffset={-100}
        duration={0.45}
        staggerChildren={0.02}
        delayChildren={0.25}
        className={"bg-white px-4 pt-4"}
      >
        <ul>
          <li className="text-lg font-bold h-12 inline-flex items-center w-full">Our Categories</li>
          {findAllRootCategories()
            .flatMap((mainCat) => findSubCategories(mainCat))
            .map((subCat) => (
              <li key={subCat.title}>
                <SheetClose asChild>
                  <Link scroll={false} href={`/${subCat.parent}/${subCat.slug}`} className="flex items-center h-12">
                    <div className="grow">{subCat.title}</div>
                  </Link>
                </SheetClose>
              </li>
            ))
            .slice(3, 13)}
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/categories"} className="flex items-center h-12">
                <div className="grow font-medium">Browse All Categories</div>
              </Link>
            </SheetClose>
          </li>
        </ul>
      </StaggerContainer>
      <div className="bg-gray-200 h-3"></div>
      <StaggerContainer
        selector="li"
        viewportAmount={0.2}
        repeat={true}
        xOffset={-100}
        duration={0.45}
        staggerChildren={0.02}
        delayChildren={0.25}
        className={"bg-white px-4 pt-4"}
      >
        <ul>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/sell"} className="flex items-center h-12">
                <div className="grow">Sell On Oshofree</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/"} className="flex items-center h-12">
                <div className="grow">Contact Us</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link scroll={false} href={"/"} className="flex items-center h-12">
                <div className="grow">Blog</div>
              </Link>
            </SheetClose>
          </li>
        </ul>
      </StaggerContainer>
    </div>
  );
};

export default Sidebar;
