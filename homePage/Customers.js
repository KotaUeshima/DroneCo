import React from "react";
import Image from "next/image";
import fairDairyLogo from "../public/assets/fairDairyLogo.webp";

function Customers() {
  const partners = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  return (
    <div className="min-h-[50vh] bg-gray-100 flex flex-col">
      <h2 className="mt-20 text-center text-6xl font-thin text-droneBlue">
        <span className="text-droneOrange font-light">O</span>ur{" "}
        <span className="text-droneOrange font-light">P</span>artners
      </h2>
      <div className="h-full w-full pt-10 pb-20 flex flex-row space-x-10 justify-center items-center">
        {partners.map(({ id }) => {
          return (
            <div key={id} className="h-full w-1/6 flex flex-col">
              <div className="relative h-[25vh] w-full">
                <Image
                  src={fairDairyLogo}
                  alt="logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
              <p className="paragraph text-center">Fair Dairy</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
