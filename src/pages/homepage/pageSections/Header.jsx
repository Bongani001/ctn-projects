import React from "react";
import headerBg from "../../../assets/header-bg2.png";
import ExploreProductsButton from "../../../components/ExploreProductsButton";

const Header = () => {
  return (
    <header className="relative w-full bg-cover bg-center bg-no-repeat pt-17">
      <img
        src={headerBg}
        className="absolute w-full h-full object-cover -z-1"
      ></img>
      <div className="space-y-8 md:w-1/2 px-5 py-10 md:py-35 md:px-20 z-10">
        <h1 className="text-primary text-2xl md:text-4xl font-extrabold">
          Reliable Air Filtration & Laboratory Equipments Across Africa
        </h1>
        <p className="text-sm md:text-base">
          Since 2019, CTN Projects has provided high-quality air filtration
          systems and laboratory equipment for laboratories, businesses,
          industrial facilities, and homes. Whether you're improving air quality
          or upgrading your lab, we deliver reliable products backed by expert
          service and long-term value.
        </p>
        <ExploreProductsButton />
      </div>
    </header>
  );
};

export default Header;
