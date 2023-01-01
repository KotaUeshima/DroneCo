import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { ImAddressBook } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

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

  const quickLinks = [
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Partner with Us",
      href: "/",
    },
    {
      title: "About Us",
      href: "/",
    },
  ];

  const termsLinks = [
    {
      title: "Privacy",
      href: "/",
    },
    {
      title: "Terms",
      href: "/",
    },
    {
      title: "Privacy Terms",
      href: "/",
    },
    {
      title: "Terms & Conditions",
      href: "/",
    },
  ];

  const contactUs = [
    {
      info: "12345 Inwoord Road, Dallas TX",
      icon: <ImAddressBook size={15} />,
    },
    {
      info: "123-456-2312",
      icon: <BsFillTelephoneFill size={15} />,
    },
    {
      info: "example@gmail.com",
      icon: <MdEmail size={15} />,
    },
  ];

  return (
    <footer className="bg-droneBlue">
      <div className="max-w-6xl flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-2 md:items-start">
          <div>
            <Image
              src="/../public/assets/FinalLogoAndText.png"
              alt="/"
              width="170"
              height="100"
            />
            <p className="text-white text-xs">
              &copy; 2022 Drone Co. All Rights Reserved.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            {links.map(({ id, icon, link }) => {
              return (
                <a
                  key={id}
                  href={link}
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <p className="text-white font-medium border-b-2 border-b-droneOrange">
              Quick Links
            </p>
            {quickLinks.map(({ title, href }) => {
              return (
                <Link
                  href={href}
                  className="hover:text-droneOrange text-xs ease-linear duration-200"
                  key={title}
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <p className="text-white font-medium border-b-2 border-b-droneOrange">
              Terms & Conditions
            </p>
            {termsLinks.map(({ title, href }) => {
              return (
                <Link
                  href={href}
                  className="hover:text-droneOrange text-xs ease-linear duration-200"
                  key={title}
                >
                  {title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <p className="text-white font-medium border-b-2 border-b-droneOrange">
              Contact Us
            </p>
            {contactUs.map(({ info, icon }) => {
              return (
                <div className="flex flex-row space-x-2">
                  {icon}
                  <p className="text-xs">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
