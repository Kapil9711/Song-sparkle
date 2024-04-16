import { Stack } from "@mui/material";
import styled from "styled-components";
import ImageComponent from "./Image.component";

const H1 = styled.h1`
  font-size: 1rem;
  @media (min-width: 776px) {
    font-size: 1.15rem;
  }
`;

const MediaContent = ({ id, image, handleClick, active, name, i }) => {
  return (
    <Stack
      id={id}
      onClick={(e) => handleClick(e.currentTarget.id, image, i - 1)}
      spacing={2}
      direction={"row"}
      alignItems={"center"}
      sx={{ width: "95%" }}
    >
      <ImageComponent active={active} id={id} image={image} />
      <H1 className="h1" style={{ color: "hsl(334, 100%, 93%)" }}>
        {i} : {name.slice(0, 14)}
      </H1>
    </Stack>
  );
};

export default MediaContent;
