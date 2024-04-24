import React from "react";
import ListWrapper from "./mediator.styles";
import Card from "../card/Card.component";
import BackgroundImage from "../BackgroundImage/background-image";

class Mediator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props = props;
  }

  handleIndexAndActive = (id, i) => {
    this.props.handlePlayer(i, this.props.Songs, id);
  };

  render() {
    const { Songs, PlayingSongs, parentindex, parentActive } = this.props;
    let image;
    image = Songs[parentindex]?.image;
    if (PlayingSongs.length) image = PlayingSongs[parentindex]?.image;
    return (
      <>
        {image ? (
          <BackgroundImage image={image} parentActive={parentActive} />
        ) : (
          ""
        )}
        <ListWrapper>
          <h1
            className="favorite-heading"
            style={{
              display: this.props.FavoritePage ? "initial" : "none",
            }}
          >
            Favorite Songs List From All Users
          </h1>
          {Songs.map(({ id, ...othersParams }, i) => (
            <Card
              active={parentActive}
              handleIndexAndActive={this.handleIndexAndActive}
              i={i}
              {...othersParams}
              {...this.props}
              key={id + i}
              id={id}
            />
          ))}
        </ListWrapper>
      </>
    );
  }
}

export default Mediator;
