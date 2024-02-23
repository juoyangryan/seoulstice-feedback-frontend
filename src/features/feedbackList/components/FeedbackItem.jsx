import React from "react";
import { useSeekVideo } from "../../../context/SeekVideoContext";
import { timeToSeconds } from "../../../utils/TimeUtils";

const FeedbackItem = ({
  id,
  timeStart,
  timeEnd,
  selectedFeedback,
  setSelectedFeedback,
  item,
}) => {
  const { handleSeekTo } = useSeekVideo(); // Use the context hook

  const handleClick = () => {
    if (handleSeekTo) {
      handleSeekTo(timeToSeconds(timeStart));
    }
    setSelectedFeedback(item);
  };

  return (
    <button
      type="button"
      className={`list-group-item list-group-item-action${
        selectedFeedback && selectedFeedback.feedbackTitle === id
          ? " active"
          : ""
      }`}
      onClick={() => handleClick()}
    >
      {timeStart + " - " + timeEnd}
    </button>
  );
};

export default FeedbackItem;
