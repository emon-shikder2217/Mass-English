import "./Coaching.css";
import scl from "../../assets/scl.png";
import facebook from "../../assets/facebook.png";
import yt from "../../assets/yt.png";
import x from "../../assets/x.png";

const Coaching = () => {
  return (
    <>
      <div className="about-overlayC"></div>
      <div className="aboutCoaching">
        <div className="coachingTitle">
          <h1 className="coachingHeading">About Academy</h1>
        </div>
        <div className="coachingInfo">
          <div className="coachingImgContainer">
            <img src={scl} className="coachingImg" alt="Scl" />
          </div>
          <div className="coachingTxt">
            <h2 className="name">
              All About <span className="span">Mass English..</span>
            </h2>
            <p className="coachingInfoTxt">
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
              <a href="https://www.facebook.com/belal.hossain.797444">
                <div className="fb">
                  <img src={facebook} alt="" />
                  <p>Facebook</p>
                </div>
              </a>
              <a href="#" className="iga">
                <div className="ig">
                  <img src={yt} alt="Ig" />
                  <p>Youtube</p>
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
export default Coaching;
