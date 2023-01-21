import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import specsDrone from "../public/assets/specsDrone.png";
import { useInView } from "react-intersection-observer";

function Specs() {
  const droneRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const [show, setShow] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", (event) => {
  //     requestAnimationFrame(() => {
  //       const rotation = (window.scrollY - 2.5 * window.innerHeight) / 18;
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

  return (
    <div className="h-[200vh] max-w-screen bg-gray-100">
      <div className="h-full flex flex-row">
        <div className="h-[200vh] w-1/3 flex flex-col">
          <div className="h-[100vh] flex flex-col justify-center px-10 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-7xl text-droneOrange font-thin">
              Autonomous.
            </h2>
            <p className="mt-5 paragraph">
              Our drones are programmed to fly to a specific location, deliver a
              package, and return to their base. They use LiDAR, GPS, and
              navigation-based sensors to perceive their environment, maintain
              stability, and avoid obstacles.
            </p>
            <h2 className="mt-20 text-4xl md:text-5xl lg:text-7xl text-droneOrange font-thin">
              Silent.
            </h2>
            <p className="mt-5 paragraph">
              Our drones utilize 8 low-noise lift propellers, which are
              optimized for blade geometry and tip speed. This makes them ideal
              for urban environments, non-disruptive, and regulatory compliant.
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
                        <p className="paragraph">{firstDescription}</p>
                      </div>
                      <div className="flex flex-col w-1/2">
                        <h2 className="text-4xl text-droneOrange">
                          {secondData}
                        </h2>
                        <p className="paragraph">{secondDescription}</p>
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
                onMouseEnter={() => {
                  setShow(1);
                }}
                onMouseLeave={() => {
                  setShow(0);
                }}
                className="absolute left-[51%] top-[20%] bg-white border-2 border-droneOrange drop-shadow-xl rounded-full h-7 w-7 flex justify-center items-center cursor-pointer"
              >
                <h2 className="">1</h2>
              </div>
              <div
                onMouseEnter={() => {
                  setShow(2);
                }}
                onMouseLeave={() => {
                  setShow(0);
                }}
                className="absolute left-[25%] top-[30%] bg-white border-2 border-droneOrange drop-shadow-xl rounded-full h-7 w-7 flex justify-center items-center cursor-pointer"
              >
                <h2 className="">2</h2>
              </div>
              <div
                onMouseEnter={() => {
                  setShow(3);
                }}
                onMouseLeave={() => {
                  setShow(0);
                }}
                className="absolute left-[51%] top-[70%] bg-white border-2 border-droneOrange drop-shadow-xl rounded-full h-7 w-7 flex justify-center items-center cursor-pointer"
              >
                <h2 className="">3</h2>
              </div>
              <div
                onMouseEnter={() => {
                  setShow(4);
                }}
                onMouseLeave={() => {
                  setShow(0);
                }}
                className="absolute left-[36%] top-[7%] bg-white border-2 border-droneOrange drop-shadow-xl rounded-full h-7 w-7 flex justify-center items-center cursor-pointer"
              >
                <h2 className="">4</h2>
              </div>
              <div
                onMouseEnter={() => {
                  setShow(5);
                }}
                onMouseLeave={() => {
                  setShow(0);
                }}
                className="absolute left-[51%] top-[60%] bg-white border-2 border-droneOrange drop-shadow-xl rounded-full h-7 w-7 flex justify-center items-center cursor-pointer"
              >
                <h2 className="">5</h2>
              </div>
            </div>
          </div>
          <div className="h-[17vh]"></div>
        </div>
        <div className="h-full w-1/6 flex flex-col">
          <div className="h-[100vh] w-full flex justify-center items-center">
            {show === 1 ? (
              <h2 className="relative z-10 font-thin text-4xl bg-white text-center">
                Downard and Navigation Sensors
              </h2>
            ) : null}
            {show === 2 ? (
              <h2 className="relative z-10 font-thin text-4xl bg-white text-center">
                Front-Facing Propellers
              </h2>
            ) : null}
            {show === 3 ? (
              <h2 className="relative z-10 font-thin text-4xl bg-white text-center">
                Fixed-Wing Design with Foam Airframe
              </h2>
            ) : null}
            {show === 4 ? (
              <h2 className="relative z-10 font-thin text-4xl bg-white text-center">
                Lift Propellers
              </h2>
            ) : null}
            {show === 5 ? (
              <h2 className="relative z-10 font-thin text-4xl bg-white text-center">
                Tether-Based Release System
              </h2>
            ) : null}
          </div>
          <div
            ref={ref}
            className="h-[100vh] w-full flex justify-center items-center"
          >
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
