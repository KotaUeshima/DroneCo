import React from "react";
import Image from "next/image";
import Kota from "../../public/assets/teamPics/17.png";
import Atharva from "../../public/assets/teamPics/14.png";
import Tushar from "../../public/assets/teamPics/16.png";
import Shriya from "../../public/assets/teamPics/15.png";
import Sowmiya from "../../public/assets/teamPics/18.png";

function TeamPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Tushar Gupta",
      position: "Founder",
      img: Tushar,
    },

    {
      id: 2,
      name: "Atharva Babuna",
      position: "Operations | Engineering",
      img: Atharva,
    },
    {
      id: 3,
      name: "Kota Ueshima",
      position: "Frontend Developer",
      img: Kota,
    },
    {
      id: 4,
      name: "Shriya Padhi",
      position: "Engineering",
      img: Shriya,
    },
    {
      id: 5,
      name: "Sowmiya",
      position: "Engineering",
      img: Sowmiya,
    },
  ];
  return (
    <div className="min-h-screen w-full mt-20 bg-gray-100">
      <div className="flex flex-col items-center text-droneBlue">
        <h2 className="mt-20 text-4xl">
          Meet Our <span className="text-droneOrange">Team</span>
        </h2>
        <p className="mt-2 text-gray-400">
          We are a 6 person USC-founded team, with a passion for cutting-edge
          technology. We have experience at top technology and financial firms,
          and are growing rapidly.
        </p>
        <div className="max-w-[75vw] mx-auto mt-20 flex flex-row justify-center space-x-16">
          {teamMembers.map(({ id, name, position, img }) => {
            return (
              <div key={id} className="text-center">
                <div className="relative h-[50vh] w-[15vw]">
                  <Image
                    src={img}
                    alt={`Picture of ${name}`}
                    className="object-cover"
                    fill={true}
                  />
                </div>
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
