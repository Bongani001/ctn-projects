import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-10 pt-17 mx-5 md:mx-20 mb-10" data-aos="fade-up">
      {/* ABOUT US */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">About Us</h2>
        <div className="text-sm sm:text-base space-y-5">
          <p>
            CTN Projects is a specialist supplier of air filtration solutions
            and laboratory equipment serving commercial, industrial, and
            scientific sectors across South Africa and beyond. Our mission is to
            improve air quality, protect critical environments, and support
            scientific innovation by delivering high-quality, reliable products
            and services tailored to our clients' needs.
          </p>
          <p>
            With a strong foundation in engineering and technical expertise, CTN
            Projects provides a wide range of air filtration systems including
            pocket filters, panel filters, HEPA filters, and cleanroom-grade
            solutions designed for HVAC systems, industrial facilities,
            healthcare, and laboratories.
          </p>
          <p>
            In addition to our filtration products, we supply a curated range of
            laboratory equipment, from essential instruments to advanced
            scientific tools, helping research institutions, testing labs, and
            medical facilities operate at peak performance.
          </p>
          <p>
            Our commitment to quality, customer satisfaction, and sustainable
            solutions has made us a trusted partner to businesses seeking clean
            air environments and precise lab operations.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Mission</h2>
        <p className="text-sm sm:text-base">
          To supply high-performance air filtration systems and laboratory
          equipment that ensure safety, purity, and efficiency in every working
          environment.
        </p>
      </div>

      {/* VISION */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Vision</h2>
        <p className="text-sm sm:text-base">
          To be a leading provider of clean air and lab solutions in
          Africa—trusted for our product quality, technical support, and
          customer care.
        </p>
      </div>

      {/* CORE VALUES */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold">Our Core Values</h2>
        <ul className="text-sm sm:text-base">
          <li className="flex gap-2">
            <span>
              <GoDotFill size={10} className="mt-1 sm:mt-1.5" />
            </span>
            <span className="text-sm sm:text-base">
              Quality – We deliver only tested, certified, and reliable products
            </span>
          </li>
          <li className="flex gap-2">
            <span>
              <GoDotFill size={10} className="mt-1 sm:mt-1.5" />
            </span>
            <span className="text-sm sm:text-base">
              Innovation – We stay ahead with smart, sustainable, and modern
              solutions{" "}
            </span>
          </li>
          <li className="flex gap-2">
            <span>
              <GoDotFill size={10} className="mt-1 sm:mt-1.5" />
            </span>
            <span className="text-sm sm:text-base">
              Integrity – We honour our commitments and act in the best
              interests of our clients
            </span>
          </li>
          <li className="flex gap-2">
            <span>
              <GoDotFill size={10} className="mt-1 sm:mt-1.5" />
            </span>
            <span className="text-sm sm:text-base">
              Expertise – We back our products with deep industry knowledge and
              experience
            </span>
          </li>
          <li className="flex gap-2">
            <span>
              <GoDotFill size={10} className="mt-1 sm:mt-1.5" />
            </span>
            <span className="text-sm sm:text-base">
              Customer Focus – We listen, understand, and provide tailor-made
              solutions.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
