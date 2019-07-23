import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import {
  getNumberOfCardsInDeck,
  getNumberOfCardsInDiscardPile
} from "../selectors";

class Deck extends Component {
  static propTypes = {
    numberOfCardsInDeck: PropTypes.number.isRequired,
    numberOfCardsInDiscardPile: PropTypes.number.isRequired
  };

  render() {
    const { numberOfCardsInDeck, numberOfCardsInDiscardPile } = this.props;
    return (
      <div>
        <div>Number of cards left in deck: {numberOfCardsInDeck}</div>
        <div>Number of cards in discard pile: {numberOfCardsInDiscardPile}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  numberOfCardsInDeck: getNumberOfCardsInDeck(state),
  numberOfCardsInDiscardPile: getNumberOfCardsInDiscardPile(state)
});

export default connect(mapStateToProps)(Deck);
