import React from "react";
import { airFilters } from "/src/data";
import ProductCard from "../../../components/ProductCard";
import ExploreProductsButton from "../../../components/ExploreProductsButton";

const LabEquipment = () => {
  return (
    <div className="px-20 my-30">
      <span className="block text-2xl text-center font-extrabold pb-10">
        Laboratory Equipments
      </span>

      <div className="grid grid-cols-3 gap-10">
        {airFilters["primaryAirFilters"]?.map((airFilter) => (
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

export default LabEquipment;
