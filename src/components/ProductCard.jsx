import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, className, imgClassName, file, link }) => {
  return (
    <div
      className={`bg-zinc-200 h-full rounded-2xl flex flex-col justify-between p-1 ${className}`}
    >
      <Link
        to={file}
        target="_blank"
        className="bg-primary/70 place-self-end text-xs text-white flex  items-center gap-1 rounded-2xl p-2 mt-3 mr-3"
        download
      >
        <MdDownload className="w-4 h-4" />
        <span>pdf</span>
      </Link>
      <img
        src={image}
        className={`${imgClassName} max-h-[300px] place-self-center py-5 px-3 `}
        alt="Product"
      />

      {link ? (
        <Link
          to={link}
          className="bg-primary/50 text-white rounded-2xl flex items-center justify-between gap-1 hover:bg-primary/50 hover:cursor-pointer p-4"
        >
          <span className="text-sm sm:text-base">{title}</span>
          <span>
            <MdOutlineArrowOutward />
          </span>
        </Link>
      ) : (
        <div className="bg-primary/50 text-white rounded-2xl p-4">
          <span className="text-sm sm:text-base">{title}</span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
