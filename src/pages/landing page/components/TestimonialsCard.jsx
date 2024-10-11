import React from "react";

const TestimonialsCard = ({ text, author }) => {
  return (
    <div className="flex flex-col items-end ">
      <div className="text-xl md:text-3xl font-medium leading-8 md:leading-[3rem] text-primaryColor">
        <span className="text-4xl md:text-6xl font-bold leading-10 md:leading-[6rem]">
          “
        </span>
        {text}”
      </div>
      <div className="text-lg md:text-xl font-bold leading-8 md:leading-[3rem] text-black10">
        — {author}
      </div>
    </div>
  );
};

export default TestimonialsCard;
