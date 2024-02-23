import React from "react";
import FeedbackGroup from "./components/FeedbackGroup";

const FeedbackList = ({
  selectedFeedback,
  setSelectedFeedback,
  fetchedInfo,
}) => {
  return (
    <div>
      <h1>Feedback</h1>
      {fetchedInfo.feedbackList.map((group, index) => (
        <FeedbackGroup
          key={index}
          groupInfo={group}
          selectedFeedback={selectedFeedback}
          setSelectedFeedback={setSelectedFeedback}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
