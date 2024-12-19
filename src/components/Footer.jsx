/* eslint-disable no-unused-vars */
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-slate-100 p-10 border-t border-slate-800">
      <div className="lg:max-w-[980px] lg:mx-auto flex flex-col gap-4 items-center justify-centerz">
        <small>&copy; 2024 Hacking Solution. All Rights Reserved</small>
        <span className="flex items-center gap-6">
          <Link
            to={
              "https://www.instagram.com/hack_solution_services?igsh=NWdobDVsOW14OW9n"
            }
            target="_blank"
          >
            <FaInstagram className="w-7 h-7 text-pink-500" />
          </Link>
          <Link to={""} target="_blank">
            <FaWhatsapp className="w-7 h-7 text-green-500" />
          </Link>
          <Link
            to={
              "https://www.facebook.com/profile.php?id=100083044876621&mibextid=kFxxJD"
            }
            target="_blank"
          >
            <FaFacebook className="w-7 h-7 text-blue-500" />
          </Link>
        </span>
        <span className="flex items-center gap-2">
          <MdSupportAgent />
          <small>hackingsolution2002@gmail.com</small>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
