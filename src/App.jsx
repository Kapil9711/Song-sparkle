import { Component } from "react";
import LabelBottomNavigation from "./components/navigation-bar/Navigation-Bar.component";
import { Route, Routes } from "react-router-dom";
import TrendingPage from "./pages/Trending-page/Trending-page.component";
import FavoritePage from "./pages/Favorite-page/Favorite-page.component";
import SearchPage from "./pages/Search-page/Search-page.component";
import { fetchData, arrangeData } from "./assets/Utility/Utility.components";
import PlayerComponent from "./components/player/Player.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      playlistNames: {
        hindi: "110858205",
        punjabi: "1134543511",
        haryanvi: "1180795852",
      },
      index: 0,
      handleIndexAndActive: "",
      songs: [],
      active: "",
    };
  }
  handlePlayer = (index, songs, active) => {
    this.setState({ index });
    this.setState({ songs });
    this.setState({ active });
  };

  handleClick = (active, image, index) => {
    this.setState({ index });
    this.setState({ active });
  };

  async componentDidMount() {
    let allPlaylists = [];
    for (let ids in this.state.playlistNames) {
      const id = this.state.playlistNames[ids];
      const playlist = `https://saavn.dev/api/playlists?id=${id}&limit=100`;
      const data = await fetchData(playlist);
      const songsData = await arrangeData({ results: data.data.songs });
      allPlaylists[ids] = songsData;
      this.setState({ playlists: allPlaylists });
    }
  }

  render() {
    const { index, active, songs } = this.state;
    return (
      <>
        <LabelBottomNavigation />
        <Routes>
          <Route path="/Song-sparkle/">
            <Route
              index
              element={
                <TrendingPage
                  playlists={this.state.playlists}
                  handlePlayer={this.handlePlayer}
                  parentindex={index}
                  parentActive={active}
                />
              }
            />
            <Route
              path="favorites"
              element={
                <FavoritePage
                  handlePlayer={this.handlePlayer}
                  parentindex={index}
                  parentActive={active}
                />
              }
            />
            <Route
              path="search"
              element={
                <SearchPage
                  handlePlayer={this.handlePlayer}
                  parentindex={index}
                  parentActive={active}
                />
              }
            />
          </Route>
        </Routes>
        {this.state.songs.length && songs[0].id ? (
          <PlayerComponent
            key={index + songs[0].id}
            index={index}
            handleClick={this.handleClick}
            filteredSongs={songs}
            active={active}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default App;
