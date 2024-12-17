/* eslint-disable no-unused-vars */
import React from "react";
import {
  MdCheck,
  MdCheckCircle,
  MdDocumentScanner,
  MdGroups,
} from "react-icons/md";
import { customStyles } from "../constants/styles";
const data = [
  {
    id: "experience",
    total: "5 Years",
    name: "experience",
  },
  {
    id: "solved",
    total: "8,098",
    name: "cases solved",
  },
  {
    id: "rate",
    total: "83%",
    name: "success rate",
  },
];

const Analytics = () => {
  return (
    <div className="bg-black text-slate-100 p-6 lg:p-20">
      <div className="grid lg:grid-cols-3 gap-16 lg:max-w-[980px] lg:mx-auto">
        {data.map((dt) => {
          const icon =
            dt.id === "experience" ? (
              <MdGroups className={`${customStyles.icon} text-cyan-500`} />
            ) : dt.id === "solved" ? (
              <MdDocumentScanner
                className={`${customStyles.icon} text-yellow-500`}
              />
            ) : (
              <MdCheckCircle
                className={`${customStyles.icon} text-green-500`}
              />
            );
          return (
            <div
              key={dt.id}
              className={`${
                dt.name.includes("experience")
                  ? "text-cyan-500"
                  : dt.name.includes("solved")
                  ? "text-yellow-500"
                  : "text-green-500"
              } flex flex-col gap-3 items-center justify-center `}
            >
              <span>{icon}</span>
              <span className="text-xl capitalize font-medium">{dt.name}</span>
              <span className="text-5xl font-semibold ">{dt.total}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;
