import React from "react";
import homeAircon from "/home-aircon.png";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-between px-5 sm:px-20 sm:mt-50 mb-20">
      <img
        src={homeAircon}
        className="w-full sm:w-[40%] rounded-2xl object-cover mt-10 sm:mt-0"
        alt="Aircon in a home"
        data-aos="fade-right"
      />
      <div className="pt-10 sm:px-24" data-aos="fade-left">
        <h3 className="text-3xl font-extrabold mb-5">
          Still Searching For The Right Air Filters Or Lab Equipment?
        </h3>
        <p>
          Join the growing number of professionals, businesses, and homeowners
          across Africa who trust CTN Projects for reliable, high-performance
          filtration and laboratory solutions.
        </p>
        <p className="my-5">
          Get in touch today for a free quote or expert advice.
        </p>

        <Link to="/contact">
          <button className="bg-primary/90 text-white font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4">
            Get A Free Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
