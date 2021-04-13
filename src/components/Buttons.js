import React from "react";
import PropTypes from "prop-types";

const Buttons = (props) => {
  return (
    <div className="btn-wrapper">
      <button className={props.state.length === 52 ? "btn shuffle" : "hide"} onClick={() => props.shuffle(props.state)}>Shuffle</button>
      <button className={props.state.length !== 52 ? "btn reset" : "hide"} onClick={() => props.reset()}>Restart Deck</button>
      <button className={props.state.length !== 0 ? "btn deal" : "hide"} onClick={() => props.dealCard()}>Deal card</button>
    </div>
  );
};

Buttons.propTypes = {
  state: PropTypes.array,
  shuffle: PropTypes.func,
  dealCard: PropTypes.func,
  reset: PropTypes.func
};

export default Buttons;