import React, { useState } from "react";
import Image from "next/image";
import droneImage from "../public/assets/droneImage.jpg";
import { FaPlay } from "react-icons/fa";
import { BiExitFullscreen } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

function Video() {
  const { ref, inView } = useInView();

  const [open, setOpen] = useState(false);
  const src = "https://www.youtube.com/embed/NcBjx_eyvxc?autoplay=1&rel=0";

  return (
    <div className="w-full h-[80vh] mt-10 mb-20 ">
      <div className="relative max-w-6xl flex justify-center items-center mx-auto h-full py-6">
        <Image
          ref={ref}
          src={droneImage}
          fill={true}
          objectFit="cover"
          alt="Image Of Drone"
          className={`rounded-3xl ${
            inView ? "scale-100" : "scale-50"
          } ease-in-out duration-1000`}
        />
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="z-20 p-7 bg-gray-50 opacity-50 rounded-full hover:bg-white hover:opacity-100 ease-linear duration-300"
        >
          <FaPlay size={60} />
        </div>
      </div>
      {open ? (
        <div className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title="Youtube Player"
            frameborder="0"
            allow="autoplay"
          />
          <BiExitFullscreen
            size={50}
            onClick={() => {
              setOpen(!open);
            }}
            className="absolute p-2 z-40 right-0 text-white opacity-50 hover:opacity-100 cursor-pointer"
          />
        </div>
      ) : null}
    </div>
  );
}

export default Video;
