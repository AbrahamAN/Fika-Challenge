import React from 'react';
import background from "../videos/background.mp4"

const VideoBackground = ({ children, className}) => {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      id="bg-video"
      style={{
        position: 'sticky',
        top: 0,
        left: 0,
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      {children}
      <source src={background} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;