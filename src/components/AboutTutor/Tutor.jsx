import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import mentor from "../../assets/mentor.png";
import facebook from "../../assets/facebook.png";
import ig from "../../assets/ig.png";
import x from "../../assets/x.png";
import "./Tutor.css";

const Tutor = () => {
  return (
    <>
      <div className="about-overlay"></div>
      <Link to="/" className="backArrowAbout">
        <FaArrowLeftLong />
      </Link>
      <div className="aboutTutor">
        <div className="tutorTitle">
          <h1 className="tutorHeading">About Mentor</h1>
        </div>
        <div className="tutorInfo">
          <div className="tutorImgContainer">
            <img src={mentor} className="tutorImage" alt="Mentor" />
          </div>
          <div className="tutorTxt">
            <h2 className="name">
              Hey there! I'm <span className="span">Belal Hossain.</span>
            </h2>
            <p className="tutorInfoTxt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, molestiae error. Distinctio velit inventore porro
              quis eligendi saepe fuga quaerat consequuntur excepturi nam harum
              voluptates vero magni, error sint dolor. Doloribus sit adipisci
              culpa a hic quidem fuga quas... <br /> <br /> mollitia, asperiores
              doloremque at, laboriosam voluptate accusantium assumenda autem
              atque vero temporibus cupiditate sint ipsum accusamus voluptas
              repellendus consectetur voluptatum?
            </p>

            <div className="line"></div>

            <div className="socialMediaTutor">
              <a href="https://www.facebook.com/belal.hossain.797444" target="_blank">
                <div className="fb">
                  <img src={facebook} alt="" />
                  <p>Facebook</p>
                </div>
              </a>
              <a href="#" className="iga">
                <div className="ig">
                  <img src={ig} alt="Ig" />
                  <p>Instagram</p>
                </div>
              </a>
              <a href="#" className="xa">
                <div className="x">
                  <img src={x} alt="X" />
                  <p>X</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tutor;
