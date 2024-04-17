import styled from "styled-components";
import { useRef } from "react";
import {
  BsFillPlayCircleFill,
  BsFillPauseCircleFill,
  BsFillSkipStartCircleFill,
  BsFillSkipEndCircleFill,
} from "react-icons/bs";
import { skiptoNext, skipBack } from "../../assets/Utility/Utility.components";
import ImageComponent from "../card/Image.component";

const PlayerContainer = styled.div`
  border-radius: 4px;
  background: linear-gradient(hsl(0 0% 0% /0.7), hsl(0 0% 0% /0.7));
  border: solid hsl(334, 100%, 80%);
  max-width: 776px;
  margin: 0 auto;
  color: rgb(218, 218, 218);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  gap: 8px;
  padding: 0 2px;
  @media (min-width: 996px) {
    & {
      gap: 15px;
      border: 1px solid hsl(334, 100%, 80%);
      flex-direction: row;
      justify-content: "center";
      padding: 0 5px;
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
    margin-bottom: 24px;

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
    justify-content: space-between;
    gap: 20px;
    padding: 0 4px;
    @media (min-width: 776px) {
      & {
        gap: 30px;
      }
    }

    & .btn_action {
      font-size: 2rem;
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
    <PlayerContainer className="player_container">
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
          {currentSong.title}
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
