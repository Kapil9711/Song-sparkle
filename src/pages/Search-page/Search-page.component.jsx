import Wrapper from "../../components/Wrapper.component";

const SearchPage = ({
  handlePlayer,
  parentindex,
  parentActive,
  PlayingSongs,
}) => {
  return (
    <Wrapper
      handlePlayer={handlePlayer}
      parentindex={parentindex}
      parentActive={parentActive}
      searchPage={true}
      PlayingSongs={PlayingSongs}
    />
  );
};
export default SearchPage;
