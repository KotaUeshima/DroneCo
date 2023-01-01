import React from "react";

function ContactUsForm() {
  return (
    <div className="min-h-screen w-full py-20 bg-droneBlue text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center border-x-[2px] border-white">
        <div className="pb-8 text-center">
          <h2 className="mt-12 text-4xl font-medium text-center">
            Elevate your Business with DroneCo.
          </h2>
          <p className="text-center text-gray-400">
            Delivering services to meet your needs.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/dfe9a9e9-6b9c-433a-9867-96d178be9e94"
            method="POST"
            className="flex flex-col w-full md:w-2/3"
          >
            <div className="flex flex-row space-x-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="p-2 bg-white border-2 rounded-md w-1/2 text-black focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className="p-2 bg-white border-2 rounded-md w-1/2 text-black focus:outline-none"
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email*"
              className="mt-4 p-2 bg-white border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              className="mt-4 p-2 bg-white border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number*"
              className="mt-4 p-2 bg-white border-2 rounded-md text-black focus:outline-none"
            />
            <textarea
              name="additionalInfo"
              placeholder="Additional Info (optional)"
              rows="6"
              className="mt-4 p-2 bg-white border-2 rounded-md text-black focus:outline-none"
            ></textarea>
            <button className="mt-6 mx-auto bg-droneOrange hover:bg-transparent px-1 py-2 w-1/2 rounded-xl hover:text-white text-white border-[1px] hover:border-[1px] border-droneOrange hover:border-white duration-500">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
