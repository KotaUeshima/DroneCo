import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import first from "../public/assets/first.png";
import second from "../public/assets/second.png";
import third from "../public/assets/third.png";

function HowItWorks() {
  const [ref, inView] = useInView({
    threshold: 0.33,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  let displayLeft = <h2 className="text-white">First Text</h2>;

  if (inView2) {
    displayLeft = (
      <AnimatePresence>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          Second Text
        </motion.h2>
      </AnimatePresence>
    );
  }

  if (inView3) {
    displayLeft = <h2 className="text-white">Third Text</h2>;
  }

  return (
    <div className="h-[300vh] w-full flow-root">
      {inView ? (
        <div className="fixed top-0 left-0 h-[100vh] w-[40vw] bg-droneBlue flex justify-center items-center">
          {displayLeft}
        </div>
      ) : (
        <div
          className={`h-full w-[40vw] bg-droneBlue float-left flex flex-col`}
        >
          <div className="h-[100vh] w-full flex justify-center items-center">
            <h2 className="text-white">First Text</h2>
          </div>
          <div className="h-[100vh] w-full"></div>
          <div className="h-[100vh] w-full flex justify-center items-center">
            <h2 className="text-white">Third Text</h2>
          </div>
        </div>
      )}
      <div ref={ref} className="float-right w-[60vw] h-[300vh] bg-gray-100">
        <div className="h-[100vh] flex justify-center items-center">
          <div className="relative h-3/4 w-full">
            <Image
              src={first}
              alt="first"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
        <div ref={ref2} className="h-[100vh] flex justify-center items-center">
          <div className="relative h-3/4 w-full">
            <Image
              src={second}
              alt="second"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
        <div ref={ref3} className="h-[100vh] flex justify-center items-center">
          <div className="relative h-3/4 w-full">
            <Image
              src={third}
              alt="third"
              fill={true}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
