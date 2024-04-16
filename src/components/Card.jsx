import styled from "styled-components";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
// import Iframe from "./Iframe";
// import "../App.css";
import Player from "../Player/Player";
const CardWrapper = styled.div`
  background: #f7418f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  width: 100%;
  /* max-width: 450px; */
  height: auto;
  padding: 0px 0px;
  border-radius: 20px;
  /* box-shadow: 0 10px 10px hsl(0 0% 40% /0.4); */
  @media (min-width: 756px) {
    & {
      padding: 32px 24px;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 70px;
    }
  }
  & .list-wrapper {
    display: flex;
    cursor: pointer;
    width: 100%;

    /* margin-bottom: 8px; */
    margin: -10px;
    box-shadow: 0 5px 10px hsl(0 0% 0% /0.2);
    border-radius: 12px;

    @media (min-width: 776px) {
      & {
        flex-direction: column;
        width: 280px;
      }
      & .btn {
        width: 100%;
      }
    }

    & h3 {
      background: hsl(334, 100%, 40%);
      padding: 0.7rem;
      width: 100%;
      border-radius: 4px 0 0 4px;
      color: hsl(334, 100%, 95%);
      font-size: 1.4rem;
      background-position: center;
      background-size: contain;
      /* background-size: contain; */
      @media (min-width: 776px) {
        & {
          background-size: cover;
          background-position: center;
        }
      }
    }
  }
  & .player-wrapper {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: auto;
    right: auto;
    background-color: hsl(334 100% 38% /1);
    box-shadow: 0 -5px 10px hsl(334 100% 30% /0.5);
    /* border: solid;  */
  }
  & h2 {
    width: 100%;
    text-align: left;
    font-size: 1.3rem;
    margin-bottom: -10px;
    color: #fff3c7;
  }
  & img {
    height: 250px;
    width: 100%;
  }
  & .audio-wrapper {
    width: 100%;
    /* max-width: 350px; */
  }
`;

const Card = ({ global }) => {
  const songsData = global.map((ele) => {
    return {
      title: ele.songName,
      url: ele.songUrl,
      image: ele.imageUrl,
      id: ele.id,
    };
  });
  // console.log(songsData);
  const audioElem = useRef();

  const [songs, setSongs] = useState(songsData);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [ended, setEnded] = useState(() => false);
  const setImage = () => {
    const image = currentSong.image;
    const width = window.innerWidth;
    console.log(width);

    document.body.style.transition = "background 10s ease";
    document.body.style.background = `linear-gradient(hsl(0 0% 30% /.6 ),hsl(0 0% 30% /.5)),url(${image})`;
    document.body.style.backgroundSize = "cover";
  };

  useEffect(() => {
    setImage();
  }, [isplaying]);

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

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.title == currentSong.title);
    setImage();

    if (index == songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const handleClick = (ele) => {
    fetch(ele.url)
      .then((res) => res.blob())
      .then((blob) => {
        const bloburl = window.URL.createObjectURL(new Blob([blob]));
        const fileName = ele.title.slice(0, 25) + ".mp3";
        const aTag = document.createElement("a");
        aTag.href = bloburl;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);

        aTag.click();
        aTag.remove();
      });
  };

  return (
    <CardWrapper
      style={{
        background: `linear-gradient(hsl(0 0% 25% /.8 ), hsl(0 0% 30% /.2 )),url(${currentSong.image})`,
      }}
    >
      {songsData.map((ele, i) => (
        <div className="list-wrapper" key={ele.id ? ele.id : ele.title}>
          <h3
            onClick={() => {
              setCurrentSong(ele);
              setisplaying(true);
              setImage();
            }}
            style={
              ele.image
                ? {
                    background: `linear-gradient(hsl(0 0% 25% /.5 ), hsl(0 0% 30% /.2 )),url(${ele.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    // backgroundRepeat: "no-repeat",
                    height: "150px",
                  }
                : {}
            }
          >
            {i + 1} : {ele.title.slice(0, 20)}
            {/* {ele.image ? (
              <img
                style={{
                  display: "inline-block",
                  height: "80px",
                  width: "80px",
                }}
                src={ele.image}
                alt="img"
              />
            ) : (
              ""
            )} */}
          </h3>
          <Button
            className="btn"
            onClick={() => handleClick(ele)}
            variant="contained"
            // size="large"
            style={{ background: "hsl(334, 100%, 48%)" }}
          >
            <DownloadIcon sx={{ fontSize: "35px" }} />
          </Button>
        </div>
      ))}

      {/* <h2>{songName}</h2> */}
      {/* <iframe
        allow="fullscreen;"
        width="100%"
        height="250"
        src={thumbnailUrl}
      ></iframe> */}
      {/* {<Iframe thumbnailUrl={thumbnailUrl} />} */}
      <div className="player-wrapper">
        <audio
          autoPlay
          onEnded={skiptoNext}
          src={currentSong.url}
          ref={audioElem}
          onTimeUpdate={onPlaying}
        />

        <Player
          setImage={setImage}
          songs={songs}
          setSongs={setSongs}
          isplaying={isplaying}
          setisplaying={setisplaying}
          audioElem={audioElem}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          ended={ended}
        />
      </div>

      {/* <div className="audio-wrapper">
        <audio style={{ display: "none" }} ref={audioElement} controls>
          <source src={songUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </audio>
        {isactive ? (
          <Button
            onClick={handleClick}
            sx={{ ml: 5 }}
            size="large"
            color="primary"
            variant="contained"
          >
            pause
          </Button>
        ) : (
          <Button
            onClick={handleClick}
            sx={{ ml: 5 }}
            size="large"
            color="secondary"
            variant="contained"
          >
            play
          </Button>
        )}
      </div> */}
    </CardWrapper>
  );
};

export default Card;
