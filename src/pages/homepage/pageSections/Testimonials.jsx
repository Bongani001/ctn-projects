import React from "react";
import chrisAvatar from "/chris.png";
import benjaminAvatar from "/benjamin.png";
import lillianAvatar from "/lillian.png";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="bg-primary/15 rounded-2xl relative pt-10 sm:pt-20 pb-10 sm:pb-30 px-5 mx-5 sm:mx-20 my-30">
      <h3 className="text-xl sm:text-3xl text-center font-extrabold">
        Hear What Our Customers Have To Say
      </h3>
      <p className="text-center text-sm sm:text-base sm:font-medium mt-5">
        From homeowners to facility managers, our clients rely on CTN Projects
        for dependable air filtration and outstanding service. See how our
        filters are making a difference in real spaces. cleaner air, happier
        customers.
      </p>

      {/* DESKTOP VIEW */}
      <div
        className="hidden md:grid md:grid-cols-3 gap-4 md:gap-1 lg:gap-10 md:absolute left-0 md:-bottom-2/4 lg:-bottom-1/3 sm:px-5 mt-5 md:mt-0"
        data-aos="fade-up"
      >
        <div className="bg-[#849EAD] text-white rounded-2xl p-5">
          <div className="flex gap-3">
            {/* <img
              src={chrisAvatar}
              className="rounded-full h-12 w-12"
              alt="User Avatar"
            /> */}
            <FaCircleUser fill="#023b60" className="w-12 h-12" />
            <div>
              <span className="font-bold">Melisa</span>
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
        </div>

        <div className="bg-[#849EAD] text-white rounded-2xl p-5">
          <div className="flex gap-3">
            {/* <img
              src={benjaminAvatar}
              className="rounded-full h-12 w-12"
              alt="User Avatar"
            /> */}
            <FaCircleUser fill="#023b60" className="w-12 h-12" />
            <div>
              <span className="font-bold">Hazel</span>
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
            {/* <img
              src={lillianAvatar}
              className="rounded-full h-12 w-12"
              alt="User Avatar"
            /> */}
            <FaCircleUser fill="#023b60" className="w-12 h-12" />
            <div>
              <span className="font-bold">Ricardo</span>
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

      {/* MOBILE VIEW CAROUSEL */}
      <div className="md:hidden mt-5" data-aos="fade-right">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#849EAD] text-white rounded-2xl p-5">
              <div className="flex gap-3">
                {/* <img
                  src={chrisAvatar}
                  className="rounded-full h-12 w-12"
                  alt="User Avatar"
                /> */}
                <FaCircleUser fill="#023b60" className="w-12 h-12" />
                <div>
                  <span className="font-bold">Melisa</span>
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
                I noticed a huge difference in air quality and comfort. CTN
                Projects offered the most effective and affordable solution
                without upselling.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#849EAD] text-white rounded-2xl p-5">
              <div className="flex gap-3">
                {/* <img
                  src={benjaminAvatar}
                  className="rounded-full h-12 w-12"
                  alt="User Avatar"
                /> */}
                <FaCircleUser fill="#023b60" className="w-12 h-12" />
                <div>
                  <span className="font-bold">Hazel</span>
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
          </SwiperSlide>
          <SwiperSlide className="h-full">
            <div className="bg-[#849EAD] text-white rounded-2xl p-5">
              <div className="flex gap-3">
                {/* <img
                  src={lillianAvatar}
                  className="rounded-full h-12 w-12"
                  alt="User Avatar"
                /> */}
                <FaCircleUser fill="#023b60" className="w-12 h-12" />
                <div>
                  <span className="font-bold">Ricardo</span>
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
                CTN Projects exceeded expectations. The HEPA filters improved
                our facility's air, and the service was great from start to
                finish.
              </p>
            </div>
          </SwiperSlide>
          <div className="h-8"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
