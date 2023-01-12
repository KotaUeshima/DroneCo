import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { ImAddressBook } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import logoWithText from "../public/assets/logoWithText.png";

function Footer() {
  const links = [
    {
      id: 1,
      icon: <AiFillYoutube size={40} />,
      link: "https://www.google.com",
    },
    {
      id: 2,
      icon: <FaLinkedin size={40} />,
      link: "https://www.google.com",
    },
    {
      id: 3,
      icon: <AiFillInstagram size={40} />,
      link: "https://www.google.com",
    },
  ];

  const termsLinks = [
    {
      id: 1,
      title: "Privacy",
      href: "/",
    },
    {
      id: 2,
      title: "Terms",
      href: "/",
    },
    {
      id: 3,
      title: "Privacy Terms",
      href: "/",
    },
    {
      id: 4,
      title: "Terms & Conditions",
      href: "/",
    },
  ];

  const contactUs = [
    {
      id: 1,
      info: "12345 Inwoord Road, Dallas TX",
      icon: <ImAddressBook size={15} />,
    },
    {
      id: 2,
      info: "123-456-2312",
      icon: <BsFillTelephoneFill size={15} />,
    },
    {
      id: 3,
      info: "example@gmail.com",
      icon: <MdEmail size={15} />,
    },
  ];

  return (
    <footer className="bg-gray-200">
      <div className="max-w-[80vw] flex flex-col-reverse justify-between py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-2 md:items-start">
          <div>
            <Image
              src={logoWithText}
              alt="logo with text"
              width="170"
              height="100"
            />
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-droneBlue">
            <p className="text-droneBlue uppercase font-light">Contact Us</p>
            {contactUs.map(({ id, info }) => {
              return (
                <div key={id} className="flex flex-row space-x-2">
                  <p className="tracking-wider text-xs">{info}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col space-y-3 text-droneBlue">
            <p className="text-droneBlue uppercase font-light">Follow Us</p>
            <div className="flex flex-row space-x-3">
              {links.map(({ id, icon, link }) => {
                return (
                  <a
                    key={id}
                    href={link}
                    className="text-droneBlue"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[10vh] flex flex-col">
        <hr className="w-[80vw] mx-auto h-[2px] bg-droneBlue" />
        <div className="w-[80vw] mx-auto h-full flex justify-end items-center">
          <p className="text-droneBlue text-xs">
            &copy; 2022 Drone Co. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
