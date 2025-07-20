import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/Footer";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Product from "./pages/product/Product";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products/:productName" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
