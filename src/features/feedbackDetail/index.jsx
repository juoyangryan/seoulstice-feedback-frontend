import React from "react";

const FeedbackDetail = ({ selectedFeedback }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Feedback Detail</h5>
        <h6 className="card-title">{selectedFeedback}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content. Some quick example text to build on the card title and
          make up the bulk of the card's content. Some quick example text to
          build on the card title and make up the bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default FeedbackDetail;
