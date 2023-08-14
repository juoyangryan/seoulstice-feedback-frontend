import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackGroup = ({
  groupTitle,
  selectedFeedback,
  setSelectedFeedback,
}) => {
  const feedbackTimeRanges = [
    ["1:00", "2:00"],
    ["2:00", "3:00"],
    ["3:00", "4:00"],
    ["4:00", "5:00"],
    ["5:00", "6:00"],
  ];

  return (
    <>
      <h3>{groupTitle}</h3>
      <div className="list-group">
        {feedbackTimeRanges.map((timeRange, index) => (
          <FeedbackItem
            key={index}
            id={groupTitle + index}
            timeStart={timeRange[0]}
            timeEnd={timeRange[1]}
            selectedFeedback={selectedFeedback}
            setSelectedFeedback={setSelectedFeedback}
          />
        ))}
      </div>
    </>
  );
};

export default FeedbackGroup;
