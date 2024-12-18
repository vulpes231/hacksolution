/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaHeartCrack, FaRecycle } from "react-icons/fa6";
import { TbSocial } from "react-icons/tb";
import { MdOutlineAlternateEmail, MdVerified } from "react-icons/md";
import { FaDev, FaCreditCard, FaDatabase } from "react-icons/fa";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { GrLicense } from "react-icons/gr";
import { customStyles } from "../constants/styles";

const myservices = [
  {
    id: 1,
    title: "investigate a cheating spouse",
    info: "We will help you spy’s and monitor any targeted cell phones remotely without physical contact with the targeted device and you will have access to activities on the cell phones such as: ",
    features: [
      "Calls (Incoming and Outgoing calls)",
      "Eavesdrop call conversations",
      "Access to social media (WhatsApp, Facebook, Instagram...)",
      "Gallery- ( current and deleted pictures,files,videos, Audio)",
      "Browsing history, caches",
      "Email Accounts",
    ],
  },
  {
    id: 2,
    title: "Lost fund recovery",
    info: "We help in recovering lost funds from any fraudulent activity in any part of the world. What if you could recover the money you lost to a binary options, forex investment, online romance, cryptocurrency, tax refund and lottery scams and many more? Here at hacking solution we recover your funds for you and deliver the scammers to the appropriate authorities.",
    features: [],
  },
  {
    id: 2,
    title: "Lost fund recovery",
    info: "We help in recovering lost funds from any fraudulent activity in any part of the world. What if you could recover the money you lost to a binary options, forex investment, online romance, cryptocurrency, tax refund and lottery scams and many more? Here at hacking solution we recover your funds for you and deliver the scammers to the appropriate authorities.",
    features: [],
  },
];

const services = [
  "investigate a cheating spouse",
  "recover lost funds",
  "recover hacked social media account",
  "monitor workers profile and emails",
  "web development",
  "repair credit score",
  "upgrade school result",
  "clear criminal and DMV records",
  "hack into websites and databases",
  "bypass google verification",
];

const Services = () => {
  return (
    <div id="services" className="bg-slate-900 text-slate-100 p-6">
      <div className="lg:max-w-[980px] lg:mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((srv, index) => {
            const icon = srv.includes("spouse") ? (
              <FaHeartCrack className={customStyles.icon} />
            ) : srv.includes("funds") ? (
              <FaRecycle className={customStyles.icon} />
            ) : srv.includes("social media") ? (
              <TbSocial className={customStyles.icon} />
            ) : srv.includes("workers") ? (
              <MdOutlineAlternateEmail className={customStyles.icon} />
            ) : srv.includes("development") ? (
              <FaDev className={customStyles.icon} />
            ) : srv.includes("credit") ? (
              <FaCreditCard className={customStyles.icon} />
            ) : srv.includes("school") ? (
              <HiMiniAcademicCap className={customStyles.icon} />
            ) : srv.includes("criminal") ? (
              <GrLicense className={customStyles.icon} />
            ) : srv.includes("databases") ? (
              <FaDatabase className={customStyles.icon} />
            ) : srv.includes("verification") ? (
              <MdVerified className={customStyles.icon} />
            ) : null;
            return (
              <div
                key={index}
                className="flex flex-col gap-4 bg-slate-950 p-6 items-center justify-center rounded-lg text-center border border-slate-700"
              >
                <span>{icon}</span>
                <span className="capitalize text-slate-400 text-sm">{srv}</span>
                <Link className="p-2 bg-white text-slate-800 rounded-sm text-xs">
                  Learn more
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
