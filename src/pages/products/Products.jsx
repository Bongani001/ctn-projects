import React, { useEffect, useState } from "react";
import { airFilters, labEquipments } from "/src/data";
import ProductCard from "../../components/ProductCard";
import { HashLink } from "react-router-hash-link";

const Products = () => {
  const [productTab, setProductTab] = useState("filters");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-17">
      <div id="products" className="relative scroll-mt-12">
        {/* PRODUCT TABS */}
        <div className="sticky top-18 bg-zinc-100 rounded-lg place-self-center space-x-5 px-4 py-2 mb-10 mt-5">
          <HashLink smooth to="#products">
            <span
              className={`${
                productTab === "filters" &&
                "font-semibold border-b-2 border-primary"
              } pb-1 hover:cursor-pointer`}
              onClick={() => setProductTab("filters")}
            >
              Filters
            </span>
          </HashLink>
          <HashLink smooth to="#products">
            <span
              className={`${
                productTab === "labEquipments" &&
                "font-semibold border-b-2 border-primary"
              } pb-1 hover:cursor-pointer`}
              onClick={() => setProductTab("labEquipments")}
            >
              Lab Equipments
            </span>
          </HashLink>
        </div>

        {/* FILTERS */}
        {productTab === "filters" && (
          <div className="mx-5 sm:mx-20">
            {/* PRIMARY AIR FILTERS */}
            <div className="mb-20">
              <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                Primary Air Filters
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-10">
                {airFilters["primary"]?.map((airFilter) => (
                  <ProductCard
                    key={airFilter.id}
                    image={airFilter.image}
                    title={airFilter.title}
                    file={`/files/airFilters/primary/` + airFilter.pdf}
                  />
                ))}
              </div>
            </div>

            {/* SECONDARY AIR FILTERS */}
            <div className="mb-20">
              <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                Secondary Air Filters
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-10">
                {airFilters["secondary"]?.map((airFilter) => (
                  <ProductCard
                    key={airFilter.id}
                    image={airFilter.image}
                    title={airFilter.title}
                    file={`/files/airFilters/secondary/` + airFilter.pdf}
                  />
                ))}
              </div>
            </div>

            {/* TERTIARY AIR FILTERS */}
            <div className="mb-20">
              <h2 className="text-xl sm:text-2xl font-semibold mb-5">
                Tertiary Air Filters
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-10">
                {airFilters["tertiary"]?.map((airFilter) => (
                  <ProductCard
                    key={airFilter.id}
                    image={airFilter.image}
                    title={airFilter.title}
                    file={`/files/airFilters/tertiary/` + airFilter.pdf}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* LAB EQUIPMENT */}
        {productTab === "labEquipments" && (
          <div className="mb-20 mx-5 sm:mx-20">
            <h2 className="text-2xl font-semibold mb-5">Lab Equipments</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-10">
              {labEquipments?.map((equipment) => (
                <ProductCard
                  key={equipment.id}
                  image={equipment.image}
                  title={equipment.title}
                  file={`/files/labEquipment/` + equipment.pdf}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CONTACT US */}
      <div className="grid sm:grid-cols-2 gap-10 mx-5 sm:mx-20 my-20">
        <div className="">
          <h3 className="text-2xl font-semibold mb-5">Contact Us</h3>
          <p>
            We’re here to help you find the right filtration solution. Reach out
            today and our team will respond with a personalized quote within 24
            hours.
          </p>
        </div>
        <div>
          <form action="" className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Business Name"
              className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
              required
            />

            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
              required
            />

            <input
              type="text"
              name="product"
              placeholder="Product Required"
              className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Message (Optional)"
              className="bg-zinc-200 rounded-xl w-full p-3 focus:outline-none"
              rows={"5"}
            ></textarea>

            <button
              type="submit"
              className="bg-primary/90 text-white lg:w-full font-medium rounded-lg hover:bg-transparent hover:text-primary border border-primary hover:cursor-pointer py-2 px-4"
            >
              Get A Free Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Products;
