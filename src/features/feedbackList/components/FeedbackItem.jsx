import React from "react";
import { useSeekVideo } from "../../../context/SeekVideoContext";

const FeedbackItem = ({ timeRange }) => {
  const { handleSeekTo } = useSeekVideo(); // Use the context hook

  return (
    <button
      type="button"
      className="list-group-item list-group-item-action"
      onClick={() => handleSeekTo && handleSeekTo(60)}
    >
      {timeRange}
    </button>
  );
};

export default FeedbackItem;
