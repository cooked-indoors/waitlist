import React from "react";

const WhyCard = ({ title, subText }) => {
  return (
    <div className="flex flex-col gap-2 p-8 bg-white rounded-r-[24px] sm:w-[550px]">
      <h5 className="text-xl font-semibold leading-9 text-primaryColor">
        {title}
      </h5>
      <p className="leading-7 text-black10">{subText}</p>
    </div>
  );
};

export default WhyCard;
