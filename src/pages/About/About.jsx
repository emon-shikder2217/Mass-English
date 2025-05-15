import "./About.css";
import Coaching from "../../components/CoachingContainer/Coaching";
import Tutor from "../../components/AboutTutor/Tutor";
import AnimatedPage from "../../AnimatedPage";

const About = () => {
  return (
    <AnimatedPage>
    <div className="about-container">
      <Tutor />
      <Coaching />
    </div>
    </AnimatedPage>
  );
};
export default About;
