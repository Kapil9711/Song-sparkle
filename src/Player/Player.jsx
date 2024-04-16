import { useRef } from "react";
// import { useEffect } from "react";
import "./player.scss";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { skiptoNext, skipBack } from "../assets/Utility/Utility.components";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
  handleClick,
  index,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  return (
    <div
      style={{
        background: `linear-gradient(hsl(0 0% 25% /.9 ), hsl(0 0% 30% /.2 )),url(${currentSong.image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
      className="player_container"
    >
      <div className="title">
        <p>{currentSong.title}</p>
      </div>

      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div
            className="seek_bar"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>
      </div>
      <div className="controls">
        <BsFillSkipStartCircleFill
          className="btn_action"
          onClick={() =>
            skipBack({ songs, handleClick, setCurrentSong, index, audioElem })
          }
        />
        {isplaying ? (
          <BsFillPauseCircleFill
            className="btn_action pp"
            onClick={PlayPause}
          />
        ) : (
          <BsFillPlayCircleFill className="btn_action pp" onClick={PlayPause} />
        )}
        <BsFillSkipEndCircleFill
          className="btn_action"
          onClick={() =>
            skiptoNext({ songs, handleClick, setCurrentSong, index, audioElem })
          }
        />
      </div>
    </div>
  );
};

export default Player;
