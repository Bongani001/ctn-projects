import React from "react";
import Header from "./pageSections/Header";
import About from "./pageSections/About";
import BestProducts from "./pageSections/BestProducts";
import AirFilters from "./pageSections/AirFilters";
import LabEquipment from "./pageSections/LabEquipment";
import Testimonials from "./pageSections/Testimonials";

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <BestProducts />
      <AirFilters />
      <LabEquipment />
      <Testimonials />
    </>
  );
};

export default Homepage;
