import { Component } from "react";
import Lottie from "react-lottie";
import { urls, defaultOptions } from "./Data/data";
import styled from "styled-components";
import {
  fetchData,
  arrangeData,
  getPaths,
} from "../assets/Utility/Utility.components";
import { useLocation } from "react-router-dom";

import CardList from "./card-list/CardList.component";
import PlayerComponent from "./player/Player.component";
import SearchBar from "./Search-bar/search-box.comonent";
import axios from "axios";

const Div = styled.div`
  & .lottie {
    @media (min-width: 776px) {
      & {
        height: 200px;
        width: 100px;
      }
    }
  }
`;

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      globalSongs: {},
      currentSong: false,
      currentImage: "",
      active: "",
      page: 1,
      index: null,
      searchString: "",
      liveSongs: [],
      playlist: {
        hindi: "110858205",
        punjabi: "1134543511",
        haryanvi: "1180795852",
      },
      serverUrl: "https://songsserver.onrender.com/api/song-sparkle",
      FavoriteSongs: [],
      favoriteSongs: [],
    };
    this.props = props;
  }

  handleClick = (id, image, i) => {
    if (image) this.setState({ currentImage: image });
    this.setState({ active: id });
    this.setState({ index: i });
  };

  handleChange = async (value) => {
    this.setState({ active: "" });
    this.setState({ index: 0 });
    if (!value.length) {
      this.setState({ liveSongs: [] });
      this.setState({ searchString: "" });
      return;
    }
    let songsData = [];
    for (let i = 1; i <= 2; i++) {
      const url = urls[1].jioUrl + `query=${value}&limit=40&page=${i}`;
      const { data } = await fetchData(url);
      const tempSongs = await arrangeData(data);
      songsData = songsData.concat(tempSongs);
    }
    this.setState({ liveSongs: songsData });
    this.setState({ searchString: value });
  };

  // handleMore = async () => {
  //   const songsUrl =
  //     urls[1].jioUrl + `query=hindi-songs&limit=40&page=${this.state.page}`;
  //   const { data } = await fetchData(songsUrl);
  //   let songsData = await arrangeData(data);
  //   this.setState({ globalSongs: this.state.globalSongs.concat(songsData) });
  //   this.setState({ page: this.state.page + 1 });
  // };

  hanldeFavoriteSongs = async () => {
    const favData = await axios.get(this.state.serverUrl + "/getFavorite");
    const idArr = [];
    for (let ele of favData.data) {
      if (ele.songId) idArr.push(ele.songId);
    }
    this.setState({ FavoriteSongs: idArr });
  };

  async componentDidMount() {
    const favData = await axios.get(this.state.serverUrl + "/getFavorite");
    const idArr = [];
    for (let ele of favData.data) {
      if (ele.songId) idArr.push(ele.songId);
    }
    const allPlaylists = {};
    if (!this.props.FavoritePage && !this.props.searchPage)
      for (let ids in this.state.playlist) {
        const id = this.state.playlist[ids];
        const playlist = `https://saavn.dev/api/playlists?id=${id}&limit=100`;
        const data = await fetchData(playlist);
        const songsData = await arrangeData({ results: data.data.songs });
        allPlaylists[ids] = songsData;
        this.setState({ globalSongs: allPlaylists });
      }

    if (this.props.FavoritePage) {
      const url = `https://saavn.dev/api/songs/`;
      let dataList = [];
      for (let id of idArr) {
        const data = await axios.get(url + id);
        const songsData = await arrangeData({ results: data.data.data });
        dataList = dataList.concat(songsData);
      }
      this.setState({ favoriteSongs: dataList });
    }

    this.setState({ FavoriteSongs: idArr });
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    const { globalSongs } = this.state;
    let filteredSongs = [];
    if (this.props.currentPath === "" && Object.keys(globalSongs).length > 2) {
      filteredSongs = globalSongs[this.props.activePlaylist];
    }
    if (this.props.FavoritePage) {
      filteredSongs = this.state.favoriteSongs;
    }

    if (this.state.searchString.length) filteredSongs = this.state.liveSongs;
    if (!filteredSongs) filteredSongs = [];
    const MainWrapper = styled.div`
      background: linear-gradient(
          to right,
          hsl(0 0% 20% /0.7),
          hsl(0 0% 20% /0.7),
          hsl(0 0% 20% /0.7)
        ),
        url(${this.state.currentImage || filteredSongs[0]?.image});
      background-position: top;
      background-attachment: fixed;
      object-fit: cover;
      padding-top: 90px;
      padding-bottom: 150px;
      min-height: 100dvh;
      position: relative;
      z-index: 1;
    `;

    return (
      <Div>
        <SearchBar handleChange={this.handleChange} />
        <MainWrapper
          className={this.state.active.length ? "gradient-light" : ""}
        >
          {(filteredSongs.length && this.state.FavoriteSongs.length) ||
          this.props.searchPage ? (
            <CardList
              FavoriteSongs={this.state.FavoriteSongs}
              page={this.state.page}
              handleMore={this.handleMore}
              active={this.state.active}
              handleClick={this.handleClick}
              Songs={filteredSongs}
              liveSongs={this.state.liveSongs}
              hanldeFavoriteSongs={this.hanldeFavoriteSongs}
            />
          ) : (
            <Lottie className="lottie" options={defaultOptions} />
          )}
          {filteredSongs.length && this.state.FavoriteSongs.length ? (
            <PlayerComponent
              index={this.state.index}
              handleClick={this.handleClick}
              filteredSongs={filteredSongs}
              active={this.state.active}
            />
          ) : (
            ""
          )}
        </MainWrapper>
      </Div>
    );
  }
}

export default Wrapper;
