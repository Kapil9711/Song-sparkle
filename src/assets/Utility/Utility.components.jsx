import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios({
      method: "get",
      url,
    });
    return response.data;
  } catch (error) {
    console.log("error occur");
  }
};

const arrangeData = async ({ results }) => {
  return results.map((song) => {
    const { id, downloadUrl: url, image, name } = song;
    return { id, url: url[4].url, image: image[2].url, title: name };
  });
};

const createDownloadLink = async (ele) => {
  async function getLink(ele) {
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
  }

  try {
    getLink(ele);
  } catch (error) {
    console.log("error occur in creating the download link");
    console.log("trying again....");
    try {
      getLink(ele);
    } catch (error) {
      console.log("error occur again trying");
      try {
        getLink(ele);
      } catch (error) {
        console.log("unable to fetch link try agian");
      }
    }
  }
};

const skipBack = (data) => {
  const { songs, handleClick, setCurrentSong, index, audioElem } = data;
  if (index == 0) {
    const i = songs.length - 1;
    setCurrentSong(songs[i]);
    handleClick(songs[i].id, songs[i].image, i);
  } else {
    const i = index - 1;
    setCurrentSong(songs[i]);
    handleClick(songs[i].id, songs[i].image, i);
  }
  audioElem.current.currentTime = 0;
  // handleClick(songs[index - 1].id, songs[index - 1].image,);
};

const skiptoNext = (data) => {
  const { songs, handleClick, setCurrentSong, index, audioElem } = data;

  if (index == songs.length - 1) {
    handleClick(songs[0].id, songs[0].image, 0);
    setCurrentSong(songs[0]);
  } else {
    const i = index + 1;
    setCurrentSong(songs[i]);
    handleClick(songs[i].id, songs[i].image, i);
  }
  audioElem.current.currentTime = 0;
};
const getPaths = (path) => {
  const pathsArr = path.trim().split("/");
  const basePath = "/" + pathsArr.slice(0, -1).join("") + "/";
  const currentPath = pathsArr[pathsArr.length - 1];
  return { basePath, currentPath };
};

const changeFavorite = async (id, isAlreadyExist, currentUser) => {
  let url = "https://songsserver.onrender.com/api/song-sparkle";
  if (isAlreadyExist) url += "/deleteFavorite";
  else url += "/createFavorite";
  return await axios({
    method: "POST",
    url,
    headers: {
      "content-type": "application/json",
    },
    data: {
      songId: id,
      username: currentUser,
    },
  });
};

// creating fav array
const getFavArray = async (serverUrl) => {
  const favData = await axios.get(serverUrl + "/getFavorite");
  const idArr = [];
  const usernameArr = [];
  for (let ele of favData.data) {
    if (ele.songId) idArr.push(ele.songId);
    if (ele.username) usernameArr.push(ele.username);
  }
  return { idArr, usernameArr };
};

const getFavSongsArr = async (idArr) => {
  const url = `https://saavn.dev/api/songs/`;
  let dataList = [];
  for (let id of idArr) {
    const data = await axios.get(url + id);
    const songsData = await arrangeData({ results: data.data.data });
    dataList = dataList.concat(songsData);
  }
  return dataList;
};

const loginValidator = (password, email) => {
  const validation = {};
  if (email) validation.email = email.includes("a") && email.includes(".com");
  if (password) validation.password = password.length >= 8;
  return validation;
};

export {
  fetchData,
  arrangeData,
  createDownloadLink,
  skiptoNext,
  skipBack,
  getPaths,
  changeFavorite,
  getFavArray,
  getFavSongsArr,
  loginValidator,
};
