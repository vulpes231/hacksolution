/* eslint-disable no-unused-vars */

import React from "react";
import { customStyles } from "../constants/styles";
import Hero from "../components/Hero";

const Landing = () => {
  return (
    <section className={`${customStyles.section} min-h-screen`}>
      <Hero />
    </section>
  );
};

export default Landing;
