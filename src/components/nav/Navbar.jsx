import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed opacity-90  w-full z-10">
      <div className="bg-purple-800 flex justify-between items-center pt-3 pb-1 font-primary">
        <div>
          <Link
            to="#home"
            smooth={true}
            duration={500}
            className="ml-3 text-white hover:text-orange-400"
          >
            Home
          </Link>
        </div>
        <div className="hidden md:block">
          <NavLinks />
        </div>

        <div>
          <button className="bg-orange-500 hover:bg-orange-700 py-1 px-2 mr-3 text-purple-800 rounded-2xl">
            <a href="tel:+17032820532">Call Now</a>
          </button>
        </div>
        <div className="md:hidden ">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={30}
            direction="left"
            duration={0.5}
            distance="lg"
            rounded
            label="Show menu"
            color="white"
          />
        </div>
      </div>

      {isOpen && (
        <div className=" bg-purple-600 flex flex-col  md:hidden px-4 sm:px-6 pb-2">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
