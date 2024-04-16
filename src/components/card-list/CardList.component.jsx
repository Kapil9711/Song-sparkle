import Card from "../card/Card.component";
import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & .down-arow {
    animation: 2s linear infinite moveDown forwards;
  }

  @keyframes moveDown {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(0.8);
    }
  }
`;

const CardList = ({ Songs, handleClick, active, handleMore, page }) => {
  return (
    <ListWrapper>
      {/* <Typography variant="h1" sx={{ fontFamily: "Dancing Script, cursive" }}>
        Songs Sparkle
      </Typography> */}
      {Songs.map((song, i) => (
        <Card
          i={i}
          active={active}
          handleClick={handleClick}
          name={song.title}
          url={song.url}
          image={song.image}
          key={song.id}
          id={song.id}
        />
      ))}
      {page <= 3 ? (
        <Stack
          sx={{ cursor: "pointer" }}
          onClick={handleMore}
          mt={1}
          alignItems={"center"}
        >
          <Typography sx={{ color: "white" }} variant="h5">
            more
          </Typography>
          <ArrowDownwardIcon
            className="down-arow"
            sx={{ color: "white", fontSize: "2rem" }}
          />
        </Stack>
      ) : (
        ""
      )}
    </ListWrapper>
  );
};

export default CardList;
