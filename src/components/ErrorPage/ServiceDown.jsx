/* eslint-disable no-unused-vars */
import React from "react";

function ServiceDown() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div
        className="w-full h-3/4 bg-no-repeat bg-[length:100%_100%]"
      ></div>
      <div>
        <h1 className="text-5xl text-center font-Montserrat text-primary tracking-wide">
          Something went wrong
        </h1>
        <p className="font-Montserrat mt-5 text-center">
          Do not worry, our developers have been notified and are frantically
          working to fix it!
        </p>
      </div>
    </div>
  );
}

export default ServiceDown;
