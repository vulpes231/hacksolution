/* eslint-disable no-unused-vars */

import React from "react";
import { customStyles } from "../constants/styles";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import { MdChat } from "react-icons/md";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const Landing = () => {
  return (
    <section className={`${customStyles.section} min-h-screen`}>
      <Hero />
      <Analytics />
      <Services />
      <About />
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
      <div className="w-16 h-16 p-2.5 fixed bottom-0 right-10 bg-slate-100 rounded-full hover:bg-cyan-500">
        <MdChat className="w-full h-full cursor-pointer" />
      </div>
    </section>
  );
};

export default Landing;
