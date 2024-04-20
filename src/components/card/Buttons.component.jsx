// *********************importing Section started*********************

import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteIcon from "@mui/icons-material/Favorite";

// *********************importing Section ended*********************

// *********************Components Section started*********************

// 1******DownloadButton ******
const DownloadBtn = ({ createDownloadLink, url, title }) => {
  return (
    <Button
      onClick={async () => await createDownloadLink({ url, title: title })}
      variant="contained"
      style={{
        background: "transparent",
        boxShadow: "none",
        marginRight: "8px",
      }}
    >
      <DownloadIcon sx={{ fontSize: "35px" }} />
    </Button>
  );
};

// 1******FavoriteButton ******
const FavoriteBtn = ({ handleFavorite, FavoriteSongs, id }) => {
  return (
    <Button
      onClick={handleFavorite}
      variant="contained"
      style={{
        boxShadow: "none",
        marginRight: "0px",
        color: FavoriteSongs.includes(id) ? "hsl(325 100% 60%)" : "white",
        backgroundColor: "transparent",
      }}
    >
      <FavoriteIcon sx={{ fontSize: "24px" }} />
    </Button>
  );
};

// *********************Components Section ended*********************

export { DownloadBtn, FavoriteBtn };
