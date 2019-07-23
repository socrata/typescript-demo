import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { HandPropType } from "../propTypes";
import { playCard } from "../actions";
import { getHand } from "../selectors";

class Hand extends Component {
  static propTypes = {
    hand: HandPropType,
    index: PropTypes.number.isRequired,
    onPlayCard: PropTypes.func.isRequired
  };

  renderSuit = suit => {
    switch (suit) {
      case "diamonds":
        return "♦";
      case "spades":
        return "♠";
      case "hearts":
        return "♥";
      case "clovers":
        return "♣";
      default:
        return "?";
    }
  };

  render() {
    const { hand, index, onPlayCard } = this.props;

    return (
      <div>
        {hand.map((card, cardIndex) => (
          <button
            key={`${card.suit}-${card.rank}`}
            onClick={() => onPlayCard(index, cardIndex)}
          >
            {card.rank} {this.renderSuit(card.suit)}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  hand: getHand(state, ownProps.index)
});

const mapDispatchToProps = dispatch => ({
  onPlayCard: (index, cardIndex) => dispatch(playCard(index, cardIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hand);
