/* eslint-disable no-unused-vars */

import React from "react";
import { MdEmail } from "react-icons/md";
import { customStyles } from "../constants/styles";

const Contact = () => {
  return (
    <div id="contact" className="bg-black text-slate-100 p-6 lg:p-20">
      <div className="flex flex-col md:flex-row gap-2 lg:max-w-[980px] lg:mx-auto">
        <div className="w-full flex flex-col items-center justify-center bg-white text-slate-800 p-6">
          <MdEmail className="w-28 h-28" />
          <p className="text-center">
            If you have questions, or just want to get in touch use this form.
            We look forward to hearing from you.
          </p>
        </div>
        <form action="" className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Contact Us
          </h2>
          <div className={customStyles.formHolder}>
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              className="p-2 bg-slate-900 border border-slate-700 outline-none"
            />
          </div>
          <div className={customStyles.formHolder}>
            <label htmlFor="">Your Email</label>
            <input
              type="text"
              className="p-2 bg-slate-900 border border-slate-700 outline-none"
            />
          </div>
          <div className={customStyles.formHolder}>
            <label htmlFor="">Your Message</label>
            <textarea
              className={customStyles.input}
              name=""
              id=""
              rows={5}
            ></textarea>
          </div>

          <button className="bg-cyan-500 text-slate-100 p-2">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
