import React from "react";
import PropTypes from "prop-types";
// Styling
import "../styles/components/card.scss";

const Card = (props) => {

  const { suits, card, color } = props;

  const getSuitIcon = (suits) => {
    let icon;
    switch(suits) {
      case "Diamond":
        return "♦︎";
      case "Heart":
        return "♥︎";
      case "Club":
        return "♣︎";
      case "Spade":
        return "♠︎";
      default:
        return icon;
    };
  };

  const SuitIcon = getSuitIcon(suits);

  return (
      <div className="card-container" style={{ color: `${color}`}}>
          <div className="card-top">
            <span className="card-value">{card}</span>
            <span className="card-suit">{SuitIcon}</span>
          </div>
          <div className="card-center">{SuitIcon}</div>
          <div className="card-bottom">
            <span className="card-value">{card}</span>
            <span className="card-suit">{SuitIcon}</span>
          </div>
      </div> 
  );
  
};

Card.propTypes = {
  suits: PropTypes.string,
  card: PropTypes.string,
  color: PropTypes.string
};

export default Card;