import Wrapper from "../../components/Wrapper.component";

const FavoritePage = ({ handlePlayer, parentindex, parentActive,PlayingSongs}) => {
  return (
    <Wrapper
      handlePlayer={handlePlayer}
      parentindex={parentindex}
      parentActive={parentActive}
      FavoritePage={true}
      PlayingSongs={PlayingSongs}
    />
  );
};
export default FavoritePage;
