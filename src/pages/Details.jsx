/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  bypass,
  cheat,
  dev,
  recover,
  social,
  dmv,
  worker,
  hackweb,
  repair,
  school,
} from "../assets/images";

const myservices = [
  {
    id: 1,
    title: "investigate a cheating spouse",
    info: "We will help you spy and monitor any targeted cell phones remotely without physical contact with the targeted device. You will have access to activities on the cell phones such as: ",
    features: [
      "Calls (Incoming and Outgoing calls)",
      "Eavesdrop call conversations",
      "Access to social media (WhatsApp, Facebook, Instagram...)",
      "Gallery- (current and deleted pictures, files, videos, Audio)",
      "Browsing history, caches",
      "Email Accounts",
    ],
    img: cheat,
  },
  {
    id: 2,
    title: "recover lost funds",
    info: "We help in recovering lost funds from any fraudulent activity in any part of the world. What if you could recover the money you lost to a binary options, forex investment, online romance, cryptocurrency, tax refund, and lottery scams and many more? Here at hacking solution, we recover your funds for you and deliver the scammers to the appropriate authorities.",
    features: [
      "Fund recovery from all types of scams",
      "Tracking and locating scammers",
      "Working with law enforcement",
      "Confidential and secure process",
      "Complete recovery support",
    ],
    img: recover,
  },
  {
    id: 3,
    title: "recover hacked social media account",
    info: "Has your social media account been hacked? We specialize in recovering all types of accounts including Facebook, Instagram, Twitter, and others. We ensure your account is restored securely and swiftly.",
    features: [
      "Account restoration",
      "Password reset and secure recovery",
      "Two-factor authentication setup",
      "Monitoring of unauthorized activity",
      "Prevention of future hacks",
    ],
    img: social,
  },
  {
    id: 4,
    title: "monitor workers profile and emails",
    info: "Stay on top of your team's productivity and ensure data security with our employee monitoring services. We track profiles, emails, and online activities to prevent internal threats and boost performance.",
    features: [
      "Real-time email monitoring",
      "Employee productivity tracking",
      "Monitoring of team communications",
      "Data breach prevention",
      "Report generation and analysis",
    ],
    img: worker,
  },
  {
    id: 5,
    title: "web development",
    info: "We provide high-quality web development services to build responsive, secure, and scalable websites. Whether you're launching a personal blog or a full-fledged e-commerce platform, we've got you covered.",
    features: [
      "Custom website design",
      "Responsive design for mobile and desktop",
      "E-commerce solutions",
      "SEO optimization",
      "Secure and fast-loading websites",
    ],
    img: dev,
  },
  {
    id: 6,
    title: "repair credit score",
    info: "A poor credit score can affect your ability to get loans or credit. Our team specializes in helping individuals repair their credit scores through proven strategies and expert guidance.",
    features: [
      "Credit score analysis and report review",
      "Dispute inaccurate information",
      "Negotiation with creditors",
      "Debt settlement advice",
      "Credit improvement strategies",
    ],
    img: repair,
  },
  {
    id: 7,
    title: "upgrade school result",
    info: "Want to improve your academic record? We offer professional services to help upgrade school results through legal methods and collaboration with educational institutions.",
    features: [
      "Grade improvement consultations",
      "Collaboration with academic institutions",
      "Ensure your results reflect your true abilities",
      "Help with failed courses or subjects",
      "Confidential and discreet service",
    ],
    img: school,
  },
  {
    id: 8,
    title: "clear criminal and DMV records",
    info: "Clear your criminal and DMV records to start fresh. We assist in expunging criminal records and removing negative driving history that may affect your future opportunities.",
    features: [
      "Expungement of criminal records",
      "Removal of traffic violations from DMV records",
      "Clearance of arrest records",
      "Consultation on eligibility for record expungement",
      "Legal assistance and advice",
    ],
    img: dmv,
  },
  {
    id: 9,
    title: "hack into websites and databases",
    info: "We provide high-level hacking services to access websites and databases. Our team is experienced in bypassing security measures for various purposes, including penetration testing and vulnerability assessments.",
    features: [
      "Penetration testing for website security",
      "Bypass security firewalls and authentication systems",
      "Database extraction and analysis",
      "Vulnerability assessments",
      "Confidential and ethical hacking practices",
    ],
    img: hackweb,
  },
  {
    id: 10,
    title: "bypass google verification",
    info: "We offer services to bypass Google account verification in case of account lockouts, password issues, or other access restrictions.",
    features: [
      "Google account verification bypass",
      "Password reset assistance",
      "Recovery of locked Google accounts",
      "Secure and private process",
      "24/7 customer support",
    ],
    img: bypass,
  },
];

const Details = () => {
  const { srv } = useParams();
  const serviceDetail = myservices.find((serv) => serv.title === srv);

  useEffect(() => {
    document.title = "Hacking Solution - Service";
  });
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen lg:h-screen pt-24 p-6">
      <div className="w-full lg:max-w-[980px] lg:mx-auto ">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center ">
          <div className="flex flex-col gap-6 w-full bg-slate-950 p-6 border border-slate-700 rounded-lg shadow-lg">
            <h3 className="capitalize font-semibold text-lg md:text-xl text-cyan-400">
              {serviceDetail.title}
            </h3>
            <p className="text-sm text-slate-300 leading-7">
              {serviceDetail.info}
            </p>
            <ul className="flex flex-col gap-4 list-disc pl-8 mt-4">
              {serviceDetail.features.map((ft, index) => (
                <li
                  className="ml-1 text-cyan-400 text-sm hover:text-cyan-500 transition-colors duration-200"
                  key={index}
                >
                  {ft}
                </li>
              ))}
            </ul>
          </div>

          <figure className="w-full">
            <img src={serviceDetail.img} alt="image" className="rounded-full" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Details;
