/* eslint-disable no-unused-vars */
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-black text-slate-400 p-6 lg:p-20 leading-10 tracking-wide"
    >
      <div className=" lg:max-w-[980px] lg:mx-auto flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-center mb-12 text-slate-100">
          About us
        </h2>
        <p>
          We are recognized globally for having the highest success rate in
          recovering lost cryptocurrency and funds. Our team consists of experts
          with extensive experience in finance, law, and regulatory matters. Our
          mission is clear: to assist victims of scams in recovering their lost
          assets.
        </p>
        <p>
          Leveraging actionable intelligence from a range of reliable sources,
          our specialists ensure that your funds and assets are returned to you,
          the rightful owner.
        </p>

        <p>
          Our Funds Recovery Department is dedicated to executing chargebacks
          and reclaiming wealth lost through online scams and fraud. As the
          prevalence of binary options, cryptocurrency scams, and Ponzi schemes
          has increased, countless innocent individuals have lost significant
          amounts of money. This is why our company was founded — to help those
          affected recover their lost funds and restore financial security.
        </p>
      </div>
    </div>
  );
};

export default About;
