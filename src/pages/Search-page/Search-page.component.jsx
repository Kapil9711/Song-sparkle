import Wrapper from "../../components/Wrapper.component";

const SearchPage = ({
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
      searchPage={true}
      PlayingSongs={PlayingSongs}
      favoriteSongsId={favoriteSongsId}
      currentUser={currentUser}
    />
  );
};
export default SearchPage;
