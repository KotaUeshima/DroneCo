import React from "react";
import Image from "next/image";
import droneWithRemote from "../public/assets/droneWithRemote.png";

function JoinTeam() {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      status: "Part Time",
      description:
        "Join our team as a software developer to get hands on experience in the fronted world.",
    },
    {
      id: 2,
      title: "Software Engineer",
      status: "Part Time",
      description:
        "Join our team as a software developer to get hands on experience in the fronted world.",
    },
    {
      id: 3,
      title: "Software Engineer",
      status: "Part Time",
      description:
        "Join our team as a software developer to get hands on experience in the fronted world.",
    },
  ];

  return (
    <div className="my-20 min-h-screen w-full">
      <div className="relative flex flex-row">
        <div className="mt-[10vh] ml-[10vw] flex flex-col">
          <h2 className="text-4xl">
            Join Our <span className="text-droneOrange">Team</span>
          </h2>
          <div className="z-10 mt-20 flex flex-col space-y-10">
            {jobs.map(({ id, title, status, description }) => {
              return (
                <div
                  key={id}
                  className="min-w-[50vw] p-10 rounded-md bg-droneBlue text-white"
                >
                  <div className="flex flex-row">
                    <div>
                      <h2 className="text-xl">{`${title} | ${status}`}</h2>
                      <p className="mt-2 text-sm">{description}</p>
                    </div>
                    <button className="bg-droneOrange text-sm mt-4 ml-20 px-6 py-0 rounded-md">
                      Apply Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute top-0 right-0 min-h-screen w-[50vw]">
          <Image src={droneWithRemote} alt="Drone with Remote" fill={true} />
        </div>
      </div>
    </div>
  );
}

export default JoinTeam;
