import React from "react";
import ProductCard from "../../../components/ProductCard";
import ExploreProductsButton from "../../../components/ExploreProductsButton";
import { labEquipments } from "../../../data";

const LabEquipment = () => {
  return (
    <div className="px-5 sm:px-20 my-30">
      <span className="block text-xl sm:text-2xl text-center font-extrabold pb-10">
        Laboratory Equipments
      </span>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-10">
        {labEquipments?.map((equipment) => (
          <ProductCard
            key={equipment.id}
            image={equipment.image}
            title={equipment.title}
            file={`/files/labEquipment/` + equipment.pdf}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 sm:mt-2">
        <ExploreProductsButton />
      </div>
    </div>
  );
};

export default LabEquipment;
