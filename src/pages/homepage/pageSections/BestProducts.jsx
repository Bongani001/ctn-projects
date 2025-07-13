import React from "react";
import ExploreProductsButton from "../../../components/ExploreProductsButton";
import pocketFilter from "/pocket-filter.png";
import washableWireSupportedPanelFilter from "/washable-wire-supported-panel-filter.png";
import ProductCard from "../../../components/ProductCard";

const BestProducts = () => {
  return (
    <div className="bg-primary/30 sm:rounded-2xl md:grid sm:grid-cols-3 gap-5 py-10 sm:px-5 sm:mx-5 md:mx-20 my-30">
      <div className="space-y-2 sm:space-y-5 px-5">
        <h3 className="text-2xl sm:text-4xl font-extrabold">
          Our Best Selling Products
        </h3>
        <span className="block text-sm sm:text-base">
          Trusted by households and businesses alike for their durability and
          performance.
        </span>
        <ExploreProductsButton />
      </div>

      {/* DESKTOP VIEW */}
      <div className="sm:col-span-2">
        <div className="hidden md:grid md:grid-cols-2 md:gap-5">
          <ProductCard
            image={washableWireSupportedPanelFilter}
            title="Washable Wire-Supported Panel Filter"
          />

          <ProductCard image={pocketFilter} title="Pocket Filter" />
        </div>

        {/* MOBILE VIEW CAROUSEL */}
        <div className="md:hidden flex gap-5 !overflow-x-auto no-scrollbar mt-5 ml-5">
          <div>
            <ProductCard
              image={washableWireSupportedPanelFilter}
              title="Washable Wire-Supported Panel Filter"
              imgClassName={"min-w-52"}
            />
          </div>

          <div>
            <ProductCard
              image={pocketFilter}
              title="Pocket Filter"
              imgClassName={"min-w-52"}
            />
          </div>

          <div>
            <ProductCard
              image={washableWireSupportedPanelFilter}
              title="Washable Wire-Supported Panel Filter"
              imgClassName={"min-w-52"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
