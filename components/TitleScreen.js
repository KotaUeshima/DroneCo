import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-scroll";
import Image from "next/image";
import droneImage from "../public/assets/dronecoDrone.png";

function TitleScreen() {
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
    <div className="h-screen w-full bg-droneBlue">
      <div className="flex flex-row w-full h-[97vh]">
        <div className="flex flex-col justify-center p-24 max-w-[50vw]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-base text-white">
            The Future of Last-Mile Delivery.
          </h2>
          <p className="text-white py-7">
            Elevating mobility, one drone at a time.
          </p>

          <button className="hover:bg-transparent px-1 py-3 w-1/2 rounded-xl hover:text-white text-white bg-droneOrange border-[1px] hover:border-[1px] border-droneOrange hover:border-white duration-500">
            Partner With DroneCo
          </button>
        </div>
        <div className="relative w-[50vw]">
          <Image
            src={droneImage}
            alt="Image Of Drone"
            priority={true}
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
      <div className="-mt-10 animate-bounce flex justify-center">
        <Link
          to="product"
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

export default TitleScreen;
