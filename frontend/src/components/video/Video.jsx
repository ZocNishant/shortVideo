import { useRef, useState } from "react";
import VideoFooter from "../video_footer/VideoFooter";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <div className="video">
        <video
          src="https://res.cloudinary.com/dxkxvfo2o/video/upload/
v1608169738/video1_cvrjfm.mp4"
          className="video_player"
          ref={videoRef}
          onClick={handleVideoPress}
        ></video>
        <VideoFooter />
      </div>
    </>
  );
};

export default Video;
