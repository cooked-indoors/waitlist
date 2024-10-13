import React from "react";
import Link from "next/link";

const NavItems = ({ className }) => {
  return (
    <div
      className={`flex gap-10 font-medium hover:[&>button]:text-primaryColor [&>button]:transition-all ${className}`}
    >
        <Link href="#about" scroll={false}>
      <button>About</button>
            </Link>
            <Link href="#contact" scroll={false}>
      <button>Contact us</button>
            </Link>
            <Link href="#services" scroll={false}>
      <button>Our Services</button>
            </Link>
            <Link href="#how" scroll={false}>
      <button>How we work</button>
            </Link>
    </div>
  );
};

export default NavItems;
