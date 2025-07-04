import React, { useState } from "react";
import { airFilters } from "/src/data";
import ProductCard from "../../../components/ProductCard";
import ExploreProductsButton from "../../../components/ExploreProductsButton";

const AirFilters = () => {
  const [airFiltersTab, setAirFiltersTab] = useState("primaryAirFilters");
  console.log(airFilters[airFiltersTab]);
  return (
    <div className="px-20 mb-20">
      <span className="block text-2xl text-center font-extrabold pb-10">
        Air Filters
      </span>

      <div className="flex justify-center gap-5 mb-10">
        <span
          className={`font-semibold ${
            airFiltersTab === "primaryAirFilters" &&
            "text-primary !font-extrabold"
          } text-lg hover:text-zinc-500 hover:cursor-pointer`}
          onClick={() => setAirFiltersTab("primaryAirFilters")}
        >
          Primary Filters
        </span>
        <span
          className={`font-semibold ${
            airFiltersTab === "secondaryAirFilters" &&
            "text-primary !font-extrabold"
          } text-lg hover:text-zinc-500 hover:cursor-pointer`}
          onClick={() => setAirFiltersTab("secondaryAirFilters")}
        >
          Secondary Filters
        </span>
        <span
          className={`font-semibold ${
            airFiltersTab === "tertiaryAirFilters" &&
            "text-primary !font-extrabold"
          } text-lg hover:text-zinc-500 hover:cursor-pointer`}
          onClick={() => setAirFiltersTab("tertiaryAirFilters")}
        >
          Tertiary Filters
        </span>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {airFilters[airFiltersTab]?.map((airFilter) => (
          <ProductCard
            key={airFilter.id}
            image={airFilter.image}
            title={airFilter.title}
          />
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <ExploreProductsButton />
      </div>
    </div>
  );
};

export default AirFilters;
