// *********************importing Section started*********************
import Mediator from "../mediator/mediator.component";

// *********************importing Section ended*********************

// *********************component Section started*********************

const CardList = ({ ...restParams }) => {
  return (
    <>
      {/* <ListWrapper>
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
      </ListWrapper> */}
      <Mediator {...restParams} />
    </>
  );
};

// *********************component Section ended*********************

export default CardList;
