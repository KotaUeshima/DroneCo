import React from "react";
import Image from "next/image";
import building from "../../public/assets/building.png";

function Values() {
  const values = [
    {
      id: 1,
      title: "Integrity",
      description:
        "Integrity and trust is a key component in the success of DroneCo and its success.",
    },
    {
      id: 2,
      title: "Integrity",
      description:
        "Integrity and trust is a key component in the success of DroneCo and its success.",
    },
    {
      id: 3,
      title: "Integrity",
      description:
        "Integrity and trust is a key component in the success of DroneCo and its success.",
    },
    {
      id: 4,
      title: "Integrity",
      description:
        "Integrity and trust is a key component in the success of DroneCo and its success.",
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-row">
      <Image
        src={building}
        alt="Picture of Building"
        className="min-h-screen w-[30vw] object-cover"
      />
      <div className="w-full flex flex-col items-center pt-[10vh]">
        <h2 className="header">Why DroneCo?</h2>
        <p className="mt-2 paragraph">
          Explore why DroneCo would be a perfect fit for you.
        </p>
        <div className="m-20 grid grid-rows-2 grid-cols-2 gap-10">
          {values.map(({ id, title, description }) => {
            return (
              <div key={id} className="p-10 rounded-md bg-droneBlue text-white">
                <h2 className="font-light text-2xl">{title}</h2>
                <p className="mt-4 paragraph text-white">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values;
