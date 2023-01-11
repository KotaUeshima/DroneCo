import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import logoWithText from "../public/assets/logoWithText.png";

function NavBar({ scrollUp, topOfPage }) {
  return (
    <div
      className={`fixed ${
        scrollUp ? "translate-y-0" : "-translate-y-[135%]"
      } ease-in-out duration-500 h-16 w-full mx-auto z-30`}
    >
      <div
        className={`flex justify-between items-center rounded-xl ${
          topOfPage
            ? "w-full mt-0 bg-transparent text-white"
            : "w-[70vw] mt-5 bg-white text-droneBlue"
        } mx-auto h-full px-2 drop-shadow-xl transition-all ease-in-out duration-300`}
      >
        <div className="pl-4">
          <Link href="/">
            <Image src={logoWithText} alt="logo" width="125" />
          </Link>
        </div>
        <Sidebar scrollUp={scrollUp} topOfPage={topOfPage} />
      </div>
    </div>
  );
}

export default NavBar;
