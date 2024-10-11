import Image from "next/image";
import React from "react";
import { socials } from "../..";

const Footer = () => {
  return (
    <div className="py-16 text-white bg-primaryColor">
      <div className="container flex flex-col items-center">
        <h5 className="text-4xl font-bold leading-[4rem]">Contact Us</h5>
        <p className="mb-10 text-center">
          Do you have any questions or need more information? Reach out to us!
          at{" "}
          <a href="" className="font-medium ">
            info@cookedindoors.com
          </a>
        </p>
        <div className="flex flex-wrap items-center justify-center w-full gap-6 md:justify-between">
          <div className="flex items-center gap-4 font-medium">
            <button>Privacy Policy</button>
            <button>Terms & Conditions</button>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button className="text-xl font-semibold">Follow us</button>
            {socials.map((val) => (
              <a
                key={val.name}
                href={val.path}
                className=" w-[24px] h-[24px] relative"
              >
                <Image src={val.img} alt={val.name} layout="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-[1fr_300px_1fr] sm:grid-cols-[1fr_max-content_1fr] w-full items-center gap-2 mt-16">
        <div className=" h-[1px] w-full bg-white"></div>
        <div className="text-center ">
          Copyright © {new Date().getFullYear()} cookedindoors.com. All rights
          reserved
        </div>
        <div className=" h-[1px] w-full bg-white"></div>
      </div>
    </div>
  );
};

export default Footer;
