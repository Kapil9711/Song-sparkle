// *********************importing Section started*********************

import Card from "../card/Card.component";
import ListWrapper from "./Card-list.styles";

// *********************importing Section ended*********************

// *********************component Section started*********************

const CardList = ({ Songs, FavoritePage, ...restParams }) => {
  return (
    <ListWrapper>
      <h1
        className="favorite-heading"
        style={{
          display: FavoritePage ? "initial" : "none",
        }}
      >
        Favorite Songs List From All Users
      </h1>
      {Songs.map(({ id, ...othersParams }, i) => (
        <Card i={i} {...othersParams} {...restParams} key={id} id={id} />
      ))}
    </ListWrapper>
  );
};

// *********************component Section ended*********************

export default CardList;
