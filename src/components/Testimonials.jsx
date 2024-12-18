/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { blake, bony, chet, christos, lotfi, mirjam } from "../assets/images";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jimmy Sails",
      title: "Trader",
      testimony:
        "This service helped me recover funds that I thought were lost forever. The team was extremely professional and kept me updated every step of the way.",
    },
    {
      name: "Chloe Smith",
      title: "Enterpreneur",
      testimony:
        "I was scammed in a cryptocurrency scheme, but thanks to this team, I got my money back. Their expertise and persistence were remarkable.",
    },
    {
      name: "Robert Johnson",
      title: "Investor",
      testimony:
        "I can't thank them enough for their efforts in helping me recover my assets. They were knowledgeable and efficient, and I highly recommend them to anyone who has been scammed.",
    },
    {
      name: "Alice Williams",
      title: "Marketing Specialist",
      testimony:
        "I had doubts about recovering my lost funds, but after working with this company, I am beyond impressed. The recovery process was smooth, and they were always available for questions.",
    },
    {
      name: "Salam Marrakesh",
      title: "Artist",
      testimony:
        "Saved me from future heartbreak. I still can't thank this team enough. very detailed in their return informations.",
    },
    {
      name: "Chette Kuame",
      title: "Athlete",
      testimony:
        "if I had know about this site years ago i would have saved myself from a lot of heartaches. but not anymore very good at finding extensive information. kudos to the team",
    },
  ];

  // State for keeping track of which batch of 3 testimonials to show
  const [currentBatch, setCurrentBatch] = useState(0);

  // Function to change the current batch after 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBatch(
        (prevBatch) => (prevBatch + 1) % Math.ceil(testimonials.length / 3)
      );
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, []);

  // Slice the testimonials array to get the current batch
  const currentTestimonials = testimonials.slice(
    currentBatch * 3,
    currentBatch * 3 + 3
  );

  return (
    <div className="bg-slate-900 text-slate-100 py-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-12">
        What Our Clients Say
      </h2>
      <div className="max-w-[980px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentTestimonials.map((testimonial, index) => {
          const img = testimonial.name.includes("Jimmy")
            ? blake
            : testimonial.name.includes("Chloe")
            ? bony
            : testimonial.name.includes("Robert")
            ? christos
            : testimonial.name.includes("Chette")
            ? chet
            : testimonial.name.includes("Salam")
            ? lotfi
            : testimonial.name.includes("Alice")
            ? mirjam
            : null;
          return (
            <div
              key={index}
              className="bg-slate-950 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-slate-700 flex items-center justify-center flex-col gap-4"
            >
              <figure className="bg-white w-[100px] h-[100px] rounded-full flex items-center justify-center">
                <img src={img} alt="image" className="w-full" />
              </figure>
              <small className="italic text-sm mb-4 text-slate-200">
                {testimonial.testimony}
              </small>
              <div className="mt-2 text-center">
                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                <p className="text-slate-400">{testimonial.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
