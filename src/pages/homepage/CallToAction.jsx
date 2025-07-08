import React from "react";
import labWorkers from "/src/assets/two-lab-workers.png";

const CallToAction = () => {
  return (
    <div className="flex justify-between px-20 mt-50 mb-20">
      <img
        src={labWorkers}
        className="w-[40%] rounded-2xl object-cover"
        alt="Two Lab Workers"
      />
      <div className="pt-10 px-24">
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

        <button className="bg-primary/90 text-white font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4">
          Get A Free Quote
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
