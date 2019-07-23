import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { HandPropType } from "../propTypes";
import { playCard } from "../actions";
import { getHand } from "../selectors";

class Hand extends Component {
  static propTypes = {
    // passed-in props //
    /** Index of this hand in the list of hands */
    index: PropTypes.number.isRequired,

    // mapStateToProps props //
    /** The actual hand */
    hand: HandPropType,

    // mapDispatchToProps props //
    /** Function to call to play a specific card */
    onPlayCard: PropTypes.func.isRequired
  };

  /** Render a span for the given suit */
  renderSuit = suit => {
    switch (suit) {
      case "diamonds":
        return <span className="suit red">♦</span>;
      case "spades":
        return <span className="suit black">♠</span>;
      case "hearts":
        return <span className="suit red">♥</span>;
      case "clovers":
        return <span className="suit black">♣</span>;
      default:
        return <span className="suit">?</span>;
    }
  };

  render() {
    const { hand, index, onPlayCard } = this.props;

    return (
      <div>
        {hand.map((card, cardIndex) => (
          <button
            className="card"
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
