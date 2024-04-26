import { Component } from "react";
import Lottie from "react-lottie";
import { urls, defaultOptions } from "./Data/data";
import styled from "styled-components";
import {
  fetchData,
  arrangeData,
  getFavArray,
  getFavSongsArr,
} from "../assets/Utility/Utility.components";
import CardList from "./card-list/CardList.component";
import SearchBar from "./Search-bar/search-box.comonent";

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
const MainWrapper = styled.div``;

class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: false,
      currentImage: "",
      searchString: "",
      liveSongs: [],
      serverUrl: "https://songsserver.onrender.com/api/song-sparkle",
      FavoriteSongs: [],
      favoriteSongs: [],
      usernames: [],
      selectedUser: this.props.selectedUser,
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
    let { idArr, usernameArr } = await getFavArray(this.state.serverUrl);

    if (this.props.FavoritePage) {
      const dataList = await getFavSongsArr(idArr);
      this.setState({ favoriteSongs: dataList });
    }
    this.setState({ FavoriteSongs: idArr });
    this.setState({ usernames: usernameArr });
    if (this.props.handleUsername) {
      this.props.handleUsername(usernameArr);
    }
  };

  async componentDidMount() {
    // let idArr = this.props.favoriteSongsId;
    // if (this.props.FavoritePage)
    let { idArr, usernameArr } = await getFavArray(this.state.serverUrl);

    if (this.props.FavoritePage) {
      const dataList = await getFavSongsArr(idArr);
      this.setState({ favoriteSongs: dataList });
    }
    this.setState({ FavoriteSongs: idArr });
    this.setState({ usernames: usernameArr });
    if (this.props.handleUsername) {
      this.props.handleUsername(usernameArr);
    }
  }

  render() {
    const globalSongs = this.props.playlists;
    let filteredSongs = [];
    if (this.props.currentPath === "trendingPage")
      filteredSongs = globalSongs[this.props.activePlaylist];

    if (this.props.FavoritePage) {
      filteredSongs = this.state.favoriteSongs;
      // console.log(this.props.selectedUser, this.props.currentUser);
      if (!this.props.selectedUser) {
        let filterdArr = [];
        for (let i = 0; i < this.state.usernames.length; i++) {
          const user = this.state.usernames[i];
          if (user === this.props.currentUser)
            filterdArr.push(filteredSongs[i]);
        }

        if (filterdArr.length) filteredSongs = filterdArr;
      }
      if (this.props.selectedUser !== "All" && this.props.selectedUser) {
        let filterdArr = [];
        for (let i = 0; i < this.state.usernames.length; i++) {
          const user = this.state.usernames[i];
          if (user === this.props.selectedUser)
            filterdArr.push(filteredSongs[i]);
        }
        filteredSongs = filterdArr;
      }
    }
    if (this.state.searchString.length) filteredSongs = this.state.liveSongs;
    if (!filteredSongs) filteredSongs = [];

    return (
      <Div>
        <SearchBar handleChange={this.handleChange} />
        <MainWrapper>
          {filteredSongs.length || this.props.searchPage ? (
            <CardList
              handlePlayer={this.props.handlePlayer}
              handleClick={this.handleClick}
              hanldeFavoriteSongs={this.hanldeFavoriteSongs}
              FavoriteSongs={this.state.FavoriteSongs}
              Songs={filteredSongs}
              liveSongs={this.state.liveSongs}
              PlayingSongs={this.props.PlayingSongs}
              FavoritePage={this.props.FavoritePage}
              parentindex={this.props.parentindex}
              parentActive={this.props.parentActive}
              currentUser={this.props.currentUser}
              usernames={this.state.usernames}
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
