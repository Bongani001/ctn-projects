import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProductCard = ({ image, title }) => {
  return (
    <div className="bg-zinc-200 rounded-2xl flex flex-col justify-between p-1">
      <img
        src={image}
        className="max-h-[300px] place-self-center py-5"
        alt="Product"
      />
      <div className="bg-primary/50 text-white rounded-2xl flex items-center justify-between hover:bg-primary/50 hover:cursor-pointer p-4">
        <span className="text-sm sm:text-base">{title}</span>
        <MdOutlineArrowOutward />
      </div>
    </div>
  );
};

export default ProductCard;
