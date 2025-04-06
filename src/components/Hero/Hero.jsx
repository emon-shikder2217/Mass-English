import React, { useState } from "react";
import "./Hero.css";
import heroImg from '../../assets/hero_img.png';
import "@fontsource/geist-mono";


const Hero = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const style = {
    fontFamily: `"Geist Mono", "Geist Mono Fallback", monospace`,
  };


  return (
    <section className="hero_section">
      <div class="overlay"></div>
      <div className="hero_container">
        <h1 className="hero_title" style={style}>
          Mass English
        </h1>
        <p className="subtitle">Best English Learning  Coaching Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odio accusantium dolore, est vel facere recusandae non voluptatibus! Voluptate, provident quisquam eligendi voluptas porro dolore?</p>

        <div className="container">
          <button
            className="button"
          >
            View Courses
          </button>
        </div>
      </div>



    </section>
  );
};

export default Hero;
