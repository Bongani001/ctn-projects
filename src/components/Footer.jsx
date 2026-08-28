import React from "react";
import ctnLogo from "/ctn-logo.svg";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary/30 space-y-10 px-5 md:px-20 pt-10">
      <div className="grid grid-cols-2 space-y-5 space-x-5 sm:grid-cols-4">
        <img
          src={ctnLogo}
          className="place-self-start w-1/2"
          alt="CTN Projects logo"
        />
        <div>
          <span className="text-lg font-semibold">NAVIGATION</span>
          <ul>
            <li className="hover:text-primary">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/products">Products</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/contact">Contact Form</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">ADDRESS</span>
          <span>Pinmill Office Park</span>
          <span>Block F, Ground Floor</span>
          <span>164 Katherine Street</span>
          <span>Sandton</span>
          <span>2196</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">CONTACT DETAILS</span>
          <a href="mailto:sales@ctnprojects.co.za">sales@ctnprojects.co.za </a>
          <span>+27 60 113 4365</span>
        </div>
      </div>
      <div className="sm:flex sm:justify-between">
        <span className="block text-sm text-center">
          Copyright &copy; {new Date().getFullYear()} CTN Projects
        </span>
        <span className="text-center text-xs sm:text-sm flex items-center justify-center gap-1 pb-2">
          Made with
          <FaRegHeart />
          by At The Brain
        </span>
      </div>
    </footer>
  );
};

export default Footer;
