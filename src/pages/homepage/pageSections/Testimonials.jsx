import React from "react";
import chrisAvatar from "/src/assets/chris.png";
import benjaminAvatar from "/src/assets/benjamin.png";
import lillianAvatar from "/src/assets/lillian.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="bg-primary/15 rounded-2xl relative pt-20 pb-30 px-5 mx-5 sm:mx-20 my-30">
      <h3 className="text-xl sm:text-3xl text-center font-extrabold">
        Hear What Our Customers Have To Say
      </h3>
      <p className="text-center text-sm sm:text-base sm:font-medium mt-5">
        From homeowners to facility managers, our clients rely on CTN Projects
        for dependable air filtration and outstanding service. See how our
        filters are making a difference in real spaces. cleaner air, happier
        customers.
      </p>

      <div className="grid md:grid-cols-3 gap-4 md:gap-10 md:absolute left-0 md:-bottom-2/4 lg:-bottom-1/3 px-5 mt-5 md:mt-0">
        <div className="bg-[#849EAD] text-white rounded-2xl p-5">
          <div className="flex gap-3">
            <img
              src={chrisAvatar}
              className="rounded-full h-12 w-12"
              alt="User Avatar"
            />
            <div>
              <span className="font-bold">Christopher Carter</span>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
          <p className="text-sm mt-2">
            I noticed a huge difference in air quality and comfort. CTN Projects
            offered the most effective and affordable solution without
            upselling.
          </p>
        </div>{" "}
        <div className="bg-[#849EAD] text-white rounded-2xl p-5">
          <div className="flex gap-3">
            <img
              src={benjaminAvatar}
              className="rounded-full h-12 w-12"
              alt="User Avatar"
            />
            <div>
              <span className="font-bold">Benjamin Foster</span>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
          <p className="text-sm mt-2">
            Theresa was knowledgeable and helpful throughout. If you need
            reliable filtration, this is the team to go with.
          </p>
        </div>
        <div className="bg-[#849EAD] text-white rounded-2xl p-5">
          <div className="flex gap-3">
            <img
              src={lillianAvatar}
              className="rounded-full h-12 w-12"
              alt="User Avatar"
            />
            <div>
              <span className="font-bold">Lillian Brooks</span>
              <div className="flex text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
          <p className="text-sm mt-2">
            CTN Projects exceeded expectations. The HEPA filters improved our
            facility's air, and the service was great from start to finish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
