import React from "react";
import Image from "next/image";
import package1 from "../public/assets/package1.png";

function Solution() {
  return (
    <div className="h-[75vh] w-full bg-white flex flex-row">
      <div className="h-full w-1/2 px-20 mt-20">
        <h2 className="text-7xl font-light text-droneBlue">
          Drone as a Solution.
        </h2>
        <p className="mt-20 text-droneBlue">
          Its compact design allows for easy transportation, making it a popular
          choice for both professional and amateur photographers and
          videographers. Its compact design allows for easy transportation,
          making it a popular choice for both professional and amateur
          photographers and videographers.
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
