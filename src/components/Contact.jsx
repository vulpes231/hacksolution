/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { customStyles } from "../constants/styles";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name) {
      setError("Enter your name!");
      setLoading(false);
      return;
    }
    if (!form.email) {
      setError("Enter your email!");
      setLoading(false);
      return;
    }
    if (!form.message) {
      setError("Enter your message!");
      setLoading(false);
      return;
    }

    console.log(form);
    setError("");

    setForm({
      name: "",
      email: "",
      message: "",
    });
    setSuccess(true);
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [error]);

  useEffect(() => {
    let timeout;
    if (success) {
      timeout = setTimeout(() => {
        setLoading(false);
        setSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [success]);
  return (
    <div id="contact" className="bg-black text-slate-100 p-6 lg:p-20">
      <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-2 lg:max-w-[980px] lg:mx-auto">
        <form action="" className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Contact Us
          </h2>
          <div className={customStyles.formHolder}>
            <label htmlFor="">Your Name</label>
            <input
              type="text"
              className="p-2 bg-slate-900 border border-slate-700 outline-none"
              onChange={handleInput}
              value={form.name}
              name="name"
            />
          </div>
          <div className={customStyles.formHolder}>
            <label htmlFor="">Your Email</label>
            <input
              type="text"
              className="p-2 bg-slate-900 border border-slate-700 outline-none"
              onChange={handleInput}
              value={form.email}
              name="email"
            />
          </div>
          <div className={customStyles.formHolder}>
            <label htmlFor="">Your Message</label>
            <textarea
              className={customStyles.input}
              rows={5}
              onChange={handleInput}
              value={form.message}
              name="message"
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}
          {success && <p className="text-green-500 text-xs">Message sent.</p>}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-cyan-500 text-slate-100 p-2"
          >
            {!loading ? "Send message" : "Sending message..."}
          </button>
        </form>
        <div className="w-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-6">
          <MdEmail className="w-28 h-28" />
          <p className="text-center">
            If you have questions, or just want to get in touch use this form.
            We look forward to hearing from you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
