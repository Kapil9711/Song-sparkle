import Wrapper from "../../components/Wrapper.component";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import NavigationIcon from "@mui/icons-material/Navigation";

const TrendingPage = ({
  playlists,
  handlePlayer,
  parentindex,
  parentActive,
}) => {
  const [activePlaylist, setActivePlaylist] = React.useState("hindi");
  const handleClick = (e) => {
    setActivePlaylist(e.target.id);
  };

  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          position: "fixed",
          top: "0px",
          zIndex: "1000",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Fab
          sx={{
            background:
              activePlaylist === "hindi" ? "hsl(325 100% 60%)" : "white",
          }}
          onClick={handleClick}
          id="hindi"
          variant="extended"
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Hindi
        </Fab>
        <Fab
          sx={{
            background:
              activePlaylist === "punjabi" ? "hsl(325 100% 60%)" : "white",
          }}
          onClick={handleClick}
          id="punjabi"
          variant="extended"
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Punjabi
        </Fab>
        <Fab
          sx={{
            background:
              activePlaylist === "haryanvi" ? "hsl(325 100% 60%)" : "white",
          }}
          onClick={handleClick}
          id="haryanvi"
          variant="extended"
        >
          <NavigationIcon sx={{ mr: 1 }} />
          Haryanvi
        </Fab>
      </Box>
      <Wrapper
        handlePlayer={handlePlayer}
        activePlaylist={activePlaylist}
        currentPath={"trendingPage"}
        playlists={playlists}
        parentindex={parentindex}
        parentActive={parentActive}
      />
    </>
  );
};

export default TrendingPage;
