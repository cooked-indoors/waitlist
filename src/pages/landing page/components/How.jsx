import Image from "next/image";
import React from "react";

const How = () => {
  return (
    <div className="container py-16">
      <div className="relative h-[540px] md:h-[1774px]">
        <Image src={"/how.png"} alt="" layout="fill" />
        {/* <Image src={"/how_mobile.png"} alt="" layout="fill" /> */}
      </div>
    </div>
  );
};

export default How;
