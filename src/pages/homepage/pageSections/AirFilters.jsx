import React, { useState } from "react";
import { airFilters } from "/src/data";
import ProductCard from "../../../components/ProductCard";
import ExploreProductsButton from "../../../components/ExploreProductsButton";
import { HashLink } from "react-router-hash-link";

const AirFilters = () => {
  const [airFiltersTab, setAirFiltersTab] = useState("primary");

  return (
    <div id="airFilters" className="relative px-5 md:px-20 mb-20">
      <div className="sticky top-0 left-0 z-10">
        <span className="block text-xl sm:text-2xl text-center font-extrabold pb-10">
          Air Filters
        </span>

        <div className="bg-white shadow rounded-2xl flex justify-center gap-5 place-self-center sm:gap-20 mb-10 py-2 px-4">
          <HashLink smooth to="#airFilters">
            <span
              className={`font-semibold ${
                airFiltersTab === "primary"
                  ? "text-primary !font-extrabold"
                  : "hover:text-zinc-500"
              } sm:text-lg hover:cursor-pointer`}
              onClick={() => setAirFiltersTab("primary")}
            >
              Primary
            </span>
          </HashLink>

          <HashLink smooth to="#airFilters">
            <span
              className={`font-semibold ${
                airFiltersTab === "secondary"
                  ? "text-primary !font-extrabold"
                  : "hover:text-zinc-500"
              } sm:text-lg hover:cursor-pointer`}
              onClick={() => setAirFiltersTab("secondary")}
            >
              Secondary
            </span>
          </HashLink>

          <HashLink smooth to="#airFilters">
            <span
              className={`font-semibold ${
                airFiltersTab === "tertiary"
                  ? "text-primary !font-extrabold"
                  : "hover:text-zinc-500"
              } sm:text-lg hover:cursor-pointer`}
              onClick={() => setAirFiltersTab("tertiary")}
            >
              Tertiary
            </span>
          </HashLink>
        </div>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-10 -z-1"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {airFilters[airFiltersTab]?.map((airFilter) => (
          <ProductCard
            key={airFilter.id}
            image={airFilter.image}
            title={airFilter.title}
            file={`/files/airFilters/${airFiltersTab}/` + airFilter.pdf}
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
