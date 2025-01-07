import { useRef, useState } from "react";
import VideoFooter from "../video_footer/VideoFooter";
import VideoSidebar from "../video_sidebar/VideoSidebar";

const Video = ({
  url,
  channel,
  description,
  likes,
  shares,
  messages,
  song,
}) => {
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
          src={url}
          className="video_player"
          ref={videoRef}
          onClick={handleVideoPress}
        ></video>
        <VideoFooter channel={channel} song={song} description={description} />
        <VideoSidebar messages={messages} likes={likes} shares={shares} />
      </div>
    </>
  );
};

export default Video;
