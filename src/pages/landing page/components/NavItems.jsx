import React from "react";

const NavItems = ({ className }) => {
  return (
    <div
      className={`flex gap-10 font-medium hover:[&>button]:text-primaryColor [&>button]:transition-all ${className}`}
    >
      <button>About</button>
      <button>Contact us</button>
      <button>Our Services</button>
      <button>How we work</button>
    </div>
  );
};

export default NavItems;
