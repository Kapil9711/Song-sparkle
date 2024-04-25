import Wrapper from "../../components/Wrapper.component";

const FavoritePage = ({
  handlePlayer,
  parentindex,
  parentActive,
  PlayingSongs,
  favoriteSongsId,
}) => {
  return (
    <Wrapper
      handlePlayer={handlePlayer}
      parentindex={parentindex}
      parentActive={parentActive}
      FavoritePage={true}
      PlayingSongs={PlayingSongs}
      favoriteSongsId={favoriteSongsId}
    />
  );
};
export default FavoritePage;
