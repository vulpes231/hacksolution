/* eslint-disable no-unused-vars */
import React from "react";
import { hero } from "../assets/images";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="w-full bgImg text-slate-100 p-6 ">
      <div className="flex flex-col gap-6 items-center md:flex-row md:justify-between lg:max-w-[980px] lg:mx-auto py-24">
        <div className="flex flex-col gap-8 w-full">
          <h2 className="text-3xl lg:text-5xzl font-bold ">
            Unlock Your Digital Potential
          </h2>
          <p className="font-light text-slate-300 text-md lg:text-lg">
            Expert hacking solutions to safeguard your assets, optimize
            performance, and solve your toughest cybersecurity challenges.
          </p>
          <span>
            <Link
              className="capitalize text-md font-medium cursor-pointer bg-slate-100 text-slate-800 py-2.5 px-6 rounded-3xl hover:bg-slate-300"
              spy={true}
              smooth={true}
              duration={500}
              to="contact"
            >
              Talk to the team
            </Link>
          </span>
        </div>
        <div className="w-full flex items-center justify-center">
          {/* <img src={hero} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
