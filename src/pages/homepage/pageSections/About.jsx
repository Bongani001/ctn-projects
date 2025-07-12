import React from "react";
import ctnLogo from "/ctn-logo.svg";
import labWorkers from "/two-lab-workers.png";

const About = () => {
  return (
    <div className="sm:grid grid-cols-2 sm:gap-5 justify-between px-5 sm:px-20 my-30">
      {/* <img
        src={ctnLogo}
        className="hidden sm:block min-w-50 w-[50%] place-self-center"
        alt="CTN Projects logo"
      /> */}
      <div className="flex-1">
        <span className="text-2xl font-bold tex-center">
          About CTN Projects
        </span>
        <div className="text-sm space-y-3 mt-4">
          <p>
            CTN Projects is a trusted supplier of air filtration and ventilation
            solutions, serving industries across Africa since 2019. From
            hospitals and laboratories to spray booths and industrial sites, we
            help businesses maintain clean, healthy, and compliant environments.
          </p>
          <p>
            We specialize in high-performance filters and custom solutions
            tailored to your specific needs. Backed by global manufacturers and
            an experienced support team, we ensure reliable service, expert
            guidance, and long-lasting quality.
          </p>
          <p>
            Our mission is to protect health and improve air quality through
            advanced filtration. With a strong focus on innovation,
            sustainability, and customer care, CTN Projects is your dependable
            partner in creating cleaner, safer spaces.
          </p>
        </div>
      </div>

      <img
        src={labWorkers}
        className="rounded-2xl flex-1 h-full sm:-order-1 object-cover mt-10 sm:mt-0"
        alt="Two Lab Workers"
      />
    </div>
  );
};

export default About;
