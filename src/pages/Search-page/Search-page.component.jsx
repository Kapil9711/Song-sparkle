import Wrapper from "../../components/Wrapper.component";

const SearchPage = ({ handlePlayer, parentindex, parentActive }) => {
  return (
    <Wrapper
      handlePlayer={handlePlayer}
      parentindex={parentindex}
      parentActive={parentActive}
      searchPage={true}
    />
  );
};
export default SearchPage;
