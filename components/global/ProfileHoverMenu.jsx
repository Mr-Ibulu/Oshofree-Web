import React from "react";
import Link from "next/link";
import { MdFavoriteBorder, MdOutlineAccountBalanceWallet, MdOutlineLogout, MdOutlineManageAccounts, MdOutlineShoppingBag } from "react-icons/md";

const ProfileHoverMenu = () => {
  return (
    <ul className="font-normal">
      <li>
        <Link href={"/account/account-info"} className="flex h-12 items-center pl-4 pr-8 hover:bg-gray-100">
          <div className="w-10">
            <MdOutlineManageAccounts className="text-2xl" />
          </div>
          <div className="grow">My Account</div>
        </Link>
      </li>
      <li>
        <Link href={"/account/open-orders"} className="flex h-12 items-center pl-4 pr-8 hover:bg-gray-100">
          <div className="w-10">
            <MdOutlineShoppingBag className="text-2xl" />
          </div>
          <div className="grow">Orders</div>
        </Link>
      </li>
      <li>
        <Link href={"/account/wallet"} className="flex h-12 items-center pl-4 pr-8 hover:bg-gray-100">
          <div className="w-10">
            <MdOutlineAccountBalanceWallet className="text-2xl" />
          </div>
          <div className="grow">Wallet</div>
          <div className="text-sm">
            Bal: <span>&#8358;0.00</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href={"/wishlist"} className="flex h-12 items-center pl-4 pr-8 hover:bg-gray-100">
          <div className="w-10">
            <MdFavoriteBorder className="text-2xl" />
          </div>
          <div className="grow">My WishList</div>
        </Link>
      </li>
      <li>
        <Link href={"/logout"} className="flex h-12 items-center pl-4 pr-8 hover:bg-gray-100">
          <div className="w-10">
            <MdOutlineLogout className="text-2xl" />
          </div>
          <div className="grow">Logout</div>
        </Link>
      </li>
    </ul>
  );
};

export default ProfileHoverMenu;
