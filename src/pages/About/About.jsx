import "./About.css";
import Coaching from "../../components/CoachingContainer/Coaching";
import Tutor from "../../components/AboutTutor/Tutor";

const About = () => {
  return (
    <>
    <div className="about-container">
      <Tutor />
      <Coaching />
    </div>
    </>
  );
};
export default About;
