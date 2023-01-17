import React from "react";
import Image from "next/image";
import Kota from "../../public/assets/KotaProfile.jpg";

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Kota Ueshima",
      position: "Software Engineer | Frontend Developer",
      img: Kota,
    },
    {
      id: 2,
      name: "Kota Ueshima",
      position: "Software Engineer | Frontend Developer",
      img: Kota,
    },
    {
      id: 3,
      name: "Kota Ueshima",
      position: "Software Engineer | Frontend Developer",
      img: Kota,
    },
    {
      id: 4,
      name: "Kota Ueshima",
      position: "Software Engineer | Frontend Developer",
      img: Kota,
    },
  ];
  return (
    <div className="min-h-screen w-full mt-20 bg-droneBlue">
      <div className="flex flex-col items-center text-white">
        <h2 className="mt-20 text-4xl">
          Meet Our <span className="text-droneOrange">Team</span>
        </h2>
        <p className="mt-2 text-gray-400">
          We are a 6 person USC-founded team, with a passion for cutting-edge
          technology. We have experience at top technology and financial firms,
          and are growing rapidly.
        </p>
        <div className="max-w-[75vw] mx-auto mt-20 flex flex-row space-x-20">
          {teamMembers.map(({ id, name, position, img }) => {
            return (
              <div key={id} className="text-center">
                <Image
                  src={img}
                  alt={`Picture of ${name}`}
                  className="rounded-md"
                />
                <h2 className="mt-4 text-lg">{name}</h2>
                <p className="mt-2 text-sm">{position}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
