import React from "react";
import Header from "./pageSections/Header";
import About from "./pageSections/About";
import BestProducts from "./pageSections/BestProducts";
import AirFilters from "./pageSections/AirFilters";
import LabEquipment from "./pageSections/LabEquipment";
import Testimonials from "./pageSections/Testimonials";
import CallToAction from "./CallToAction";

const Homepage = () => {
  return (
    <>
      <Header />
      <About />
      <BestProducts />
      <AirFilters />
      <LabEquipment />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Homepage;
