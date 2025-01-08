import Video from "./components/video/Video";
import instance from "./axios";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await instance.get("/v2/posts");
      setVideos(res.data);
      return res;
    }
    fetchdata();
  }, []);

  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(
          ({ url, channel, description, song, likes, shares, messages }) => {
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />;
          }
        )}
      </div>
    </div>
  );
};

export default App;
