import "./Courses.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";
import AnimatedPage from "../../AnimatedPage";

const Courses = () => {
  return (
    <AnimatedPage>
      <div className="courses-container">
        <div className="overlayEffect"></div>
        <Link to="/" className="backArrow">
          <FaArrowLeftLong />
        </Link>
        <h1 className="courseTitle">Course Not Available Right Now</h1>
      </div>
    </AnimatedPage>
  );
};

export default Courses;
