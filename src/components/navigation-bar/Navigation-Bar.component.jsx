import * as React from "react";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BottomNavigationWrapper from "./Navigation-Bar.styles";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { getPaths } from "../../assets/Utility/Utility.components";

export default function LabelBottomNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [value, setValue] = React.useState("Trending");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const { basePath } = getPaths(pathname);
    if (newValue === "Trending") navigate(basePath);
    // else if (newValue === "Favorites")
    //   navigate(basePath + newValue.toLowerCase());
    // else if(newValue === 'sign') navigate(basePath + newValue.toLowerCase())
    else navigate(basePath + newValue.toLowerCase());
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
          label="Trending"
          value="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Favorites"
          value="Favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="Search"
          value="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigationWrapper>
    </Stack>
  );
}
