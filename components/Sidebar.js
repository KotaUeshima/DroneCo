import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

function Sidebar({ scrollUp }) {
  const [open, setOpen] = useState(false);
  const menuOptions = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "Careers",
      link: "/careers",
    },
    {
      id: 3,
      title: "Partner with Us",
      link: "/",
    },
  ];

  const links = [
    {
      id: 1,
      icon: <AiFillYoutube size={30} />,
      link: "https://www.google.com",
    },
    {
      id: 2,
      icon: <FaLinkedin size={30} />,
      link: "https://www.google.com",
    },
    {
      id: 3,
      icon: <AiFillInstagram size={30} />,
      link: "https://www.google.com",
    },
  ];

  return (
    <>
      {open ? (
        <div className="pr-4 z-30 cursor-pointer">
          <GrClose onClick={() => setOpen(!open)} size={30} />
        </div>
      ) : (
        <div className="pr-4 cursor-pointer">
          <AiOutlineMenu onClick={() => setOpen(!open)} size={30} />
        </div>
      )}

      <div
        className={`fixed top-0 right-0 w-full  p-6 bg-white text-fontBlack ${
          open && scrollUp ? "translate-y-0" : "-translate-y-[110%]"
        } rounded-xl ease-in-out duration-700`}
      >
        {menuOptions.map(({ id, title, link }) => {
          return (
            <Link href={link}>
              <h2
                key={id}
                className="font-medium text-2xl mt-6 hover:text-droneOrange duration-300"
                onClick={() => setOpen(!open)}
              >
                {title}
              </h2>
            </Link>
          );
        })}
        <div className="flex justify-center space-x-4 mt-6">
          {links.map(({ id, icon, link }) => {
            return (
              <a key={id} href={link} target="_blank" rel="noreferrer">
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
