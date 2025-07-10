import React from "react";
import ExploreProductsButton from "../../../components/ExploreProductsButton";
import pocketFilter from "../../../assets/pocket-filter.png";
import washableWireSupportedPanelFilter from "../../../assets/washable-wire-supported-panel-filter.png";
import ProductCard from "../../../components/ProductCard";

const BestProducts = () => {
  return (
    <div className="bg-primary/30 sm:rounded-2xl grid sm:grid-cols-3 gap-5 py-10 px-5 sm:mx-20 my-30">
      <div className="space-y-2 sm:space-y-5">
        <h3 className="text-2xl sm:text-4xl font-extrabold">
          Our Best Selling Products
        </h3>
        <span className="block text-sm sm:text-base">
          Trusted by households and businesses alike for their durability and
          performance.
        </span>
        <ExploreProductsButton />
      </div>

      <div className="sm:col-span-2 grid sm:grid-cols-2 gap-5">
        <ProductCard
          image={washableWireSupportedPanelFilter}
          title="Washable Wire-Supported Panel Filter"
        />

        <ProductCard image={pocketFilter} title="Pocket Filter" />
      </div>
    </div>
  );
};

export default BestProducts;
