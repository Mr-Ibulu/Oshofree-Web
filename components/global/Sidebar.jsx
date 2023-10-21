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
    <div className=" h-full overflow-y-scroll rounded-r-2xl scrollbar-none">
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
              <Link href={"/"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdOutlineHome className="text-2xl" />
                </div>
                <div className="grow">Home</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/login"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdPersonOutline className="text-2xl" />
                </div>
                <div className="grow">Sign In</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/cart"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdOutlineShoppingCart className="text-2xl" />
                </div>
                <div className="grow">Cart</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/account/account-info"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdOutlineManageAccounts className="text-2xl" />
                </div>
                <div className="grow">My Account</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/account/open-orders"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdOutlineShoppingBag className="text-2xl" />
                </div>
                <div className="grow">Orders</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/account/wallet"} className="flex h-12 items-center">
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
              <Link href={"/wishlist"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdFavoriteBorder className="text-2xl" />
                </div>
                <div className="grow">My WishList</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/logout"} className="flex h-12 items-center">
                <div className="w-10">
                  <MdOutlineLogout className="text-2xl" />
                </div>
                <div className="grow">Logout</div>
              </Link>
            </SheetClose>
          </li>
        </ul>
      </StaggerContainer>
      <div className="h-3 bg-gray-200"></div>
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
          <li className="inline-flex h-12 w-full items-center text-lg font-bold">Our Categories</li>
          {findAllRootCategories()
            .flatMap((mainCat) => findSubCategories(mainCat))
            .map((subCat) => (
              <li key={subCat.title}>
                <SheetClose asChild>
                  <Link href={`/${subCat.parent}/${subCat.slug}`} className="flex h-12 items-center">
                    <div className="grow">{subCat.title}</div>
                  </Link>
                </SheetClose>
              </li>
            ))
            .slice(3, 13)}
          <li>
            <SheetClose asChild>
              <Link href={"/categories"} className="flex h-12 items-center">
                <div className="grow font-medium">Browse All Categories</div>
              </Link>
            </SheetClose>
          </li>
        </ul>
      </StaggerContainer>
      <div className="h-3 bg-gray-200"></div>
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
              <Link href={"/sell"} className="flex h-12 items-center">
                <div className="grow">Sell On Oshofree</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/"} className="flex h-12 items-center">
                <div className="grow">Contact Us</div>
              </Link>
            </SheetClose>
          </li>
          <li>
            <SheetClose asChild>
              <Link href={"/"} className="flex h-12 items-center">
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
