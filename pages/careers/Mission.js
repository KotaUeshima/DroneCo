import React from "react";
import Image from "next/image";
import droneImage from "../../public/assets/yellowDroneInSky.png";

function Mission() {
  return (
    <div className="min-h-screen w-full">
      <Image
        src={droneImage}
        alt="Picture of Drone"
        quality={100}
        placeholder="blur"
        priority={true}
        className="h-[75vh] object-cover"
      />
      <div className="w-[75vw] ml-[12.5vw] -mt-20 px-5 md:px-20 py-10 absolute bg-droneBlue rounded-md">
        <h2 className="font-extralight text-sm md:text-lg lg:text-2xl text-white text-center">
          We’re elevating mobility, one drone at a time.
        </h2>
      </div>
    </div>
  );
}

export default Mission;
