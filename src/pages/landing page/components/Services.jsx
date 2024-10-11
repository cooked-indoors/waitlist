import React from "react";
import { ServicesData } from "./data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="container flex flex-col items-center py-16">
      <h5 className="text-4xl font-bold leading-[4rem] text-primaryColor">
        Our Services
      </h5>
      <p className="mb-10 text-xl leading-10 text-primaryColor">
        We offer three core services designed to meet your needs.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ServicesData.map((ev, index) => (
          <ServiceCard
            key={index}
            imgUrl={ev.imgUrl}
            title={ev.title}
            subText={ev.subText}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
