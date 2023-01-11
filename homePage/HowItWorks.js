import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

function HowItWorks() {
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
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
    displayLeft = (
      <AnimatePresence>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          Third Text
        </motion.h2>
      </AnimatePresence>
    );
  }

  if (inView4) {
    displayLeft = (
      <AnimatePresence>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          Fourth Text
        </motion.h2>
      </AnimatePresence>
    );
  }

  return (
    <div className="h-[400vh] w-full flow-root">
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
          <div className="h-[200vh] w-full"></div>
          <div className="h-[100vh] w-full flex justify-center items-center">
            <h2 className="text-white">Fourth Text</h2>
          </div>
        </div>
      )}
      <div
        ref={ref}
        className="float-right w-[60vw] h-[400vh] bg-droneOrange text-white"
      >
        <div className="h-[100vh] flex justify-center items-center">
          <h2>1</h2>
        </div>
        <div ref={ref2} className="h-[100vh] flex justify-center items-center">
          <h2>2</h2>
        </div>
        <div ref={ref3} className="h-[100vh] flex justify-center items-center">
          <h2>3</h2>
        </div>
        <div ref={ref4} className="h-[100vh] flex justify-center items-center">
          <h2>4</h2>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
