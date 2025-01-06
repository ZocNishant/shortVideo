import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = () => {
  return (
    <div className="videoFooter">
      <div className="videoFooter_text">
        <h3>@pasa919</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="videoFooter_ticker">
        <MusicNoteIcon className="videoFooter_icon" />
      </div>
    </div>
  );
};

export default VideoFooter;
