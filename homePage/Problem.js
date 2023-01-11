import React from "react";
import { ImStatsBars } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";

function Problem() {
  const problems = [
    {
      id: 1,
      icon: <ImStatsBars size={50} />,
      title: "Carbon Emissions",
      number: "20%",
      numberDes: "Of a Metropolitans CO2 Emissions from Last Mile Delivery",
      bottomDes: "1 kg of Greenhouse Emissions / Package",
      img: "https://media.istockphoto.com/id/623296954/photo/coal-fired-power-station-silhouette-at-sunset-pocerady-czech-republic.jpg?b=1&s=170667a&w=0&k=20&c=gTri1_dB71KY6PmvQKO2lD8u1FSTxAHpTjPZltdODp0=",
    },
    {
      id: 2,
      icon: <BiTimeFive size={50} />,
      title: "Traffic Congestion",
      number: "10 Min",
      numberDes: "Expected Increase in Commute Time / Passenger",
      bottomDes: "Increase Traffic-induced CO2 Emissions by -25%",
      img: "https://t3.ftcdn.net/jpg/02/44/10/34/360_F_244103433_SU95HFaIvOm46LkLot5Hex4DuNTK2WgK.jpg",
    },
    {
      id: 3,
      icon: <BsCurrencyDollar size={50} />,
      title: "Delivery Costs",
      number: "53%",
      numberDes: "Of All Delivery Costs Incurred in the Last-Mile Phase",
      bottomDes: "$6.4 / Cubic Meter for B2B Deliveries",
      img: "https://blog-cdn.route4me.com/2021/05/3d153bac-last-mile-delivery-costs.jpg",
    },
  ];

  return (
    <div className="w-full pb-10 xl:h-[75vh] bg-droneBlue">
      <div className="max-w-screen-xl px-5 mx-auto text-center">
        <div className="flex flex-col">
          <div className="flex flex:row mt-20 items-center w-full">
            <hr className="h-[2px] bg-droneBlue w-1/3" />
            <div className="mx-auto">
              <h2 className="text-4xl font-medium text-white text-center">
                Drone as a Solution.
              </h2>
              <p className="text-center text-gray-400">
                Delivering services to meet your needs.
              </p>
            </div>
            <hr className="h-[2px] bg-droneBlue w-1/3" />
          </div>
          <div className="flex flex-col space-y-12 md:space-y-0 justify-center md:flex-row md:space-x-24 mt-16">
            {problems.map((problem) => {
              return (
                <div
                  key={problem.id}
                  className="flex flex-col items-center p-6 md:w-1/4 bg-white rounded-xl"
                >
                  <div className="bg-white p-3 rounded-full border-[#191B41]/75">
                    {problem.icon}
                  </div>
                  <h2 className="text-fontBlack text-xl mt-3 mb-6 tracking-wider">
                    {problem.title}
                  </h2>
                  <h2 className="text-2xl text-droneOrange font-extrabold">
                    {problem.number}
                  </h2>
                  <p className="text-fontBlack mb-6">{problem.numberDes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
