import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [hamburgerState, setHamburgerState] = useState(true);
  const showNavLinksMB = () => {
    if (hamburgerState) {
      setHamburgerState(false);
    } else {
      setHamburgerState(true);
    }
    console.log("Test Ini");
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full max-lg:fixed border-b-2 border-black bg-slate-100">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`flex lg:hidden ${hamburgerState ? "block" : "hidden"}`}
        >
          <button
            className="hover:cursor-pointer"
            onClick={showNavLinksMB}
          >
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
            />
          </button>
        </div>

        {/* Sidebar Hamburger for Mobile */}
        <div
          className={`fixed right-0 top-0 border-l-2 border-[#FF6452] w-2/6 h-screen bg-card bg-center bg-cover ${
            hamburgerState ? "hidden" : "block"
          }`}
        >
          <ul className="flex flex-col items-start p-2 pt-8 gap-10">
            {/* didie tambahan X jang nga close side bar hamburger */}

            <button
              className="flex px-4 justify-end w-full"
              onClick={showNavLinksMB}
            >
              <li>X</li>
            </button>
            {navLinks.map((item) => (
              <a
                href={item.href}
                className="w-5/6 font-montserrat leading-normal text-lg text-black border-b-2 border-[#FF6452] hover:shadow-xl"
              >
                <li
                  key={item.label}
                  className=""
                >
                  {item.label}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
