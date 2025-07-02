import React from "react";
import ctnLogo from "../assets/ctn-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-20">
      <img src={ctnLogo} className="w-18" alt="CTN Projects logo" />
      <ul className="flex items-center gap-5">
        <li className="cursor-pointer hover:text-primary">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <Link to="#">About Us</Link>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <Link to="#">Products</Link>
        </li>
        <li className="border border-black rounded cursor-pointer hover:bg-primary hover:border-primary hover:text-white py-1 px-2">
          <Link to="#">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
