// import Wrapper from "./components/Wrapper.component";
import LabelBottomNavigation from "./components/navigation-bar/Navigation-Bar.component";
import { Route, Routes } from "react-router-dom";
import TrendingPage from "./pages/Trending-page/Trending-page.component";
import FavoritePage from "./pages/Favorite-page/Favorite-page.component";
import SearchPage from "./pages/Search-page/Search-page.component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Song-sparkle/">
          <Route index element={<TrendingPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
      <LabelBottomNavigation />
    </>
  );
}

export default App;
