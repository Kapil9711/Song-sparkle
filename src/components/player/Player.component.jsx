import styled from "styled-components";
import { useRef, useState } from "react";
import { useEffect } from "react";
import Player from "./Player";
import { skiptoNext } from "../../assets/Utility/Utility.components";
const CardWrapper = styled.div`
  & .player-wrapper {
    position: fixed;
    z-index: 1000;
    width: 100%;
    bottom: 38px;
    left: auto;
    right: auto;
    background-color: hsl(334 100% 38% /1);
    box-shadow: 0 -5px 10px hsl(334 100% 10% /0.5);
  }
  @media (min-width: 776px) {
    & .player-wrapper {
      box-shadow: none;
    }
  }
  & .audio-wrapper {
    width: 100%;
  }
`;
const PlayerComponent = ({ filteredSongs, active, handleClick, index }) => {
  const audioElem = useRef();
  const [songs, setSongs] = useState(filteredSongs);
  const [isplaying, setisplaying] = useState(active.length > 0);
  const [currentSong, setCurrentSong] = useState(songs[index] || songs[0]);
  const [ended, setEnded] = useState(() => false);

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
      setEnded(audioElem.ended);
    } else {
      audioElem.current.pause();
    }
  }, [isplaying, currentSong, songs]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;
    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };
  return (
    <CardWrapper>
      <div
        className="player-wrapper"
        style={{
          background: `transparent`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          padding: "2px",
        }}
      >
        <audio
          autoPlay
          onEnded={() =>
            skiptoNext({ songs, handleClick, setCurrentSong, index, audioElem })
          }
          src={currentSong.url}
          ref={audioElem}
          onTimeUpdate={onPlaying}
        />

        <Player
          handleClick={handleClick}
          songs={songs}
          index={index}
          setSongs={setSongs}
          isplaying={isplaying}
          setisplaying={setisplaying}
          audioElem={audioElem}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          ended={ended}
        />
      </div>
    </CardWrapper>
  );
};

export default PlayerComponent;
