import React from "react";
import FeedbackGroup from "./components/FeedbackGroup";

const FeedbackList = ({ selectedFeedback, setSelectedFeedback }) => {
  return (
    <div>
      <h1>Feedback</h1>
      <FeedbackGroup
        groupTitle="First Verse"
        selectedFeedback={selectedFeedback}
        setSelectedFeedback={setSelectedFeedback}
      />
    </div>
  );
};

export default FeedbackList;
