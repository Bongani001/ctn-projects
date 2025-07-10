import React from "react";
import { Link } from "react-router-dom";

const ExploreProductsButton = () => {
  return (
    <Link to="/products">
      <button
        type="button"
        className="bg-primary/90 text-white font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4"
      >
        Explore All Products
      </button>
    </Link>
  );
};

export default ExploreProductsButton;
