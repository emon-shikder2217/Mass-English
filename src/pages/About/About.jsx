import "./About.css";
import { BsBoxArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about-container">
      <div className="about-overlay"></div>
      <Link to="/" className="backArrowAbout">
        <BsBoxArrowLeft />
      </Link>
      <div className="aboutTutor">
        <div className="tutorTitle">
          <h1 className="tutorHeading">About Tutor</h1>
        </div>

        <div className="tutorInfo">
          <div className="tutorImg">
            <img src="" alt="" />
          </div>
          <div className="tutorTxt"></div>
        </div>
      </div>
      <div className="aboutCoaching"></div>
    </div>
  );
};
export default About;
