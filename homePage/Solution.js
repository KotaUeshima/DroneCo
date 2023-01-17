import React from "react";
import Image from "next/image";
import package1 from "../public/assets/package1.png";

function Solution() {
  return (
    <div className="h-[75vh] w-full bg-white flex flex-row">
      <div className="h-full w-1/2 px-20 mt-20">
        <h2 className="text-7xl font-light text-droneBlue">
          Drone-as-a-Service.
        </h2>
        <p className="mt-20 text-droneBlue">
          DroneCo partners with high-frequency delivery clients and manages
          their end-to-end delivery operations. We pick up packages from
          dark-stores, kiranas, and designated pick- up spots and deliver them
          directly to the doorstep by lowering the packages
        </p>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center">
        <div className="relative h-2/3 w-2/3">
          <Image
            src={package1}
            alt="package"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Solution;
