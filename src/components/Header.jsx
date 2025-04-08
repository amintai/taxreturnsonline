import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="container flex justify-between shadow-md md:shadow-none h-20 ">
      <a href="/">
        <img
          className="md:hidden lg:inline-flex"
          src="images/logo-full.svg"
          alt=""
          width="180"
        />
      </a>
      <a href="/">
        <img
          className="hidden md:inline-block lg:hidden"
          src="images/logo.svg"
          alt=""
          width="45"
        />
      </a>
      <div className="flex items-center">
        <MenuIcon className="h-10 md:hidden" />
        <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
          {/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
          <a href="/our-services" className="nav-item">Our Sevicies</a>
          <a className="nav-item">Customers</a>
          <a className="nav-item">Pricing</a>
          <a className="nav-item">Resouces</a>
          {/* </div> */}

          <button className="primary-button">+91 8866397377</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
