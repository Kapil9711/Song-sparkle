import { Component } from "react";
import Lottie from "react-lottie";
import { urls, defaultOptions } from "./Data/data";
import styled from "styled-components";
import { fetchData, arrangeData } from "../assets/Utility/Utility.components";
import CardList from "./card-list/CardList.component";
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
      searchString: "",
      liveSongs: [],
      serverUrl: "https://songsserver.onrender.com/api/song-sparkle",
      FavoriteSongs: [],
      favoriteSongs: [],
    };
    this.props = props;
  }
  handleChange = async (value) => {
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

  hanldeFavoriteSongs = async () => {
    const favData = await axios.get(this.state.serverUrl + "/getFavorite");
    const idArr = [];
    for (let ele of favData.data) {
      if (ele.songId) idArr.push(ele.songId);
    }
    this.setState({ FavoriteSongs: idArr });

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
  };

  async componentDidMount() {
    const favData = await axios.get(this.state.serverUrl + "/getFavorite");
    const idArr = [];
    for (let ele of favData.data) {
      if (ele.songId) idArr.push(ele.songId);
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
  }

  render() {
    const globalSongs = this.props.playlists;
    let filteredSongs = [];
    if (this.props.currentPath === "trendingPage") {
      filteredSongs = globalSongs[this.props.activePlaylist];
    }
    if (this.props.FavoritePage) {
      filteredSongs = this.state.favoriteSongs;
    }

    if (this.state.searchString.length) filteredSongs = this.state.liveSongs;
    if (!filteredSongs) filteredSongs = [];
    const MainWrapper = styled.div``;

    return (
      <Div>
        <SearchBar handleChange={this.handleChange} />
        <MainWrapper>
          {filteredSongs.length || this.props.searchPage ? (
            <CardList
              handlePlayer={this.props.handlePlayer}
              FavoriteSongs={this.state.FavoriteSongs}
              page={this.state.page}
              handleMore={this.handleMore}
              handleClick={this.handleClick}
              Songs={filteredSongs}
              liveSongs={this.state.liveSongs}
              hanldeFavoriteSongs={this.hanldeFavoriteSongs}
              FavoritePage={this.props.FavoritePage}
              parentindex={this.props.parentindex}
              parentActive={this.props.parentActive}
              PlayingSongs={this.props.PlayingSongs}
            />
          ) : (
            <Lottie className="lottie" options={defaultOptions} />
          )}
        </MainWrapper>
      </Div>
    );
  }
}

export default Wrapper;
