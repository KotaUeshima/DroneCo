import React, { useEffect } from "react";
import { FiFastForward } from "react-icons/fi";
import { BsAppIndicator, BsFlagFill } from "react-icons/bs";
import { FaRecycle } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function Product() {
  const benefitsList = [
    {
      title: "Instant Delivery",
      icon: <FiFastForward size={25} />,
    },
    {
      title: "Fully Autonomous",
      icon: <BsAppIndicator size={25} />,
    },
    {
      title: "Obstacle-Detection",
      icon: <BsFlagFill size={25} />,
    },
    {
      title: "Multiple Trips",
      icon: <FaRecycle size={25} />,
    },
    {
      title: "Clean Energy",
      icon: <SlEnergy size={25} />,
    },
  ];

  return (
    <div name="product" className="w-full">
      <div className="max-w-screen-xl min-h-screen flex flex-col mx-auto justify-center items-center p-8">
        <div className="flex flex:row mt-12 items-center w-full">
          <hr className="h-[2px] bg-fontBlack w-1/3" />
          <div className="mx-auto">
            <h2 className="text-4xl font-medium text-center text-fontBlack">
              Drone as a Service.
            </h2>
            <p className="text-center text-gray-400">
              Delivering services to meet your needs.
            </p>
          </div>
          <hr className="h-[2px] bg-fontBlack w-1/3" />
        </div>
        <div className="flex flex-col md:flex-row py-16 px-10 mx-auto w-full space-y-12 md:space-y-0">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/drone-concept-d-illustration-drone-concept-d-illustration-blueprint-wire-frame-style-133362929.jpg"
              alt="/"
              className=""
            />
          </div>
          <div className="flex flex-col justify-center ml-20 space-y-10 md:w-1/2">
            {benefitsList.map(({ title, icon }) => {
              return (
                <div
                  key={title}
                  className="flex flex-row items-center space-x-4"
                >
                  <div className="text-white bg-droneOrange px-4 py-2 rounded-full">
                    {icon}
                  </div>
                  <h2 className="text-fontBlack text-lg font-base">{title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
