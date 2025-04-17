import React, { useEffect, useState } from "react";
import "./Hero.css";
import heroImg from "../../assets/hero_img.png";
import "@fontsource/geist-mono";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";

const Hero = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const style = {
    fontFamily: `"Geist Mono", "Geist Mono Fallback", monospace`,
  };

  return (
    <>
      <section className="hero_section">
        <div class="overlay"></div>
        <div className="hero_container">
          <h1 className="hero_title" style={style}>
            Mass English
          </h1>
          <p className="subtitle">
            Best English Learning Coaching Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas odio accusantium dolore, est vel
            facere recusandae non voluptatibus! Voluptate, provident quisquam
            eligendi voluptas porro dolore?
          </p>

          <div className="container">
            <Link to="/courses">
              <button className="button">View Courses</button>
            </Link>
          </div>
          <Container />
        </div>

      </section>
    </>
  );
};

export default Hero;
