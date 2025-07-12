import React, { useState } from "react";
import ctnLogo from "/ctn-logo.svg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow fixed w-full flex items-center justify-between px-5 py-2 md:px-20 z-40">
      <Link to="/">
        <img src={ctnLogo} className="w-14 md:w-18" alt="CTN Projects logo" />
      </Link>

      {/* SMALL SCREEN HAMBURGER */}
      <div className="sm:hidden">
        {isOpen === false && (
          <RxHamburgerMenu
            className="w-10"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
      </div>

      {/* SMALL SCREEN NAV */}
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute top-0 left-0 w-full bg-white md:hidden py-5`}
      >
        <IoMdClose
          className="place-self-end w-14"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className="flex flex-col items-center gap-5 mt-5">
          <li className="cursor-pointer hover:text-primary">
            <Link to="/" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link to="/about" onClick={() => setIsOpen(!isOpen)}>
              About Us
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link to="/products" onClick={() => setIsOpen(!isOpen)}>
              Products
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary">
            <Link to="/contact" onClick={() => setIsOpen(!isOpen)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* WIDE SCREEN NAV */}
      <ul className="hidden sm:flex items-center gap-5">
        <li className="cursor-pointer hover:text-primary">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <Link to="/about">About Us</Link>
        </li>
        <li className="cursor-pointer hover:text-primary">
          <Link to="/products">Products</Link>
        </li>
        <li className="border border-black rounded cursor-pointer hover:bg-primary hover:border-primary hover:text-white py-1 px-2">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
