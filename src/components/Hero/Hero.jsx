import React from "react";
import "./Hero.css";
import heroImg from '../../assets/hero_img.png';

const Hero = () => {
  return (
    <section className="hero_section">
      <div class="overlay">
        <div className="hero_container">
          <h1 className="hero_title">
            Mass English
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
          <button>Courses</button>
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;
