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

  let displayLeft = (
    <div className="px-20">
      <h2 className="text-white text-6xl font-thin">Place Order</h2>
      <p className="mt-4 text-white tracking-widest font-light">
        Its compact design allows for easy transportation, making it a popular
        choice for both professional and amateur photographers and
        videographers.
      </p>
    </div>
  );

  if (inView2) {
    displayLeft = (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="px-20"
        >
          <h2 className="text-white text-6xl font-thin">Wait For Order</h2>
          <p className="mt-4 text-white tracking-widest font-light">
            Its compact design allows for easy transportation, making it a
            popular choice for both professional and amateur photographers and
            videographers.
          </p>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (inView3) {
    displayLeft = (
      <div className="px-20">
        <h2 className="text-white text-6xl font-thin">Pick Up Delivery</h2>
        <p className="mt-4 text-white tracking-widest font-light">
          Its compact design allows for easy transportation, making it a popular
          choice for both professional and amateur photographers and
          videographers.
        </p>
      </div>
    );
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
            <div className="px-20">
              <h2 className="text-white text-6xl font-thin">Place Order</h2>
              <p className="mt-4 text-white tracking-widest font-light">
                Its compact design allows for easy transportation, making it a
                popular choice for both professional and amateur photographers
                and videographers.
              </p>
            </div>
          </div>
          <div className="h-[100vh] w-full"></div>
          <div className="h-[100vh] w-full flex justify-center items-center">
            <div className="px-20">
              <h2 className="text-white text-6xl font-thin">
                Pick Up Delivery
              </h2>
              <p className="mt-4 text-white tracking-widest font-light">
                Its compact design allows for easy transportation, making it a
                popular choice for both professional and amateur photographers
                and videographers.
              </p>
            </div>
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
