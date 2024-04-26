import Wrapper from "../../components/Wrapper.component";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
// import { mainSheet } from "styled-components/dist/models/StyleSheetManager";

const FavoritePage = ({
  handlePlayer,
  parentindex,
  parentActive,
  PlayingSongs,
  favoriteSongsId,
  currentUser,
}) => {
  const [age, setAge] = React.useState("");
  const [usernames, setusernames] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState("");
  const handleUsername = (users) => {
    let set = new Set(users);
    setusernames([...set]);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedUser(value);
    setAge(value);
  };
  return (
    <>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Box
          sx={{
            width: "min(100%,776px)",
            position: "fixed",
            top: "0px",
            margin: "0 auto",
            zIndex: 9999,
            background: "white",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Filter-Songs</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="age"
              onChange={handleChange}
            >
              {usernames.length
                ? usernames.map((user, i) => (
                    <MenuItem key={user + i} value={user}>
                      {user}
                    </MenuItem>
                  ))
                : ""}
              <MenuItem key={"All"} value={"All"}>
                All
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
      <Wrapper
        handlePlayer={handlePlayer}
        parentindex={parentindex}
        parentActive={parentActive}
        FavoritePage={true}
        PlayingSongs={PlayingSongs}
        favoriteSongsId={favoriteSongsId}
        currentUser={currentUser}
        handleUsername={handleUsername}
        selectedUser={selectedUser}
      />
    </>
  );
};
export default FavoritePage;
