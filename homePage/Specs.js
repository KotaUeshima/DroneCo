import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import specsDrone from "../public/assets/specsDrone.png";

function Specs() {
  const droneRef = useRef();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", (event) => {
  //     requestAnimationFrame(() => {
  //       const rotation = (window.scrollY - 2 * window.innerHeight) / 14;
  //       console.log(rotation);
  //       droneRef.current.style.transform = `rotate(${rotation}deg)`;
  //     });
  //   });
  // }, []);

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

  console.log(show);
  return (
    <div className="h-[200vh] max-w-screen bg-gray-100">
      <div className="h-full flex flex-row">
        <div className="h-[200vh] w-1/3 flex flex-col">
          <div className="h-[100vh] space-y-16 flex flex-col justify-center px-14 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-droneOrange font-thin">
              Efficiency.
            </h2>
            <p className="text-xs lg:text-base text-fontBlack">
              Drones, also known as unmanned aerial vehicles (UAVs), are
              becoming increasingly popular and efficient in a variety of
              industries.
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-droneOrange font-thin">
              Precision.
            </h2>
            <p className="text-xs lg:text-base text-fontBlack">
              Drones are known for their precision in both navigation and
              payload delivery. Drones are known for their precision in both
              navigation and payload delivery.
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
                  <div
                    key={id}
                    className="h-1/5 mt-6 mx-10 space-y-6 flex flex-col"
                  >
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
              <Image ref={droneRef} src={specsDrone} alt="drone specs" />
              <div
                onMouseOver={() => {
                  setShow(true);
                  setShow2(false);
                  setShow3(false);
                }}
                className="absolute left-[20vh] top-[17vh] bg-blue-500 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
              >
                <h2>1</h2>
              </div>
              <div
                onMouseOver={() => {
                  setShow(false);
                  setShow2(true);
                  setShow3(false);
                }}
                className="absolute left-[55vh] top-[37vh] bg-blue-500 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
              >
                <h2>2</h2>
              </div>
              <div
                onMouseOver={() => {
                  setShow(false);
                  setShow2(false);
                  setShow3(true);
                }}
                className="absolute left-[45vh] top-[55vh] bg-blue-500 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer"
              >
                <h2>3</h2>
              </div>
            </div>
          </div>
          <div className="h-[17vh]"></div>
        </div>
        <div className="h-full w-1/6 flex flex-col">
          <div className="h-[100vh] w-full flex justify-center items-center">
            {show && (
              <h2 className="rotate-90 font-thin border-b-4 border-droneOrange text-7xl">
                First
              </h2>
            )}
            {show2 && (
              <h2 className="rotate-90 font-thin border-b-4 border-droneOrange text-7xl">
                Second
              </h2>
            )}
            {show3 && (
              <h2 className="rotate-90 font-thin border-b-4 border-droneOrange text-7xl">
                Third
              </h2>
            )}
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
