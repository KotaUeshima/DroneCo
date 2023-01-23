import React from "react";
import Image from "next/image";
import modelX from "../public/assets/modelX.png";
import modelY2 from "../public/assets/modelY2.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

function Drone() {
  const [x, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  const [y, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <div
      name="drone"
      className="min-h-[150vh] w-[90vw] mx-auto my-32 flex flex-col "
    >
      <div className="relative h-[65vh] md:h-[75vh] bg-gray-200">
        <h2 className="-mt-10 md:-mt-20 text-right mr-10 text-[20vw] text-droneBlue">
          Model X
        </h2>
        <p
          ref={x}
          className="-mt-10 md:-mt-20 absolute right-10 w-1/3 text-right paragraph"
        >
          Suitable for lightweight QSRs and Pharmacy deliveries.
        </p>
        {inView && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Compact and Lightweight. (<2lbs)").start();
            }}
            options={{
              wrapperClassName: "-mt-10 absolute right-10 paragraph",
              cursorClassName: "hidden",
              delay: 100,
            }}
          />
        )}
        <div className="absolute top-0 left-0 z-10 h-[65vh] md:h-[75vh] w-[50vw]">
          <Image
            src={modelX}
            alt="model x"
            fill={true}
            priority={true}
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="mt-20 relative h-[65vh] md:h-[75vh] bg-gray-200">
        <h2 className="-mt-10 md:-mt-20 text-left ml-4 text-[20vw] text-droneBlue">
          Model Y
        </h2>
        <p
          ref={y}
          className="-mt-10 md:-mt-20 absolute left-6 md:left-10 w-1/3 text-left paragraph"
        >
          Suitable for standard Quick Commerce and Retail deliveries.
        </p>
        {inView2 && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Compact and Lightweight. (<5lbs)").start();
            }}
            options={{
              wrapperClassName: "absolute left-6 md:left-10 paragraph",
              cursorClassName: "hidden",
              delay: 100,
            }}
          />
        )}

        <div className="absolute top-6 right-5 z-10 h-[65vh] md:h-[75vh] w-[55vw]">
          <Image
            src={modelY2}
            alt="model y"
            fill={true}
            className="object-cover drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Drone;
