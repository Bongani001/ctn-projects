import React from "react";
import ctnLogo from "../../assets/ctn-logo.svg";

const About = () => {
  return (
    <div className="grid grid-cols-2 items-center justify-between px-20 py-20">
      <img src={ctnLogo} className="w-88" alt="CTN Projects logo" />
      <div>
        <span className="text-4xl font-bold tex-center">
          About CTN Projects
        </span>
        <div className="space-y-3 mt-4">
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
    </div>
  );
};

export default About;
