import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import Dashed from "./Dashed";

const Testimonials = () => {
  return (
    <>
      <Dashed />

      <div className="container grid items-center grid-cols-1 gap-10 py-16 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-6 md:gap-10 ">
          <h5 className="font-bold text-center md:text-left ">
            <span className="text-4xl md:text-6xl text-orangeF3 md:leading-[6rem]">
              Testimonials
            </span>
            <div className="text-2xl md:text-[2.5rem]  text-primaryColor md:leading-[4rem]">
              from our users.
            </div>
          </h5>

          <p className="text-xl md:leading-10 text-black10">
            Here is what our users had to say about Cooked Indoors online.
          </p>
        </div>
        <div className="flex flex-col gap-10 ">
          {[
            {
              text: "Cooked Indoors has completely transformed the way we handle hospital food. Our patients love the meals!",
              author: "Timilehin - Meal Kit Customer",
            },
            {
              text: "The meal kit delivery is a game-changer! Fresh ingredients delivered straight to my door.",
              author: "Sarah, Cook for Me customer.",
            },
          ].map((ev, index) => (
            <TestimonialsCard key={index} text={ev.text} author={ev.author} />
          ))}
        </div>
      </div>
      <Dashed />
      <div className="mb-16"></div>
    </>
  );
};

export default Testimonials;
