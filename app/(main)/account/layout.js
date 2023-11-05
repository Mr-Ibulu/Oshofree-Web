import React from "react";
import Link from "next/link";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineAccountCircle,
  MdOutlineChevronRight,
  MdOutlinePersonOff,
  MdOutlineShoppingBag,
} from "react-icons/md";
import NavigationLink from "@/components/UserAccountPage/NavigationLink";
import TopNavigationHead from "@/components/UserAccountPage/TopNavigationHead";
import StaggerContainer from "@/components/animations/StaggerContainer";
import Section from "@/components/global/Section";

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
    <Section>
      <div className="mx-auto max-w-[1328px] px-6 pb-20 lg:px-8 xl:px-32 2xl:px-14">
        <StaggerContainer selector=".stagger" viewportAmount={0.1} repeat={true} yOffset={20} duration={0.5} staggerChildren={0.12} delayChildren={0}>
          <nav className="stagger mb-7 flex text-sm">
            {["Home", "Account"].map((breadcrumb, index, arr) => (
              <div className="inline-flex items-center text-blue-900" key={index}>
                <Link href={""} className="hover:underline">
                  {breadcrumb}
                </Link>
                {index !== arr.length - 1 ? <MdOutlineChevronRight className="mx-2 text-lg" /> : ""}
              </div>
            ))}
          </nav>
          <h1 className="stagger mb-8 hidden text-4xl font-bold capitalize leading-[3rem] [word-spacing:3px] md:block">My Account</h1>
          <div className="flex min-h-[650px] flex-col gap-5 md:flex-row">
            <TopNavigationHead navGroups={navigationLinkGroups} className={"stagger md:hidden"} />
            <div className="stagger hidden basis-[35%] rounded-lg bg-white px-3 py-5 shadow-lg md:block xl:basis-[25%]">
              <div className="sticky top-20 space-y-10">
                {navigationLinkGroups.map((navGroup) => (
                  <div key={navGroup.title}>
                    <div className="flex items-center gap-2 text-lg font-semibold">
                      <span className="text-3xl">{navGroup.icon}</span>
                      <span>{navGroup.title}</span>
                    </div>
                    <div className="ml-9 mt-2 space-y-2 text-sm">
                      {navGroup.links.map((link) => (
                        <NavigationLink href={link.href} title={link.name} key={link.href} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="stagger grow overflow-y-auto rounded-lg border bg-white p-5 shadow-xl md:basis-[65%] xl:basis-[75%]">{children}</div>
          </div>
        </StaggerContainer>
      </div>
    </Section>
  );
};

export default AccountInfoLayout;
