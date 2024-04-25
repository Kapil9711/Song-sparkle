// *************************importing section started *******************

import { DownloadBtn, FavoriteBtn } from "./Buttons.component";
import {
  createDownloadLink,
  changeFavorite,
} from "../../assets/Utility/Utility.components";
import CardWrapper from "./card.styled";
import MediaContent from "./MediaContent.component";

// *************************importing section ended *******************

// *************************component section started *******************

const Card = ({
  title,
  id,
  active,
  FavoriteSongs,
  hanldeFavoriteSongs,
  url,
  handleIndexAndActive,
  currentUser,
  usernames,

  ...restParams
}) => {
  //adding or removing fav from db
  const handleFavorite = async () => {
    await changeFavorite(id, FavoriteSongs.includes(id), currentUser);
    await hanldeFavoriteSongs();
  };
  console.log(usernames);

  return (
    <CardWrapper
      className={active === id ? "gradient" : ""}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <MediaContent
        usernames={usernames}
        title={title}
        id={id}
        active={active}
        {...restParams}
        url={url}
        handleIndexAndActive={handleIndexAndActive}
      />
      <p style={{ color: "white", fontSize: "8px", marginRight: "-14px" }}>
        {usernames.length ? usernames[FavoriteSongs.indexOf(id)] : ""}
      </p>
      <FavoriteBtn
        handleFavorite={handleFavorite}
        FavoriteSongs={FavoriteSongs}
        id={id}
      />

      <DownloadBtn
        createDownloadLink={createDownloadLink}
        title={title}
        url={url}
      />
    </CardWrapper>
  );
};

// *************************component section ended *******************

export default Card;
