import React from "react";
import Header from "./pageSections/Header";
import About from "./pageSections/About";
import BestProducts from "./pageSections/BestProducts";
import AirFilters from "./pageSections/AirFilters";
import LabEquipment from "./pageSections/LabEquipment";

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <BestProducts />
      <AirFilters />
      <LabEquipment />
    </>
  );
};

export default Homepage;
