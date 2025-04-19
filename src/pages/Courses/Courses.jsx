import "./Courses.css";
import { BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import React from "react";

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="overlayEffect"></div>
      <Link to="/" className="backArrow">
        <BsBoxArrowLeft />
      </Link>
      <h1 className="courseTitle">Course Not Available Right Now</h1>
    </div>
  );
};

export default Courses;