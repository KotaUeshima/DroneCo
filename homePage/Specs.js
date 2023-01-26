import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import specsDrone from "../public/assets/specsDrone.png";
import { useInView } from "react-intersection-observer";
import dronePropeller from "../public/assets/dronePropeller.png";

function Specs() {
  const droneRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [show, setShow] = useState(0);
  const [reveal, setReveal] = useState(false);

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

  let title = "Downard and Navigation Sensors";
  if (show === 1) title = "Downard and Navigation Sensors";
  else if (show === 2) title = "Front-Facing Propellers";
  else if (show === 3) title = "Fixed-Wing Design with Foam Airframe";
  else if (show === 4) title = "Lift Propellers";
  else if (show === 5) title = "Tether-Based Release System";

  console.log(inView);

  return (
    <div className="h-[200vh] max-w-screen bg-gray-100">
      <div className="h-full flex flex-row">
        <div className="h-[200vh] w-1/3 flex flex-col">
          <div className="h-[100vh] flex flex-col justify-center px-10 text-left">
            <h2 className="header text-droneOrange">Autonomous.</h2>
            <p className="mt-5 paragraph">
              Our drones are programmed to fly to a specific location, deliver a
              package, and return to their base. They use LiDAR, GPS, and
              navigation-based sensors to perceive their environment, maintain
              stability, and avoid obstacles.
            </p>
            <h2 className="mt-20 header text-droneOrange">Silent.</h2>
            <p className="mt-5 paragraph">
              Our drones utilize 8 low-noise lift propellers, which are
              optimized for blade geometry and tip speed. This makes them ideal
              for urban environments, non-disruptive, and regulatory compliant.
            </p>
          </div>
          <div ref={ref} className="h-[100vh] w-full flex flex-col">
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
              <Image
                ref={droneRef}
                src={specsDrone}
                alt="drone specs"
                className={`${
                  inView ? "rotate-90" : "rotate-0"
                } duration-[2000ms] ease-linear`}
              />
              <div
                className={`${
                  inView ? "opacity-0" : "opacity-100"
                } delay-1000 duration-700 ease-in-out`}
              >
                <div
                  onMouseEnter={() => {
                    setShow(1);
                    setReveal(true);
                  }}
                  onMouseLeave={() => {
                    setReveal(false);
                  }}
                  className="absolute left-[51%] top-[20%] labelForDrone"
                >
                  <h2 className="">1</h2>
                </div>
                <div
                  onMouseEnter={() => {
                    setShow(2);
                    setReveal(true);
                  }}
                  onMouseLeave={() => {
                    setReveal(false);
                  }}
                  className="absolute left-[25%] top-[30%] labelForDrone"
                >
                  <h2 className="">2</h2>
                </div>
                <div
                  onMouseEnter={() => {
                    setShow(3);
                    setReveal(true);
                  }}
                  onMouseLeave={() => {
                    setReveal(false);
                  }}
                  className="absolute left-[51%] top-[70%] labelForDrone"
                >
                  <h2 className="">3</h2>
                </div>
                <div
                  onMouseEnter={() => {
                    setShow(4);
                    setReveal(true);
                  }}
                  onMouseLeave={() => {
                    setReveal(false);
                  }}
                  className="absolute left-[36%] top-[7%] labelForDrone"
                >
                  <h2 className="">4</h2>
                </div>
                <div
                  onMouseEnter={() => {
                    setShow(5);
                    setReveal(true);
                  }}
                  onMouseLeave={() => {
                    setReveal(false);
                  }}
                  className="absolute left-[51%] top-[60%] labelForDrone"
                >
                  <h2 className="">5</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[17vh]"></div>
        </div>
        <div className="h-full w-1/6 flex flex-col">
          <div className="h-[100vh] w-full flex justify-center items-center">
            <div
              className={`${
                reveal ? "-translate-x-[10%]" : "translate-x-[110%]"
              } relative z-10 flex flex-col items-center space-y-4 bg-white drop-shadow-xl rounded-md p-4 delay-75 duration-700`}
            >
              <div className="relative h-[20vh] w-2/3">
                <Image
                  src={dronePropeller}
                  alt="drone propeller"
                  fill={true}
                  className="object-contain"
                />
              </div>
              <h2 className="text-center font-thin text-3xl">{title}</h2>
              <hr className="h-[2px] w-2/3 bg-droneBlue" />
              <p className="text-center paragraph">
                Navigation sensors are essential for Drone navigation through
                city terrain.
              </p>
            </div>
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
