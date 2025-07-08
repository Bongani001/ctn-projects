import React, { useState } from "react";
import { airFilters } from "/src/data";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [productTab, setProductTab] = useState("filters");
  return (
    <div className="pt-17">
      <div className="bg-zinc-100 rounded-lg place-self-center space-x-5 px-4 py-2 my-10">
        <span
          className={`${
            productTab === "filters" &&
            "font-semibold border-b-2 border-primary"
          } pb-1 hover:cursor-pointer`}
        >
          Filters
        </span>
        <span
          className={`${
            productTab === "labEquipments" &&
            "font-semibold border-b-2 border-primary"
          } pb-1 hover:cursor-pointer`}
        >
          Lab Equipments
        </span>
      </div>

      {productTab === "filters" && (
        <div className="mx-20">
          {/* PRIMARY AIR FILTERS */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-5">Primary Air Filters</h2>
            <div className="grid grid-cols-3 gap-10">
              {airFilters["primaryAirFilters"]?.map((airFilter) => (
                <ProductCard
                  key={airFilter.id}
                  image={airFilter.image}
                  title={airFilter.title}
                />
              ))}
            </div>
          </div>

          {/* SECONDARY AIR FILTERS */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-5">
              Secondary Air Filters
            </h2>
            <div className="grid grid-cols-3 gap-10">
              {airFilters["secondaryAirFilters"]?.map((airFilter) => (
                <ProductCard
                  key={airFilter.id}
                  image={airFilter.image}
                  title={airFilter.title}
                />
              ))}
            </div>
          </div>

          {/* TERTIARY AIR FILTERS */}
          <div className="mb-20">
            <h2 className="text-2xl font-semibold mb-5">
              Tertiary Air Filters
            </h2>
            <div className="grid grid-cols-3 gap-10">
              {airFilters["tertiaryAirFilters"]?.map((airFilter) => (
                <ProductCard
                  key={airFilter.id}
                  image={airFilter.image}
                  title={airFilter.title}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
