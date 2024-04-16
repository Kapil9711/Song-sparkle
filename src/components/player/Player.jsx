import styled from "styled-components";
import { useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { skiptoNext, skipBack } from "../../assets/Utility/Utility.components";

const PlayerContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 1rem 0.6rem;
  color: rgb(218, 218, 218);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  @media (min-width: 996px) {
    & {
      width: 100%;
      gap: 10px;
      flex-direction: row;
      justify-content: "center";
    }
  }

  & > * {
    padding: 0.3rem 0;
    color: rgb(202, 202, 202);
  }

  & .title {
    font-size: inherit;
  }
  & .navigation {
    width: 100%;

    & .navigation_wrapper {
      min-width: 100%;

      background-color: rgba(119, 119, 119, 0.781);
      height: 8px;
      border-radius: 30px;
      cursor: pointer;

      .seek_bar {
        width: 0;
        height: 100%;
        background-color: hsl(334, 100%, 80%);
        border-radius: 30px;
      }
    }
  }
  & .controls {
    font-size: inherit;
    display: flex;
    align-items: center;

    & .btn_action {
      font-size: 2.5rem;
      margin: 0 1rem;
      cursor: pointer;

      &:hover {
        color: white;
      }
      @media (min-width: 776px) {
        & {
          font-size: 2.5rem;
        }
      }
    }
  }

  & .pp {
    font-size: 3.3rem;
  }
`;

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
    <PlayerContainer
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
    </PlayerContainer>
  );
};

export default Player;
