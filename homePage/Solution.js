import React from "react";
import Image from "next/image";
import businessModel from "../public/assets/businessModel.png";
import first from "../public/assets/first.png";

function Solution() {
  return (
    <div className="h-[75vh] w-full bg-white flex flex-row">
      <div className="h-full w-1/2 flex flex-col justify-center items-center">
        <div className="px-14">
          <h2 className="text-6xl font-light text-droneBlue">
            Drone-as-a-Service
          </h2>
          <p className="mt-10 paragraph">
            DroneCo partners with high-frequency delivery clients and manages
            their end-to-end delivery operations. We pick up packages from
            dark-stores, kiranas, and designated pick- up spots and deliver them
            directly to the doorstep by lowering the packages
          </p>
        </div>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center">
        <div className="relative h-2/3 w-2/3">
          <Image
            src={businessModel}
            alt="business model"
            fill={true}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Solution;
