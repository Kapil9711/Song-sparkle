import { Component } from "react";
import Lottie from "react-lottie";
import { urls, defaultOptions } from "./Data/data";
import styled from "styled-components";
import { fetchData, arrangeData } from "../assets/Utility/Utility.components";

import CardList from "./card-list/CardList.component";
import PlayerComponent from "./player/Player.component";
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

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      globalSongs: [],
      currentSong: false,
      currentImage: "",
      active: "",
      page: 1,
      index: null,
      searchString: "",
      liveSongs: [],
    };
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

  handleMore = async () => {
    const songsUrl =
      urls[1].jioUrl + `query=hindi-songs&limit=40&page=${this.state.page}`;
    const { data } = await fetchData(songsUrl);
    let songsData = await arrangeData(data);
    this.setState({ globalSongs: this.state.globalSongs.concat(songsData) });
    this.setState({ page: this.state.page + 1 });
  };

  async componentDidMount() {
    const songsUrl =
      urls[1].jioUrl + `query=hindi-songs&limit=40&page=${this.state.page}`;
    const { data } = await fetchData(songsUrl);
    const songsData = await arrangeData(data);
    // this.setState({ globalSongs: this.state.globalSongs.concat(songsData) });
    this.setState({ globalSongs: songsData });
    this.setState({ page: this.state.page + 1 });
  }

  render() {
    const { searchString, globalSongs } = this.state;

    let filteredSongs = globalSongs.filter((song) =>
      song.title.toLowerCase().includes(searchString.toLowerCase())
    );
    if (this.state.searchString.length) filteredSongs = this.state.liveSongs;

    const MainWrapper = styled.div`
      background: linear-gradient(
          to right,
          hsl(0 0% 20% /0.7),
          hsl(0 0% 20% /0.7),
          hsl(0 0% 20% /0.7)
        ),
        url(${this.state.currentImage || filteredSongs[0]?.image});
      background-position: center;
      background-attachment: fixed;
      object-fit: cover;
      padding-top: 90px;
      padding-bottom: 120px;
      min-height: 100svh;
      position: relative;
      z-index: 1;
    `;

    return (
      <Div>
        <SearchBar handleChange={this.handleChange} />
        <MainWrapper
          className={this.state.active.length ? "gradient-light" : ""}
        >
          {filteredSongs.length ? (
            <CardList
              page={this.state.page}
              handleMore={this.handleMore}
              active={this.state.active}
              handleClick={this.handleClick}
              Songs={filteredSongs}
              liveSongs={this.state.liveSongs}
            />
          ) : (
            <Lottie className="lottie" options={defaultOptions} />
          )}

          {filteredSongs.length ? (
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
