import React from "react";

function Uses() {
  const usesList = [
    {
      media:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/Barbieri_-_ViaSophia25668.jpg",
      title: "Restaurant",
      description: "Delivered just as it was prepared - hot or cold.",
    },
    {
      media:
        "https://www.collegechoice.net/app/uploads/2017/10/GettyImages-138709523.jpg",
      title: "Healthcare",
      description: "Time matters - supplies and medicine delivered in minutes.",
    },
    {
      media:
        "https://patch.com/img/cdn20/users/22969719/20171123/013904/styles/raw/public/processed_images/grocery-store-2619380_640-1511419097-801.jpg",
      title: "Grocery",
      description: "Essentials delivered when your customers need it.",
    },
    {
      media:
        "https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg",
      title: "E-commerce",
      description: "Last mile delivery faster and cheaper.",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-[75vh] bg-droneBlue">
        <div className="flex flex-col md:flex-row space-x-10 h-full justify-center items-center">
          {usesList.map(({ media, title, description }) => {
            return (
              <div key={title}>
                <img
                  src={media}
                  alt="/"
                  className="w-[17vw] h-[17vw] object-cover rounded-2xl"
                />
                <h2 className="text-white text-2xl font-bold mt-4">{title}</h2>
                <p className="text-white max-w-[17vw]">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Uses;
