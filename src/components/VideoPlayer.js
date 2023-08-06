import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'; // Import your CSS file

const VideoPlayer = () => {
  const playerRef = useRef(null);

  const handleJumpToTimestamp = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(300);
    }
  };

  return (
    <div className="video-player-container">
      <ReactPlayer
        ref={playerRef}
        url="https://www.youtube.com/watch?v=qfvNBntuevQ"
        width="100%" // Set the width to 100% to make it responsive
        height="100%" // Set the height to 100% to make it responsive
        playing
        controls
        config={{
          youtube: {
            playerVars: {
              start: 120, // Replace with the desired timestamp in seconds (e.g., 120 for 2 minutes)
            },
          },
        }}
      />
      <button onClick={handleJumpToTimestamp}>Jump to 5:00</button>
    </div>
  );
};

export default VideoPlayer;
