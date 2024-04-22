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

  ...restParams
}) => {
  //adding or removing fav from db
  const handleFavorite = async () => {
    await changeFavorite(id, FavoriteSongs.includes(id));
    await hanldeFavoriteSongs();
  };
  return (
    <CardWrapper
      className={active === id ? "gradient" : ""}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <MediaContent
        title={title}
        id={id}
        active={active}
        {...restParams}
        url={url}
        handleIndexAndActive={handleIndexAndActive}
      />
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
