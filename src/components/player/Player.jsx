import { useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { skiptoNext, skipBack } from "../../assets/Utility/Utility.components";
import ImageComponent from "../card/Image.component";
import PlayerContainer from "./player.styles";

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

  // handling mediasession for controlling the play back and media art

  if ("mediaSession" in navigator) {
    navigator.mediaSession.setActionHandler("play", () => {
      setisplaying(!isplaying);
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      setisplaying(!isplaying);
    });
    //handling art img
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentSong.title,
      artwork: [
        { src: currentSong.image, sizes: "128x128", type: "image/png" },
      ],
    });
    // handling next and prev track
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      skipBack({ songs, handleClick, setCurrentSong, index, audioElem });
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      skiptoNext({
        songs,
        handleClick,
        setCurrentSong,
        index,
        audioElem,
      });
    });
  }
  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  return (
    <PlayerContainer
      style={{
        background: `linear-gradient(hsl(0 0% 0% /0.6), hsl(0 0% 0% /0.6)),url(${currentSong.image})`,
      }}
      className="player_container"
    >
      <div className="title">
        <ImageComponent image={currentSong.image} isActive={isplaying} />
      </div>
      <div className="navigation">
        <p
          style={{
            textAlign: "center",
            marginBottom: "10px",
            color: "white",
          }}
        >
          {currentSong.title.slice(0, 14)}
        </p>

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
            skiptoNext({
              songs,
              handleClick,
              setCurrentSong,
              index,
              audioElem,
            })
          }
        />
      </div>
    </PlayerContainer>
  );
};

export default Player;
