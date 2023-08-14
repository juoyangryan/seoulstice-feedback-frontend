import React, { useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import FeedbackDetail from "../features/feedbackDetail";
import FeedbackMembers from "../components/FeedbackMembers";
import FeedbackList from "../features/feedbackList";
import { SeekVideoProvider } from "../context/SeekVideoContext";

const VideoFeedback = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  return (
    <SeekVideoProvider>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <VideoPlayer />
            </div>
            <div className="row">
              {selectedFeedback && (
                <FeedbackDetail selectedFeedback={selectedFeedback} />
              )}
            </div>
          </div>
          <div className="col">
            <div className="row border">
              <FeedbackMembers />
            </div>
            <div className="row border">
              <FeedbackList
                selectedFeedback={selectedFeedback}
                setSelectedFeedback={setSelectedFeedback}
              />
            </div>
          </div>
        </div>
      </div>
    </SeekVideoProvider>
  );
};

export default VideoFeedback;
