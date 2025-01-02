/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";
import { logo } from "../assets/images";
import { Link as CustomLink } from "react-router-dom";

const navLinks = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "services",
  },
  {
    id: 3,
    name: "about",
  },
  {
    id: 4,
    name: "contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="p-6 bg-slate-950 text-slate-100 fixed w-full top-0 border-b border-slate-800 z-10">
      <nav className="flex items-center justify-between lg:max-w-[980px] lg:mx-auto">
        <CustomLink to={"/"} className="flex gap-1 items-center">
          <img src={logo} alt="" className="w-[25px]" />
          <h1 className="font-bold capitalize text-lg">hack solution</h1>
        </CustomLink>
        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              return (
                <Link
                  className="capitalize text-md font-medium cursor-pointer hover:text-cyan-500"
                  key={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to={link.name}
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="lg:hidden"
          >
            {!toggle ? (
              <MdMenu className="w-6 h-6 font-medium cursor-pointer" />
            ) : (
              <MdClose className="w-6 h-6 font-medium cursor-pointer" />
            )}
          </span>
          <div
            className={
              toggle
                ? "flex flex-col bg-slate-950 absolute top-[77px] right-1 w-[250px] border border-slate-700 p-6 gap-4"
                : "hidden"
            }
          >
            {navLinks.map((link) => {
              return (
                <Link
                  className="capitalize text-md font-medium cursor-pointer hover:text-cyan-500"
                  key={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  to={link.name}
                  onClick={() => setToggle(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
