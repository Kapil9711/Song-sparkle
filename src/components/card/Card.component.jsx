import { Stack, Button } from "@mui/material";
import styled from "styled-components";
import DownloadIcon from "@mui/icons-material/Download";
import { createDownloadLink } from "../../assets/Utility/Utility.components";
import MediaContent from "./MediaContent.component";

const CardWrapper = styled(Stack)`
  background: linear-gradient(
    to right,
    hsl(0 0% 0% /0.65),
    hsl(0 0% 5% /0.6),
    hsl(0 0% 0% /0.65)
  );
  /* border: 1px solid black; */

  border-radius: 50px;
  width: min(99%, 776px);
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;

  &.gradient {
    border: 1px solid
      color-mix(in srgb, hsl(10 87% 64% /1) 70%, hsl(172 92% 36% /0.6) 50%);
  }

  & img {
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
  & .active {
    animation: 10s linear infinite rotate forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      opacity: 0.9;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: rotate(360deg);
      opacity: 1;
    }
  }
`;

const Card = ({ name, url, image, handleClick, id, active, i }) => {
  return (
    <CardWrapper
      className={active === id ? "gradient" : ""}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <MediaContent
        i={i + 1}
        name={name}
        image={image}
        handleClick={handleClick}
        id={id}
        active={active}
        url={url}
      />
      <Button
        onClick={async () => await createDownloadLink({ url, title: name })}
        className="btn"
        variant="contained"
        style={{
          background: "transparent",
          boxShadow: "none",
          marginRight: "10px",
        }}
      >
        <DownloadIcon sx={{ fontSize: "35px" }} />
      </Button>
    </CardWrapper>
  );
};

export default Card;
