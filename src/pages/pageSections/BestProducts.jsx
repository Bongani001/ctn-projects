import React from "react";
import ExploreProductsButton from "../../../components/ExploreProductsButton";
import pocketFilter from "../../assets/pocket-filter.png";
import washableWireSupportedPanelFilter from "../../assets/washable-wire-supported-panel-filter.png";
import ProductCard from "../../../components/ProductCard";

const BestProducts = () => {
  return (
    <div className="bg-primary/30 rounded-lg grid grid-cols-3 gap-5 py-10 px-5 mx-20 my-30">
      <div className="space-y-5">
        <h3 className="text-4xl font-extrabold">Our Best Selling Products</h3>
        <span className="block">
          Trusted by households and businesses alike for their durability and
          performance.
        </span>
        <ExploreProductsButton />
      </div>

      <ProductCard
        image={washableWireSupportedPanelFilter}
        title="Washable Wire-Supported Panel Filter"
      />

      <ProductCard image={pocketFilter} title="Pocket Filter" />
    </div>
  );
};

export default BestProducts;
