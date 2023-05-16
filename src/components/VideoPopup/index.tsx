import React from "react";

import ReactPlayer from "react-player/youtube";
import * as C from "./styles";

interface IVideoPopup {
  show: any;
  setShow: any;
  videoId: any;
  setVideoId: any;
}

export const VideoPopUp: React.FC<IVideoPopup> = ({
  show,
  setShow,
  videoId,
  setVideoId,
}) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <C.Container className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityLayer" onClick={hidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          playing={true}
        />
      </div>
    </C.Container>
  )
}
