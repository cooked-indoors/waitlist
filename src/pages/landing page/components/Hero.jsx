import React from "react";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container flex flex-col items-center">
        <h5 className="font-bold text-center text-black10 text-4xl md:text-7xl md:px-20 lg:leading-[105px]">
          Nutritious <span className=" text-primaryColor">Meals</span> Delivered
          to <span className=" text-orangeF3">Homes</span> &{" "}
          <span className=" text-primaryColor">Hospitals.</span>
        </h5>
        

        <p className="z-10 mt-6 mb-10 text-xl font-medium text-center text-black10">
          {`A new way to eat healthy—whether you're a patient, hospital, or
        health-conscious individual.`}
        </p>

            <a className="z-20" href="https://wa.me/2349132939487">
        <CustomBtn
          className={"min-h-[60px] z-10 mb-6"}
          text={"Order a Meal Kit"}
        />
        </a>

        <div className="sm:flex items-end justify-between w-full gap-6 -mt-[60px] hidden">
          <Image src={"/hero_1.png"} width={320} height={463} alt="" />
          <Image src={"/hero_2.png"} width={207} height={330} alt="" />

          <Image src={"/hero_3.png"} width={207} height={230} alt="" />

          <Image src={"/hero_4.png"} width={207} height={330} alt="" />

          <Image src={"/hero_5.png"} width={320} height={463} alt="" />
        </div>
      </div>

      <div className="relative block w-full sm:hidden h-[500px] -mt-[60px]">
        <Image src={"/mobile_image.png"} alt="" layout="fill" />
      </div>
    </>
  );
};

export default Hero;
