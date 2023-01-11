import React from "react";
import Image from "next/image";
import modelX from "../public/assets/modelX.png";
import modelY from "../public/assets/modelY.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

function Drone() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col items-center">
      <h2 className="mt-20 text-5xl text-droneOrange text-bold">
        Ultra-Fast Delivery Drones
      </h2>
      <h2 className="mt-2 uppercase text-lg tracking-widest">
        Automated, On Demand Missions
      </h2>
      <div className="h-[65vh] w-full flex flex-row">
        <div className="relative h-full w-2/5">
          <Image
            src={modelX}
            alt="model x"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="h-full w-1/5"></div>
        <div className="relative h-full w-2/5">
          <Image
            src={modelY}
            alt="model y"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
      <div className="h-[10vh] w-full flex flex-row">
        <div className="h-full w-2/5 flex justify-center items-center">
          <div className="border-2 bg-white rounded-full py-4 px-6 shadow-xl">
            <h2 className="text-droneOrange text-4xl font-bold">X</h2>
          </div>
          <div className="relative -z-10 -ml-10 pl-12 pr-4 h-12 rounded-xl border-2 shadow-xl flex items-center">
            <h2 ref={ref} className="font-thin text-2xl">
              {inView && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Model")
                      .deleteAll()
                      .typeString("Lightweight < (2lbs)")
                      .start();
                  }}
                />
              )}
            </h2>
          </div>
        </div>
        <div className="h-full w-1/5"></div>
        <div className="h-full w-2/5 flex justify-center items-center">
          <div className="border-2 bg-white rounded-full py-4 px-6 shadow-xl">
            <h2 className="text-droneOrange text-4xl font-bold">Y</h2>
          </div>
          <div className="relative -z-10 -ml-10 pl-12 pr-4 h-12 rounded-xl border-2 shadow-xl flex items-center">
            <h2 ref={ref} className="font-thin text-2xl">
              {inView && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Model")
                      .deleteAll()
                      .typeString("Standard < (6lbs)")
                      .start();
                  }}
                />
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drone;
