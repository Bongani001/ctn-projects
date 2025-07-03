import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-2xl p-1">
      <img
        src={image}
        className="w-4/5 place-self-center py-5"
        alt="washable-wire-supported-panel-filter"
      />
      <div className="bg-primary/80 text-white rounded-2xl flex items-center justify-between hover:bg-primary/50 hover:cursor-pointer p-4">
        <span>{title}</span>
        <MdOutlineArrowOutward />
      </div>
    </div>
  );
};

export default ProductCard;
