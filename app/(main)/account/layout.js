import React from "react";
import Link from "next/link";
import SnapSection from "@/components/global/SnapSection";
import FadeInFromSides from "@/components/animations/FadeInFromSides";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineAccountCircle,
  MdOutlineChevronRight,
  MdOutlinePersonOff,
  MdOutlineShoppingBag,
} from "react-icons/md";
import NavigationLink from "@/components/UserAccountPage/NavigationLink";
import TopNavigationHead from "@/components/UserAccountPage/TopNavigationHead";

const navigationLinkGroups = [
  {
    title: "My Profile",
    icon: <MdOutlineAccountCircle />,
    links: [
      { name: "Account Information", href: "/account/account-info" },
      { name: "Delivery Address", href: "/account/delivery-info" },
      { name: "Email Preferences", href: "/account/email-preferences" },
    ],
  },
  {
    title: "Orders",
    icon: <MdOutlineShoppingBag />,
    links: [
      { name: "Open Orders", href: "/account/open-orders" },
      { name: "Closed Orders", href: "/account/closed-orders" },
      { name: "Completed Orders", href: "/account/completed-orders" },
    ],
  },
  {
    title: "My Wallet",
    icon: <MdOutlineAccountBalanceWallet />,
    links: [{ name: "Wallet Information", href: "/account/wallet" }],
  },
  {
    title: "Delete Account",
    icon: <MdOutlinePersonOff />,
    links: [{ name: "Delete Account", href: "/account/deleteAccount" }],
  },
];

const AccountInfoLayout = ({ children }) => {
  return (
    <SnapSection nextSectionTitle={"Footer"} className="pt-20">
      <div className="px-6 py-3 lg:px-28 xl:px-32 2xl:px-14 max-w-[1328px] mx-auto">
        <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.5}>
          <nav className="text-sm flex mb-7">
            {["Home", "Account"].map((breadcrumb, index, arr) => (
              <div className="inline-flex items-center text-blue-900" key={index}>
                <Link href={""} className="hover:underline">
                  {breadcrumb}
                </Link>
                {index !== arr.length - 1 ? <MdOutlineChevronRight className="text-lg mx-2" /> : ""}
              </div>
            ))}
          </nav>
        </FadeInFromSides>
        <FadeInFromSides reapeat={true} duration={0.7} yOffset={20} viewportAmount={0.1} delay={0.2} className="mb-6 hidden md:block">
          <div className="font-bold capitalize text-4xl mb-6 [word-spacing:3px] leading-[3rem]">
            <h1>My Account</h1>
          </div>
        </FadeInFromSides>
        <div className="flex flex-col md:flex-row gap-5 min-h-[650px]">
          <FadeInFromSides duration={0.7} yOffset={20} viewportAmount={0} delay={0.3} className=" md:hidden">
            <TopNavigationHead navGroups={navigationLinkGroups} />
          </FadeInFromSides>
          <FadeInFromSides
            duration={0.7}
            yOffset={20}
            viewportAmount={0}
            delay={0.3}
            className="basis-[35%] xl:basis-[25%] hidden md:block px-3 py-5 shadow-lg bg-white rounded-lg"
          >
            <div className="space-y-10 sticky top-0">
              {navigationLinkGroups.map((navGroup) => (
                <div key={navGroup.title}>
                  <div className="text-lg flex gap-2 items-center font-semibold">
                    <span className="text-3xl">{navGroup.icon}</span>
                    <span>{navGroup.title}</span>
                  </div>
                  <div className="space-y-2 ml-9 mt-2 text-sm">
                    {navGroup.links.map((link) => (
                      <NavigationLink href={link.href} title={link.name} key={link.href} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeInFromSides>
          <FadeInFromSides
            duration={0.7}
            yOffset={20}
            viewportAmount={0}
            delay={0.4}
            className="md:basis-[65%] xl:basis-[75%] p-5 shadow-xl bg-white grow border rounded-lg overflow-y-auto"
          >
            {children}
          </FadeInFromSides>
        </div>
      </div>
    </SnapSection>
  );
};

export default AccountInfoLayout;
