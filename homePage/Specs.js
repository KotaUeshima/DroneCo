import React, { useEffect, useState } from "react";
import Image from "next/image";
import specsDrone from "../public/assets/specsDrone.png";

function Specs() {
  const [rotate, setRotate] = useState(`rotate-0`);

  useEffect(() => {
    const handleScroll = () => {
      // remove 2 * screen height from scrollY
      let result = window.scrollY - 2 * window.innerHeight;
      setRotate(`rotate-[${result}deg]`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const specs = [
    {
      id: 1,
      title: "Travel",
      firstData: "100 km/h",
      firstDescription: "Cruising Speed",
      secondData: "30 km",
      secondDescription: "Distance (Single Charge)",
    },
    {
      id: 2,
      title: "Battery",
      firstData: "1 hour",
      firstDescription: "Flight Time",
      secondData: "400 ft",
      secondDescription: "Operational Range",
    },
    {
      id: 3,
      title: "Dimensions",
      firstData: "5 ft",
      firstDescription: "Wingspan",
      secondData: "5.5 ft",
      secondDescription: "Length",
    },
    {
      id: 4,
      title: "Vision",
      firstData: "12 m",
      firstDescription: "LiDAR Range",
      secondData: "2",
      secondDescription: "Camera Sensors",
    },
  ];

  return (
    <div className="h-[200vh] max-w-screen bg-gray-100">
      <div className="h-full flex flex-row">
        <div className="h-[200vh] w-1/3 flex flex-col">
          <div className="h-[100vh] flex flex-col px-14 text-left">
            <h2 className="mt-20 text-4xl md:text-7xl text-droneOrange font-thin">
              Efficiency.
            </h2>
            <p className="mt-10 text-sm md:text-base text-fontBlack">
              Drones, also known as unmanned aerial vehicles (UAVs), are
              becoming increasingly popular and efficient in a variety of
              industries. One of the main advantages of using a drone is its
              ability to reach areas that are otherwise difficult or dangerous
              for humans to access.
            </p>
            <h2 className="mt-20 text-4xl md:text-7xl text-droneOrange font-thin">
              Precision.
            </h2>
            <p className="mt-10 text-sm md:text-base text-fontBlack">
              Drones are known for their precision in both navigation and
              payload delivery. Their ability to fly autonomously, guided by
              GPS, allows them to fly to specific coordinates with a high level
              of accuracy.
            </p>
          </div>
          <div className="h-[100vh] w-full flex flex-col">
            {specs.map(
              ({
                id,
                title,
                firstData,
                firstDescription,
                secondData,
                secondDescription,
              }) => {
                return (
                  <div key={id} className="h-1/5 m-10 flex flex-col">
                    <h2 className="mt-2 text-2xl tracking-widest">{title}</h2>
                    <div className="mt-2 flex flex-row">
                      <div className="flex flex-col w-1/2">
                        <h2 className="text-4xl text-droneOrange">
                          {firstData}
                        </h2>
                        <h3 className="font-thin">{firstDescription}</h3>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <h2 className="text-4xl text-droneOrange">
                          {secondData}
                        </h2>
                        <h3 className="font-thin">{secondDescription}</h3>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="bg-droneBlue h-[200vh] w-1/2 relative z-10 flex flex-col">
          <div className="h-[183vh]">
            <div className="mt-[17vh] sticky top-[17vh]">
              <Image src={specsDrone} alt="drone specs" className={rotate} />
            </div>
          </div>
          <div className="h-[17vh]"></div>
        </div>
        <div className="h-full w-1/6 flex flex-col">
          <div className="h-[100vh] w-full flex justify-center items-center">
            <h2 className="rotate-90 font-thin border-b-4 border-droneOrange text-7xl">
              Model(X)
            </h2>
          </div>
          <div className="h-[100vh] w-full flex justify-center items-center">
            <h2 className="rotate-90 font-thin border-b-4 border-droneOrange text-7xl">
              Specs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specs;
