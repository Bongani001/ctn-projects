import React, { useEffect } from "react";
import Header from "./pageSections/Header";
import About from "./pageSections/About";
import BestProducts from "./pageSections/BestProducts";
import AirFilters from "./pageSections/AirFilters";
import LabEquipment from "./pageSections/LabEquipment";
import Testimonials from "./pageSections/Testimonials";
import CallToAction from "./pageSections/CallToAction";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
