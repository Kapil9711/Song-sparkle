import Wrapper from "../../components/Wrapper.component";

const SearchPage = ({
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
      searchPage={true}
      PlayingSongs={PlayingSongs}
      favoriteSongsId={favoriteSongsId}
    />
  );
};
export default SearchPage;
