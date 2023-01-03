import Image from "next/image";
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import logo from "../public/assets/logo.png";

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
            <Image src={logo} alt="logo" width="35" height="35" />
          </Link>
        </div>
        <h2 className="text-xl">DroneCo</h2>
        <Sidebar scrollUp={scrollUp} topOfPage={topOfPage} />
      </div>
    </div>
  );
}

export default NavBar;
