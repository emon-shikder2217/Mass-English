import React from "react";
import "./Review.css";
import studentImg from "../../assets/student1.png";
import star from "../../assets/star.png";

const Review = () => {
  const reviewData = [
    {
      name: "Morad Shikder",
      review:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incidilor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: studentImg,
      rating: star,
    },
    {
      name: "Mahim Afridi",
      review:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: studentImg,
      rating: star,
    },
    {
      name: "Emon Shikder",
      review:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: studentImg,
      rating: star,
    },
  ];

  return (
    <div className="review">
      <div className="insTitle">
        <h1>
          Students <span>Feedback</span>
        </h1>
      </div>
      <p className="p">
        Our Students Are Our Strength, See What They Say About Us. Learners have
        always <br /> expressed their love for Mass English.
      </p>
      <div className="reviewCardContainer">
        {reviewData.map((item, index) => (
          <div className={`reviewCard reviewCard-${index + 1}`} key={index}>
            <div className="student-i">
              <img src={item.img} className="student_img" />
              <div className="nn">
                <h3 className="studentName">{item.name}</h3>
                <img src={item.rating} className="star" />
              </div>
            </div>
              <p className="reviewTxt">{item.review}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
