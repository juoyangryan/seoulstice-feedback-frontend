import React from "react";

const FeedbackDetail = ({ selectedFeedback }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Feedback Detail</h5>
        <h6 className="card-title">{selectedFeedback.feedbackTitle}</h6>
        <p className="card-text">{selectedFeedback.feedbackContent}</p>
      </div>
    </div>
  );
};

export default FeedbackDetail;
