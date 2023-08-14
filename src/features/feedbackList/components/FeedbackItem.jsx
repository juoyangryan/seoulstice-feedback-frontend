import React from "react";
import { useSeekVideo } from "../../../context/SeekVideoContext";
import { timeToSeconds } from "../../../utils/TimeUtils";

const FeedbackItem = ({
  id,
  timeStart,
  timeEnd,
  selectedFeedback,
  setSelectedFeedback,
}) => {
  const { handleSeekTo } = useSeekVideo(); // Use the context hook

  const handleClick = () => {
    if (handleSeekTo) {
      handleSeekTo(timeToSeconds(timeStart));
    }
    setSelectedFeedback(id);
  };

  return (
    <button
      type="button"
      className={`list-group-item list-group-item-action${
        selectedFeedback === id ? " active" : ""
      }`}
      onClick={() => handleClick()}
    >
      {timeStart + " - " + timeEnd}
    </button>
  );
};

export default FeedbackItem;
