import React from "react";
import "../globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import ParallexBackgroundImage from "@/components/global/ParallexBackgroundImage";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Oshofree",
  description: "Find The Best Deals And Services Closest To You",
};

const MainLayout = ({ children, auth }) => {
  return (
    <html lang="en" className={plusJakartaSans.className}>
      <body className="overflow-y-auto scroll-smooth subpixel-antialiased scrollbar-track-red-200 scrollbar-thumb-red-500 scrollbar-track-rounded-full scrollbar-thumb-rounded-full xl:scrollbar-thin">
        {/* <ParallexBackgroundImage /> */}
        <Navbar />
        <main>
          {children}
          {auth}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
