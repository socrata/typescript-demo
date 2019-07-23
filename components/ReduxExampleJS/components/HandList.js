import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getHands } from "../selectors";
import { dealHand } from "../actions";
import Hand from "./Hand";

/** Renders a list of all the hands */
class HandList extends Component {
  static propTypes = {
    // mapStateToProps props //
    /** List of every hand */
    hands: PropTypes.array.isRequired, // we can use "arrayOf" here but that doesn't offer us much

    // mapDispatchToProps props //
    /** Function to call to deal a new hand */
    onDealHand: PropTypes.func.isRequired // what kind of func? what are its parameters? what does it return?
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
