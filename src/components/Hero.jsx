/* eslint-disable no-unused-vars */
import React from "react";
import { hero } from "../assets/images";

const Hero = () => {
  return (
    <div id="home" className="w-full bgImg text-slate-100 p-6 ">
      <div className="flex flex-col gap-6 items-center md:flex-row md:justify-between lg:max-w-[980px] lg:mx-auto py-24">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl lg:text-5xl font-bold ">
            Unlock Your Digital Potential
          </h2>
          <p className="font-light text-slate-300 text-md lg:text-lg">
            Expert hacking solutions to safeguard your assets, optimize
            performance, and solve your toughest cybersecurity challenges.
          </p>
        </div>
        <div className="w-full flex items-center justify-center">
          {/* <img src={hero} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
