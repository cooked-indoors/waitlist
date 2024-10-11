import React from "react";
import { WhyData } from "./data";
import WhyCard from "./WhyCard";
import Image from "next/image";

const Why = () => {
  return (
    <div className="bg-[linear-gradient(270.15deg,_#CC813E_0.13%,_#1D319A_62.47%)] relative">
      <div className="container flex flex-col items-center gap-10 py-16">
        <h5 className=" leading-[4rem] font-bold text-[2.5rem] text-white z-10 text-center">
          Why Choose Cooked Indoors?
        </h5>

        <div className="z-10 flex flex-col self-end gap-10">
          {WhyData.map((ev, index) => (
            <WhyCard key={index} title={ev.title} subText={ev.subText} />
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 z-[2] flex items-end h-full w-[80%]">
        <div className="z-[1]">
          <Image
            src={"/why_1.png"}
            alt=""
            width={430}
            height={730}
            className="relative z-10"
          />
        </div>
        <div className="z-[2] -translate-x-10">
          <Image
            src={"/why_2.png"}
            alt=""
            width={425}
            height={640}
            // className="relative -translate-x-10"
          />
        </div>
        <div className="-translate-x-28 z-[3]">
          <Image src={"/why_3.png"} alt="" width={380} height={340} />
        </div>
      </div>
    </div>
  );
};

export default Why;
