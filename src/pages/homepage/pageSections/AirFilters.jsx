import React, { useState } from "react";
import { airFilters } from "/src/data";
import ProductCard from "../../../components/ProductCard";
import ExploreProductsButton from "../../../components/ExploreProductsButton";

const AirFilters = () => {
  const [airFiltersTab, setAirFiltersTab] = useState("primaryAirFilters");

  return (
    <div className="px-5 sm:px-20 mb-20">
      <span className="block text-xl sm:text-2xl text-center font-extrabold pb-10">
        Air Filters
      </span>

      <div className="flex justify-center gap-5 sm:gap-20 mb-10">
        <span
          className={`font-semibold ${
            airFiltersTab === "primaryAirFilters"
              ? "text-primary !font-extrabold"
              : "hover:text-zinc-500"
          } sm:text-lg hover:cursor-pointer`}
          onClick={() => setAirFiltersTab("primaryAirFilters")}
        >
          Primary
        </span>
        <span
          className={`font-semibold ${
            airFiltersTab === "secondaryAirFilters"
              ? "text-primary !font-extrabold"
              : "hover:text-zinc-500"
          } sm:text-lg hover:cursor-pointer`}
          onClick={() => setAirFiltersTab("secondaryAirFilters")}
        >
          Secondary
        </span>
        <span
          className={`font-semibold ${
            airFiltersTab === "tertiaryAirFilters"
              ? "text-primary !font-extrabold"
              : "hover:text-zinc-500"
          } sm:text-lg hover:cursor-pointer`}
          onClick={() => setAirFiltersTab("tertiaryAirFilters")}
        >
          Tertiary
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-10">
        {airFilters[airFiltersTab]?.map((airFilter) => (
          <ProductCard
            key={airFilter.id}
            image={airFilter.image}
            title={airFilter.title}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-2">
        <ExploreProductsButton />
      </div>
    </div>
  );
};

export default AirFilters;
