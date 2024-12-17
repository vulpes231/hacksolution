/* eslint-disable no-unused-vars */
import React from "react";
import { MdMenu } from "react-icons/md";
import { Link } from "react-scroll";

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
  return (
    <header className="p-6 bg-slate-950 text-slate-100 fixed w-full top-0">
      <nav className="flex items-center justify-between lg:max-w-[980px] lg:mx-auto">
        <span>
          <h1 className="font-bold capitalize text-lg">hacking solution</h1>
        </span>
        <div className="flex items-center gap-6">
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              return (
                <Link
                  className="capitalize text-md font-medium"
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
          <span className="lg:hidden">
            <MdMenu className="w-6 h-6 font-medium" />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
