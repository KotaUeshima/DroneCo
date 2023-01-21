import React from "react";
import Image from "next/image";
import logo from "../public/assets/fairDairyLogo.webp";

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
      <h2 className="mt-20 text-center text-5xl font-thin text-droneBlue">
        Our Partners
      </h2>
      <div className="h-full w-full pt-6 pb-20 flex flex-row space-x-10 justify-center items-center">
        {partners.map(({ id }) => {
          return (
            <div
              key={id}
              className="relative w-1/5 h-[33vh] flex flex-col-reverse"
            >
              <Image
                src={logo}
                alt="logo"
                fill={true}
                className="object-contain"
              />
              <h2 className="text-center">DroneCo</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Customers;
