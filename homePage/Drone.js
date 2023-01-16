import React from "react";
import Image from "next/image";
import modelX from "../public/assets/modelX.png";
import modelY from "../public/assets/modelY.png";

function Drone() {
  return (
    <div
      name="drone"
      className="min-h-[150vh] w-[90vw] mx-auto my-32 flex flex-col "
    >
      <div className="relative h-[65vh] md:h-[75vh] bg-gray-200">
        <h2 className="-mt-10 md:-mt-20 text-right mr-10 text-[20vw] text-droneBlue">
          Model X
        </h2>
        <p className="-mt-10 md:-mt-20 absolute right-10 w-1/3 text-right">
          Its compact design allows for easy transportation, making it a popular
          choice for both professional and amateur photographers and
          videographers.
        </p>
        <div className="absolute top-0 left-0 z-10 h-[65vh] md:h-[75vh] w-[50vw]">
          <Image
            src={modelX}
            alt="model x"
            fill={true}
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="mt-20 relative h-[65vh] md:h-[75vh] bg-gray-200">
        <h2 className="-mt-10 md:-mt-20 text-left ml-4 text-[20vw] text-droneBlue">
          Model Y
        </h2>
        <p className="-mt-10 md:-mt-20 absolute left-6 md:left-10 w-1/3 text-left">
          Its compact design allows for easy transportation, making it a popular
          choice for both professional and amateur photographers and
          videographers.
        </p>
        <div className="absolute top-0 right-0 z-10 h-[65vh] md:h-[75vh] w-[50vw]">
          <Image
            src={modelY}
            alt="model y"
            fill={true}
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Drone;
