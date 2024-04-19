import Card from "../card/Card.component";
import styled from "styled-components";
import { Stack, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (min-width: 776px) {
    gap: 6px;
  }

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
      transform: scale(0.9);
    }
  }
`;

const CardList = ({
  Songs,
  handleClick,
  active,
  handleMore,
  page,
  liveSongs,
  FavoriteSongs,
  hanldeFavoriteSongs,
  FavoritePage,
}) => {
  return (
    <ListWrapper>
      <h1
        style={{
          display: FavoritePage ? "initial" : "none",
          color: "white",
          textAlign: "center",
          marginBottom: "30px",
          fontSize: "1.3rem",
        }}
      >
        Favorite Songs List From All Users
      </h1>
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
          FavoriteSongs={FavoriteSongs}
          hanldeFavoriteSongs={hanldeFavoriteSongs}
        />
      ))}
      {/* {page <= 3 && !liveSongs.length ? (
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
      )} */}
    </ListWrapper>
  );
};

export default CardList;
