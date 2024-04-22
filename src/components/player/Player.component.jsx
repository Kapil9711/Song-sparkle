import { useRef, useState } from "react";
import { useEffect } from "react";
import Player from "./Player";
import { skiptoNext } from "../../assets/Utility/Utility.components";
import CardWrapper from "./Player.component.styles";

const PlayerComponent = ({ filteredSongs, handleClick, active, index }) => {
  const audioElem = useRef();
  const [songs, setSongs] = useState(filteredSongs);
  const [isplaying, setisplaying] = useState(active.length ? true : false);
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
      <div className="player-wrapper">
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
