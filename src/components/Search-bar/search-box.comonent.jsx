import { TextField } from "@mui/material";
import styled from "styled-components";
const SearchWrapper = styled.div`
  width: min(100%);
  display: flex;
  justify-content: center;
  position: fixed;
  top: 1px;
  margin: 0 auto;
  z-index: 10000;
`;

const SearchBar = ({ handleChange }) => {
  var timer = "";
  const delayWrapper = (e) => {
    let value = e.target.value;
    const delay = () => {
      clearTimeout(timer);
      timer = setTimeout(function () {
        handleChange(value);
      }, 500);
    };
    delay();
  };
  return (
    <SearchWrapper>
      <TextField
        onChange={delayWrapper}
        label="Search"
        variant="filled"
        sx={{
          background:
            "linear-gradient(to right,hsl(0 70% 100% /1),hsl(0 70% 100% /.9))",
          width: "min(99%, 776px)",
        }}
      />
    </SearchWrapper>
  );
};

export default SearchBar;
