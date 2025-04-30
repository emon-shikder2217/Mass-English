import React from "react";
import "./Instructure.css";
import instructureImg from "../../assets/mentor.png";
import facebook from "../../assets/facebook.png";
import ig from "../../assets/ig.png";
import x from "../../assets/x.png";

const Instructure = () => {
  return (
    <div className="leadInstructure">
      <div className="insTitle">
        <h1>
          Lead <span>Instructure</span>
        </h1>
      </div>
      <div className="instrucutreContainer">
        <div className="insImg">
          <img
            src={instructureImg}
            alt="instructure"
            className="instructureImg"
          />
        </div>
        <div className="insLine"></div>
        <div className="insContent">
          <p>
            Lorem ipsum, dolor sit amet consectetur eniti veritatis ipsa saepe
            nemo fugiat magni quas dignissimos itaque reiciendis consequuntur,
            ad totam nihil, commodi nobis at! Ipsum iure non nulla
            exercitationem quis sint <br /> <br /> iusto ipsa eius offi r
            adipisicing elit. tempore, corporis rerum necessitatibus quibusdam.
            Veritatis adipisci qu Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Aut sequi <br /> <br /> exercitationem quasi
            voluptas accusantium nam Lorem ipsum dolor sit amet consectetur,
            adipd minus dolowqdfd tam sdad deesa tam quasi.
          </p>

          <div className="line"></div>

          <div className="socialMediaTutor">
            <a
              href="https://www.facebook.com/belal.hossain.797444"
              target="_blank"
            >
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
  );
};

export default Instructure;
