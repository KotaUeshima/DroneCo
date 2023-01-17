import React from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";

function ContactUs() {
  return (
    <div name="bottom" className="relative min-h-screen w-full flex flex-row">
      <div className="absolute -z-10 top-0 h-[30vh] w-full bg-white"></div>
      <div className="absolute -z-10 bottom-0 h-[70vh] w-full bg-gray-100"></div>

      <div className="mt-20 max-h-[75vh] w-[60vw] flex justify-center items-center">
        <form
          action="https://getform.io/f/dfe9a9e9-6b9c-433a-9867-96d178be9e94"
          method="POST"
          className="flex flex-col w-2/3 border-[1px] border-droneBlue bg-gray-50 px-20 pb-10 drop-shadow-2xl"
        >
          <div className="my-8 h-16 w-full flex justify-center items-center">
            <div className="relative h-full w-full">
              <Image
                src={logo}
                alt="logo"
                fill={true}
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              className="font-thin p-2 bg-white border-2 w-1/2 text-black focus:outline-none"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              className="font-thin p-2 bg-white border-2 w-1/2 text-black focus:outline-none"
            />
          </div>
          <input
            type="text"
            name="email"
            placeholder="Email*"
            className="font-thin mt-4 p-2 bg-white border-2  text-black focus:outline-none"
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name*"
            className="font-thin mt-4 p-2 bg-white border-2  text-black focus:outline-none"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number*"
            className="font-thin mt-4 p-2 bg-white border-2  text-black focus:outline-none"
          />
          <textarea
            name="additionalInfo"
            placeholder="Additional Info (optional)"
            rows="4"
            className="font-thin mt-4 p-2 bg-white border-2  text-black focus:outline-none"
          ></textarea>
          <button className="font-thin mt-6 mx-auto bg-droneOrange hover:bg-transparent px-1 py-2 w-1/2  hover:text-droneOrange text-white border-[1px] hover:border-[1px] border-droneOrange hover:border-droneOrange duration-500">
            Contact Us
          </button>
        </form>
      </div>
      <div className="h-[100vh] w-[30vw] flex flex-col justify-center items-center">
        <h2 className="mt-12 text-4xl font-light text-center">
          Elevate your Business with DroneCo.
        </h2>
        <p className="text-center text-gray-400">
          Delivering services to meet your needs.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
