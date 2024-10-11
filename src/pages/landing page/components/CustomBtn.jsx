import React from "react";

const CustomBtn = ({ className, text }) => {
  return (
    <button
      className={`bg-primaryColor py-3 px-16 rounded-lg border text-[white] border-primaryColor hover:bg-transparent hover:text-primaryColor hover:transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomBtn;
