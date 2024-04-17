import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigationWrapper from "./Navigation-Bar.styles";
import { Stack } from "@mui/material";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <BottomNavigationWrapper
        sx={{
          height: "40px",
          background: "linear-gradient(hsl(0 0% 0% ), hsl(0 0% 0%))",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Folder"
          value="folder"
          icon={<FolderIcon />}
        />
      </BottomNavigationWrapper>
    </Stack>
  );
}
