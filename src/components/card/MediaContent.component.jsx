// ********************importimg section started ************

import { Stack } from "@mui/material";
import styled from "styled-components";
import ImageComponent from "./Image.component";

// ********************importing section ended ************

// ********************styling section started ************

const H1 = styled.h1`
  font-size: 0.85rem;
  @media (min-width: 776px) {
    font-size: 1.15rem;
  }
`;

// ********************styling section ended ************

// ********************Component section started ************

const MediaContent = ({
  id,
  image,
  active,
  title,
  i,
  handleIndexAndActive,
}) => {
  return (
    <Stack
      id={id}
      onClick={(e) => {
        handleIndexAndActive(e.currentTarget.id, i);
      }}
      spacing={2}
      direction={"row"}
      alignItems={"center"}
      sx={{ width: "95%" }}
    >
      <ImageComponent active={active} id={id} image={image} />
      <H1 className="h1" style={{ color: "hsl(334, 100%, 93%)" }}>
        {i + 1} : {window.innerWidth > 776 ? title : title.slice(0, 12)}
      </H1>
    </Stack>
  );
};

// ********************Component section ended ************

export default MediaContent;
