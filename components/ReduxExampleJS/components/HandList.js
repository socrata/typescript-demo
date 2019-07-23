import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getHands } from "../selectors";
import { dealHand } from "../actions";
import Hand from "./Hand";

class HandList extends Component {
  static propTypes = {
    // we can use "arrayOf" here but that doesn't offer us much
    hands: PropTypes.array.isRequired,

    // what kind of func? what are its parameters? what does it return?
    onDealHand: PropTypes.func.isRequired
  };

  render() {
    const { hands, onDealHand } = this.props;

    return (
      <div>
        {hands.map((hand, index) => {
          return <Hand key={`hand-${index}`} hand={hand} index={index} />;
        })}
        <button disabled={hands.length >= 5} onClick={() => onDealHand()}>
          Deal Hand
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hands: getHands(state)
});

const mapDispatchToProps = dispatch => ({
  onDealHand: () => dispatch(dealHand())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandList);
