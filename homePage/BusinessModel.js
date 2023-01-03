import React from "react";

function BusinessModel() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex flex-col">
      <div className="mt-24 px-5">
        <div className="flex flex:row items-center">
          <hr className="w-1/3 h-[2px] bg-fontBlack" />
          <div className="mx-auto">
            <h2 className="text-center font-medium text-4xl text-fontBlack ">
              Drone as a Business.
            </h2>
            <p className="text-center text-gray-400">
              Delivering services to meet your needs.
            </p>
          </div>
          <hr className="w-1/3 h-[2px] bg-fontBlack " />
        </div>
        <div className="flow-root max-w-6xl mx-auto">
          <div className="mt-12 float-left flex flex-col">
            <div className="flex flex-col justify-center">
              <h2 className=" font-medium text-fontBlack text-3xl tracking-wider">
                Subscription Model.
              </h2>
              <p className="mt-5 text-base text-fontBlack">
                Standard Delivery Options.
              </p>
              <div className="flex flex-row">
                <div className="bg-droneOrange my-6 mr-2 p-4 rounded-lg text-white">
                  QSRs
                </div>
                <div className="bg-droneOrange my-6 mr-2 p-4 rounded-lg text-white">
                  Pharmacy
                </div>
              </div>
            </div>
            <div className="mt-20 flex flex-col justify-center">
              <h2 className="font-medium text-3xl text-fontBlack tracking-wider">
                Partnership Model.
              </h2>
              <p className="mt-5 text-base text-fontBlack">
                End-to-End Operations and Full Integrations.
              </p>
              <div className="flex flex-row">
                <div className="bg-droneOrange my-6 mr-2 p-4 rounded-lg text-white">
                  Retail Stores
                </div>
                <div className="bg-droneOrange my-6 mr-2 p-4 rounded-lg text-white">
                  Grocery Outlets
                </div>
                <div className="bg-droneOrange my-6 mr-2 p-4 rounded-lg text-white">
                  E-Commerce
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 float-right w-full md:w-1/2 py-20 flex justify-center items-center">
            <img
              src="https://upserve.com/media/sites/2/Restaurant-Business-Plan.png"
              alt="Business Graphic"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessModel;
