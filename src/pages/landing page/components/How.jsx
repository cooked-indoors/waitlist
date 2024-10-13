import Image from "next/image";
import React from "react";

const How = () => {
  return (
    <div id='how' className='container mx-auto'>
      <div>
      <img
      loading="lazy"
      src="/how.png"
      alt="how it works"
      className="object-contain self-center mt-16 w-full aspect-[0.77] max-w-[1360px] max-md:mt-10 max-md:max-w-full"
    />
        {/* <ImageComponent src="/how.png" alt="Main content image" /> */}
      </div>
    </div>
  );
};

export default How;
