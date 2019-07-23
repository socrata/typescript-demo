import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { reshuffleDiscardPile } from "../actions";

import {
  getNumberOfCardsInDeck,
  getNumberOfCardsInDiscardPile
} from "../selectors";

/** Renders info about the deck and discard pile */
class Deck extends Component {
  static propTypes = {
    // props from mapStateToProps //
    /** Total number of cards left in the deck */
    numberOfCardsInDeck: PropTypes.number.isRequired,

    /** Total number of cards in the discard pile */
    numberOfCardsInDiscardPile: PropTypes.number.isRequired,

    // props from mapDispatchToProps //
    /** Function to call to reshuffle the discard pile back into the deck */
    onReshuffleDiscardPile: PropTypes.func.isRequired
  };

  render() {
    const {
      numberOfCardsInDeck,
      numberOfCardsInDiscardPile,
      onReshuffleDiscardPile
    } = this.props;
    return (
      <div>
        <div>Number of cards left in deck: {numberOfCardsInDeck}</div>
        <div>
          Number of cards in discard pile: {numberOfCardsInDiscardPile}{" "}
          <button onClick={() => onReshuffleDiscardPile()}>Reshuffle</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numberOfCardsInDeck: getNumberOfCardsInDeck(state),
  numberOfCardsInDiscardPile: getNumberOfCardsInDiscardPile(state)
});

const mapDispatchToProps = dispatch => ({
  onReshuffleDiscardPile: () => dispatch(reshuffleDiscardPile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
