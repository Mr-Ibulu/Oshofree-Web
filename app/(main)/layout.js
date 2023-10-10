import React from "react";
import "../globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import SnapView from "@/components/global/SnapView";

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
      <body className="scrollbar-none before:block before:bg-red-500 before:h-[1px] subpixel-antialiased">
        <SnapView>
          <Navbar />
          {children}
          {auth}
          <Footer />
        </SnapView>
      </body>
    </html>
  );
};

export default MainLayout;
