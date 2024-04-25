import Wrapper from "../../components/Wrapper.component";

const FavoritePage = ({
  handlePlayer,
  parentindex,
  parentActive,
  PlayingSongs,
  favoriteSongsId,
  currentUser,
}) => {
  return (
    <Wrapper
      handlePlayer={handlePlayer}
      parentindex={parentindex}
      parentActive={parentActive}
      FavoritePage={true}
      PlayingSongs={PlayingSongs}
      favoriteSongsId={favoriteSongsId}
      currentUser={currentUser}
    />
  );
};
export default FavoritePage;
