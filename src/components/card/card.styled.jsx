// ********************import section started ************

import { Stack } from "@mui/material";
import styled from "styled-components";

// ********************import section ended ************

// ********************styling section started ************

const CardWrapper = styled(Stack)`
  background: linear-gradient(
    to right,
    hsl(0 0% 0% /0.5),
    hsl(0 0% 0% /0.5),
    hsl(0 0% 0% /0.5)
  );
  border-radius: 50px;
  width: min(99%, 776px);
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;

  &.gradient {
    border: 1px solid
      color-mix(in srgb, hsl(10 87% 64% /1) 70%, hsl(172 92% 36% /1) 50%);
    @media (min-width: 776px) {
      outline: 2px solid hsl(10 87% 64% /1);
      border: none;
      outline-offset: 3px;
    }
  }
`;

// ********************styling section ended ************

export default CardWrapper;
