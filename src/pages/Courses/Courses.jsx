import "./Courses.css";
import { FaArrowLeft } from "react-icons/fa";

const Courses = () => {
  return (
    <>
      <body>
        <div className="overlayEffect">
          <button className="backArrow">
          <FaArrowLeft />
          </button>
          <h1 className="courseTitle">Course Not Available right Now</h1>
        </div>
      </body>
    </>
  );
};
export default Courses;
