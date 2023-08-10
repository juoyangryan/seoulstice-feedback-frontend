import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css"; // Import your CSS file
import { useSeekVideo } from "../context/SeekVideoContext";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const { setHandleSeekTo } = useSeekVideo(); // Use the context hook

  useEffect(() => {
    if (playerRef.current) {
      setHandleSeekTo(() => handleVideoSeekTo);
    }
  }, [setHandleSeekTo]);

  const handleVideoSeekTo = (seconds) => {
    if (playerRef.current) {
      playerRef.current.seekTo(seconds);
    }
  };

  return (
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=qfvNBntuevQ"
        width="100%" // Set the width to 100% to make it responsive
        height="100%" // Set the height to 100% to make it responsive
        controls
      />
    </div>
  );
};

export default VideoPlayer;
