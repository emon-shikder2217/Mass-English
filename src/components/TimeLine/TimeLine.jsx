import React from 'react';
import styles from './TimeLine.module.css'; // Updated to .module.css
import timeLinePageImg from '../../assets/timeline-img.png';

const Timeline = () => {
  const timelineData = [
    {
      title: 'Interactive Live & Recording Classes',
      description:
        'Learn Something New Everyday By Watching Recorded Conceptual Classes And Join Live Classes For Clearing Your Doubts.',
    },
    {
      title: 'Module Based Study Plan',
      description:
        'There Is No Chance Of Falling Behind, With A Module-Wise Structured Study Plan Packed With Quizzes, Assignments & Practice Home Work For Interview Preparation.',
    },
    {
      title: 'Conceptual Crash Course',
      description:
        "You Are Not Just Enrolling In One Course. It's A Mission To Learn Lifelong Programming Journey With Hablu Programmer.",
    },
    {
      title: 'Freelancing & Job Placement Guide',
      description:
        'Course Completers Will Get A Freelancing & Job Placement Guide To Get Started.',
    },
  ];

  return (
    <div className={styles.timelineContainer}>
      <div className={styles.timeline}>
        {timelineData.map((item, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.circle}></div>
            <div className={styles.textContent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.timelineImage}>
        <img src={timeLinePageImg} alt="Visual" />
      </div>
    </div>
  );
};

export default Timeline;