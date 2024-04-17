import BottomNavigation from "@mui/material/BottomNavigation";
import styled from "styled-components";

const BottomNavigationWrapper = styled(BottomNavigation)`
  position: fixed;
  z-index: 1000;
  bottom: 0px;
  width: min(100%, 776px);
  display: flex;
  align-items: center;
  background: linear-gradient(hsl(0 0% 10% /1), hsl(0 0% 10% /1));

  & > * {
    height: 30px;
    color: white;
  }
`;

export default BottomNavigationWrapper;
