import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackGroup = ({
  groupInfo,
  selectedFeedback,
  setSelectedFeedback,
}) => {
  return (
    <>
      <h3>{groupInfo.groupTitle}</h3>
      <div className="list-group">
        {groupInfo.feedbackItems.map((item, index) => (
          <FeedbackItem
            key={index}
            id={item.feedbackTitle}
            timeStart={item.feedbackTimeRange[0]}
            timeEnd={item.feedbackTimeRange[1]}
            selectedFeedback={selectedFeedback}
            setSelectedFeedback={setSelectedFeedback}
            item={item}
          />
        ))}
      </div>
    </>
  );
};

export default FeedbackGroup;
