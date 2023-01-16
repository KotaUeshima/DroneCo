import React, { useEffect, useState } from "react";
import Image from "next/image";
import heroDrone from "../public/assets/HeroDrone.png";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";

function HeroPage() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let currentScroll = window.pageYOffset;
      if (currentScroll !== 0) {
        setShow(false);
      } else {
        setShow(true);
      }
    });
  });
  return (
    <div className="relative min-h-screen w-full bg-gray-100">
      <h2 className="absolute left-0 text-[30vh] sm:text-[35vh] md:text-[40vh] text-white font-medium">
        Drone<span className="text-droneOrange">Co.</span>
      </h2>
      <div className="h-[50vh] w-full flex flex-col justify-end items-center">
        <h2 className="relative z-10 text-2xl md:text-4xl lg:text-7xl font-thin text-droneBlue">
          The Future of Last-Mile Delivery.
        </h2>
        <p className="relative z-10 text-base md:text-lg text-droneBlue py-7 tracking-widest">
          Elevating mobility, one drone at a time.
        </p>
      </div>
      <div className="relative h-[50vh] flex items-center">
        <Image
          src={heroDrone}
          alt="Hero Drone"
          priority={true}
          quality={100}
          fill={true}
          className="object-contain"
        />
      </div>
      <div className="-mt-14 animate-bounce flex justify-center">
        <Link
          to="drone"
          className={`${
            show ? "opacity-100" : "opacity-0"
          } ease-linear duration-500`}
          smooth
          duration={700}
        >
          <AiOutlineDown
            className="cursor-pointer text-droneOrange opacity-100 hover:opacity-75 duration-300"
            size={40}
          />
        </Link>
      </div>
    </div>
  );
}

export default HeroPage;
