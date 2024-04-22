import Wrapper from "../../components/Wrapper.component";

const FavoritePage = ({ handlePlayer, parentindex, parentActive }) => {
  return (
    <Wrapper
      handlePlayer={handlePlayer}
      parentindex={parentindex}
      parentActive={parentActive}
      FavoritePage={true}
    />
  );
};
export default FavoritePage;
