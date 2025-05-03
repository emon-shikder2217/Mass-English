import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <header>
      <h1 className="navbar_logo" data-aos="fade-right" data-aos-duration="1000">
        MASS ENGLISH
      </h1>

      <nav data-aos="zoom-in" data-aos-duration="800">
        <a data-aos="fade-left" data-aos-duration="1300">
          Home
        </a>
        <Link
          to="/about"
          smooth={true}
          duration={500}
          data-aos="fade-left"
          data-aos-duration="1800"
        >
          About
        </Link>
        <Link
          to="/courses"
          smooth={true}
          duration={500}
          data-aos="fade-left"
          data-aos-duration="2300"
        >
          Courses
        </Link>

        <Link
          to="/contact"
          smooth={true}
          duration={500}
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          Contact
        </Link>
      </nav>
    </header>
    
    </>
    
  );
};

export default Navbar;
