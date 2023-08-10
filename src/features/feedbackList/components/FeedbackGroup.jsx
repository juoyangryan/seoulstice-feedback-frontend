import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackGroup = () => {
  const feedbackTimeRanges = [
    "1:00 - 1:10",
    "2:00 - 2:10",
    "3:00 - 3:10",
    "4:00 - 4:10",
    "5:00 - 5:10",
  ];

  return (
    <>
      <h2>1st Verse</h2>
      <div className="list-group">
        {feedbackTimeRanges.map((timeRange, index) => (
          <FeedbackItem key={index} timeRange={timeRange} />
        ))}
      </div>
    </>
  );
};

export default FeedbackGroup;
