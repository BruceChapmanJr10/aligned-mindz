import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <div className="flex flex-col md:block">
      <Link
        to="#services"
        smooth={true}
        duration={500}
        className="px-3 text-white hover:text-orange-400"
      >
        Services
      </Link>

      <Link
        to="#whyHypnotherapy"
        smooth={true}
        duration={500}
        className="px-3 text-white hover:text-orange-400"
      >
        Why Hypnotherapy
      </Link>

      <Link
        to="#aboutme"
        smooth={true}
        duration={500}
        className="px-3 text-white hover:text-orange-400"
      >
        About Me
      </Link>
      <Link
        to="#contact"
        smooth={true}
        duration={500}
        className="px-3 text-white hover:text-orange-400"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavLinks;
