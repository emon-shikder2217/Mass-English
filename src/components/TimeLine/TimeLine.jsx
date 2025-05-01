import React from "react";
import "./TimeLine.css";
import timeLineImg from "../../assets/timeline-img.png";

const TimeLine = () => {
  const timelineData = [
    {
      title: "Chance Of Falling Behind",
      description:
        "Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.",
    },
    {
      title: " do eiusmod tempor incididunt",
      description:
        "There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.",
    },
    {
      title: "tempor incididunt ut labore",
      description:
        "You Are Not Just Enrolling In One Course. It's A Mission To Learn Lifelong Programming Journey With Hablu Programmer.",
    },
    {
      title: "lorem ipsum dolor sit amet",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="timeLine-section">
      <div className="timeLineTitle">
        <h1>
          Effective Personalized <br /> Learning
        </h1>
      </div>
      <div className="timeLineLayout">
        <div className="timeLineContent">
          <div className="timeline-container">
            {timelineData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-icon">
                  <span>&darr;</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-content-txt">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Final tick circle */}
            <div className="timeline-end">✓</div>
          </div>
        </div>
        <div className="timeLineImg">
          <img src={timeLineImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
