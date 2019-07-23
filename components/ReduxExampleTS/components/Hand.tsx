import React, { Component } from "react";
import { connect, Dispatch } from "react-redux";

import { playCard, PlayCardAction, ActionTypes } from "../actions";
import { getHand } from "../selectors";
import { Card, Suit, State } from "../types";

interface OwnProps {
  /** Index of this hand in the list of hands */
  index: number;
}

interface StateProps {
  hand: Card[];
}

interface DispatchProps {
  onPlayCard: (index: number, cardIndex: number) => PlayCardAction;
}

type Props = OwnProps & StateProps & DispatchProps;

class Hand extends Component<Props> {
  /** Render a span for the given suit */
  renderSuit = (suit: Suit): JSX.Element => {
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

const mapStateToProps = (state: State, ownProps: OwnProps): StateProps => ({
  hand: getHand(state, ownProps.index)
});

const mapDispatchToProps = (
  dispatch: Dispatch<ActionTypes>
): DispatchProps => ({
  onPlayCard: (index: number, cardIndex: number) =>
    dispatch(playCard(index, cardIndex))
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Hand);
