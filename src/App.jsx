import { Component } from "react";
import LabelBottomNavigation from "./components/navigation-bar/Navigation-Bar.component";
import { Route, Routes, Outlet } from "react-router-dom";
import TrendingPage from "./pages/Trending-page/Trending-page.component";
import FavoritePage from "./pages/Favorite-page/Favorite-page.component";
import SearchPage from "./pages/Search-page/Search-page.component";
import { fetchData, arrangeData } from "./assets/Utility/Utility.components";
import PlayerComponent from "./components/player/Player.component";
import SignInPage from "./pages/sign-in-page/sign-in-page.component";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";
// import { getFavArray } from "./assets/Utility/Utility.components";

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
      serverUrl: "https://songs-server-nine.vercel.app/api/song-sparkle",
      favoriteSongsId: [],
      currentUser: "",
      isUserExist: false,
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
  handleUser = (user) => {
    this.setState({
      currentUser: user.data.user.username.trim().split(" ")[0],
    });
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
    // const { idArr, usernameArr } = await getFavArray(this.state.serverUrl);
    // this.setState({
    //   isUserExist: usernameArr.includes(this.state.currentUser),
    // });
    // this.setState({ favoriteSongsId: idArr });
  }

  render() {
    const { index, active, songs } = this.state;
    return (
      <>
        <Routes>
          <Route
            path="/Song-sparkle/"
            element={<SignInPage handleUser={this.handleUser} />}
          />

          <Route path="/Song-sparkle/sign-up" element={<SignUpPage />} />

          {/* <Route></Route> */}
          <Route
            path="/Song-sparkle-login/"
            element={
              <>
                <LabelBottomNavigation />
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
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <TrendingPage
                  playlists={this.state.playlists}
                  handlePlayer={this.handlePlayer}
                  parentindex={index}
                  parentActive={active}
                  PlayingSongs={this.state.songs}
                  favoriteSongsId={this.state.favoriteSongsId}
                  currentUser={this.state.currentUser}
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
                  PlayingSongs={this.state.songs}
                  favoriteSongsId={this.state.favoriteSongsId}
                  currentUser={this.state.currentUser}
                  isUserExist={this.state.isUserExist}
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
                  PlayingSongs={this.state.songs}
                  favoriteSongsId={this.state.favoriteSongsId}
                  currentUser={this.state.currentUser}
                />
              }
            />
          </Route>
        </Routes>
        {/* {this.state.songs.length && songs[0].id ? (
          <PlayerComponent
            key={index + songs[0].id}
            index={index}
            handleClick={this.handleClick}
            filteredSongs={songs}
            active={active}
          />
        ) : (
          ""
        )} */}
      </>
    );
  }
}

export default App;
