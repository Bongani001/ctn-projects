import React from "react";
import ctnLogo from "../assets/ctn-logo.svg";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary/30 space-y-10 px-20 pt-10">
      <div className="grid grid-cols-4">
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
              <Link to="#">Products</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="#">Contact Form</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">ADDRESS</span>
          <span>Unit 189, Palm Springs</span>
          <span>35 Georgia Crescent</span>
          <span>Cosmo City</span>
          <span>2188</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">CONTACT DETAILS</span>
          <span>sales@ctnprojects.co.za</span>
          <span>+27 60 113 4365</span>
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-sm">
          Copyright &copy; {new Date().getFullYear()} CTN Projects
        </span>
        <span className="text-center text-sm flex items-center gap-1 pb-2">
          Made with
          <FaRegHeart />
          by At The Brain
        </span>
      </div>
    </footer>
  );
};

export default Footer;
