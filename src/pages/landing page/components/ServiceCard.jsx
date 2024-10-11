import Image from "next/image";
import React from "react";

const ServiceCard = ({ imgUrl, title, subText }) => {
  return (
    <div className="flex flex-col bg-white  rounded-t-[24px]">
      <div className="relative w-full h-[360px]">
        <Image src={imgUrl} alt="" layout="fill" className="rounded-t-[24px]" />
      </div>
      <div className="flex flex-col gap-2 px-6 py-4">
        <h5 className="text-xl font-semibold leading-9 text-primaryColor">
          {title}
        </h5>
        <p className="leading-7 text-black10">{subText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
